"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, MicOff, Phone, PhoneOff, Volume2 } from "lucide-react";

/* ── Persona definitions ─────────────────────────────────────────── */
type PersonaKey = "clinic" | "restaurant" | "realestate" | "ecommerce";

const PERSONAS: Record<PersonaKey, { label: string; name: string; role: string; color: string; greeting: string }> = {
  clinic: {
    label: "Clinic",
    name: "Meridian Clinic",
    role: "AI Receptionist",
    color: "from-cyan-600 to-blue-700",
    greeting: "Hello, thanks for calling Meridian Clinic! My name is Amara. How can I help you today?",
  },
  restaurant: {
    label: "Restaurant",
    name: "Lagos Spice House",
    role: "AI Host",
    color: "from-orange-600 to-red-700",
    greeting: "Welcome to Lagos Spice House! I'm Zara. Are you looking to make a reservation or place an order today?",
  },
  realestate: {
    label: "Real Estate",
    name: "Zithelo Realty",
    role: "AI Property Consultant",
    color: "from-emerald-600 to-teal-700",
    greeting: "Good day! You've reached Zithelo Realty. I'm Kofi, your AI property consultant. Are you looking to buy, rent, or invest?",
  },
  ecommerce: {
    label: "E-commerce",
    name: "StyleHaus",
    role: "AI Support Agent",
    color: "from-purple-600 to-pink-700",
    greeting: "Hi! Welcome to StyleHaus. I'm Zoe, your support agent. Can I help you track an order, arrange a return, or answer a question?",
  },
};

/* ── Browser speech types ────────────────────────────────────────── */
interface ISpeechRecognition extends EventTarget {
  continuous: boolean; interimResults: boolean; lang: string;
  start(): void; stop(): void;
  onresult: ((e: SpeechRecognitionEvent) => void) | null;
  onerror: ((e: Event) => void) | null;
  onend: (() => void) | null;
}
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}
declare global {
  interface Window {
    SpeechRecognition?: new () => ISpeechRecognition;
    webkitSpeechRecognition?: new () => ISpeechRecognition;
  }
}

type CallState = "idle" | "ringing" | "connected" | "ended";
type Msg = { role: "agent" | "user"; text: string };

function Waveform({ active }: { active: boolean }) {
  const heights = [3, 7, 5, 9, 4, 8, 5, 6, 3, 7, 4, 9, 5, 3, 8, 6, 4, 7];
  return (
    <div className="flex h-8 items-center gap-[3px]">
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full bg-white transition-all duration-300"
          style={{
            height: active ? `${(h / 9) * 100}%` : "15%",
            opacity: active ? 0.7 + (i % 3) * 0.1 : 0.25,
            animation: active ? `wave ${0.7 + (i % 4) * 0.15}s ease-in-out ${i * 0.04}s infinite alternate` : "none",
          }}
        />
      ))}
      <style>{`@keyframes wave { from { transform: scaleY(0.4); } to { transform: scaleY(1); } }`}</style>
    </div>
  );
}

export function AIVoiceDemoAgent() {
  const [persona, setPersona]       = useState<PersonaKey>("clinic");
  const [callState, setCallState]   = useState<CallState>("idle");
  const [messages, setMessages]     = useState<Msg[]>([]);
  const [isListening, setListening] = useState(false);
  const [isAgentSpeaking, setAgentSpeaking] = useState(false);
  const [supported, setSupported]   = useState(false);
  const [duration, setDuration]     = useState(0);

  const recognitionRef = useRef<ISpeechRecognition | null>(null);
  const transcriptRef  = useRef<HTMLDivElement>(null);
  const timerRef       = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setSupported(
      typeof window !== "undefined" &&
      !!(window.SpeechRecognition ?? window.webkitSpeechRecognition)
    );
  }, []);

  useEffect(() => {
    if (callState === "connected") {
      timerRef.current = setInterval(() => setDuration((d) => d + 1), 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setDuration(0);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [callState]);

  useEffect(() => {
    transcriptRef.current?.scrollTo({ top: transcriptRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const formatDuration = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const speak = (text: string, onDone?: () => void) => {
    window.speechSynthesis?.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.rate = 1.05;
    utt.pitch = 1;
    setAgentSpeaking(true);
    utt.onend = () => { setAgentSpeaking(false); onDone?.(); };
    utt.onerror = () => { setAgentSpeaking(false); onDone?.(); };
    window.speechSynthesis.speak(utt);
  };

  const sendToAI = async (userText: string, history: Msg[]) => {
    const allMessages = [...history, { role: "user" as const, text: userText }];
    try {
      const res = await fetch("/api/ai/voice-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          persona,
          messages: allMessages.map((m) => ({ role: m.role === "agent" ? "assistant" : "user", content: m.text })),
        }),
      });
      const data = await res.json() as { reply?: string };
      const reply = data.reply ?? "I'm sorry, could you repeat that?";
      const next: Msg[] = [...allMessages, { role: "agent", text: reply }];
      setMessages(next);
      speak(reply, () => startListening(next));
    } catch {
      const errMsg = "Sorry, I had a technical issue. Could you please repeat that?";
      setMessages((prev) => [...prev, { role: "agent", text: errMsg }]);
      speak(errMsg);
    }
  };

  const startListening = (history: Msg[]) => {
    if (callState !== "connected") return;
    const SpeechAPI = window.SpeechRecognition ?? window.webkitSpeechRecognition;
    if (!SpeechAPI) return;

    const rec = new SpeechAPI();
    rec.continuous = false;
    rec.interimResults = false;
    rec.lang = "en-US";

    let sent = false;
    rec.onresult = (e: SpeechRecognitionEvent) => {
      if (sent) return;
      const transcript = e.results[e.results.length - 1]?.[0]?.transcript ?? "";
      if (transcript.trim()) {
        sent = true;
        const updated: Msg[] = [...history, { role: "user", text: transcript.trim() }];
        setMessages(updated);
        setListening(false);
        void sendToAI(transcript.trim(), history);
      }
    };
    rec.onerror = () => { sent = true; setListening(false); };
    rec.onend   = () => setListening(false);

    recognitionRef.current = rec;
    rec.start();
    setListening(true);
  };

  const startCall = () => {
    if (!supported) return;
    setCallState("ringing");
    setMessages([]);

    setTimeout(() => {
      setCallState("connected");
      const greeting = PERSONAS[persona].greeting;
      const initialMsg: Msg[] = [{ role: "agent", text: greeting }];
      setMessages(initialMsg);
      speak(greeting, () => startListening(initialMsg));
    }, 1800);
  };

  const endCall = () => {
    recognitionRef.current?.stop();
    window.speechSynthesis?.cancel();
    setListening(false);
    setAgentSpeaking(false);
    setCallState("ended");
  };

  const reset = () => {
    setCallState("idle");
    setMessages([]);
    setDuration(0);
  };

  const p = PERSONAS[persona];

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1a]">
      {/* Persona selector */}
      {callState === "idle" && (
        <div className="border-b border-white/[0.06] px-5 py-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
            Choose a business to demo
          </p>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(PERSONAS) as PersonaKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setPersona(key)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
                  persona === key
                    ? "border-brand-blue-500 bg-brand-blue-600 text-white"
                    : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {PERSONAS[key].label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Phone card */}
      <div className="flex flex-col items-center px-6 py-8">
        {/* Avatar */}
        <div className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${p.color} shadow-lg shadow-black/40`}>
          <Phone className="h-8 w-8 text-white" />
        </div>

        <p className="mt-4 text-lg font-black text-white">{p.name}</p>
        <p className="text-xs text-slate-400">{p.role}</p>

        {/* Status */}
        <div className="mt-3 flex items-center gap-2">
          {callState === "idle"      && <p className="text-xs font-semibold text-slate-500">Ready to call</p>}
          {callState === "ringing"   && <><span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" /><p className="text-xs font-semibold text-amber-400">Ringing…</p></>}
          {callState === "connected" && (
            <>
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <p className="text-xs font-semibold text-green-400">Connected · {formatDuration(duration)}</p>
            </>
          )}
          {callState === "ended" && <p className="text-xs font-semibold text-slate-500">Call ended · {formatDuration(duration)}</p>}
        </div>

        {/* Waveform */}
        <div className="mt-4 h-8">
          <Waveform active={isAgentSpeaking || isListening} />
        </div>

        {/* Speaking / listening label */}
        <div className="mt-2 h-4 text-center">
          {isAgentSpeaking && (
            <p className="flex items-center gap-1.5 text-[11px] font-semibold text-brand-blue-300">
              <Volume2 className="h-3 w-3" /> Agent speaking…
            </p>
          )}
          {isListening && (
            <p className="flex items-center gap-1.5 text-[11px] font-semibold text-red-400">
              <Mic className="h-3 w-3 animate-pulse" /> Listening — speak now…
            </p>
          )}
        </div>

        {/* Call button */}
        <div className="mt-6">
          {(callState === "idle" || callState === "ended") && (
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={callState === "ended" ? reset : startCall}
                disabled={!supported}
                className={`flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition active:scale-95 ${
                  callState === "ended"
                    ? "bg-slate-700 hover:bg-slate-600"
                    : "bg-green-500 hover:bg-green-400"
                } disabled:opacity-40`}
              >
                <Phone className="h-7 w-7 text-white" />
              </button>
              {callState === "idle" && (
                <p className="text-xs text-slate-500">
                  {supported ? "Tap to start the demo call" : "Voice not supported in this browser"}
                </p>
              )}
              {callState === "ended" && <p className="text-xs text-slate-500">Tap to call again</p>}
            </div>
          )}
          {(callState === "ringing" || callState === "connected") && (
            <button
              onClick={endCall}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-lg transition hover:bg-red-500 active:scale-95"
            >
              <PhoneOff className="h-7 w-7 text-white" />
            </button>
          )}
        </div>

        {!supported && callState === "idle" && (
          <p className="mt-3 text-center text-[11px] text-slate-600">
            Use Chrome or Edge for voice support
          </p>
        )}
      </div>

      {/* Transcript */}
      {messages.length > 0 && (
        <div
          ref={transcriptRef}
          className="max-h-52 space-y-2 overflow-y-auto border-t border-white/[0.06] px-4 py-4"
        >
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-5 ${
                msg.role === "user"
                  ? "rounded-br-sm bg-brand-blue-600 text-white"
                  : "rounded-bl-sm bg-white/5 text-slate-300"
              }`}>
                {msg.role === "agent" && (
                  <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    {p.role}
                  </span>
                )}
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
