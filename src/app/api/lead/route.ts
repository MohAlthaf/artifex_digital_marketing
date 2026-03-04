import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, message } = body;

        // Validate email
        if (!email || typeof email !== 'string') {
            return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
        }

        // Log the lead to server console (no DB)
        console.log('──────────────────────────────────');
        console.log('📩 NEW LEAD CAPTURED');
        console.log(`   Email:   ${email}`);
        console.log(`   Message: ${message || '(none)'}`);
        console.log(`   Time:    ${new Date().toISOString()}`);
        console.log('──────────────────────────────────');

        return NextResponse.json({
            message: 'Thank you for your interest! We will send onboarding details to your email shortly.',
        });
    } catch {
        return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }
}
