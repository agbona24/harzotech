"use client";

import { useState, useEffect, useRef } from "react";
import {
  Mic, Phone, PhoneOff, Volume2,
  MessageCircle, Users, Bot,
  Send, Calendar, Receipt, Headphones, ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Types ──────────────────────────────────────────────────────── */
type Role = "agent" | "user";
type ChatSide = "bot" | "customer";
type TabId = "voice" | "whatsapp" | "leadbot" | "appointment" | "crm" | "invoice" | "support";

/* ─── Voice script ───────────────────────────────────────────────── */
const VOICE_SCRIPT: { role: Role; text: string; delay: number }[] = [
  { role: "agent", text: "Hello! Thanks for calling Meridian Clinic. How can I help?", delay: 600 },
  { role: "user",  text: "Hi, I'd like to book with Dr. Adeyemi for Tuesday.", delay: 2800 },
  { role: "agent", text: "Let me check availability on Tuesday…", delay: 5200 },
  { role: "agent", text: "I have 10:00 AM and 2:30 PM. Which works for you?", delay: 7000 },
  { role: "user",  text: "2:30 PM please.", delay: 9400 },
  { role: "agent", text: "Can I confirm your name and phone number?", delay: 11200 },
  { role: "user",  text: "James Okafor, 0801 234 5678.", delay: 13200 },
  { role: "agent", text: "Confirmed! Tuesday at 2:30 PM with Dr. Adeyemi. A reminder will be sent.", delay: 15400 },
  { role: "user",  text: "Great, thank you!", delay: 18000 },
  { role: "agent", text: "You're welcome, James! Goodbye!", delay: 19600 },
];

/* ─── WhatsApp script ────────────────────────────────────────────── */
const WA_SCRIPT: { side: "bot" | "customer"; text: string; delay: number }[] = [
  { side: "bot",      text: "👋 Hi! Welcome to StyleHaus. How can I help you today?\n\n1️⃣ Track my order\n2️⃣ Return / exchange\n3️⃣ Talk to a human", delay: 600 },
  { side: "customer", text: "1", delay: 2600 },
  { side: "bot",      text: "Sure! Please share your order number.", delay: 3800 },
  { side: "customer", text: "SH-20948", delay: 5800 },
  { side: "bot",      text: "✅ Order SH-20948 — *2× White Sneakers (EU 42)*\n📦 Status: Out for delivery\n🚚 ETA: Today 3–5 PM\n\nYou'll get an SMS when it arrives.", delay: 7400 },
  { side: "customer", text: "Thanks! Can I change the delivery address?", delay: 10200 },
  { side: "bot",      text: "I'm connecting you to a live agent to update the address — usually < 2 min wait.", delay: 12000 },
  { side: "bot",      text: "⏳ Agent Sarah has joined the chat.", delay: 14200 },
];

/* ─── Lead bot script ────────────────────────────────────────────── */
const LEAD_SCRIPT: { side: "bot" | "visitor"; text: string; delay: number }[] = [
  { side: "bot",     text: "Hey 👋 I'm Harzo — quick question: what brings you here today?", delay: 500 },
  { side: "visitor", text: "I need a website for my restaurant.", delay: 2400 },
  { side: "bot",     text: "Great! What's your estimated budget range?\n\n💰 Under $1k · $1k–$3k · $3k–$10k · $10k+", delay: 3800 },
  { side: "visitor", text: "$1k–$3k", delay: 6200 },
  { side: "bot",     text: "Perfect. When do you need it live?", delay: 7400 },
  { side: "visitor", text: "Within 6 weeks.", delay: 9200 },
  { side: "bot",     text: "Excellent — that fits our timeline. Last thing: what's your name and email so we can send a free proposal?", delay: 10400 },
  { side: "visitor", text: "Maria Santos · maria@bistrosantos.com", delay: 13200 },
  { side: "bot",     text: "Thanks Maria! 🎉 Your brief has been sent to our team. Expect a proposal within 24 hours. Check your inbox!", delay: 15000 },
];

/* ─── Appointment script ──────────────────────────────────── */
const APPT_SCRIPT: { side: ChatSide; text: string; delay: number }[] = [
  { side: "bot",      text: "Hi! Book with LuxeBarbers. What service?", delay: 500 },
  { side: "customer", text: "Full haircut + beard trim", delay: 2200 },
  { side: "bot",      text: "Got it (45 min). Preferred day?", delay: 3400 },
  { side: "customer", text: "Saturday morning", delay: 5200 },
  { side: "bot",      text: "Saturday slots:\n\n9:00 AM  |  10:30 AM  |  11:00 AM", delay: 6400 },
  { side: "customer", text: "10:30 AM", delay: 8200 },
  { side: "bot",      text: "Name and number for confirmation?", delay: 9400 },
  { side: "customer", text: "Emeka - 0802 345 6789", delay: 11200 },
  { side: "bot",      text: "Booked! Saturday 10:30 AM at LuxeBarbers. SMS reminder sent + calendar updated.", delay: 13000 },
];

/* ─── Support script ─────────────────────────────────────────── */
const SUPPORT_SCRIPT: { side: ChatSide; text: string; delay: number }[] = [
  { side: "bot",      text: "Hi! I can answer questions, raise tickets, or connect you to our team.", delay: 500 },
  { side: "customer", text: "My dashboard isn't loading after the update.", delay: 2400 },
  { side: "bot",      text: "Let me check our knowledge base...", delay: 3600 },
  { side: "bot",      text: "Common fix: clear cache & hard-reload (Ctrl+Shift+R). Did that help?", delay: 5400 },
  { side: "customer", text: "Still broken.", delay: 7200 },
  { side: "bot",      text: "Raising a priority ticket. Ticket #HZ-4821 created. Confirmation sent to your email.", delay: 8400 },
  { side: "bot",      text: "Connecting to a technical agent - avg wait: 3 min.", delay: 10800 },
  { side: "bot",      text: "Agent Tunde has joined. He can see your ticket details.", delay: 13000 },
];

/* ─── CRM data ─────────────────────────────────────────────────── */
const CRM_STAGES = ["New Lead", "Qualified", "Proposal", "Negotiation", "Won"];
const CRM_EVENTS: { stageIdx: number; event: string; detail: string; delay: number }[] = [
  { stageIdx: 0, event: "Lead captured",    detail: "Maria Santos via web form",              delay: 800   },
  { stageIdx: 0, event: "Welcome email",    detail: "Auto-sent - opened in 4 min",            delay: 2000  },
  { stageIdx: 1, event: "Lead qualified",   detail: "Budget $1k-$3k - timeline 6 wks",        delay: 3600  },
  { stageIdx: 1, event: "CRM updated",      detail: "Moved to Qualified - tagged #web",       delay: 5000  },
  { stageIdx: 2, event: "Proposal sent",    detail: "PDF + pricing deck delivered",           delay: 6600  },
  { stageIdx: 2, event: "Follow-up queued", detail: "Auto follow-up in 3 days if no reply",  delay: 8200  },
  { stageIdx: 3, event: "Client replied",   detail: "Requesting minor revisions",             delay: 10000 },
  { stageIdx: 3, event: "Revised sent",     detail: "Updated proposal emailed",              delay: 11600 },
  { stageIdx: 4, event: "Deal won!",         detail: "Invoice triggered - Onboarding started", delay: 13400 },
];

/* ─── Invoice steps ────────────────────────────────────────────── */
const INVOICE_STEPS: { icon: string; label: string; detail: string; delay: number }[] = [
  { icon: "check", label: "Job marked complete",    detail: "By technician via mobile app",            delay: 800   },
  { icon: "doc",   label: "Invoice auto-generated", detail: "INV-2024-0087 - $1,850 - Net 7",          delay: 2400  },
  { icon: "mail",  label: "Invoice emailed",         detail: "Sent to client@buildcraft.co",            delay: 4000  },
  { icon: "chat",  label: "WhatsApp reminder sent",  detail: "Payment link included",                   delay: 5600  },
  { icon: "card",  label: "Payment received",        detail: "$1,850 - Stripe - 6 hrs after send",     delay: 7800  },
  { icon: "doc2",  label: "Receipt emailed",         detail: "Auto-sent + bookkeeping entry created",  delay: 9400  },
  { icon: "chart", label: "Dashboard updated",       detail: "Revenue +$1,850 - Invoice closed",       delay: 11000 },
];
const INVOICE_EMOJIS: Record<string, string> = { check: "\u2705", doc: "\ud83e\uddfe", mail: "\ud83d\udce7", chat: "\ud83d\udcac", card: "\ud83d\udcb3", doc2: "\ud83e\uddfe", chart: "\ud83d\udcca" };

/* ─── Waveform ───────────────────────────────────────────────────── */
function Waveform({ active, color }: { active: boolean; color: string }) {
  const bars = [3, 7, 5, 9, 4, 8, 5, 6, 3, 7, 4, 9, 5, 3, 8];
  return (
    <div className="flex h-6 items-center gap-[3px]">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className={`w-[3px] rounded-full ${color}`}
          animate={active
            ? { scaleY: [1, h / 5, 1, h / 3, 1], opacity: [0.6, 1, 0.7, 1, 0.6] }
            : { scaleY: 0.15, opacity: 0.3 }}
          transition={active
            ? { duration: 0.8 + (i % 4) * 0.15, repeat: Infinity, delay: i * 0.04, ease: "easeInOut" }
            : { duration: 0.3 }}
          style={{ height: 24, transformOrigin: "center" }}
        />
      ))}
    </div>
  );
}

/* ─── Voice tab ──────────────────────────────────────────────────── */
function VoiceTab() {
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<typeof VOICE_SCRIPT>([]);
  const [agentSpeaking, setAgentSpeaking] = useState(false);
  const [userSpeaking, setUserSpeaking] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [messages]);

  const start = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setStarted(true);
    setMessages([]);
    setCallEnded(false);
    setAgentSpeaking(false);
    setUserSpeaking(false);

    VOICE_SCRIPT.forEach((line, i) => {
      timers.current.push(setTimeout(() => {
        setMessages((p) => [...p, line]);
        line.role === "agent" ? (setAgentSpeaking(true), setUserSpeaking(false)) : (setUserSpeaking(true), setAgentSpeaking(false));
      }, line.delay));
      const nextDelay = VOICE_SCRIPT[i + 1]?.delay ?? line.delay + 2000;
      timers.current.push(setTimeout(() => { setAgentSpeaking(false); setUserSpeaking(false); }, nextDelay - 200));
    });

    timers.current.push(setTimeout(() => {
      setCallEnded(true); setAgentSpeaking(false); setUserSpeaking(false); setStarted(false);
    }, VOICE_SCRIPT[VOICE_SCRIPT.length - 1].delay + 2400));
  };

  const reset = () => {
    timers.current.forEach(clearTimeout); timers.current = [];
    setStarted(false); setCallEnded(false); setMessages([]); setAgentSpeaking(false); setUserSpeaking(false);
  };

  return (
    <div className="flex flex-col">
      {/* Avatars */}
      <div className="flex items-stretch gap-3 border-b border-white/[0.06] px-5 py-4 bg-white/[0.02]">
        {[
          { label: "AI Agent", emoji: "🤖", speaking: agentSpeaking, color: "brand-blue" },
          { label: "Caller",   emoji: "👤", speaking: userSpeaking,  color: "brand-red"  },
        ].map(({ label, emoji, speaking, color }) => (
          <div key={label} className={`flex flex-1 flex-col items-center gap-2 rounded-2xl border border-white/[0.07] bg-white/[0.04] py-3 px-2`}>
            <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-${color}-700/80 ring-2 transition-all duration-300 ${speaking ? `ring-${color}-400 shadow-[0_0_14px_rgba(21,101,192,0.6)]` : "ring-white/10"}`}>
              <span className="text-base">{emoji}</span>
            </div>
            <p className="text-[11px] font-semibold text-slate-300">{label}</p>
            <Waveform active={speaking} color={`bg-${color}-400`} />
            <span className={`text-[10px] font-medium ${speaking ? `text-${color}-300` : "text-slate-500"}`}>
              {speaking ? "Speaking…" : "Listening"}
            </span>
          </div>
        ))}
      </div>

      {/* Transcript */}
      <div ref={transcriptRef} className="h-48 overflow-y-auto px-4 py-3 space-y-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {messages.length === 0 && !started && !callEnded && (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-slate-500 text-center leading-7">
              Press <span className="text-white font-medium">Start Demo Call</span> to see<br />a live AI booking in action.
            </p>
          </div>
        )}
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
              className={`flex gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs ${m.role === "agent" ? "bg-brand-blue-700/60" : "bg-brand-red-700/60"}`}>
                {m.role === "agent" ? "🤖" : "👤"}
              </div>
              <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-[12px] leading-5 ${m.role === "agent" ? "rounded-tl-sm bg-brand-blue-900/60 text-slate-200 border border-brand-blue-700/30" : "rounded-tr-sm bg-brand-red-900/60 text-slate-200 border border-brand-red-700/30"}`}>
                {m.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {callEnded && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-1">
            <span className="text-[11px] text-slate-500 bg-white/[0.04] border border-white/[0.07] px-3 py-1 rounded-full">
              ✓ Appointment booked · Reminder sent · CRM updated
            </span>
          </motion.div>
        )}
      </div>

      {/* Controls */}
      <div className="border-t border-white/[0.06] px-4 py-3 bg-white/[0.02] flex items-center justify-between gap-3">
        <p className="text-[11px] text-slate-500 leading-5">Live voice booking<br />for clinics, services &amp; more</p>
        {!started ? (
          <button onClick={callEnded ? reset : start}
            className="flex items-center gap-2 rounded-xl bg-brand-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(21,101,192,0.4)] transition hover:bg-brand-blue-600 active:scale-95">
            <Phone className="h-3.5 w-3.5" />
            {callEnded ? "Replay" : "Start Demo Call"}
          </button>
        ) : (
          <button onClick={reset}
            className="flex items-center gap-2 rounded-xl bg-brand-red-700 px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(198,40,40,0.4)] transition hover:bg-brand-red-600 active:scale-95">
            <PhoneOff className="h-3.5 w-3.5" />
            End Call
          </button>
        )}
      </div>
    </div>
  );
}

/* ─── Generic chat hook ──────────────────────────────────────────── */
function useChat<T extends { side: string; delay: number }>(script: T[]) {
  const [messages, setMessages] = useState<T[]>([]);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [typing, setTyping] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, typing]);

  const startChat = (botSide: string) => {
    timers.current.forEach(clearTimeout); timers.current = [];
    setMessages([]); setRunning(true); setDone(false); setTyping(false);
    script.forEach((msg) => {
      if (msg.side === botSide) {
        timers.current.push(setTimeout(() => setTyping(true), Math.max(0, msg.delay - 700)));
      }
      timers.current.push(setTimeout(() => { setTyping(false); setMessages((p) => [...p, msg]); }, msg.delay));
    });
    const lastDelay = script[script.length - 1].delay;
    timers.current.push(setTimeout(() => { setRunning(false); setDone(true); }, lastDelay + 1800));
  };

  const reset = () => {
    timers.current.forEach(clearTimeout); timers.current = [];
    setMessages([]); setRunning(false); setDone(false); setTyping(false);
  };

  return { messages, running, done, typing, chatRef, startChat, reset };
}

/* ─── Generic Chat Tab ───────────────────────────────────────────── */
interface ChatTabProps {
  script: { side: string; text: string; delay: number }[];
  botSide?: string;
  headerBg: string;
  headerEmoji: string;
  headerTitle: string;
  headerSub: string;
  headerIcon: React.ReactNode;
  botBubble: string;
  customerBubble: string;
  typingBubble: string;
  typingDot: string;
  inputPlaceholder: string;
  runningPlaceholder: string;
  btnColor: string;
  btnHover: string;
  emptyMsg: React.ReactNode;
  doneFooter: string;
  idleFooter: string;
}

function ChatTab({
  script, botSide = "bot", headerBg, headerEmoji, headerTitle, headerSub, headerIcon,
  botBubble, customerBubble, typingBubble, typingDot,
  inputPlaceholder, runningPlaceholder, btnColor, btnHover,
  emptyMsg, doneFooter, idleFooter,
}: ChatTabProps) {
  const { messages, running, done, typing, chatRef, startChat, reset } = useChat(script);
  return (
    <div className="flex flex-col">
      <div className={`flex items-center gap-3 border-b border-white/[0.06] ${headerBg} px-4 py-3`}>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-lg border border-white/10">{headerEmoji}</div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">{headerTitle}</p>
          <p className="text-[11px] text-slate-400">{headerSub}</p>
        </div>
        {headerIcon}
      </div>
      <div ref={chatRef} className="h-52 overflow-y-auto px-3 py-3 space-y-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {messages.length === 0 && !running && !done && (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-slate-500 text-center leading-7">{emptyMsg}</p>
          </div>
        )}
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
              className={`flex ${m.side !== botSide ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[82%] rounded-2xl px-3 py-2 text-[12px] leading-5 whitespace-pre-line ${m.side === botSide ? botBubble : customerBubble}`}>
                {m.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {typing && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`flex gap-1.5 items-center px-3 py-2 rounded-2xl rounded-tl-sm w-fit ${typingBubble}`}>
            {[0, 1, 2].map((i) => (
              <motion.span key={i} className={`h-1.5 w-1.5 rounded-full ${typingDot}`}
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }} />
            ))}
          </motion.div>
        )}
      </div>
      <div className="border-t border-white/[0.06] flex items-center gap-2 bg-white/[0.02] px-3 py-2.5">
        <div className="flex-1 rounded-full bg-white/[0.06] border border-white/[0.06] px-3 py-1.5 text-[12px] text-slate-500 select-none">
          {running ? runningPlaceholder : inputPlaceholder}
        </div>
        <button disabled={running} onClick={done ? reset : () => startChat(botSide)}
          className={`flex h-8 w-8 items-center justify-center rounded-full ${btnColor} text-white shadow transition ${btnHover} disabled:opacity-50`}>
          <Send className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="px-4 pb-3 pt-1 text-[11px] text-slate-500">{done ? doneFooter : idleFooter}</div>
    </div>
  );
}

/* ─── CRM Tab ────────────────────────────────────────────────────── */
function CRMTab() {
  const [events, setEvents] = useState<typeof CRM_EVENTS>([]);
  const [activeStage, setActiveStage] = useState(-1);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const feedRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => { if (feedRef.current) feedRef.current.scrollTop = feedRef.current.scrollHeight; }, [events]);

  const start = () => {
    timers.current.forEach(clearTimeout); timers.current = [];
    setEvents([]); setActiveStage(-1); setRunning(true); setDone(false);
    CRM_EVENTS.forEach((ev) => {
      timers.current.push(setTimeout(() => { setEvents((p) => [...p, ev]); setActiveStage(ev.stageIdx); }, ev.delay));
    });
    timers.current.push(setTimeout(() => { setRunning(false); setDone(true); }, CRM_EVENTS[CRM_EVENTS.length - 1].delay + 1600));
  };

  const reset = () => {
    timers.current.forEach(clearTimeout); timers.current = [];
    setEvents([]); setActiveStage(-1); setRunning(false); setDone(false);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-1 overflow-x-auto border-b border-white/[0.06] bg-white/[0.02] px-3 py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CRM_STAGES.map((stage, i) => (
          <div key={stage} className="flex items-center gap-1 shrink-0">
            <div className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all duration-500 ${i <= activeStage ? "bg-brand-blue-700 text-white" : "bg-white/[0.06] text-slate-500"}`}>{stage}</div>
            {i < CRM_STAGES.length - 1 && <ArrowRight className={`h-3 w-3 shrink-0 transition-colors duration-500 ${i < activeStage ? "text-brand-blue-400" : "text-slate-700"}`} />}
          </div>
        ))}
      </div>
      <div ref={feedRef} className="h-52 overflow-y-auto px-4 py-3 space-y-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
                <div className="h-1.5 w-1.5 rounded-full bg-brand-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-semibold text-slate-200 leading-tight">{ev.event}</p>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">{ev.detail}</p>
              </div>
              <span className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${ev.stageIdx === 4 ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border-brand-blue-500/20 bg-brand-blue-500/10 text-brand-blue-300"}`}>
                {CRM_STAGES[ev.stageIdx]}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="border-t border-white/[0.06] px-4 py-3 bg-white/[0.02] flex items-center justify-between gap-3">
        <p className="text-[11px] text-slate-500 leading-5">{done ? "Deal closed - Invoice triggered - Onboarding started" : "Automated pipeline from capture to close"}</p>
        <button onClick={done ? reset : start} disabled={running}
          className="flex items-center gap-2 rounded-xl bg-brand-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-blue-600 active:scale-95 disabled:opacity-50">
          {done ? "Replay" : running ? "Running..." : "Run Demo"}
        </button>
      </div>
    </div>
  );
}

/* ─── Invoice Tab ────────────────────────────────────────────────── */
function InvoiceTab() {
  const [steps, setSteps] = useState<typeof INVOICE_STEPS>([]);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const feedRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => { if (feedRef.current) feedRef.current.scrollTop = feedRef.current.scrollHeight; }, [steps]);

  const start = () => {
    timers.current.forEach(clearTimeout); timers.current = [];
    setSteps([]); setRunning(true); setDone(false);
    INVOICE_STEPS.forEach((s) => timers.current.push(setTimeout(() => setSteps((p) => [...p, s]), s.delay)));
    timers.current.push(setTimeout(() => { setRunning(false); setDone(true); }, INVOICE_STEPS[INVOICE_STEPS.length - 1].delay + 1600));
  };

  const reset = () => {
    timers.current.forEach(clearTimeout); timers.current = [];
    setSteps([]); setRunning(false); setDone(false);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3 border-b border-white/[0.06] bg-emerald-950/30 px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800/40 text-lg border border-emerald-700/20">🧾</div>
        <div>
          <p className="text-sm font-semibold text-white">BuildCraft Services</p>
          <p className="text-[11px] text-emerald-400">Invoice & Payment Automation</p>
        </div>
      </div>
      <div ref={feedRef} className="h-52 overflow-y-auto px-4 py-3 space-y-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {steps.length === 0 && !running && !done && (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-slate-500 text-center leading-7">Press <span className="text-white font-medium">Run Demo</span><br />to watch invoice automation fire.</p>
          </div>
        )}
        <AnimatePresence initial={false}>
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
              className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5">
              <span className="text-base shrink-0 mt-0.5">{INVOICE_EMOJIS[s.icon] ?? s.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-semibold text-slate-200 leading-tight">{s.label}</p>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">{s.detail}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="border-t border-white/[0.06] px-4 py-3 bg-white/[0.02] flex items-center justify-between gap-3">
        <p className="text-[11px] text-slate-500 leading-5">{done ? "Paid in 6 hrs - Books updated - Zero manual work" : "From job complete to paid - fully automated"}</p>
        <button onClick={done ? reset : start} disabled={running}
          className="flex items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600 active:scale-95 disabled:opacity-50">
          {done ? "Replay" : running ? "Running..." : "Run Demo"}
        </button>
      </div>
    </div>
  );
}

/* ─── Tabs config ────────────────────────────────────────────────── */
const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: "voice",       label: "AI Voice",  icon: <Mic className="h-3.5 w-3.5" />           },
  { id: "whatsapp",    label: "WhatsApp",  icon: <MessageCircle className="h-3.5 w-3.5" /> },
  { id: "leadbot",     label: "Lead Bot",  icon: <Bot className="h-3.5 w-3.5" />           },
  { id: "appointment", label: "Booking",   icon: <Calendar className="h-3.5 w-3.5" />      },
  { id: "crm",         label: "CRM",       icon: <Users className="h-3.5 w-3.5" />         },
  { id: "invoice",     label: "Invoice",   icon: <Receipt className="h-3.5 w-3.5" />       },
  { id: "support",     label: "Support",   icon: <Headphones className="h-3.5 w-3.5" />    },
];

/* ─── Main widget ────────────────────────────────────────────────── */
export function AIAutomationWidget() {
  const [activeTab, setActiveTab] = useState<TabId>("voice");

  return (
    <div className="rounded-3xl border border-white/10 bg-navy-950/80 backdrop-blur-md overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)]">

      {/* ── Top bar ───────────────────────────────────────────── */}
      <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.04] px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-blue-700">
            <Volume2 className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white leading-tight">AI Automation Demos</p>
            <p className="text-[11px] text-slate-400 leading-tight">Click a tab to explore each tool</p>
          </div>
        </div>
        <span className="text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded-full border border-brand-blue-500/30 bg-brand-blue-500/10 text-brand-blue-300">
          Live Demos
        </span>
      </div>

      {/* ── Tabs — grid: 4 on row 1, 3 on row 2 ────────────── */}
      <div className="grid grid-cols-4 border-b border-white/[0.06] bg-white/[0.02]">
        {TABS.slice(0, 4).map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-1 px-1 py-2.5 text-[11px] font-semibold transition-all
              ${activeTab === tab.id
                ? "border-b-2 border-brand-blue-400 text-brand-blue-300 bg-brand-blue-900/20"
                : "border-b-2 border-transparent text-slate-500 hover:text-slate-300 hover:bg-white/[0.03]"}`}>
            <span className={activeTab === tab.id ? "text-brand-blue-400" : "text-slate-500"}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
        <div className="col-span-4 grid grid-cols-3 border-t border-white/[0.04]">
          {TABS.slice(4).map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 px-1 py-2.5 text-[11px] font-semibold transition-all
                ${activeTab === tab.id
                  ? "border-b-2 border-brand-blue-400 text-brand-blue-300 bg-brand-blue-900/20"
                  : "border-b-2 border-transparent text-slate-500 hover:text-slate-300 hover:bg-white/[0.03]"}`}>
              <span className={activeTab === tab.id ? "text-brand-blue-400" : "text-slate-500"}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Tab panels ───────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div key={activeTab} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2 }}>
          {activeTab === "voice" && <VoiceTab />}
          {activeTab === "whatsapp" && (
            <ChatTab script={WA_SCRIPT}
              headerBg="bg-[#075E54]/20" headerEmoji="🏪" headerTitle="StyleHaus Official" headerSub="Online · WhatsApp Business"
              headerIcon={<MessageCircle className="h-4 w-4 text-[#25D366]" />}
              botBubble="rounded-tl-sm bg-[#1f2b23] text-slate-200 border border-[#25D366]/20"
              customerBubble="rounded-tr-sm bg-[#056162]/80 text-slate-100"
              typingBubble="bg-[#1f2b23] border border-[#25D366]/20"
              typingDot="bg-[#25D366]/60"
              inputPlaceholder="Type a message" runningPlaceholder="Automation handling this..."
              btnColor="bg-[#25D366]" btnHover="hover:bg-[#1eb356]"
              emptyMsg={<>Press <span className="text-white font-medium">Send</span> to see WhatsApp automation live.</>}
              doneFooter="Order tracked · Escalation triggered · CRM logged"
              idleFooter="Automated 24/7 — no human needed for routine queries" />
          )}
          {activeTab === "leadbot" && (
            <ChatTab script={LEAD_SCRIPT} botSide="bot"
              headerBg="bg-brand-blue-900/20" headerEmoji="🤖" headerTitle="Harzo Lead Bot" headerSub="Website AI · Qualifies leads 24/7"
              headerIcon={<Bot className="h-4 w-4 text-brand-blue-400" />}
              botBubble="rounded-tl-sm bg-brand-blue-900/60 text-slate-200 border border-brand-blue-700/30"
              customerBubble="rounded-tr-sm bg-navy-700/80 text-slate-100 border border-white/[0.08]"
              typingBubble="bg-brand-blue-900/60 border border-brand-blue-700/30"
              typingDot="bg-brand-blue-400/60"
              inputPlaceholder="Your message..." runningPlaceholder="Collecting your details..."
              btnColor="bg-brand-blue-700" btnHover="hover:bg-brand-blue-600"
              emptyMsg={<>Press <span className="text-white font-medium">Send</span> to see automated lead capture.</>}
              doneFooter="Lead qualified · Proposal triggered · CRM entry created"
              idleFooter="Qualifies leads & sends proposals while you sleep" />
          )}
          {activeTab === "appointment" && (
            <ChatTab script={APPT_SCRIPT}
              headerBg="bg-violet-900/20" headerEmoji="✂️" headerTitle="LuxeBarbers" headerSub="Booking assistant · Instant confirmation"
              headerIcon={<Calendar className="h-4 w-4 text-violet-400" />}
              botBubble="rounded-tl-sm bg-violet-900/60 text-slate-200 border border-violet-700/30"
              customerBubble="rounded-tr-sm bg-navy-700/80 text-slate-100 border border-white/[0.08]"
              typingBubble="bg-violet-900/60 border border-violet-700/30"
              typingDot="bg-violet-400/60"
              inputPlaceholder="Type a message..." runningPlaceholder="Checking availability..."
              btnColor="bg-violet-700" btnHover="hover:bg-violet-600"
              emptyMsg={<>Press <span className="text-white font-medium">Send</span> to book automatically.</>}
              doneFooter="Booked · SMS reminder sent · Calendar updated · Staff notified"
              idleFooter="Handles bookings, reschedules & reminders automatically" />
          )}
          {activeTab === "crm" && <CRMTab />}
          {activeTab === "invoice" && <InvoiceTab />}
          {activeTab === "support" && (
            <ChatTab script={SUPPORT_SCRIPT}
              headerBg="bg-amber-900/20" headerEmoji="🎧" headerTitle="Harzo Support Bot" headerSub="AI triage · Tickets · Human escalation"
              headerIcon={<Headphones className="h-4 w-4 text-amber-400" />}
              botBubble="rounded-tl-sm bg-amber-900/40 text-slate-200 border border-amber-700/20"
              customerBubble="rounded-tr-sm bg-navy-700/80 text-slate-100 border border-white/[0.08]"
              typingBubble="bg-amber-900/40 border border-amber-700/20"
              typingDot="bg-amber-400/60"
              inputPlaceholder="Describe your issue..." runningPlaceholder="AI reviewing your issue..."
              btnColor="bg-amber-700" btnHover="hover:bg-amber-600"
              emptyMsg={<>Press <span className="text-white font-medium">Send</span> to see AI support triage.</>}
              doneFooter="Ticket #HZ-4821 raised · Agent assigned · Client notified"
              idleFooter="FAQ answers, ticket creation & human hand-off — automated" />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
