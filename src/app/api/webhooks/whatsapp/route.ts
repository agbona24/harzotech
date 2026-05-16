import { getOpenAIText } from "@/lib/ai-leads";

export const runtime = "nodejs";

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN ?? "";
const WA_TOKEN     = process.env.WHATSAPP_ACCESS_TOKEN ?? "";
const PHONE_ID     = process.env.WHATSAPP_PHONE_NUMBER_ID ?? "";

const SYSTEM = `You are Harzo, the AI assistant for Harzotech Nig Ltd — a technology company in Lagos, Nigeria that builds websites, custom software, AI automation, and SEO solutions.

Keep every reply under 60 words. Be warm, direct, and helpful.
Use plain text only — no markdown, no asterisks. WhatsApp renders its own formatting.
End every reply with one relevant action: a link or "Reply YES to speak with the team."
Never make up prices — say pricing depends on scope and ask them to share details.
Harzotech WhatsApp: +234 706 971 6822. Website: https://harzotech.com`;

// ── GET: webhook verification ────────────────────────────────────
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode      = searchParams.get("hub.mode");
  const token     = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    return new Response(challenge, { status: 200 });
  }
  return new Response("Forbidden", { status: 403 });
}

// ── POST: incoming messages ──────────────────────────────────────
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const entry   = body?.entry?.[0];
  const changes = entry?.changes?.[0];
  const value   = changes?.value;

  // Ignore status updates
  if (!value?.messages?.length) {
    return Response.json({ status: "ok" });
  }

  const msg    = value.messages[0];
  const from   = msg.from as string;           // sender's phone number
  const text   = msg.text?.body as string | undefined;

  if (!text?.trim()) {
    return Response.json({ status: "ok" });
  }

  const reply = await getOpenAIText(SYSTEM, text.trim()) ??
    "Thanks for reaching out to Harzotech! We'll get back to you shortly. You can also visit harzotech.com for more information.";

  await sendWhatsApp(from, reply);

  return Response.json({ status: "ok" });
}

async function sendWhatsApp(to: string, text: string) {
  if (!WA_TOKEN || !PHONE_ID) return;

  await fetch(`https://graph.facebook.com/v19.0/${PHONE_ID}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${WA_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { body: text },
    }),
  });
}
