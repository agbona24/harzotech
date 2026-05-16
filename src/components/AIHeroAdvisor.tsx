"use client";

import { useState } from "react";
import { ArrowRight, Bot, Sparkles } from "lucide-react";
import { Button, ButtonLink } from "@/components/Button";
import type { AdvisorResult } from "@/lib/ai-leads";

const PROMPTS = [
  "I need a website for my business",
  "I want more leads from my website",
  "I want to automate customer enquiries",
  "I need custom software for my operations",
] as const;

const FALLBACK_RESULT: AdvisorResult = {
  headline: "Start with your business goal, not just a deliverable.",
  service: "Harzotech AI Advisor",
  reason:
    "Describe what your business needs and the assistant will recommend the most relevant service path for growth, automation, or execution.",
  ctaLabel: "Start a Project",
  ctaHref: "/contact?intent=start-project",
  quickWins: [
    "Tell us your business type",
    "Describe your main challenge",
    "Get a recommended next step instantly",
  ],
};

export function AIHeroAdvisor() {
  const [prompt, setPrompt] = useState<string>(PROMPTS[0]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AdvisorResult>(FALLBACK_RESULT);

  async function handleSubmit(nextPrompt?: string) {
    const text = (nextPrompt ?? prompt).trim();
    if (!text) return;
    setLoading(true);
    try {
      const response = await fetch("/api/ai/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: text }),
      });
      if (!response.ok) throw new Error("Request failed");
      setResult((await response.json()) as AdvisorResult);
    } catch {
      setResult(FALLBACK_RESULT);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-900 to-navy-950 shadow-2xl ring-1 ring-white/[0.06]">
      {/* Top accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-brand-blue-700 via-brand-blue-500 to-brand-red-700" />

      <div className="grid lg:grid-cols-2 lg:divide-x lg:divide-white/[0.08]">

        {/* ── Left: input ────────────────────────── */}
        <div className="flex flex-col gap-5 p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue-300">
              <Sparkles className="h-3.5 w-3.5" />
              AI Business Advisor
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
              <Bot className="h-4 w-4 text-brand-blue-300" />
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold text-white">Ask what your business should build next.</p>
            <p className="mt-1.5 text-sm leading-6 text-slate-400">
              Choose a prompt below or describe your own challenge.
            </p>
          </div>

          {/* Prompt chips */}
          <div className="flex flex-wrap gap-2">
            {PROMPTS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => { setPrompt(item); void handleSubmit(item); }}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  prompt === item
                    ? "border-brand-blue-400/60 bg-brand-blue-500/20 text-brand-blue-200"
                    : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-brand-blue-400/40 hover:bg-white/[0.07]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Text input */}
          <textarea
            rows={3}
            className="w-full resize-none rounded-2xl border border-white/10 bg-navy-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-500/20 placeholder:text-slate-500"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="E.g. I run a real estate company and want more enquiries from my website."
          />

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              variant="cta"
              className="flex-1"
              onClick={() => void handleSubmit()}
              disabled={loading}
            >
              {loading ? "Thinking…" : "Get My Recommendation"}
            </Button>
            <ButtonLink href="/services" variant="outline-white" className="flex-1 justify-center">
              Explore Services
            </ButtonLink>
          </div>
        </div>

        {/* ── Right: result ──────────────────────── */}
        <div className="flex flex-col gap-4 border-t border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 lg:border-t-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-300">
            Suggested direction
          </p>

          <div>
            <h3 className="text-xl font-semibold text-white leading-snug">{result.headline}</h3>
            <div className="mt-3 inline-flex rounded-full border border-brand-blue-500/30 bg-brand-blue-500/10 px-3 py-1 text-xs font-semibold text-brand-blue-200">
              {result.service}
            </div>
          </div>

          <p className="text-sm leading-7 text-slate-300">{result.reason}</p>

          <div className="space-y-2 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">Quick wins</p>
            {result.quickWins.map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <ButtonLink href={result.ctaHref} variant="secondary" className="mt-auto w-full sm:w-auto">
            {result.ctaLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
        </div>

      </div>
    </div>
  );
}
