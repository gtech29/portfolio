import type { Metadata } from "next";
import CentralizedLoggingSection from "@/app/projects/central-logging/section";

export const metadata: Metadata = {
  title: "Centralized Logging System | Projects",
  description:
    "Hardened, centralized logging on Linux with Docker and PostgreSQL. Consolidates host activity, supports incident response, and prepares for dashboards and CI/CD.",
  openGraph: {
    title: "Centralized Logging System",
    description:
      "Hardened, centralized logging on Linux with Docker and PostgreSQL. Consolidates host activity and supports incident response.",
    type: "article",
  },
};

export default function Page() {
  return <CentralizedLoggingSection />;
}
