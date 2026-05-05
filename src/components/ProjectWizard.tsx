"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Globe, Code2, Bot, DatabaseZap, LineChart, Headset,
  MessageCircle, Mail, ArrowLeft, ArrowRight, CheckCircle2,
  HelpCircle, X,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

const WA_NUMBER = "2347069716822";

/* ── Data ──────────────────────────────────────────────────────── */

const SERVICES = [
  { id: "website",   label: "Website Design",      desc: "Business site, e-commerce, landing page",  Icon: Globe       },
  { id: "software",  label: "Custom Software",      desc: "CRM, portal, POS, booking system",         Icon: Code2       },
  { id: "ai",        label: "AI & Automation",      desc: "WhatsApp bot, voice agent, workflows",     Icon: Bot         },
  { id: "migration", label: "Data Migration",       desc: "Hosting, legacy system, spreadsheet",      Icon: DatabaseZap },
  { id: "seo",       label: "SEO & Marketing",      desc: "Rankings, Google visibility, leads",       Icon: LineChart   },
  { id: "it",        label: "IT Support",           desc: "Managed support, backups, security",       Icon: Headset     },
  { id: "unsure",    label: "Not sure yet",         desc: "Tell us your problem — we'll advise",      Icon: HelpCircle  },
] as const;

type ServiceId = typeof SERVICES[number]["id"];

const SERVICE_TYPES: Record<ServiceId, string[]> = {
  website:   ["Business website", "E-commerce store", "Landing page", "Company profile", "Real estate site", "Other"],
  software:  ["CRM / Sales system", "Booking platform", "POS & inventory", "Staff / HR portal", "Dashboard & reports", "SaaS product", "Other"],
  ai:        ["WhatsApp automation", "AI voice agent", "Appointment booking bot", "Lead capture flow", "Invoice automation", "Other"],
  migration: ["Website / hosting move", "Spreadsheet to software", "Legacy system", "Database migration", "Cloud migration", "Other"],
  seo:       ["Local SEO (Lagos/Nigeria)", "Google rankings", "Google Business Profile", "Content strategy", "Full digital marketing", "Other"],
  it:        ["Help desk & support", "Cloud backup", "Security monitoring", "Email setup", "Network management", "Other"],
  unsure:    [],
};

const GOALS = [
  "Get more customers",
  "Look more professional",
  "Automate manual work",
  "Save time & reduce costs",
  "Launch a new product",
  "Better customer service",
  "Improve online visibility",
  "Replace old system",
];

const BUDGETS = ["Under ₦500k", "₦500k – ₦2m", "₦2m – ₦5m", "₦5m+", "Not sure yet"];
const TIMELINES = ["ASAP", "Within 1 month", "2–3 months", "6 months+", "Flexible"];

/* ── Types ─────────────────────────────────────────────────────── */

interface WizardForm {
  service: ServiceId | "";
  serviceType: string;
  goals: string[];
  budget: string;
  timeline: string;
  name: string;
  phone: string;
  email: string;
}

const EMPTY: WizardForm = {
  service: "", serviceType: "", goals: [],
  budget: "", timeline: "",
  name: "", phone: "", email: "",
};

const TOTAL_STEPS = 5;

/* ── Helpers ───────────────────────────────────────────────────── */

function stepTitle(step: number): string {
  return ["What do you need help with?", "Which best describes what you need?", "What outcome are you looking for?", "Budget & timeline", "Your contact details"][step] ?? "";
}

/* ── Sub-components ────────────────────────────────────────────── */

function Chip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium transition-all ${
        selected
          ? "border-brand-blue-600 bg-brand-blue-700 text-white shadow-sm"
          : "border-slate-200 bg-white text-slate-700 hover:border-brand-blue-300 hover:bg-brand-blue-50"
      }`}
    >
      {selected && <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />}
      {label}
    </button>
  );
}

/* ── Main component ─────────────────────────────────────────────── */

export function ProjectWizard({ toEmail, intent }: { toEmail: string; intent?: string }) {
  const [skipped, setSkipped] = useState(false);
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [form, setForm] = useState<WizardForm>(EMPTY);

  /* navigation */
  function next() { setDir(1);  setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1)); }
  function back() { setDir(-1); setStep((s) => Math.max(s - 1, 0)); }

  function setService(id: ServiceId) {
    setForm((f) => ({ ...f, service: id, serviceType: "", goals: [] }));
    setDir(1);
    setStep(id === "unsure" ? 2 : 1);
  }

  function toggleGoal(g: string) {
    setForm((f) => ({
      ...f,
      goals: f.goals.includes(g) ? f.goals.filter((x) => x !== g) : [...f.goals, g],
    }));
  }

  /* brief text for WhatsApp / email */
  const briefText = useMemo(() => {
    const svc = SERVICES.find((s) => s.id === form.service);
    const lines = [
      `Hi Harzotech 👋`,
      ``,
      `*New Project Brief*`,
      ``,
      `*Service:* ${svc?.label ?? "—"}`,
      form.serviceType ? `*Type:* ${form.serviceType}` : null,
      form.goals.length  ? `*Goals:* ${form.goals.join(", ")}` : null,
      form.budget        ? `*Budget:* ${form.budget}` : null,
      form.timeline      ? `*Timeline:* ${form.timeline}` : null,
      ``,
      `*Name:* ${form.name || "—"}`,
      `*Phone:* ${form.phone || "—"}`,
      form.email ? `*Email:* ${form.email}` : null,
    ].filter((l) => l !== null).join("\n");
    return lines;
  }, [form]);

  const waHref    = useMemo(() => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(briefText)}`, [briefText]);
  const mailHref  = useMemo(() => {
    const params = new URLSearchParams({ subject: "New Project Brief", body: briefText.replace(/\*/g, "") });
    return `mailto:${toEmail}?${params}`;
  }, [toEmail, briefText]);

  const canNext: boolean = (() => {
    if (step === 0) return !!form.service;
    if (step === 1) return !!form.serviceType;
    if (step === 2) return form.goals.length > 0;
    if (step === 3) return !!form.budget && !!form.timeline;
    if (step === 4) return !!form.name.trim() && !!form.phone.trim();
    return false;
  })();

  /* animation variants */
  const variants = {
    enter:  (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0 }),
  };

  if (skipped) {
    return (
      <div>
        <button
          type="button"
          onClick={() => setSkipped(false)}
          className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue-700 hover:underline"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to project wizard
        </button>
        <ContactForm toEmail={toEmail} intent={intent} />
      </div>
    );
  }

  /* ── Step content ─────────────────────────────────────────────── */

  const serviceTypes = form.service ? SERVICE_TYPES[form.service] : [];

  return (
    <div className="flex flex-col gap-5">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i < step ? "w-6 bg-brand-blue-700" : i === step ? "w-8 bg-brand-blue-500" : "w-4 bg-slate-200"
              }`}
            />
          ))}
          <span className="ml-1 text-[11px] font-semibold text-slate-400">
            {step + 1} / {TOTAL_STEPS}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setSkipped(true)}
          className="flex items-center gap-1 text-xs font-medium text-slate-400 transition hover:text-slate-600"
        >
          <X className="h-3 w-3" /> Skip wizard
        </button>
      </div>

      {/* Step heading */}
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue-600">
          Step {step + 1}
        </p>
        <h3 className="mt-1 text-base font-bold text-slate-900">{stepTitle(step)}</h3>
      </div>

      {/* Animated step body */}
      <div className="relative min-h-[220px] overflow-hidden">
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

            {/* Step 0 — Service */}
            {step === 0 && (
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {SERVICES.map(({ id, label, desc, Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setService(id)}
                    className={`group flex flex-col items-start gap-2 rounded-2xl border p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-md ${
                      form.service === id
                        ? "border-brand-blue-600 bg-brand-blue-50 shadow-sm"
                        : "border-slate-200 bg-white hover:border-brand-blue-200"
                    }`}
                  >
                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
                      form.service === id ? "bg-brand-blue-700 text-white" : "bg-slate-100 text-slate-600 group-hover:bg-brand-blue-100 group-hover:text-brand-blue-700"
                    }`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className={`text-[13px] font-bold leading-tight ${form.service === id ? "text-brand-blue-700" : "text-slate-900"}`}>{label}</p>
                      <p className="mt-0.5 text-[11px] leading-tight text-slate-500">{desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Step 1 — Service type */}
            {step === 1 && (
              <div className="flex flex-wrap gap-2">
                {serviceTypes.map((t) => (
                  <Chip
                    key={t}
                    label={t}
                    selected={form.serviceType === t}
                    onClick={() => setForm((f) => ({ ...f, serviceType: t }))}
                  />
                ))}
              </div>
            )}

            {/* Step 2 — Goals */}
            {step === 2 && (
              <div className="flex flex-wrap gap-2">
                {GOALS.map((g) => (
                  <Chip
                    key={g}
                    label={g}
                    selected={form.goals.includes(g)}
                    onClick={() => toggleGoal(g)}
                  />
                ))}
                <p className="w-full text-[11px] text-slate-400 mt-1">Select all that apply.</p>
              </div>
            )}

            {/* Step 3 — Budget & Timeline */}
            {step === 3 && (
              <div className="flex flex-col gap-5">
                <div>
                  <p className="mb-2.5 text-xs font-semibold text-slate-600">Budget range</p>
                  <div className="flex flex-wrap gap-2">
                    {BUDGETS.map((b) => (
                      <Chip key={b} label={b} selected={form.budget === b} onClick={() => setForm((f) => ({ ...f, budget: b }))} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2.5 text-xs font-semibold text-slate-600">When do you need this?</p>
                  <div className="flex flex-wrap gap-2">
                    {TIMELINES.map((t) => (
                      <Chip key={t} label={t} selected={form.timeline === t} onClick={() => setForm((f) => ({ ...f, timeline: t }))} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4 — Contact */}
            {step === 4 && (
              <div className="flex flex-col gap-3">
                <label className="grid gap-1.5">
                  <span className="text-xs font-semibold text-slate-700">Full name <span className="text-brand-red-500">*</span></span>
                  <input
                    className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-xs font-semibold text-slate-700">Phone / WhatsApp <span className="text-brand-red-500">*</span></span>
                  <input
                    className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100"
                    placeholder="+234 800 000 0000"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-xs font-semibold text-slate-700">Email <span className="text-slate-400 font-normal">(optional)</span></span>
                  <input
                    className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100"
                    placeholder="you@company.com"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  />
                </label>

                {/* Brief preview */}
                {form.name && form.phone && (
                  <div className="mt-1 rounded-xl border border-brand-blue-100 bg-brand-blue-50/50 p-4">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-brand-blue-600">Your brief preview</p>
                    <div className="space-y-1 text-xs text-slate-700">
                      {[
                        SERVICES.find((s) => s.id === form.service)?.label,
                        form.serviceType,
                        form.goals.length ? form.goals.join(", ") : null,
                        form.budget && form.timeline ? `${form.budget} · ${form.timeline}` : form.budget || form.timeline,
                      ].filter(Boolean).map((line, i) => (
                        <p key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-brand-blue-500" />
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Send buttons */}
                {canNext && (
                  <div className="mt-2 flex flex-col gap-2.5 sm:flex-row">
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1ebe5d]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Send via WhatsApp
                    </a>
                    <a
                      href={mailHref}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white py-3 px-5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                    >
                      <Mail className="h-4 w-4" />
                      Send via Email
                    </a>
                  </div>
                )}
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav buttons (steps 1–3 only — step 0 auto-advances, step 4 uses send) */}
      {step > 0 && step < 4 && (
        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={back}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <button
            type="button"
            onClick={next}
            disabled={!canNext}
            className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold transition ${
              canNext
                ? "bg-brand-blue-700 text-white hover:bg-brand-blue-800 shadow-sm"
                : "cursor-not-allowed bg-slate-100 text-slate-400"
            }`}
          >
            Next <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Back button on contact step */}
      {step === 4 && (
        <button
          type="button"
          onClick={back}
          className="mt-1 inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-slate-400 transition hover:text-slate-600"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back
        </button>
      )}
    </div>
  );
}
