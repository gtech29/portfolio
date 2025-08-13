"use client";

import Image from "next/image";
import {
  MotionSection,
  SectionHeader,
  StackChips,
  FeatureGrid,
  FeatureCard,
  Card,
} from "@/components/ui/ui-shared";
import { Boxes, Server, Network, Activity, ShieldCheck } from "lucide-react";

const STACK = [
  "Docker",
  "Kubernetes (k3s)",
  "MQTT",
  "DNP3/Modbus",
  "React",
  "Flask",
  "Chart.js",
  "Linux",
];

const FEATURES = [
  {
    icon: <Boxes className="w-5 h-5" aria-hidden />,
    title: "Containerized ICS components",
    desc: "Simulated PLCs, DNP3 outstations, sensors, and the MQTT broker as Docker services.",
  },
  {
    icon: <Server className="w-5 h-5" aria-hidden />,
    title: "Local Kubernetes deployment",
    desc: "All services orchestrated in a k3s cluster with no external dependencies for repeatable runs.",
  },
  {
    icon: <Activity className="w-5 h-5" aria-hidden />,
    title: "Real time monitoring",
    desc: "React + Flask + Chart.js dashboard for live and historical telemetry.",
  },
  {
    icon: <Network className="w-5 h-5" aria-hidden />,
    title: "Cross VM validation",
    desc: "Communications verified with industry tools including Tracer TU and JENEsys.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" aria-hidden />,
    title: "Air gapped design",
    desc: "Engineered for controlled networks and secure automation testing.",
  },
];

export default function DigitalTwinSection() {
  return (
    <MotionSection ariaLabel="Digital Twin project section">
      <div className="max-w-5xl mx-auto space-y-10">
        <SectionHeader
          title="Digital Twin"
          subtitle={
            <>
              A secure, air gapped simulation platform that virtualizes
              industrial control systems. It uses a Docker based microservices architecture
              on a local Kubernetes (k3s) cluster
              to model controllers, PLCs, and DNP3 outstations connected via
              MQTT. Enables safe automation
              testing, real time monitoring, and a foundation for future AI
              analysis.
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <figure className="space-y-2">
            <figcaption className="text-sm font-semibold">
              Architecture Overview
            </figcaption>
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
              <Image
                src="/digitaltwin-architecture.png"
                alt="Block diagram of Digital Twin services on Kubernetes: frontend, backend, MQTT, PLC, sensor, DNP3/Modbus publishers, and tool simulators."
                width={1600}
                height={1200}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </figure>

          <figure className="space-y-2">
            <figcaption className="text-sm font-semibold">
              Dashboard Overview
            </figcaption>
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
              <Image
                src="/dashboard1.png"
                alt="Dashboard with real time telemetry cards and time series charts."
                width={1600}
                height={1200}
                className="w-full h-full object-cover"
              />
            </div>
          </figure>
        </div>

        <Card>
          <h4 className="text-lg font-semibold mb-2">Outcomes</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200 text-sm">
            <li>
              Reliable end to end data flow validated across VMs and services.
            </li>
            <li>
              Repeatable cluster bring up and teardown for experiment runs.
            </li>
            <li>
              Clear path for adding anomaly detection and AI analysis on
              historical data.
            </li>
          </ul>
        </Card>
      </div>
    </MotionSection>
  );
}
