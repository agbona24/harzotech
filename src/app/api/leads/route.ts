import { google } from "googleapis";
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
  website?: string;       // for free audit
  message?: string;       // for plain contact
}

function getSheets() {
  const email    = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key      = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const sheetId  = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  if (!email || !key || !sheetId) return null;

  const auth = new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return { sheets: google.sheets({ version: "v4", auth }), sheetId };
}

export async function POST(req: Request) {
  try {
    const body: LeadPayload = await req.json();

    const { name, phone, email = "", service = "", serviceType = "",
      goals = [], budget = "", timeline = "", source = "website",
      website = "", message = "" } = body;

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
    }

    const timestamp = new Date().toLocaleString("en-NG", {
      timeZone: "Africa/Lagos",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const row = [
      timestamp,
      name.trim(),
      phone.trim(),
      email.trim(),
      service,
      serviceType,
      goals.join(", "),
      budget,
      timeline,
      source,
      website.trim(),
      message.trim(),
    ];

    const conn = getSheets();
    if (conn) {
      const { sheets, sheetId } = conn;
      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: "Leads!A:L",
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [row] },
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[leads/route]", err);
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
  }
}
