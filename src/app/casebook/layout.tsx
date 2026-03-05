import type { Metadata } from "next";
import { BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Casebook — Before & After Restoration Previews",
  description:
    "Explore Artecho AI casebook examples showing before and after restoration previews for common painting damage types including flaking, cracking, and missing regions.",
  alternates: { canonical: `${BASE_URL}/casebook` },
  openGraph: {
    title: "Casebook — Before & After Restoration Previews | Artecho AI",
    description:
      "See how Artecho AI handles common damage types with brushstroke-aware restoration previews.",
    url: `${BASE_URL}/casebook`,
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Artecho AI" }],
  },
  twitter: { card: "summary_large_image", title: "Casebook | Artecho AI" },
};

export default function CasebookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
