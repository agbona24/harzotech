import { site } from "@/data/site";

export function OrganizationSchema() {
  const baseUrl = `https://${site.domain}`;
  const organizationId = `${baseUrl}/#organization`;
  const serviceCatalogId = `${baseUrl}/#core-services-catalog`;
  const aiServiceId = `${baseUrl}/ai-automation#service`;
  const webServiceId = `${baseUrl}/website-development#service`;
  const softwareServiceId = `${baseUrl}/software-development#service`;

  const org = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": organizationId,
        name: site.legalName,
        alternateName: "Harzotech",
        description:
          "Harzotech Nig Ltd is a technology solutions company in Lagos, Nigeria, building websites, custom software, AI automation systems, IT support, and SEO services that help businesses grow.",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/logo.gif`,
          width: 120,
          height: 40,
        },
        image: `${baseUrl}/og-image.png`,
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
        hasOfferCatalog: {
          "@id": serviceCatalogId,
        },
        sameAs: [
          site.social.linkedin === "#" ? null : site.social.linkedin,
          site.social.instagram === "#" ? null : site.social.instagram,
          site.social.facebook === "#" ? null : site.social.facebook,
          site.social.x === "#" ? null : site.social.x,
        ].filter(Boolean),
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: site.contact.phone,
            email: site.contact.email,
            contactType: "customer service",
            availableLanguage: "English",
            areaServed: "NG",
          },
          {
            "@type": "ContactPoint",
            url: `${baseUrl}/contact`,
            contactType: "project inquiry form",
            availableLanguage: "English",
            areaServed: "NG",
          },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
            timeZone: "Africa/Lagos",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: site.legalName,
        description: site.description,
        publisher: { "@id": organizationId },
        inLanguage: "en-NG",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${baseUrl}/?q={search_term_string}`,
          },
          query_input: "required name=search_term_string",
        },
      },
      {
        "@type": "OfferCatalog",
        "@id": serviceCatalogId,
        name: "Core Technology Services",
        url: `${baseUrl}/services`,
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@id": aiServiceId },
            url: `${baseUrl}/ai-automation`,
          },
          {
            "@type": "Offer",
            itemOffered: { "@id": webServiceId },
            url: `${baseUrl}/website-development`,
          },
          {
            "@type": "Offer",
            itemOffered: { "@id": softwareServiceId },
            url: `${baseUrl}/software-development`,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": aiServiceId,
        name: "AI Automation & Workflow Systems",
        serviceType: "AI Automation",
        provider: { "@id": organizationId },
        areaServed: { "@type": "Country", name: "Nigeria" },
        url: `${baseUrl}/ai-automation`,
        description:
          "AI voice agents, WhatsApp automation, CRM workflows, and booking automation for Nigerian businesses.",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "NGN",
          lowPrice: "150000",
          highPrice: "1000000",
          offerCount: 6,
        },
      },
      {
        "@type": "Service",
        "@id": webServiceId,
        name: "Website Design & Development",
        serviceType: "Web Development",
        provider: { "@id": organizationId },
        areaServed: { "@type": "Country", name: "Nigeria" },
        url: `${baseUrl}/website-development`,
        description:
          "Conversion-focused, SEO-ready, and mobile-first website development services for Nigerian businesses.",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "NGN",
          lowPrice: "300000",
          highPrice: "2000000",
          offerCount: 6,
        },
      },
      {
        "@type": "Service",
        "@id": softwareServiceId,
        name: "Custom Software Development",
        serviceType: "Software Development",
        provider: { "@id": organizationId },
        areaServed: { "@type": "Country", name: "Nigeria" },
        url: `${baseUrl}/software-development`,
        description:
          "Custom CRM systems, portals, dashboards, and SaaS platforms built for business operations in Nigeria.",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "NGN",
          lowPrice: "500000",
          highPrice: "5000000",
          offerCount: 6,
        },
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
