"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Cpu, FolderOpen, ExternalLink, Search, X } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

/* ── Industry filters ────────────────────────────────────────────── */
interface IndustryFilter { id: string; label: string; test: (i: string) => boolean }
interface StackFilter    { id: string; label: string; test: (t: string[]) => boolean }

const INDUSTRY_FILTERS: IndustryFilter[] = [
  { id: "all",           label: "All Industries",     test: ()  => true },
  { id: "corporate",     label: "Corporate",           test: (i) => /consult|corporate|invest|holding|facilit|professional|branding|media|news|chamber|marketing|strategy/i.test(i) },
  { id: "healthcare",    label: "Healthcare",          test: (i) => /health|medical|dental|pharma|clinic|derma|skincare/i.test(i) },
  { id: "real-estate",   label: "Real Estate",         test: (i) => /real.?estate|realty|property/i.test(i) },
  { id: "education",     label: "Education",           test: (i) => /educat|school|training|tutor|quran|college|montessori|event/i.test(i) },
  { id: "fintech",       label: "FinTech",             test: (i) => /fintech|crypto|trading|payment|savings|bank|financ|currency/i.test(i) },
  { id: "ecommerce",     label: "E-commerce",          test: (i) => /e.?commerce|retail|manufactur|industrial|paint|agr/i.test(i) },
  { id: "hospitality",   label: "Hospitality",         test: (i) => /hospitality|restaurant|hotel/i.test(i) },
  { id: "technology",    label: "Technology & SaaS",   test: (i) => /technolog|saas|enterprise|software|digital.?solut/i.test(i) },
  { id: "ai-automation", label: "AI & Automation",     test: (i) => /ai|automation|bot/i.test(i) },
  { id: "politics",      label: "Politics & NGO",      test: (i) => /polit|ngo|campaign|public/i.test(i) },
];

const STACK_FILTERS: StackFilter[] = [
  { id: "all",           label: "All Stacks",          test: ()  => true },
  { id: "nextjs",        label: "Next.js",             test: (t) => t.some(tag => /next\.?js/i.test(tag)) },
  { id: "laravel",       label: "Laravel",             test: (t) => t.some(tag => /laravel/i.test(tag)) },
  { id: "wordpress",     label: "WordPress",           test: (t) => t.some(tag => /wordpress/i.test(tag)) },
  { id: "react-vite",    label: "React / Vite",        test: (t) => t.some(tag => /^react$|^vite$/i.test(tag)) },
  { id: "ai-automation", label: "AI / Automation",     test: (t) => t.some(tag => /ai.?automat|^n8n$|openai|zapier|^make$|^automation$/i.test(tag)) },
  { id: "cms",           label: "CMS / Low-code",      test: (t) => t.some(tag => /sanity|airtable|zapier|make|notion/i.test(tag)) },
];

/* ── Animation ───────────────────────────────────────────────────── */
const staggerContainer = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};
const cardItem = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

/* ── Stats ───────────────────────────────────────────────────────── */
const withImages   = projects.filter((p) => p.image).length;
const withUrl      = projects.filter((p) => p.url).length;
const aiProjects   = projects.filter((p) => /ai|automation|bot/i.test(p.industry)).length;

const STATS = [
  { value: `${projects.length}+`, label: "Projects Delivered" },
  { value: `${withImages}`,       label: "With Live Screenshots" },
  { value: `${withUrl}`,          label: "Live & Deployed" },
  { value: `${aiProjects}+`,      label: "AI / Automation Builds" },
];

/* ── Chip component ──────────────────────────────────────────────── */
function Chip({ label, count, active, onClick }: {
  label: string; count: number; active: boolean; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
        active
          ? "border-brand-blue-600 bg-brand-blue-700 text-white shadow-sm"
          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
      }`}
    >
      {label}
      {count > 0 && (
        <span className={`rounded-full px-1.5 py-px text-[10px] font-bold ${
          active ? "bg-brand-blue-800/70 text-brand-blue-200" : "bg-slate-100 text-slate-500"
        }`}>
          {count}
        </span>
      )}
    </button>
  );
}

/* ── Main component ──────────────────────────────────────────────── */
export function ProjectsGrid() {
  const [activeIndustry, setActiveIndustry] = useState("all");
  const [activeStack,    setActiveStack]    = useState("all");
  const [searchQuery,    setSearchQuery]    = useState("");

  const industryFilter = INDUSTRY_FILTERS.find((f) => f.id === activeIndustry)!;
  const stackFilter    = STACK_FILTERS.find((f) => f.id === activeStack)!;

  /* filtered list */
  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return projects.filter((p) => {
      const matchSearch = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || (p.industry ?? "").toLowerCase().includes(q);
      return matchSearch && industryFilter.test(p.industry) && stackFilter.test(p.tags ?? []);
    });
  }, [activeIndustry, activeStack, searchQuery]); // eslint-disable-line react-hooks/exhaustive-deps

  /* per-chip counts (respect the OTHER active filter + search) */
  const industryCounts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return Object.fromEntries(
      INDUSTRY_FILTERS.map((f) => [
        f.id,
        projects.filter((p) => {
          const matchSearch = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || (p.industry ?? "").toLowerCase().includes(q);
          return matchSearch && f.test(p.industry) && stackFilter.test(p.tags ?? []);
        }).length,
      ])
    );
  }, [activeStack, searchQuery]); // eslint-disable-line react-hooks/exhaustive-deps

  const stackCounts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return Object.fromEntries(
      STACK_FILTERS.map((f) => [
        f.id,
        projects.filter((p) => {
          const matchSearch = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || (p.industry ?? "").toLowerCase().includes(q);
          return matchSearch && industryFilter.test(p.industry) && f.test(p.tags ?? []);
        }).length,
      ])
    );
  }, [activeIndustry, searchQuery]); // eslint-disable-line react-hooks/exhaustive-deps

  const hasActiveFilters = activeIndustry !== "all" || activeStack !== "all" || searchQuery !== "";

  return (
    <div className="relative overflow-hidden bg-slate-50">
      {/* Stats strip */}
      <div className="border-b border-slate-200 bg-white">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-slate-200 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 px-4 py-6 text-center">
                <span className="text-2xl font-black tracking-tight text-slate-900">{s.value}</span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">{s.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-14 sm:py-20">

          {/* ── Search bar ──────────────────────────────────── */}
          <div className="relative mb-8">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by name, description or industry…"
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-10 text-sm text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* ── Filter rows ─────────────────────────────────── */}
          <div className="flex flex-col gap-5">
            {/* Industry row */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2">
                <Layers className="h-3.5 w-3.5 text-brand-blue-500" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Industry</span>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {INDUSTRY_FILTERS.map((f) => (
                  <Chip
                    key={f.id}
                    label={f.label}
                    count={industryCounts[f.id] ?? 0}
                    active={activeIndustry === f.id}
                    onClick={() => setActiveIndustry(f.id)}
                  />
                ))}
              </div>
            </div>

            {/* Stack row */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2">
                <Cpu className="h-3.5 w-3.5 text-brand-red-500" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Tech Stack</span>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {STACK_FILTERS.map((f) => (
                  <Chip
                    key={f.id}
                    label={f.label}
                    count={stackCounts[f.id] ?? 0}
                    active={activeStack === f.id}
                    onClick={() => setActiveStack(f.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Result count summary */}
          <div className="mt-8 flex items-center gap-2 border-b border-slate-200 pb-6">
            <FolderOpen className="h-4 w-4 text-slate-400" />
            <span className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-800">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "project" : "projects"}
              {searchQuery && (
                <> matching &ldquo;<span className="font-semibold text-slate-700">{searchQuery}</span>&rdquo;</>
              )}
              {activeIndustry !== "all" && (
                <> in <span className="font-semibold text-brand-blue-700">{industryFilter.label}</span></>
              )}
              {activeStack !== "all" && (
                <> · <span className="font-semibold text-brand-red-700">{stackFilter.label}</span></>
              )}
            </span>
            {hasActiveFilters && (
              <button
                onClick={() => { setActiveIndustry("all"); setActiveStack("all"); setSearchQuery(""); }}
                className="ml-auto text-xs font-medium text-slate-500 underline-offset-2 hover:text-slate-700 hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* ── Grid ────────────────────────────────────────── */}
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={`${activeIndustry}-${activeStack}-${searchQuery}`}
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {filtered.map((p) => (
                  <motion.div key={p.slug} variants={cardItem}>
                    <ProjectCard project={p} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-16 flex flex-col items-center gap-4 py-16 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <FolderOpen className="h-7 w-7 text-slate-400" />
                </div>
                <p className="text-base font-semibold text-slate-700">No projects match those filters</p>
                <p className="text-sm text-slate-500">Try a different industry or stack combination</p>
                <button
                  onClick={() => { setActiveIndustry("all"); setActiveStack("all"); setSearchQuery(""); }}
                  className="mt-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900"
                >
                  Show all projects
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Bottom CTA ──────────────────────────────────── */}
          {filtered.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
            >
              <div className="flex flex-col items-center gap-5 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue-200 bg-brand-blue-50 px-3 py-1">
                  <ExternalLink className="h-3.5 w-3.5 text-brand-blue-600" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue-700">Work with us</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  Building something{" "}
                  <span className="bg-gradient-to-r from-brand-blue-600 to-brand-red-500 bg-clip-text text-transparent">
                    similar to what you saw?
                  </span>
                </h3>
                <p className="max-w-lg text-sm leading-7 text-slate-600">
                  Tell us what you need and we&apos;ll scope it out. We&apos;ve done it across industries — chances are we already have the blueprint.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/contact?intent=start-project" variant="cta">Start a Project</ButtonLink>
                  <ButtonLink href="/contact?intent=consultation" variant="secondary">Book a Consultation</ButtonLink>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </Container>
    </div>
  );
}
