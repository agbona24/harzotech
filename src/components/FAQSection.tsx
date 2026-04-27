"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/Container";

export type FAQItem = { q: string; a: string };

export function FAQSection({ faqs, eyebrow = "FAQ" }: { faqs: FAQItem[]; eyebrow?: string }) {
  const [open, setOpen] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red-600">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            {faqs.map(({ q, a }, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                  aria-expanded={open === i}
                >
                  <span className="text-sm font-semibold text-slate-900 leading-snug">{q}</span>
                  <ChevronDown
                    className={`mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-sm leading-7 text-slate-600 border-t border-slate-100 pt-4">
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
