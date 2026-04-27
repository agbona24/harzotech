"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Package,
  UtensilsCrossed,
  Hotel,
  GraduationCap,
  Pill,
  CalendarCheck,
  Users,
  LayoutDashboard,
  Shield,
} from "lucide-react";

const SYSTEMS = [
  {
    label: "POS Systems",
    icon: ShoppingCart,
    accent: "from-brand-blue-700 to-brand-blue-900",
    ring: "ring-brand-blue-400/40",
    tag: "Point of Sale",
    metrics: [
      { label: "Today's Sales", value: "₦284,500", up: true },
      { label: "Transactions", value: "143", up: true },
      { label: "Avg. Order", value: "₦1,990", up: false },
    ],
    rows: ["Cashier terminal", "Stock deduction", "Receipt printing", "Daily report"],
  },
  {
    label: "Inventory Systems",
    icon: Package,
    accent: "from-violet-700 to-violet-900",
    ring: "ring-violet-400/40",
    tag: "Stock Management",
    metrics: [
      { label: "Total SKUs", value: "1,284", up: true },
      { label: "Low Stock", value: "12 items", up: false },
      { label: "Value", value: "₦4.2M", up: true },
    ],
    rows: ["Stock tracking", "Reorder alerts", "Supplier log", "Variance report"],
  },
  {
    label: "Restaurant Systems",
    icon: UtensilsCrossed,
    accent: "from-amber-600 to-amber-900",
    ring: "ring-amber-400/40",
    tag: "Food & Beverage",
    metrics: [
      { label: "Open Orders", value: "18", up: true },
      { label: "Tables Active", value: "9 / 14", up: true },
      { label: "Revenue Today", value: "₦97,200", up: true },
    ],
    rows: ["Table ordering", "Kitchen display", "Menu management", "Waiter app"],
  },
  {
    label: "Hotel Systems",
    icon: Hotel,
    accent: "from-cyan-700 to-cyan-900",
    ring: "ring-cyan-400/40",
    tag: "Hospitality",
    metrics: [
      { label: "Occupancy", value: "78%", up: true },
      { label: "Check-ins Today", value: "11", up: true },
      { label: "Revenue", value: "₦620,000", up: true },
    ],
    rows: ["Room booking", "Guest management", "Housekeeping", "Billing & invoice"],
  },
  {
    label: "School Management",
    icon: GraduationCap,
    accent: "from-emerald-700 to-emerald-900",
    ring: "ring-emerald-400/40",
    tag: "Education",
    metrics: [
      { label: "Students", value: "1,042", up: true },
      { label: "Classes Today", value: "34", up: true },
      { label: "Fees Collected", value: "₦2.1M", up: true },
    ],
    rows: ["Student records", "Attendance", "Result portal", "Fee payment"],
  },
  {
    label: "Hospital & Pharmacy",
    icon: Pill,
    accent: "from-rose-700 to-rose-900",
    ring: "ring-rose-400/40",
    tag: "Healthcare",
    metrics: [
      { label: "Patients Today", value: "67", up: true },
      { label: "Prescriptions", value: "112", up: true },
      { label: "Drug Stock", value: "94%", up: false },
    ],
    rows: ["Patient records", "Drug dispensing", "Doctor schedule", "Lab results"],
  },
  {
    label: "Booking Systems",
    icon: CalendarCheck,
    accent: "from-sky-700 to-sky-900",
    ring: "ring-sky-400/40",
    tag: "Appointments",
    metrics: [
      { label: "Bookings Today", value: "38", up: true },
      { label: "Upcoming", value: "214", up: true },
      { label: "No-shows", value: "4", up: false },
    ],
    rows: ["Online booking", "Reminders", "Staff schedule", "Client history"],
  },
  {
    label: "CRM Dashboards",
    icon: Users,
    accent: "from-indigo-700 to-indigo-900",
    ring: "ring-indigo-400/40",
    tag: "Customer Relations",
    metrics: [
      { label: "Active Leads", value: "342", up: true },
      { label: "Closed This Week", value: "29", up: true },
      { label: "Pipeline Value", value: "₦8.5M", up: true },
    ],
    rows: ["Lead tracking", "Follow-up log", "Deal pipeline", "Sales reports"],
  },
  {
    label: "SaaS Platforms",
    icon: LayoutDashboard,
    accent: "from-brand-blue-600 to-violet-800",
    ring: "ring-brand-blue-400/40",
    tag: "Software as a Service",
    metrics: [
      { label: "Active Users", value: "4,810", up: true },
      { label: "MRR", value: "₦1.2M", up: true },
      { label: "Uptime", value: "99.9%", up: true },
    ],
    rows: ["Multi-tenant", "Subscriptions", "Usage analytics", "API access"],
  },
  {
    label: "Admin Portals",
    icon: Shield,
    accent: "from-slate-700 to-slate-900",
    ring: "ring-slate-400/40",
    tag: "Back Office",
    metrics: [
      { label: "Active Users", value: "18", up: true },
      { label: "Pending Tasks", value: "7", up: false },
      { label: "System Health", value: "100%", up: true },
    ],
    rows: ["Role management", "Audit logs", "Settings", "Data exports"],
  },
] as const;

export function SoftwareSystemsWidget() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SYSTEMS.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const current = SYSTEMS[active];
  const Icon = current.icon;

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header bar — dark terminal style */}
      <div className="flex items-center justify-between border-b border-slate-100 bg-navy-950 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
          <p className="text-xs font-semibold text-slate-300">Harzotech System Suite</p>
        </div>
        <AnimatePresence mode="wait">
          <motion.span
            key={active}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.25 }}
            className="text-[10px] font-medium text-slate-500"
          >
            {current.tag}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Dashboard preview */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="p-4"
        >
          {/* System title bar */}
          <div className={`mb-3 flex items-center gap-3 rounded-xl bg-gradient-to-r ${current.accent} px-4 py-3`}>
            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/20 ring-2 ${current.ring}`}>
              <Icon className="h-4 w-4 text-white" />
            </div>
            <p className="text-sm font-bold text-white">{current.label}</p>
          </div>

          {/* Metric cards */}
          <div className="mb-3 grid grid-cols-3 gap-2">
            {current.metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5 text-center">
                <p className="text-[13px] font-black text-slate-900">{m.value}</p>
                <p className="mt-0.5 text-[10px] text-slate-400">{m.label}</p>
                <span className={`mt-1 inline-block text-[9px] font-bold ${m.up ? "text-emerald-500" : "text-rose-500"}`}>
                  {m.up ? "▲" : "▼"}
                </span>
              </div>
            ))}
          </div>

          {/* Feature rows */}
          <div className="grid grid-cols-2 gap-1.5">
            {current.rows.map((row) => (
              <div key={row} className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${current.accent}`} />
                <p className="text-[11px] font-medium text-slate-600">{row}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* System selector pills */}
      <div className="border-t border-slate-100 px-4 pb-4 pt-3">
        <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          Systems we build
        </p>
        <div className="flex flex-wrap gap-1.5">
          {SYSTEMS.map((s, i) => {
            const SIcon = s.icon;
            const isActive = i === active;
            return (
              <button
                key={s.label}
                onClick={() => setActive(i)}
                className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-all duration-200 ${
                  isActive
                    ? `border-transparent bg-gradient-to-r ${s.accent} text-white shadow-sm`
                    : "border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300 hover:text-slate-700"
                }`}
              >
                <SIcon className="h-3 w-3 shrink-0" />
                {s.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
