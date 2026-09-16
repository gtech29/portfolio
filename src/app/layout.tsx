import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://juan-rodriguez.dev";
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Juan Rodriguez | Information Systems Security Engineer",
  description:
    "Juan Rodriguez is an Information Systems Security Engineer with a Computer Science background and experience in cybersecurity, systems integration, network analysis, secure systems validation, technical project delivery, and quality assurance.",
  alternates: { canonical: "/" },
  keywords: [
    "Information Systems Security Engineer",
    "ISSE",
    "Cybersecurity",
    "Systems Integration",
    "Network Analysis",
    "Computer Science",
    "RMF",
    "ACAS",
    "eMASS",
    "Splunk",
    "Wireshark",
    "Docker",
  ],
  openGraph: {
    title: "Juan Rodriguez | Information Systems Security Engineer",
    description:
      "Cybersecurity, systems integration, network analysis, and technical project delivery.",
    url: siteUrl,
    siteName: "Juan Rodriguez",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Juan Rodriguez | Information Systems Security Engineer",
    description:
      "Cybersecurity, systems integration, network analysis, and technical project delivery.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        {children}
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', { anonymize_ip: true });
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
