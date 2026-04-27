"use client";

import { motion, useReducedMotion } from "framer-motion";

const CX = 200;
const CY = 200;
const R  = 122;

const NODES = [
  { id: "portal",   angle: -90,  label: "PORTALS",  isRed: false },
  { id: "crm",      angle: -30,  label: "CRM",       isRed: true  },
  { id: "saas",     angle:  30,  label: "SaaS",      isRed: false },
  { id: "mobile",   angle:  90,  label: "MOBILE",    isRed: true  },
  { id: "api",      angle:  150, label: "API",        isRed: false },
  { id: "database", angle: -150, label: "DATABASE",  isRed: true  },
].map((n) => ({
  ...n,
  x: +(CX + R * Math.cos((n.angle * Math.PI) / 180)).toFixed(1),
  y: +(CY + R * Math.sin((n.angle * Math.PI) / 180)).toFixed(1),
  stroke: n.isRed ? "rgba(198,40,40,0.75)" : "rgba(21,101,192,0.65)",
  dot:    n.isRed ? "#f87171"              : "#60a5fa",
}));

export function SoftwareDevHeroIllustration() {
  const reduced = useReducedMotion();
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id="sd-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#1565c0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1565c0" stopOpacity="0"    />
        </radialGradient>
        <linearGradient id="sd-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#1e88e5" />
          <stop offset="100%" stopColor="#0d47a1" />
        </linearGradient>
        <filter id="sd-glow">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <circle cx={CX} cy={CY} r="90" fill="url(#sd-bg)" />
      <circle cx={CX} cy={CY} r={R}   stroke="rgba(21,101,192,0.16)" strokeWidth="1" strokeDasharray="6 7" />
      <circle cx={CX} cy={CY} r="68"  stroke="rgba(21,101,192,0.08)" strokeWidth="0.8" strokeDasharray="3 9" />
      {[0,1,2].map((i) => (
        <motion.line key={i} x1={NODES[i].x} y1={NODES[i].y} x2={NODES[i+3].x} y2={NODES[i+3].y}
          stroke="rgba(21,101,192,0.08)" strokeWidth="0.7" strokeDasharray="4 6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={reduced ? {} : { delay: 1.2 + i * 0.1, duration: 0.6 }} />
      ))}
      {NODES.map((n, i) => (
        <motion.path key={n.id} d={`M ${CX} ${CY} L ${n.x} ${n.y}`}
          stroke={n.isRed ? "rgba(198,40,40,0.28)" : "rgba(21,101,192,0.32)"}
          strokeWidth="1" strokeDasharray="5 5"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
          transition={reduced ? {} : { duration: 0.65, delay: 0.3 + i * 0.07, ease: "easeOut" }} />
      ))}

      {/* centre: terminal/code block */}
      <motion.g initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
        transition={reduced ? {} : { duration: 0.55, type: "spring", stiffness: 220, delay: 0.15 }}
        style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}>
        <motion.circle cx={CX} cy={CY} r="54" fill="none" stroke="rgba(33,150,243,0.22)" strokeWidth="1.5"
          animate={reduced ? {} : { scale: [1, 1.18, 1], opacity: [0.5, 0.08, 0.5] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }} />
        <motion.circle cx={CX} cy={CY} r="44" fill="none" stroke="rgba(198,40,40,0.14)" strokeWidth="1"
          animate={reduced ? {} : { scale: [1, 1.14, 1], opacity: [0.35, 0.05, 0.35] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }} />
        <polygon points={[0,1,2,3,4,5].map((i) => {
          const a = (i * 60 - 30) * Math.PI / 180;
          return `${(CX + 38 * Math.cos(a)).toFixed(1)},${(CY + 38 * Math.sin(a)).toFixed(1)}`;
        }).join(" ")} fill="url(#sd-grad)" stroke="rgba(33,150,243,0.55)" strokeWidth="1.5" />
        <circle cx={CX} cy={CY - 50} r="3" fill="#c62828" filter="url(#sd-glow)" />
        <circle cx={CX} cy={CY + 50} r="3" fill="#c62828" filter="url(#sd-glow)" />
        {/* code brackets */}
        <text x={CX} y={CY - 3} textAnchor="middle" fontSize="15" fontWeight="900"
          fill="white" fontFamily="ui-monospace, 'Cascadia Code', monospace" letterSpacing="-1">&lt;/&gt;</text>
        <text x={CX} y={CY + 13} textAnchor="middle" fontSize="7" fontWeight="700"
          fill="rgba(147,197,253,0.9)" fontFamily="system-ui, sans-serif" letterSpacing="0.14em">BUILD</text>
      </motion.g>

      {NODES.map((n, i) => (
        <motion.g key={n.id}
          initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
          transition={reduced ? {} : { duration: 0.45, delay: 0.55 + i * 0.09, type: "spring", stiffness: 260 }}
          style={{ transformBox: "fill-box", transformOrigin: `${n.x}px ${n.y}px` }}>
          <rect x={n.x - 40} y={n.y - 15} width="80" height="30" rx="15"
            fill="rgba(10,20,50,0.82)" stroke={n.stroke} strokeWidth="1.4" />
          <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize="11" fontWeight="800"
            fill={n.dot} fontFamily="system-ui, sans-serif" letterSpacing="0.08em">{n.label}</text>
          <circle cx={n.x - 36} cy={n.y} r="3" fill={n.dot} filter="url(#sd-glow)" />
        </motion.g>
      ))}
      {NODES.map((n, i) => (
        <motion.circle key={`p-${n.id}`} r="2.8" fill={n.dot} opacity="0.9" filter="url(#sd-glow)"
          animate={reduced ? {} : { x: [CX, n.x], y: [CY, n.y], opacity: [0, 0.9, 0], scale: [0.4, 1.1, 0.4] }}
          transition={{ duration: 1.7, delay: 1.4 + i * 0.28, repeat: Infinity, repeatDelay: 2.3 + i * 0.3, ease: "easeInOut" }} />
      ))}
    </svg>
  );
}
