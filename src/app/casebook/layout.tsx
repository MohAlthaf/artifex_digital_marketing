import type { Metadata } from "next";
import { BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Casebook — Before & After Restoration Previews",
  description:
    "Explore ARTIFEX casebook examples showing before and after restoration previews for common painting damage types including flaking, cracking, and missing regions.",
  alternates: { canonical: `${BASE_URL}/casebook` },
  openGraph: {
    title: "Casebook — Before & After Restoration Previews | ARTIFEX",
    description:
      "See how ARTIFEX handles common damage types with brushstroke-aware restoration previews.",
    url: `${BASE_URL}/casebook`,
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "ARTIFEX" }],
  },
  twitter: { card: "summary_large_image", title: "Casebook | ARTIFEX" },
};

export default function CasebookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
