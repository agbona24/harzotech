import { getOpenAIText } from "@/lib/ai-leads";

export const runtime = "nodejs";

const SYSTEM = `You are a senior web consultant reviewing Nigerian business websites. Based on the URL and business description provided, give an instant preliminary audit with exactly 3 specific issues you suspect the site likely has, based on common patterns you see in Nigerian business websites in that industry.

Return valid JSON only with this exact shape:
{
  "score": number between 35 and 72,
  "summary": "one sentence summary of the likely website health",
  "issues": [
    { "area": "short area name", "finding": "specific likely issue in one sentence", "priority": "High" | "Medium" },
    { "area": "short area name", "finding": "specific likely issue in one sentence", "priority": "High" | "Medium" },
    { "area": "short area name", "finding": "specific likely issue in one sentence", "priority": "High" | "Medium" }
  ],
  "quickWin": "one specific thing they can fix today"
}

Be specific to the industry and Nigerian market context. Do not be generic. Mention things like mobile usability, Google Business Profile, load speed, WhatsApp CTA visibility, testimonials, pricing clarity, SSL, etc.`;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const url = typeof body?.url === "string" ? body.url.trim() : "";
  const business = typeof body?.business === "string" ? body.business.trim() : "";

  if (!url) {
    return Response.json({ error: "URL is required." }, { status: 400 });
  }

  const prompt = `Website URL: ${url}\nBusiness description: ${business || "Not provided"}`;
  const text = await getOpenAIText(SYSTEM, prompt);

  if (!text) {
    return Response.json({
      score: 52,
      summary: "Your website likely has several common issues affecting lead generation.",
      issues: [
        { area: "Mobile Experience", finding: "Most Nigerian sites have poor mobile layouts that frustrate 70%+ of visitors on phones.", priority: "High" },
        { area: "Conversion Clarity", finding: "Visitors often can't tell what to do next — WhatsApp CTA and contact paths are unclear.", priority: "High" },
        { area: "SEO Visibility", finding: "Most small business sites in Nigeria are not showing up on Google for their core service keywords.", priority: "Medium" },
      ],
      quickWin: "Add a WhatsApp click-to-chat button to your homepage — it's the fastest way to convert mobile visitors.",
    });
  }

  // Extract JSON
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) {
    return Response.json({ error: "Could not parse response." }, { status: 500 });
  }

  try {
    const result = JSON.parse(match[0]);
    return Response.json(result);
  } catch {
    return Response.json({ error: "Invalid JSON from AI." }, { status: 500 });
  }
}
