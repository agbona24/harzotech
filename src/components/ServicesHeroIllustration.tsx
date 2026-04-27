"use client";

import { motion, useReducedMotion } from "framer-motion";

/* ─── geometry ─────────────────────────────────────────────────── */
const CX = 200;
const CY = 200;
const R  = 122;

const SERVICES = [
  { id: "web",      angle: -90,  label: "WEB DEV",    isRed: false },
  { id: "software", angle: -30,  label: "SOFTWARE",   isRed: true  },
  { id: "ai",       angle:  30,  label: "AI AUTO",    isRed: false },
  { id: "it",       angle:  90,  label: "IT SUPPORT", isRed: true  },
  { id: "seo",      angle:  150, label: "SEO / MKTG", isRed: false },
  { id: "brand",    angle: -150, label: "BRANDING",   isRed: true  },
] as const;

/* mini icon paths (−8 → +8 space, origin = node centre) */
const ICONS: Record<string, string> = {
  web:      "M-7,-5 L7,-5 L7,5 L-7,5 Z M-7,-1 L7,-1 M-4,3 L-2,3",           // browser
  software: "M-5,4 L-1,-4 M1,-4 L5,4 M-3,1 L3,1",                           // code <>
  ai:       "M0,-7 L7,0 L0,7 L-7,0 Z M0,-3 L3,0 L0,3 L-3,0 Z",             // nested diamond
  it:       "M-7,-5 L7,-5 L7,4 L-7,4 Z M-2,4 L-2,7 M2,4 L2,7 M-4,7 L4,7", // monitor
  seo:      "M-7,7 L-1,1 M-4,-2 A5,5 0 1,1 2,4",                            // search
  brand:    "M0,-8 L7,5 L-7,5 Z M0,-3 L0,1 M0,4 L0,5",                      // A/brand
};

const NODES = SERVICES.map((s) => ({
  ...s,
  x: +(CX + R * Math.cos((s.angle * Math.PI) / 180)).toFixed(1),
  y: +(CY + R * Math.sin((s.angle * Math.PI) / 180)).toFixed(1),
  stroke: s.isRed ? "rgba(198,40,40,0.75)" : "rgba(21,101,192,0.65)",
  dot:    s.isRed ? "#f87171"              : "#60a5fa",
}));

/* ─── component ────────────────────────────────────────────────── */
export function ServicesHeroIllustration() {
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
        <radialGradient id="sh-bg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#1565c0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1565c0" stopOpacity="0"   />
        </radialGradient>
        <linearGradient id="sh-hex-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#1e88e5" />
          <stop offset="100%" stopColor="#0d47a1" />
        </linearGradient>
        <filter id="sh-glow">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ambient glow */}
      <circle cx={CX} cy={CY} r="88" fill="url(#sh-bg-glow)" />

      {/* orbit dashes */}
      <circle
        cx={CX} cy={CY} r={R}
        stroke="rgba(21,101,192,0.16)"
        strokeWidth="1"
        strokeDasharray="6 7"
      />

      {/* circuit trace cross-lines between alternate nodes */}
      {[0, 2, 4].map((i) => (
        <motion.line
          key={`cross-${i}`}
          x1={NODES[i].x} y1={NODES[i].y}
          x2={NODES[(i + 3) % 6].x} y2={NODES[(i + 3) % 6].y}
          stroke="rgba(21,101,192,0.10)"
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

      {/* ── center hexagon + </> ────────────────────────────────── */}
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
          fill="url(#sh-hex-grad)"
          stroke="rgba(33,150,243,0.55)"
          strokeWidth="1.5"
        />
        {/* accent dots */}
        <circle cx={CX}      cy={CY - 50} r="3" fill="#c62828" filter="url(#sh-glow)" />
        <circle cx={CX}      cy={CY + 50} r="3" fill="#c62828" filter="url(#sh-glow)" />
        {/* </> text */}
        <text
          x={CX} y={CY + 8}
          textAnchor="middle"
          fontSize="20"
          fontWeight="900"
          fill="white"
          fontFamily="ui-monospace, 'Cascadia Code', monospace"
          letterSpacing="-1"
        >&lt;/&gt;</text>
      </motion.g>

      {/* ── service nodes ──────────────────────────────────────── */}
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
            x={node.x - 44} y={node.y - 15}
            width="88" height="30" rx="15"
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
            cx={node.x - 40} cy={node.y}
            r="3" fill={node.dot}
            filter="url(#sh-glow)"
          />
        </motion.g>
      ))}

      {/* ── animated data-flow dots along spokes ───────────────── */}
      {NODES.map((node, i) => (
        <motion.circle
          key={`pulse-${node.id}`}
          r="2.5"
          fill={node.dot}
          opacity="0.9"
          filter="url(#sh-glow)"
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
            repeatDelay: 2.4 + i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
