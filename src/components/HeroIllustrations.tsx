"use client";

import { motion, useReducedMotion } from "framer-motion";

/* ─── shared helpers ────────────────────────────────────────────── */
const CX = 200;
const CY = 200;
const R  = 128;

function polar(angle: number, r = R) {
  return {
    x: +(CX + r * Math.cos((angle * Math.PI) / 180)).toFixed(1),
    y: +(CY + r * Math.sin((angle * Math.PI) / 180)).toFixed(1),
  };
}

type Node = { label: string; angle: number; blue?: boolean };

interface IllustrationConfig {
  nodes: Node[];
  center: React.ReactNode;
  glowColor?: string;
  accentColor?: string;
  id: string;
}

function OrbitalBase({ nodes, center, glowColor = "rgba(21,101,192,0.35)", accentColor = "#60a5fa", id }: IllustrationConfig) {
  const reduced = useReducedMotion();
  const pts = nodes.map((n) => ({ ...n, ...polar(n.angle) }));

  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={glowColor.split(",").slice(0, 3).join(",") + ",0.4)"} />
          <stop offset="100%" stopColor={glowColor.split(",").slice(0, 3).join(",") + ",0)"} />
        </radialGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1565c0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1565c0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-ctr`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2196f3" />
          <stop offset="100%" stopColor="#0d47a1" />
        </linearGradient>
        <filter id={`${id}-gf`}>
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ambient glow */}
      <circle cx={CX} cy={CY} r="95" fill={`url(#${id}-glow)`} />

      {/* orbit ring */}
      <circle cx={CX} cy={CY} r={R} stroke="rgba(21,101,192,0.18)" strokeWidth="1" strokeDasharray="6 7" />

      {/* connection lines */}
      {pts.map((p, i) => (
        <motion.line
          key={`l-${i}`}
          x1={CX} y1={CY} x2={p.x} y2={p.y}
          stroke={p.blue === false ? "rgba(198,40,40,0.3)" : "rgba(21,101,192,0.35)"}
          strokeWidth="1"
          strokeDasharray="5 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={reduced ? {} : { duration: 0.7, delay: 0.3 + i * 0.07, ease: "easeOut" }}
        />
      ))}

      {/* center */}
      <motion.g
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={reduced ? {} : { duration: 0.55, type: "spring", stiffness: 220, delay: 0.15 }}
        style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
      >
        <motion.circle
          cx={CX} cy={CY} r="54"
          fill="none" stroke="rgba(33,150,243,0.22)" strokeWidth="1.5"
          animate={reduced ? {} : { scale: [1, 1.2, 1], opacity: [0.5, 0.1, 0.5] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
        />
        <rect
          x={CX - 33} y={CY - 33} width="66" height="66" rx="7"
          transform={`rotate(45 ${CX} ${CY})`}
          fill={`url(#${id}-ctr)`}
          stroke="rgba(33,150,243,0.6)" strokeWidth="1.5"
        />
        {center}
      </motion.g>

      {/* satellite nodes */}
      {pts.map((p, i) => (
        <motion.g
          key={`n-${i}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduced ? {} : { duration: 0.45, delay: 0.55 + i * 0.1 }}
        >
          <motion.circle
            cx={p.x} cy={p.y} r="24"
            fill="none"
            stroke={p.blue === false ? "rgba(198,40,40,0.6)" : "rgba(21,101,192,0.6)"}
            strokeWidth="0.8"
            animate={reduced ? {} : { scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2.8, delay: 1.2 + i * 0.45, repeat: Infinity, ease: "easeOut" }}
            style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
          />
          <circle
            cx={p.x} cy={p.y} r="22"
            fill="rgba(12,30,60,0.92)"
            stroke={p.blue === false ? "rgba(198,40,40,0.7)" : "rgba(21,101,192,0.6)"}
            strokeWidth="1.5"
          />
          <text
            x={p.x} y={p.y + 4}
            textAnchor="middle" fontSize="7"
            fill={p.blue === false ? "#f87171" : accentColor}
            fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" letterSpacing="0.06em"
          >{p.label}</text>
          <text
            x={p.x} y={p.y + 38}
            textAnchor="middle" fontSize="7.5"
            fill="rgba(148,163,184,0.7)"
            fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" letterSpacing="0.08em"
          >{p.label.length > 5 ? "" : p.label}</text>
        </motion.g>
      ))}

      {/* accent particles */}
      {[{ x: 42, y: 55 }, { x: 358, y: 72 }, { x: 370, y: 318 }, { x: 28, y: 335 }, { x: 200, y: 22 }].map((p, i) => (
        <motion.circle
          key={`p-${i}`} cx={p.x} cy={p.y} r={i === 4 ? 3 : 2}
          fill={i % 2 === 0 ? "rgba(21,101,192,0.6)" : "rgba(198,40,40,0.5)"}
          animate={reduced ? {} : { y: [0, -10, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 2.8 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.55 }}
        />
      ))}
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   1. WEBSITE DEVELOPMENT
   Center: browser window mockup
══════════════════════════════════════════════════════════════════════ */
export function WebsiteIllustration() {
  const reduced = useReducedMotion();
  const nodes: Node[] = [
    { label: "DESIGN",  angle: -90  },
    { label: "SEO",     angle: -30, blue: false },
    { label: "MOBILE",  angle:  30  },
    { label: "SPEED",   angle:  90  },
    { label: "CRO",     angle: 150, blue: false },
    { label: "UX",      angle: -150 },
  ];
  const center = (
    <g>
      {/* browser frame */}
      <rect x={CX - 22} y={CY - 18} width="44" height="33" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
      {/* title bar */}
      <rect x={CX - 22} y={CY - 18} width="44" height="8" rx="3" fill="rgba(255,255,255,0.12)" />
      {/* dots */}
      <circle cx={CX - 16} cy={CY - 14} r="1.5" fill="#f87171" />
      <circle cx={CX - 11} cy={CY - 14} r="1.5" fill="#fbbf24" />
      <circle cx={CX -  6} cy={CY - 14} r="1.5" fill="#4ade80" />
      {/* content lines */}
      <motion.rect x={CX - 17} y={CY - 5} width="24" height="3" rx="1.5" fill="#60a5fa"
        animate={reduced ? {} : { scaleX: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
        style={{ transformBox: "fill-box", transformOrigin: "0% 50%" }}
      />
      <motion.rect x={CX - 17} y={CY + 1} width="18" height="2" rx="1" fill="rgba(255,255,255,0.3)"
        animate={reduced ? {} : { scaleX: [0, 1] }}
        transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
        style={{ transformBox: "fill-box", transformOrigin: "0% 50%" }}
      />
      <motion.rect x={CX - 17} y={CY + 6} width="20" height="2" rx="1" fill="rgba(255,255,255,0.2)"
        animate={reduced ? {} : { scaleX: [0, 1] }}
        transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
        style={{ transformBox: "fill-box", transformOrigin: "0% 50%" }}
      />
    </g>
  );
  return <OrbitalBase id="web" nodes={nodes} center={center} />;
}

/* ═══════════════════════════════════════════════════════════════════
   2. SOFTWARE DEVELOPMENT
   Center: code brackets </>
══════════════════════════════════════════════════════════════════════ */
export function SoftwareIllustration() {
  const reduced = useReducedMotion();
  const nodes: Node[] = [
    { label: "API",      angle: -90  },
    { label: "DATABASE", angle: -30, blue: false },
    { label: "CLOUD",    angle:  30  },
    { label: "PORTAL",   angle:  90  },
    { label: "CRM",      angle: 150, blue: false },
    { label: "POS",      angle: -150 },
  ];
  const center = (
    <g fontFamily="system-ui,-apple-system,monospace" fontWeight="900">
      <text x={CX - 10} y={CY - 3} textAnchor="middle" fontSize="14" fill="rgba(255,255,255,0.9)">&lt;/</text>
      <text x={CX + 10} y={CY - 3} textAnchor="middle" fontSize="14" fill="#60a5fa">&gt;</text>
      <motion.rect
        x={CX - 4} y={CY + 4} width="2" height="10" rx="1" fill="#f87171"
        animate={reduced ? {} : { opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
      />
    </g>
  );
  return <OrbitalBase id="sw" nodes={nodes} center={center} accentColor="#93c5fd" />;
}

/* ═══════════════════════════════════════════════════════════════════
   3. AI AUTOMATION
   Center: neural brain dots
══════════════════════════════════════════════════════════════════════ */
export function AIIllustration() {
  const reduced = useReducedMotion();
  const nodes: Node[] = [
    { label: "VOICE",  angle: -90  },
    { label: "CHAT",   angle: -30, blue: false },
    { label: "LEADS",  angle:  30  },
    { label: "CRM",    angle:  90  },
    { label: "BOOK",   angle: 150, blue: false },
    { label: "FLOW",   angle: -150 },
  ];

  const brainDots = [
    { cx: -12, cy: -6 }, { cx: -5, cy: -12 }, { cx: 4, cy: -10 },
    { cx: 12, cy: -4 },  { cx: 10, cy:  5 },  { cx: 2, cy: 10 },
    { cx: -8, cy:  8 },  { cx: -14, cy: 2 },  { cx: 0, cy: 0 },
  ];
  const brainLinks = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
    [0, 8], [2, 8], [4, 8], [6, 8],
  ];

  const center = (
    <g>
      {brainLinks.map(([a, b], i) => (
        <motion.line
          key={`bl-${i}`}
          x1={CX + brainDots[a].cx} y1={CY + brainDots[a].cy}
          x2={CX + brainDots[b].cx} y2={CY + brainDots[b].cy}
          stroke="rgba(96,165,250,0.45)" strokeWidth="0.8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={reduced ? {} : { delay: 1.0 + i * 0.05 }}
        />
      ))}
      {brainDots.map((d, i) => (
        <motion.circle
          key={`bd-${i}`}
          cx={CX + d.cx} cy={CY + d.cy} r={i === 8 ? 3.5 : 2}
          fill={i === 8 ? "#60a5fa" : "rgba(96,165,250,0.85)"}
          animate={reduced ? {} : { r: [i === 8 ? 3.5 : 2, i === 8 ? 4.5 : 2.8, i === 8 ? 3.5 : 2] }}
          transition={{ duration: 1.8 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
        />
      ))}
    </g>
  );
  return <OrbitalBase id="ai" nodes={nodes} center={center} accentColor="#67e8f9" />;
}

/* ═══════════════════════════════════════════════════════════════════
   4. IT SUPPORT & MAINTENANCE
   Center: shield with checkmark
══════════════════════════════════════════════════════════════════════ */
export function ITSupportIllustration() {
  const reduced = useReducedMotion();
  const nodes: Node[] = [
    { label: "BACKUP",   angle: -90  },
    { label: "MONITOR",  angle: -30, blue: false },
    { label: "EMAIL",    angle:  30  },
    { label: "CLOUD",    angle:  90  },
    { label: "SECURITY", angle: 150, blue: false },
    { label: "SUPPORT",  angle: -150 },
  ];
  const center = (
    <g>
      {/* shield shape */}
      <path
        d={`M ${CX} ${CY - 18} L ${CX + 14} ${CY - 10} L ${CX + 14} ${CY + 4} Q ${CX + 14} ${CY + 16} ${CX} ${CY + 20} Q ${CX - 14} ${CY + 16} ${CX - 14} ${CY + 4} L ${CX - 14} ${CY - 10} Z`}
        fill="rgba(21,101,192,0.2)" stroke="rgba(96,165,250,0.7)" strokeWidth="1.5"
      />
      {/* checkmark */}
      <path
        d={`M ${CX - 6} ${CY + 2} L ${CX - 1} ${CY + 8} L ${CX + 8} ${CY - 4}`}
        stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* pulse ring on shield */}
      <motion.path
        d={`M ${CX} ${CY - 18} L ${CX + 14} ${CY - 10} L ${CX + 14} ${CY + 4} Q ${CX + 14} ${CY + 16} ${CX} ${CY + 20} Q ${CX - 14} ${CY + 16} ${CX - 14} ${CY + 4} L ${CX - 14} ${CY - 10} Z`}
        fill="none" stroke="rgba(74,222,128,0.4)" strokeWidth="1"
        animate={reduced ? {} : { scale: [1, 1.3], opacity: [0.6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
        style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
      />
    </g>
  );
  return <OrbitalBase id="it" nodes={nodes} center={center} accentColor="#86efac" />;
}

/* ═══════════════════════════════════════════════════════════════════
   5. SEO & DIGITAL MARKETING
   Center: magnifier with upward trend
══════════════════════════════════════════════════════════════════════ */
export function SEOIllustration() {
  const reduced = useReducedMotion();
  const nodes: Node[] = [
    { label: "SEO",     angle: -90  },
    { label: "LOCAL",   angle: -30, blue: false },
    { label: "RANK #1", angle:  30  },
    { label: "CONTENT", angle:  90  },
    { label: "LEADS",   angle: 150, blue: false },
    { label: "TRAFFIC", angle: -150 },
  ];
  const center = (
    <g>
      {/* magnifier circle */}
      <circle cx={CX - 3} cy={CY - 3} r="11" stroke="#60a5fa" strokeWidth="2" fill="rgba(33,150,243,0.1)" />
      {/* handle */}
      <line x1={CX + 5} y1={CY + 5} x2={CX + 12} y2={CY + 13} stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" />
      {/* trend arrow inside */}
      <motion.path
        d={`M ${CX - 10} ${CY + 2} L ${CX - 5} ${CY - 2} L ${CX} ${CY - 6} L ${CX + 2} ${CY - 8}`}
        stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={reduced ? {} : { duration: 1, delay: 0.8, ease: "easeOut" }}
      />
      <motion.polygon
        points={`${CX + 2},${CY - 13} ${CX + 6},${CY - 7} ${CX - 2},${CY - 7}`}
        fill="#4ade80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={reduced ? {} : { delay: 1.7 }}
      />
    </g>
  );
  return <OrbitalBase id="seo" nodes={nodes} center={center} accentColor="#86efac" />;
}

/* ═══════════════════════════════════════════════════════════════════
   6. SERVICES OVERVIEW
   Center: H logo + all service dots
══════════════════════════════════════════════════════════════════════ */
export function ServicesIllustration() {
  const reduced = useReducedMotion();
  const nodes: Node[] = [
    { label: "WEB",      angle: -90  },
    { label: "SOFTWARE", angle: -38, blue: false },
    { label: "AI",       angle:  14  },
    { label: "IT",       angle:  66  },
    { label: "SEO",      angle: 118, blue: false },
    { label: "BRAND",    angle: 170  },
    { label: "APPS",     angle: -154, blue: false },
  ];
  // Custom 7-node orbit (slightly larger radius)
  const reduced2 = useReducedMotion();
  const pts = nodes.map((n) => ({ ...n, ...polar(n.angle, 136) }));

  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id="svc-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1565c0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1565c0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="svc-ctr" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2196f3" />
          <stop offset="100%" stopColor="#0d47a1" />
        </linearGradient>
      </defs>

      <circle cx={CX} cy={CY} r="95" fill="url(#svc-glow)" />
      <circle cx={CX} cy={CY} r={136} stroke="rgba(21,101,192,0.18)" strokeWidth="1" strokeDasharray="6 7" />

      {pts.map((p, i) => (
        <motion.line key={`l-${i}`} x1={CX} y1={CY} x2={p.x} y2={p.y}
          stroke={p.blue === false ? "rgba(198,40,40,0.3)" : "rgba(21,101,192,0.35)"}
          strokeWidth="1" strokeDasharray="5 5"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={reduced ? {} : { duration: 0.7, delay: 0.3 + i * 0.07 }}
        />
      ))}

      {/* center */}
      <motion.g initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
        transition={reduced ? {} : { duration: 0.55, type: "spring", stiffness: 220, delay: 0.15 }}
        style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
      >
        <motion.circle cx={CX} cy={CY} r="54" fill="none" stroke="rgba(33,150,243,0.22)" strokeWidth="1.5"
          animate={reduced ? {} : { scale: [1, 1.2, 1], opacity: [0.5, 0.1, 0.5] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
        />
        <rect x={CX - 33} y={CY - 33} width="66" height="66" rx="7"
          transform={`rotate(45 ${CX} ${CY})`}
          fill="url(#svc-ctr)" stroke="rgba(33,150,243,0.6)" strokeWidth="1.5"
        />
        <circle cx={CX} cy={CY - 48} r="3.5" fill="#c62828" />
        <circle cx={CX} cy={CY + 48} r="3.5" fill="#c62828" />
        <text x={CX} y={CY + 7} textAnchor="middle" fontSize="24" fontWeight="900" fill="white"
          fontFamily="system-ui,-apple-system,sans-serif">H</text>
      </motion.g>

      {pts.map((p, i) => (
        <motion.g key={`n-${i}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={reduced2 ? {} : { duration: 0.45, delay: 0.55 + i * 0.1 }}
        >
          <motion.circle cx={p.x} cy={p.y} r="24" fill="none"
            stroke={p.blue === false ? "rgba(198,40,40,0.6)" : "rgba(21,101,192,0.6)"}
            strokeWidth="0.8"
            animate={reduced2 ? {} : { scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2.8, delay: 1.2 + i * 0.45, repeat: Infinity, ease: "easeOut" }}
            style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
          />
          <circle cx={p.x} cy={p.y} r="22"
            fill="rgba(12,30,60,0.92)"
            stroke={p.blue === false ? "rgba(198,40,40,0.7)" : "rgba(21,101,192,0.6)"}
            strokeWidth="1.5"
          />
          <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize="7"
            fill={p.blue === false ? "#f87171" : "#60a5fa"}
            fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" letterSpacing="0.06em"
          >{p.label}</text>
        </motion.g>
      ))}

      {[{ x: 42, y: 55 }, { x: 358, y: 72 }, { x: 370, y: 318 }, { x: 28, y: 335 }, { x: 200, y: 22 }].map((p, i) => (
        <motion.circle key={`p-${i}`} cx={p.x} cy={p.y} r={i === 4 ? 3 : 2}
          fill={i % 2 === 0 ? "rgba(21,101,192,0.6)" : "rgba(198,40,40,0.5)"}
          animate={reduced ? {} : { y: [0, -10, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 2.8 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.55 }}
        />
      ))}
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   7. CONTACT
   Center: chat bubble
══════════════════════════════════════════════════════════════════════ */
export function ContactIllustration() {
  const reduced = useReducedMotion();
  const nodes: Node[] = [
    { label: "EMAIL",   angle: -90  },
    { label: "PHONE",   angle: -30, blue: false },
    { label: "WHATSAPP",angle:  30  },
    { label: "CONSULT", angle:  90  },
    { label: "QUOTE",   angle: 150, blue: false },
    { label: "START",   angle: -150 },
  ];
  const center = (
    <g>
      {/* chat bubble */}
      <rect x={CX - 16} y={CY - 14} width="32" height="22" rx="6" fill="rgba(255,255,255,0.1)" stroke="rgba(96,165,250,0.7)" strokeWidth="1.5" />
      <polygon points={`${CX - 6},${CY + 8} ${CX - 12},${CY + 16} ${CX + 2},${CY + 8}`} fill="rgba(12,30,60,0.92)" stroke="rgba(96,165,250,0.7)" strokeWidth="1.5" strokeLinejoin="round" />
      {/* dots in bubble */}
      {[-6, 0, 6].map((dx, i) => (
        <motion.circle key={dx} cx={CX + dx} cy={CY - 3} r="2.5" fill="#60a5fa"
          animate={reduced ? {} : { y: [0, -3, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
        />
      ))}
    </g>
  );
  return <OrbitalBase id="contact" nodes={nodes} center={center} accentColor="#93c5fd" />;
}

/* ═══════════════════════════════════════════════════════════════════
   8. PROJECTS
   Center: trophy / checkmark in diamond
══════════════════════════════════════════════════════════════════════ */
export function ProjectsIllustration() {
  const reduced = useReducedMotion();
  const nodes: Node[] = [
    { label: "50+",      angle: -90  },
    { label: "DESIGN",   angle: -30, blue: false },
    { label: "SOFTWARE", angle:  30  },
    { label: "AI",       angle:  90  },
    { label: "SEO",      angle: 150, blue: false },
    { label: "IT",       angle: -150 },
  ];
  const center = (
    <g>
      {/* trophy cup */}
      <path d={`M ${CX - 9} ${CY - 12} L ${CX + 9} ${CY - 12} L ${CX + 7} ${CY - 2} Q ${CX + 7} ${CY + 6} ${CX} ${CY + 8} Q ${CX - 7} ${CY + 6} ${CX - 7} ${CY - 2} Z`}
        fill="rgba(251,191,36,0.15)" stroke="rgba(251,191,36,0.8)" strokeWidth="1.5"
      />
      {/* stem */}
      <line x1={CX} y1={CY + 8} x2={CX} y2={CY + 14} stroke="rgba(251,191,36,0.7)" strokeWidth="2" strokeLinecap="round" />
      {/* base */}
      <line x1={CX - 7} y1={CY + 14} x2={CX + 7} y2={CY + 14} stroke="rgba(251,191,36,0.7)" strokeWidth="2" strokeLinecap="round" />
      {/* handles */}
      <path d={`M ${CX - 9} ${CY - 8} Q ${CX - 15} ${CY - 8} ${CX - 15} ${CY - 2} Q ${CX - 15} ${CY + 2} ${CX - 9} ${CY + 2}`}
        stroke="rgba(251,191,36,0.7)" strokeWidth="1.5" fill="none"
      />
      <path d={`M ${CX + 9} ${CY - 8} Q ${CX + 15} ${CY - 8} ${CX + 15} ${CY - 2} Q ${CX + 15} ${CY + 2} ${CX + 9} ${CY + 2}`}
        stroke="rgba(251,191,36,0.7)" strokeWidth="1.5" fill="none"
      />
      {/* star inside */}
      <motion.circle cx={CX} cy={CY - 4} r="3" fill="rgba(251,191,36,0.9)"
        animate={reduced ? {} : { scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
      />
    </g>
  );
  return <OrbitalBase id="projects" nodes={nodes} center={center} accentColor="#fde68a" />;
}
