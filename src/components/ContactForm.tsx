"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";

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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}\n`;

    const params = new URLSearchParams({
      subject,
      body,
    });

    return `mailto:${toEmail}?${params.toString()}`;
  }, [toEmail, subject, name, email, message]);

  return (
    <form
      className="mt-6 grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref;
      }}
    >
      <label className="grid gap-2">
        <span className="text-xs font-semibold text-slate-700">Full name</span>
        <input
          className="h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/30"
          placeholder="Your name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className="grid gap-2">
        <span className="text-xs font-semibold text-slate-700">Email</span>
        <input
          className="h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/30"
          placeholder="you@company.com"
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className="grid gap-2">
        <span className="text-xs font-semibold text-slate-700">Message</span>
        <textarea
          className="min-h-32 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/30"
          placeholder="Tell us what you need (website, software, automation, IT support, SEO…)"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" className="flex-1">
          Send via Email
        </Button>
        <a
          className="inline-flex h-12 flex-1 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
          href={mailtoHref}
        >
          Open Email App
        </a>
      </div>

      <p className="text-xs text-slate-500">
        This sends your message through your email app to {toEmail}.
      </p>
    </form>
  );
}
