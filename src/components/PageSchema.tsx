const BASE = "https://harzotech.com.ng";
const ORG_ID = `${BASE}/#organization`;

interface PageSchemaProps {
  /** Human-readable service name, e.g. "Website Design & Development" */
  service: string;
  /** Absolute URL of this page */
  url: string;
  /** Short description for the Service entity */
  description: string;
  /** Breadcrumb trail — home is always prepended automatically */
  breadcrumbs: { name: string; url: string }[];
}

export function PageSchema({ service, url, description, breadcrumbs }: PageSchemaProps) {
  const allCrumbs = [{ name: "Home", url: BASE }, ...breadcrumbs];

  const graph = [
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: service,
      description,
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "Country", name: "Nigeria" },
        { "@type": "City", name: "Lagos" },
      ],
      url,
    },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: service,
      description,
      isPartOf: { "@id": `${BASE}/#website` },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: allCrumbs.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
