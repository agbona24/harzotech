"use client";

import { useMemo, useState } from "react";
import { MessageCircle, Mail, Upload, X } from "lucide-react";

const WA_NUMBER = "2347069716822";

export function JobApplicationForm({
  jobTitle,
  toEmail,
}: {
  jobTitle: string;
  toEmail: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const waHref = useMemo(() => {
    const text =
      `Hi Harzotech 👋\n\n` +
      `*Job Application: ${jobTitle}*\n\n` +
      `*Name:* ${name || "—"}\n` +
      `*Email:* ${email || "—"}\n` +
      `*Phone:* ${phone || "—"}\n\n` +
      `*Cover Letter:*\n${coverLetter || "—"}\n\n` +
      `*Resume:* ${resumeFile ? resumeFile.name : "Will send separately"}`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  }, [jobTitle, name, email, phone, coverLetter, resumeFile]);

  const mailtoHref = useMemo(() => {
    const body =
      `Job Application: ${jobTitle}\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n\n` +
      `Cover Letter:\n${coverLetter}\n\n` +
      `Note: Resume attached separately if applicable.`;
    const params = new URLSearchParams({
      subject: `Job Application: ${jobTitle}`,
      body,
    });
    return `mailto:${toEmail}?${params.toString()}`;
  }, [toEmail, jobTitle, name, email, phone, coverLetter]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }
      // Check file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        alert("Please upload a PDF or Word document");
        return;
      }
      setResumeFile(file);
    }
  };

  const inputClass =
    "h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100";

  const isValid = name && email && phone && coverLetter;

  return (
    <div className="mt-6 grid gap-4">
      <label className="grid gap-1.5">
        <span className="text-xs font-semibold text-slate-700">
          Full Name <span className="text-brand-red-500">*</span>
        </span>
        <input
          className={inputClass}
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-xs font-semibold text-slate-700">
            Email <span className="text-brand-red-500">*</span>
          </span>
          <input
            className={inputClass}
            placeholder="you@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="grid gap-1.5">
          <span className="text-xs font-semibold text-slate-700">
            Phone / WhatsApp <span className="text-brand-red-500">*</span>
          </span>
          <input
            className={inputClass}
            placeholder="+234 800 000 0000"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
      </div>

      <label className="grid gap-1.5">
        <span className="text-xs font-semibold text-slate-700">
          Cover Letter / Why You're a Great Fit{" "}
          <span className="text-brand-red-500">*</span>
        </span>
        <textarea
          className="min-h-32 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100"
          placeholder="Tell us why you're interested in this role and what makes you a great fit..."
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          required
        />
      </label>

      <label className="grid gap-1.5">
        <span className="text-xs font-semibold text-slate-700">
          Resume / CV (Optional)
        </span>
        <div className="relative">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
            id="resume-upload"
          />
          <label
            htmlFor="resume-upload"
            className="flex h-11 cursor-pointer items-center justify-between rounded-xl border border-slate-200 px-4 text-sm transition hover:border-brand-blue-400 hover:bg-slate-50"
          >
            <span className="text-slate-500">
              {resumeFile ? resumeFile.name : "Choose file (PDF or Word, max 5MB)"}
            </span>
            {resumeFile ? (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setResumeFile(null);
                }}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            ) : (
              <Upload className="h-4 w-4 text-slate-400" />
            )}
          </label>
        </div>
        <p className="text-xs text-slate-500">
          You can also send your resume directly via email or WhatsApp
        </p>
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={isValid ? waHref : undefined}
          onClick={(e) => {
            if (!isValid) e.preventDefault();
          }}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full py-3 px-5 text-sm font-semibold transition ${
            isValid
              ? "bg-[#25D366] text-white hover:bg-[#1ebe5d] shadow-sm"
              : "cursor-not-allowed bg-slate-100 text-slate-400"
          }`}
        >
          <MessageCircle className="h-4 w-4" />
          Apply via WhatsApp
        </a>
        <a
          href={isValid ? mailtoHref : undefined}
          onClick={(e) => {
            if (!isValid) e.preventDefault();
          }}
          className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full border py-3 px-5 text-sm font-semibold transition ${
            isValid
              ? "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-sm"
              : "cursor-not-allowed border-slate-100 bg-white text-slate-400"
          }`}
        >
          <Mail className="h-4 w-4" />
          Apply via Email
        </a>
      </div>

      <p className="text-xs text-slate-400">
        Fill in all required fields, then choose how to send your application. WhatsApp
        gets the fastest reply.
      </p>
    </div>
  );
}
