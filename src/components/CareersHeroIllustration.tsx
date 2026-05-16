"use client";

import { motion, useReducedMotion } from "framer-motion";

const CX = 200;
const CY = 200;
const R  = 118;

const NODES = [
  { id: "content",  angle: -90,  label: "CONTENT",    isRed: false },
  { id: "bizdev",   angle: -30,  label: "BIZ DEV",    isRed: true  },
  { id: "growth",   angle:  30,  label: "GROWTH",     isRed: false },
  { id: "strategy", angle:  90,  label: "STRATEGY",   isRed: true  },
  { id: "impact",   angle:  150, label: "IMPACT",     isRed: false },
  { id: "culture",  angle: -150, label: "CULTURE",    isRed: true  },
].map((s) => ({
  ...s,
  x: +(CX + R * Math.cos((s.angle * Math.PI) / 180)).toFixed(1),
  y: +(CY + R * Math.sin((s.angle * Math.PI) / 180)).toFixed(1),
  stroke: s.isRed ? "rgba(198,40,40,0.75)" : "rgba(21,101,192,0.65)",
  dot:    s.isRed ? "#f87171"              : "#60a5fa",
}));

export function CareersHeroIllustration() {
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
          <stop offset="0%"   stopColor="#1565c0" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#1565c0" stopOpacity="0"    />
        </radialGradient>
        <linearGradient id="ch-hex-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#1e88e5" />
          <stop offset="100%" stopColor="#0d47a1" />
        </linearGradient>
        <filter id="ch-glow">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ambient glow */}
      <circle cx={CX} cy={CY} r="88" fill="url(#ch-bg-glow)" />

      {/* orbit ring */}
      <circle
        cx={CX} cy={CY} r={R}
        stroke="rgba(21,101,192,0.16)"
        strokeWidth="1"
        strokeDasharray="6 7"
      />

      {/* cross-lines between alternating nodes */}
      {[0, 2, 4].map((i) => (
        <motion.line
          key={`cross-${i}`}
          x1={NODES[i].x} y1={NODES[i].y}
          x2={NODES[(i + 3) % 6].x} y2={NODES[(i + 3) % 6].y}
          stroke="rgba(21,101,192,0.09)"
          strokeWidth="0.8"
          strokeDasharray="4 6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={reduced ? {} : { delay: 1.2 + i * 0.1, duration: 0.6 }}
        />
      ))}

      {/* spoke lines */}
      {NODES.map((node, i) => (
        <motion.path
          key={`line-${node.id}`}
          d={`M ${CX} ${CY} L ${node.x} ${node.y}`}
          stroke={node.isRed ? "rgba(198,40,40,0.28)" : "rgba(21,101,192,0.32)"}
          strokeWidth="1"
          strokeDasharray="5 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={reduced ? {} : { duration: 0.65, delay: 0.3 + i * 0.07, ease: "easeOut" }}
        />
      ))}

      {/* ── center hexagon ─────────────────────────────────────── */}
      <motion.g
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={reduced ? {} : { duration: 0.55, type: "spring", stiffness: 220, delay: 0.15 }}
        style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
      >
        {/* pulse ring */}
        <motion.circle
          cx={CX} cy={CY} r="52"
          fill="none"
          stroke="rgba(33,150,243,0.22)"
          strokeWidth="1.5"
          animate={reduced ? {} : { scale: [1, 1.18, 1], opacity: [0.5, 0.1, 0.5] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
        />
        {/* hexagon */}
        <polygon
          points={[0,1,2,3,4,5].map((i) => {
            const a = (i * 60 - 30) * Math.PI / 180;
            return `${(CX + 38 * Math.cos(a)).toFixed(1)},${(CY + 38 * Math.sin(a)).toFixed(1)}`;
          }).join(" ")}
          fill="url(#ch-hex-grad)"
          stroke="rgba(33,150,243,0.55)"
          strokeWidth="1.5"
        />
        {/* accent dots */}
        <circle cx={CX} cy={CY - 50} r="3" fill="#c62828" filter="url(#ch-glow)" />
        <circle cx={CX} cy={CY + 50} r="3" fill="#c62828" filter="url(#ch-glow)" />
        {/* person icon — head + shoulders */}
        <circle cx={CX} cy={CY - 8} r="9" fill="white" opacity="0.92" />
        <path
          d={`M ${CX - 14} ${CY + 18} Q ${CX - 14} ${CY + 6} ${CX} ${CY + 6} Q ${CX + 14} ${CY + 6} ${CX + 14} ${CY + 18}`}
          fill="white" opacity="0.92"
        />
      </motion.g>

      {/* ── role nodes ──────────────────────────────────────────── */}
      {NODES.map((node, i) => (
        <motion.g
          key={`node-${node.id}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={reduced ? {} : { duration: 0.45, delay: 0.55 + i * 0.09, type: "spring", stiffness: 260 }}
          style={{ transformBox: "fill-box", transformOrigin: `${node.x}px ${node.y}px` }}
        >
          <rect
            x={node.x - 44} y={node.y - 15}
            width="88" height="30" rx="15"
            fill="rgba(10,20,50,0.82)"
            stroke={node.stroke}
            strokeWidth="1.4"
          />
          <text
            x={node.x} y={node.y + 5}
            textAnchor="middle"
            fontSize="10.5"
            fontWeight="700"
            fill={node.dot}
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="0.06em"
          >{node.label}</text>
          <circle
            cx={node.x - 40} cy={node.y}
            r="3" fill={node.dot}
            filter="url(#ch-glow)"
          />
        </motion.g>
      ))}

      {/* ── animated data-flow dots ──────────────────────────────── */}
      {NODES.map((node, i) => (
        <motion.circle
          key={`pulse-${node.id}`}
          r="2.5"
          fill={node.dot}
          opacity="0.9"
          filter="url(#ch-glow)"
          animate={reduced ? {} : {
            x: [CX, node.x],
            y: [CY, node.y],
            opacity: [0, 0.9, 0],
            scale:   [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.8,
            delay: 1.4 + i * 0.25,
            repeat: Infinity,
            repeatDelay: 2.6 + i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ── floating "We're Hiring" badge ───────────────────────── */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduced ? {} : { delay: 1.8, duration: 0.5 }}
      >
        <motion.g
          animate={reduced ? {} : { y: [0, -5, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="140" y="342" width="120" height="28" rx="14"
            fill="rgba(198,40,40,0.12)"
            stroke="rgba(198,40,40,0.5)"
            strokeWidth="1.2"
          />
          <circle cx="156" cy="356" r="4" fill="#f87171" filter="url(#ch-glow)">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
          </circle>
          <text x="200" y="361" textAnchor="middle" fontSize="10" fontWeight="700"
            fill="#f87171" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.08em"
          >NOW HIRING</text>
        </motion.g>
      </motion.g>
    </svg>
  );
}
