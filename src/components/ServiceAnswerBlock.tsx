import { Container } from "@/components/Container";
import { CheckCircle2 } from "lucide-react";

interface ServiceAnswerBlockProps {
  /** One direct sentence: what this service IS */
  answer: string;
  /** 3–4 short outcome bullets */
  outcomes: string[];
  /** The who/where signal for local + AI SEO */
  signal: string;
}

export function ServiceAnswerBlock({ answer, outcomes, signal }: ServiceAnswerBlockProps) {
  return (
    <div className="border-b border-slate-200 bg-white py-8">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-10">
          {/* Direct answer — what AI systems cite */}
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-600 mb-2">
              At a Glance
            </p>
            <p className="text-base font-semibold leading-7 text-slate-800">
              {answer}
            </p>
            <p className="mt-1 text-sm text-slate-500">{signal}</p>
          </div>

          {/* Outcomes */}
          <div className="sm:w-72 shrink-0">
            <ul className="grid gap-1.5">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-600" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
