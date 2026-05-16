"use client";

import { useState } from "react";
import { Loader2, Search, Sparkles, X } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

interface Match { slug: string; reason: string; }

const SUGGESTIONS = [
  "Real estate website with listings",
  "Hospital or clinic booking system",
  "E-commerce store for retail",
  "WhatsApp automation for a business",
  "School or education platform",
  "Restaurant with online orders",
];

export function AIProjectMatcher() {
  const [query, setQuery]     = useState("");
  const [loading, setLoading] = useState(false);
  const [matches, setMatches] = useState<Match[] | null>(null);
  const [error, setError]     = useState("");

  const run = async (q: string) => {
    const trimmed = q.trim();
    if (!trimmed) return;
    setQuery(trimmed);
    setError("");
    setLoading(true);
    setMatches(null);

    try {
      const res  = await fetch("/api/ai/match-projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: trimmed }),
      });
      const data = await res.json() as { matches?: Match[] };
      setMatches(data.matches ?? []);
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => { setQuery(""); setMatches(null); setError(""); };

  const matchedProjects = (matches ?? [])
    .map((m) => ({ ...m, project: projects.find((p) => p.slug === m.slug) }))
    .filter((m) => m.project);

  return (
    <div className="rounded-2xl border border-brand-blue-100 bg-gradient-to-br from-[#0c1e3b] to-navy-900 p-6 sm:p-8">
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue-600">
          <Sparkles className="h-4 w-4 text-white" />
        </span>
        <div>
          <p className="text-sm font-black text-white">AI Portfolio Matcher</p>
          <p className="text-xs text-slate-400">Describe what you need — AI finds the most relevant past work</p>
        </div>
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 focus-within:border-brand-blue-500 focus-within:ring-2 focus-within:ring-brand-blue-500/20 transition">
          <Search className="h-4 w-4 shrink-0 text-slate-400" />
          <input
            type="text"
            placeholder="e.g. healthcare booking platform, real estate listings…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") void run(query); }}
            className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 outline-none"
          />
          {query && (
            <button onClick={reset} className="text-slate-500 hover:text-slate-300 transition">
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
        <button
          onClick={() => void run(query)}
          disabled={!query.trim() || loading}
          className="flex items-center gap-2 rounded-xl bg-brand-blue-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-brand-blue-700 disabled:opacity-40"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
          <span className="hidden sm:inline">{loading ? "Matching…" : "Find Similar"}</span>
        </button>
      </div>

      {/* Suggestions */}
      {!matches && !loading && (
        <div className="mt-4">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-slate-500">Try one of these</p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => void run(s)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400 transition hover:border-brand-blue-500/50 hover:bg-brand-blue-900/30 hover:text-brand-blue-300"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Error */}
      {error && <p className="mt-3 text-xs text-red-400">{error}</p>}

      {/* Loading skeleton */}
      {loading && (
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-48 animate-pulse rounded-2xl bg-white/5" />
          ))}
        </div>
      )}

      {/* Results */}
      {!loading && matchedProjects.length > 0 && (
        <div className="mt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
            {matchedProjects.length} matching project{matchedProjects.length !== 1 ? "s" : ""} found
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {matchedProjects.map(({ project, reason }) => (
              <div key={project!.slug} className="flex flex-col gap-2">
                <ProjectCard project={project!} />
                <div className="rounded-xl border border-brand-blue-700/30 bg-brand-blue-900/20 px-3 py-2">
                  <p className="text-[11px] leading-5 text-brand-blue-300">
                    <span className="font-bold text-brand-blue-200">Why this fits: </span>
                    {reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={reset}
            className="mt-5 text-xs font-semibold text-slate-500 hover:text-slate-300 transition underline underline-offset-2"
          >
            ↺ Search again
          </button>
        </div>
      )}

      {/* No results */}
      {!loading && matches !== null && matchedProjects.length === 0 && (
        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 py-8 text-center">
          <p className="text-sm text-slate-400">No close matches found. Try different keywords.</p>
          <button onClick={reset} className="mt-2 text-xs font-semibold text-brand-blue-400 hover:underline">
            Clear and try again
          </button>
        </div>
      )}
    </div>
  );
}
