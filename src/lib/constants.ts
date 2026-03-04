// Replace with your actual production URL before deployment
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://artifex.example.com';

// Replace with your actual Google Form URL
export const FORM_URL = process.env.NEXT_PUBLIC_FORM_URL || 'https://docs.google.com/forms/d/e/FORM_URL/viewform?embedded=true';

export const SITE_NAME = 'ARTIFEX';
export const SITE_DESCRIPTION = 'Brushstroke-aware restoration previews for damaged paintings.';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/casebook', label: 'Casebook' },
  { href: '/early-access', label: 'Early Access' },
  { href: '/about', label: 'About' },
] as const;
