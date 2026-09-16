import type { Metadata } from "next";
import StelEstheticsCaseStudy from "@/components/StelEstheticsCaseStudy";

export const metadata: Metadata = {
  title: "StelEsthetics Web Platform | Juan Rodriguez",
  description:
    "Case study covering the StelEsthetics platform lifecycle, migration, analytics, accessibility, SEO, and user experience.",
  alternates: { canonical: "/case-studies/steleesthetics" },
  openGraph: {
    title: "StelEsthetics Web Platform | Juan Rodriguez",
    description:
      "Platform lifecycle, migration, analytics, and user experience case study.",
    type: "article",
  },
};

export default function StelEstheticsCaseStudyPage() {
  return <StelEstheticsCaseStudy />;
}
