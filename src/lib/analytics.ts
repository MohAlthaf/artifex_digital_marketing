// Centralised GA4 analytics helpers.
// All custom event calls go through these functions so tracking
// is consistent, typed, and fails silently when GA is unavailable.

type EventParams = Record<string, string | number | boolean | undefined>;

/** Low-level: send any GA4 event. Safe to call on server — silently no-ops. */
export function trackEvent(name: string, params?: EventParams) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, {
    ...params,
    page_title: document.title,
    page_location: window.location.href,
  });
}

/** CTA button click — e.g. "Get Early Access" buttons across the site. */
export function trackCtaClick(buttonText: string, ctaPosition: string) {
  trackEvent("early_access_click", {
    button_text: buttonText,
    cta_position: ctaPosition,
  });
}

/** First interaction with a form (fire once per page load). */
export function trackFormStart(formName: string) {
  trackEvent("early_access_form_start", {
    form_name: formName,
  });
}

/**
 * Successful lead submission — GA4 recommended event `generate_lead`.
 * Only call after the API returns success.
 */
export function trackGenerateLead(formName: string, leadSource?: string) {
  trackEvent("generate_lead", {
    form_name: formName,
    lead_source: leadSource || "direct",
    currency: "GBP",
    value: 0,
  });
}

/** Click on a casebook case study card or link. */
export function trackCaseStudyClick(caseName?: string) {
  trackEvent("case_study_click", {
    case_name: caseName || "unknown",
  });
}

/** First interaction with the before/after restoration slider. */
export function trackPreviewInteraction(previewType?: string) {
  trackEvent("preview_click", {
    preview_type: previewType || "before_after_slider",
  });
}

/** Outbound link click (e.g. Google Forms link, mailto). */
export function trackOutboundClick(label: string, outboundDomain: string) {
  trackEvent("outbound_click", {
    link_text: label,
    outbound_domain: outboundDomain,
  });
}

// Extend the Window interface so TypeScript knows about gtag.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
