import type { Metadata } from "next";
import { BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get Early Access — ARTIFEX",
  description:
    "Sign up for ARTIFEX early access. Share your email and use case to join the pilot programme for museums and research teams.",
  alternates: { canonical: `${BASE_URL}/early-access` },
  openGraph: {
    title: "Get Early Access | ARTIFEX",
    description: "Join the ARTIFEX pilot for museums and research teams.",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "ARTIFEX" }],
  },
  twitter: { card: "summary_large_image", title: "Get Early Access | ARTIFEX" },
};

export default function EarlyAccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
