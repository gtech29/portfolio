import type { Metadata } from "next";
import StelEstheticsSection from "@/app/projects/stelesthetics/section";

export const metadata: Metadata = {
  title: "StelEsthetics Website | Projects",
  description:
    "Responsive, mobile-first website in Webflow with SEO, accessibility, and Google Analytics to improve engagement and streamline booking.",
  openGraph: {
    title: "StelEsthetics Website",
    description:
      "Responsive Webflow site with SEO, accessibility, and analytics for client engagement and booking.",
    type: "article",
  },
};

export default function Page() {
  return <StelEstheticsSection />;
}
