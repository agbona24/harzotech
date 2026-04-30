"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Globe, ScanSearch } from "lucide-react";
import { Button, ButtonLink } from "@/components/Button";
import type { AuditResult } from "@/lib/ai-leads";

const FOCUS_AREAS = [
  { id: "general", label: "General" },
  { id: "conversion", label: "Conversions" },
  { id: "seo", label: "SEO" },
  { id: "mobile", label: "Mobile" },
] as const;

const EMPTY_RESULT: AuditResult = {
  summary: "Enter a website URL to generate a quick Harzotech-style audit.",
  recommendedService: "Website Audit",
  focusArea: "general",
  scores: { clarity: 0, trust: 0, conversion: 0, mobile: 0 },
  actions: [],
};

export function WebsiteAuditWidget() {
  const [url, setUrl] = useState("");
  const [focusArea, setFocusArea] = useState<(typeof FOCUS_AREAS)[number]["id"]>("general");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult>(EMPTY_RESULT);

  const hasResult = result.actions.length > 0;
  const scores = useMemo(
    () => [
      { label: "Clarity", value: result.scores.clarity },
      { label: "Trust", value: result.scores.trust },
      { label: "Conversion", value: result.scores.conversion },
      { label: "Mobile", value: result.scores.mobile },
    ],
    [result],
  );

  async function handleGenerate() {
    if (!url.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/ai/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, focusArea }),
      });

      if (!response.ok) throw new Error("Request failed");
      setResult((await response.json()) as AuditResult);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue-100 bg-brand-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue-700">
          <ScanSearch className="h-3.5 w-3.5" />
          AI Website Audit
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Get a quick AI review of your current website
        </h2>
        <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
          Drop in your website URL and get a fast Harzotech-style review focused on clarity, trust, conversion, and mobile experience.
        </p>
        <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Website URL
          </label>
          <div className="mt-3 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <Globe className="h-4 w-4 text-slate-400" />
            <input
              className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              placeholder="https://yourwebsite.com"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {FOCUS_AREAS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFocusArea(item.id)}
                className={`rounded-full border px-3 py-2 text-xs font-semibold transition ${
                  focusArea === item.id
                    ? "border-brand-blue-200 bg-brand-blue-50 text-brand-blue-700"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <Button variant="cta" className="mt-5 w-full" onClick={() => void handleGenerate()} disabled={loading}>
            {loading ? "Generating Audit..." : "Audit My Website"}
          </Button>
        </div>
      </div>

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-700">
              Audit snapshot
            </p>
            <p className="mt-2 text-sm text-slate-500">{result.recommendedService}</p>
          </div>
          <ButtonLink href="/contact?intent=consultation" variant="secondary" size="sm">
            Book Strategy Call
          </ButtonLink>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600">{result.summary}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {scores.map((score) => (
            <div key={score.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-800">{score.label}</p>
                <p className="text-sm font-bold text-slate-950">{score.value || "--"}</p>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-brand-blue-700 to-brand-red-700"
                  style={{ width: `${score.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Priority actions
          </p>
          <div className="mt-4 space-y-3">
            {hasResult ? (
              result.actions.map((action) => (
                <div key={action} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-blue-700" />
                  <span>{action}</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-500">Your top recommendations will appear here after the audit runs.</p>
            )}
          </div>
          {hasResult ? (
            <ButtonLink href="/website-development" variant="primary" className="mt-5">
              Upgrade My Website
              <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </div>
  );
}
