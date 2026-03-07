"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setMobileOpen(false), []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.classList.toggle("no-scroll", mobileOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [mobileOpen]);

  /* Close on ESC */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen, close]);

  /* Close on click outside */
  useEffect(() => {
    if (!mobileOpen) return;
    const onClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        close();
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [mobileOpen, close]);


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

          {/* ─── Mobile hamburger / X button ─── */}
          <button
            ref={btnRef}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-warm transition-colors focus-visible:outline-2 focus-visible:outline-accent"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={
              mobileOpen ? "Close navigation" : "Open navigation"
            }
          >
            {/* Three bars that morph into X */}
            <span className="block w-5 h-[18px] relative">
              <span
                className={[
                  "absolute left-0 w-full h-[2px] bg-text rounded-full transition-all duration-300",
                  mobileOpen
                    ? "top-[8px] rotate-45"
                    : "top-0 rotate-0",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[8px] w-full h-[2px] bg-text rounded-full transition-all duration-300",
                  mobileOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 w-full h-[2px] bg-text rounded-full transition-all duration-300",
                  mobileOpen
                    ? "top-[8px] -rotate-45"
                    : "top-[16px] rotate-0",
                ].join(" ")}
              />
            </span>
          </button>
        </div>

        {/* ─── Mobile menu panel ─── */}
        <div
          ref={menuRef}
          id="mobile-menu"
          aria-hidden={!mobileOpen}
          className={[
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            mobileOpen
              ? "max-h-[420px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none",
          ].join(" ")}
        >
          <ul
            className="pb-5 pt-3 space-y-1 border-t border-border-light"
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
                      "block px-4 py-3 rounded-xl text-[0.9375rem] font-medium min-h-[48px] flex items-center",
                      active
                        ? "text-accent bg-accent-light"
                        : "text-muted hover:text-text hover:bg-surface-warm",
                    ].join(" ")}
                    onClick={close}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2 px-1">
              <Link
                href="/early-access"
                className="block text-center px-4 py-3 rounded-xl text-[0.9375rem] font-semibold bg-accent text-white hover:bg-accent-hover active:scale-[0.98] transition-all min-h-[48px] flex items-center justify-center"
                onClick={close}
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
