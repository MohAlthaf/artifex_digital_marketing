"use client";

import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { trackCtaClick, trackOutboundClick } from "@/lib/analytics";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-surface-dark border-t border-white/5 mt-24">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 md:gap-16">
          {/* Brand column */}
          <div className="max-w-xs">
            <p className="text-[1.0625rem] font-bold text-white mb-3 tracking-tight">
              {SITE_NAME}
            </p>
            <p className="text-sm leading-relaxed text-white/45 mb-6">
              Brushstroke-aware restoration previews for damaged paintings. A
              preview and documentation tool, not a replacement for
              conservators.
            </p>
            <Link
              href="/early-access"
              onClick={() => trackCtaClick("Get Early Access", "footer")}
              className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-colors shadow-[var(--shadow-sm)]"
            >
              Get Early Access
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[0.7rem] font-bold uppercase tracking-widest mb-5 text-white/30">
              Pages
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5" role="list">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/45 hover:text-white/80 transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[0.7rem] font-bold uppercase tracking-widest mb-5 text-white/30">
              Contact
            </p>
            <ul className="space-y-2.5" role="list">
              <li>
                <a
                  href="mailto:hello@artecho-ai.com"
                  onClick={() =>
                    trackOutboundClick("hello@artecho-ai.com", "mailto")
                  }
                  className="text-sm text-white/45 hover:text-white/80 transition-colors duration-150"
                >
                  hello@artecho-ai.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:research@artecho-ai.com"
                  onClick={() =>
                    trackOutboundClick("research@artecho-ai.com", "mailto")
                  }
                  className="text-sm text-white/45 hover:text-white/80 transition-colors duration-150"
                >
                  research@artecho-ai.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-white/25 leading-relaxed max-w-xl">
            Artecho AI is a preview and documentation tool for conservation
            teams. It does not replace expert conservators or professional
            restoration workflows.
          </p>
          <p className="text-xs text-white/18 shrink-0">
            &copy; {year} {SITE_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}
