import type { Metadata } from "next";
import { BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Art Restoration Preview Casebook — Before and After Examples | Artecho AI",
  description:
    "Browse the Artecho AI art restoration preview casebook — before and after examples of damaged artworks including paint loss, cracking, and flaking, restored with brushstroke-aware inpainting.",
  keywords: [
    "art restoration preview casebook",
    "before and after restoration",
    "damaged artworks",
    "restoration examples",
  ],
  alternates: { canonical: `${BASE_URL}/casebook` },
  openGraph: {
    title: "Art Restoration Preview Casebook | Artecho AI",
    description:
      "Before and after restoration examples for damaged artworks — paint loss, cracking, and flaking cases handled with brushstroke-aware inpainting.",
    url: `${BASE_URL}/casebook`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Art Restoration Preview Casebook | Artecho AI",
  },
};

export default function CasebookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
