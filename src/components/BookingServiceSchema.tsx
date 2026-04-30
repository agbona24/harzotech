interface BookingServiceProps {
  serviceName: string;
  url: string;
  serviceUrl?: string; // Where to book
}

export function BookingServiceSchema({ serviceName, url, serviceUrl }: BookingServiceProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#booking-service`,
    name: serviceName,
    url: serviceUrl || `${url}#booking`,
    serviceType: "Consultation & Project Booking",
    provider: {
      "@id": "https://harzotech.com.ng/#organization",
    },
    areaServed: [
      { "@type": "Country", name: "Nigeria" },
      { "@type": "City", name: "Lagos" },
      { "@type": "City", name: "Abuja" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://harzotech.com.ng/contact",
      servicePhone: "+234 70 6971 6822",
      serviceSmsNumber: "+234 70 6971 6822",
    },
    termsOfService: "https://harzotech.com.ng/terms-of-service",
    potentialAction: {
      "@type": "ReserveAction",
      name: "Book a Consultation",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://harzotech.com.ng/contact?intent=consultation",
        actionPlatform: ["DesktopWebPlatform", "MobileWebPlatform"],
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
