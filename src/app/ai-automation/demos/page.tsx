import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AIDemoShowcase } from "@/components/AIDemoShowcase";
import { PageSchema } from "@/components/PageSchema";

export const metadata: Metadata = {
  title: "AI Automation Live Demos — Try Every Tool | Harzotech Nigeria",
  description:
    "Experience all 7 AI automation tools live — voice agents, WhatsApp bots, lead capture, appointment booking, CRM, invoice flows, and customer support. Built for Nigerian businesses.",
  alternates: { canonical: "https://harzotech.com.ng/ai-automation/demos" },
};

export default function AIDemosPage() {
  return (
    <main className="bg-[#030712]">
      <PageSchema
        service="AI Automation Live Demos"
        url="https://harzotech.com.ng/ai-automation/demos"
        description="Try all 7 AI automation tools live — voice agents, WhatsApp bots, lead capture, booking, CRM, invoicing, and support automation."
        breadcrumbs={[
          { name: "AI & Automation", url: "https://harzotech.com.ng/ai-automation" },
          { name: "Live Demos", url: "https://harzotech.com.ng/ai-automation/demos" },
        ]}
      />

      {/* Hero — desktop only; mobile gets the full-screen app shell */}
      <div className="hidden xl:block relative overflow-hidden border-b border-white/[0.06] bg-[radial-gradient(ellipse_at_center,_#0d1f3c_0%,_#030712_75%)] pt-28 pb-16 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-brand-blue-700/15 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/ai-automation"
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 mb-6 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to AI Automation
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue-700/40 bg-brand-blue-900/20 px-3 py-1 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-400 animate-pulse" />
            <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-blue-300">
              7 live interactive demos
            </span>
          </div>
          <h1 className="text-3xl font-black text-white sm:text-4xl md:text-5xl leading-[1.12]">
            See Every AI Automation<br />
            <span className="bg-gradient-to-r from-brand-blue-400 to-brand-red-400 bg-clip-text text-transparent">
              Running in Real Time
            </span>
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-400 max-w-xl mx-auto">
            Every widget below is a real demonstration of what gets deployed for your business. Press play, type a message — experience exactly what your customers will see.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["Voice Agent", "WhatsApp", "Lead Bot", "Bookings", "CRM", "Invoicing", "Support"].map((item) => (
              <span key={item} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-400">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <AIDemoShowcase />
    </main>
  );
}
