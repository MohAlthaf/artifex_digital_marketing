"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <dl className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="border border-border rounded-2xl bg-surface overflow-hidden shadow-[var(--shadow-card)]"
          >
            <dt>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:py-5 text-left text-sm sm:text-[0.9375rem] font-semibold text-text hover:text-accent transition-colors min-h-[52px]"
              >
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className={`flex-shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center text-muted text-sm font-medium transition-transform duration-200 ${isOpen ? "rotate-45 border-accent text-accent" : ""}`}
                >
                  +
                </span>
              </button>
            </dt>
            <dd
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}
            >
              <p className="px-5 pb-5 text-sm sm:text-[0.9375rem] text-text-secondary leading-relaxed">
                {item.a}
              </p>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
