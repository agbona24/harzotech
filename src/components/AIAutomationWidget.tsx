"use client";

import { useState, useEffect, useRef } from "react";
import {
  Mic, Phone, PhoneOff, Volume2,
  MessageCircle, Users, Bot,
  Check, CheckCheck, Send,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Types ──────────────────────────────────────────────────────── */
type Role = "agent" | "user";
type TabId = "voice" | "whatsapp" | "leadbot";

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

/* ─── WhatsApp tab ───────────────────────────────────────────────── */
function WhatsAppTab() {
  const [messages, setMessages] = useState<typeof WA_SCRIPT>([]);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [typing, setTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, typing]);

  const start = () => {
    timers.current.forEach(clearTimeout); timers.current = [];
    setMessages([]); setRunning(true); setDone(false); setTyping(false);

    WA_SCRIPT.forEach((msg, i) => {
      if (msg.side === "bot") {
        timers.current.push(setTimeout(() => setTyping(true), msg.delay - 700));
      }
      timers.current.push(setTimeout(() => {
        setTyping(false);
        setMessages((p) => [...p, msg]);
      }, msg.delay));
    });

    timers.current.push(setTimeout(() => { setRunning(false); setDone(true); }, WA_SCRIPT[WA_SCRIPT.length - 1].delay + 1800));
  };

  const reset = () => {
    timers.current.forEach(clearTimeout); timers.current = [];
    setMessages([]); setRunning(false); setDone(false); setTyping(false);
  };

  return (
    <div className="flex flex-col">
      {/* WA header */}
      <div className="flex items-center gap-3 border-b border-white/[0.06] bg-[#075E54]/30 px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/20 text-lg">🏪</div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">StyleHaus Official</p>
          <p className="text-[11px] text-emerald-400">● Online · WhatsApp Business</p>
        </div>
        <MessageCircle className="h-4 w-4 text-[#25D366]" />
      </div>

      {/* Chat */}
      <div ref={chatRef} className="h-56 overflow-y-auto bg-[#0a1a14]/60 px-3 py-3 space-y-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {messages.length === 0 && !running && !done && (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-slate-500 text-center leading-7">
              Press <span className="text-white font-medium">Start Demo</span> to see<br />WhatsApp automation live.
            </p>
          </div>
        )}
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
              className={`flex ${m.side === "customer" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[82%] rounded-2xl px-3 py-2 text-[12px] leading-5 shadow-sm whitespace-pre-line
                ${m.side === "bot"
                  ? "rounded-tl-sm bg-[#1f2b23] text-slate-200 border border-[#25D366]/20"
                  : "rounded-tr-sm bg-[#056162]/80 text-slate-100"}`}>
                {m.text}
                <div className={`mt-1 flex items-center gap-1 text-[10px] ${m.side === "bot" ? "text-slate-500 justify-start" : "text-slate-300 justify-end"}`}>
                  {m.side === "customer" && <CheckCheck className="h-3 w-3 text-[#53BDEB]" />}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {typing && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-1.5 items-center px-3 py-2 rounded-2xl rounded-tl-sm bg-[#1f2b23] w-fit border border-[#25D366]/20">
            {[0, 1, 2].map((i) => (
              <motion.span key={i} className="h-1.5 w-1.5 rounded-full bg-[#25D366]/60"
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }} />
            ))}
          </motion.div>
        )}
      </div>

      {/* Input bar mock */}
      <div className="border-t border-white/[0.06] flex items-center gap-2 bg-[#1a2a20]/60 px-3 py-2.5">
        <div className="flex-1 rounded-full bg-white/[0.07] border border-white/[0.06] px-3 py-1.5 text-[12px] text-slate-500 select-none">
          {running ? "Automation handling this…" : "Type a message"}
        </div>
        <button disabled={running}
          onClick={done ? reset : start}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white shadow transition hover:bg-[#1eb356] disabled:opacity-50">
          <Send className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="px-4 pb-3 pt-1.5 text-[11px] text-slate-500">
        {done ? "✓ Order tracked · Agent escalation triggered · CRM logged" : "Automated 24/7 — no human needed for routine queries"}
      </div>
    </div>
  );
}

/* ─── Lead Bot tab ───────────────────────────────────────────────── */
function LeadBotTab() {
  const [messages, setMessages] = useState<typeof LEAD_SCRIPT>([]);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [typing, setTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, typing]);

  const start = () => {
    timers.current.forEach(clearTimeout); timers.current = [];
    setMessages([]); setRunning(true); setDone(false); setTyping(false);

    LEAD_SCRIPT.forEach((msg, i) => {
      if (msg.side === "bot") {
        timers.current.push(setTimeout(() => setTyping(true), msg.delay - 700));
      }
      timers.current.push(setTimeout(() => {
        setTyping(false);
        setMessages((p) => [...p, msg]);
      }, msg.delay));
    });

    timers.current.push(setTimeout(() => { setRunning(false); setDone(true); }, LEAD_SCRIPT[LEAD_SCRIPT.length - 1].delay + 1800));
  };

  const reset = () => {
    timers.current.forEach(clearTimeout); timers.current = [];
    setMessages([]); setRunning(false); setDone(false); setTyping(false);
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/[0.06] bg-brand-blue-900/30 px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue-700/40 text-lg">🤖</div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">Harzo Lead Bot</p>
          <p className="text-[11px] text-brand-blue-300">Website AI assistant · Qualifies leads 24/7</p>
        </div>
        <Users className="h-4 w-4 text-brand-blue-400" />
      </div>

      {/* Chat */}
      <div ref={chatRef} className="h-56 overflow-y-auto bg-navy-950/60 px-3 py-3 space-y-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {messages.length === 0 && !running && !done && (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-slate-500 text-center leading-7">
              Press <span className="text-white font-medium">Start Demo</span> to see<br />automated lead capture in action.
            </p>
          </div>
        )}
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
              className={`flex ${m.side === "visitor" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[82%] rounded-2xl px-3 py-2 text-[12px] leading-5 whitespace-pre-line
                ${m.side === "bot"
                  ? "rounded-tl-sm bg-brand-blue-900/60 text-slate-200 border border-brand-blue-700/30"
                  : "rounded-tr-sm bg-navy-700/80 text-slate-100 border border-white/[0.08]"}`}>
                {m.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {typing && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-1.5 items-center px-3 py-2 rounded-2xl rounded-tl-sm bg-brand-blue-900/60 w-fit border border-brand-blue-700/30">
            {[0, 1, 2].map((i) => (
              <motion.span key={i} className="h-1.5 w-1.5 rounded-full bg-brand-blue-400/60"
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }} />
            ))}
          </motion.div>
        )}
      </div>

      {/* Input bar mock */}
      <div className="border-t border-white/[0.06] flex items-center gap-2 bg-white/[0.02] px-3 py-2.5">
        <div className="flex-1 rounded-full bg-white/[0.06] border border-white/[0.06] px-3 py-1.5 text-[12px] text-slate-500 select-none">
          {running ? "Collecting your details…" : "Your message…"}
        </div>
        <button disabled={running}
          onClick={done ? reset : start}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-700 text-white shadow transition hover:bg-brand-blue-600 disabled:opacity-50">
          <Send className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="px-4 pb-3 pt-1.5 text-[11px] text-slate-500">
        {done ? "✓ Lead qualified · Proposal triggered · Added to CRM" : "Qualifies leads & sends proposals while you sleep"}
      </div>
    </div>
  );
}

/* ─── Tabs config ────────────────────────────────────────────────── */
const TABS: { id: TabId; label: string; icon: React.ReactNode; description: string }[] = [
  { id: "voice",    label: "AI Voice",  icon: <Mic className="h-3.5 w-3.5" />,            description: "Voice booking agent" },
  { id: "whatsapp", label: "WhatsApp",  icon: <MessageCircle className="h-3.5 w-3.5" />,  description: "Chat automation"     },
  { id: "leadbot",  label: "Lead Bot",  icon: <Bot className="h-3.5 w-3.5" />,            description: "Lead qualification"  },
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

      {/* ── Tabs — 2-row wrap: 4 on top, 3 on bottom ────────── */}
      <div className="flex flex-wrap border-b border-white/[0.06] bg-white/[0.02]">
        {TABS.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{ width: i < 4 ? "25%" : "calc(100% / 3)" }}
            className={`flex flex-col items-center gap-1 px-1 py-2.5 text-[11px] font-semibold transition-all
              ${activeTab === tab.id
                ? "border-b-2 border-brand-blue-400 text-brand-blue-300 bg-brand-blue-900/20"
                : "border-b-2 border-transparent text-slate-500 hover:text-slate-300 hover:bg-white/[0.03]"}
              ${i >= 4 ? "border-t border-white/[0.04]" : ""}`}
          >
            <span className={activeTab === tab.id ? "text-brand-blue-400" : "text-slate-500"}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Tab panels ───────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === "voice"    && <VoiceTab />}
          {activeTab === "whatsapp" && <WhatsAppTab />}
          {activeTab === "leadbot"  && <LeadBotTab />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
