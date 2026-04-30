"use client";

import { useMemo, useState } from "react";
import { Mail, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/Button";
import type { ScopeResult } from "@/lib/ai-leads";

const WA_NUMBER = "2347069716822";

const SERVICE_OPTIONS = [
  "Website Development",
  "Software Development",
  "AI Automation",
  "SEO & Digital Growth",
  "Branding",
] as const;

const TIMELINES = ["Urgent", "2-4 Weeks", "1-2 Months", "Flexible"] as const;
const BUDGETS = ["Under ₦500k", "₦500k - ₦2m", "₦2m - ₦5m", "Not sure yet"] as const;

const EMPTY_SCOPE: ScopeResult = {
  summary: "Complete the project scoping form to generate a draft brief.",
  recommendedSolution: "Project brief pending",
  projectApproach: "Your recommended approach will appear here.",
  phases: [],
  nextStep: "Generate your brief to continue.",
};

export function AIProjectScoping({ toEmail }: { toEmail: string }) {
  const [form, setForm] = useState<{
    businessType: string;
    serviceNeeded: typeof SERVICE_OPTIONS[number];
    painPoint: string;
    goal: string;
    timeline: typeof TIMELINES[number];
    budget: typeof BUDGETS[number];
    name: string;
    email: string;
    phone: string;
  }>({
    businessType: "",
    serviceNeeded: SERVICE_OPTIONS[0],
    painPoint: "",
    goal: "",
    timeline: TIMELINES[1],
    budget: BUDGETS[3],
    name: "",
    email: "",
    phone: "",
  });
  const [result, setResult] = useState<ScopeResult>(EMPTY_SCOPE);
  const [loading, setLoading] = useState(false);

  const canGenerate = form.businessType.trim() && form.goal.trim() && form.painPoint.trim();

  async function handleGenerate() {
    if (!canGenerate) return;

    setLoading(true);

    try {
      const response = await fetch("/api/ai/scope", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Request failed");
      setResult((await response.json()) as ScopeResult);
    } finally {
      setLoading(false);
    }
  }

  const briefText = useMemo(() => {
    return [
      `Name: ${form.name || "—"}`,
      `Email: ${form.email || "—"}`,
      `Phone: ${form.phone || "—"}`,
      `Business Type: ${form.businessType || "—"}`,
      `Service Needed: ${form.serviceNeeded || "—"}`,
      `Pain Point: ${form.painPoint || "—"}`,
      `Goal: ${form.goal || "—"}`,
      `Timeline: ${form.timeline || "—"}`,
      `Budget: ${form.budget || "—"}`,
      "",
      "AI Draft Brief",
      result.summary,
      "",
      `Recommended Solution: ${result.recommendedSolution}`,
      `Approach: ${result.projectApproach}`,
      `Next Step: ${result.nextStep}`,
      "",
      "Phases:",
      ...result.phases.map((phase, index) => `${index + 1}. ${phase}`),
    ].join("\n");
  }, [form, result]);

  const waHref = useMemo(
    () => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi Harzotech,\n\n${briefText}`)}`,
    [briefText],
  );

  const mailtoHref = useMemo(() => {
    const params = new URLSearchParams({
      subject: "AI Project Brief",
      body: briefText,
    });
    return `mailto:${toEmail}?${params.toString()}`;
  }, [briefText, toEmail]);

  const inputClass =
    "h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100";

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue-300">
          <Sparkles className="h-3.5 w-3.5" />
          AI Project Scoping
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Generate a project brief before you book
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
          Tell Harzotech what you do, what is blocking growth, and what outcome you want. The assistant will turn that into a tighter brief your team can act on.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1.5">
            <span className="text-xs font-semibold text-slate-300">Business type</span>
            <input
              className={inputClass}
              value={form.businessType}
              onChange={(event) => setForm((current) => ({ ...current, businessType: event.target.value }))}
              placeholder="Real estate, healthcare, logistics..."
            />
          </label>
          <label className="grid gap-1.5">
            <span className="text-xs font-semibold text-slate-300">Service needed</span>
            <select
              className={inputClass}
              value={form.serviceNeeded}
              onChange={(event) => setForm((current) => ({ ...current, serviceNeeded: event.target.value as typeof SERVICE_OPTIONS[number] }))}
            >
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-1.5 sm:col-span-2">
            <span className="text-xs font-semibold text-slate-300">Biggest pain point</span>
            <textarea
              className="min-h-28 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100"
              value={form.painPoint}
              onChange={(event) => setForm((current) => ({ ...current, painPoint: event.target.value }))}
              placeholder="What is slowing the business down right now?"
            />
          </label>
          <label className="grid gap-1.5 sm:col-span-2">
            <span className="text-xs font-semibold text-slate-300">Main goal</span>
            <textarea
              className="min-h-28 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100"
              value={form.goal}
              onChange={(event) => setForm((current) => ({ ...current, goal: event.target.value }))}
              placeholder="More leads, better operations, online bookings, stronger brand presence..."
            />
          </label>
          <label className="grid gap-1.5">
            <span className="text-xs font-semibold text-slate-300">Timeline</span>
            <select
              className={inputClass}
              value={form.timeline}
              onChange={(event) => setForm((current) => ({ ...current, timeline: event.target.value as typeof TIMELINES[number] }))}
            >
              {TIMELINES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-1.5">
            <span className="text-xs font-semibold text-slate-300">Budget</span>
            <select
              className={inputClass}
              value={form.budget}
              onChange={(event) => setForm((current) => ({ ...current, budget: event.target.value as typeof BUDGETS[number] }))}
            >
              {BUDGETS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-1.5">
            <span className="text-xs font-semibold text-slate-300">Name</span>
            <input
              className={inputClass}
              value={form.name}
              onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-1.5">
            <span className="text-xs font-semibold text-slate-300">Email</span>
            <input
              className={inputClass}
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
              placeholder="you@company.com"
            />
          </label>
          <label className="grid gap-1.5 sm:col-span-2">
            <span className="text-xs font-semibold text-slate-300">Phone / WhatsApp</span>
            <input
              className={inputClass}
              value={form.phone}
              onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
              placeholder="+234 800 000 0000"
            />
          </label>
        </div>

        <Button variant="cta" className="mt-6 w-full" onClick={() => void handleGenerate()} disabled={!canGenerate || loading}>
          {loading ? "Generating Brief..." : "Generate My Project Brief"}
        </Button>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-300">
          Draft brief
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-white">{result.recommendedSolution}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{result.summary}</p>

        <div className="mt-5 rounded-2xl border border-white/10 bg-navy-950/40 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Suggested approach</p>
          <p className="mt-3 text-sm leading-7 text-slate-300">{result.projectApproach}</p>
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Delivery phases</p>
          <div className="mt-4 space-y-3">
            {result.phases.length > 0 ? (
              result.phases.map((phase, index) => (
                <div key={phase} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue-500/15 text-xs font-bold text-brand-blue-300">
                    {index + 1}
                  </span>
                  <span>{phase}</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-400">Your phased project path will appear here after the brief is generated.</p>
            )}
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-brand-blue-500/20 bg-brand-blue-500/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue-200">Next step</p>
          <p className="mt-3 text-sm leading-7 text-slate-200">{result.nextStep}</p>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href={result.phases.length > 0 ? waHref : undefined}
            onClick={(event) => {
              if (result.phases.length === 0) event.preventDefault();
            }}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
              result.phases.length > 0
                ? "bg-[#25D366] text-white hover:bg-[#1ebe5d]"
                : "cursor-not-allowed bg-white/10 text-slate-500"
            }`}
          >
            <MessageCircle className="h-4 w-4" />
            Send Brief via WhatsApp
          </a>
          <a
            href={result.phases.length > 0 ? mailtoHref : undefined}
            onClick={(event) => {
              if (result.phases.length === 0) event.preventDefault();
            }}
            className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition ${
              result.phases.length > 0
                ? "border-white/15 bg-white text-slate-900 hover:bg-slate-100"
                : "cursor-not-allowed border-white/10 bg-white/10 text-slate-500"
            }`}
          >
            <Mail className="h-4 w-4" />
            Send Brief via Email
          </a>
        </div>
      </div>
    </div>
  );
}
