import { extractJson, fallbackScope, getOpenAIText, type ScopeResult } from "@/lib/ai-leads";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const payload = {
    businessType: typeof body?.businessType === "string" ? body.businessType.trim() : "",
    serviceNeeded: typeof body?.serviceNeeded === "string" ? body.serviceNeeded.trim() : "",
    painPoint: typeof body?.painPoint === "string" ? body.painPoint.trim() : "",
    goal: typeof body?.goal === "string" ? body.goal.trim() : "",
    timeline: typeof body?.timeline === "string" ? body.timeline.trim() : "",
    budget: typeof body?.budget === "string" ? body.budget.trim() : "",
  };

  if (!payload.businessType || !payload.serviceNeeded || !payload.goal) {
    return Response.json({ error: "Business type, service needed, and goal are required." }, { status: 400 });
  }

  const system = [
    "You are Harzotech's project scoping assistant.",
    "Return valid JSON with keys: summary, recommendedSolution, projectApproach, phases, nextStep.",
    "phases must contain exactly 4 short strings.",
    "Keep it concise, credible, and oriented around business outcomes.",
    "Recommend only realistic agency delivery work such as websites, software, SEO, branding, and automation.",
  ].join(" ");

  const text = await getOpenAIText(system, JSON.stringify(payload));
  const parsed = text ? extractJson<ScopeResult>(text) : null;
  const valid = parsed && Array.isArray(parsed.phases) && parsed.phases.length > 0;

  return Response.json(valid ? parsed : fallbackScope(payload));
}
