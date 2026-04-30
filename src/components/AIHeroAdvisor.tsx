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
    const text = (nextPrompt || prompt).trim();
    if (!text) return;

    setLoading(true);

    try {
      const response = await fetch("/api/ai/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: text }),
      });

      if (!response.ok) throw new Error("Request failed");
      const data = (await response.json()) as AdvisorResult;
      setResult(data);
    } catch {
      setResult(FALLBACK_RESULT);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative lg:pl-4">
      <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand-blue-700/10 via-transparent to-brand-red-700/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-900 to-navy-950 p-6 shadow-2xl ring-1 ring-white/[0.06]">
        <div className="h-[3px] w-full bg-gradient-to-r from-brand-blue-700 via-brand-blue-500 to-brand-red-700" />
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue-300">
              <Sparkles className="h-3.5 w-3.5" />
              AI Business Advisor
            </div>
            <p className="mt-4 text-xl font-semibold text-white">Ask what your business should build next.</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Describe the challenge and get a sharper service recommendation tied to growth, automation, or execution.
            </p>
          </div>
          <div className="hidden rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:block">
            <Bot className="h-5 w-5 text-brand-blue-300" />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {PROMPTS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setPrompt(item);
                void handleSubmit(item);
              }}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-brand-blue-400/40 hover:bg-white/[0.07]"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Your prompt
          </label>
          <textarea
            className="mt-3 min-h-28 w-full resize-none rounded-2xl border border-white/10 bg-navy-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-500/20"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            placeholder="Example: I run a real estate company and want more enquiries from my website."
          />
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button variant="cta" className="flex-1" onClick={() => void handleSubmit()} disabled={loading}>
              {loading ? "Thinking..." : "Get My Recommendation"}
            </Button>
            <ButtonLink href="/services" variant="outline-white" className="flex-1">
              Explore Services
            </ButtonLink>
          </div>
        </div>

        <div className="mt-5 rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-300">
            Suggested direction
          </p>
          <h3 className="mt-3 text-xl font-semibold text-white">{result.headline}</h3>
          <div className="mt-3 inline-flex rounded-full border border-brand-blue-500/30 bg-brand-blue-500/10 px-3 py-1 text-xs font-semibold text-brand-blue-200">
            {result.service}
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-300">{result.reason}</p>
          <div className="mt-4 space-y-2">
            {result.quickWins.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-blue-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <ButtonLink href={result.ctaHref} variant="secondary" className="mt-5 w-full sm:w-auto">
            {result.ctaLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
