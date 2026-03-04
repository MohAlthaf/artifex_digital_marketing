import { test } from '@playwright/test';
import { mkdirSync } from 'fs';
import { join } from 'path';

const ROUTES = [
    { path: '/', name: 'home' },
    { path: '/how-it-works', name: 'how-it-works' },
    { path: '/casebook', name: 'casebook' },
    { path: '/early-access', name: 'early-access' },
    { path: '/about', name: 'about' },
];

// Determine output folder from the EVIDENCE_PHASE env variable
// Usage: EVIDENCE_PHASE=before npx playwright test
//        EVIDENCE_PHASE=after  npx playwright test
const phase = process.env.EVIDENCE_PHASE || 'before';
const outputDir = join(process.cwd(), 'evidence', phase);

test.describe(`Evidence screenshots (${phase})`, () => {
    test.beforeAll(() => {
        mkdirSync(outputDir, { recursive: true });
    });

    for (const route of ROUTES) {
        test(`Capture ${route.name}`, async ({ page }) => {
            await page.goto(route.path, { waitUntil: 'networkidle' });

            // Small delay to ensure any CSS transitions finish
            await page.waitForTimeout(1000);

            await page.screenshot({
                path: join(outputDir, `${route.name}.png`),
                fullPage: true,
            });
        });
    }
});
