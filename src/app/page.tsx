import type { Metadata } from "next";
import Script from "next/script";
import Landing from "@/components/Landing";
import { profile } from "@/data/resume";

export const metadata: Metadata = {
  title: "Juan Rodriguez | Information Systems Security Engineer",
  description:
    "Juan Rodriguez is an Information Systems Security Engineer with a Computer Science background and experience in cybersecurity, systems integration, network analysis, secure systems validation, technical project delivery, and quality assurance.",
  alternates: { canonical: "/" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  alumniOf: "California State University, Northridge",
  sameAs: [profile.linkedin, profile.github],
};

export default function Home() {
  return (
    <>
      <Landing />
      <Script id="person-schema" type="application/ld+json">
        {JSON.stringify(personSchema)}
      </Script>
    </>
  );
}
