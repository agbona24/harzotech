"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Briefcase,
  Zap,
  ShoppingCart,
  Home,
  HeartPulse,
  LayoutDashboard,
  SearchCheck,
} from "lucide-react";

const TYPES = [
  {
    label: "Business Websites",
    icon: Building2,
    color: "brand-blue",
    accent: "from-brand-blue-600 to-brand-blue-800",
    ring: "ring-brand-blue-400/40",
    bg: "bg-brand-blue-50",
    text: "text-brand-blue-700",
    preview: {
      nav: ["Home", "About", "Services", "Contact"],
      hero: "Your Business, Online.",
      sub: "Trusted by hundreds of clients",
      cta: "Get Started",
    },
  },
  {
    label: "Corporate Websites",
    icon: Briefcase,
    color: "slate",
    accent: "from-slate-700 to-slate-900",
    ring: "ring-slate-400/40",
    bg: "bg-slate-100",
    text: "text-slate-700",
    preview: {
      nav: ["Company", "Solutions", "Investors", "News"],
      hero: "Excellence at Scale.",
      sub: "Global reach. Local expertise.",
      cta: "Learn More",
    },
  },
  {
    label: "Landing Pages",
    icon: Zap,
    color: "violet",
    accent: "from-violet-600 to-violet-900",
    ring: "ring-violet-400/40",
    bg: "bg-violet-50",
    text: "text-violet-700",
    preview: {
      nav: ["Features", "Pricing", "FAQ"],
      hero: "Convert Visitors into Customers.",
      sub: "Built to drive action from the first scroll.",
      cta: "Start Free Trial",
    },
  },
  {
    label: "E-Commerce Websites",
    icon: ShoppingCart,
    color: "emerald",
    accent: "from-emerald-600 to-emerald-800",
    ring: "ring-emerald-400/40",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    preview: {
      nav: ["Shop", "Categories", "Deals", "Cart"],
      hero: "Shop Premium Products.",
      sub: "Fast checkout. Secure payments.",
      cta: "Shop Now",
    },
  },
  {
    label: "Real Estate Websites",
    icon: Home,
    color: "amber",
    accent: "from-amber-600 to-amber-800",
    ring: "ring-amber-400/40",
    bg: "bg-amber-50",
    text: "text-amber-700",
    preview: {
      nav: ["Buy", "Rent", "Sell", "Agents"],
      hero: "Find Your Dream Property.",
      sub: "Premium listings across Nigeria.",
      cta: "Browse Properties",
    },
  },
  {
    label: "Healthcare Websites",
    icon: HeartPulse,
    color: "rose",
    accent: "from-rose-600 to-rose-800",
    ring: "ring-rose-400/40",
    bg: "bg-rose-50",
    text: "text-rose-700",
    preview: {
      nav: ["Services", "Doctors", "Book", "Contact"],
      hero: "Your Health, Our Priority.",
      sub: "Book appointments online in seconds.",
      cta: "Book Appointment",
    },
  },
  {
    label: "SaaS Websites",
    icon: LayoutDashboard,
    color: "cyan",
    accent: "from-cyan-600 to-cyan-900",
    ring: "ring-cyan-400/40",
    bg: "bg-cyan-50",
    text: "text-cyan-700",
    preview: {
      nav: ["Product", "Pricing", "Docs", "Login"],
      hero: "The Platform Built for Growth.",
      sub: "10,000+ teams already onboard.",
      cta: "Start for Free",
    },
  },
  {
    label: "SEO-Ready Websites",
    icon: SearchCheck,
    color: "brand-red",
    accent: "from-brand-red-600 to-brand-red-800",
    ring: "ring-brand-red-400/40",
    bg: "bg-brand-red-50",
    text: "text-brand-red-700",
    preview: {
      nav: ["Home", "Blog", "Services", "Contact"],
      hero: "Rank Higher. Get Found First.",
      sub: "Built with search visibility from day one.",
      cta: "See Our SEO Work",
    },
  },
] as const;

export function WebsiteTypesWidget() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % TYPES.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const current = TYPES[active];
  const Icon = current.icon;

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <div className="ml-3 flex-1 rounded-full bg-slate-200 px-3 py-1 text-[11px] text-slate-400">
          harzotech.com/your-business
        </div>
      </div>

      {/* Mock site preview */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="p-4"
        >
          {/* Mock nav */}
          <div className="mb-3 flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
            <div className={`h-3 w-16 rounded-full bg-gradient-to-r ${current.accent}`} />
            <div className="flex gap-3">
              {current.preview.nav.map((n) => (
                <span key={n} className="text-[10px] font-medium text-slate-400">{n}</span>
              ))}
            </div>
          </div>

          {/* Mock hero */}
          <div className={`rounded-2xl bg-gradient-to-br ${current.accent} p-5 text-white`}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-widest opacity-70">
                  {current.label}
                </p>
                <p className="mt-1.5 text-base font-bold leading-snug">
                  {current.preview.hero}
                </p>
                <p className="mt-1 text-[11px] leading-relaxed opacity-75">
                  {current.preview.sub}
                </p>
                <div className="mt-3 inline-block rounded-lg bg-white/20 px-3 py-1.5 text-[11px] font-semibold backdrop-blur-sm">
                  {current.preview.cta} →
                </div>
              </div>
              <div className={`ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 ring-2 ${current.ring}`}>
                <Icon className="h-5 w-5 text-white" />
              </div>
            </div>

            {/* Mock content blocks */}
            <div className="mt-4 grid grid-cols-3 gap-1.5">
              {[0.9, 0.6, 0.75].map((op, i) => (
                <div key={i} className="h-10 rounded-lg bg-white/10" style={{ opacity: op }} />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Type selector pills */}
      <div className="border-t border-slate-100 px-4 pb-4 pt-3">
        <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          Website types we build
        </p>
        <div className="flex flex-wrap gap-1.5">
          {TYPES.map((t, i) => {
            const TIcon = t.icon;
            const isActive = i === active;
            return (
              <button
                key={t.label}
                onClick={() => setActive(i)}
                className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-all duration-200 ${
                  isActive
                    ? `border-transparent bg-gradient-to-r ${t.accent} text-white shadow-sm`
                    : "border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300 hover:text-slate-700"
                }`}
              >
                <TIcon className="h-3 w-3 shrink-0" />
                {t.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
