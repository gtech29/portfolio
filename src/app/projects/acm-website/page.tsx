import type { Metadata } from "next";
import AcmWebsite from "@/app/projects/acm-website/section";

export const metadata: Metadata = {
  title: "ACM @ CSUN Chapter | Projects",
  description:
    "Hardened, centralized logging on Linux with Docker and PostgreSQL. Consolidates host activity, supports incident response, and prepares for dashboards and CI/CD.",
  openGraph: {
    title: "ACM @ CSUN Chapter",
    description:
      "Hardened, centralized logging on Linux with Docker and PostgreSQL. Consolidates host activity and supports incident response.",
    type: "article",
  },
};

export default function Page() {
  return <AcmWebsite />;
}
