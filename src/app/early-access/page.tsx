'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Card from '@/components/Card';
import Pill from '@/components/Pill';
import Callout from '@/components/Callout';
import JsonLd from '@/components/JsonLd';
import { FORM_URL, BASE_URL } from '@/lib/constants';

const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Get Early Access — ARTIFEX',
    description: 'Sign up for ARTIFEX early access. Share your email and use case to join the pilot programme for museums and research teams.',
    url: `${BASE_URL}/early-access`,
};

export default function EarlyAccessPage() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [feedback, setFeedback] = useState('');

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, message }),
            });
            const data = await res.json();
            if (res.ok) {
                setStatus('success');
                setFeedback(data.message || 'Thank you! We will be in touch.');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
                setFeedback(data.error || 'Something went wrong. Please try again.');
            }
        } catch {
            setStatus('error');
            setFeedback('Network error. Please try again.');
        }
    }

    return (
        <>
            <JsonLd data={pageJsonLd} />

            {/* ─── Google Form Embed — at very top ─── */}
            <Container className="pt-8">
                <div className="rounded-2xl overflow-hidden border border-border bg-surface shadow-[var(--shadow-card)]">
                    <iframe
                        src={FORM_URL}
                        width="100%"
                        height="600"
                        title="ARTIFEX Early Access Sign-Up Form"
                        className="w-full border-0"
                        loading="lazy"
                    >
                        Loading form…
                    </iframe>
                </div>
            </Container>

            {/* ─── Main content ─── */}
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-4">
                    <div>
                        <Pill className="mb-5">Early Access</Pill>
                        <h1 className="max-w-xl mb-6">Get Early Access</h1>
                    </div>
                    <div className="hidden lg:flex justify-center">
                        <div className="w-full max-w-[400px] rounded-2xl border border-border bg-surface/80 shadow-[var(--shadow-lg)] overflow-hidden">
                            <Image
                                src="/assets/illustrations/early-access.svg"
                                alt="ARTIFEX early access illustration — envelope with wax seal"
                                width={400}
                                height={320}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
                <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-12">
                    ARTIFEX is currently available as an early-access pilot for museums and research teams.
                    Share your email and use case, and onboarding details will be sent.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left — what you get + what we ask */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-xl font-semibold mb-5">What you get</h2>
                            <ul className="space-y-3">
                                {[
                                    'Access to the ARTIFEX preview tool during the pilot period',
                                    'Priority onboarding with documentation and support',
                                    'Opportunity to provide feedback that shapes the product',
                                    'Early adopter pricing when ARTIFEX launches publicly',
                                ].map((item) => (
                                    <li key={item} className="text-sm text-text-secondary leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-accent">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-5">What we ask for</h2>
                            <ul className="space-y-3">
                                {[
                                    'Your institutional email address',
                                    'A brief description of your use case (e.g., damage documentation, triage)',
                                    'Willingness to share anonymised feedback on preview quality',
                                    'Acknowledgement that ARTIFEX is a preview tool, not a restoration service',
                                ].map((item) => (
                                    <li key={item} className="text-sm text-text-secondary leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-muted">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right — pilot summary card + fallback form */}
                    <div className="space-y-6">
                        <Card title="Pilot summary" hover={false}>
                            <p className="mb-3">ARTIFEX is in early access. The pilot is free during the testing period. You retain full ownership of your images and outputs.</p>
                            <p className="text-xs text-muted">We will only email pilot details and onboarding instructions. Your information is never shared with third parties.</p>
                        </Card>

                        {/* Fallback form */}
                        <div className="bg-surface border border-border rounded-2xl p-6 shadow-[var(--shadow-card)]">
                            <h3 className="text-base font-semibold mb-1.5 text-text">Alternative sign-up</h3>
                            <p className="text-xs text-muted mb-5">
                                If the form above doesn&apos;t load, use this fallback.
                            </p>

                            {status === 'success' ? (
                                <div className="bg-green-50 border border-green-200 rounded-md p-4 text-sm text-green-800" role="alert">
                                    {feedback}
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-text">
                                            Email address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="you@museum.org"
                                            className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-text">
                                            Use case / message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={3}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Tell us about your use case…"
                                            className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent resize-y"
                                        />
                                    </div>

                                    {status === 'error' && (
                                        <div className="bg-red-50 border border-red-200 rounded-md p-3 text-sm text-red-800" role="alert">
                                            {feedback}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full px-6 py-3 rounded-xl font-medium text-sm bg-accent text-white hover:bg-accent-hover transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
                                    >
                                        {status === 'loading' ? 'Submitting…' : 'Request Early Access'}
                                    </button>
                                </form>
                            )}

                            <Callout variant="trust" className="mt-4">
                                Your email is used only for pilot onboarding. Never shared with third parties.
                            </Callout>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
