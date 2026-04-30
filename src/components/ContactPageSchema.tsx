import { site } from "@/data/site";

export function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://harzotech.com.ng/contact#contactpage",
        url: "https://harzotech.com.ng/contact",
        name: "Contact Harzotech",
        description:
          "Start a website, software, or AI project with Harzotech, or book a free strategy consultation.",
        isPartOf: {
          "@id": "https://harzotech.com.ng/#website",
        },
      },
      {
        "@type": "WebForm",
        "@id": "https://harzotech.com.ng/contact#contact-form",
        name: "Project Inquiry Form",
        url: "https://harzotech.com.ng/contact",
        description: "Submit a project inquiry to start working with Harzotech.",
        potentialAction: {
          "@type": "Action",
          name: "Submit Project Inquiry",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://harzotech.com.ng/contact",
            actionPlatform: ["DesktopWebPlatform", "MobileWebPlatform"],
          },
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
