import type { Metadata } from "next";
import DigitalTwinSection from "@/app/projects/digital-twin/section";

export const metadata: Metadata = {
  title: "Digital Twin | Projects",
  description:
    "Air-gapped industrial control system simulation using Docker microservices on a local Kubernetes (k3s) cluster with MQTT and a React + Flask + Chart.js dashboard.",
  openGraph: {
    title: "Digital Twin",
    description:
      "Air-gapped ICS simulation on Kubernetes with MQTT and full-stack monitoring.",
    type: "article",
  },
};

export default function Page() {
  return <DigitalTwinSection />;
}
