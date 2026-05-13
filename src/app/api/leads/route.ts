import { NextResponse } from "next/server";

export interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  serviceType?: string;
  goals?: string[];
  budget?: string;
  timeline?: string;
  source?: string;        // "wizard" | "free-audit" | "contact"
  website?: string;
  message?: string;
}

export async function POST(req: Request) {
  try {
    const body: LeadPayload = await req.json();
    const { name, phone } = body;

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
    }

    const webhookUrl = process.env.LEADS_WEBHOOK_URL;
    if (webhookUrl) {
      // Fire-and-forget to the Google Apps Script webhook
      // (no await so it doesn't slow down the user's response)
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).catch((err) => console.error("[leads] webhook error:", err));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[leads/route]", err);
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
  }
}
