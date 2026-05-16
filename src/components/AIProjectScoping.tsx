"use client";

import { useMemo, useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
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
const BUDGETS = ["Under $500", "$500 - $2,000", "$2,000 - $5,000", "$5,000 - $15,000", "$15,000+", "Not sure yet"] as const;

const PAIN_POINT_OPTIONS = [
  "Not getting enough leads or enquiries online",
  "Website looks outdated or unprofessional",
  "Manual processes wasting too much staff time",
  "Poor visibility on Google — customers can't find us",
  "No system to manage customers or orders",
  "We have no online presence at all",
] as const;

const GOAL_OPTIONS = [
  "Get more customers and increase sales",
  "Build or completely redesign the website",
  "Automate repetitive tasks and save time",
  "Rank higher on Google and get more traffic",
  "Launch a custom app, portal, or software",
  "Improve how the team manages operations",
] as const;

const EMPTY_SCOPE: ScopeResult = {
  summary: "Complete the project scoping form to generate a draft brief.",
  recommendedSolution: "Project brief pending",
  projectApproach: "Your recommended approach will appear here.",
  phases: [],
  nextStep: "Generate your brief to continue.",
};

// ── Chip picker ───────────────────────────────────────────────────
function ChipPicker({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  const [customMode, setCustomMode] = useState(
    value !== "" && !options.includes(value as typeof options[number]),
  );

  const selectChip = (opt: string) => {
    setCustomMode(false);
    onChange(opt);
  };

  const activateCustom = () => {
    setCustomMode(true);
    onChange("");
  };

  return (
    <div className="grid gap-2.5 sm:col-span-2">
      <span className="text-xs font-semibold text-slate-300">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => selectChip(opt)}
            className={`rounded-xl border px-3 py-2 text-left text-xs font-medium transition ${
              value === opt && !customMode
                ? "border-brand-blue-400 bg-brand-blue-500/20 text-brand-blue-200"
                : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20 hover:bg-white/[0.07]"
            }`}
          >
            {opt}
          </button>
        ))}
        <button
          type="button"
          onClick={activateCustom}
          className={`rounded-xl border px-3 py-2 text-xs font-medium transition ${
            customMode
              ? "border-brand-blue-400 bg-brand-blue-500/20 text-brand-blue-200"
              : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20 hover:bg-white/[0.07]"
          }`}
        >
          ✏️ Custom…
        </button>
      </div>
      {customMode && (
        <textarea
          autoFocus
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type in your own words…"
          className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100"
        />
      )}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────
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
    budget: BUDGETS[5],
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
    const params = new URLSearchParams({ subject: "AI Project Brief", body: briefText });
    return `mailto:${toEmail}?${params.toString()}`;
  }, [briefText, toEmail]);

  const inputClass =
    "h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100";

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-8">

      {/* ── Left: form ──────────────────────────────────────────── */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-7 backdrop-blur-sm">
        <div className="grid gap-4 sm:grid-cols-2">

          <label className="grid gap-1.5">
            <span className="text-xs font-semibold text-slate-300">Business type</span>
            <input
              className={inputClass}
              value={form.businessType}
              onChange={(e) => setForm((f) => ({ ...f, businessType: e.target.value }))}
              placeholder="Real estate, healthcare, logistics…"
            />
          </label>

          <label className="grid gap-1.5">
            <span className="text-xs font-semibold text-slate-300">Service needed</span>
            <select
              className={inputClass}
              value={form.serviceNeeded}
              onChange={(e) => setForm((f) => ({ ...f, serviceNeeded: e.target.value as typeof SERVICE_OPTIONS[number] }))}
            >
              {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </label>

          {/* Chip pickers */}
          <ChipPicker
            label="Biggest pain point"
            options={PAIN_POINT_OPTIONS}
            value={form.painPoint}
            onChange={(v) => setForm((f) => ({ ...f, painPoint: v }))}
          />

          <ChipPicker
            label="Main goal"
            options={GOAL_OPTIONS}
            value={form.goal}
            onChange={(v) => setForm((f) => ({ ...f, goal: v }))}
          />

          <label className="grid gap-1.5">
            <span className="text-xs font-semibold text-slate-300">Timeline</span>
            <select
              className={inputClass}
              value={form.timeline}
              onChange={(e) => setForm((f) => ({ ...f, timeline: e.target.value as typeof TIMELINES[number] }))}
            >
              {TIMELINES.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </label>

          <label className="grid gap-1.5">
            <span className="text-xs font-semibold text-slate-300">Budget</span>
            <select
              className={inputClass}
              value={form.budget}
              onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value as typeof BUDGETS[number] }))}
            >
              {BUDGETS.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </label>

          <label className="grid gap-1.5">
            <span className="text-xs font-semibold text-slate-300">Name</span>
            <input
              className={inputClass}
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="Your name"
            />
          </label>

          <label className="grid gap-1.5">
            <span className="text-xs font-semibold text-slate-300">Email</span>
            <input
              className={inputClass}
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              placeholder="you@company.com"
            />
          </label>

          <label className="grid gap-1.5 sm:col-span-2">
            <span className="text-xs font-semibold text-slate-300">Phone / WhatsApp</span>
            <input
              className={inputClass}
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              placeholder="+234 800 000 0000"
            />
          </label>
        </div>

        <Button
          variant="cta"
          className="mt-5 w-full"
          onClick={() => void handleGenerate()}
          disabled={!canGenerate || loading}
        >
          {loading ? "Generating Brief…" : "Generate My Project Brief"}
        </Button>
      </div>

      {/* ── Right: result ────────────────────────────────────────── */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 sm:p-7 backdrop-blur-sm">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-300">Draft brief</p>
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
            onClick={(e) => { if (result.phases.length === 0) e.preventDefault(); }}
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
            onClick={(e) => { if (result.phases.length === 0) e.preventDefault(); }}
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
