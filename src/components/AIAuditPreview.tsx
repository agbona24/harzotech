"use client";

import { useState } from "react";
import { AlertTriangle, ChevronRight, Loader2, Search, Sparkles, Zap } from "lucide-react";

interface AuditIssue {
  area: string;
  finding: string;
  priority: "High" | "Medium";
}

interface AuditResult {
  score: number;
  summary: string;
  issues: AuditIssue[];
  quickWin: string;
}

export function AIAuditPreview() {
  const [url, setUrl] = useState("");
  const [business, setBusiness] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState("");

  const analyse = async () => {
    const trimmed = url.trim();
    if (!trimmed) { setError("Please enter your website URL."); return; }
    setError("");
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/ai/audit-preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: trimmed, business: business.trim() }),
      });
      const data = await res.json() as AuditResult;
      setResult(data);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const scoreColor =
    !result ? "" :
    result.score >= 70 ? "text-green-600" :
    result.score >= 50 ? "text-amber-600" :
    "text-red-600";

  const scoreBg =
    !result ? "" :
    result.score >= 70 ? "bg-green-50 border-green-200" :
    result.score >= 50 ? "bg-amber-50 border-amber-200" :
    "bg-red-50 border-red-200";

  return (
    <div className="rounded-2xl border border-brand-blue-100 bg-gradient-to-br from-brand-blue-50 to-white p-6 sm:p-8">
      <div className="mb-5 flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue-700">
          <Sparkles className="h-4 w-4 text-white" />
        </span>
        <div>
          <p className="text-sm font-black text-slate-900">AI Instant Preview</p>
          <p className="text-xs text-slate-500">Get a quick AI analysis before the full manual audit</p>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-700">Your website URL</label>
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 focus-within:border-brand-blue-400 focus-within:ring-2 focus-within:ring-brand-blue-400/20 transition">
            <Search className="h-4 w-4 shrink-0 text-slate-400" />
            <input
              type="url"
              placeholder="https://yourbusiness.com"
              value={url}
              onChange={(e) => { setUrl(e.target.value); setError(""); }}
              onKeyDown={(e) => { if (e.key === "Enter") void analyse(); }}
              className="flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none"
            />
          </div>
          {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-700">
            What does your business do? <span className="font-normal text-slate-400">(optional but improves accuracy)</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Real estate agency in Lagos, dental clinic, e-commerce store…"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-400/20 transition"
          />
        </div>

        <button
          onClick={() => void analyse()}
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-brand-blue-800 disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Analysing your website…
            </>
          ) : (
            <>
              <Zap className="h-4 w-4" />
              Get AI Preview
            </>
          )}
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="mt-6 space-y-4 border-t border-brand-blue-100 pt-6">
          {/* Score */}
          <div className={`flex items-center gap-4 rounded-xl border p-4 ${scoreBg}`}>
            <div className="text-center">
              <p className={`text-4xl font-black ${scoreColor}`}>{result.score}</p>
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">/ 100</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Estimated Health Score</p>
              <p className="mt-0.5 text-sm font-semibold text-slate-800">{result.summary}</p>
            </div>
          </div>

          {/* Issues */}
          <div className="space-y-2.5">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Likely Issues Found</p>
            {result.issues.map((issue, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5">
                <AlertTriangle className={`mt-0.5 h-4 w-4 shrink-0 ${issue.priority === "High" ? "text-red-500" : "text-amber-500"}`} />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-bold text-slate-900">{issue.area}</p>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${issue.priority === "High" ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-600"}`}>
                      {issue.priority}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs leading-5 text-slate-600">{issue.finding}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick win */}
          <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-3.5">
            <Zap className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
            <div>
              <p className="text-xs font-bold text-green-800">Quick Win</p>
              <p className="mt-0.5 text-xs leading-5 text-green-700">{result.quickWin}</p>
            </div>
          </div>

          {/* CTA nudge */}
          <div className="rounded-xl bg-[#0c1e3b] p-4 text-center">
            <p className="text-xs font-semibold text-slate-300">
              This is an AI preview — not the full audit.
            </p>
            <p className="mt-1 text-sm font-bold text-white">
              Submit the form below for a full manual 5-point audit delivered to your WhatsApp.
            </p>
            <button
              onClick={() => document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-brand-red-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-brand-red-700"
            >
              Request Full Audit <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
