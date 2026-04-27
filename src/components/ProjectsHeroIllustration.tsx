"use client";

import { motion, useReducedMotion } from "framer-motion";

/* ─── layout constants ─────────────────────────────────────────── */
const CX = 200;
const CY = 200;

/* Three browser-style project "cards" fanning around the centre */
const CARDS = [
  { id: "web",     x:  82, y:  92, w: 96, h: 66, label: "Website",    isRed: false, delay: 0.5  },
  { id: "app",     x: 222, y:  78, w: 96, h: 66, label: "Web App",    isRed: true,  delay: 0.65 },
  { id: "system",  x:  75, y: 228, w: 96, h: 66, label: "Software",   isRed: true,  delay: 0.8  },
  { id: "auto",    x: 230, y: 234, w: 96, h: 66, label: "Automation", isRed: false, delay: 0.95 },
] as const;

/* Checkmark path in card local space (0,0 = card top-left) */
const CHECK = "M4,0 L8,6 L16,-2";

/* ─── component ────────────────────────────────────────────────── */
export function ProjectsHeroIllustration() {
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
        <radialGradient id="ph-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#1565c0" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#1565c0" stopOpacity="0"    />
        </radialGradient>
        <linearGradient id="ph-centre-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#1e88e5" />
          <stop offset="100%" stopColor="#0d47a1" />
        </linearGradient>
        <filter id="ph-blur">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ambient background glow */}
      <circle cx={CX} cy={CY} r="100" fill="url(#ph-glow)" />

      {/* ── project cards ─────────────────────────────────────── */}
      {CARDS.map((card) => {
        const accentStroke = card.isRed ? "rgba(198,40,40,0.7)" : "rgba(21,101,192,0.65)";
        const accentFill   = card.isRed ? "#f87171"              : "#60a5fa";
        const barFill      = card.isRed ? "rgba(198,40,40,0.55)" : "rgba(21,101,192,0.55)";
        const cx = card.x + card.w / 2;
        const cy = card.y + card.h / 2;

        return (
          <motion.g
            key={card.id}
            initial={{ opacity: 0, scale: 0.75, x: CX - cx, y: CY - cy }}
            animate={{ opacity: 1, scale: 1,    x: 0,       y: 0       }}
            transition={
              reduced ? {} : { duration: 0.5, delay: card.delay, type: "spring", stiffness: 230 }
            }
            style={{ transformBox: "fill-box", transformOrigin: `${cx}px ${cy}px` }}
          >
            {/* card shadow/glow */}
            <rect
              x={card.x + 2} y={card.y + 4}
              width={card.w} height={card.h} rx="6"
              fill={card.isRed ? "rgba(198,40,40,0.12)" : "rgba(21,101,192,0.12)"}
            />
            {/* card body */}
            <rect
              x={card.x} y={card.y}
              width={card.w} height={card.h} rx="6"
              fill="rgba(8,16,40,0.80)"
              stroke={accentStroke}
              strokeWidth="1.2"
            />
            {/* title bar */}
            <rect
              x={card.x} y={card.y}
              width={card.w} height="14" rx="6"
              fill={barFill}
            />
            <rect x={card.x} y={card.y + 8} width={card.w} height="6" fill={barFill} />
            {/* traffic-light dots */}
            <circle cx={card.x + 9}  cy={card.y + 7} r="2.2" fill="rgba(255,255,255,0.25)" />
            <circle cx={card.x + 16} cy={card.y + 7} r="2.2" fill="rgba(255,255,255,0.25)" />
            <circle cx={card.x + 23} cy={card.y + 7} r="2.2" fill="rgba(255,255,255,0.25)" />
            {/* content lines */}
            <rect x={card.x + 8}  y={card.y + 22} width={card.w - 40} height="4" rx="2" fill="rgba(255,255,255,0.18)" />
            <rect x={card.x + 8}  y={card.y + 30} width={card.w - 24} height="4" rx="2" fill="rgba(255,255,255,0.10)" />
            <rect x={card.x + 8}  y={card.y + 38} width={card.w - 32} height="4" rx="2" fill="rgba(255,255,255,0.10)" />
            {/* label */}
            <text
              x={cx} y={card.y + card.h - 8}
              textAnchor="middle"
              fontSize="10.5"
              fontWeight="700"
              fill={accentFill}
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="0.06em"
            >{card.label.toUpperCase()}</text>
            {/* animated checkmark */}
            <motion.path
              d={CHECK}
              stroke={accentFill}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform={`translate(${card.x + card.w - 24}, ${card.y + 20})`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={reduced ? {} : { duration: 0.45, delay: card.delay + 0.4, ease: "easeOut" }}
            />
          </motion.g>
        );
      })}

      {/* ── centre "deployed" badge ───────────────────────────── */}
      <motion.g
        initial={{ opacity: 0, scale: 0.55 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={reduced ? {} : { duration: 0.55, delay: 0.2, type: "spring", stiffness: 240 }}
        style={{ transformBox: "fill-box", transformOrigin: `${CX}px ${CY}px` }}
      >
        {/* pulse ring */}
        <motion.circle
          cx={CX} cy={CY} r="44"
          fill="none"
          stroke="rgba(33,150,243,0.22)"
          strokeWidth="1.5"
          animate={reduced ? {} : { scale: [1, 1.2, 1], opacity: [0.5, 0.1, 0.5] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformBox: "fill-box", transformOrigin: `${CX}px ${CY}px` }}
        />
        {/* circle bg */}
        <circle cx={CX} cy={CY} r="36" fill="url(#ph-centre-grad)" stroke="rgba(33,150,243,0.5)" strokeWidth="1.5" />
        {/* accent dots */}
        <circle cx={CX} cy={CY - 44} r="3" fill="#c62828" filter="url(#ph-blur)" />
        <circle cx={CX} cy={CY + 44} r="3" fill="#c62828" filter="url(#ph-blur)" />
        {/* star / portfolio icon */}
        <path
          d={[0,1,2,3,4].map((i) => {
            const ao = (i * 72 - 90) * Math.PI / 180;
            const ai = ((i * 72 + 36) - 90) * Math.PI / 180;
            const ox = (CX + 20 * Math.cos(ao)).toFixed(1);
            const oy = (CY + 20 * Math.sin(ao)).toFixed(1);
            const ix = (CX + 9 * Math.cos(ai)).toFixed(1);
            const iy = (CY + 9 * Math.sin(ai)).toFixed(1);
            return `${i === 0 ? "M" : "L"}${ox},${oy} L${ix},${iy}`;
          }).join(" ") + " Z"}
          fill="white"
          opacity="0.9"
        />
      </motion.g>

      {/* ── connector lines card → centre ─────────────────────── */}
      {CARDS.map((card) => (
        <motion.line
          key={`conn-${card.id}`}
          x1={card.x + card.w / 2} y1={card.y + card.h / 2}
          x2={CX}                  y2={CY}
          stroke="rgba(21,101,192,0.20)"
          strokeWidth="0.8"
          strokeDasharray="4 5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={reduced ? {} : { delay: card.delay + 0.2, duration: 0.4 }}
        />
      ))}
    </svg>
  );
}
