import { extractJson, fallbackAdvisor, getOpenAIText, type AdvisorResult } from "@/lib/ai-leads";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const prompt = typeof body?.prompt === "string" ? body.prompt.trim() : "";

  if (!prompt) {
    return Response.json({ error: "Prompt is required." }, { status: 400 });
  }

  const system = [
    "You are Harzotech's website advisor.",
    "Recommend only Harzotech services.",
    "Return valid JSON with keys: headline, service, reason, ctaLabel, ctaHref, quickWins.",
    "Keep each field concise and commercial.",
    'Use ctaHref from this list only: "/website-development", "/software-development", "/ai-automation", "/seo-digital-marketing", "/services", "/contact?intent=start-project".',
    "quickWins must contain exactly 3 short strings.",
  ].join(" ");

  const text = await getOpenAIText(system, prompt);
  const parsed = text ? extractJson<AdvisorResult>(text) : null;
  const result = parsed && Array.isArray(parsed.quickWins) ? parsed : fallbackAdvisor(prompt);

  return Response.json(result);
}
