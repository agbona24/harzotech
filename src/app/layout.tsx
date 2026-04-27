import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import { OrganizationSchema } from "@/components/OrganizationSchema";
import { FloatingWidgets } from "@/components/FloatingWidgets";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harzotech.com.ng"),
  title: {
    default: `${site.name} | Website, Software & AI Solutions in Nigeria`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "web development company Nigeria",
    "website design company Lagos",
    "software development company Nigeria",
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
    url: "https://harzotech.com.ng",
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
        <OrganizationSchema />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  );
}
