"use client";

import { motion, useReducedMotion } from "framer-motion";

const CX = 200;
const CY = 200;
const R  = 118;

const PRODUCTS = [
  { id: "restovax",   angle: -90,  label: "RESTOVAX",    isRed: false },
  { id: "cliqpos",    angle:  0,   label: "CLIQPOS",     isRed: true  },
  { id: "stayquora",  angle:  90,  label: "STAYQUORA",   isRed: false },
  { id: "factory",    angle:  180, label: "FACTORY PULSE", isRed: true },
].map((s) => ({
  ...s,
  x: +(CX + R * Math.cos((s.angle * Math.PI) / 180)).toFixed(1),
  y: +(CY + R * Math.sin((s.angle * Math.PI) / 180)).toFixed(1),
  stroke: s.isRed ? "rgba(198,40,40,0.75)" : "rgba(21,101,192,0.65)",
  dot:    s.isRed ? "#f87171"              : "#60a5fa",
}));

/* extra orbiting status dots between the four main nodes */
const STATUS_DOTS = [
  { angle: -45,  color: "#34d399", label: "LIVE" },
  { angle:  45,  color: "#34d399", label: "LIVE" },
  { angle:  135, color: "#34d399", label: "LIVE" },
  { angle: -135, color: "#34d399", label: "LIVE" },
].map((s) => ({
  ...s,
  x: +(CX + R * 0.62 * Math.cos((s.angle * Math.PI) / 180)).toFixed(1),
  y: +(CY + R * 0.62 * Math.sin((s.angle * Math.PI) / 180)).toFixed(1),
}));

export function ProductsHeroIllustration() {
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
        <radialGradient id="ph-bg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#1565c0" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#1565c0" stopOpacity="0"    />
        </radialGradient>
        <linearGradient id="ph-hex-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#1e88e5" />
          <stop offset="100%" stopColor="#0d47a1" />
        </linearGradient>
        <filter id="ph-glow">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="ph-green-glow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ambient glow */}
      <circle cx={CX} cy={CY} r="88" fill="url(#ph-bg-glow)" />

      {/* outer orbit ring */}
      <circle
        cx={CX} cy={CY} r={R}
        stroke="rgba(21,101,192,0.16)"
        strokeWidth="1"
        strokeDasharray="6 7"
      />

      {/* inner orbit ring */}
      <circle
        cx={CX} cy={CY} r={R * 0.62}
        stroke="rgba(21,101,192,0.09)"
        strokeWidth="0.8"
        strokeDasharray="3 8"
      />

      {/* spoke lines to product nodes */}
      {PRODUCTS.map((node, i) => (
        <motion.path
          key={`line-${node.id}`}
          d={`M ${CX} ${CY} L ${node.x} ${node.y}`}
          stroke={node.isRed ? "rgba(198,40,40,0.28)" : "rgba(21,101,192,0.32)"}
          strokeWidth="1"
          strokeDasharray="5 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={reduced ? {} : { duration: 0.65, delay: 0.3 + i * 0.1, ease: "easeOut" }}
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
          fill="url(#ph-hex-grad)"
          stroke="rgba(33,150,243,0.55)"
          strokeWidth="1.5"
        />
        {/* accent dots */}
        <circle cx={CX} cy={CY - 50} r="3" fill="#c62828" filter="url(#ph-glow)" />
        <circle cx={CX} cy={CY + 50} r="3" fill="#c62828" filter="url(#ph-glow)" />
        {/* SaaS label */}
        <text
          x={CX} y={CY - 4}
          textAnchor="middle"
          fontSize="11"
          fontWeight="900"
          fill="white"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.1em"
          opacity="0.9"
        >SAAS</text>
        <text
          x={CX} y={CY + 11}
          textAnchor="middle"
          fontSize="8.5"
          fontWeight="700"
          fill="rgba(147,197,253,0.85)"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.04em"
        >PRODUCTS</text>
      </motion.g>

      {/* ── live status dots (inner orbit) ──────────────────────── */}
      {STATUS_DOTS.map((dot, i) => (
        <motion.g
          key={`status-${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={reduced ? {} : { delay: 1.0 + i * 0.12, duration: 0.4 }}
        >
          <circle cx={dot.x} cy={dot.y} r="10"
            fill="rgba(10,20,50,0.7)"
            stroke="rgba(52,211,153,0.4)"
            strokeWidth="1"
          />
          <circle cx={dot.x} cy={dot.y} r="3.5" fill={dot.color} filter="url(#ph-green-glow)">
            <animate attributeName="opacity" values="1;0.35;1" dur={`${1.6 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        </motion.g>
      ))}

      {/* ── product nodes ───────────────────────────────────────── */}
      {PRODUCTS.map((node, i) => (
        <motion.g
          key={`node-${node.id}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={reduced ? {} : { duration: 0.45, delay: 0.55 + i * 0.1, type: "spring", stiffness: 260 }}
          style={{ transformBox: "fill-box", transformOrigin: `${node.x}px ${node.y}px` }}
        >
          <rect
            x={node.x - 52} y={node.y - 16}
            width="104" height="32" rx="16"
            fill="rgba(10,20,50,0.85)"
            stroke={node.stroke}
            strokeWidth="1.4"
          />
          <text
            x={node.x} y={node.y + 5}
            textAnchor="middle"
            fontSize="9.5"
            fontWeight="700"
            fill={node.dot}
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="0.07em"
          >{node.label}</text>
          <circle
            cx={node.x - 47} cy={node.y}
            r="3" fill={node.dot}
            filter="url(#ph-glow)"
          />
        </motion.g>
      ))}

      {/* ── animated data-flow dots ──────────────────────────────── */}
      {PRODUCTS.map((node, i) => (
        <motion.circle
          key={`pulse-${node.id}`}
          r="2.5"
          fill={node.dot}
          opacity="0.9"
          filter="url(#ph-glow)"
          animate={reduced ? {} : {
            x: [CX, node.x],
            y: [CY, node.y],
            opacity: [0, 0.9, 0],
            scale:   [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.8,
            delay: 1.4 + i * 0.3,
            repeat: Infinity,
            repeatDelay: 2.8 + i * 0.35,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ── floating "500+ Businesses" badge ────────────────────── */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduced ? {} : { delay: 1.8, duration: 0.5 }}
      >
        <motion.g
          animate={reduced ? {} : { y: [0, -5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="128" y="342" width="144" height="28" rx="14"
            fill="rgba(21,101,192,0.12)"
            stroke="rgba(21,101,192,0.45)"
            strokeWidth="1.2"
          />
          <circle cx="146" cy="356" r="4" fill="#60a5fa" filter="url(#ph-glow)" />
          <text x="200" y="361" textAnchor="middle" fontSize="10" fontWeight="700"
            fill="#93c5fd" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.07em"
          >500+ BUSINESSES</text>
        </motion.g>
      </motion.g>
    </svg>
  );
}
