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
    title: "Automated deployment",
    desc: "Scripted install process pulls and runs syslog-ng containers without manual intervention.",
  },
  {
    icon: <Database className="w-5 h-5" aria-hidden />,
    title: "Version-controlled",
    desc: "Hosted on Forgejo Git for collaboration, updates, and reproducible deployments across VMs.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" aria-hidden />,
    title: "Competition-ready",
    desc: "Designed for reliability under time pressure with built-in checks and fallback logic.",
  },
  {
    icon: <Network className="w-5 h-5" aria-hidden />,
    title: "Seamless integration",
    desc: "Supports integration into central logging infrastructure for CCDC competition environments.",
  },
  {
    icon: <FileCog className="w-5 h-5" aria-hidden />,
    title: "Structured workflow",
    desc: "Built around a main() scaffold with modular steps for future enhancements.",
  },
  {
    icon: <BarChart4 className="w-5 h-5" aria-hidden />,
    title: "Foundation for scaling",
    desc: "Provides a base for CI/CD pipelines, dashboards, and expanded monitoring capabilities.",
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
              For my role in the Collegiate Cyber Defense Competition (CCDC), I
              developed and documented an automation script to streamline the
              deployment of a syslog-ng container on competition systems.
              Instead of manually typing commands during time-sensitive
              scenarios, the script ensures consistent installation and
              configuration across Linux machines.
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
              Automated syslog-ng deployment reduced setup time and errors
              during competition prep.
            </li>
            <li>
              Version-controlled installer ensured reproducibility and
              consistency across VMs.
            </li>
            <li>
              Established a modular framework for future integration with
              dashboards, alerts, and pipelines.
            </li>
          </ul>
        </Card>
      </div>
    </MotionSection>
  );
}
