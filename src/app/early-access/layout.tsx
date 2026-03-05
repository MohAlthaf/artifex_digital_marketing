import type { Metadata } from "next";
import { BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get Early Access — Artecho AI",
  description:
    "Sign up for Artecho AI early access. Share your email and use case to join the pilot programme for museums and research teams.",
  alternates: { canonical: `${BASE_URL}/early-access` },
  openGraph: {
    title: "Get Early Access | Artecho AI",
    description: "Join the Artecho AI pilot for museums and research teams.",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Artecho AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Early Access | Artecho AI",
  },
};

export default function EarlyAccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
