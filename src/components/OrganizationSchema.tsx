import { site } from "@/data/site";

export function OrganizationSchema() {
  const org = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": `https://${site.domain}/#organization`,
        name: site.legalName,
        alternateName: "Harzotech",
        description:
          "Harzotech Nig Ltd is a technology solutions company in Lagos, Nigeria, building websites, custom software, AI automation systems, IT support, and SEO services that help businesses grow.",
        url: `https://${site.domain}`,
        logo: {
          "@type": "ImageObject",
          url: `https://${site.domain}/logo.gif`,
          width: 120,
          height: 40,
        },
        image: `https://${site.domain}/og-image.png`,
        telephone: site.contact.phone,
        email: site.contact.email,
        foundingDate: "2014",
        numberOfEmployees: { "@type": "QuantitativeValue", minValue: 5, maxValue: 20 },
        priceRange: "₦₦",
        address: {
          "@type": "PostalAddress",
          streetAddress: "5 Admiralty Road off Admiralty Way",
          addressLocality: "Lekki",
          addressRegion: "Lagos",
          addressCountry: "NG",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 6.4355,
          longitude: 3.4512,
        },
        areaServed: [
          { "@type": "Country", name: "Nigeria" },
          { "@type": "City", name: "Lagos" },
          { "@type": "City", name: "Abuja" },
        ],
        serviceType: [
          "Website Design and Development",
          "Custom Software Development",
          "AI Automation and Workflow Systems",
          "Managed IT Support",
          "SEO and Digital Marketing",
          "Corporate Branding",
        ],
        sameAs: [
          site.social.linkedin === "#" ? null : site.social.linkedin,
          site.social.instagram === "#" ? null : site.social.instagram,
          site.social.facebook === "#" ? null : site.social.facebook,
          site.social.x === "#" ? null : site.social.x,
        ].filter(Boolean),
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.contact.phone,
          email: site.contact.email,
          contactType: "customer service",
          availableLanguage: "English",
          areaServed: "NG",
        },
      },
      {
        "@type": "WebSite",
        "@id": `https://${site.domain}/#website`,
        url: `https://${site.domain}`,
        name: site.legalName,
        description: site.description,
        publisher: { "@id": `https://${site.domain}/#organization` },
        inLanguage: "en-NG",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
    />
  );
}
