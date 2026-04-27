"use client";

import { useMemo, useState } from "react";
import { MessageCircle, Mail } from "lucide-react";

const WA_NUMBER = "2347069716822";

export function ContactForm({
  toEmail,
  intent,
}: {
  toEmail: string;
  intent?: string;
}) {
  const subject = useMemo(() => {
    if (intent === "consultation") return "Consultation Request";
    if (intent === "start-project") return "New Project Request";
    return "Contact Request";
  }, [intent]);

  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [phone, setPhone]     = useState("");
  const [message, setMessage] = useState("");

  const waHref = useMemo(() => {
    const text =
      `Hi Harzotech 👋\n\n` +
      `*${subject}*\n\n` +
      `*Name:* ${name || "—"}\n` +
      `*Email:* ${email || "—"}\n` +
      `*Phone:* ${phone || "—"}\n\n` +
      `*Message:*\n${message || "—"}`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  }, [subject, name, email, phone, message]);

  const mailtoHref = useMemo(() => {
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n\n` +
      `Message:\n${message}`;
    const params = new URLSearchParams({ subject, body });
    return `mailto:${toEmail}?${params.toString()}`;
  }, [toEmail, subject, name, email, phone, message]);

  const inputClass =
    "h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100";

  return (
    <div className="mt-6 grid gap-4">
      <label className="grid gap-1.5">
        <span className="text-xs font-semibold text-slate-700">Full name <span className="text-brand-red-500">*</span></span>
        <input className={inputClass} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-xs font-semibold text-slate-700">Email</span>
          <input className={inputClass} placeholder="you@company.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="grid gap-1.5">
          <span className="text-xs font-semibold text-slate-700">Phone / WhatsApp</span>
          <input className={inputClass} placeholder="+234 800 000 0000" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
      </div>

      <label className="grid gap-1.5">
        <span className="text-xs font-semibold text-slate-700">Message <span className="text-brand-red-500">*</span></span>
        <textarea
          className="min-h-32 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100"
          placeholder="Tell us what you need — website, software, AI automation, IT support, SEO…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={name && message ? waHref : undefined}
          onClick={(e) => { if (!name || !message) e.preventDefault(); }}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full py-3 px-5 text-sm font-semibold transition ${
            name && message
              ? "bg-[#25D366] text-white hover:bg-[#1ebe5d] shadow-sm"
              : "cursor-not-allowed bg-slate-100 text-slate-400"
          }`}
        >
          <MessageCircle className="h-4 w-4" />
          Send via WhatsApp
        </a>
        <a
          href={name && message ? mailtoHref : undefined}
          onClick={(e) => { if (!name || !message) e.preventDefault(); }}
          className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full border py-3 px-5 text-sm font-semibold transition ${
            name && message
              ? "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-sm"
              : "cursor-not-allowed border-slate-100 bg-white text-slate-400"
          }`}
        >
          <Mail className="h-4 w-4" />
          Send via Email
        </a>
      </div>

      <p className="text-xs text-slate-400">
        Fill in your name and message, then choose how to reach us. WhatsApp gets the fastest reply.
      </p>
    </div>
  );
}
