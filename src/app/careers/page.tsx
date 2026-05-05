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
  CheckCircle2,
  Target,
  TrendingUp,
  Gift,
  Users,
  Rocket,
  Heart,
  Sparkles,
  ArrowRight,
  Award,
  Zap,
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
        service="Careers at Harzotech"
        url="https://harzotech.com.ng/careers"
        description="Join Harzotech and be part of Nigeria's leading technology and business growth partner. We're hiring talented individuals for roles in business development and content creation."
        breadcrumbs={[{ name: "Careers", url: "https://harzotech.com.ng/careers" }]}
      />

      <PageHeader
        eyebrow="Join Our Team"
        title="Build Your Career at Harzotech"
        description="We're looking for talented, driven individuals who want to grow with us and help businesses transform through technology."
      />

      {/* Stats Section */}
      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-blue-50 to-white p-6 transition-all hover:shadow-lg">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand-blue-100 opacity-50 blur-2xl transition-all group-hover:scale-150" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-700 text-white shadow-lg">
                  <Award className="h-6 w-6" />
                </div>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-slate-900">10+</div>
                  <div className="mt-1 text-sm font-medium text-slate-600">Years in Business</div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-red-50 to-white p-6 transition-all hover:shadow-lg">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand-red-100 opacity-50 blur-2xl transition-all group-hover:scale-150" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red-600 text-white shadow-lg">
                  <Rocket className="h-6 w-6" />
                </div>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-slate-900">50+</div>
                  <div className="mt-1 text-sm font-medium text-slate-600">Projects Delivered</div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-green-50 to-white p-6 transition-all hover:shadow-lg">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-green-100 opacity-50 blur-2xl transition-all group-hover:scale-150" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-white shadow-lg">
                  <Users className="h-6 w-6" />
                </div>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-slate-900">{activeJobs.length}</div>
                  <div className="mt-1 text-sm font-medium text-slate-600">Open Positions</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Join Harzotech */}
      <Section className="bg-slate-50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue-200 bg-brand-blue-50 px-4 py-1.5 text-sm font-semibold text-brand-blue-700">
              <Sparkles className="h-4 w-4" />
              Why Harzotech?
            </div>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              What Makes Us Different
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We're building something special—a team that combines technology, strategy,
              and growth to help businesses succeed.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue-500 to-brand-blue-700 shadow-lg">
                  <Rocket className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  Real Growth Opportunities
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  We invest in your development with hands-on experience, mentorship, and
                  clear paths for advancement.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 shadow-lg">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  Collaborative Culture
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Work with a team that values your ideas, supports your growth, and
                  celebrates wins together.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-700 shadow-lg">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  Performance-Based Bonuses
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Your success is our success. Earn bonuses and incentives based on your
                  performance and contributions.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-pink-700 shadow-lg">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  Flexible Work Environment
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Choose between remote or on-site work arrangements that fit your
                  lifestyle and productivity.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 shadow-lg">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  Impactful Work
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Work on real projects that help businesses grow, transform, and achieve
                  their goals.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-lg">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  Learning & Development
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Access to tools, resources, and training to help you stay ahead in your
                  field.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Open Positions */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-700">
              <Briefcase className="h-4 w-4" />
              Now Hiring
            </div>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Open Positions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We currently have {activeJobs.length} exciting opportunity
              {activeJobs.length !== 1 ? "ies" : "y"} for talented individuals to join our team.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {activeJobs.map((job, idx) => (
              <div
                key={job.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all hover:shadow-2xl"
              >
                {/* Decorative gradient */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue-500 via-purple-500 to-brand-red-500" />
                
                {/* Job Header */}
                <div className="relative border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8">
                  <div className="absolute right-6 top-6 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600 animate-pulse" />
                      Active
                    </span>
                  </div>
                  
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-brand-blue-100 px-3 py-1 text-xs font-semibold text-brand-blue-700">
                      {job.department}
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                      {job.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                        <Clock className="h-4 w-4 text-slate-400" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="p-6 sm:p-8">
                  {/* Overview with better visual treatment */}
                  <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue-500 to-brand-blue-700 shadow-lg">
                        <Briefcase className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900">Role Overview</h4>
                        <p className="mt-2 leading-relaxed text-slate-600">{job.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-8 lg:grid-cols-2">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                            <CheckCircle2 className="h-4 w-4 text-blue-600" />
                          </div>
                          Key Responsibilities
                        </h4>
                        <ul className="mt-4 space-y-3">
                          {job.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600">
                              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue-100">
                                <div className="h-2 w-2 rounded-full bg-brand-blue-600" />
                              </div>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100">
                            <Target className="h-4 w-4 text-red-600" />
                          </div>
                          Performance Expectations
                        </h4>
                        <ul className="mt-4 space-y-3">
                          {job.performanceExpectations.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600">
                              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100">
                                <div className="h-2 w-2 rounded-full bg-brand-red-600" />
                              </div>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
                            <Users className="h-4 w-4 text-green-600" />
                          </div>
                          Requirements
                        </h4>
                        <ul className="mt-4 space-y-3">
                          {job.requirements.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600">
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
                            <Gift className="h-4 w-4 text-purple-600" />
                          </div>
                          What You'll Gain
                        </h4>
                        <ul className="mt-4 space-y-3">
                          {job.benefits.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600">
                              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100">
                                <Sparkles className="h-3 w-3 text-purple-600" />
                              </div>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Work Structure Card */}
                      <div className="overflow-hidden rounded-2xl border border-brand-blue-200 bg-gradient-to-br from-brand-blue-50 to-white p-5 shadow-sm">
                        <div className="flex items-center gap-2 text-brand-blue-900">
                          <Briefcase className="h-5 w-5" />
                          <h4 className="font-bold">Work Structure</h4>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium text-brand-blue-700">Location</span>
                            <span className="text-brand-blue-900">{job.location}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium text-brand-blue-700">Type</span>
                            <span className="text-brand-blue-900">{job.type}</span>
                          </div>
                          <div className="mt-3 rounded-lg bg-green-100 px-3 py-2 text-center text-xs font-bold text-green-800">
                            ✨ Competitive salary + performance bonuses
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Application Form Section */}
                  <div className="mt-10 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue-500 to-brand-blue-700 shadow-lg">
                        <ArrowRight className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900">
                          Ready to Apply?
                        </h4>
                        <p className="mt-1 text-sm text-slate-600">
                          Fill out the form below and we'll get back to you within 24-48 hours.
                        </p>
                      </div>
                    </div>
                    <JobApplicationForm jobTitle={job.title} toEmail={job.applyEmail} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section className="bg-slate-50">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-blue-600 via-brand-blue-700 to-brand-blue-800 p-8 text-center shadow-2xl sm:p-12">
            {/* Decorative elements */}
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white opacity-10 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-brand-red-500 opacity-20 blur-3xl" />
            
            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg">
                <Heart className="h-8 w-8 text-brand-blue-600" />
              </div>
              
              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                Don't See the Perfect Match?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                We're always looking for talented individuals who share our passion for technology and business growth.
              </p>
              
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="mailto:hr@harzotech.com.ng"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-blue-700 shadow-lg transition hover:scale-105 hover:shadow-xl"
                >
                  Send Your CV
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="mailto:hr@harzotech.com.ng"
                  className="text-sm font-medium text-blue-100 underline decoration-2 underline-offset-4 transition hover:text-white"
                >
                  hr@harzotech.com.ng
                </a>
              </div>
              
              <p className="mt-6 text-sm text-blue-200">
                Tell us about your skills, experience, and what excites you about joining Harzotech
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
