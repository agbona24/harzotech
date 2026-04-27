"use client";

import { motion, useReducedMotion } from "framer-motion";

/* ─── geometry ─────────────────────────────────────────────────── */
const CX = 200;
const CY = 195;
const R = 130;

const RAW_NODES = [
  { id: "vision",   angle: -90,  label: "VISION",   isRed: true  },
  { id: "innovate", angle: -30,  label: "INNOVATE", isRed: false },
  { id: "growth",   angle:  30,  label: "GROWTH",   isRed: false },
  { id: "founded",  angle:  90,  label: "FOUNDED",  isRed: true  },
  { id: "team",     angle: 150,  label: "OUR TEAM", isRed: false },
  { id: "strategy", angle: -150, label: "STRATEGY", isRed: false },
];

const NODES = RAW_NODES.map((n) => ({
  ...n,
  x: +(CX + R * Math.cos((n.angle * Math.PI) / 180)).toFixed(1),
  y: +(CY + R * Math.sin((n.angle * Math.PI) / 180)).toFixed(1),
  stroke: n.isRed ? "rgba(198,40,40,0.75)" : "rgba(21,101,192,0.65)",
  dot:    n.isRed ? "#f87171"              : "#60a5fa",
}));

/* Simplified icon paths (coordinate space: −10 → +10, origin = node center) */
const ICONS: Record<string, string> = {
  vision:   "M0,-8 L8,0 L0,8 L-8,0 Z",                              // diamond
  innovate: "M3,-8 L-1,-1 L2,-1 L-3,8 L1,1 L-2,1 Z",               // lightning
  growth:   "M0,-8 L5,-2 L2,-2 L2,8 L-2,8 L-2,-2 L-5,-2 Z",        // arrow up
  founded:  "M-6,8 L-6,-1 L0,-8 L6,-1 L6,8",                       // house
  team:     "M-5,2 A5,5 0 1,1 0,-3 M0,-3 A5,5 0 1,1 5,2",           // two arcs
  strategy: "M-8,0 L8,0 M0,-8 L0,8 M0,0 m-5,0 A5,5 0 0,1 5,0 A5,5 0 0,1 -5,0", // crosshair
};

/* ─── component ────────────────────────────────────────────────── */
export function AboutHeroIllustration() {
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
        <radialGradient id="ah-bg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#1565c0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1565c0" stopOpacity="0"    />
        </radialGradient>
        <linearGradient id="ah-diamond-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#2196f3" />
          <stop offset="100%" stopColor="#0d47a1" />
        </linearGradient>
        <filter id="ah-glow-filter">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── ambient center glow ────────────────────────────────── */}
      <circle cx={CX} cy={CY} r="90" fill="url(#ah-bg-glow)" />

      {/* ── orbit ring (static dashed) ─────────────────────────── */}
      <circle
        cx={CX} cy={CY} r={R}
        stroke="rgba(21,101,192,0.18)"
        strokeWidth="1"
        strokeDasharray="6 7"
      />

      {/* ── connection lines (draw-in) ─────────────────────────── */}
      {NODES.map((node, i) => (
        <motion.path
          key={`line-${node.id}`}
          d={`M ${CX} ${CY} L ${node.x} ${node.y}`}
          stroke={node.isRed ? "rgba(198,40,40,0.3)" : "rgba(21,101,192,0.35)"}
          strokeWidth="1"
          strokeDasharray="5 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={reduced ? {} : { duration: 0.7, delay: 0.3 + i * 0.07, ease: "easeOut" }}
        />
      ))}

      {/* ── central diamond ────────────────────────────────────── */}
      <motion.g
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={reduced ? {} : { duration: 0.55, type: "spring", stiffness: 220, delay: 0.15 }}
        style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
      >
        {/* outer pulsing ring */}
        <motion.circle
          cx={CX} cy={CY} r="52"
          fill="none"
          stroke="rgba(33,150,243,0.25)"
          strokeWidth="1.5"
          animate={reduced ? {} : { scale: [1, 1.18, 1], opacity: [0.5, 0.1, 0.5] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
        />
        {/* diamond fill */}
        <rect
          x={CX - 33} y={CY - 33}
          width="66" height="66" rx="7"
          transform={`rotate(45 ${CX} ${CY})`}
          fill="url(#ah-diamond-grad)"
          stroke="rgba(33,150,243,0.6)"
          strokeWidth="1.5"
        />
        {/* logo red dots */}
        <circle cx={CX}      cy={CY - 48} r="3.5" fill="#c62828" filter="url(#ah-glow-filter)" />
        <circle cx={CX}      cy={CY + 48} r="3.5" fill="#c62828" filter="url(#ah-glow-filter)" />
        {/* H letterform */}
        <text
          x={CX} y={CY + 7}
          textAnchor="middle"
          fontSize="24"
          fontWeight="900"
          fill="white"
          fontFamily="system-ui, -apple-system, sans-serif"
        >H</text>
      </motion.g>

      {/* ── satellite nodes ────────────────────────────────────── */}
      {NODES.map((node, i) => (
        <motion.g
          key={`node-${node.id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduced ? {} : { duration: 0.45, delay: 0.55 + i * 0.1 }}
        >
          {/* pulse ring */}
          <motion.circle
            cx={node.x} cy={node.y} r="24"
            fill="none"
            stroke={node.stroke}
            strokeWidth="0.8"
            animate={reduced ? {} : { scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{
              duration: 2.8,
              delay: 1.2 + i * 0.45,
              repeat: Infinity,
              ease: "easeOut",
            }}
            style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
          />
          {/* node circle */}
          <circle
            cx={node.x} cy={node.y} r="22"
            fill="rgba(12,30,60,0.92)"
            stroke={node.stroke}
            strokeWidth="1.5"
          />
          {/* icon path */}
          <path
            d={ICONS[node.id]}
            stroke={node.dot}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform={`translate(${node.x}, ${node.y})`}
            opacity="0.9"
          />
          {/* label */}
          <text
            x={node.x}
            y={node.y + 38}
            textAnchor="middle"
            fontSize="8"
            fill="rgba(148,163,184,0.75)"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            letterSpacing="0.09em"
          >
            {node.label}
          </text>
        </motion.g>
      ))}

      {/* ── corner accent particles ─────────────────────────────── */}
      {[
        { x: 42,  y: 55  },
        { x: 358, y: 72  },
        { x: 370, y: 318 },
        { x: 28,  y: 335 },
        { x: 200, y: 22  },
      ].map((p, i) => (
        <motion.circle
          key={`p-${i}`}
          cx={p.x} cy={p.y} r={i === 4 ? 3 : 2}
          fill={i % 2 === 0 ? "rgba(21,101,192,0.6)" : "rgba(198,40,40,0.5)"}
          animate={reduced ? {} : {
            y:       [0, -10, 0],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: 2.8 + i * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.55,
          }}
        />
      ))}
    </svg>
  );
}
