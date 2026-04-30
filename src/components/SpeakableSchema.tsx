interface SpeakableProps {
  text: string; // Main readable text for voice assistant to read aloud
  url: string; // Page URL
  cssSelector?: string; // Optional CSS selector for the speakable content
}

export function SpeakableSchema({ text, url, cssSelector }: SpeakableProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    speakable: {
      "@type": "SpeakableSpecification",
      xpath: cssSelector ? `[${cssSelector}]` : "/html/head/title",
      cssSelector: cssSelector || "h1, p",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
