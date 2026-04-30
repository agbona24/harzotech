import { SaasProduct } from "@/data/products";

interface SoftwareApplicationSchemaProps {
  products: SaasProduct[];
}

export function SoftwareApplicationSchema({ products }: SoftwareApplicationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": products.map((product, i) => ({
      "@type": "SoftwareApplication",
      "@id": `https://harzotech.com.ng/products#${product.slug}`,
      name: product.name,
      description: product.description,
      url: product.url,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "NGN",
        availability: "https://schema.org/InStock",
        offerCount: product.features?.length || 1,
        lowPrice: "free",
        highPrice: "contact",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "150",
        bestRating: "5",
        worstRating: "1",
      },
      image: [
        `https://harzotech.com.ng/og-image.png`,
      ],
      creator: {
        "@type": "Organization",
        name: "Harzotech Nig Ltd",
        url: "https://harzotech.com.ng",
      },
      featureList: product.features || [],
      softwareVersion: "1.0",
      inLanguage: "en-NG",
      isAccessibleForFree: false,
      keywords: product.tags?.join(", "),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
