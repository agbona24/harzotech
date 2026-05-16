import { extractJson, getOpenAIText, type ScopeResult } from "@/lib/ai-leads";

export const runtime = "nodejs";

const FALLBACK: ScopeResult = {
  summary: "Based on your inputs, we'd recommend starting with a clear digital foundation — one that is optimised for your business goals and built to scale.",
  recommendedSolution: "Custom Digital Solution",
  projectApproach: "We'll start with a discovery session to align on your goals, define the user journey, and agree on the technology stack and delivery structure before any work begins.",
  phases: [
    "Discovery & strategy — goals, audience, and technical requirements",
    "Design & architecture — user experience, structure, and system design",
    "Development & build — core functionality and integrations",
    "Testing & quality assurance — performance, responsiveness, and accuracy",
    "Launch & handover — deployment, training, and post-launch support",
  ],
  nextStep: "Book a free strategy consultation at /contact so we can review your brief and propose a clear project plan.",
};

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const businessType = typeof body?.businessType === "string" ? body.businessType.trim() : "";
  const serviceNeeded = typeof body?.serviceNeeded === "string" ? body.serviceNeeded.trim() : "";
  const painPoint = typeof body?.painPoint === "string" ? body.painPoint.trim() : "";
  const goal = typeof body?.goal === "string" ? body.goal.trim() : "";
  const timeline = typeof body?.timeline === "string" ? body.timeline.trim() : "";
  const budget = typeof body?.budget === "string" ? body.budget.trim() : "";

  if (!businessType || !goal || !painPoint) {
    return Response.json({ error: "businessType, goal, and painPoint are required." }, { status: 400 });
  }

  const system = `You are a senior project strategist at Harzotech Nig Ltd, a Nigerian tech company. A client has filled in a project scoping form. Generate a professional project brief from their inputs.

Return valid JSON with exactly these keys:
{
  "summary": "2-3 sentence summary of the client's situation and what needs to be built",
  "recommendedSolution": "short name of the recommended product or system (e.g. 'Custom CRM & Lead Portal', 'E-commerce Website', 'WhatsApp Automation System')",
  "projectApproach": "2-3 sentences on how Harzotech would approach this project",
  "phases": ["phase 1 in one sentence", "phase 2 in one sentence", "phase 3 in one sentence", "phase 4 in one sentence", "phase 5 in one sentence"],
  "nextStep": "one clear action the client should take next, ending with a link to /contact"
}

Be specific to the Nigerian business context. Be practical and commercial. Phases should be concrete delivery steps, not generic descriptions.`;

  const userPrompt = `Business type: ${businessType}
Service needed: ${serviceNeeded}
Main pain point: ${painPoint}
Goal: ${goal}
Timeline: ${timeline || "Flexible"}
Budget: ${budget || "Not specified"}`;

  const text = await getOpenAIText(system, userPrompt);
  const parsed = text ? extractJson<ScopeResult>(text) : null;

  if (parsed && typeof parsed.summary === "string" && Array.isArray(parsed.phases) && parsed.phases.length > 0) {
    return Response.json(parsed);
  }

  return Response.json(FALLBACK);
}
