export type SaasProduct = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  vertical: string; // e.g. "Hospitality", "Retail", "Industrial"
  url: string;
  ctaLabel: string;
  icon: string; // emoji or short text
  accentColor: string; // Tailwind bg class for the card accent
  features: string[];
  tags: string[];
  stats?: { label: string; value: string }[];
};

export const saasProducts: SaasProduct[] = [
  {
    slug: "restovax",
    name: "Restovax",
    tagline: "AI-powered restaurant management platform",
    description:
      "All-in-one restaurant operations software. Multi-device POS, kitchen display system, QR code ordering, table management, real-time analytics, inventory tracking, and multi-branch support — built for modern food-service businesses.",
    vertical: "Restaurants",
    url: "https://restovax.com",
    ctaLabel: "Visit Restovax",
    icon: "🍽",
    accentColor: "from-orange-500 to-red-600",
    tags: ["Laravel", "REST API", "POS", "SaaS"],
    features: [
      "Multi-device POS (tablet, mobile, desktop)",
      "Kitchen display system with real-time order routing",
      "QR code contactless ordering & payment",
      "Visual table management & floor plans",
      "Multi-branch unified dashboard",
      "Stripe, Razorpay, PayPal integrations",
    ],
    stats: [
      { value: "500+", label: "Active restaurants" },
      { value: "1M+", label: "Orders processed" },
      { value: "40%", label: "Faster service" },
    ],
  },
  {
    slug: "cliqpos",
    name: "CliqPOS",
    tagline: "Point of sale & inventory control for African businesses",
    description:
      "Sales, stock, staff, payments, and reporting — all connected in one system purpose-built for Ghanaian and Nigerian businesses. Works offline, supports MoMo and card payments, and scales from a single shop to 10+ branches.",
    vertical: "Retail & Hospitality",
    url: "https://cliqpos.com",
    ctaLabel: "Visit CliqPOS",
    icon: "🛒",
    accentColor: "from-green-500 to-emerald-700",
    tags: ["Laravel", "MySQL", "POS", "Ghana", "Nigeria"],
    features: [
      "Offline-first POS — keeps working when internet drops",
      "Cash, Card, MTN MoMo, Vodafone Cash support",
      "Multi-branch dashboard from one account",
      "Real-time stock tracking & low-stock alerts",
      "Staff activity monitoring & role-based access",
      "GRA e-VAT compliant receipts (Ghana)",
    ],
    stats: [
      { value: "500+", label: "Businesses" },
      { value: "2", label: "Markets (GH + NG)" },
      { value: "99.9%", label: "Uptime" },
    ],
  },
  {
    slug: "stayquora",
    name: "StayQuora",
    tagline: "Modern property management for the hospitality industry",
    description:
      "Full hotel management platform replacing 10+ disconnected tools. Unified multi-property dashboard, AI dynamic pricing, branded booking engine, channel manager (Booking.com, Expedia, Airbnb), housekeeping, F&B, events, spa, and enterprise security — all in one platform.",
    vertical: "Hotels & Hospitality",
    url: "https://stayquora.com",
    ctaLabel: "Visit StayQuora",
    icon: "🏨",
    accentColor: "from-brand-blue-700 to-indigo-700",
    tags: ["Next.js", "SaaS", "PMS", "Hotels"],
    features: [
      "Unified multi-property dashboard (unlimited properties)",
      "AI dynamic pricing with demand & competitor monitoring",
      "Branded booking engine with Stripe checkout",
      "Channel manager — OTA sync in real time",
      "30+ modules: F&B, spa, events, finance, laundry",
      "PCI-DSS compliant, 6-role access control",
    ],
    stats: [
      { value: "35%", label: "Avg revenue increase" },
      { value: "60%", label: "Time saved daily" },
      { value: "30+", label: "Integrated modules" },
    ],
  },
  {
    slug: "factorypulse",
    name: "Factory Pulse",
    tagline: "Operations management for agro & production firms",
    description:
      "End-to-end production and agricultural operations platform. Manage raw material intake, production batches, quality control, staff, inventory, procurement, and compliance reporting — purpose-built for farms, processors, and manufacturing SMEs in Africa.",
    vertical: "Agro & Manufacturing",
    url: "https://factorypulse.com",
    ctaLabel: "Visit Factory Pulse",
    icon: "🏭",
    accentColor: "from-yellow-500 to-amber-700",
    tags: ["Laravel", "Operations", "ERP", "Agriculture"],
    features: [
      "Production batch tracking from raw material to finished goods",
      "Inventory & procurement with auto reorder alerts",
      "Quality control checklists and compliance logs",
      "Staff shift management and productivity tracking",
      "Multi-site operations from one dashboard",
      "Export-ready reporting for audits and investors",
    ],
    stats: [],
  },
];
