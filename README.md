# Artecho AI — Marketing Microsite

> Brushstroke-aware restoration previews for damaged paintings.

A production-quality Next.js marketing microsite built with TypeScript, Tailwind CSS, and the App Router. Designed for a university digital marketing coursework submission with strong on-page SEO, internal linking, email capture, and evidence-friendly workflows.

---

## Quick Start

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env.local` file in the project root (or set these in your shell):

```bash
# Your production domain (used for canonical URLs, sitemap, OG tags)
NEXT_PUBLIC_BASE_URL=https://artecho-ai.vercel.app

# Your Google Form embed URL
NEXT_PUBLIC_FORM_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true
```

**To set BASE_URL:** Replace `https://artecho-ai.vercel.app` with your actual deployment URL (e.g., `https://artecho-ai.vercel.app`).

**To set FORM_URL:** Create a Google Form, click "Send" → "Embed", and copy the `src` URL from the iframe snippet.

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (Header, Footer, JSON-LD)
│   ├── page.tsx                # Home page
│   ├── globals.css             # Tailwind + custom theme
│   ├── sitemap.ts              # Dynamic sitemap.xml
│   ├── robots.ts               # robots.txt
│   ├── how-it-works/
│   │   └── page.tsx            # How It Works page
│   ├── casebook/
│   │   └── page.tsx            # Casebook page
│   ├── early-access/
│   │   ├── layout.tsx          # Metadata (client page can't export)
│   │   └── page.tsx            # Early Access page
│   ├── about/
│   │   └── page.tsx            # About + FAQ page
│   └── api/
│       └── lead/
│           └── route.ts        # Fallback lead capture API
├── components/
│   ├── Header.tsx              # Sticky nav with mobile menu
│   ├── Footer.tsx              # Footer with links + trust line
│   ├── Button.tsx              # Primary/secondary CTA button
│   ├── Card.tsx                # Reusable content card
│   └── JsonLd.tsx              # JSON-LD structured data injector
└── lib/
    └── constants.ts            # BASE_URL, FORM_URL, NAV_LINKS

public/
├── og.svg                      # OpenGraph image placeholder
└── casebook/                   # Casebook SVG placeholders
    ├── case1-before.svg
    ├── case1-mask.svg
    ├── case1-preview.svg
    ├── case2-before.svg
    ├── case2-mask.svg
    ├── case2-preview.svg
    ├── case3-before.svg
    ├── case3-mask.svg
    └── case3-preview.svg

e2e/
└── evidence.spec.ts            # Playwright evidence screenshot script

evidence/                       # Generated screenshots (git-ignored)
├── before/
└── after/
```

---

## Pages

| Route           | Page                         | Primary Keyword                       |
| --------------- | ---------------------------- | ------------------------------------- |
| `/`             | Home                         | brushstroke-aware restoration preview |
| `/how-it-works` | How It Works                 | digital painting restoration workflow |
| `/casebook`     | Casebook                     | —                                     |
| `/early-access` | Early Access (email capture) | —                                     |
| `/about`        | About + FAQ                  | —                                     |

---

## SEO Features

- **Per-page metadata**: title, description, keywords, canonical URL, OpenGraph, Twitter card
- **robots.txt**: Generated from `src/app/robots.ts`
- **sitemap.xml**: Generated from `src/app/sitemap.ts` covering all 5 routes
- **JSON-LD**: Organization + WebSite (global), WebPage (per page), FAQPage (About)
- **Heading hierarchy**: One H1 per page, proper H2/H3 structure
- **SEO change logs**: Visible `<details>` sections on Home and How It Works pages explaining keyword optimisation
- **Internal linking**: Nav links, footer links, and contextual in-content links between pages

---

## Evidence Workflow (Before/After Screenshots)

The project includes a Playwright-based evidence workflow to produce full-page screenshots of each route — useful for demonstrating before/after SEO changes.

### How to generate evidence

#### Step 1: Capture "before" screenshots

```bash
# Make sure you have Playwright browsers installed
npx playwright install chromium

# Run the before evidence capture
npm run evidence:before
```

This starts the dev server, visits all 5 routes, and saves full-page screenshots to `evidence/before/`.

#### Step 2: Make your optimisation changes

Edit your pages, commit with a descriptive message:

```bash
git add .
git commit -m "seo: before optimisation baseline"

# ... make changes ...

git add .
git commit -m "seo: after optimisation — added keywords and meta descriptions"
```

#### Step 3: Capture "after" screenshots

```bash
npm run evidence:after
```

Screenshots are saved to `evidence/after/`.

#### Step 4: Compare

Your `evidence/` folder now contains:

```
evidence/
├── before/
│   ├── home.png
│   ├── how-it-works.png
│   ├── casebook.png
│   ├── early-access.png
│   └── about.png
└── after/
    ├── home.png
    ├── how-it-works.png
    ├── casebook.png
    ├── early-access.png
    └── about.png
```

### Tagging commits for evidence

```bash
# Tag the pre-optimisation state
git tag evidence/before

# Make optimisation changes, then tag again
git tag evidence/after
```

---

## Email Capture

### Primary: Google Form embed

The Early Access page embeds a Google Form iframe at the very top. Set `NEXT_PUBLIC_FORM_URL` in `.env.local` to your form URL.

### Fallback: HTML form → API route

A secondary HTML form on the same page posts to `/api/lead`. The API:

- Validates the email address
- Logs the lead to the server console
- Returns a JSON success/error response

---

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **ESLint**
- **Playwright** (evidence screenshots)

---

## License

This project is for educational / coursework purposes.
