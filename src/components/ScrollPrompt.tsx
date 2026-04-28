"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";

const EXCLUDED = new Set(["/", "/contact"]);

export function ScrollPrompt() {
  const pathname = usePathname();
  const [triggered, setTriggered] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setTriggered(false);
    setDismissed(false);
  }, [pathname]);

  useEffect(() => {
    if (EXCLUDED.has(pathname ?? "/")) return;

    const check = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0 && window.scrollY / total >= 0.65) {
        setTriggered(true);
      }
    };

    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [pathname]);

  return (
    <AnimatePresence>
      {triggered && !dismissed && (
        <motion.div
          key="scroll-prompt"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-24 left-1/2 z-40 w-[min(500px,calc(100vw-2rem))] -translate-x-1/2"
        >
          <div className="relative rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
            <button
              onClick={() => setDismissed(true)}
              className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full text-slate-500 transition hover:bg-white/10 hover:text-white"
              aria-label="Dismiss"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <p className="pr-6 text-sm font-bold text-white">Ready to get started?</p>
            <p className="mt-1 pr-6 text-xs leading-5 text-slate-400">
              Book a free 30-minute strategy call — we&apos;ll map out exactly what you need and what it costs.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/contact?intent=consultation"
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-red-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-brand-red-500"
              >
                Book a Free Call <ArrowRight className="h-3 w-3" />
              </Link>
              <Link
                href="/contact?intent=start-project"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
