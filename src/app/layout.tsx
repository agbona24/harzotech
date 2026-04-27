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
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Web development company in Nigeria",
    "Software development company in Nigeria",
    "AI automation company in Nigeria",
    "Website design company in Lagos",
    "IT support company in Lagos",
    "Business automation solutions in Nigeria",
    "Custom software development in Nigeria",
    "SEO company in Nigeria",
    "Digital transformation company in Nigeria",
    "WhatsApp automation for businesses",
    "AI voice agent development",
  ],
  openGraph: {
    title: site.name,
    description: site.description,
    url: "https://harzotech.com.ng",
    siteName: site.name,
    locale: "en_NG",
    type: "website",
  },
  alternates: {
    canonical: "/",
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
