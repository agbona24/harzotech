import { getOpenAIText } from "@/lib/ai-leads";

export const runtime = "nodejs";

const SYSTEM = `You are Harzo, Harzotech's AI assistant on the company website. Harzotech Nig Ltd is a technology company in Lagos, Nigeria.

Services:
- Website Development: business sites, e-commerce, landing pages. Packages from $500 (Starter, 14-day delivery), $1,000 (Business), $1,800+ (Premium).
- Custom Software: CRM, portals, POS, booking platforms, dashboards, SaaS. Bespoke pricing.
- AI Automation: WhatsApp bots, AI voice agents, lead qualification, workflow automation (n8n, Zapier, Make, OpenAI).
- SEO & Digital Marketing: technical SEO, local SEO, Google rankings, content strategy.
- IT Support: managed support, cloud backup, security, network management.

Company facts: 50+ projects delivered, 10+ years experience, clients across real estate, healthcare, fintech, education, agriculture, retail. Based in Lagos. WhatsApp: +234 706 971 6822.

Key pages: /services, /packages (pricing), /projects (portfolio), /free-audit (free website audit), /contact (start a project), /ai-automation, /website-development, /software-development, /seo-digital-marketing.

Rules:
- Keep every reply under 80 words.
- Be warm, direct, and helpful — like a knowledgeable colleague.
- Always end with one clear next action (a page link or suggestion to contact).
- Never make up prices or timelines you are not sure about — say "depends on scope, get a quote at /contact".
- If asked something outside Harzotech's scope, politely redirect.
- Do not use markdown headers or bullet lists — write in plain, friendly sentences.`;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const messages: { role: string; content: string }[] = Array.isArray(body?.messages)
    ? body.messages
    : [];

  if (!messages.length) {
    return Response.json({ error: "No messages provided." }, { status: 400 });
  }

  const userMessage = messages[messages.length - 1]?.content ?? "";
  if (!userMessage.trim()) {
    return Response.json({ error: "Empty message." }, { status: 400 });
  }

  // Build a single prompt combining history + system
  const history = messages
    .slice(0, -1)
    .map((m) => `${m.role === "user" ? "User" : "Harzo"}: ${m.content}`)
    .join("\n");

  const prompt = history ? `${history}\nUser: ${userMessage}` : userMessage;
  const text = await getOpenAIText(SYSTEM, prompt);

  const reply =
    text ||
    "I'm here to help! For anything specific about Harzotech's services, pricing, or projects — visit /packages or drop a message at /contact and the team will reply within 24 hours.";

  return Response.json({ reply });
}
