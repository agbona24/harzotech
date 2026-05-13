export function AboutPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://harzotech.com/about#aboutpage",
    url: "https://harzotech.com/about",
    name: "About Harzotech",
    description:
      "Harzotech Nig Ltd is a technology solutions company in Lagos, Nigeria, building websites, software, AI automation systems, and IT support for business growth.",
    isPartOf: {
      "@id": "https://harzotech.com/#website",
    },
    mainEntity: {
      "@id": "https://harzotech.com/#organization",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
