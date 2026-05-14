import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Harzotech Nig Ltd. Read our terms governing website use, service agreements, payments, deliverables, and intellectual property.",
};

const EFFECTIVE_DATE = "14 May 2025";
const LAST_UPDATED   = "14 May 2025";

export default function TermsOfServicePage() {
  return (
    <div>
      <PageHeader
        title="Terms of Service"
        description="The terms and conditions governing your use of Harzotech's website and services."
      />
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-sm text-slate-500">
              Effective date: {EFFECTIVE_DATE} &nbsp;·&nbsp; Last updated: {LAST_UPDATED}
            </p>

            <div className="prose prose-slate prose-sm sm:prose-base max-w-none
              prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-slate-950
              prose-p:text-slate-600 prose-li:text-slate-600 prose-a:text-brand-blue-600
              prose-a:no-underline hover:prose-a:underline">

              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing <strong>harzotech.com</strong> or engaging Harzotech Nig Ltd
                (&ldquo;Harzotech&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;)
                for any service, you agree to be bound by these Terms of Service. If you do not agree,
                please do not use our website or services.
              </p>
              <p>
                These Terms apply to all visitors, clients, and any other party who accesses our website
                or engages us for a project. For ongoing client projects, these Terms are supplemented by
                a project-specific proposal or contract which takes precedence where terms conflict.
              </p>

              <h2>2. Services</h2>
              <p>Harzotech provides the following categories of services:</p>
              <ul>
                <li>Website design and development</li>
                <li>Custom software development</li>
                <li>AI automation and workflow systems</li>
                <li>IT support and managed services</li>
                <li>SEO and digital marketing</li>
                <li>Corporate identity and branding</li>
                <li>Business application development</li>
              </ul>
              <p>
                The specific scope, deliverables, timeline, and pricing for each engagement are defined
                in a written proposal or statement of work agreed between both parties before work begins.
                We reserve the right to decline any project at our discretion.
              </p>

              <h2>3. Project Engagement Process</h2>
              <p>A typical Harzotech engagement follows these steps:</p>
              <ol>
                <li><strong>Enquiry & Discovery</strong> — you contact us via the website, WhatsApp, or email. We gather your requirements.</li>
                <li><strong>Proposal</strong> — we provide a written proposal outlining scope, deliverables, timeline, and cost.</li>
                <li><strong>Agreement</strong> — both parties confirm acceptance of the proposal (written or electronic confirmation).</li>
                <li><strong>Deposit</strong> — work begins only after receipt of the agreed deposit (typically 50% of project total).</li>
                <li><strong>Delivery & Review</strong> — deliverables are provided for client review and feedback.</li>
                <li><strong>Final Payment & Handover</strong> — remaining balance is due before final assets, source code, or login credentials are transferred.</li>
              </ol>

              <h2>4. Payment Terms</h2>
              <ul>
                <li>All prices are quoted in Nigerian Naira (₦) unless otherwise agreed in writing.</li>
                <li>A non-refundable deposit (minimum 50%) is required before project work commences.</li>
                <li>The remaining balance is due upon project completion, before final delivery or go-live.</li>
                <li>For ongoing retainer services (e.g. IT support, SEO, maintenance), invoices are issued monthly in advance and are due within 7 days of issue.</li>
                <li>Payments not received within 14 days of the due date may result in work being paused until payment is received.</li>
                <li>We accept bank transfer, online payment, and other methods as agreed per project.</li>
              </ul>

              <h2>5. Revisions and Change Requests</h2>
              <p>
                Each project proposal includes a defined number of revision rounds. Revisions are changes
                within the original agreed scope. Requests that fall outside the agreed scope — such as
                new features, additional pages, or significant redesigns — will be quoted separately as
                change requests and require written approval and additional payment before implementation.
              </p>

              <h2>6. Client Responsibilities</h2>
              <p>To ensure timely delivery, the client agrees to:</p>
              <ul>
                <li>Provide all required content (text, images, brand assets, credentials) promptly and by agreed deadlines</li>
                <li>Designate a single point of contact for approvals and feedback</li>
                <li>Provide timely feedback within agreed review windows (typically 5 business days)</li>
                <li>Ensure all materials provided to Harzotech are legally owned or licensed for use</li>
              </ul>
              <p>
                Project delays caused by the client (late content, delayed approvals, unresponsiveness)
                may result in revised timelines. Harzotech is not liable for delays caused by the client.
              </p>

              <h2>7. Intellectual Property</h2>

              <h3>7.1 Client-Owned Assets</h3>
              <p>
                Upon receipt of full and final payment, Harzotech transfers ownership of all custom
                deliverables created specifically for the client — including website code, design files,
                and written content — to the client.
              </p>

              <h3>7.2 Harzotech-Retained Rights</h3>
              <p>
                Harzotech retains ownership of all proprietary frameworks, tools, methodologies,
                boilerplate code, and reusable components developed independently of the client project.
                These may be used across multiple projects and are not transferred to any individual client.
              </p>

              <h3>7.3 Third-Party Assets</h3>
              <p>
                If a project incorporates third-party assets (fonts, stock imagery, plugins, open-source
                libraries), their licenses remain with the respective rights holders. The client is
                responsible for ongoing compliance with those licenses after project handover.
              </p>

              <h3>7.4 Portfolio Rights</h3>
              <p>
                Harzotech reserves the right to display completed work in our portfolio and marketing
                materials unless the client requests in writing that the project remain confidential.
              </p>

              <h2>8. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential any sensitive business information shared during
                an engagement (pricing, trade secrets, proprietary processes). Harzotech will not
                disclose client information to third parties except as required to deliver the service
                (e.g. a third-party hosting provider) or as required by law.
              </p>

              <h2>9. Warranties and Disclaimers</h2>
              <p>
                Harzotech warrants that all work will be performed with reasonable skill and care in
                accordance with industry standards. We provide a <strong>30-day post-launch warranty</strong>{" "}
                on all website and software projects, covering bugs and defects within the originally
                agreed scope at no additional charge.
              </p>
              <p>
                Beyond this period, ongoing support is available under a separate maintenance agreement.
                We do not warrant that deliverables will be error-free indefinitely, or that third-party
                services (hosting, payment gateways, APIs) integrated into the project will remain
                available or unchanged.
              </p>
              <p>
                Our website and its content are provided &ldquo;as is&rdquo; without warranties of any
                kind, express or implied. We do not guarantee that the website will be uninterrupted
                or error-free at all times.
              </p>

              <h2>10. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by Nigerian law, Harzotech&rsquo;s total liability for
                any claim arising from a project engagement shall not exceed the total amount paid by
                the client for that specific project.
              </p>
              <p>
                Harzotech is not liable for any indirect, incidental, consequential, or punitive damages,
                including but not limited to loss of revenue, loss of data, or business interruption,
                even if we have been advised of the possibility of such damages.
              </p>

              <h2>11. Cancellation and Refunds</h2>
              <ul>
                <li>Deposits are non-refundable once project work has commenced.</li>
                <li>If the client cancels a project after work has begun, payment is due for all work
                completed up to the date of cancellation, calculated pro-rata against the agreed
                project total.</li>
                <li>If Harzotech is unable to complete a project for reasons within our control, a fair
                refund of the unearned portion of any payment will be issued.</li>
                <li>Retainer services may be cancelled with 30 days written notice. No refund is issued
                for the current billing period.</li>
              </ul>

              <h2>12. Website Use</h2>
              <p>By using harzotech.com, you agree to:</p>
              <ul>
                <li>Use the website only for lawful purposes</li>
                <li>Not attempt to gain unauthorised access to any part of the website or its infrastructure</li>
                <li>Not reproduce, redistribute, or republish any content from this website without
                written permission</li>
                <li>Not use automated tools, scrapers, or bots to extract data from our website</li>
              </ul>
              <p>
                We reserve the right to restrict access to our website at any time without notice.
              </p>

              <h2>13. Third-Party Links</h2>
              <p>
                Our website contains links to third-party websites and our affiliated SaaS products
                (Restovax, StayQuora, CliqPOS, FactoryPulse). These links are provided for your
                convenience. Harzotech is not responsible for the content, availability, or privacy
                practices of any third-party site.
              </p>

              <h2>14. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of the Federal
                Republic of Nigeria. Any disputes arising from these Terms or from a service engagement
                shall be subject to the exclusive jurisdiction of the courts of Lagos State, Nigeria.
              </p>
              <p>
                Both parties agree to attempt to resolve disputes amicably through good-faith negotiation
                before initiating formal legal proceedings.
              </p>

              <h2>15. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the
                top of this page will reflect any changes. Continued use of the website or our services
                after changes are posted constitutes acceptance of the revised Terms.
              </p>

              <h2>16. Contact</h2>
              <p>
                For questions or concerns about these Terms, please contact us:
              </p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:info@harzotech.com">info@harzotech.com</a></li>
                <li><strong>Phone / WhatsApp:</strong> <a href="tel:+2347069716822">+234 70 6971 6822</a></li>
                <li><strong>Address:</strong> The Waterside, 5 Admiralty Road off Admiralty Way, Lekki, Lagos, Nigeria</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
