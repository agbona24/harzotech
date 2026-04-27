"use client";

import { motion, useReducedMotion } from "framer-motion";

/* ─── geometry ─────────────────────────────────────────────────── */
const CX = 200;
const CY = 200;
const R  = 122;

const AI_NODES = [
  { id: "voice",    angle: -90,  label: "VOICE AI",  isRed: false },
  { id: "whatsapp", angle: -30,  label: "WHATSAPP",  isRed: true  },
  { id: "booking",  angle:  30,  label: "BOOKING",   isRed: false },
  { id: "crm",      angle:  90,  label: "CRM / LEADS", isRed: true },
  { id: "payment",  angle:  150, label: "PAYMENTS",  isRed: false },
  { id: "support",  angle: -150, label: "SUPPORT",   isRed: true  },
] as const;

/* mini icon paths (space: −9 → +9, origin = node centre) */
const ICONS: Record<string, string> = {
  voice:    "M-2,-8 L2,-8 L2,2 L-2,2 Z M-5,2 L5,2 M0,2 L0,6 M-4,8 L4,8",        // microphone
  whatsapp: "M-6,-6 A8,8 0 0,1 6,-6 A8,8 0 0,1 6,4 L4,8 L0,5 A8,8 0 0,1 -6,4 Z", // chat bubble
  booking:  "M-6,-8 L6,-8 L6,7 L-6,7 Z M-6,-4 L6,-4 M-3,-8 L-3,-5 M3,-8 L3,-5 M-3,0 L-1,0 M1,0 L3,0 M-3,3 L-1,3", // calendar
  crm:      "M0,-8 A4,4 0 1,1 0,-0.1 M0,0 L6,6 M0,0 L-6,6 M-4,7 L4,7",           // funnel / CRM
  payment:  "M-7,-5 L7,-5 L7,5 L-7,5 Z M-7,-1 L7,-1 M-4,2 L-1,2",                // card
  support:  "M-5,-7 A7,7 0 0,1 5,-2 A4,4 0 0,1 0,3 M0,3 L0,5 M0,7 L0,8",         // question / support
};

const NODES = AI_NODES.map((n) => ({
  ...n,
  x: +(CX + R * Math.cos((n.angle * Math.PI) / 180)).toFixed(1),
  y: +(CY + R * Math.sin((n.angle * Math.PI) / 180)).toFixed(1),
  stroke: n.isRed ? "rgba(198,40,40,0.75)" : "rgba(21,101,192,0.65)",
  dot:    n.isRed ? "#f87171"              : "#60a5fa",
}));

/* ─── component ────────────────────────────────────────────────── */
export function AIAutomationHeroIllustration() {
  const reduced = useReducedMotion();

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="ai-bg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#1565c0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1565c0" stopOpacity="0"    />
        </radialGradient>
        <linearGradient id="ai-center-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#1e88e5" />
          <stop offset="100%" stopColor="#0d47a1" />
        </linearGradient>
        <filter id="ai-glow">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ambient glow */}
      <circle cx={CX} cy={CY} r="90" fill="url(#ai-bg-glow)" />

      {/* outer orbit ring */}
      <circle
        cx={CX} cy={CY} r={R}
        stroke="rgba(21,101,192,0.16)"
        strokeWidth="1"
        strokeDasharray="6 7"
      />

      {/* inner circuit ring */}
      <circle
        cx={CX} cy={CY} r="72"
        stroke="rgba(21,101,192,0.10)"
        strokeWidth="0.8"
        strokeDasharray="3 9"
      />

      {/* cross-connect lines between opposite nodes */}
      {[0, 1, 2].map((i) => (
        <motion.line
          key={`cross-${i}`}
          x1={NODES[i].x} y1={NODES[i].y}
          x2={NODES[i + 3].x} y2={NODES[i + 3].y}
          stroke="rgba(21,101,192,0.09)"
          strokeWidth="0.7"
          strokeDasharray="4 6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={reduced ? {} : { delay: 1.3 + i * 0.12, duration: 0.6 }}
        />
      ))}

      {/* spoke lines from center */}
      {NODES.map((node, i) => (
        <motion.path
          key={`spoke-${node.id}`}
          d={`M ${CX} ${CY} L ${node.x} ${node.y}`}
          stroke={node.isRed ? "rgba(198,40,40,0.28)" : "rgba(21,101,192,0.32)"}
          strokeWidth="1"
          strokeDasharray="5 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={reduced ? {} : { duration: 0.65, delay: 0.3 + i * 0.07, ease: "easeOut" }}
        />
      ))}

      {/* ── center AI brain hexagon ─────────────────────────────── */}
      <motion.g
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={reduced ? {} : { duration: 0.55, type: "spring", stiffness: 220, delay: 0.15 }}
        style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
      >
        {/* outer pulse ring */}
        <motion.circle
          cx={CX} cy={CY} r="54"
          fill="none"
          stroke="rgba(33,150,243,0.22)"
          strokeWidth="1.5"
          animate={reduced ? {} : { scale: [1, 1.20, 1], opacity: [0.5, 0.08, 0.5] }}
          transition={{ duration: 3.0, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
        />
        {/* second slower pulse ring */}
        <motion.circle
          cx={CX} cy={CY} r="44"
          fill="none"
          stroke="rgba(198,40,40,0.16)"
          strokeWidth="1"
          animate={reduced ? {} : { scale: [1, 1.15, 1], opacity: [0.4, 0.05, 0.4] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
          style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
        />
        {/* hexagon */}
        <polygon
          points={[0,1,2,3,4,5].map((i) => {
            const a = (i * 60 - 30) * Math.PI / 180;
            return `${(CX + 38 * Math.cos(a)).toFixed(1)},${(CY + 38 * Math.sin(a)).toFixed(1)}`;
          }).join(" ")}
          fill="url(#ai-center-grad)"
          stroke="rgba(33,150,243,0.55)"
          strokeWidth="1.5"
        />
        {/* accent dots */}
        <circle cx={CX} cy={CY - 50} r="3" fill="#c62828" filter="url(#ai-glow)" />
        <circle cx={CX} cy={CY + 50} r="3" fill="#c62828" filter="url(#ai-glow)" />
        {/* AI label */}
        <text
          x={CX} y={CY - 5}
          textAnchor="middle"
          fontSize="15"
          fontWeight="900"
          fill="white"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.06em"
        >AI</text>
        <text
          x={CX} y={CY + 12}
          textAnchor="middle"
          fontSize="7.5"
          fontWeight="600"
          fill="rgba(147,197,253,0.9)"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.14em"
        >AUTOMATE</text>
      </motion.g>

      {/* ── automation nodes ────────────────────────────────────── */}
      {NODES.map((node, i) => (
        <motion.g
          key={`node-${node.id}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={reduced ? {} : { duration: 0.45, delay: 0.55 + i * 0.09, type: "spring", stiffness: 260 }}
          style={{ transformBox: "fill-box", transformOrigin: `${node.x}px ${node.y}px` }}
        >
          {/* pill bg */}
          <rect
            x={node.x - 48} y={node.y - 15}
            width="96" height="30" rx="15"
            fill="rgba(10,20,50,0.82)"
            stroke={node.stroke}
            strokeWidth="1.4"
          />
          {/* label */}
          <text
            x={node.x} y={node.y + 5}
            textAnchor="middle"
            fontSize="10.5"
            fontWeight="700"
            fill={node.dot}
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="0.06em"
          >{node.label}</text>
          {/* glow dot */}
          <circle
            cx={node.x - 44} cy={node.y}
            r="3" fill={node.dot}
            filter="url(#ai-glow)"
          />
        </motion.g>
      ))}

      {/* ── animated data-flow pulses along spokes ──────────────── */}
      {NODES.map((node, i) => (
        <motion.circle
          key={`pulse-${node.id}`}
          r="2.8"
          fill={node.dot}
          opacity="0.9"
          filter="url(#ai-glow)"
          animate={reduced ? {} : {
            x: [CX, node.x],
            y: [CY, node.y],
            opacity: [0, 0.9, 0],
            scale:   [0.4, 1.1, 0.4],
          }}
          transition={{
            duration: 1.6,
            delay: 1.5 + i * 0.28,
            repeat: Infinity,
            repeatDelay: 2.2 + i * 0.35,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
