interface FAQItem {
  q: string;
  a: string;
}

interface FAQPageSchemaProps {
  title: string;
  url: string;
  faqs: FAQItem[];
}

export function FAQPageSchema({ title, url, faqs }: FAQPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq-page`,
    url,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
