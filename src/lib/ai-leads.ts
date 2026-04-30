export type AdvisorResult = {
  headline: string;
  service: string;
  reason: string;
  ctaLabel: string;
  ctaHref: string;
  quickWins: string[];
};

export type AuditResult = {
  summary: string;
  recommendedService: string;
  focusArea: string;
  scores: {
    clarity: number;
    trust: number;
    conversion: number;
    mobile: number;
  };
  actions: string[];
};

export type ScopeResult = {
  summary: string;
  recommendedSolution: string;
  projectApproach: string;
  phases: string[];
  nextStep: string;
};

const OPENAI_URL = "https://api.openai.com/v1/responses";
const DEFAULT_MODEL = process.env.OPENAI_MODEL || "gpt-5.4-mini";

function clampScore(value: number) {
  return Math.max(58, Math.min(94, Math.round(value)));
}

function keywordIncludes(text: string, words: string[]) {
  return words.some((word) => text.includes(word));
}

export function fallbackAdvisor(prompt: string): AdvisorResult {
  const text = prompt.toLowerCase();

  if (keywordIncludes(text, ["automation", "whatsapp", "ai", "workflow", "crm"])) {
    return {
      headline: "You likely need an automation-first growth system.",
      service: "AI Automation",
      reason:
        "Your prompt points to repetitive communication or operational work that should be routed through automated workflows before your team handles the exceptions.",
      ctaLabel: "Plan My Automation",
      ctaHref: "/contact?intent=start-project",
      quickWins: [
        "Map the top 3 repetitive customer requests",
        "Connect capture points like forms, WhatsApp, or booking",
        "Set follow-up rules for missed leads and reminders",
      ],
    };
  }

  if (keywordIncludes(text, ["software", "dashboard", "portal", "inventory", "booking", "system"])) {
    return {
      headline: "A custom system is likely the right fit.",
      service: "Software Development",
      reason:
        "This sounds like an operational problem, not just a website problem. A tailored platform would centralize your workflow and reduce manual coordination.",
      ctaLabel: "Scope My Software",
      ctaHref: "/contact?intent=start-project",
      quickWins: [
        "Define the users and roles in the system",
        "List the manual steps that should become automated",
        "Prioritize one core workflow for phase one",
      ],
    };
  }

  if (keywordIncludes(text, ["seo", "traffic", "ranking", "google", "leads"])) {
    return {
      headline: "You likely need a visibility and conversion upgrade.",
      service: "SEO & Digital Growth",
      reason:
        "The main issue appears to be discoverability and demand generation. The right solution is better search visibility paired with clearer conversion paths.",
      ctaLabel: "Improve My Visibility",
      ctaHref: "/seo-digital-marketing",
      quickWins: [
        "Tighten service messaging around search intent",
        "Create clearer lead capture points on core pages",
        "Build supporting content around commercial keywords",
      ],
    };
  }

  return {
    headline: "A premium website is probably the first move.",
    service: "Website Development",
    reason:
      "When the goal is credibility, clearer messaging, and more enquiries, the fastest path is usually a strategic website that presents the offer properly and drives action.",
    ctaLabel: "Plan My Website",
    ctaHref: "/website-development",
    quickWins: [
      "Clarify the offer and audience on the homepage",
      "Reduce friction in the enquiry flow",
      "Strengthen trust with proof, case studies, and structure",
    ],
  };
}

export function fallbackAudit(rawUrl: string, focusArea: string): AuditResult {
  const url = rawUrl.trim().toLowerCase();
  const lengthFactor = Math.min(url.length, 40);
  const hasHttps = url.startsWith("https://");
  const hasWww = url.includes("www.");
  const hasShop = keywordIncludes(url, ["shop", "store", "buy"]);
  const base = 64 + lengthFactor / 3;

  const clarity = clampScore(base + (hasWww ? 2 : 0));
  const trust = clampScore(base + (hasHttps ? 6 : -4));
  const conversion = clampScore(base + (hasShop ? 4 : 0) - 3);
  const mobile = clampScore(base + 1);

  const actions = [
    "Tighten the hero message so visitors understand the offer in the first screen.",
    "Increase trust signals with stronger proof, testimonials, and clearer company positioning.",
    "Improve primary calls to action so users always know the next step.",
  ];

  if (focusArea === "seo") {
    actions[0] = "Rework page titles, service headings, and content hierarchy around search intent.";
  }
  if (focusArea === "conversion") {
    actions[2] = "Reduce CTA friction by shortening forms and clarifying the main conversion path.";
  }
  if (focusArea === "mobile") {
    actions[1] = "Simplify mobile layouts, reduce clutter, and make the most important actions thumb-friendly.";
  }

  return {
    summary:
      "The site likely has usable foundations, but the messaging, trust structure, and conversion path can be sharpened to perform more like a premium growth asset.",
    recommendedService: focusArea === "seo" ? "SEO & Website Optimization" : "Website Strategy & Redesign",
    focusArea,
    scores: { clarity, trust, conversion, mobile },
    actions,
  };
}

export function fallbackScope(input: {
  businessType: string;
  serviceNeeded: string;
  painPoint: string;
  goal: string;
  timeline: string;
  budget: string;
}): ScopeResult {
  const service = input.serviceNeeded || "digital solution";
  const pain = input.painPoint || "unclear positioning and manual work";
  const goal = input.goal || "more enquiries and smoother operations";
  const businessType = input.businessType || "business";

  return {
    summary: `Harzotech should help this ${businessType} solve ${pain} and move toward ${goal} with a focused ${service.toLowerCase()} project.`,
    recommendedSolution: `${service} with a strong strategy, launch-ready execution, and follow-up optimization.`,
    projectApproach:
      input.timeline === "Urgent"
        ? "Use a phased launch: ship the core journey first, then add secondary features after the first live release."
        : "Start with discovery and structure, then move into a staged build with testing and post-launch support.",
    phases: [
      "Discovery and requirements alignment",
      "UX structure, content direction, and conversion planning",
      "Build, testing, and deployment",
      "Post-launch optimization and support",
    ],
    nextStep:
      input.budget === "Not sure yet"
        ? "Book a discovery call to define scope and budget range."
        : "Review the draft brief with Harzotech and confirm scope for kickoff.",
  };
}

export async function getOpenAIText(system: string, user: string) {
  if (!process.env.OPENAI_API_KEY) return null;

  try {
    const response = await fetch(OPENAI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        input: `${system}\n\nUser request:\n${user}`,
      }),
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (typeof data.output_text === "string" && data.output_text.trim()) {
      return data.output_text.trim();
    }

    const parts = Array.isArray(data.output)
      ? data.output
          .flatMap((item: { content?: Array<{ text?: string }> }) => item.content || [])
          .map((item: { text?: string }) => item.text || "")
          .filter(Boolean)
      : [];

    return parts.join("\n").trim() || null;
  } catch {
    return null;
  }
}

export function extractJson<T>(text: string): T | null {
  const match = text.match(/\{[\s\S]*\}/);

  if (!match) return null;

  try {
    return JSON.parse(match[0]) as T;
  } catch {
    return null;
  }
}
