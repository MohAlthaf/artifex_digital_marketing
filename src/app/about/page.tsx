import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Pill from "@/components/Pill";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About ARTIFEX — Brushstroke-Aware Restoration Previews",
  description:
    "Learn about ARTIFEX, the brushstroke-aware restoration preview tool for museums, heritage labs, and conservation educators. FAQ and contact information.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About ARTIFEX",
    description:
      "Learn about ARTIFEX — the brushstroke-aware restoration preview tool for museums and heritage teams.",
    url: `${BASE_URL}/about`,
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: { card: "summary_large_image", title: "About ARTIFEX" },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "About ARTIFEX",
  description:
    "ARTIFEX is a brushstroke-aware restoration preview tool for museums and heritage teams.",
  url: `${BASE_URL}/about`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is ARTIFEX a replacement for conservators?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. ARTIFEX is a preview and documentation tool. It generates visual previews of potential restoration outcomes to help with triage and planning. Final restoration decisions should always be made by qualified conservators.",
      },
    },
    {
      "@type": "Question",
      name: "What inputs does ARTIFEX require?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ARTIFEX requires two inputs: a high-resolution image of the artwork and a damage mask that defines the regions to be previewed.",
      },
    },
    {
      "@type": "Question",
      name: "What does ARTIFEX output?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ARTIFEX generates a restoration preview image and optional notes. The preview shows the artwork with damaged areas filled using brushstroke-aware inpainting. Outputs can be exported for documentation and reporting.",
      },
    },
    {
      "@type": "Question",
      name: "Is ARTIFEX available as a pilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ARTIFEX is currently in early-access pilot mode for museums, heritage labs, and research teams.",
      },
    },
  ],
};

const faqs = [
  {
    q: "Is ARTIFEX a replacement for conservators?",
    a: "No. ARTIFEX is a preview and documentation tool. It generates visual previews of potential restoration outcomes to help with triage and planning. Final restoration decisions should always be made by qualified conservators.",
  },
  {
    q: "What inputs does ARTIFEX require?",
    a: "ARTIFEX requires two inputs: a high-resolution image of the artwork and a damage mask that defines the regions to be previewed. The mask can be created using standard image editing tools or ARTIFEX's built-in masking interface.",
  },
  {
    q: "What does ARTIFEX output?",
    a: "ARTIFEX generates a restoration preview image and optional notes. The preview shows the artwork with damaged areas filled using brushstroke-aware inpainting. Outputs can be exported for documentation and reporting.",
  },
  {
    q: "Is ARTIFEX available as a pilot?",
    a: "Yes. ARTIFEX is currently in early-access pilot mode for museums, heritage labs, and research teams. You can apply for access through our early access page.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden hero-gradient noise-texture">
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <Container className="relative z-10 pt-20 pb-20 sm:pt-28 sm:pb-24">
          <Pill className="mb-5">About</Pill>
          <h1 className="max-w-xl mb-5">About ARTIFEX</h1>
          <p className="text-[1.0625rem] text-text-secondary leading-relaxed max-w-[520px]">
            Brushstroke-aware restoration previews for museum digitisation,
            heritage labs, and conservation educators.
          </p>
        </Container>
      </section>

      {/* ─── About body ─── */}
      <Section>
        <div className="max-w-2xl">
          <p className="text-lg text-text-secondary leading-relaxed mb-5">
            ARTIFEX is a brushstroke-aware restoration preview tool designed for
            museum digitisation teams, heritage laboratories, and conservation
            educators. It generates believable restoration previews that respect
            the stroke rhythm, texture, and style of damaged paintings — helping
            teams plan, document, and communicate conservation needs faster.
          </p>
          <p className="text-base text-text-secondary leading-relaxed">
            Built on research in computational art analysis, ARTIFEX bridges the
            gap between damage documentation and conservation planning. It does
            not replace expert hands — it gives them better tools to see ahead.
          </p>
        </div>
      </Section>

      {/* ─── Principles ─── */}
      <Section surface divider>
        <div className="mb-8 max-w-xl">
          <Pill className="mb-4">Principles</Pill>
          <h2 className="text-text">How we approach the work</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              title: "Preview, not prescription",
              desc: "ARTIFEX generates visual previews to inform decisions — not replace the expert conservator. Every output is clearly labelled as a preview.",
            },
            {
              title: "Honest about limitations",
              desc: "Not every damage type produces convincing previews. We communicate quality levels clearly so teams can rely on the outputs they trust.",
            },
            {
              title: "Built for institutions",
              desc: "Designed for the workflows of museum digitisation teams, heritage labs, and conservation educators — not optimised for consumer use.",
            },
          ].map((p) => (
            <Card key={p.title} title={p.title} accent>
              <p>{p.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── FAQ ─── */}
      <Section surface divider>
        <h2 className="mb-8">Frequently Asked Questions</h2>
        <div className="max-w-2xl">
          <FAQ items={faqs} />
        </div>
      </Section>

      {/* ─── CTA ─── */}
      <Section divider>
        <div className="text-center max-w-lg mx-auto">
          <h2 className="mb-4">Join the pilot programme</h2>
          <p className="text-text-secondary mb-7">
            ARTIFEX is in early access. Join museums and research teams testing
            brushstroke-aware restoration previews.
          </p>
          <Button href="/early-access">Get Early Access</Button>
        </div>
      </Section>

      {/* ─── Contact ─── */}
      <Section surface>
        <h2 className="mb-6">Contact</h2>
        <Card hover={false} className="max-w-lg">
          <p className="mb-4">
            For questions about the ARTIFEX pilot, partnerships, or research
            collaboration:
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-medium text-text">Email — </span>
              <a
                href="mailto:hello@artifex.example.com"
                className="text-accent hover:text-accent-hover underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
              >
                hello@artifex.example.com
              </a>
            </li>
            <li>
              <span className="font-medium text-text">Research — </span>
              <a
                href="mailto:research@artifex.example.com"
                className="text-accent hover:text-accent-hover underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
              >
                research@artifex.example.com
              </a>
            </li>
          </ul>
        </Card>
      </Section>

      {/* ─── Contextual links ─── */}
      <Section>
        <p className="text-sm text-muted text-center">
          See how it works in the{" "}
          <Link
            href="/how-it-works"
            className="text-accent hover:text-accent-hover underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            workflow guide
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
            get early access
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
