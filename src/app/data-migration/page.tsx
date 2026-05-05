import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { FAQSection } from "@/components/FAQSection";
import { MidPageCTA } from "@/components/MidPageCTA";
import { PageSchema } from "@/components/PageSchema";
import { RelatedServices } from "@/components/RelatedServices";
import { ServiceAnswerBlock } from "@/components/ServiceAnswerBlock";
import { FAQPageSchema } from "@/components/FAQPageSchema";
import { SpeakableSchema } from "@/components/SpeakableSchema";
import { BookingServiceSchema } from "@/components/BookingServiceSchema";
import {
  FileSpreadsheet,
  Server,
  Cloud,
  DatabaseZap,
  RefreshCw,
  Globe,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Database,
  GitMerge,
  Lock,
  ClipboardCheck,
  BarChart3,
  Cpu,
} from "lucide-react";

const FAQS = [
  {
    q: "What types of data can Harzotech migrate?",
    a: "We migrate business data from spreadsheets (Excel, Google Sheets), legacy desktop software, old databases, outdated CRM or ERP systems, e-commerce platforms, accounting software, and on-premise servers to modern cloud-based or custom software platforms.",
  },
  {
    q: "Will we lose any data during migration?",
    a: "No. Data integrity is our first priority. Before any migration, we run full audits of your existing data, identify and resolve inconsistencies, create verified backups, and run staged test migrations. Your live system is only switched over after every record has been validated.",
  },
  {
    q: "How long does a data migration project take?",
    a: "Timelines depend on data volume and complexity. A spreadsheet-to-software migration for a small business typically takes 1–3 weeks. A full legacy system migration with data transformation and cleansing can take 4–10 weeks. We provide a detailed timeline after reviewing your data structure.",
  },
  {
    q: "Can you migrate data with zero downtime?",
    a: "Yes, for most migrations we use a phased approach — migrating data in stages, running old and new systems in parallel, then cutting over at a low-traffic window. This ensures your business keeps operating throughout the process.",
  },
  {
    q: "Do you handle messy or inconsistent data?",
    a: "Yes. Most businesses have years of inconsistent, duplicate, or incomplete records. Our migration process includes data cleansing, deduplication, standardisation, and transformation — so what enters your new system is clean, structured, and reliable.",
  },
  {
    q: "Can you migrate a website from one hosting server to another?",
    a: "Yes. We handle full website migrations between hosting providers — including shared hosting, VPS, dedicated servers, and cloud platforms (AWS, DigitalOcean, Contabo, cPanel-to-cPanel). This includes migrating all files, databases, email accounts, DNS records, and SSL certificates, with zero downtime for your visitors.",
  },
  {
    q: "What if our old system has no export function?",
    a: "We handle this regularly. We can extract data directly from legacy databases, scrape structured data from old interfaces, or work with your vendor to retrieve data in usable formats. Very few situations block us from recovering your data.",
  },
];

export const metadata: Metadata = {
  title: "Data Migration Services in Nigeria — Hosting, Spreadsheet & Legacy System Migration",
  description:
    "Harzotech migrates business data from spreadsheets, legacy software, hosting servers, and old systems into modern platforms in Nigeria. Zero data loss, zero downtime, complete audit trail.",
  keywords: [
    "data migration Nigeria",
    "data migration company Lagos",
    "website migration Nigeria",
    "hosting migration Nigeria",
    "server migration Nigeria",
    "cPanel migration Nigeria",
    "legacy system migration Nigeria",
    "spreadsheet to software migration Nigeria",
    "database migration Nigeria",
    "cloud migration Nigeria",
    "CRM data migration Nigeria",
    "system migration company Lagos",
    "data transfer services Nigeria",
    "Harzotech data migration",
  ],
  openGraph: {
    title: "Data Migration Services in Nigeria — Hosting, Spreadsheet & Legacy System Migration",
    description:
      "Harzotech migrates business data from spreadsheets, legacy software, hosting servers, and old systems into modern platforms in Nigeria. Zero data loss, zero downtime.",
    url: "https://harzotech.com.ng/data-migration",
    siteName: "Harzotech Nig Ltd",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/data-migration/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Data Migration Services by Harzotech Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Migration Services in Nigeria — Legacy System & Cloud Migration",
    description:
      "Zero data loss migration from spreadsheets, legacy systems, and old software to modern platforms — by Harzotech Nigeria.",
    images: ["/data-migration/opengraph-image"],
  },
  alternates: { canonical: "https://harzotech.com.ng/data-migration" },
};

const MIGRATION_TYPES = [
  {
    icon: FileSpreadsheet,
    title: "Spreadsheet to Software",
    description:
      "Move years of Excel or Google Sheets data into a proper database, CRM, or business system — structured, searchable, and always accurate.",
    isRed: false,
  },
  {
    icon: Server,
    title: "Legacy System Migration",
    description:
      "Retire old desktop software, outdated ERPs, or end-of-life platforms and transfer all records into a modern, supported system.",
    isRed: true,
  },
  {
    icon: Cloud,
    title: "On-premise to Cloud",
    description:
      "Move your databases, file servers, and business applications from local hardware to secure, scalable cloud infrastructure.",
    isRed: false,
  },
  {
    icon: DatabaseZap,
    title: "Database Migration",
    description:
      "Migrate between database engines — MySQL, PostgreSQL, MongoDB, SQL Server, or cloud databases — with full schema and data transformation.",
    isRed: true,
  },
  {
    icon: RefreshCw,
    title: "Platform-to-Platform",
    description:
      "Switch CRM, e-commerce, accounting, or ERP platforms without losing history. We map, transform, and import your data into the new system.",
    isRed: false,
  },
  {
    icon: Globe,
    title: "Website & Hosting Migration",
    description:
      "Move your website, files, databases, email accounts, DNS records, and SSL certificates from one hosting provider to another — with zero downtime for your visitors.",
    isRed: true,
  },
];

const WHAT_WE_INCLUDE = [
  { icon: ClipboardCheck,  label: "Full data audit before migration" },
  { icon: ShieldCheck,     label: "Verified backup before every step" },
  { icon: Database,        label: "Data cleansing & deduplication" },
  { icon: GitMerge,        label: "Schema mapping & transformation" },
  { icon: CheckCircle2,    label: "Staged test migrations" },
  { icon: Lock,            label: "Encrypted data transfer" },
  { icon: BarChart3,       label: "Post-migration validation report" },
  { icon: Cpu,             label: "Parallel-run cutover option" },
  { icon: RefreshCw,       label: "Zero-downtime migration planning" },
  { icon: Globe,           label: "Hosting & server migration" },
  { icon: Cloud,           label: "Cloud or on-premise delivery" },
  { icon: CheckCircle2,    label: "Handover documentation" },
];

const PROCESS = [
  {
    number: "01",
    title: "Data Discovery",
    description:
      "We audit your existing data sources — spreadsheets, databases, old systems — map the structure, and identify quality issues.",
  },
  {
    number: "02",
    title: "Cleanse & Transform",
    description:
      "We clean duplicate, incomplete, and inconsistent records, then transform your data into the schema required by the target system.",
  },
  {
    number: "03",
    title: "Staged Migration",
    description:
      "We migrate in phases with test runs first. Every record is validated against the source before we proceed to the next stage.",
  },
  {
    number: "04",
    title: "Cutover & Verify",
    description:
      "Live switchover at minimal-disruption time, followed by a complete post-migration audit and signed-off validation report.",
  },
];

const STATS = [
  { value: "100%", label: "Data Integrity Guarantee" },
  { value: "0",    label: "Acceptable Data Loss" },
  { value: "10+",  label: "System Types Migrated" },
  { value: "24hr", label: "Avg. Cutover Window" },
];

export default function DataMigrationPage() {
  return (
    <div>
      <PageSchema
        service="Data Migration & Integration"
        url="https://harzotech.com.ng/data-migration"
        description="Data migration services in Nigeria — moving business data from spreadsheets, legacy systems, and old platforms into modern software. Zero data loss."
        breadcrumbs={[{ name: "Data Migration", url: "https://harzotech.com.ng/data-migration" }]}
      />
      <FAQPageSchema
        title="Data Migration Services FAQs"
        url="https://harzotech.com.ng/data-migration"
        faqs={FAQS}
      />
      <SpeakableSchema
        text="Data Migration & Integration. Harzotech moves business data from spreadsheets, legacy systems, and old platforms into modern software in Nigeria — with zero data loss, full validation, and minimal downtime."
        url="https://harzotech.com.ng/data-migration"
        cssSelector="h1, [data-speakable]"
      />
      <BookingServiceSchema
        serviceName="Data Migration Consultation"
        url="https://harzotech.com.ng/data-migration"
        serviceUrl="https://harzotech.com.ng/contact?intent=start-project"
      />

      <PageHeader
        eyebrow="Data Migration"
        title={
          <>
            Move Your Data.{" "}
            <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">
              Lose Nothing.
            </span>{" "}
            <span className="text-brand-blue-300">Start Fresh.</span>
          </>
        }
        description="Your business data is one of your most valuable assets. We migrate it from spreadsheets, outdated software, and legacy systems into modern platforms — completely, accurately, and with zero disruption to your operations."
        primaryCta={{ href: "/contact?intent=start-project", label: "Start Migration" }}
        secondaryCta={{ href: "/contact?intent=consultation", label: "Book a Consultation" }}
        bgImage="/hero.png"
      />

      {/* Stats strip */}
      <div className="border-b border-slate-100 bg-white">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-slate-100 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 py-7 px-4 text-center">
                <span className="text-3xl font-black tracking-tight text-brand-blue-700">{s.value}</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">{s.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <ServiceAnswerBlock
        answer="Harzotech Nig Ltd provides data migration services for businesses in Nigeria — moving data from Excel spreadsheets, legacy desktop software, old CRM and ERP systems, on-premise databases, and hosting servers into modern cloud-based or custom software platforms. We also migrate websites and files between hosting providers with zero downtime. Every migration includes full data audit, cleansing, transformation, staged testing, and post-migration validation."
        outcomes={[
          "Zero data loss — every record verified before cutover",
          "Website migrations with zero downtime for visitors",
          "Data cleansed and standardised during migration",
          "Full documentation and validation report on delivery",
        ]}
        signal="Data migration company — Nigeria"
      />

      {/* Migration Types */}
      <Section>
        <Container>
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="What We Migrate"
              title="Every common migration, handled end-to-end"
              description="Whether you're leaving a spreadsheet, retiring old software, or moving to the cloud — we have delivered it before."
              align="center"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {MIGRATION_TYPES.map((type) => {
                const Icon = type.icon;
                return (
                  <div
                    key={type.title}
                    className={`group relative flex flex-col gap-4 overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                      type.isRed
                        ? "border-brand-red-100 bg-brand-red-50/40 hover:border-brand-red-200 hover:shadow-brand-red-100"
                        : "border-brand-blue-100 bg-brand-blue-50/40 hover:border-brand-blue-200 hover:shadow-brand-blue-100"
                    }`}
                  >
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                        type.isRed
                          ? "bg-brand-red-100 text-brand-red-700"
                          : "bg-brand-blue-100 text-brand-blue-700"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-slate-950">{type.title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{type.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Why poor data migration hurts */}
      <Section className="bg-slate-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red-600">The Risk</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Bad migration costs more than no migration
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Many Nigerian businesses attempt data migrations themselves — or hire inexperienced vendors — and end up with duplicate records, missing history, broken relationships between data, and systems that staff don&apos;t trust.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Corrupted business data means wrong reports, bad decisions, and hours of manual cleanup. We eliminate that risk entirely through our structured, audited migration process.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                {[
                  "Years of customer history — preserved completely",
                  "Transaction records — validated to the last row",
                  "Relationships between records — mapped and maintained",
                  "Staff trust in the new system — earned from day one",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-navy-950 to-navy-800 p-8 text-white shadow-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue-300">Common causes of failed migrations</p>
              <div className="mt-6 flex flex-col gap-4">
                {[
                  { problem: "No pre-migration data audit", risk: "Corrupted records go in as-is" },
                  { problem: "No test migration run",        risk: "Errors discovered after cutover" },
                  { problem: "No backup before migration",   risk: "No recovery path if it fails" },
                  { problem: "Big-bang cutover",             risk: "Business stops during migration" },
                  { problem: "No post-migration validation", risk: "Missing data discovered weeks later" },
                ].map(({ problem, risk }) => (
                  <div key={problem} className="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <p className="text-sm font-semibold text-white">{problem}</p>
                    <p className="flex items-center gap-2 text-xs text-brand-red-300">
                      <ArrowRight className="h-3 w-3 shrink-0" />
                      {risk}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What's Included */}
      <Section>
        <Container>
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="What's Included"
              title="Every safeguard built into every migration"
              description="Our migration process is not a single step — it is a structured sequence of checks, tests, and validations."
              align="center"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {WHAT_WE_INCLUDE.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue-50">
                      <Icon className="h-4 w-4 text-brand-blue-700" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <MidPageCTA service="Data Migration" ctaLabel="Discuss Your Migration" ctaHref="/contact?intent=start-project" />

      {/* Process */}
      <Section>
        <Container>
          <div className="flex flex-col gap-14">
            <SectionHeading
              eyebrow="Our Process"
              title="How we migrate your data"
              description="A four-stage process designed to eliminate risk and give you complete confidence in your data from day one."
              align="center"
            />
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map((step, i) => (
                <div key={step.number} className="relative flex flex-col gap-4">
                  {i < PROCESS.length - 1 && (
                    <div className="absolute left-full top-7 hidden w-10 border-t border-dashed border-slate-300 lg:block" />
                  )}
                  <div className="flex items-center gap-3">
                    <span className="text-5xl font-black leading-none text-slate-100 select-none">{step.number}</span>
                    <div className="h-1 w-1 rounded-full bg-brand-blue-700" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-950">{step.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <FAQSection faqs={FAQS} eyebrow="Data Migration FAQ" />
      <RelatedServices exclude={["data-migration"]} />

      {/* Dark CTA */}
      <Section variant="dark">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue-700/40 bg-brand-blue-900/20 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-400" />
              <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-blue-300">Ready to migrate?</span>
            </div>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your data deserves a{" "}
              <span className="bg-gradient-to-r from-brand-blue-300 to-brand-red-400 bg-clip-text text-transparent">
                better home
              </span>
            </h2>
            <p className="max-w-xl text-base leading-8 text-slate-300">
              Tell us what you&apos;re running on today and where you want to go. We&apos;ll map out a migration plan that moves everything — safely and completely.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact?intent=start-project" variant="cta">Start Migration</ButtonLink>
              <ButtonLink href="/contact?intent=consultation" variant="outline-white">Book a Consultation</ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
