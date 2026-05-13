"use client";

import { useState, useRef } from "react";
import { MessageCircle, CheckCircle2, Loader2 } from "lucide-react";

const WA_NUMBER = "2347069716822";

export function BlogLeadCTA({ topic }: { topic: string }) {
  const [phone, setPhone] = useState("");
  const [name, setName]   = useState("");
  const [done, setDone]   = useState(false);
  const [loading, setLoading] = useState(false);
  const submitted = useRef(false);

  const valid = name.trim().length > 0 && phone.trim().length > 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid || submitted.current) return;
    submitted.current = true;
    setLoading(true);

    await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, source: "blog-cta", message: `Read: ${topic}` }),
    }).catch(() => {});

    setDone(true);
    setLoading(false);

    const text = encodeURIComponent(
      `Hi Harzotech 👋\n\nI just read "${topic}" on your blog and I'd like a free audit of my website.\n\nName: ${name}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
    }, 300);
  }

  return (
    <div className="not-prose my-10 overflow-hidden rounded-2xl border border-brand-blue-100 bg-gradient-to-br from-brand-blue-50 to-white">
      <div className="grid gap-6 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-10 sm:p-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-blue-600">
            Free · No obligation
          </p>
          <h3 className="mt-1.5 text-lg font-black text-slate-900">
            Want to know how your website scores?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            We'll audit your site across 5 areas — SEO, speed, mobile, conversion, and
            trust — and send you the results on WhatsApp within 24 hours.
          </p>
        </div>

        <div className="w-full sm:w-[260px] shrink-0">
          {done ? (
            <div className="flex flex-col items-center gap-3 text-center">
              <CheckCircle2 className="h-8 w-8 text-green-500" />
              <p className="text-sm font-semibold text-slate-900">Request sent!</p>
              <p className="text-xs text-slate-500">Check WhatsApp — we'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
              <input
                className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100"
                placeholder="WhatsApp number"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <button
                type="submit"
                disabled={!valid || loading}
                className={`flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold transition ${
                  valid && !loading
                    ? "bg-brand-blue-700 text-white hover:bg-brand-blue-800"
                    : "cursor-not-allowed bg-slate-100 text-slate-400"
                }`}
              >
                {loading
                  ? <Loader2 className="h-4 w-4 animate-spin" />
                  : <MessageCircle className="h-4 w-4" />}
                {loading ? "Sending…" : "Get Free Audit on WhatsApp"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
