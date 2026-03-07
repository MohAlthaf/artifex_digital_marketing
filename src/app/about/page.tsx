import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import Pill from "@/components/Pill";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { BASE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Artecho AI — Conservation Documentation Tool for Museums",
  description:
    "Artecho AI is a conservation documentation tool that generates brushstroke-aware restoration previews for museums, heritage labs, and research teams. Learn about our mission and approach.",
  keywords: [
    "Artecho AI",
    "conservation documentation tool",
    "research teams",
    "museum heritage",
  ],
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About Artecho AI — Conservation Documentation Tool",
    description:
      "Artecho AI is a conservation documentation tool that generates brushstroke-aware restoration outputs for museums and heritage research teams.",
    url: `${BASE_URL}/about`,
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: { card: "summary_large_image", title: "About Artecho AI — Conservation Documentation Tool" },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "About Artecho AI — Conservation Documentation Tool for Museums",
  description:
    "Artecho AI is a conservation documentation tool that generates brushstroke-aware restoration outputs for museums, heritage labs, and research teams.",
  url: `${BASE_URL}/about`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Artecho AI a replacement for conservators?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Artecho AI is a preview and documentation tool. It generates visual previews of potential restoration outcomes to help with triage and planning. Final restoration decisions should always be made by qualified conservators.",
      },
    },
    {
      "@type": "Question",
      name: "What inputs does Artecho AI require?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Artecho AI requires two inputs: a high-resolution image of the artwork and a damage mask that defines the regions to be previewed.",
      },
    },
    {
      "@type": "Question",
      name: "What does Artecho AI output?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Artecho AI generates a restoration preview image and optional notes. The preview shows the artwork with damaged areas filled using brushstroke-aware inpainting. Outputs can be exported for documentation and reporting.",
      },
    },
    {
      "@type": "Question",
      name: "Is Artecho AI available as a pilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Artecho AI is currently in early-access pilot mode for museums, heritage labs, and research teams.",
      },
    },
  ],
};

const faqs = [
  {
    q: "Is Artecho AI a replacement for conservators?",
    a: "No. Artecho AI is a preview and documentation tool. It generates visual previews of potential restoration outcomes to help with triage and planning. Final restoration decisions should always be made by qualified conservators.",
  },
  {
    q: "What inputs does Artecho AI require?",
    a: "Artecho AI requires two inputs: a high-resolution image of the artwork and a damage mask that defines the regions to be previewed. The mask can be created using standard image editing tools or Artecho AI's built-in masking interface.",
  },
  {
    q: "What does Artecho AI output?",
    a: "Artecho AI generates a restoration preview image and optional notes. The preview shows the artwork with damaged areas filled using brushstroke-aware inpainting. Outputs can be exported for documentation and reporting.",
  },
  {
    q: "Is Artecho AI available as a pilot?",
    a: "Yes. Artecho AI is currently in early-access pilot mode for museums, heritage labs, and research teams. You can apply for access through our early access page.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* ─── Hero ─── */}
      <PageHero
        title="About Artecho AI"
        backgroundImage="/images/heroes/about-hero.svg"
      >
        <Pill className="mb-5">About</Pill>
        <h1 className="max-w-xl mb-5">About Artecho AI</h1>
        <p className="text-[1.0625rem] text-text-secondary leading-relaxed max-w-[520px]">
          A conservation documentation tool that gives museum digitisation,
          heritage labs, and conservation educators brushstroke-aware
          restoration outputs.
        </p>
      </PageHero>

      {/* ─── About body ─── */}
      <Section>
        <div className="max-w-2xl">
          <p className="text-lg text-text-secondary leading-relaxed mb-5">
            Artecho AI is a conservation documentation tool designed
            for museum digitisation teams, heritage laboratories, and
            conservation educators. It generates believable restoration outputs
            that respect the stroke rhythm, texture, and style of damaged
            paintings — helping research teams plan, document, and communicate
            conservation needs faster.
          </p>
          <p className="text-base text-text-secondary leading-relaxed">
            Built on research in computational art analysis, Artecho AI bridges
            the gap between damage documentation and conservation planning. It
            does not replace expert hands — it provides them better tools to see
            ahead.
          </p>
        </div>
      </Section>

      {/* ─── Principles ─── */}
      <Section surface divider>
        <div className="mb-8 max-w-xl">
          <Pill className="mb-4">Principles</Pill>
          <h2 className="text-text">How Artecho AI approaches conservation documentation</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              title: "Documentation, not prescription",
              desc: "Artecho AI generates visual outputs to inform decisions — not replace the expert conservator. Every result is clearly labelled as a non-destructive output.",
            },
            {
              title: "Honest about limitations",
              desc: "Not every damage type produces convincing results. We communicate quality levels clearly so teams can rely on the outputs they trust.",
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
        <div className="">
          <FAQ items={faqs} />
        </div>
      </Section>

      {/* ─── CTA ─── */}
      <Section divider>
        <div className="text-center max-w-lg mx-auto">
          <h2 className="mb-4">Join the museum heritage pilot programme</h2>
          <p className="text-text-secondary mb-7">
            Artecho AI is in early access. Join museums and research teams
            testing brushstroke-aware restoration outputs for conservation
            documentation.
          </p>
          <Button href="/early-access">Get Early Access</Button>
        </div>
      </Section>

      {/* ─── Contact ─── */}
      <Section surface>
        <h2 className="mb-6">Contact</h2>
        <Card hover={false} className="max-w-lg">
          <p className="mb-4">
            For questions about the Artecho AI pilot, partnerships, or research
            collaboration:
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-medium text-text">Email — </span>
              <a
                href="mailto:hello@artecho-ai.com"
                className="text-accent hover:text-accent-hover underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
              >
                hello@artecho-ai.com
              </a>
            </li>
            <li>
              <span className="font-medium text-text">Research — </span>
              <a
                href="mailto:research@artecho-ai.com"
                className="text-accent hover:text-accent-hover underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
              >
                research@artecho-ai.com
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
