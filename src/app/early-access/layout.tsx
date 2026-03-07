import type { Metadata } from "next";
import { BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get Early Access to the Restoration Preview Tool | Artecho AI",
  description:
    "Join the Artecho AI early access pilot for museums and research teams. Try our restoration preview tool for brushstroke-aware conservation documentation.",
  keywords: [
    "early access",
    "restoration preview tool",
    "pilot for museums",
    "Artecho AI",
  ],
  alternates: { canonical: `${BASE_URL}/early-access` },
  openGraph: {
    title: "Get Early Access to the Restoration Preview Tool | Artecho AI",
    description: "Join the Artecho AI early access pilot for museums and research teams. Try our restoration preview tool.",
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
