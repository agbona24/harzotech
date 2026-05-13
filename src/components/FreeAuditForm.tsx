"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { trackLead } from "@/lib/pixel";

const WA_NUMBER = "2347069716822";

function waLink(name: string, phone: string, website: string) {
  const text = [
    `Hi Harzotech 👋`,
    ``,
    `I'd like a *free website audit* please.`,
    ``,
    `*Name:* ${name}`,
    `*Phone:* ${phone}`,
    website ? `*Website:* ${website}` : null,
  ].filter((l) => l !== null).join("\n");
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function FreeAuditForm() {
  const [form, setForm] = useState({ name: "", phone: "", website: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const valid = form.name.trim().length > 0 && form.phone.trim().length > 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;

    setLoading(true);
    setError("");

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          website: form.website,
          source: "free-audit",
        }),
      });
    } catch {
      // non-blocking
    }

    trackLead();
    setDone(true);
    setLoading(false);

    setTimeout(() => {
      window.open(waLink(form.name, form.phone, form.website), "_blank", "noopener,noreferrer");
    }, 400);
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-5 py-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-7 w-7 text-green-600" />
        </div>
        <div>
          <p className="text-base font-bold text-slate-900">Request received!</p>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
            Your WhatsApp should have opened. If not, tap the button below to
            reach us directly.
          </p>
        </div>
        <a
          href={waLink(form.name, form.phone, form.website)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1ebe5d]"
        >
          <MessageCircle className="h-4 w-4" />
          Open WhatsApp
        </a>
        <p className="text-xs text-slate-400">
          We typically respond within a few hours during business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="grid gap-1.5">
        <span className="text-xs font-semibold text-slate-700">
          Full name <span className="text-brand-red-500">*</span>
        </span>
        <input
          className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          required
        />
      </label>

      <label className="grid gap-1.5">
        <span className="text-xs font-semibold text-slate-700">
          WhatsApp number <span className="text-brand-red-500">*</span>
        </span>
        <input
          className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100"
          placeholder="+234 800 000 0000"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          required
        />
      </label>

      <label className="grid gap-1.5">
        <span className="text-xs font-semibold text-slate-700">
          Your website URL{" "}
          <span className="font-normal text-slate-400">(optional but recommended)</span>
        </span>
        <input
          className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100"
          placeholder="https://yourbusiness.com"
          type="url"
          value={form.website}
          onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
        />
      </label>

      {error && (
        <p className="rounded-lg bg-red-50 px-4 py-2.5 text-xs text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={!valid || loading}
        className={`mt-2 flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold transition ${
          valid && !loading
            ? "bg-brand-blue-700 text-white hover:bg-brand-blue-800 shadow-sm"
            : "cursor-not-allowed bg-slate-100 text-slate-400"
        }`}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <MessageCircle className="h-4 w-4" />
        )}
        {loading ? "Submitting…" : "Get My Free Audit"}
      </button>

      <p className="text-center text-[11px] leading-relaxed text-slate-400">
        By submitting, you agree to be contacted via WhatsApp about your audit
        results. We never spam or share your data.
      </p>
    </form>
  );
}
