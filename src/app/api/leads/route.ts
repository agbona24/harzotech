import { google } from "googleapis";
import nodemailer from "nodemailer";
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

/* ── Google Sheets ─────────────────────────────────────────────── */

function getSheets() {
  const email   = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key     = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const sheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  if (!email || !key || !sheetId) return null;

  const auth = new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return { sheets: google.sheets({ version: "v4", auth }), sheetId };
}

/* ── Email notification ────────────────────────────────────────── */

function getTransporter() {
  const user = process.env.NOTIFY_EMAIL_USER;
  const pass = process.env.NOTIFY_EMAIL_PASS;
  if (!user || !pass) return null;

  return nodemailer.createTransport({
    host: process.env.NOTIFY_SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.NOTIFY_SMTP_PORT ?? 465),
    secure: true,
    auth: { user, pass },
  });
}

function buildEmailHtml(lead: LeadPayload, timestamp: string) {
  const sourceLabel: Record<string, string> = {
    wizard: "Project Wizard",
    "free-audit": "Free Website Audit",
    contact: "Contact Form",
  };
  const rows = [
    ["Source",       sourceLabel[lead.source ?? ""] ?? lead.source ?? "—"],
    ["Name",         lead.name],
    ["Phone",        lead.phone],
    ["Email",        lead.email || "—"],
    ["Service",      lead.service || "—"],
    ["Service Type", lead.serviceType || "—"],
    ["Goals",        lead.goals?.join(", ") || "—"],
    ["Budget",       lead.budget || "—"],
    ["Timeline",     lead.timeline || "—"],
    ["Website",      lead.website || "—"],
    ["Message",      lead.message || "—"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:8px 12px;font-size:13px;color:#64748b;white-space:nowrap;border-bottom:1px solid #f1f5f9;">${label}</td>
          <td style="padding:8px 12px;font-size:13px;color:#0f172a;border-bottom:1px solid #f1f5f9;">${value}</td>
        </tr>`
    )
    .join("");

  const waLink = `https://wa.me/${lead.phone?.replace(/\D/g, "")}`;

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:system-ui,sans-serif;background:#f8fafc;">
  <div style="max-width:520px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.07);">
    <div style="background:#1d4ed8;padding:24px 28px;">
      <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#93c5fd;">New Lead — Harzotech CRM</p>
      <h1 style="margin:6px 0 0;font-size:20px;color:#fff;">${lead.name}</h1>
      <p style="margin:4px 0 0;font-size:13px;color:#bfdbfe;">${timestamp} · Lagos time</p>
    </div>

    <div style="padding:4px 0;">
      <table style="width:100%;border-collapse:collapse;">${tableRows}</table>
    </div>

    <div style="padding:20px 28px;border-top:1px solid #f1f5f9;display:flex;gap:12px;">
      <a href="${waLink}" style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;padding:10px 20px;border-radius:100px;font-size:13px;font-weight:700;">
        Reply on WhatsApp
      </a>
      ${lead.email ? `<a href="mailto:${lead.email}" style="display:inline-block;background:#f1f5f9;color:#1d4ed8;text-decoration:none;padding:10px 20px;border-radius:100px;font-size:13px;font-weight:700;">Reply by Email</a>` : ""}
    </div>

    <p style="padding:0 28px 20px;margin:0;font-size:11px;color:#94a3b8;">
      This notification was sent by your Harzotech website CRM. All leads are also saved in your Google Sheet.
    </p>
  </div>
</body>
</html>`;
}

/* ── Route handler ─────────────────────────────────────────────── */

export async function POST(req: Request) {
  try {
    const body: LeadPayload = await req.json();

    const {
      name, phone, email = "", service = "", serviceType = "",
      goals = [], budget = "", timeline = "",
      source = "website", website = "", message = "",
    } = body;

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
    }

    const timestamp = new Date().toLocaleString("en-NG", {
      timeZone: "Africa/Lagos",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const row = [
      timestamp, name.trim(), phone.trim(), email.trim(),
      service, serviceType, goals.join(", "),
      budget, timeline, source, website.trim(), message.trim(),
    ];

    const lead: LeadPayload = { name: name.trim(), phone: phone.trim(), email, service, serviceType, goals, budget, timeline, source, website, message };

    /* Save to Google Sheets */
    const conn = getSheets();
    if (conn) {
      await conn.sheets.spreadsheets.values.append({
        spreadsheetId: conn.sheetId,
        range: "Leads!A:L",
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [row] },
      });
    }

    /* Send notification email */
    const transporter = getTransporter();
    if (transporter) {
      const adminEmail = process.env.NOTIFY_EMAIL_TO ?? process.env.NOTIFY_EMAIL_USER!;
      const sourceLabel: Record<string, string> = {
        wizard: "Project Brief",
        "free-audit": "Free Audit Request",
        contact: "Contact Form",
      };
      await transporter.sendMail({
        from: `"Harzotech CRM" <${process.env.NOTIFY_EMAIL_USER}>`,
        to: adminEmail,
        subject: `🔔 New Lead: ${name.trim()} — ${sourceLabel[source] ?? source}`,
        html: buildEmailHtml(lead, timestamp),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[leads/route]", err);
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
  }
}
