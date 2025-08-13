"use client";

import {
  MotionSection,
  SectionHeader,
  StackChips,
  FeatureGrid,
  FeatureCard,
  Card,
} from "@/components/ui/ui-shared";
import {
  Server,
  Database,
  ShieldCheck,
  Network,
  FileCog,
  BarChart4,
} from "lucide-react";

const STACK = [
  "Linux",
  "Docker",
  "PostgreSQL (relational schema)",
  "syslog / UDP",
  "Flask API",
  "Bash/CLI tooling",
  "DevOps | CI/CD ready",
  "Security hardening",
];

const FEATURES = [
  {
    icon: <Server className="w-5 h-5" aria-hidden />,
    title: "Centralized intake",
    desc: "Receives external system messages for consolidated monitoring and historical analysis.",
  },
  {
    icon: <Database className="w-5 h-5" aria-hidden />,
    title: "Structured storage",
    desc: "Relational schema supports fast queries, filters, and event timeline reconstruction.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" aria-hidden />,
    title: "Hardened environment",
    desc: "Network access controls and service level restrictions reduce exposure and align with best practices.",
  },
  {
    icon: <Network className="w-5 h-5" aria-hidden />,
    title: "Protocol validation",
    desc: "Delivery verified with native tools and low level UDP testing for endpoint compatibility.",
  },
  {
    icon: <FileCog className="w-5 h-5" aria-hidden />,
    title: "Robust parsing",
    desc: "Resolved formatting and missing field issues to stabilize automated inserts.",
  },
  {
    icon: <BarChart4 className="w-5 h-5" aria-hidden />,
    title: "Ready for dashboards and CI/CD",
    desc: "Clean interfaces and docs enable future UI, alerting, and pipeline automation.",
  },
];

export default function CentralizedLoggingSection() {
  return (
    <MotionSection ariaLabel="Centralized Logging System project section">
      <div className="max-w-5xl mx-auto space-y-10">
        <SectionHeader
          title="Centralized Logging System"
          subtitle={
            <>
              A secure, virtualized Linux environment that centralizes host
              activity into a single source of truth. It ingests logs,
              normalizes records in a relational PostgreSQL database, and
              exposes clear interfaces for querying, timeline reconstruction,
              and future dashboard integration. Built with security hardening,
              DevOps best practices, and automation in mind.
            </>
          }
        />

        <StackChips items={STACK} />

        <FeatureGrid>
          {FEATURES.map((f, i) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              desc={f.desc}
              delay={i * 0.05}
            />
          ))}
        </FeatureGrid>

        <Card>
          <h4 className="text-lg font-semibold mb-2">Outcomes</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200 text-sm">
            <li>
              Central point for log review and timeline reconstruction during
              exercises.
            </li>
            <li>
              Reliable ingestion across varied endpoints after parser and field
              fixes.
            </li>
            <li>
              Documented path to integrate alerts, dashboards, and CI/CD hooks.
            </li>
          </ul>
        </Card>
      </div>
    </MotionSection>
  );
}
