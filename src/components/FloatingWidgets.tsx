"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { trackLead } from "@/lib/pixel";
import { ArrowUp, Bot, ChevronRight, Maximize2, MessageCircle, Minimize2, Send, Sparkles, X } from "lucide-react";

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

const STARTERS = [
  "What services does Harzotech offer?",
  "How much does a website cost?",
  "Can you build me a WhatsApp bot?",
  "I need a real estate website",
];

const PAGE_LABELS: Record<string, string> = {
  "/packages": "View Packages & Pricing",
  "/contact": "Contact Us",
  "/services": "Our Services",
  "/projects": "View Projects",
  "/free-audit": "Free Website Audit",
  "/ai-automation": "AI Automation",
  "/ai-automation/demo": "Try Live AI Demos",
  "/ai-automation/demos": "AI Demos Gallery",
  "/website-development": "Website Development",
  "/software-development": "Software Development",
  "/seo-digital-marketing": "SEO & Digital Marketing",
  "/about": "About Harzotech",
  "/blog": "Blog & Insights",
  "/products": "Our Products",
  "/careers": "Careers",
};

function renderMessageText(text: string) {
  // Split on /path patterns (with optional ?query), render as styled links
  const parts = text.split(/(\/[a-z][a-z0-9-]*(?:\?[^\s,.)]*)?)/g);
  return parts.map((part, i) => {
    if (/^\/[a-z][a-z0-9-]/.test(part)) {
      const basePath = part.split("?")[0];
      const label = PAGE_LABELS[basePath] ?? part;
      return (
        <Link
          key={i}
          href={part}
          className="inline-flex items-center gap-1 rounded-md bg-brand-blue-600 px-2 py-0.5 text-[11px] font-semibold text-white hover:bg-brand-blue-700 transition mx-0.5"
        >
          {label} →
        </Link>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

type Mode = "closed" | "launcher" | "whatsapp" | "ai";
interface WaForm { name: string; service: string; message: string; }
interface ChatMsg { role: "user" | "ai"; text: string; }

export function FloatingWidgets() {
  const [showTop, setShowTop] = useState(false);
  const [mode, setMode] = useState<Mode>("closed");
  const [expanded, setExpanded] = useState(false);

  // WhatsApp form state
  const [waForm, setWaForm] = useState<WaForm>({ name: "", service: "", message: "" });
  const [waErrors, setWaErrors] = useState<Partial<WaForm>>({});
  const [waSending, setWaSending] = useState(false);

  // AI chat state
  const [messages, setMessages] = useState<ChatMsg[]>([
    { role: "ai", text: "Hi! I'm Harzo, Harzotech's AI assistant. Ask me anything about our services, pricing, or projects — I'll point you in the right direction." },
  ]);
  const [input, setInput] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mode === "ai") {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, mode]);

  // Lock body scroll when expanded on mobile
  useEffect(() => {
    if (expanded && mode === "ai") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [expanded, mode]);

  const close = () => {
    setMode("closed");
    setExpanded(false);
    setWaErrors({});
  };

  // ── WhatsApp ──────────────────────────────────────────────────────
  const validateWa = (): boolean => {
    const e: Partial<WaForm> = {};
    if (!waForm.name.trim()) e.name = "Please enter your name";
    if (!waForm.service) e.service = "Please select a service";
    if (!waForm.message.trim()) e.message = "Please describe what you need";
    setWaErrors(e);
    return Object.keys(e).length === 0;
  };

  const openWhatsApp = () => {
    if (!validateWa()) return;
    setWaSending(true);
    trackLead();
    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...waForm, source: "whatsapp-widget" }),
    }).catch(() => {});
    const text = encodeURIComponent(
      `Hi Harzotech! 👋\n\nMy name is *${waForm.name}*.\n\nI'm interested in: *${waForm.service}*\n\nHere's what I need:\n${waForm.message}\n\nLooking forward to hearing from you!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setTimeout(() => {
      setMode("closed");
      setWaForm({ name: "", service: "", message: "" });
      setWaErrors({});
      setWaSending(false);
    }, 800);
  };

  // ── AI Chat ───────────────────────────────────────────────────────
  const sendMessage = async (text?: string) => {
    const userText = (text ?? input).trim();
    if (!userText || aiLoading) return;
    const next: ChatMsg[] = [...messages, { role: "user", text: userText }];
    setMessages(next);
    setInput("");
    setAiLoading(true);
    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role === "ai" ? "assistant" : "user", content: m.text })),
        }),
      });
      const data = await res.json() as { reply?: string };
      setMessages((prev) => [...prev, { role: "ai", text: data.reply ?? "Sorry, I couldn't process that. Try /contact for direct help." }]);
    } catch {
      setMessages((prev) => [...prev, { role: "ai", text: "Something went wrong. Please try again or visit /contact." }]);
    } finally {
      setAiLoading(false);
    }
  };

  // ── AI panel sizing ───────────────────────────────────────────────
  const aiPanelClass = expanded
    ? "fixed inset-0 z-50 flex flex-col bg-white shadow-2xl sm:inset-auto sm:bottom-24 sm:right-4 sm:rounded-2xl sm:border sm:border-slate-200 sm:w-[580px] sm:h-[680px]"
    : "fixed bottom-24 right-4 z-50 flex w-[340px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl";

  return (
    <>
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 left-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-navy-950 text-white shadow-lg transition-all duration-300 hover:bg-navy-800 ${
          showTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Backdrop for mobile expanded */}
      {expanded && mode === "ai" && (
        <div className="fixed inset-0 z-40 bg-black/40 sm:hidden" onClick={close} />
      )}

      {/* ── Launcher panel ─────────────────────────────────────────── */}
      {mode === "launcher" && (
        <div className="fixed bottom-24 right-4 z-50 w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-[#0c1e3b] px-4 py-3">
            <p className="text-sm font-semibold text-white">How can we help?</p>
            <button onClick={close} className="text-white/70 hover:text-white transition">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-3 space-y-2">
            <button
              onClick={() => setMode("ai")}
              className="flex w-full items-center gap-3 rounded-xl border border-brand-blue-100 bg-brand-blue-50 px-4 py-3 text-left transition hover:bg-brand-blue-100"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue-600">
                <Bot className="h-4 w-4 text-white" />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900">Ask AI</p>
                <p className="text-[11px] text-slate-500">Instant answers, 24/7</p>
              </div>
              <ChevronRight className="ml-auto h-4 w-4 text-slate-400" />
            </button>
            <button
              onClick={() => setMode("whatsapp")}
              className="flex w-full items-center gap-3 rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-left transition hover:bg-green-100"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
                <MessageCircle className="h-4 w-4 text-white" />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900">WhatsApp</p>
                <p className="text-[11px] text-slate-500">Chat with the team</p>
              </div>
              <ChevronRight className="ml-auto h-4 w-4 text-slate-400" />
            </button>
          </div>
        </div>
      )}

      {/* ── WhatsApp panel ─────────────────────────────────────────── */}
      {mode === "whatsapp" && (
        <div className="fixed bottom-24 right-4 z-50 w-[320px] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl">
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
            <button onClick={close} className="flex h-7 w-7 items-center justify-center rounded-full text-white/80 hover:bg-white/10 transition">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-3 px-4 pb-5 pt-4">
            <p className="text-sm text-slate-600">Hi! Tell us about yourself and we'll connect you on WhatsApp. 👇</p>

            <div>
              <input
                type="text"
                placeholder="Your name *"
                value={waForm.name}
                onChange={(e) => { setWaForm((f) => ({ ...f, name: e.target.value })); if (waErrors.name) setWaErrors((er) => ({ ...er, name: undefined })); }}
                className={`w-full rounded-lg border px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#25D366]/40 transition ${waErrors.name ? "border-red-400" : "border-slate-200"}`}
              />
              {waErrors.name && <p className="mt-1 text-[11px] text-red-500">{waErrors.name}</p>}
            </div>

            <div>
              <select
                value={waForm.service}
                onChange={(e) => { setWaForm((f) => ({ ...f, service: e.target.value })); if (waErrors.service) setWaErrors((er) => ({ ...er, service: undefined })); }}
                className={`w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#25D366]/40 transition bg-white ${waErrors.service ? "border-red-400 text-slate-900" : "border-slate-200"} ${!waForm.service ? "text-slate-400" : "text-slate-900"}`}
              >
                <option value="" disabled>Select a service *</option>
                {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              {waErrors.service && <p className="mt-1 text-[11px] text-red-500">{waErrors.service}</p>}
            </div>

            <div>
              <textarea
                rows={3}
                placeholder="Briefly describe what you need *"
                value={waForm.message}
                onChange={(e) => { setWaForm((f) => ({ ...f, message: e.target.value })); if (waErrors.message) setWaErrors((er) => ({ ...er, message: undefined })); }}
                className={`w-full resize-none rounded-lg border px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#25D366]/40 transition ${waErrors.message ? "border-red-400" : "border-slate-200"}`}
              />
              {waErrors.message && <p className="mt-1 text-[11px] text-red-500">{waErrors.message}</p>}
            </div>

            <button
              onClick={openWhatsApp}
              disabled={waSending}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-2.5 text-sm font-semibold text-white hover:bg-[#1ebe5d] transition active:scale-95 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {waSending ? "Opening WhatsApp…" : "Chat on WhatsApp"}
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* ── AI Chat panel ──────────────────────────────────────────── */}
      {mode === "ai" && (
        <div
          className={aiPanelClass}
          style={!expanded ? { maxHeight: "480px" } : undefined}
        >
          {/* Header */}
          <div className="flex shrink-0 items-center justify-between bg-[#0c1e3b] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue-600">
                <Sparkles className="h-3.5 w-3.5 text-white" />
              </span>
              <div>
                <p className="text-sm font-bold text-white leading-tight">Harzo AI</p>
                <p className="text-[11px] text-brand-blue-300">Always online · Instant answers</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {/* Expand / collapse */}
              <button
                onClick={() => setExpanded((v) => !v)}
                aria-label={expanded ? "Collapse chat" : "Expand chat"}
                className="flex h-7 w-7 items-center justify-center rounded-full text-white/70 hover:bg-white/10 transition"
              >
                {expanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </button>
              <button
                onClick={close}
                aria-label="Close chat"
                className="flex h-7 w-7 items-center justify-center rounded-full text-white/70 hover:bg-white/10 transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4" style={{ minHeight: 0 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "ai" && (
                  <span className="mr-2 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue-600">
                    <Sparkles className="h-3 w-3 text-white" />
                  </span>
                )}
                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${
                    msg.role === "user"
                      ? "rounded-br-sm bg-brand-blue-600 text-white"
                      : "rounded-bl-sm border border-slate-100 bg-slate-50 text-slate-800"
                  }`}
                >
                  {msg.role === "ai" ? renderMessageText(msg.text) : msg.text}
                </div>
              </div>
            ))}
            {aiLoading && (
              <div className="flex justify-start">
                <span className="mr-2 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue-600">
                  <Sparkles className="h-3 w-3 text-white" />
                </span>
                <div className="rounded-2xl rounded-bl-sm border border-slate-100 bg-slate-50 px-4 py-3">
                  <span className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <span key={i} className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Starter prompts — only on first message */}
          {messages.length === 1 && (
            <div className="shrink-0 flex flex-wrap gap-1.5 border-t border-slate-100 px-4 py-2.5">
              {STARTERS.map((s) => (
                <button
                  key={s}
                  onClick={() => void sendMessage(s)}
                  className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600 transition hover:border-brand-blue-300 hover:text-brand-blue-700"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="shrink-0 flex items-center gap-2 border-t border-slate-100 px-3 py-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); void sendMessage(); } }}
              placeholder="Ask anything…"
              className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-400/20 transition"
            />
            <button
              onClick={() => void sendMessage()}
              disabled={!input.trim() || aiLoading}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-blue-600 text-white transition hover:bg-brand-blue-700 disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* ── Main FAB ───────────────────────────────────────────────── */}
      <button
        onClick={() => mode === "closed" || mode === "launcher"
          ? setMode(mode === "launcher" ? "closed" : "launcher")
          : close()}
        aria-label={mode === "closed" ? "Get help" : "Close"}
        className="fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-200 hover:bg-[#1ebe5d] hover:scale-105 active:scale-95"
      >
        {mode !== "closed" && mode !== "launcher" ? (
          <X className="h-6 w-6" />
        ) : mode === "launcher" ? (
          <X className="h-6 w-6" />
        ) : (
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
        {mode === "closed" && (
          <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30 pointer-events-none" />
        )}
      </button>
    </>
  );
}
