"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Volume2, MessageCircle, Bot, Calendar, Users, Receipt, Headphones,
  Phone, Send, ChevronRight, Zap, ArrowRight, RotateCcw,
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════════
   SCRIPTS & DATA
═══════════════════════════════════════════════════════════════════ */

type Role = "agent" | "user";
type ChatSide = "bot" | "customer";

const VOICE_SCRIPT: { role: Role; text: string; delay: number }[] = [
  { role: "agent", text: "Hello! Thanks for calling Meridian Clinic. How can I help you today?", delay: 600 },
  { role: "user",  text: "Hi, I'd like to book an appointment with Dr. Adeyemi for next Tuesday.", delay: 2800 },
  { role: "agent", text: "Of course! Let me check availability for Dr. Adeyemi on Tuesday…", delay: 5200 },
  { role: "agent", text: "I have openings at 10:00 AM and 2:30 PM. Which works best for you?", delay: 7000 },
  { role: "user",  text: "2:30 PM please.", delay: 9400 },
  { role: "agent", text: "Perfect. Can I confirm your name and phone number for the booking?", delay: 11200 },
  { role: "user",  text: "James Okafor, 0801 234 5678.", delay: 13200 },
  { role: "agent", text: "Got it, James. Your appointment is confirmed for Tuesday at 2:30 PM with Dr. Adeyemi. A reminder will be sent to your phone.", delay: 15400 },
  { role: "user",  text: "Great, thank you!", delay: 18000 },
  { role: "agent", text: "You're welcome, James! Goodbye!", delay: 19600 },
];

const WA_SCRIPT: { side: ChatSide; text: string; delay: number }[] = [
  { side: "bot",      text: "👋 Hi! Welcome to StyleHaus. How can I help you today?\n\n1️⃣ Track my order\n2️⃣ Return / exchange\n3️⃣ Talk to a human", delay: 600 },
  { side: "customer", text: "1", delay: 2600 },
  { side: "bot",      text: "Sure! Please share your order number.", delay: 3800 },
  { side: "customer", text: "SH-20948", delay: 5800 },
  { side: "bot",      text: "Found it! 📦 Your order is out for delivery — expected today by 5 PM. Track: stylehaus.ng/track/SH-20948", delay: 7200 },
  { side: "customer", text: "Thanks! Can I change the delivery address?", delay: 10000 },
  { side: "bot",      text: "I'll connect you to a human agent for that — one moment…\n\n🔗 Agent Fatima will join in ~2 min.", delay: 11400 },
  { side: "bot",      text: "📋 Note logged: Order SH-20948 · Address change request · Flagged for Fatima.", delay: 13800 },
];

const LEAD_SCRIPT: { side: "bot" | "visitor"; text: string; delay: number }[] = [
  { side: "bot",     text: "Hey 👋 I'm Harzo — quick question: what brings you here today?", delay: 500 },
  { side: "visitor", text: "I need a website for my restaurant.", delay: 2400 },
  { side: "bot",     text: "Great! What's your estimated budget range?\n\n💰 Under $1k · $1k–$3k · $3k–$10k · $10k+", delay: 3800 },
  { side: "visitor", text: "$1k–$3k", delay: 6200 },
  { side: "bot",     text: "Perfect. When do you need it live?", delay: 7400 },
  { side: "visitor", text: "Within 6 weeks.", delay: 9200 },
  { side: "bot",     text: "Excellent — that fits our timeline. Last thing: what's your name and email so we can send a free proposal?", delay: 10400 },
  { side: "visitor", text: "Chidi, chidi@spicylagos.ng", delay: 12800 },
  { side: "bot",     text: "Thanks Chidi! 🎉 Proposal being prepared. You'll receive it within 2 hours. Check your inbox!", delay: 14200 },
  { side: "bot",     text: "📋 CRM updated · Lead scored: Hot · Proposal triggered · Sales notified", delay: 16000 },
];

const APPT_SCRIPT: { side: ChatSide; text: string; delay: number }[] = [
  { side: "bot",      text: "Hi! I'm the booking assistant at LuxeBarbers. When would you like to come in?", delay: 500 },
  { side: "customer", text: "Saturday morning", delay: 2400 },
  { side: "bot",      text: "Saturday slots:\n\n🕘 9:00 AM  |  🕥 10:30 AM  |  🕚 11:00 AM", delay: 3800 },
  { side: "customer", text: "10:30 AM", delay: 5800 },
  { side: "bot",      text: "Name and number for confirmation?", delay: 7200 },
  { side: "customer", text: "Emeka — 0802 345 6789", delay: 9000 },
  { side: "bot",      text: "✅ Booked! Saturday 10:30 AM at LuxeBarbers.\n\nSMS reminder will be sent 1 hr before. See you Saturday! 💈", delay: 11000 },
  { side: "bot",      text: "📅 Calendar updated · Staff notified · Reminder queued", delay: 13200 },
];

const SUPPORT_SCRIPT: { side: ChatSide; text: string; delay: number }[] = [
  { side: "bot",      text: "Hi! I can answer questions, raise tickets, or connect you to our team. What's the issue?", delay: 500 },
  { side: "customer", text: "My dashboard isn't loading after the update.", delay: 2400 },
  { side: "bot",      text: "Let me check our knowledge base…", delay: 3600 },
  { side: "bot",      text: "Common fix: clear cache & hard-reload (Ctrl+Shift+R). Did that help?", delay: 5400 },
  { side: "customer", text: "Still broken.", delay: 7200 },
  { side: "bot",      text: "Raising a priority ticket now.\n\n🎫 Ticket #HZ-4821 created · Confirmation sent to your email.", delay: 8400 },
  { side: "bot",      text: "🔗 Connecting to Agent Tunde — avg wait: 3 min.", delay: 10800 },
  { side: "bot",      text: "✅ Agent Tunde has joined. He can see your full ticket history.", delay: 13000 },
];

const CRM_STAGES = ["New Lead", "Qualified", "Proposal", "Negotiation", "Won"];
const CRM_EVENTS: { stageIdx: number; event: string; detail: string; delay: number }[] = [
  { stageIdx: 0, event: "Lead captured",    detail: "Maria Santos via web form",              delay: 800   },
  { stageIdx: 0, event: "Welcome email",    detail: "Auto-sent — opened in 4 min",            delay: 2000  },
  { stageIdx: 1, event: "Lead qualified",   detail: "Budget $1k–$3k · Timeline 6 wks",        delay: 3600  },
  { stageIdx: 1, event: "CRM updated",      detail: "Moved to Qualified · Tagged #web",       delay: 5000  },
  { stageIdx: 2, event: "Proposal sent",    detail: "PDF + pricing deck delivered",           delay: 6600  },
  { stageIdx: 2, event: "Follow-up queued", detail: "Auto follow-up in 3 days if no reply",  delay: 8200  },
  { stageIdx: 3, event: "Client replied",   detail: "Requesting minor revisions",             delay: 10000 },
  { stageIdx: 3, event: "Revised sent",     detail: "Updated proposal emailed",              delay: 11600 },
  { stageIdx: 4, event: "Deal won! 🎉",     detail: "Invoice triggered · Onboarding started", delay: 13400 },
];

const INVOICE_STEPS: { icon: string; label: string; detail: string; delay: number }[] = [
  { icon: "✅", label: "Job marked complete",    detail: "By technician via mobile app",            delay: 800   },
  { icon: "🧾", label: "Invoice auto-generated", detail: "INV-2024-0087 · ₦850,000 · Net 7",        delay: 2400  },
  { icon: "📧", label: "Invoice emailed",         detail: "Sent to client@buildcraft.co",            delay: 4000  },
  { icon: "💬", label: "WhatsApp reminder sent",  detail: "Payment link included",                   delay: 5600  },
  { icon: "💳", label: "Payment received",        detail: "₦850,000 · Paystack · 6 hrs after send", delay: 7800  },
  { icon: "📄", label: "Receipt emailed",         detail: "Auto-sent + bookkeeping entry created",   delay: 9400  },
  { icon: "📊", label: "Dashboard updated",       detail: "Revenue +₦850,000 · Invoice closed",     delay: 11000 },
];

/* ═══════════════════════════════════════════════════════════════════
   HELPER: WAVEFORM
═══════════════════════════════════════════════════════════════════ */

function Waveform({ active, color }: { active: boolean; color: string }) {
  const bars = [3, 7, 5, 9, 4, 8, 5, 6, 3, 7, 4, 9, 5, 3, 8];
  return (
    <div className="flex h-6 items-center gap-[3px]">
      {bars.map((h, i) => (
        <motion.div key={i} className={`w-[3px] rounded-full ${color}`}
          animate={active
            ? { scaleY: [1, h / 5, 1, h / 3, 1], opacity: [0.6, 1, 0.7, 1, 0.6] }
            : { scaleY: 0.15, opacity: 0.3 }}
          transition={active
            ? { duration: 0.8 + (i % 4) * 0.15, repeat: Infinity, delay: i * 0.04, ease: "easeInOut" }
            : { duration: 0.3 }}
          style={{ height: 24, transformOrigin: "center" }} />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   DEMO 1 — AI VOICE AGENT
═══════════════════════════════════════════════════════════════════ */

function VoiceDemo() {
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<typeof VOICE_SCRIPT>([]);
  const [agentSpeaking, setAgentSpeaking] = useState(false);
  const [userSpeaking, setUserSpeaking] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => { if (transcriptRef.current) transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight; }, [messages]);

  const start = useCallback(() => {
    timers.current.forEach(clearTimeout); timers.current = [];
    setStarted(true); setMessages([]); setCallEnded(false); setAgentSpeaking(false); setUserSpeaking(false);
    VOICE_SCRIPT.forEach((line, i) => {
      timers.current.push(setTimeout(() => {
        setMessages((p) => [...p, line]);
        line.role === "agent" ? (setAgentSpeaking(true), setUserSpeaking(false)) : (setUserSpeaking(true), setAgentSpeaking(false));
      }, line.delay));
      const nextDelay = VOICE_SCRIPT[i + 1]?.delay ?? line.delay + 2000;
      timers.current.push(setTimeout(() => { setAgentSpeaking(false); setUserSpeaking(false); }, nextDelay - 200));
    });
    timers.current.push(setTimeout(() => { setCallEnded(true); setAgentSpeaking(false); setUserSpeaking(false); setStarted(false); }, VOICE_SCRIPT[VOICE_SCRIPT.length - 1].delay + 2400));
  }, []);

  const reset = useCallback(() => {
    timers.current.forEach(clearTimeout); timers.current = [];
    setStarted(false); setCallEnded(false); setMessages([]); setAgentSpeaking(false); setUserSpeaking(false);
  }, []);

  return (
    <div className="demo-panel">
      {/* Status bar */}
      <div className="demo-panel-header">
        <div className="flex items-center gap-2.5">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue-700">
            <Phone className="h-4 w-4 text-white" />
            {started && <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" /></span>}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Meridian Clinic — AI Receptionist</p>
            <p className="text-[11px] text-slate-400">Inbound appointment booking · 24/7</p>
          </div>
        </div>
        <span className={`pill-badge ${callEnded ? "border-slate-500/30 bg-slate-500/10 text-slate-400" : started ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border-white/10 bg-white/5 text-slate-500"}`}>
          {callEnded ? "Call ended" : started ? "● Live" : "Demo"}
        </span>
      </div>

      {/* Avatars */}
      <div className="grid grid-cols-2 gap-3 border-b border-white/[0.06] px-5 py-4">
        {[
          { label: "AI Agent", sub: "Meridian Receptionist", emoji: "🤖", speaking: agentSpeaking, glow: "rgba(21,101,192,0.7)", ring: "ring-brand-blue-400", waveColor: "bg-brand-blue-400", speakColor: "text-brand-blue-300", bg: "bg-brand-blue-700/80" },
          { label: "Caller", sub: "James Okafor", emoji: "👤", speaking: userSpeaking, glow: "rgba(198,40,40,0.7)", ring: "ring-brand-red-400", waveColor: "bg-brand-red-400", speakColor: "text-brand-red-300", bg: "bg-brand-red-700/80" },
        ].map((a) => (
          <div key={a.label} className="flex flex-col items-center gap-2.5 rounded-2xl border border-white/[0.07] bg-white/[0.03] py-5 px-3">
            <div className={`flex h-14 w-14 items-center justify-center rounded-full ${a.bg} ring-2 transition-all duration-300 ${a.speaking ? `${a.ring}` : "ring-white/10"}`}
              style={{ boxShadow: a.speaking ? `0 0 20px ${a.glow}` : undefined }}>
              <span className="text-2xl">{a.emoji}</span>
            </div>
            <div className="text-center">
              <p className="text-xs font-bold text-slate-200">{a.label}</p>
              <p className="text-[10px] text-slate-500">{a.sub}</p>
            </div>
            <Waveform active={a.speaking} color={a.waveColor} />
            <span className={`text-[10px] font-medium ${a.speaking ? a.speakColor : "text-slate-500"}`}>
              {a.speaking ? "Speaking…" : "Listening"}
            </span>
          </div>
        ))}
      </div>

      {/* Transcript */}
      <div ref={transcriptRef} className="demo-transcript h-72">
        {messages.length === 0 && !started && !callEnded && (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-slate-500 text-center leading-7">Press <span className="text-white font-medium">Start Demo Call</span><br />to see a live AI booking in action.</p>
          </div>
        )}
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
              className={`flex gap-2.5 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm ${m.role === "agent" ? "bg-brand-blue-700/60" : "bg-brand-red-700/60"}`}>
                {m.role === "agent" ? "🤖" : "👤"}
              </div>
              <div className={`max-w-[78%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-6 ${m.role === "agent" ? "rounded-tl-sm bg-brand-blue-900/60 text-slate-200 border border-brand-blue-700/30" : "rounded-tr-sm bg-brand-red-900/40 text-slate-200 border border-brand-red-700/20"}`}>
                {m.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="demo-panel-footer">
        <p className="text-[11px] text-slate-500">{callEnded ? "✅ Booked · Reminder queued · No staff needed" : "AI answers, books & confirms — zero human effort"}</p>
        <button onClick={callEnded ? reset : start} disabled={started}
          className="demo-btn bg-brand-blue-700 hover:bg-brand-blue-600 disabled:opacity-40">
          {callEnded ? <><RotateCcw className="h-3.5 w-3.5" /> Replay</> : started ? "In call…" : <><Phone className="h-3.5 w-3.5" /> Start Demo Call</>}
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   GENERIC CHAT DEMO
═══════════════════════════════════════════════════════════════════ */

type ChatConfig = {
  script: { side: string; text: string; delay: number }[];
  headerEmoji: string;
  headerTitle: string;
  headerSub: string;
  botBubble: string;
  customerBubble: string;
  typingBg: string;
  typingDot: string;
  btnClass: string;
  doneFooter: string;
  idleFooter: string;
  sendIcon?: React.ReactNode;
  inputPlaceholder?: string;
};

function ChatDemo({ cfg }: { cfg: ChatConfig }) {
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [messages, setMessages] = useState<typeof cfg.script>([]);
  const [typing, setTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const start = useCallback(() => {
    timers.current.forEach(clearTimeout); timers.current = [];
    setRunning(true); setDone(false); setMessages([]); setTyping(false);
    cfg.script.forEach((line, i) => {
      const prevDelay = cfg.script[i - 1]?.delay ?? 0;
      if (line.side !== "customer" && line.delay - prevDelay > 600) {
        timers.current.push(setTimeout(() => setTyping(true), Math.max(0, line.delay - 1200)));
      }
      timers.current.push(setTimeout(() => {
        setTyping(false);
        setMessages((p) => [...p, line]);
      }, line.delay));
    });
    timers.current.push(setTimeout(() => {
      setRunning(false); setDone(true); setTyping(false);
    }, cfg.script[cfg.script.length - 1].delay + 1200));
  }, [cfg]);

  const reset = useCallback(() => {
    timers.current.forEach(clearTimeout); timers.current = [];
    setRunning(false); setDone(false); setMessages([]); setTyping(false);
  }, []);

  const leftSides = ["bot", "agent"];
  const isLeft = (side: string) => leftSides.includes(side);

  return (
    <div className="demo-panel">
      <div className="demo-panel-header">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.07] text-xl">{cfg.headerEmoji}</span>
          <div>
            <p className="text-sm font-semibold text-white">{cfg.headerTitle}</p>
            <p className="text-[11px] text-slate-400">{cfg.headerSub}</p>
          </div>
        </div>
        <span className={`pill-badge ${running ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : done ? "border-brand-blue-500/30 bg-brand-blue-500/10 text-brand-blue-300" : "border-white/10 bg-white/5 text-slate-500"}`}>
          {running ? "● Running" : done ? "Complete" : "Ready"}
        </span>
      </div>

      <div ref={containerRef} className="demo-transcript h-80">
        {messages.length === 0 && !running && !done && (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-slate-500 text-center leading-7">Press <span className="text-white font-medium">Send</span> to watch the automation run.</p>
          </div>
        )}
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
              className={`flex gap-2 ${!isLeft(m.side) ? "flex-row-reverse" : ""}`}>
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs">
                {isLeft(m.side) ? "🤖" : "👤"}
              </div>
              <div className={`max-w-[78%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-[13px] leading-6 ${isLeft(m.side) ? cfg.botBubble : cfg.customerBubble}`}>
                {m.text}
              </div>
            </motion.div>
          ))}
          {typing && (
            <motion.div key="typing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-2.5 w-fit ${cfg.typingBg}`}>
              {[0, 0.2, 0.4].map((d) => (
                <motion.span key={d} className={`block h-1.5 w-1.5 rounded-full ${cfg.typingDot}`}
                  animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, delay: d, repeat: Infinity }} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-3 border-t border-white/[0.06] bg-white/[0.02] px-4 py-3">
        <div className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.04] px-3.5 py-2 text-[13px] text-slate-500">
          {running ? "Automation handling…" : (cfg.inputPlaceholder ?? "Type a message…")}
        </div>
        <button onClick={done ? reset : start} disabled={running}
          className={`demo-btn ${cfg.btnClass} disabled:opacity-40`}>
          {done ? <><RotateCcw className="h-3.5 w-3.5" /> Replay</> : cfg.sendIcon ?? <><Send className="h-3.5 w-3.5" /> Send</>}
        </button>
      </div>

      <div className="border-t border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
        <p className="text-[11px] text-slate-500">{done ? cfg.doneFooter : cfg.idleFooter}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   DEMO 5 — CRM PIPELINE
═══════════════════════════════════════════════════════════════════ */

function CRMDemo() {
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [events, setEvents] = useState<typeof CRM_EVENTS>([]);
  const [activeStage, setActiveStage] = useState(0);
  const feedRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => { if (feedRef.current) feedRef.current.scrollTop = feedRef.current.scrollHeight; }, [events]);

  const start = useCallback(() => {
    timers.current.forEach(clearTimeout); timers.current = [];
    setRunning(true); setDone(false); setEvents([]); setActiveStage(0);
    CRM_EVENTS.forEach((ev) => {
      timers.current.push(setTimeout(() => {
        setEvents((p) => [...p, ev]);
        setActiveStage(ev.stageIdx);
      }, ev.delay));
    });
    timers.current.push(setTimeout(() => { setRunning(false); setDone(true); }, CRM_EVENTS[CRM_EVENTS.length - 1].delay + 1200));
  }, []);

  const reset = useCallback(() => {
    timers.current.forEach(clearTimeout); timers.current = [];
    setRunning(false); setDone(false); setEvents([]); setActiveStage(0);
  }, []);

  return (
    <div className="demo-panel">
      <div className="demo-panel-header">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue-800/60 text-xl">🏆</span>
          <div>
            <p className="text-sm font-semibold text-white">CRM Pipeline Automation</p>
            <p className="text-[11px] text-slate-400">Lead to close — zero manual steps</p>
          </div>
        </div>
        <span className={`pill-badge ${running ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : done ? "border-brand-blue-500/30 bg-brand-blue-500/10 text-brand-blue-300" : "border-white/10 bg-white/5 text-slate-500"}`}>
          {running ? "● Running" : done ? "Deal Won" : "Ready"}
        </span>
      </div>

      {/* Pipeline stages */}
      <div className="border-b border-white/[0.06] px-4 py-4">
        <div className="flex items-center gap-1">
          {CRM_STAGES.map((stage, i) => (
            <div key={stage} className="flex items-center gap-1 flex-1 min-w-0">
              <div className={`flex-1 min-w-0 rounded-lg px-2 py-2 text-center text-[10px] font-bold transition-all duration-500 truncate ${
                i < activeStage ? "bg-emerald-800/50 text-emerald-300 border border-emerald-700/30"
                : i === activeStage && (running || done) ? "bg-brand-blue-800/60 text-brand-blue-200 border border-brand-blue-500/40 shadow-[0_0_12px_rgba(21,101,192,0.4)]"
                : "bg-white/[0.03] text-slate-600 border border-white/[0.06]"
              }`}>
                {i < activeStage ? "✓ " : ""}{stage}
              </div>
              {i < CRM_STAGES.length - 1 && <ChevronRight className="h-3 w-3 shrink-0 text-slate-600" />}
            </div>
          ))}
        </div>
      </div>

      {/* Event feed */}
      <div ref={feedRef} className="demo-transcript h-64">
        {events.length === 0 && !running && !done && (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-slate-500 text-center leading-7">Press <span className="text-white font-medium">Run Demo</span><br />to watch a lead close automatically.</p>
          </div>
        )}
        <AnimatePresence initial={false}>
          {events.map((ev, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }}
              className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue-800/60 border border-brand-blue-700/30">
                <Zap className="h-3 w-3 text-brand-blue-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-200">{ev.event}</p>
                <p className="text-[11px] text-slate-500 mt-0.5 truncate">{ev.detail}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="demo-panel-footer">
        <p className="text-[11px] text-slate-500">{done ? "Deal closed · Invoice triggered · Onboarding started" : "Automated pipeline from capture to close"}</p>
        <button onClick={done ? reset : start} disabled={running}
          className="demo-btn bg-brand-blue-700 hover:bg-brand-blue-600 disabled:opacity-40">
          {done ? <><RotateCcw className="h-3.5 w-3.5" /> Replay</> : running ? "Running…" : <><Zap className="h-3.5 w-3.5" /> Run Demo</>}
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   DEMO 6 — INVOICE & PAYMENT
═══════════════════════════════════════════════════════════════════ */

function InvoiceDemo() {
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [steps, setSteps] = useState<typeof INVOICE_STEPS>([]);
  const feedRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => { if (feedRef.current) feedRef.current.scrollTop = feedRef.current.scrollHeight; }, [steps]);

  const start = useCallback(() => {
    timers.current.forEach(clearTimeout); timers.current = [];
    setRunning(true); setDone(false); setSteps([]);
    INVOICE_STEPS.forEach((s) => timers.current.push(setTimeout(() => setSteps((p) => [...p, s]), s.delay)));
    timers.current.push(setTimeout(() => { setRunning(false); setDone(true); }, INVOICE_STEPS[INVOICE_STEPS.length - 1].delay + 1200));
  }, []);

  const reset = useCallback(() => {
    timers.current.forEach(clearTimeout); timers.current = [];
    setRunning(false); setDone(false); setSteps([]);
  }, []);

  return (
    <div className="demo-panel">
      <div className="demo-panel-header">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-800/60 text-xl">🧾</span>
          <div>
            <p className="text-sm font-semibold text-white">Invoice & Payment Automation</p>
            <p className="text-[11px] text-slate-400">From job complete to paid — zero manual work</p>
          </div>
        </div>
        <span className={`pill-badge ${running ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : done ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border-white/10 bg-white/5 text-slate-500"}`}>
          {running ? "● Running" : done ? "Paid ✓" : "Ready"}
        </span>
      </div>

      {/* Progress bar */}
      <div className="border-b border-white/[0.06] px-4 py-3">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[11px] text-slate-500">Automation progress</p>
          <p className="text-[11px] font-semibold text-emerald-400">{steps.length}/{INVOICE_STEPS.length} steps</p>
        </div>
        <div className="h-1.5 w-full rounded-full bg-white/[0.06]">
          <motion.div className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400"
            animate={{ width: `${(steps.length / INVOICE_STEPS.length) * 100}%` }}
            transition={{ duration: 0.4 }} />
        </div>
      </div>

      {/* Steps */}
      <div ref={feedRef} className="demo-transcript h-72">
        {steps.length === 0 && !running && !done && (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-slate-500 text-center leading-7">Press <span className="text-white font-medium">Run Demo</span><br />to watch invoice automation fire.</p>
          </div>
        )}
        <AnimatePresence initial={false}>
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}
              className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-3">
              <span className="text-xl">{s.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-slate-200">{s.label}</p>
                <p className="text-[11px] text-slate-500 truncate">{s.detail}</p>
              </div>
              <span className="text-[10px] font-bold text-emerald-400">Done</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="demo-panel-footer">
        <p className="text-[11px] text-slate-500">{done ? "Paid in 6 hrs · Books updated · Zero manual work" : "From job complete to paid — fully automated"}</p>
        <button onClick={done ? reset : start} disabled={running}
          className="demo-btn bg-emerald-700 hover:bg-emerald-600 disabled:opacity-40">
          {done ? <><RotateCcw className="h-3.5 w-3.5" /> Replay</> : running ? "Running…" : <><Zap className="h-3.5 w-3.5" /> Run Demo</>}
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   DEMO DATA — what to show next to each demo
═══════════════════════════════════════════════════════════════════ */

type DemoMeta = {
  id: string;
  number: string;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  industries: { emoji: string; name: string; use: string }[];
  impact: { value: string; label: string }[];
  accentClass: string;
  component: React.ReactNode;
};

function buildDemos(): DemoMeta[] {
  return [
    {
      id: "voice",
      number: "01",
      icon: <Phone className="h-5 w-5" />,
      title: "AI Voice Agent",
      tagline: "Answers every call. Books instantly. No staff needed.",
      description: "A conversational AI voice agent that handles inbound calls, qualifies callers, books appointments, and sends confirmation messages — all without a human receptionist. Never miss a call. Never lose a booking.",
      industries: [
        { emoji: "🏥", name: "Clinics & Hospitals",    use: "Appointment booking, doctor availability checks" },
        { emoji: "💈", name: "Salons & Spas",          use: "Booking, service enquiries, cancellations" },
        { emoji: "🍽", name: "Restaurants",            use: "Table reservations, takeaway orders, menu info" },
      ],
      impact: [
        { value: "100%", label: "Calls answered" },
        { value: "24/7", label: "Availability" },
        { value: "0",    label: "Staff needed" },
      ],
      accentClass: "from-brand-blue-600 to-brand-blue-800",
      component: <VoiceDemo />,
    },
    {
      id: "whatsapp",
      number: "02",
      icon: <MessageCircle className="h-5 w-5" />,
      title: "WhatsApp Automation",
      tagline: "Your team sleeps. Your WhatsApp doesn't.",
      description: "An AI-powered WhatsApp agent handles order tracking, FAQs, complaints, and escalations — automatically. Customers get instant, personalised responses. Complex issues are routed to a human with full context already logged.",
      industries: [
        { emoji: "🛍", name: "E-commerce & Retail",   use: "Order tracking, returns, delivery updates" },
        { emoji: "🏠", name: "Real Estate",           use: "Property enquiries, viewing scheduling" },
        { emoji: "🏦", name: "Finance & FinTech",     use: "Account queries, transfer confirmations" },
      ],
      impact: [
        { value: "80%", label: "Queries resolved" },
        { value: "< 5s", label: "Response time" },
        { value: "3x",   label: "Customer satisfaction" },
      ],
      accentClass: "from-[#128C7E] to-[#075E54]",
      component: (
        <ChatDemo cfg={{
          script: WA_SCRIPT,
          headerEmoji: "🏪", headerTitle: "StyleHaus Official", headerSub: "WhatsApp Business · Automated 24/7",
          botBubble: "rounded-tl-sm bg-[#1f2b23] text-slate-200 border border-[#25D366]/20",
          customerBubble: "rounded-tr-sm bg-[#056162]/80 text-slate-100",
          typingBg: "bg-[#1f2b23] border border-[#25D366]/20",
          typingDot: "bg-[#25D366]/60",
          btnClass: "bg-[#25D366] hover:bg-[#1eb356]",
          inputPlaceholder: "Type a message",
          doneFooter: "Order tracked · Escalation triggered · CRM logged",
          idleFooter: "Automated 24/7 — no human needed for routine queries",
        }} />
      ),
    },
    {
      id: "leadbot",
      number: "03",
      icon: <Bot className="h-5 w-5" />,
      title: "Lead Qualification Bot",
      tagline: "Qualify, score, and route every lead while you sleep.",
      description: "A smart website chatbot that engages every visitor, asks the right qualification questions, scores leads automatically, and triggers follow-up actions — proposal emails, CRM entries, sales notifications — in real time.",
      industries: [
        { emoji: "💻", name: "Tech & SaaS",           use: "Trial sign-ups, feature enquiries, upgrade triggers" },
        { emoji: "🏗", name: "Construction & Property", use: "Project scoping, budget qualification" },
        { emoji: "⚖️", name: "Professional Services",  use: "Consultation booking, service matching" },
      ],
      impact: [
        { value: "5x",   label: "Faster response" },
        { value: "60%",  label: "More qualified leads" },
        { value: "24/7", label: "Lead capture" },
      ],
      accentClass: "from-brand-blue-700 to-indigo-700",
      component: (
        <ChatDemo cfg={{
          script: LEAD_SCRIPT as { side: string; text: string; delay: number }[],
          headerEmoji: "🤖", headerTitle: "Harzo Lead Bot", headerSub: "Website AI · Qualifies leads 24/7",
          botBubble: "rounded-tl-sm bg-brand-blue-900/60 text-slate-200 border border-brand-blue-700/30",
          customerBubble: "rounded-tr-sm bg-navy-700/80 text-slate-100 border border-white/[0.08]",
          typingBg: "bg-brand-blue-900/60 border border-brand-blue-700/30",
          typingDot: "bg-brand-blue-400/60",
          btnClass: "bg-brand-blue-700 hover:bg-brand-blue-600",
          inputPlaceholder: "Your message…",
          doneFooter: "Lead qualified · Proposal triggered · CRM entry created",
          idleFooter: "Qualifies leads & sends proposals while you sleep",
        }} />
      ),
    },
    {
      id: "appointment",
      number: "04",
      icon: <Calendar className="h-5 w-5" />,
      title: "Appointment Booking",
      tagline: "Zero back-and-forth. Every slot filled automatically.",
      description: "Customers book, reschedule, and cancel appointments through WhatsApp or your website — without any staff involvement. The system checks real-time availability, sends confirmations, and fires reminders automatically.",
      industries: [
        { emoji: "🦷", name: "Dental & Healthcare",   use: "Patient scheduling, reminders, cancellation handling" },
        { emoji: "💇", name: "Beauty & Wellness",      use: "Stylist booking, slot management, no-show reduction" },
        { emoji: "📚", name: "Education & Coaching",  use: "Session booking, calendar sync, payment gates" },
      ],
      impact: [
        { value: "40%", label: "Fewer no-shows" },
        { value: "3h",  label: "Admin saved/day" },
        { value: "98%", label: "Booking accuracy" },
      ],
      accentClass: "from-violet-700 to-purple-800",
      component: (
        <ChatDemo cfg={{
          script: APPT_SCRIPT,
          headerEmoji: "✂️", headerTitle: "LuxeBarbers", headerSub: "Booking assistant · Instant confirmation",
          botBubble: "rounded-tl-sm bg-violet-900/60 text-slate-200 border border-violet-700/30",
          customerBubble: "rounded-tr-sm bg-navy-700/80 text-slate-100 border border-white/[0.08]",
          typingBg: "bg-violet-900/60 border border-violet-700/30",
          typingDot: "bg-violet-400/60",
          btnClass: "bg-violet-700 hover:bg-violet-600",
          inputPlaceholder: "Type a message…",
          doneFooter: "Booked · SMS reminder sent · Calendar updated · Staff notified",
          idleFooter: "Handles bookings, reschedules & reminders automatically",
        }} />
      ),
    },
    {
      id: "crm",
      number: "05",
      icon: <Users className="h-5 w-5" />,
      title: "CRM & Pipeline Automation",
      tagline: "Every lead moves forward. Nothing falls through the cracks.",
      description: "From first web form submission to closed deal — every stage is automated. Welcome emails, lead scoring, proposal delivery, follow-up sequences, and deal-close triggers all fire without anyone lifting a finger.",
      industries: [
        { emoji: "🏢", name: "B2B Services",          use: "Sales pipeline, proposal automation, follow-up cadences" },
        { emoji: "🏠", name: "Real Estate Agencies",  use: "Lead nurturing, viewing scheduling, offer management" },
        { emoji: "🎓", name: "Training & Consulting", use: "Discovery, proposals, onboarding sequences" },
      ],
      impact: [
        { value: "70%", label: "Less manual sales admin" },
        { value: "2x",  label: "Pipeline velocity" },
        { value: "0",   label: "Leads dropped" },
      ],
      accentClass: "from-brand-blue-600 to-brand-blue-900",
      component: <CRMDemo />,
    },
    {
      id: "invoice",
      number: "06",
      icon: <Receipt className="h-5 w-5" />,
      title: "Invoice & Payment Automation",
      tagline: "Job done → invoice sent → payment collected. Automatic.",
      description: "The moment a job is marked complete, the system generates and sends an invoice, follows up with a WhatsApp payment link, and updates your books when payment clears. No manual invoicing. No chasing.",
      industries: [
        { emoji: "🔧", name: "Tradespeople & Field Service", use: "Auto-invoicing after site completion" },
        { emoji: "🖥", name: "Freelancers & Agencies",       use: "Milestone billing, retainer reminders" },
        { emoji: "🚚", name: "Logistics & Delivery",         use: "Per-trip billing, fleet invoice management" },
      ],
      impact: [
        { value: "6h",  label: "Avg payment time" },
        { value: "90%", label: "Invoice accuracy" },
        { value: "0",   label: "Manual steps" },
      ],
      accentClass: "from-emerald-600 to-emerald-800",
      component: <InvoiceDemo />,
    },
    {
      id: "support",
      number: "07",
      icon: <Headphones className="h-5 w-5" />,
      title: "Customer Support AI",
      tagline: "First-line support that never sleeps, never loses patience.",
      description: "An AI triage agent that answers FAQs, creates support tickets, and escalates complex issues to human agents — with full context already attached. Customers get instant help. Your team handles only what needs them.",
      industries: [
        { emoji: "💻", name: "SaaS & Tech Products",   use: "Bug triage, onboarding, feature guidance" },
        { emoji: "🛒", name: "E-commerce",             use: "Order issues, returns, product questions" },
        { emoji: "🏦", name: "Financial Services",     use: "Account support, transaction disputes" },
      ],
      impact: [
        { value: "80%", label: "Tickets auto-resolved" },
        { value: "< 5s", label: "First response" },
        { value: "4.8★", label: "CSAT score" },
      ],
      accentClass: "from-amber-600 to-amber-800",
      component: (
        <ChatDemo cfg={{
          script: SUPPORT_SCRIPT,
          headerEmoji: "🎧", headerTitle: "Harzo Support Bot", headerSub: "AI triage · Tickets · Human escalation",
          botBubble: "rounded-tl-sm bg-amber-900/40 text-slate-200 border border-amber-700/20",
          customerBubble: "rounded-tr-sm bg-navy-700/80 text-slate-100 border border-white/[0.08]",
          typingBg: "bg-amber-900/40 border border-amber-700/20",
          typingDot: "bg-amber-400/60",
          btnClass: "bg-amber-700 hover:bg-amber-600",
          inputPlaceholder: "Describe your issue…",
          doneFooter: "Ticket #HZ-4821 raised · Agent assigned · Client notified",
          idleFooter: "FAQ answers, ticket creation & human hand-off — automated",
        }} />
      ),
    },
  ];
}

/* ═══════════════════════════════════════════════════════════════════
   DEMO SECTION — one scrollable row per demo
═══════════════════════════════════════════════════════════════════ */

function DemoSection({ demo, isEven }: { demo: DemoMeta; isEven: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-30% 0px -30% 0px" });

  return (
    <section id={`demo-${demo.id}`} ref={ref} className="scroll-mt-20 py-16 sm:py-20 border-b border-white/[0.05] last:border-0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={`grid gap-12 lg:grid-cols-2 lg:items-start ${isEven ? "" : "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"}`}>

          {/* ── Context panel ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            {/* Number + title */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className={`inline-flex items-center justify-center h-9 w-9 rounded-xl bg-gradient-to-br ${demo.accentClass} text-white`}>
                  {demo.icon}
                </span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500">{demo.number} / 07</span>
              </div>
              <h2 className="text-2xl font-black text-white sm:text-3xl">{demo.title}</h2>
              <p className={`mt-1 text-base font-semibold bg-gradient-to-r ${demo.accentClass} bg-clip-text text-transparent`}>{demo.tagline}</p>
            </div>

            <p className="text-sm leading-8 text-slate-400">{demo.description}</p>

            {/* Impact stats */}
            <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
              {demo.impact.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-xl font-black text-white">{s.value}</div>
                  <div className="mt-0.5 text-[10px] text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Industries */}
            <div className="space-y-2.5">
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Used by</p>
              {demo.industries.map((ind) => (
                <div key={ind.name} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5">
                  <span className="text-lg">{ind.emoji}</span>
                  <div>
                    <p className="text-xs font-bold text-slate-300">{ind.name}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{ind.use}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href={`/contact?intent=consultation&automation=${demo.id}`}
              className={`inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r ${demo.accentClass} px-5 py-2.5 text-sm font-bold text-white shadow transition hover:opacity-90`}>
              Build this for my business <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* ── Interactive demo ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Glow halo */}
            <div className={`pointer-events-none absolute h-72 w-72 rounded-full bg-gradient-to-br ${demo.accentClass} opacity-10 blur-[80px] -translate-x-1/4 -translate-y-1/4`} />
            {demo.component}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   STICKY SIDE NAV
═══════════════════════════════════════════════════════════════════ */

const NAV_ITEMS = [
  { id: "voice",       label: "Voice AI",    num: "01" },
  { id: "whatsapp",    label: "WhatsApp",    num: "02" },
  { id: "leadbot",     label: "Lead Bot",    num: "03" },
  { id: "appointment", label: "Bookings",    num: "04" },
  { id: "crm",         label: "CRM",         num: "05" },
  { id: "invoice",     label: "Invoicing",   num: "06" },
  { id: "support",     label: "Support",     num: "07" },
];

function SideNav({ activeId }: { activeId: string }) {
  const scrollTo = (id: string) => {
    document.getElementById(`demo-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <nav className="hidden xl:flex flex-col gap-1 sticky top-24 w-40 shrink-0">
      <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-600">Demos</p>
      {NAV_ITEMS.map((item) => (
        <button key={item.id} onClick={() => scrollTo(item.id)}
          className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-left text-xs font-semibold transition-all ${
            activeId === item.id
              ? "bg-brand-blue-700/20 text-brand-blue-300 border border-brand-blue-700/30"
              : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.04]"
          }`}>
          <span className="text-[10px] font-bold text-slate-600 w-4">{item.num}</span>
          {item.label}
        </button>
      ))}
      <div className="mt-4 pt-4 border-t border-white/[0.06]">
        <Link href="/contact?intent=consultation"
          className="block w-full rounded-xl bg-brand-blue-700 px-3 py-2 text-center text-[11px] font-bold text-white transition hover:bg-brand-blue-600">
          Get a Demo
        </Link>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MOBILE DEMO TABS
═══════════════════════════════════════════════════════════════════ */

function MobileDemoTabs({ activeId }: { activeId: string }) {
  const scrollTo = (id: string) => {
    document.getElementById(`demo-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="xl:hidden sticky top-16 z-30 border-b border-white/[0.06] bg-[#0d1f3c]/95 backdrop-blur px-4 py-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex gap-1.5 w-max">
        {NAV_ITEMS.map((item) => (
          <button key={item.id} onClick={() => scrollTo(item.id)}
            className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-[11px] font-bold transition-all ${
              activeId === item.id
                ? "bg-brand-blue-700 text-white"
                : "bg-white/[0.05] text-slate-400 hover:text-slate-200"
            }`}>
            {item.num} {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   ROOT SHOWCASE
═══════════════════════════════════════════════════════════════════ */

export function AIDemoShowcase() {
  const DEMOS = buildDemos();
  const [activeId, setActiveId] = useState("voice");

  /* Track which demo is in view */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(`demo-${id}`);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_#0d1f3c_0%,_#030712_70%)]">
      {/* Background glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-[600px] w-[800px] rounded-full bg-brand-blue-700/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[600px] rounded-full bg-brand-red-700/08 blur-[120px]" />
      </div>

      {/* Mobile tabs */}
      <MobileDemoTabs activeId={activeId} />

      {/* Main layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:flex xl:gap-12 xl:px-8">
        <SideNav activeId={activeId} />

        <div className="flex-1 min-w-0">
          {DEMOS.map((demo, i) => (
            <DemoSection key={demo.id} demo={demo} isEven={i % 2 === 0} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-white/[0.06] py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-red-700/40 bg-brand-red-900/20 px-3 py-1 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red-400 animate-pulse" />
            <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-red-300">Start automating</span>
          </div>
          <h2 className="text-2xl font-black text-white sm:text-3xl">Every day without automation<br />is a day of lost revenue.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-400 max-w-lg mx-auto">
            Pick any automation above and we will build it for your business — customised to your workflows, tools, and customers. Most go live within 2–4 weeks.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/contact?intent=consultation"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue-700 px-6 py-3 text-sm font-bold text-white shadow transition hover:bg-brand-blue-600">
              Book Free Automation Audit <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ai-automation"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06]">
              AI Automation Overview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
