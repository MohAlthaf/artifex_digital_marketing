import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import CtaButton from "@/components/CtaButton";
import Card from "@/components/Card";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Pill from "@/components/Pill";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { BASE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Digital Painting Restoration Workflow | Artecho AI",
  description:
    "Discover the Artecho AI digital painting restoration workflow — five steps from upload to documentation, with brushstroke-aware inpainting and restoration previews for documentation.",
  keywords: [
    "digital painting restoration workflow",
    "art restoration process",
    "brushstroke-aware inpainting",
    "museum digitisation workflow",
  ],
  alternates: { canonical: `${BASE_URL}/how-it-works` },
  openGraph: {
    title: "Digital Painting Restoration Workflow | Artecho AI",
    description:
      "Five-step digital painting restoration workflow with brushstroke-aware inpainting. Upload, mask, generate, review, and export restoration previews for documentation.",
    url: `${BASE_URL}/how-it-works`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Painting Restoration Workflow | Artecho AI",
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Digital Painting Restoration Workflow — Artecho AI",
  description:
    "Five-step digital painting restoration workflow with brushstroke-aware inpainting and restoration previews for documentation.",
  url: `${BASE_URL}/how-it-works`,
};

const steps = [
  {
    number: "1",
    title: "Upload artwork image",
    desc: "Upload a high-resolution scan or photograph of the damaged painting. Artecho AI supports standard image formats including TIFF, PNG, and JPEG.",
  },
  {
    number: "2",
    title: "Add damage mask",
    desc: "Define the damaged regions by painting a mask over the areas that need restoration. The mask tells Artecho AI exactly where to focus.",
  },
  {
    number: "3",
    title: "Generate restoration preview",
    desc: "Artecho AI analyses the surrounding brushstroke patterns and generates a restoration output that matches the flow, rhythm, and texture of the original work.",
  },
  {
    number: "4",
    title: "Review for triage and planning",
    desc: "Use the result to assess damage severity, plan conservation priorities, and communicate potential outcomes to stakeholders.",
  },
  {
    number: "5",
    title: "Export for documentation",
    desc: "Export the before/after comparisons along with metadata for conservation reports, grant proposals, and institutional archives.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />

      {/* ─── Hero ─── */}
      <PageHero
        title="Digital painting restoration workflow for museum digitisation"
        subtitle="Most restoration tools can fill missing areas, but results often look smooth and artificial. Artecho AI adds brushstroke awareness so the filled region matches the surrounding stroke rhythm and texture style."
        backgroundImage="/images/heroes/how-it-works-hero.svg"
      >
        <Pill className="mb-5">Workflow</Pill>
        <h1 className="max-w-2xl mb-6">
          Digital painting restoration workflow for museum digitisation
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
          Most restoration tools can fill missing areas, but results often look
          smooth and artificial. Artecho AI adds brushstroke awareness so the
          filled region matches the surrounding stroke rhythm and texture style.
        </p>
      </PageHero>

      {/* ─── Workflow block — image + steps ─── */}
      <Section surface divider>
        <h2 className="mb-10">
          Five-step brushstroke-aware inpainting workflow
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Steps */}
          <ol className="space-y-6">
            {steps.map((step) => (
              <li key={step.number} className="flex gap-4 items-start">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-accent text-white text-sm font-semibold shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-semibold text-base mb-1 text-text">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Workflow image */}
          <div className="hidden lg:block">
            <div className="bg-surface border border-border rounded-2xl shadow-[var(--shadow-md)] overflow-hidden">
              <div className="relative aspect-[6/5]">
                <Image
                  src="/assets/illustrations/workflow.svg"
                  alt="Artecho AI five-step restoration workflow diagram showing upload, mask, generate, review, and export stages"
                  fill
                  className="object-contain p-4"
                  sizes="500px"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── What makes it different ─── */}
      <Section divider>
        <h2 className="mb-10">
          What makes Artecho AI different for restoration previews and
          documentation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Card title="Brushstroke flow consistency">
            <p>
              Artecho AI analyses the directional flow of brushstrokes
              surrounding the damaged area and ensures the filled region follows
              the same stroke patterns, rather than producing flat,
              directionless fills.
            </p>
          </Card>
          <Card title="Texture realism">
            <p>
              The restoration output preserves the textural qualities of the
              original paint surface — impasto, glazing, dry brush — so results
              look convincing under scrutiny.
            </p>
          </Card>
          <Card title="Style-consistent learning">
            <p>
              Artecho AI learns from the specific artwork being processed,
              adapting to the artist&apos;s unique style rather than applying a
              generic fill algorithm.
            </p>
          </Card>
        </div>
      </Section>

      {/* ─── CTA ─── */}
      <Section surface>
        <div className="text-center max-w-lg mx-auto">
          <h2 className="mb-4">
            Try the restoration workflow with your own artworks
          </h2>
          <p className="text-text-secondary mb-7">
            Join the early-access pilot to test Artecho AI with your own artwork
            images.
          </p>
          <CtaButton
            href="/early-access"
            buttonText="Get Early Access"
            ctaPosition="how_it_works_cta"
          >
            Get Early Access
          </CtaButton>
        </div>
      </Section>

      {/* ─── Contextual links ─── */}
      <Section>
        <p className="text-sm text-muted text-center">
          See real examples in the{" "}
          <Link
            href="/casebook"
            className="text-accent hover:text-accent-hover underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            casebook
          </Link>
          , or learn more{" "}
          <Link
            href="/about"
            className="text-accent hover:text-accent-hover underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            about Artecho AI
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
