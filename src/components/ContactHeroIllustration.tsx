"use client";

import { motion, useReducedMotion } from "framer-motion";

/* ─── layout ────────────────────────────────────────────────────── */
const CX = 200;
const CY = 200;

/* Contact method nodes */
const METHODS = [
  { id: "email",    angle: -90,  r: 115, label: "EMAIL",    icon: "M-9,-5 L9,-5 L9,5 L-9,5 Z M-9,-5 L0,2 L9,-5", isRed: false },
  { id: "phone",    angle:  30,  r: 115, label: "CALL",     icon: "M6,-8 A8,8 0 0,0 -6,8 M3,-5 A5,5 0 0,0 -3,5 M-8,5 L-5,8 L8,-5 L5,-8", isRed: true  },
  { id: "consult",  angle:  150, r: 115, label: "CONSULT",  icon: "M-8,-5 A8,5 0 0,1 8,-5 L8,2 A8,5 0 0,1 -8,2 Z M-3,2 L-2,6 M3,2 L2,6 M-4,6 L4,6", isRed: false },
] as const;

const NODES = METHODS.map((m) => ({
  ...m,
  x: +(CX + m.r * Math.cos((m.angle * Math.PI) / 180)).toFixed(1),
  y: +(CY + m.r * Math.sin((m.angle * Math.PI) / 180)).toFixed(1),
  stroke: m.isRed ? "rgba(198,40,40,0.75)" : "rgba(21,101,192,0.65)",
  dot:    m.isRed ? "#f87171"              : "#60a5fa",
}));

/* Concentric ring radii */
const RINGS = [46, 66, 86];

/* ─── component ─────────────────────────────────────────────────── */
export function ContactHeroIllustration() {
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
        <radialGradient id="ch-bg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#1565c0" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#1565c0" stopOpacity="0"    />
        </radialGradient>
        <linearGradient id="ch-centre-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#1e88e5" />
          <stop offset="100%" stopColor="#0d47a1" />
        </linearGradient>
        <filter id="ch-glow">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ambient background glow */}
      <circle cx={CX} cy={CY} r="92" fill="url(#ch-bg-glow)" />

      {/* ── expanding signal rings ─────────────────────────────── */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`wave-${i}`}
          cx={CX} cy={CY}
          r="36"
          fill="none"
          stroke="rgba(33,150,243,0.35)"
          strokeWidth="1.2"
          initial={{ scale: 1, opacity: 0.6 }}
          animate={reduced ? {} : { scale: [1, 4.2], opacity: [0.55, 0] }}
          transition={{
            duration: 3.0,
            delay: i * 1.0,
            repeat: Infinity,
            ease: "easeOut",
          }}
          style={{ transformBox: "fill-box", transformOrigin: `${CX}px ${CY}px` }}
        />
      ))}

      {/* static dashed rings */}
      {RINGS.map((r) => (
        <circle
          key={`ring-${r}`}
          cx={CX} cy={CY} r={r}
          stroke="rgba(21,101,192,0.12)"
          strokeWidth="1"
          strokeDasharray="5 7"
        />
      ))}

      {/* spoke lines to nodes */}
      {NODES.map((node, i) => (
        <motion.path
          key={`line-${node.id}`}
          d={`M ${CX} ${CY} L ${node.x} ${node.y}`}
          stroke={node.isRed ? "rgba(198,40,40,0.28)" : "rgba(21,101,192,0.32)"}
          strokeWidth="1"
          strokeDasharray="5 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={reduced ? {} : { duration: 0.65, delay: 0.5 + i * 0.12, ease: "easeOut" }}
        />
      ))}

      {/* ── centre envelope ────────────────────────────────────── */}
      <motion.g
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={reduced ? {} : { duration: 0.55, type: "spring", stiffness: 220, delay: 0.15 }}
        style={{ transformBox: "fill-box", transformOrigin: `${CX}px ${CY}px` }}
      >
        <circle
          cx={CX} cy={CY} r="38"
          fill="url(#ch-centre-grad)"
          stroke="rgba(33,150,243,0.55)"
          strokeWidth="1.5"
        />
        {/* accent dots */}
        <circle cx={CX} cy={CY - 46} r="3" fill="#c62828" filter="url(#ch-glow)" />
        <circle cx={CX} cy={CY + 46} r="3" fill="#c62828" filter="url(#ch-glow)" />
        {/* envelope icon */}
        <rect  x={CX-16} y={CY-11} width="32" height="22" rx="3" fill="none" stroke="white" strokeWidth="1.8" />
        <path  d={`M${CX-16},${CY-11} L${CX},${CY+2} L${CX+16},${CY-11}`} stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
      </motion.g>

      {/* ── contact method nodes ─────────────────────────────────── */}
      {NODES.map((node, i) => (
        <motion.g
          key={`node-${node.id}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={reduced ? {} : { duration: 0.45, delay: 0.65 + i * 0.12, type: "spring", stiffness: 260 }}
          style={{ transformBox: "fill-box", transformOrigin: `${node.x}px ${node.y}px` }}
        >
          {/* circle bg */}
          <circle
            cx={node.x} cy={node.y} r="34"
            fill="rgba(8,16,40,0.82)"
            stroke={node.stroke}
            strokeWidth="1.4"
          />
          {/* icon (small, upper half) */}
          <path
            d={node.icon}
            stroke={node.dot}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform={`translate(${node.x}, ${node.y - 11})`}
          />
          {/* label */}
          <text
            x={node.x} y={node.y + 22}
            textAnchor="middle"
            fontSize="10"
            fontWeight="700"
            fill={node.dot}
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="0.06em"
          >{node.label}</text>
          {/* glow dot at node edge */}
          <circle
            cx={node.x} cy={node.y - 36}
            r="3" fill={node.dot}
            filter="url(#ch-glow)"
          />
        </motion.g>
      ))}

      {/* ── travelling signal dots ─────────────────────────────── */}
      {NODES.map((node, i) => (
        <motion.circle
          key={`signal-${node.id}`}
          r="2.5"
          fill={node.dot}
          opacity="0.9"
          filter="url(#ch-glow)"
          animate={reduced ? {} : {
            x: [node.x, CX],
            y: [node.y, CY],
            opacity: [0, 0.9, 0],
            scale:   [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.6,
            delay: 1.6 + i * 0.35,
            repeat: Infinity,
            repeatDelay: 2.8 + i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
