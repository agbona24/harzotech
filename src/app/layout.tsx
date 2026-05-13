import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import { OrganizationSchema } from "@/components/OrganizationSchema";
import { FloatingWidgets } from "@/components/FloatingWidgets";
import { ScrollPrompt } from "@/components/ScrollPrompt";

const META_PIXEL_ID = "945821809664924";
const GA_ID  = "G-D9LL0BH829";
const GTM_ID = "GTM-MNK97CMG";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harzotech.com"),
  title: {
    default: `${site.name} | Website, Software & AI Solutions in Nigeria`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "web agency Nigeria",
    "web agency Lagos",
    "best web agency Nigeria",
    "top web agency in Nigeria",
    "software development firm Nigeria",
    "software development firm Lagos",
    "best software development firm Nigeria",
    "AI automation firm Nigeria",
    "AI automation company Nigeria",
    "best AI automation firm Nigeria",
    "web development company Nigeria",
    "website design company Lagos",
    "software development company Nigeria",
    "digital agency Nigeria",
    "digital agency Lagos",
    "technology agency Nigeria",
    "AI automation Nigeria",
    "WhatsApp automation Nigeria",
    "custom software development Nigeria",
    "IT support company Lagos",
    "SEO company Nigeria",
    "digital marketing agency Nigeria",
    "business automation solutions Nigeria",
    "tech company Lagos",
    "AI voice agent Nigeria",
    "CRM development Nigeria",
    "e-commerce website Nigeria",
    "Harzotech",
  ],
  openGraph: {
    title: `${site.name} | Website, Software & AI Solutions in Nigeria`,
    description: site.description,
    url: "https://harzotech.com",
    siteName: site.name,
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Harzotech Nig Ltd — Technology Solutions Built to Help Businesses Grow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Website, Software & AI Solutions in Nigeria`,
    description: site.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-950 overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0" width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <OrganizationSchema />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWidgets />
        <ScrollPrompt />

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>

        {/* Google Analytics 4 */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}</Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
          (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','${META_PIXEL_ID}');
          fbq('track','PageView');
        `}</Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1" width="1" style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
