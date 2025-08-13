import type { Metadata } from "next";
import EducationSection from "@/app/education/section";

export const metadata: Metadata = {
  title: "Education | Juan Rodriguez",
  description:
    "Coursework and training in software engineering, DevOps, and cybersecurity with hands-on labs and projects.",
  openGraph: {
    title: "Education",
    description:
      "Coursework and training in software engineering, DevOps, and cybersecurity with hands-on labs and projects.",
    type: "profile",
  },
};

export default function Page() {
  return <EducationSection />;
}
