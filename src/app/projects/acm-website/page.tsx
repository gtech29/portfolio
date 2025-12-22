import type { Metadata } from "next";
import AcmWebsite from "@/app/projects/acm-website/section";

export const metadata: Metadata = {
  title: "ACM @ CSUN Chapter | Projects",
  description:
    "single page with a responsive layout, cover hero, anchor navigation, theme aware dark mode, and accessible markup. ",
  openGraph: {
    title: "ACM @ CSUN Chapter",
    description:
      "single page with a responsive layout, cover hero, anchor navigation, theme aware dark mode, and accessible markup.",
    type: "article",
  },
};

export default function Page() {
  return <AcmWebsite />;
}
