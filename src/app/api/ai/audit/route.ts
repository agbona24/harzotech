import { extractJson, fallbackAudit, getOpenAIText, type AuditResult } from "@/lib/ai-leads";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const url = typeof body?.url === "string" ? body.url.trim() : "";
  const focusArea = typeof body?.focusArea === "string" ? body.focusArea.trim() : "general";

  if (!url) {
    return Response.json({ error: "URL is required." }, { status: 400 });
  }

  const system = [
    "You are Harzotech's website audit assistant.",
    "Return valid JSON with keys: summary, recommendedService, focusArea, scores, actions.",
    "scores must include clarity, trust, conversion, mobile as integers from 55 to 95.",
    "actions must contain exactly 3 short actionable recommendations.",
    "recommendedService should be a Harzotech-style service recommendation.",
    "Do not claim to have actually crawled the website. Infer carefully from the URL and the user's focus area only.",
  ].join(" ");

  const text = await getOpenAIText(system, `Website URL: ${url}\nFocus area: ${focusArea}`);
  const parsed = text ? extractJson<AuditResult>(text) : null;
  const valid =
    parsed &&
    parsed.scores &&
    typeof parsed.scores.clarity === "number" &&
    Array.isArray(parsed.actions);

  return Response.json(valid ? parsed : fallbackAudit(url, focusArea));
}
