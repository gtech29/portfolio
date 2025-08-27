// src/app/work-experience/page.tsx
"use client";

import {
  MotionSection,
  SectionHeader,
  Card,
  Chip,
} from "@/components/ui/ui-shared";
import { motion } from "framer-motion";
import React from "react";

export type Experience = {
  role: string;
  company: string;
  date: string;
  current?: boolean;
  description: string[];
  tags: string[];
};

const experiences: Experience[] = [
  {
    role: "Computer Science Research Assistant",
    company:
      "Naval Facilities Engineering & Expeditionary Warfare Center (NAVFAC EXWC)",
    date: "Oct 2024 - Present",
    current: true,
    description: [
      "Built a modular microservices environment with Docker Compose (>8 services) for PLCs, sensors, and MQTT-based interfaces.",
      "Deployed services to a local Kubernetes (k3s) cluster with YAML-defined health checks, service discovery, and automated restarts across VMs.",
      "Solved air-gapped image distribution using containerd's `ctr` and a local registry; documented repeatable workflows.",
      "Scripted control logic and basic anomaly detection in Python for real-time monitoring and fault simulation.",
      "Maintained Ubuntu hosts: package updates, resource tuning, and service hardening across nodes.",
    ],
    tags: [
      "Docker",
      "Kubernetes",
      "k3s",
      "Python",
      "MQTT",
      "containerd",
      "Linux",
      "DevOps",
    ],
  },
  {
    role: "Front-End Web Developer",
    company: "StelEsthetics",
    date: "Feb 2022 - Present",
    description: [
      "Designed and shipped a responsive site (Webflow) with mobile-first layouts, SEO, and embedded booking—contributing to a ~15% lift in appointments in the first quarter post-launch.",
      "Integrated Google Analytics with goals/funnels to monitor conversions; reduced bounce rate ~25% through targeted UX fixes.",
      "Partnered with the client in regular review cycles to update services and seasonal campaigns while maintaining brand consistency.",
      "Optimized performance (≈40% faster loads) via image compression and deferred script loading.",
      "Migrating to a React Router/Next.js app (MERN-style) for maintainability and new features; implementing an online store and secure auth.",
    ],
    tags: [
      "Webflow",
      "React",
      "Next.js",
      "Responsive Design",
      "SEO",
      "Google Analytics",
      "Performance",
    ],
  },
  {
    role: "Business Analyst Intern — Quality Assurance",
    company: "Accenture (Cisco engagement)",
    date: "Jul 2023 - Aug 2023",
    description: [
      "Contributed to QA on Cisco's purchasing site using SQL-driven checks and test cases; helped surface and track defects impacting 10k+ monthly visitors.",
      "Coordinated with Cisco stakeholders and Accenture teams; documented findings and next steps for cross-functional follow-up.",
      "Delivered a sustainability capstone concept (AR education tool) illustrating environmental costs of consumer choices.",
    ],
    tags: ["Agile", "SQL", "QA", "Test Cases", "Stakeholder Communication"],
  },
  {
    role: "Hospital Corpsman",
    company: "United States Navy",
    date: "Aug 2008 - Aug 2011",
    description: [
      "Provided trauma and preventive care for 200+ personnel in austere, high-pressure settings using structured protocols.",
      "Led triage during training operations—skills analogous to incident triage, prioritization, and clear escalation paths.",
      "Reduced operational risk via sanitation inspections, inventory controls, and adherence to health standards.",
      "Collaborated across units with disciplined communication—directly transferable to Agile teamwork and on-call procedures.",
    ],
    tags: [
      "Incident Response",
      "Operations",
      "Procedures",
      "Teamwork",
      "Risk Reduction",
    ],
  },
];

const leadership: Experience[] = [
  {
    role: "CodePath Cybersecurity Course",
    company: "CodePath",
    date: "May 2025 - Present",
    description: [
      "Completed a 10-week immersive course covering logging, incident response, intrusion detection, SIEM, and threat hunting with industry tools such as Splunk and Wireshark.",
      "Conducted hands-on threat hunting exercises, analyzing network traffic and system logs to identify anomalies and potential intrusions.",
      "Collaborated with peers on case studies using Splunk Catalyst, building reports and response timelines to strengthen investigative and documentation skills.",
    ],
    tags: ["SIEM", "Splunk", "Wireshark", "Cybersecurity", "Digital Forensics"],
  },
  {
    role: "Front-End Web Developer",
    company: "Association for Computing Machinery, CSUN Chapter",
    date: "Jul 2024 - Jul 2025",
    description: [
      "Developed a mobile-first site with Bootstrap/HTML/JS to streamline event promotion and member onboarding.",
      "Improved cross-browser rendering and accessibility for 150+ active members.",
      "Coordinated with board members to publish real-time updates for events and announcements.",
    ],
    tags: ["Bootstrap", "HTML", "JavaScript", "Accessibility", "Leadership"],
  },
];

// helper to de-dupe tags in case of copy/paste duplicates
const uniq = (arr: string[]) => Array.from(new Set(arr));

function ExperienceCard({
  exp,
  highlightCurrent,
}: {
  exp: Experience;
  highlightCurrent?: boolean;
}) {
  return (
    <Card>
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <h4 className="text-lg font-semibold">
          {exp.role}{" "}
          {highlightCurrent && exp.current && (
            <span className="ml-2 px-2 py-0.5 text-[11px] font-semibold rounded-full bg-green-100 text-green-800">
              Current
            </span>
          )}
        </h4>
        <p className="text-xs font-medium text-gray-800 dark:text-gray-200">
          {exp.date}
        </p>
      </header>

      <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
        {exp.company}
      </p>

      {exp.description?.length > 0 && (
        <ul className="list-disc pl-5 text-sm text-gray-800 dark:text-gray-200 space-y-1 mt-3">
          {exp.description.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}

      {exp.tags?.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-3">
          {uniq(exp.tags).map((tag) => (
            <li key={`${exp.company}-${exp.role}-${tag}`}>
              <Chip label={tag} className="bg-gray-100 dark:bg-gray-900" />
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

export default function ProfessionalExperience(): React.ReactElement {
  return (
    <MotionSection
      ariaLabel="Work experience section"
      initial={false} // ensure visible immediately on small screens
      viewport={{ once: true, amount: 0.01 }} // very low threshold for mobile viewports
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto space-y-10">
        <SectionHeader
          title="Professional Experience"
          subtitle="Impact-focused roles spanning software, DevOps, and operations. Emphasis on secure systems, automation, collaboration, and clear delivery."
        />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <ExperienceCard exp={exp} highlightCurrent />
            </motion.div>
          ))}
        </div>

        <SectionHeader
          title="Leadership & Professional Development"
          subtitle="Hands-on contributions to student organizations and security teams—building community and shipping tools that help others move faster."
        />

        <div className="space-y-6">
          {leadership.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <ExperienceCard exp={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
