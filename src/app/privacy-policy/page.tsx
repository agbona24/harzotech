import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Harzotech Nig Ltd. Learn how we collect, use, and protect your personal information when you use our website and services.",
};

const EFFECTIVE_DATE = "14 May 2025";
const LAST_UPDATED   = "14 May 2025";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        description="How Harzotech Nig Ltd collects, uses, and protects your information."
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

              <h2>1. Who We Are</h2>
              <p>
                Harzotech Nig Ltd (&ldquo;Harzotech&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or
                &ldquo;us&rdquo;) is a technology and digital solutions company registered in Nigeria,
                with offices at The Waterside, 5 Admiralty Road off Admiralty Way, Lekki, Lagos, Nigeria.
                We build websites, custom software, AI automation systems, and digital marketing solutions
                for businesses.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard information when
                you visit <strong>harzotech.com</strong> or engage with our services. Please read it
                carefully. If you disagree with any part of this policy, please discontinue use of our
                website.
              </p>

              <h2>2. Information We Collect</h2>

              <h3>2.1 Information You Provide Directly</h3>
              <p>We collect information you voluntarily provide when you:</p>
              <ul>
                <li>Fill in a contact, inquiry, or project wizard form</li>
                <li>Request a free website audit</li>
                <li>Apply for a job or partnership</li>
                <li>Communicate with us via WhatsApp, email, or phone</li>
              </ul>
              <p>This may include your <strong>full name, email address, phone number, company name,
              website URL, and a description of your project or enquiry.</strong></p>

              <h3>2.2 Information Collected Automatically</h3>
              <p>When you visit our website, certain data is collected automatically via cookies and
              third-party analytics tools, including:</p>
              <ul>
                <li>IP address and approximate geographic location</li>
                <li>Browser type and version, device type, operating system</li>
                <li>Pages visited, time spent, and navigation paths</li>
                <li>Referring website or search query that brought you to us</li>
                <li>Interactions with buttons, forms, and page elements</li>
              </ul>

              <h3>2.3 Information from Third-Party Tools</h3>
              <p>We use the following third-party services on our website. Each service has its own
              privacy policy and may independently collect data:</p>
              <ul>
                <li><strong>Google Analytics 4 (GA4)</strong> — Website traffic and behaviour analytics</li>
                <li><strong>Google Tag Manager (GTM)</strong> — Tag and script management</li>
                <li><strong>Meta (Facebook) Pixel</strong> — Advertising measurement and retargeting</li>
                <li><strong>WhatsApp Business (Meta)</strong> — Customer communication</li>
                <li><strong>Google Sheets (via Apps Script)</strong> — Internal lead management</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your enquiries and deliver requested services</li>
                <li>Send you a project proposal, quote, or audit report</li>
                <li>Manage and qualify incoming leads internally</li>
                <li>Send service updates, invoices, or project communications (no spam)</li>
                <li>Improve our website, content, and service offerings</li>
                <li>Measure the effectiveness of our marketing campaigns</li>
                <li>Show you relevant advertisements on Facebook/Instagram if you have visited
                our website (retargeting)</li>
                <li>Comply with applicable Nigerian law and regulations</li>
              </ul>
              <p>
                We do <strong>not</strong> sell, rent, or trade your personal information to any
                third party for their own marketing purposes.
              </p>

              <h2>4. Legal Basis for Processing</h2>
              <p>We process your personal data on the following bases:</p>
              <ul>
                <li><strong>Consent</strong> — when you voluntarily submit a form or contact us</li>
                <li><strong>Legitimate interests</strong> — to improve our services and marketing
                effectiveness, provided this does not override your rights</li>
                <li><strong>Contractual necessity</strong> — to deliver services you have engaged us for</li>
                <li><strong>Legal obligation</strong> — where required by Nigerian law</li>
              </ul>

              <h2>5. Cookies</h2>
              <p>
                Our website uses cookies — small text files stored on your device — to enable website
                functionality and analytics. Cookies we use include:
              </p>
              <ul>
                <li><strong>Essential cookies</strong> — required for the website to function (e.g. session management)</li>
                <li><strong>Analytics cookies</strong> — placed by Google Analytics to understand how visitors use the site</li>
                <li><strong>Advertising cookies</strong> — placed by Meta Pixel to support ad measurement and retargeting</li>
              </ul>
              <p>
                You can disable or delete cookies through your browser settings at any time. Note that
                disabling cookies may affect how parts of the website behave.
              </p>

              <h2>6. Data Sharing and Disclosure</h2>
              <p>We may share your information only in the following circumstances:</p>
              <ul>
                <li><strong>Service providers</strong> — trusted third-party tools (Google, Meta) used to
                operate our website and business. These providers are bound by their own privacy terms.</li>
                <li><strong>Legal requirements</strong> — if required by law, court order, or government
                authority in Nigeria.</li>
                <li><strong>Business transfer</strong> — in the event of a merger, acquisition, or sale
                of assets, your data may be transferred as part of that transaction, with notice provided.</li>
              </ul>
              <p>
                We do not share your personal data with any other third parties beyond what is stated above.
              </p>

              <h2>7. Data Retention</h2>
              <p>
                We retain your personal data for as long as necessary to fulfil the purposes outlined in
                this policy, or as required by law. Specifically:
              </p>
              <ul>
                <li>Lead and enquiry records are kept for up to <strong>24 months</strong> from last contact</li>
                <li>Client project records are retained for <strong>5 years</strong> for accounting and
                contractual purposes</li>
                <li>Analytics data is governed by the respective tool&rsquo;s retention settings
                (GA4 default: 14 months)</li>
              </ul>
              <p>
                You may request deletion of your data at any time — see Section 9.
              </p>

              <h2>8. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal
                data against unauthorised access, alteration, disclosure, or destruction. These include
                HTTPS encryption on all web traffic, access controls on internal data stores, and
                restricted access to lead records.
              </p>
              <p>
                However, no method of transmission over the internet is 100% secure. While we strive to
                use commercially acceptable means to protect your information, we cannot guarantee
                absolute security.
              </p>

              <h2>9. Your Rights</h2>
              <p>
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul>
                <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
                <li><strong>Correction</strong> — request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion</strong> — request that we delete your personal data</li>
                <li><strong>Objection</strong> — object to processing based on legitimate interests</li>
                <li><strong>Opt-out of retargeting</strong> — manage your ad preferences via
                  <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer"> Facebook Ad Preferences</a> or
                  <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer"> Google Ad Settings</a>
                </li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:info@harzotech.com">info@harzotech.com</a>. We will respond within
                30 days.
              </p>

              <h2>10. Children&rsquo;s Privacy</h2>
              <p>
                Our website and services are not directed at children under the age of 13. We do not
                knowingly collect personal information from children. If you believe a child has
                submitted personal data to us, please contact us immediately and we will delete it.
              </p>

              <h2>11. Links to Other Websites</h2>
              <p>
                Our website may contain links to external websites including our SaaS products
                (Restovax, StayQuora, CliqPOS, FactoryPulse) and third-party resources. This Privacy
                Policy applies only to <strong>harzotech.com</strong>. We are not responsible for the
                privacy practices of any external site and encourage you to review their policies.
              </p>

              <h2>12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices
                or applicable law. When we do, we will update the &ldquo;Last updated&rdquo; date at the
                top of this page. We encourage you to review this page periodically.
              </p>

              <h2>13. Contact Us</h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or how we
                handle your data, please contact us:
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
