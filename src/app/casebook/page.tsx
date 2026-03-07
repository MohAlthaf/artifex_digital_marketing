"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Pill from "@/components/Pill";
import Callout from "@/components/Callout";
import JsonLd from "@/components/JsonLd";
import SeoChangeLog from "@/components/SeoChangeLog";
import PageHero from "@/components/PageHero";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { BASE_URL } from "@/lib/constants";

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Art Restoration Preview Casebook — Before and After Examples",
  description:
    "Before and after restoration examples for damaged artworks — paint loss, cracking, and flaking cases handled with brushstroke-aware inpainting.",
  url: `${BASE_URL}/casebook`,
};

type DamageType = "all" | "paint-loss" | "cracking" | "flaking";

const cases = [
  {
    id: 1,
    title: "Central paint loss on oil painting",
    type: "paint-loss" as DamageType,
    typeLabel: "Paint Loss",
    bullets: [
      "Circular region of missing paint in centre of composition",
      "Surrounding area shows thick impasto brushwork",
      "Artecho AI matched surrounding stroke direction and paint thickness in the restoration output",
    ],
  },
  {
    id: 2,
    title: "Network cracking on landscape",
    type: "cracking" as DamageType,
    typeLabel: "Cracking",
    bullets: [
      "Fine network of cracks across sky region",
      "Underlying ground layer visible through cracks",
      "Restoration output fills cracks while preserving subtle colour gradations",
    ],
  },
  {
    id: 3,
    title: "Edge flaking on portrait",
    type: "flaking" as DamageType,
    typeLabel: "Flaking",
    bullets: [
      "Paint flaking along edges of canvas",
      "Loss of detail in facial features near damaged zone",
      "Artecho AI inferred facial structure from intact sections for the restoration result",
    ],
  },
];

const filters: { value: DamageType; label: string }[] = [
  { value: "all", label: "All" },
  { value: "paint-loss", label: "Missing paint" },
  { value: "cracking", label: "Cracks" },
  { value: "flaking", label: "Flaking" },
];

export default function CasebookPage() {
  const [activeFilter, setActiveFilter] = useState<DamageType>("all");

  const filtered =
    activeFilter === "all"
      ? cases
      : cases.filter((c) => c.type === activeFilter);

  return (
    <>
      <JsonLd data={pageJsonLd} />

      {/* ─── Hero ─── */}
      <PageHero
        title="Art Restoration Preview Casebook"
        backgroundImage="/images/heroes/casebook-hero.svg"
      >
        <Pill className="mb-5">Casebook</Pill>
        <h1 className="max-w-2xl mb-6">
          Art Restoration Preview Casebook — Before and After Examples
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
          Browse restoration examples showing how Artecho AI handles common
          damage types on damaged artworks. These are outputs for planning and
          documentation, not final restoration outcomes.
        </p>
      </PageHero>

      {/* ─── Disclaimer ─── */}
      <Section tight>
        <Callout variant="trust">
          These are AI-generated restoration outputs for planning and
          documentation purposes only. They show potential outcomes — not final
          or recommended treatments. All restoration decisions require qualified
          conservators.
        </Callout>
      </Section>

      {/* ─── Filter bar ─── */}
      <Container className="pb-4">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-150 ${activeFilter === f.value
                ? "bg-accent text-white"
                : "bg-surface border border-border text-muted hover:text-text hover:border-accent/40"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </Container>

      {/* ─── Cases ─── */}
      <Section>
        <div className="space-y-12">
          {filtered.map((c) => (
            <article
              key={c.id}
              className="bg-surface border border-border rounded-2xl shadow-[var(--shadow-card)] overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Pill>{c.typeLabel}</Pill>
                  <h2 className="text-xl font-semibold text-text">{c.title}</h2>
                </div>
                <ul className="mb-6 space-y-2">
                  {c.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-sm text-text-secondary leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-muted"
                    >
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Before/After slider */}
                <BeforeAfterSlider
                  beforeSrc={`/assets/casebook/before-${c.id}.svg`}
                  afterSrc={`/assets/casebook/preview-${c.id}.svg`}
                  beforeAlt={`Case ${c.id} — damaged view of ${c.title.toLowerCase()}`}
                  afterAlt={`Case ${c.id} — restoration output of ${c.title.toLowerCase()}`}
                  height={400}
                />

                {/* Mask thumbnail */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="relative w-16 h-12 rounded-lg overflow-hidden border border-border-light bg-surface-warm">
                    <Image
                      src={`/assets/casebook/mask-${c.id}.svg`}
                      alt={`Case ${c.id} — damage mask`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <span className="text-xs text-muted">Damage mask</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ─── CTA ─── */}
      <Section surface divider>
        <div className="text-center max-w-lg mx-auto">
          <h2 className="mb-4">See restoration examples with your own damaged artworks</h2>
          <p className="text-text-secondary mb-7">
            Join the early-access pilot to test Artecho AI with your own artwork
            images and generate results for your collection.
          </p>
          <Button href="/early-access">Get Early Access</Button>
        </div>
      </Section>

      {/* ─── Contextual links ─── */}
      <Section>
        <p className="text-sm text-muted text-center">
          Learn about the{" "}
          <Link
            href="/how-it-works"
            className="text-accent hover:text-accent-hover underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            restoration workflow
          </Link>
          , or{" "}
          <Link
            href="/early-access"
            className="text-accent hover:text-accent-hover underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            join early access
          </Link>{" "}
          to get started.
        </p>
      </Section>

      {/* ─── SEO Change Log ─── */}
      <Container className="pb-12">
        <SeoChangeLog title="SEO Change Log — Casebook Page">
          <li>
            <strong>Primary keyword:</strong> &quot;art restoration preview
            casebook&quot; — placed in H1, meta title, meta description, OG
            title, and JSON-LD.
          </li>
          <li>
            <strong>Secondary keywords:</strong> &quot;before and after
            restoration&quot;, &quot;damaged artworks&quot;, &quot;restoration
            examples&quot; — placed in H1, H2, description, and body copy.
          </li>
          <li>
            <strong>Keyword density:</strong> Reduced &quot;preview&quot;
            occurrences using synonyms: &quot;output&quot;, &quot;result&quot;,
            &quot;example&quot;.
          </li>
          <li>
            <strong>H1:</strong> Updated to include primary keyword variation.
          </li>
          <li>
            <strong>H2:</strong> Updated CTA heading to include
            &quot;damaged artworks&quot; secondary keyword.
          </li>
        </SeoChangeLog>
      </Container>
    </>
  );
}
