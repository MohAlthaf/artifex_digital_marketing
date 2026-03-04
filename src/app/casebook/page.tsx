'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Pill from '@/components/Pill';
import Callout from '@/components/Callout';
import JsonLd from '@/components/JsonLd';
import { BASE_URL, SITE_NAME } from '@/lib/constants';

const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Casebook — Before & After Restoration Previews',
    description:
        'Examples of ARTIFEX restoration previews for common painting damage types.',
    url: `${BASE_URL}/casebook`,
};

type DamageType = 'all' | 'paint-loss' | 'cracking' | 'flaking';

const cases = [
    {
        id: 1,
        title: 'Central paint loss on oil painting',
        type: 'paint-loss' as DamageType,
        typeLabel: 'Paint Loss',
        bullets: [
            'Circular region of missing paint in centre of composition',
            'Surrounding area shows thick impasto brushwork',
            'ARTIFEX matched surrounding stroke direction and paint thickness in preview',
        ],
    },
    {
        id: 2,
        title: 'Network cracking on landscape',
        type: 'cracking' as DamageType,
        typeLabel: 'Cracking',
        bullets: [
            'Fine network of cracks across sky region',
            'Underlying ground layer visible through cracks',
            'Preview fills cracks while preserving subtle colour gradations',
        ],
    },
    {
        id: 3,
        title: 'Edge flaking on portrait',
        type: 'flaking' as DamageType,
        typeLabel: 'Flaking',
        bullets: [
            'Paint flaking along edges of canvas',
            'Loss of detail in facial features near damaged zone',
            'ARTIFEX inferred facial structure from intact sections for preview',
        ],
    },
];

const filters: { value: DamageType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'paint-loss', label: 'Missing paint' },
    { value: 'cracking', label: 'Cracks' },
    { value: 'flaking', label: 'Flaking' },
];

export default function CasebookPage() {
    const [activeFilter, setActiveFilter] = useState<DamageType>('all');

    const filtered = activeFilter === 'all'
        ? cases
        : cases.filter((c) => c.type === activeFilter);

    return (
        <>
            <JsonLd data={pageJsonLd} />

            {/* ─── Hero ─── */}
            <Section>
                <Pill className="mb-5">Casebook</Pill>
                <h1 className="max-w-2xl mb-6">
                    Casebook: Before and after restoration previews
                </h1>
                <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                    Examples show how ARTIFEX handles common damage types. These are previews for planning and
                    documentation, not final restoration outcomes.
                </p>
            </Section>

            {/* ─── Disclaimer ─── */}
            <Section tight>
                <Callout variant="trust">
                    These are AI-generated previews for planning and documentation purposes only.
                    They show potential restoration outcomes — not final or recommended treatments.
                    All restoration decisions require qualified conservators.
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
                                    ? 'bg-accent text-white'
                                    : 'bg-surface border border-border text-muted hover:text-text hover:border-accent/40'
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
                        <article key={c.id} className="bg-surface border border-border rounded-2xl shadow-[var(--shadow-card)] overflow-hidden">
                            <div className="p-6 sm:p-8">
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    <Pill>{c.typeLabel}</Pill>
                                    <h2 className="text-xl font-semibold text-text">{c.title}</h2>
                                </div>
                                <ul className="mb-6 space-y-2">
                                    {c.bullets.map((b) => (
                                        <li key={b} className="text-sm text-text-secondary leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-muted">
                                            {b}
                                        </li>
                                    ))}
                                </ul>

                                {/* 3-column gallery */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {(['before', 'mask', 'preview'] as const).map((type) => (
                                        <figure key={type}>
                                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border-light bg-surface-warm">
                                                <Image
                                                    src={`/assets/casebook/${type}-${c.id}.svg`}
                                                    alt={`Case ${c.id} — ${type} view of ${c.title.toLowerCase()}`}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 640px) 100vw, 33vw"
                                                />
                                            </div>
                                            <figcaption className="mt-2 text-xs text-muted capitalize text-center">{type}</figcaption>
                                        </figure>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </Section>

            {/* ─── CTA ─── */}
            <Section surface divider>
                <div className="text-center max-w-lg mx-auto">
                    <h2 className="mb-4">Want to try with your own artworks?</h2>
                    <p className="text-text-secondary mb-7">
                        Join the early-access pilot to test ARTIFEX with your own artwork images and see previews for your collection.
                    </p>
                    <Button href="/early-access">Get Early Access</Button>
                </div>
            </Section>

            {/* ─── Contextual links ─── */}
            <Section>
                <p className="text-sm text-muted text-center">
                    Learn about the{' '}
                    <Link href="/how-it-works" className="text-accent hover:text-accent-hover underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">restoration workflow</Link>, or{' '}
                    <Link href="/early-access" className="text-accent hover:text-accent-hover underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">join early access</Link> to get started.
                </p>
            </Section>
        </>
    );
}
