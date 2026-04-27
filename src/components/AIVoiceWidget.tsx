"use client";

import { useState, useEffect, useRef } from "react";
import { Mic, MicOff, Phone, PhoneOff, Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SCRIPT: { role: "agent" | "user"; text: string; delay: number }[] = [
  { role: "agent", text: "Hello! Thanks for calling Meridian Clinic. How can I help you today?", delay: 600 },
  { role: "user",  text: "Hi, I'd like to book an appointment with Dr. Adeyemi for next Tuesday.", delay: 2800 },
  { role: "agent", text: "Of course! Let me check availability for Dr. Adeyemi on Tuesday…", delay: 5200 },
  { role: "agent", text: "I have openings at 10:00 AM and 2:30 PM. Which works best for you?", delay: 7000 },
  { role: "user",  text: "2:30 PM please.", delay: 9400 },
  { role: "agent", text: "Perfect. Can I confirm your name and phone number for the booking?", delay: 11200 },
  { role: "user",  text: "James Okafor, 0801 234 5678.", delay: 13200 },
  { role: "agent", text: "Got it, James. Your appointment is confirmed for Tuesday at 2:30 PM with Dr. Adeyemi. A reminder will be sent to your phone.", delay: 15400 },
  { role: "user",  text: "Great, thank you!", delay: 18600 },
  { role: "agent", text: "You're welcome, James! Have a wonderful day. Goodbye!", delay: 20000 },
];

/* Animated waveform bars */
function Waveform({ active, color }: { active: boolean; color: string }) {
  const bars = [3, 7, 5, 9, 4, 8, 5, 6, 3, 7, 4, 9, 5, 3, 8];
  return (
    <div className="flex items-center gap-[3px] h-6">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className={`w-[3px] rounded-full ${color}`}
          animate={
            active
              ? { scaleY: [1, h / 5, 1, h / 3, 1], opacity: [0.6, 1, 0.7, 1, 0.6] }
              : { scaleY: 0.15, opacity: 0.3 }
          }
          transition={
            active
              ? { duration: 0.8 + (i % 4) * 0.15, repeat: Infinity, delay: i * 0.04, ease: "easeInOut" }
              : { duration: 0.3 }
          }
          style={{ height: 24, transformOrigin: "center" }}
        />
      ))}
    </div>
  );
}

export function AIVoiceWidget() {
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<typeof SCRIPT>([]);
  const [agentSpeaking, setAgentSpeaking] = useState(false);
  const [userSpeaking, setUserSpeaking] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [scriptIdx, setScriptIdx] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  /* clear timers on unmount */
  useEffect(() => () => timerRef.current.forEach(clearTimeout), []);

  /* auto scroll */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const startCall = () => {
    setStarted(true);
    setMessages([]);
    setScriptIdx(0);
    setCallEnded(false);
    setAgentSpeaking(false);
    setUserSpeaking(false);

    SCRIPT.forEach((line, i) => {
      const t1 = setTimeout(() => {
        setMessages((prev) => [...prev, line]);
        if (line.role === "agent") {
          setAgentSpeaking(true);
          setUserSpeaking(false);
        } else {
          setUserSpeaking(true);
          setAgentSpeaking(false);
        }
        setScriptIdx(i);
      }, line.delay);

      const nextDelay = SCRIPT[i + 1]?.delay ?? line.delay + 2000;
      const t2 = setTimeout(() => {
        setAgentSpeaking(false);
        setUserSpeaking(false);
      }, nextDelay - 200);

      timerRef.current.push(t1, t2);
    });

    /* end call */
    const endT = setTimeout(() => {
      setCallEnded(true);
      setAgentSpeaking(false);
      setUserSpeaking(false);
      setStarted(false);
    }, SCRIPT[SCRIPT.length - 1].delay + 2600);
    timerRef.current.push(endT);
  };

  const resetCall = () => {
    timerRef.current.forEach(clearTimeout);
    timerRef.current = [];
    setStarted(false);
    setCallEnded(false);
    setMessages([]);
    setAgentSpeaking(false);
    setUserSpeaking(false);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-navy-950/80 backdrop-blur-md overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)]">

      {/* ── Header bar ─────────────────────────────────────── */}
      <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.04] px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue-700">
            <Volume2 className="h-4 w-4 text-white" />
            {(started || agentSpeaking) && (
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
            )}
          </div>
          <div>
            <p className="text-sm font-semibold text-white leading-tight">AI Voice Agent</p>
            <p className="text-[11px] text-slate-400 leading-tight">Meridian Clinic Demo</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {(started || callEnded) && (
            <span
              className={`text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded-full border ${
                callEnded
                  ? "border-slate-500/30 bg-slate-500/10 text-slate-400"
                  : "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
              }`}
            >
              {callEnded ? "Call Ended" : "● Live"}
            </span>
          )}
        </div>
      </div>

      {/* ── Avatars + waveforms ─────────────────────────────── */}
      <div className="flex items-stretch gap-3 border-b border-white/[0.06] px-5 py-4 bg-white/[0.02]">
        {/* Agent */}
        <div className="flex flex-1 flex-col items-center gap-2.5 rounded-2xl border border-white/[0.07] bg-white/[0.04] py-4 px-3">
          <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue-700/80 ring-2 transition-all duration-300 ${agentSpeaking ? "ring-brand-blue-400 shadow-[0_0_16px_rgba(21,101,192,0.7)]" : "ring-white/10"}`}>
            <span className="text-lg">🤖</span>
          </div>
          <p className="text-[11px] font-semibold text-slate-300">AI Agent</p>
          <Waveform active={agentSpeaking} color="bg-brand-blue-400" />
          {agentSpeaking ? (
            <span className="text-[10px] text-brand-blue-300 font-medium">Speaking…</span>
          ) : (
            <span className="text-[10px] text-slate-500">Listening</span>
          )}
        </div>

        {/* User */}
        <div className="flex flex-1 flex-col items-center gap-2.5 rounded-2xl border border-white/[0.07] bg-white/[0.04] py-4 px-3">
          <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-brand-red-700/80 ring-2 transition-all duration-300 ${userSpeaking ? "ring-brand-red-400 shadow-[0_0_16px_rgba(198,40,40,0.7)]" : "ring-white/10"}`}>
            <span className="text-lg">👤</span>
          </div>
          <p className="text-[11px] font-semibold text-slate-300">Caller</p>
          <Waveform active={userSpeaking} color="bg-brand-red-400" />
          {userSpeaking ? (
            <span className="text-[10px] text-brand-red-300 font-medium">Speaking…</span>
          ) : (
            <span className="text-[10px] text-slate-500">Listening</span>
          )}
        </div>
      </div>

      {/* ── Transcript ─────────────────────────────────────── */}
      <div className="h-52 overflow-y-auto px-5 py-4 space-y-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {messages.length === 0 && !started && !callEnded && (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-slate-500 text-center leading-7">
              Press <span className="text-white font-medium">Start Demo Call</span> to see a<br />live AI voice booking in action.
            </p>
          </div>
        )}
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-2.5 ${m.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm ${
                m.role === "agent" ? "bg-brand-blue-700/60" : "bg-brand-red-700/60"
              }`}>
                {m.role === "agent" ? "🤖" : "👤"}
              </div>
              <div
                className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-6 ${
                  m.role === "agent"
                    ? "rounded-tl-sm bg-brand-blue-900/60 text-slate-200 border border-brand-blue-700/30"
                    : "rounded-tr-sm bg-brand-red-900/60 text-slate-200 border border-brand-red-700/30"
                }`}
              >
                {m.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {callEnded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-2"
          >
            <span className="text-[11px] text-slate-500 bg-white/[0.04] border border-white/[0.07] px-3 py-1 rounded-full">
              ✓ Appointment booked · Reminder sent · CRM updated
            </span>
          </motion.div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* ── Call button ────────────────────────────────────── */}
      <div className="border-t border-white/[0.06] px-5 py-4 bg-white/[0.02] flex items-center justify-between gap-3">
        <p className="text-[11px] text-slate-500 leading-5">
          Works with WhatsApp, phone calls,<br />websites & booking systems
        </p>
        {!started ? (
          <button
            onClick={callEnded ? resetCall : startCall}
            className="flex items-center gap-2 rounded-xl bg-brand-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(21,101,192,0.5)] transition hover:bg-brand-blue-600 hover:shadow-[0_4px_28px_rgba(21,101,192,0.7)] active:scale-95"
          >
            <Phone className="h-4 w-4" />
            {callEnded ? "Replay Demo" : "Start Demo Call"}
          </button>
        ) : (
          <button
            onClick={resetCall}
            className="flex items-center gap-2 rounded-xl bg-brand-red-700 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(198,40,40,0.45)] transition hover:bg-brand-red-600 active:scale-95"
          >
            <PhoneOff className="h-4 w-4" />
            End Call
          </button>
        )}
      </div>
    </div>
  );
}
