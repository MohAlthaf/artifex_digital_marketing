import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Callout from "@/components/Callout";
import Pill from "@/components/Pill";
import FeatureGrid from "@/components/FeatureGrid";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Brushstroke-Aware Art Restoration Previews | Artecho AI",
  description:
    "Artecho AI generates brushstroke-aware restoration previews for damaged paintings. Fast, believable visuals for museum digitisation teams — triage, planning, and documentation.",
  keywords: [
    "brushstroke-aware restoration preview",
    "art restoration preview",
    "painting restoration tool",
    "museum digitisation",
    "conservation documentation",
  ],
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "Brushstroke-Aware Art Restoration Previews | Artecho AI",
    description:
      "Artecho AI generates brushstroke-aware restoration previews for damaged paintings. Fast, believable visuals for museum digitisation teams.",
    url: BASE_URL,
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artecho AI — Brushstroke-Aware Restoration Previews",
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Artecho AI — Brushstroke-Aware Art Restoration Previews",
  description:
    "Artecho AI generates brushstroke-aware restoration previews for damaged paintings. Fast, believable visuals for museum digitisation teams.",
  url: BASE_URL,
};

const valuePillars = [
  {
    symbol: "I",
    title: "Brushstroke-aware inpainting",
    description:
      "Filled regions match the surrounding stroke rhythm, direction, and texture — not flat, artificial fills.",
  },
  {
    symbol: "II",
    title: "Minutes, not days",
    description:
      "Generate restoration previews fast so teams can triage and plan without waiting for manual mock-ups.",
  },
  {
    symbol: "III",
    title: "Non-destructive + exportable",
    description:
      "Artecho AI generates previews without altering the source. Before/after exports are ready for reports and archives.",
  },
];

const audienceItems = [
  {
    title: "Museums & Galleries",
    description:
      "Digitisation teams that need quick visual assessments of damaged artworks before committing to full conservation projects.",
  },
  {
    title: "Heritage Laboratories",
    description:
      "Research labs that require consistent documentation of damage patterns and potential restoration approaches.",
  },
  {
    title: "Conservation Educators",
    description:
      "Teaching professionals who want to demonstrate restoration concepts with realistic previews in classroom settings.",
  },
];

const workflowSteps = [
  {
    step: "01",
    label: "Upload",
    desc: "Upload your high-resolution artwork image",
  },
  {
    step: "02",
    label: "Mask",
    desc: "Define the damaged regions with a paint mask",
  },
  {
    step: "03",
    label: "Preview",
    desc: "Generate brushstroke-aware restoration preview",
  },
  {
    step: "04",
    label: "Export",
    desc: "Export before/after for reports and archives",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden hero-gradient noise-texture">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent2/5 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Pill className="mb-6">Preview &amp; Documentation Tool</Pill>
              <h1 className="mb-6 text-text">
                Brushstroke-aware art restoration previews in minutes
              </h1>
              <p className="text-[1.0625rem] text-text-secondary leading-relaxed mb-8 max-w-[520px]">
                Artecho AI generates restoration previews that respect
                brushstroke flow and texture. Built for digitisation teams who
                need fast, believable visuals for triage, planning, and
                documentation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/early-access">Get Early Access</Button>
                <Button href="/casebook" variant="secondary">
                  See Casebook
                </Button>
              </div>
              <p className="mt-8 text-xs text-muted flex items-center gap-2">
                <span
                  className="inline-block w-1 h-1 rounded-full bg-accent/50"
                  aria-hidden="true"
                />
                Preview tool — not a replacement for expert conservators
              </p>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full max-w-[480px] rounded-2xl border border-border bg-surface/80 shadow-[var(--shadow-lg)] overflow-hidden backdrop-blur-sm">
                <Image
                  src="/assets/illustrations/workflow.svg"
                  alt="Artecho AI five-step restoration workflow: upload, mask, generate, review, export"
                  width={480}
                  height={395}
                  priority
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Trust strip ─── */}
      <div className="border-y border-border-light bg-surface-warm py-4">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {[
              "Designed for preview & documentation",
              "Non-destructive workflow",
              "Export-ready for conservation reports",
              "Brushstroke-aware inpainting",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-xs text-muted font-medium"
              >
                <span
                  className="w-1 h-1 rounded-full bg-accent/50 shrink-0"
                  aria-hidden="true"
                />
                {item}
              </span>
            ))}
          </div>
        </Container>
      </div>

      {/* ─── 3 Value Pillars ─── */}
      <Section>
        <div className="mb-10 max-w-xl">
          <Pill className="mb-4">Why Artecho AI</Pill>
          <h2 className="text-text">Three reasons teams choose Artecho AI</h2>
        </div>
        <FeatureGrid items={valuePillars} columns={3} />
      </Section>

      {/* ─── Who it's for ─── */}
      <Section surface divider>
        <div className="mb-10 max-w-xl">
          <Pill className="mb-4">Audience</Pill>
          <h2 className="text-text">Who it&apos;s for</h2>
          <p className="mt-3 text-text-secondary max-w-lg">
            Artecho AI is built specifically for teams who work with damaged
            artworks at scale.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {audienceItems.map((item) => (
            <Card key={item.title} title={item.title} accent>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── How it works (short) ─── */}
      <Section divider>
        <div className="mb-10 max-w-xl">
          <Pill className="mb-4">Workflow</Pill>
          <h2 className="text-text">How it works</h2>
          <p className="mt-3 text-text-secondary max-w-lg">
            Four steps from upload to polished documentation-ready output.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {workflowSteps.map((item) => (
            <div
              key={item.step}
              className="bg-surface border border-border rounded-2xl p-5 text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-md)] transition-all duration-200"
            >
              <span className="block text-[0.65rem] font-bold tracking-widest text-accent/60 mb-2 uppercase">
                Step {item.step}
              </span>
              <p className="font-semibold text-sm text-text mb-1">
                {item.label}
              </p>
              <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <Button href="/how-it-works" variant="ghost">
          See full workflow →
        </Button>
      </Section>

      {/* ─── Trust callout ─── */}
      <Section surface>
        <Callout variant="trust">
          <p className="font-semibold text-text mb-2 text-[1rem]">
            Preview and documentation tool, not a replacement for conservators
          </p>
          <p>
            Artecho AI is designed to help museum and heritage teams visualise
            potential outcomes quickly. The final restoration always requires
            expert hands. We built Artecho AI to give those hands better
            information.
          </p>
        </Callout>
      </Section>

      {/* ─── Mini casebook teaser ─── */}
      <Section divider>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <div>
            <Pill className="mb-4">Casebook</Pill>
            <h2 className="text-text mb-0">From the casebook</h2>
          </div>
          <Button href="/casebook" variant="ghost">
            View all cases →
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              src: "/assets/casebook/preview-1.svg",
              label: "Central paint loss",
              alt: "Case 1 restoration preview — oil painting with central paint loss",
              type: "Paint Loss",
            },
            {
              src: "/assets/casebook/preview-2.svg",
              label: "Network cracking",
              alt: "Case 2 restoration preview — landscape with network cracking",
              type: "Cracking",
            },
            {
              src: "/assets/casebook/preview-3.svg",
              label: "Edge flaking",
              alt: "Case 3 restoration preview — portrait with edge flaking",
              type: "Flaking",
            },
          ].map((c) => (
            <Link href="/casebook" key={c.label} className="group block">
              <div className="bg-surface border border-border rounded-2xl overflow-hidden shadow-[var(--shadow-card)] transition-all duration-250 group-hover:shadow-[var(--shadow-lift)] group-hover:-translate-y-0.5">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={c.src}
                    alt={c.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-text">{c.label}</p>
                  <span className="text-[0.65rem] font-semibold tracking-widest text-accent uppercase bg-accent-light px-2 py-0.5 rounded-full">
                    {c.type}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ─── Final CTA ─── */}
      <section className="bg-surface-dark py-20 sm:py-24 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/8 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <Container className="relative z-10 text-center">
          <p className="text-[0.7rem] font-bold tracking-widest uppercase text-accent/80 mb-4">
            Early Access Programme
          </p>
          <h2 className="text-white mb-5 max-w-xl mx-auto">
            Ready to see your paintings differently?
          </h2>
          <p className="text-white/50 max-w-lg mx-auto mb-8 text-[1rem] leading-relaxed">
            Join museums and research teams already testing brushstroke-aware
            restoration previews with their collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/early-access">Get Early Access</Button>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center px-7 py-3 rounded-xl text-[0.9375rem] font-semibold border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all duration-150"
            >
              Learn how it works
            </Link>
          </div>
        </Container>
      </section>

      {/* ─── Contextual links ─── */}
      <Section tight>
        <p className="text-sm text-muted text-center">
          Learn more about the{" "}
          <Link
            href="/how-it-works"
            className="text-accent hover:text-accent-hover underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            restoration workflow
          </Link>
          , explore the{" "}
          <Link
            href="/casebook"
            className="text-accent hover:text-accent-hover underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            casebook
          </Link>
          , or{" "}
          <Link
            href="/early-access"
            className="text-accent hover:text-accent-hover underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            join early access
          </Link>
          .
        </p>
      </Section>

      {/* ─── SEO Change Log ─── */}
      <Container className="pb-12">
        <details className="text-xs text-muted border border-border-light rounded-xl p-4">
          <summary className="cursor-pointer font-semibold">
            SEO Change Log — Home Page
          </summary>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>
              <strong>Primary keyword:</strong> &quot;brushstroke-aware
              restoration preview&quot; — placed in H1, meta title, meta
              description, intro paragraph, and JSON-LD.
            </li>
            <li>
              <strong>Title tag:</strong> Includes primary keyword and brand
              name, under 60 characters.
            </li>
            <li>
              <strong>Meta description:</strong> Action-oriented, includes
              keyword, under 155 characters.
            </li>
            <li>
              <strong>H1:</strong> Single H1, keyword-rich, describes the core
              value proposition.
            </li>
            <li>
              <strong>Internal links:</strong> Contextual links to
              /how-it-works, /casebook, /early-access improve crawlability and
              distribute link equity.
            </li>
            <li>
              <strong>Structured data:</strong> WebPage JSON-LD added for rich
              snippet eligibility.
            </li>
            <li>
              <strong>OpenGraph &amp; Twitter cards:</strong> Configured for
              social sharing previews.
            </li>
            <li>
              <strong>Canonical URL:</strong> Set to prevent duplicate content
              issues.
            </li>
          </ul>
        </details>
      </Container>
    </>
  );
}
