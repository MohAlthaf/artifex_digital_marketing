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
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-text hover:text-accent transition-colors"
              >
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className={`flex-shrink-0 w-5 h-5 rounded-full border border-border flex items-center justify-center text-muted transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
            </dt>
            <dd
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}
            >
              <p className="px-5 pb-4 text-sm text-text-secondary leading-relaxed">
                {item.a}
              </p>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
