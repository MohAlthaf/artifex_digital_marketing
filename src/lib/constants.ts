// Replace with your actual production URL before deployment
export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://artecho-ai.vercel.app";

// Google Form — short link for direct navigation and iframe src.
// For a cleaner embed (no Google header chrome), replace with the
// "?embedded=true" URL from Google Forms → Send → Embed.
export const FORM_URL =
  process.env.NEXT_PUBLIC_FORM_URL || "https://docs.google.com/forms/d/e/1FAIpQLSc_6CK_2mC4JjgnVVtCR-VD7AmQlKNCHLSF-233cnkRm_-xtg/viewform?embedded=true";

export const SITE_NAME = "Artecho AI";
export const SITE_DESCRIPTION =
  "Brushstroke-aware restoration previews for damaged paintings.";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/casebook", label: "Casebook" },
  // { href: "/early-access", label: "Early Access" },
  { href: "/about", label: "About" },
] as const;
