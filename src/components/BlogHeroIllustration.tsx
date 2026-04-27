"use client";
import { useId } from "react";
import { useReducedMotion, motion } from "framer-motion";

export function BlogHeroIllustration() {
  const id = useId();
  const reduced = useReducedMotion();

  const float = (delay = 0) =>
    reduced
      ? {}
      : { animate: { y: [0, -5, 0] }, transition: { duration: 4, delay, repeat: Infinity, ease: "easeInOut" as const } };

  const articles = [
    { title: "AI Automation Guide", cat: "AI", color: "#1565c0", y: 40,  x: 10,  w: 160, delay: 0   },
    { title: "SEO for Nigeria",     cat: "SEO", color: "#2e7d32", y: 130, x: 80,  w: 150, delay: 0.4 },
    { title: "Custom Software",     cat: "Dev", color: "#e65100", y: 50,  x: 220, w: 145, delay: 0.8 },
  ];

  return (
    <svg
      viewBox="0 0 400 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d1f3c" />
          <stop offset="100%" stopColor="#030712" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="280" rx="20" fill={`url(#${id}-bg)`} />

      {/* Grid lines */}
      {[60, 120, 180, 240].map((y) => (
        <line key={y} x1="20" y1={y} x2="380" y2={y} stroke="white" strokeOpacity="0.04" strokeWidth="1" />
      ))}

      {/* Article cards */}
      {articles.map((a) => (
        <motion.g key={a.title} {...float(a.delay)}>
          <rect x={a.x} y={a.y} width={a.w} height={76} rx="10" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.1" strokeWidth="0.8" />
          {/* colour bar */}
          <rect x={a.x} y={a.y} width={a.w} height="3" rx="1.5" fill={a.color} />
          {/* category badge */}
          <rect x={a.x + 8} y={a.y + 12} width={28} height={10} rx="5" fill={a.color} fillOpacity="0.2" />
          <text x={a.x + 22} y={a.y + 20} fill={a.color} fontSize="6" fontWeight="bold" textAnchor="middle">{a.cat}</text>
          {/* title lines */}
          <rect x={a.x + 8} y={a.y + 28} width={a.w - 20} height="5" rx="2.5" fill="white" fillOpacity="0.3" />
          <rect x={a.x + 8} y={a.y + 37} width={(a.w - 20) * 0.7} height="5" rx="2.5" fill="white" fillOpacity="0.2" />
          {/* excerpt lines */}
          <rect x={a.x + 8} y={a.y + 50} width={a.w - 24} height="3" rx="1.5" fill="white" fillOpacity="0.12" />
          <rect x={a.x + 8} y={a.y + 57} width={(a.w - 24) * 0.8} height="3" rx="1.5" fill="white" fillOpacity="0.08" />
          {/* read time */}
          <text x={a.x + 8} y={a.y + 72} fill="white" fillOpacity="0.3" fontSize="5.5">{Math.floor(Math.random() * 4) + 5} min read</text>
        </motion.g>
      ))}

      {/* Floating tag */}
      <motion.g {...float(1.2)}>
        <rect x="20" y="195" width="90" height="22" rx="11" fill="#1565c0" fillOpacity="0.15" stroke="#1565c0" strokeOpacity="0.4" strokeWidth="0.8" />
        <text x="65" y="210" fill="#90caf9" fontSize="7" fontWeight="600" textAnchor="middle">Nigeria · Business · Tech</text>
      </motion.g>

      {/* Pen/write icon */}
      <motion.g {...float(0.6)}>
        <circle cx="355" cy="55" r="18" fill="white" fillOpacity="0.07" stroke="white" strokeOpacity="0.12" strokeWidth="0.8" />
        <path d="M349 61 l10-10 4 4 -10 10 -4 0 0-4z" stroke="white" strokeOpacity="0.6" strokeWidth="1.2" fill="none" />
        <line x1="356" y1="54" x2="360" y2="58" stroke="white" strokeOpacity="0.5" strokeWidth="1.2" />
      </motion.g>
    </svg>
  );
}
