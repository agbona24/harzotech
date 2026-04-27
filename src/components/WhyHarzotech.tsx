"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  Code2,
  Search,
  Bot,
  Zap,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

const ITEMS = [
  {
    Icon: Sparkles,
    title: "We Understand Design",
    description:
      "Great design is more than aesthetics. We craft interfaces that build trust, communicate clearly, and guide users toward action — on every device.",
  },
  {
    Icon: Code2,
    title: "We Understand Code",
    description:
      "Clean, maintainable, and scalable code built on the right technologies — so your product performs now and is easy to grow later.",
  },
  {
    Icon: Search,
    title: "We Understand SEO",
    description:
      "Visibility doesn't happen by accident. Every project is structured for search from day one — architecture, content, speed, and signals all work together.",
  },
  {
    Icon: Bot,
    title: "We Understand AI",
    description:
      "We know where AI adds genuine value — smarter content, better decisions, faster workflows — and we build it in where it actually matters.",
  },
  {
    Icon: Zap,
    title: "We Understand Automation",
    description:
      "Repetitive work is a cost. We identify what to automate, build reliable systems that run without supervision, and free your team for higher-value tasks.",
  },
  {
    Icon: ShoppingCart,
    title: "We Understand Sales",
    description:
      "Digital products should convert. We design every touchpoint around how people actually make decisions — reducing friction and increasing enquiries.",
  },
  {
    Icon: TrendingUp,
    title: "We Understand Business Growth",
    description:
      "Technology is a means to an end. Every decision we make is tied to a real business outcome — more customers, lower costs, or stronger operations.",
  },
] as const;

export function WhyHarzotech() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.png')" }}
        aria-hidden
      />
      {/* Dark overlay — navy tinted to match brand */}
      <div className="absolute inset-0 bg-navy-950/88" aria-hidden />
      {/* Extra blue wash top-left, red bottom-right */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_10%_20%,rgba(21,101,192,0.22),transparent_65%),radial-gradient(ellipse_50%_40%_at_90%_80%,rgba(198,40,40,0.15),transparent_65%)]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="mb-10 sm:mb-16 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-brand-blue-500/30 bg-brand-blue-900/30 px-4 py-1.5 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-brand-blue-300" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue-200">
              Why Choose Us
            </span>
          </div>
          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
            We Don&apos;t Just Build.{" "}
            <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">We Understand.</span>
          </h2>
          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Most agencies build what you ask for. We go deeper — understanding your design, code, SEO, AI, automation, sales, and growth before we write a single line.
          </p>
        </div>

        {/* ── Cards ──────────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {ITEMS.map((item, i) => {
            const Icon = item.Icon;
            return (
              <motion.div
                key={item.title}
                initial={reduced ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-white/[0.10] bg-white/[0.06] p-4 sm:p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.10]"
              >
                {/* Icon box — alternates brand-blue / brand-red */}
                <div
                  className={`mb-3 sm:mb-5 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl ring-1 ${
                    i % 2 === 0
                      ? "bg-brand-blue-700/30 shadow-[0_0_24px_rgba(21,101,192,0.45)] ring-brand-blue-500/30"
                      : "bg-brand-red-700/30 shadow-[0_0_24px_rgba(198,40,40,0.4)] ring-brand-red-500/30"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${i % 2 === 0 ? "text-brand-blue-300" : "text-brand-red-300"}`} />
                </div>
                <h3 className="text-[15px] font-bold leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
