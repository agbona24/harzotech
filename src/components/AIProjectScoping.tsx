"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, Mail, MessageCircle, Sparkles } from "lucide-react";
import type { ScopeResult } from "@/lib/ai-leads";

/* ── Data ──────────────────────────────────────────────────────── */

const BUSINESS_TYPES = [
  "Real estate & property",
  "Healthcare & clinic",
  "E-commerce & retail",
  "Logistics & transport",
  "Education & training",
  "Finance & fintech",
  "Hospitality & food",
  "Tech startup",
  "Manufacturing",
  "Other",
] as const;

const SERVICES = [
  { label: "Website Development",    desc: "Business site, landing page, e-commerce" },
  { label: "Custom Software",        desc: "CRM, portal, POS, booking system"         },
  { label: "AI & Automation",        desc: "WhatsApp bot, workflows, voice agent"     },
  { label: "SEO & Marketing",        desc: "Google rankings, visibility, leads"       },
  { label: "Branding",               desc: "Logo, identity, brand strategy"           },
] as const;

const PAIN_POINTS = [
  "Not getting enough leads online",
  "Website looks outdated or unprofessional",
  "Manual processes wasting too much time",
  "Poor visibility on Google",
  "No system to manage customers or orders",
  "No online presence yet",
] as const;

const GOALS = [
  "Get more customers and increase sales",
  "Build or completely redesign the website",
  "Automate repetitive tasks and save time",
  "Rank higher on Google and get more traffic",
  "Launch a custom app, portal, or software",
  "Improve how the team manages operations",
] as const;

const BUDGETS   = ["Under $500", "$500 – $2,000", "$2,000 – $5,000", "$5,000 – $15,000", "$15,000+", "Not sure yet"] as const;
const TIMELINES = ["Urgent (ASAP)", "2–4 Weeks", "1–2 Months", "Flexible"] as const;

const TOTAL_STEPS = 6;
const WA_NUMBER   = "2347069716822";

const STEP_TITLES = [
  "What type of business do you run?",
  "What service do you need?",
  "What's your biggest challenge right now?",
  "What outcome are you looking for?",
  "Budget & timeline",
  "Your contact details",
];

interface ScopeForm {
  businessType: string;
  serviceNeeded: string;
  painPoint: string;
  goal: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
}

const EMPTY_FORM: ScopeForm = {
  businessType: "", serviceNeeded: "", painPoint: "", goal: "",
  budget: "", timeline: "", name: "", email: "", phone: "",
};

/* ── Chip ──────────────────────────────────────────────────────── */
function Chip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-sm font-medium transition-all ${
        selected
          ? "border-brand-blue-400 bg-brand-blue-500/20 text-brand-blue-200"
          : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20 hover:bg-white/[0.07]"
      }`}
    >
      {selected && <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />}
      {label}
    </button>
  );
}

/* ── Main component ─────────────────────────────────────────────── */
export function AIProjectScoping({ toEmail }: { toEmail: string }) {
  const [step, setStep]         = useState(0);
  const [dir,  setDir]          = useState<1 | -1>(1);
  const [form, setForm]         = useState<ScopeForm>(EMPTY_FORM);
  const [painCustom, setPainCustom] = useState(false);
  const [goalCustom, setGoalCustom] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [result,  setResult]    = useState<ScopeResult | null>(null);

  function next() { setDir(1);  setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1)); }
  function back() { setDir(-1); setStep((s) => Math.max(s - 1, 0)); }

  function pickBusiness(v: string) { setForm((f) => ({ ...f, businessType: v }));   setDir(1); setStep(1); }
  function pickService(v: string)  { setForm((f) => ({ ...f, serviceNeeded: v }));  setDir(1); setStep(2); }

  const canNext = (() => {
    if (step === 0) return !!form.businessType;
    if (step === 1) return !!form.serviceNeeded;
    if (step === 2) return !!form.painPoint.trim();
    if (step === 3) return !!form.goal.trim();
    if (step === 4) return !!form.budget && !!form.timeline;
    if (step === 5) return !!form.name.trim() && !!form.phone.trim();
    return false;
  })();

  async function handleGenerate() {
    if (!canNext) return;
    setLoading(true);
    try {
      const res = await fetch("/api/ai/scope", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setResult(await res.json() as ScopeResult);
      setDir(1);
      setStep(6);
    } catch {
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  const briefText = useMemo(() => {
    if (!result) return "";
    return [
      "Hi Harzotech,",
      "",
      "*AI Project Brief*",
      "",
      `*Business:* ${form.businessType}`,
      `*Service:* ${form.serviceNeeded}`,
      `*Challenge:* ${form.painPoint}`,
      `*Goal:* ${form.goal}`,
      `*Budget:* ${form.budget}`,
      `*Timeline:* ${form.timeline}`,
      "",
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : null,
      "",
      "*AI Generated Brief:*",
      result.summary,
      "",
      `*Recommended:* ${result.recommendedSolution}`,
      `*Approach:* ${result.projectApproach}`,
      "",
      "*Phases:*",
      ...result.phases.map((p, i) => `${i + 1}. ${p}`),
      "",
      `*Next Step:* ${result.nextStep}`,
    ].filter((l) => l !== null).join("\n");
  }, [form, result]);

  const waHref   = useMemo(() => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(briefText)}`, [briefText]);
  const mailHref = useMemo(() => {
    const params = new URLSearchParams({ subject: "AI Project Brief", body: briefText.replace(/\*/g, "") });
    return `mailto:${toEmail}?${params}`;
  }, [toEmail, briefText]);

  const variants = {
    enter:  (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0 }),
  };

  const inputClass =
    "h-11 w-full rounded-xl border border-white/10 bg-white/[0.07] px-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-500/20";

  return (
    <div className="mx-auto max-w-2xl">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-sm">

        {/* ── Progress bar ──────────────────────────────────────── */}
        {step < TOTAL_STEPS && (
          <div className="mb-6">
            <div className="flex gap-1 mb-2.5">
              {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                    i < step ? "bg-brand-blue-500" : i === step ? "bg-brand-blue-400" : "bg-white/10"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-blue-300">
                Step {step + 1} of {TOTAL_STEPS}
              </p>
              <p className="text-[11px] text-slate-500 hidden sm:block">{STEP_TITLES[step]}</p>
            </div>
          </div>
        )}

        {/* ── Step heading ──────────────────────────────────────── */}
        {step < TOTAL_STEPS && (
          <h3 className="mb-5 text-base font-bold text-white">{STEP_TITLES[step]}</h3>
        )}

        {/* ── Animated step body ────────────────────────────────── */}
        <div className="min-h-[180px]">
          <AnimatePresence initial={false} custom={dir} mode="wait">
            <motion.div
              key={step}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >

              {/* Step 0 — Business type */}
              {step === 0 && (
                <div className="flex flex-wrap gap-2">
                  {BUSINESS_TYPES.map((b) => (
                    <Chip key={b} label={b} selected={form.businessType === b} onClick={() => pickBusiness(b)} />
                  ))}
                </div>
              )}

              {/* Step 1 — Service */}
              {step === 1 && (
                <div className="grid gap-2 sm:grid-cols-2">
                  {SERVICES.map((s) => (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => pickService(s.label)}
                      className={`flex flex-col items-start gap-1 rounded-xl border p-4 text-left transition-all hover:-translate-y-0.5 ${
                        form.serviceNeeded === s.label
                          ? "border-brand-blue-400 bg-brand-blue-500/20"
                          : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
                      }`}
                    >
                      <p className={`text-sm font-bold ${form.serviceNeeded === s.label ? "text-brand-blue-200" : "text-white"}`}>
                        {s.label}
                      </p>
                      <p className="text-xs text-slate-400">{s.desc}</p>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 2 — Pain point */}
              {step === 2 && (
                <div className="flex flex-wrap gap-2">
                  {PAIN_POINTS.map((p) => (
                    <Chip
                      key={p}
                      label={p}
                      selected={form.painPoint === p && !painCustom}
                      onClick={() => { setPainCustom(false); setForm((f) => ({ ...f, painPoint: p })); }}
                    />
                  ))}
                  <button
                    type="button"
                    onClick={() => { setPainCustom(true); setForm((f) => ({ ...f, painPoint: "" })); }}
                    className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-sm font-medium transition-all ${
                      painCustom
                        ? "border-brand-blue-400 bg-brand-blue-500/20 text-brand-blue-200"
                        : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20 hover:bg-white/[0.07]"
                    }`}
                  >
                    ✏️ Custom…
                  </button>
                  {painCustom && (
                    <textarea
                      autoFocus
                      rows={3}
                      value={form.painPoint}
                      onChange={(e) => setForm((f) => ({ ...f, painPoint: e.target.value }))}
                      placeholder="Describe your challenge in your own words…"
                      className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-500/20"
                    />
                  )}
                </div>
              )}

              {/* Step 3 — Goal */}
              {step === 3 && (
                <div className="flex flex-wrap gap-2">
                  {GOALS.map((g) => (
                    <Chip
                      key={g}
                      label={g}
                      selected={form.goal === g && !goalCustom}
                      onClick={() => { setGoalCustom(false); setForm((f) => ({ ...f, goal: g })); }}
                    />
                  ))}
                  <button
                    type="button"
                    onClick={() => { setGoalCustom(true); setForm((f) => ({ ...f, goal: "" })); }}
                    className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-sm font-medium transition-all ${
                      goalCustom
                        ? "border-brand-blue-400 bg-brand-blue-500/20 text-brand-blue-200"
                        : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20 hover:bg-white/[0.07]"
                    }`}
                  >
                    ✏️ Custom…
                  </button>
                  {goalCustom && (
                    <textarea
                      autoFocus
                      rows={3}
                      value={form.goal}
                      onChange={(e) => setForm((f) => ({ ...f, goal: e.target.value }))}
                      placeholder="Describe what you want to achieve…"
                      className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-500/20"
                    />
                  )}
                </div>
              )}

              {/* Step 4 — Budget & Timeline */}
              {step === 4 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">Budget range</p>
                    <div className="flex flex-wrap gap-2">
                      {BUDGETS.map((b) => (
                        <Chip key={b} label={b} selected={form.budget === b} onClick={() => setForm((f) => ({ ...f, budget: b }))} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">When do you need this?</p>
                    <div className="flex flex-wrap gap-2">
                      {TIMELINES.map((t) => (
                        <Chip key={t} label={t} selected={form.timeline === t} onClick={() => setForm((f) => ({ ...f, timeline: t }))} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5 — Contact + Generate */}
              {step === 5 && (
                <div className="flex flex-col gap-4">
                  <label className="grid gap-1.5">
                    <span className="text-xs font-semibold text-slate-300">Full name <span className="text-brand-red-400">*</span></span>
                    <input className={inputClass} placeholder="Your name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
                  </label>
                  <label className="grid gap-1.5">
                    <span className="text-xs font-semibold text-slate-300">Phone / WhatsApp <span className="text-brand-red-400">*</span></span>
                    <input className={inputClass} placeholder="+234 800 000 0000" type="tel" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} />
                  </label>
                  <label className="grid gap-1.5">
                    <span className="text-xs font-semibold text-slate-300">Email <span className="text-slate-500 font-normal">(optional)</span></span>
                    <input className={inputClass} placeholder="you@company.com" type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
                  </label>

                  {/* Brief preview */}
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
                    <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-widest text-brand-blue-300">Your brief summary</p>
                    <div className="space-y-1.5 text-xs text-slate-400">
                      {[
                        form.businessType,
                        form.serviceNeeded,
                        form.painPoint,
                        form.goal,
                        form.budget && form.timeline ? `${form.budget} · ${form.timeline}` : form.budget || form.timeline,
                      ].filter(Boolean).map((line, i) => (
                        <p key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-brand-blue-400" />
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => void handleGenerate()}
                    disabled={!canNext || loading}
                    className="flex items-center justify-center gap-2 rounded-full bg-brand-blue-600 py-3 px-6 text-sm font-bold text-white transition hover:bg-brand-blue-700 disabled:opacity-50"
                  >
                    {loading
                      ? <><Loader2 className="h-4 w-4 animate-spin" /> Generating Brief…</>
                      : <><Sparkles className="h-4 w-4" /> Generate My Project Brief</>}
                  </button>
                </div>
              )}

              {/* Step 6 — Result */}
              {step === 6 && result && (
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue-600">
                      <Sparkles className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-blue-300">Brief Generated</p>
                      <h3 className="text-lg font-bold text-white leading-tight">{result.recommendedSolution}</h3>
                    </div>
                  </div>

                  <p className="text-sm leading-7 text-slate-300">{result.summary}</p>

                  <div className="rounded-xl border border-white/10 bg-navy-950/40 p-4">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Suggested approach</p>
                    <p className="text-sm leading-7 text-slate-300">{result.projectApproach}</p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Delivery phases</p>
                    <div className="space-y-2.5">
                      {result.phases.map((phase, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue-500/15 text-[10px] font-bold text-brand-blue-300">
                            {i + 1}
                          </span>
                          {phase}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-brand-blue-500/20 bg-brand-blue-500/10 p-4">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-brand-blue-200">Next step</p>
                    <p className="text-sm leading-7 text-slate-200">{result.nextStep}</p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 px-5 text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
                    >
                      <MessageCircle className="h-4 w-4" /> Send via WhatsApp
                    </a>
                    <a
                      href={mailHref}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white py-3 px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                    >
                      <Mail className="h-4 w-4" /> Send via Email
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => { setStep(0); setDir(-1); setForm(EMPTY_FORM); setResult(null); setPainCustom(false); setGoalCustom(false); }}
                    className="text-center text-xs text-slate-500 transition hover:text-slate-300"
                  >
                    ↺ Start over
                  </button>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Navigation ────────────────────────────────────────── */}
        {step > 0 && step < 5 && (
          <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-5">
            <button
              type="button"
              onClick={back}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.08]"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
            <button
              type="button"
              onClick={next}
              disabled={!canNext}
              className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold transition ${
                canNext
                  ? "bg-brand-blue-600 text-white hover:bg-brand-blue-700 shadow-sm"
                  : "cursor-not-allowed bg-white/10 text-slate-500"
              }`}
            >
              Next <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {step === 5 && (
          <button
            type="button"
            onClick={back}
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 transition hover:text-slate-300"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back
          </button>
        )}

      </div>
    </div>
  );
}
