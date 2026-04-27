import { site } from "@/data/site";

export function OrganizationSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: `https://${site.domain}`,
    email: site.contact.email,
    telephone: site.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.addressLines.join(" ").replace(/\s+/g, " ").trim(),
      addressLocality: "Lekki",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
