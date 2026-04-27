"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, X, ChevronRight, Send } from "lucide-react";

const WHATSAPP_NUMBER = "2347069716822";

const SERVICES = [
  "Website Design & Development",
  "Custom Software Development",
  "AI Automation & Workflow Systems",
  "Managed IT & Technical Support",
  "SEO & Digital Marketing",
  "Business Applications",
  "Corporate Identity & Branding",
  "Not sure — need advice",
];

type Step = "closed" | "quiz" | "sending";

interface FormData {
  name: string;
  service: string;
  message: string;
}

export function FloatingWidgets() {
  const [showTop, setShowTop] = useState(false);
  const [step, setStep] = useState<Step>("closed");
  const [form, setForm] = useState<FormData>({ name: "", service: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.service) e.service = "Please select a service";
    if (!form.message.trim()) e.message = "Please describe what you need";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const openWhatsApp = () => {
    if (!validate()) return;
    setStep("sending");
    const text = encodeURIComponent(
      `Hi Harzotech! 👋\n\nMy name is *${form.name}*.\n\nI'm interested in: *${form.service}*\n\nHere's what I need:\n${form.message}\n\nLooking forward to hearing from you!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setTimeout(() => {
      setStep("closed");
      setForm({ name: "", service: "", message: "" });
      setErrors({});
    }, 800);
  };

  const close = () => {
    setStep("closed");
    setErrors({});
  };

  return (
    <>
      {/* Back to top — left */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 left-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-navy-950 text-white shadow-lg transition-all duration-300 hover:bg-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400/60 ${
          showTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* WhatsApp quiz popup */}
      {step === "quiz" && (
        <div className="fixed bottom-20 right-4 z-50 w-[320px] rounded-2xl bg-white shadow-2xl border border-slate-100 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#25D366] px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white leading-tight">Harzotech Support</p>
                <p className="text-[11px] text-white/80">Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={close}
              aria-label="Close"
              className="flex h-7 w-7 items-center justify-center rounded-full text-white/80 hover:bg-white/10 transition"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body */}
          <div className="px-4 pt-4 pb-5 space-y-3">
            <p className="text-sm text-slate-600">
              Hi! Tell us a bit about yourself and we'll connect you right away on WhatsApp. 👇
            </p>

            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Your name *"
                value={form.name}
                onChange={(e) => {
                  setForm((f) => ({ ...f, name: e.target.value }));
                  if (errors.name) setErrors((er) => ({ ...er, name: undefined }));
                }}
                className={`w-full rounded-lg border px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#25D366]/40 transition ${
                  errors.name ? "border-red-400" : "border-slate-200"
                }`}
              />
              {errors.name && <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>}
            </div>

            {/* Service */}
            <div>
              <select
                value={form.service}
                onChange={(e) => {
                  setForm((f) => ({ ...f, service: e.target.value }));
                  if (errors.service) setErrors((er) => ({ ...er, service: undefined }));
                }}
                className={`w-full rounded-lg border px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-[#25D366]/40 transition bg-white ${
                  errors.service ? "border-red-400" : "border-slate-200"
                } ${!form.service ? "text-slate-400" : ""}`}
              >
                <option value="" disabled>Select a service *</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.service && <p className="mt-1 text-[11px] text-red-500">{errors.service}</p>}
            </div>

            {/* Message */}
            <div>
              <textarea
                rows={3}
                placeholder="Briefly describe what you need *"
                value={form.message}
                onChange={(e) => {
                  setForm((f) => ({ ...f, message: e.target.value }));
                  if (errors.message) setErrors((er) => ({ ...er, message: undefined }));
                }}
                className={`w-full resize-none rounded-lg border px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#25D366]/40 transition ${
                  errors.message ? "border-red-400" : "border-slate-200"
                }`}
              />
              {errors.message && <p className="mt-1 text-[11px] text-red-500">{errors.message}</p>}
            </div>

            <button
              onClick={openWhatsApp}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-2.5 text-sm font-semibold text-white hover:bg-[#1ebe5d] transition active:scale-95"
            >
              <Send className="h-4 w-4" />
              Chat on WhatsApp
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* WhatsApp FAB — right */}
      <button
        onClick={() => step === "quiz" ? close() : setStep("quiz")}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-200 hover:bg-[#1ebe5d] hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60"
      >
        {step === "quiz" ? (
          <X className="h-6 w-6" />
        ) : (
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
        {/* Pulse ring */}
        {step === "closed" && (
          <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30 pointer-events-none" />
        )}
      </button>
    </>
  );
}
