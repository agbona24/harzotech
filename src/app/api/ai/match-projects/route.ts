import { getOpenAIText } from "@/lib/ai-leads";
import { projects } from "@/data/projects";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const query = typeof body?.query === "string" ? body.query.trim() : "";

  if (!query) {
    return Response.json({ error: "Query is required." }, { status: 400 });
  }

  // Compact project index — slug|name|industry|tags|description(120)
  const index = projects
    .map((p) => {
      const tags = (p.tags ?? []).slice(0, 4).join(",");
      const desc = p.description.slice(0, 120).replace(/\n/g, " ");
      return `${p.slug}|${p.name}|${p.industry}|${tags}|${desc}`;
    })
    .join("\n");

  const system = `You are a portfolio assistant for Harzotech, a Nigerian tech company. Given a user's project idea or requirement, find the 3 most relevant past projects from the list below and explain briefly why each is relevant.

Return valid JSON only:
{
  "matches": [
    { "slug": "exact-slug-from-list", "reason": "one sentence why this project is relevant to what they need" },
    { "slug": "exact-slug-from-list", "reason": "one sentence why this project is relevant to what they need" },
    { "slug": "exact-slug-from-list", "reason": "one sentence why this project is relevant to what they need" }
  ]
}

Only use slugs that appear exactly in the list below. Return fewer than 3 if fewer are genuinely relevant.

Projects (format: slug|name|industry|tags|description):
${index}`;

  const text = await getOpenAIText(system, `Find projects similar to: ${query}`);
  const match = text?.match(/\{[\s\S]*\}/);

  if (!match) return Response.json({ matches: [] });

  try {
    const parsed = JSON.parse(match[0]) as { matches: { slug: string; reason: string }[] };
    // Validate slugs are real
    const validSlugs = new Set(projects.map((p) => p.slug));
    const safe = {
      matches: parsed.matches.filter((m) => validSlugs.has(m.slug)).slice(0, 3),
    };
    return Response.json(safe);
  } catch {
    return Response.json({ matches: [] });
  }
}
