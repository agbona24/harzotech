"use client";

import { useState, useRef } from "react";
import { MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import { trackLead } from "@/lib/pixel";

const WA_NUMBER = "2347069716822";

export function PackageInquiryForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading]   = useState(false);
  const [done, setDone]         = useState(false);
  const submitted = useRef(false);

  const valid = form.name.trim().length > 0 && form.phone.trim().length > 0 && form.message.trim().length > 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid || submitted.current) return;
    submitted.current = true;
    setLoading(true);

    await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, source: "package-inquiry" }),
    }).catch(() => {});

    trackLead();
    setDone(true);
    setLoading(false);

    const text = encodeURIComponent(
      `Hi Harzotech 👋\n\nI have a question about your packages.\n\n*Name:* ${form.name}\n*Message:* ${form.message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
    }, 300);
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-green-500" />
        <p className="text-base font-bold text-slate-900">Message received!</p>
        <p className="text-sm text-slate-500">Check WhatsApp — we'll confirm and answer your question shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-xs font-semibold text-slate-700">Your name <span className="text-brand-red-500">*</span></span>
          <input
            className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100"
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            required
          />
        </label>
        <label className="grid gap-1.5">
          <span className="text-xs font-semibold text-slate-700">WhatsApp number <span className="text-brand-red-500">*</span></span>
          <input
            className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100"
            placeholder="+234 800 000 0000"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            required
          />
        </label>
      </div>
      <label className="grid gap-1.5">
        <span className="text-xs font-semibold text-slate-700">What do you need? <span className="text-brand-red-500">*</span></span>
        <textarea
          className="min-h-[90px] w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100"
          placeholder="e.g. I run a pharmacy in Lagos and need an e-commerce site with stock management…"
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          required
        />
      </label>
      <button
        type="submit"
        disabled={!valid || loading}
        className={`flex items-center justify-center gap-2 rounded-full py-3 text-sm font-bold transition ${
          valid && !loading
            ? "bg-brand-blue-700 text-white hover:bg-brand-blue-800 shadow-sm"
            : "cursor-not-allowed bg-slate-100 text-slate-400"
        }`}
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <MessageCircle className="h-4 w-4" />}
        {loading ? "Sending…" : "Send via WhatsApp"}
      </button>
      <p className="text-center text-[11px] text-slate-400">
        We'll reply within a few hours with a recommendation and quote.
      </p>
    </form>
  );
}
