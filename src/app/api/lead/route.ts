import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Simple in-memory rate limiter: max 5 submissions per IP per minute
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  try {
    // Basic rate limiting by IP
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const { email, message, website, utm_source, utm_medium, utm_campaign } =
      body;

    // Honeypot check — if the hidden field has a value, silently accept
    if (website) {
      return NextResponse.json({
        message:
          "Thank you for your interest! We will send onboarding details to your email shortly.",
      });
    }

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 254) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    // Validate message length
    const safeMessage =
      typeof message === "string" ? message.slice(0, 2000) : "";

    // Build lead record
    const lead = {
      email,
      message: safeMessage || "",
      utm_source:
        typeof utm_source === "string" ? utm_source.slice(0, 100) : "",
      utm_medium:
        typeof utm_medium === "string" ? utm_medium.slice(0, 100) : "",
      utm_campaign:
        typeof utm_campaign === "string" ? utm_campaign.slice(0, 100) : "",
      submitted_at: new Date().toISOString(),
    };

    // Persist lead to a local JSON-lines file (works on Vercel + local dev)
    // For production at scale, replace this with Resend, Airtable, or a DB write.
    try {
      const leadsDir = path.join(process.cwd(), "data");
      await fs.mkdir(leadsDir, { recursive: true });
      const leadsFile = path.join(leadsDir, "leads.jsonl");
      await fs.appendFile(leadsFile, JSON.stringify(lead) + "\n", "utf-8");
    } catch {
      // File write failed — log without PII and continue
      console.error("Failed to persist lead to file.");
    }

    // Non-PII confirmation log
    console.log(`New lead captured at ${lead.submitted_at}`);

    return NextResponse.json({
      message:
        "Thank you for your interest! We will send onboarding details to your email shortly.",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }
}
