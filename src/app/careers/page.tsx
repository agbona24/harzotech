import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { PageSchema } from "@/components/PageSchema";
import { JobApplicationForm } from "@/components/JobApplicationForm";
import { activeJobs } from "@/data/jobs";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle2,
  Target,
  TrendingUp,
  Gift,
  Users,
  Rocket,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at Harzotech | Join Our Growing Team",
  description:
    "Join Harzotech and be part of Nigeria's leading technology and business growth partner. We're hiring talented individuals for roles in business development and content creation.",
  alternates: { canonical: "https://harzotech.com.ng/careers" },
};

export default function CareersPage() {
  return (
    <main>
      <PageSchema
        title="Careers at Harzotech"
        description="Join Harzotech and be part of Nigeria's leading technology and business growth partner. We're hiring talented individuals for roles in business development and content creation."
        url="/careers"
      />

      <PageHeader
        eyebrow="Join Our Team"
        title="Build Your Career at Harzotech"
        description="We're looking for talented, driven individuals who want to grow with us and help businesses transform through technology."
      />

      {/* Why Join Harzotech */}
      <Section background="white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Why Work at Harzotech?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We're building something special—a team that combines technology, strategy,
              and growth to help businesses succeed.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-100">
                <Rocket className="h-6 w-6 text-brand-blue-700" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Real Growth Opportunities
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                We invest in your development with hands-on experience, mentorship, and
                clear paths for advancement.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-100">
                <Users className="h-6 w-6 text-brand-blue-700" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Collaborative Culture
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Work with a team that values your ideas, supports your growth, and
                celebrates wins together.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-100">
                <TrendingUp className="h-6 w-6 text-brand-blue-700" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Performance-Based Bonuses
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Your success is our success. Earn bonuses and incentives based on your
                performance and contributions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-100">
                <Heart className="h-6 w-6 text-brand-blue-700" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Flexible Work Environment
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Choose between remote or on-site work arrangements that fit your
                lifestyle and productivity.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-100">
                <Target className="h-6 w-6 text-brand-blue-700" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Impactful Work
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Work on real projects that help businesses grow, transform, and achieve
                their goals.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-100">
                <Gift className="h-6 w-6 text-brand-blue-700" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Learning & Development
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Access to tools, resources, and training to help you stay ahead in your
                field.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Open Positions */}
      <Section background="slate">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Open Positions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We currently have {activeJobs.length} open position
              {activeJobs.length !== 1 ? "s" : ""} available.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {activeJobs.map((job) => (
              <div
                key={job.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                {/* Job Header */}
                <div className="border-b border-slate-100 bg-gradient-to-br from-brand-blue-50 to-white p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{job.title}</h3>
                      <p className="mt-2 text-slate-600">{job.department}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
                        <Clock className="h-3.5 w-3.5" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm">
                        <DollarSign className="h-3.5 w-3.5" />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="p-6 sm:p-8">
                  <div className="grid gap-8 lg:grid-cols-2">
                    <div className="space-y-6">
                      <div>
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                          <Briefcase className="h-5 w-5 text-brand-blue-700" />
                          Overview
                        </h4>
                        <p className="mt-3 text-slate-600">{job.description}</p>
                      </div>

                      <div>
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                          <CheckCircle2 className="h-5 w-5 text-brand-blue-700" />
                          Key Responsibilities
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {job.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue-700" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                          <Target className="h-5 w-5 text-brand-blue-700" />
                          Performance Expectations
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {job.performanceExpectations.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                          <Users className="h-5 w-5 text-brand-blue-700" />
                          Requirements
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {job.requirements.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                          <Gift className="h-5 w-5 text-brand-blue-700" />
                          What You'll Gain
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {job.benefits.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-xl border border-brand-blue-100 bg-brand-blue-50 p-4">
                        <h4 className="text-sm font-semibold text-brand-blue-900">
                          💼 Work Structure
                        </h4>
                        <ul className="mt-2 space-y-1 text-sm text-brand-blue-700">
                          <li>
                            <strong>Location:</strong> {job.location}
                          </li>
                          <li>
                            <strong>Salary:</strong> {job.salary}
                          </li>
                          <li>
                            <strong>Type:</strong> {job.type}
                          </li>
                          <li className="pt-1">
                            <strong>Performance-based bonuses available</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Application Form */}
                  <div className="mt-8 border-t border-slate-100 pt-8">
                    <h4 className="text-xl font-semibold text-slate-900">
                      Apply for this Position
                    </h4>
                    <p className="mt-2 text-slate-600">
                      Fill out the form below and we'll get back to you as soon as
                      possible.
                    </p>
                    <JobApplicationForm jobTitle={job.title} toEmail={job.applyEmail} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section background="white">
        <Container>
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-blue-50 via-white to-brand-red-50 p-8 text-center shadow-sm sm:p-12">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Don't See a Perfect Match?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              We're always looking for talented individuals. Send us your CV at{" "}
              <a
                href="mailto:hr@harzotech.com.ng"
                className="font-semibold text-brand-blue-700 hover:text-brand-blue-600"
              >
                hr@harzotech.com.ng
              </a>{" "}
              and tell us what you're great at.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
