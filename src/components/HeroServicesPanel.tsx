"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Float } from "@/components/Motion";
import { ArrowRight } from "lucide-react";

// ── Custom inline SVG icons (vector, no extra package) ───────────

function SvgWebsite() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
      <rect x="1" y="3" width="22" height="18" rx="2.5" />
      <line x1="1" y1="9" x2="23" y2="9" />
      <circle cx="4.5" cy="6" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="7.5" cy="6" r="0.8" fill="currentColor" stroke="none" />
      <line x1="5" y1="13.5" x2="19" y2="13.5" />
      <line x1="5" y1="17.5" x2="14" y2="17.5" />
    </svg>
  );
}

function SvgCode() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
      <rect x="1" y="3" width="22" height="18" rx="2.5" />
      <line x1="1" y1="9" x2="23" y2="9" />
      <polyline points="7.5,14 5,17 7.5,20" />
      <polyline points="16.5,14 19,17 16.5,20" />
      <line x1="11" y1="20" x2="13" y2="14" />
    </svg>
  );
}

function SvgAI() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="4" cy="7" r="1.5" />
      <circle cx="20" cy="7" r="1.5" />
      <circle cx="4" cy="17" r="1.5" />
      <circle cx="20" cy="17" r="1.5" />
      <line x1="5.5" y1="7.8" x2="9.8" y2="10.7" />
      <line x1="18.5" y1="7.8" x2="14.2" y2="10.7" />
      <line x1="5.5" y1="16.2" x2="9.8" y2="13.3" />
      <line x1="18.5" y1="16.2" x2="14.2" y2="13.3" />
    </svg>
  );
}

function SvgSEO() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
      <rect x="2" y="16" width="4" height="5" rx="1" />
      <rect x="8" y="11" width="4" height="10" rx="1" />
      <rect x="14" y="7" width="4" height="14" rx="1" />
      <polyline points="2,14 9,8.5 16,5" />
      <polyline points="13.5,5 16,5 16,7.5" />
    </svg>
  );
}

function SvgShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
      <path d="M12 2.5 L21 6.5 V13.5 C21 18.2 12 22.5 12 22.5 C12 22.5 3 18.2 3 13.5 V6.5 Z" />
      <polyline points="8.5,12.5 11.5,15.5 16,10" />
    </svg>
  );
}

function SvgBranding() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
      {/* Diamond mark — mirrors the Harzotech logo */}
      <rect x="5" y="5" width="14" height="14" rx="2" transform="rotate(45 12 12)" />
      {/* H letterform inside */}
      <line x1="9.5" y1="9.5" x2="9.5" y2="14.5" />
      <line x1="14.5" y1="9.5" x2="14.5" y2="14.5" />
      <line x1="9.5" y1="12" x2="14.5" y2="12" />
    </svg>
  );
}

// ── Services data ─────────────────────────────────────────────────
const SERVICES = [
  {
    title: "Website Development",
    description: "Premium, fast websites that convert.",
    tag: "Web & UI",
    Svg: SvgWebsite,
    iconCls: "bg-brand-blue-500/15 text-brand-blue-300 border-brand-blue-500/25",
    tagCls: "border-brand-blue-500/30 text-brand-blue-300",
    glowColor: "rgba(21,101,192,0.22)",
    glowDelay: "0s",
  },
  {
    title: "Software Development",
    description: "Custom systems built for real operations.",
    tag: "Custom Build",
    Svg: SvgCode,
    iconCls: "bg-brand-blue-800/30 text-brand-blue-200 border-brand-blue-700/25",
    tagCls: "border-white/10 text-slate-400",
    glowColor: "rgba(13,71,161,0.22)",
    glowDelay: "0.6s",
  },
  {
    title: "AI & Automation",
    description: "Intelligent workflows that run 24/7.",
    tag: "24/7 Workflows",
    Svg: SvgAI,
    iconCls: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    tagCls: "border-emerald-500/30 text-emerald-400",
    glowColor: "rgba(52,211,153,0.2)",
    glowDelay: "1.2s",
  },
  {
    title: "SEO & Digital Growth",
    description: "Visibility, leads, compounding results.",
    tag: "Lead Generation",
    Svg: SvgSEO,
    iconCls: "bg-brand-red-500/15 text-brand-red-300 border-brand-red-500/25",
    tagCls: "border-brand-red-500/30 text-brand-red-300",
    glowColor: "rgba(198,40,40,0.2)",
    glowDelay: "1.8s",
  },
  {
    title: "IT Support & Maintenance",
    description: "Reliable support when it matters.",
    tag: "Always On",
    Svg: SvgShield,
    iconCls: "bg-navy-800/60 text-slate-300 border-navy-700/40",
    tagCls: "border-white/10 text-slate-400",
    glowColor: "rgba(30,64,128,0.22)",
    glowDelay: "2.4s",
  },
  {
    title: "Corporate Branding & Identity",
    description: "Brand systems that build trust and recognition.",
    tag: "Identity Design",
    Svg: SvgBranding,
    iconCls: "bg-brand-blue-900/50 text-brand-blue-200 border-brand-blue-700/30",
    tagCls: "border-brand-blue-700/30 text-brand-blue-300",
    glowColor: "rgba(21,101,192,0.18)",
    glowDelay: "3.0s",
  },
] as const;

// ── Floating proof chips ──────────────────────────────────────────
const PROOF = [
  {
    label: "10+ Years Experience",
    dotCls: "bg-brand-blue-400",
    pos: "absolute -top-5 right-4 sm:-right-5",
    delay: 0.65,
  },
  {
    label: "AI-Powered Workflows",
    dotCls: "bg-emerald-400",
    pos: "absolute top-1/3 -right-1 sm:-right-7",
    delay: 0.77,
  },
  {
    label: "24/7 Automation Ready",
    dotCls: "bg-brand-red-400",
    pos: "absolute -bottom-5 left-4 sm:left-2",
    delay: 0.89,
  },
] as const;

// ── Framer Motion variants (typed, no tuple issues) ───────────────
const tileContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.3 } },
};

const tileItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

// ── Component ─────────────────────────────────────────────────────────
export function HeroServicesPanel() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative lg:pl-4">
      {/* Soft ambient glow behind the card */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand-blue-700/10 via-transparent to-brand-red-700/10 blur-2xl"
      />

      {/* Floating proof chips — hidden on small screens to avoid overflow */}
      {!reduceMotion &&
        PROOF.map((p) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
            className={`${p.pos} z-20 hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-navy-950/90 px-3 py-1.5 text-[11px] font-medium text-slate-200 shadow-lg backdrop-blur-sm`}
          >
            <span
              aria-hidden
              className={`h-1.5 w-1.5 shrink-0 rounded-full animate-pulse ${p.dotCls}`}
              style={{ animationDuration: "2.5s" }}
            />
            {p.label}
          </motion.div>
        ))}

      {/* Card entrance animation */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={
          reduceMotion ? undefined : { duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }
        }
      >
        {/* Gentle perpetual float */}
        <Float amplitude={5} duration={9}>
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-navy-900 to-navy-950 shadow-2xl ring-1 ring-white/[0.06] overflow-hidden">
            {/* Brand gradient top accent bar */}
            <div aria-hidden className="h-[3px] w-full bg-gradient-to-r from-brand-blue-700 via-brand-blue-500 to-brand-red-700" />

            {/* Card header */}
            <div className="flex items-center justify-between px-6 pt-5 pb-0">
              <div className="flex items-center gap-2.5">
                {/* Mini diamond logo mark */}
                <div className="relative h-7 w-7 shrink-0">
                  <svg viewBox="0 0 36 36" fill="none" className="h-7 w-7" aria-hidden="true">
                    <rect x="6.5" y="6.5" width="23" height="23" rx="3.5"
                      transform="rotate(45 18 18)"
                      stroke="rgba(255,255,255,0.35)" strokeWidth="1.7" />
                    <circle cx="18" cy="2.5" r="1.6" fill="#1565c0" />
                    <circle cx="18" cy="33.5" r="1.6" fill="#c62828" />
                  </svg>
                  <span aria-hidden className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-white">
                    H
                  </span>
                </div>
                <div>
                  <p className="text-[13px] font-black tracking-tight leading-none">
                    <span className="text-brand-blue-300">HARZO</span><span className="text-brand-red-400">TECH</span>
                  </p>
                  <p className="mt-0.5 text-[10px] font-medium tracking-[0.12em] uppercase text-slate-500">
                    Technology Solutions
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Full&nbsp;service
              </span>
            </div>

            {/* Service tiles — staggered entrance */}
            <motion.ul
              role="list"
              className="mt-4 grid gap-2.5 px-6 sm:grid-cols-2"
              variants={tileContainer}
              initial={reduceMotion ? false : "hidden"}
              animate={reduceMotion ? undefined : "visible"}
            >
              {SERVICES.map((s) => (
                <motion.li key={s.title} variants={tileItem} className="list-none">
                  <div className="group flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.04] p-4 transition-colors duration-200 hover:bg-white/[0.07]">
                    <div
                      className={`relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${s.iconCls}`}
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 rounded-xl animate-pulse"
                        style={{
                          background: s.glowColor,
                          animationDuration: "3.5s",
                          animationDelay: s.glowDelay,
                        }}
                      />
                      <s.Svg />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold leading-5 text-white">{s.title}</p>
                      <p className="mt-1 text-[11px] leading-5 text-slate-400">{s.description}</p>
                      <span className={`mt-2 inline-block rounded-full border px-2 py-0.5 text-[9px] font-semibold tracking-wide uppercase ${s.tagCls}`}>
                        {s.tag}
                      </span>
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            {/* Pipeline footer */}
            <div className="mx-6 mb-6 mt-4 flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3">
              <div className="flex flex-col gap-0.5">
                <p className="text-[10px] font-medium text-slate-400 tracking-wide">
                  Strategy → Design → Build → Launch → Support
                </p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-600">
                  <span className="text-brand-blue-600">Harzo</span><span className="text-brand-red-700">tech</span> Nig Ltd
                </p>
              </div>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-500" aria-hidden />
            </div>
          </div>
        </Float>
      </motion.div>
    </div>
  );
}
