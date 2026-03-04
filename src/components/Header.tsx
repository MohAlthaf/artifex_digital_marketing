"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /* Close on ESC */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  /* Close on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border-light shadow-[var(--shadow-sm)]">
      <nav
        className="max-w-[1160px] mx-auto px-5 sm:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-[3.75rem]">
          {/* Logo */}
          <Link
            href="/"
            className="text-[1.0625rem] font-bold tracking-tight text-text hover:text-accent transition-colors"
          >
            {SITE_NAME}
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0.5" role="list">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-150",
                      active
                        ? "text-accent bg-accent-light"
                        : "text-muted hover:text-text hover:bg-surface-warm",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="ml-2">
              <Link
                href="/early-access"
                className="px-4 py-2 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent-hover shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-card)] active:scale-[0.98] transition-all duration-150"
              >
                Early Access
              </Link>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden px-3.5 py-1.5 rounded-xl text-sm font-semibold text-muted hover:text-text hover:bg-surface-warm transition-colors focus-visible:outline-2 focus-visible:outline-accent"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          ref={menuRef}
          id="mobile-menu"
          aria-hidden={!mobileOpen}
          className={[
            "md:hidden overflow-hidden transition-all duration-200",
            mobileOpen
              ? "max-h-[360px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none",
          ].join(" ")}
        >
          <ul
            className="pb-4 pt-2 space-y-0.5 border-t border-border-light"
            role="list"
          >
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "block px-3.5 py-2.5 rounded-xl text-sm font-medium",
                      active
                        ? "text-accent bg-accent-light"
                        : "text-muted hover:text-text hover:bg-surface-warm",
                    ].join(" ")}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2 px-1">
              <Link
                href="/early-access"
                className="block text-center px-4 py-2.5 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent-hover active:scale-[0.98] transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Get Early Access
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
