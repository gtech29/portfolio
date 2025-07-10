// src/app/projects/central-logging-system/page.tsx
"use client";

// import Image from "next/image";
import Link from "next/link";

export default function CentralLoggingSystemPage() {
  return (
    <section className="px-6 py-12 space-y-10 min-h-screen bg-white text-black dark:bg-gray-950 dark:text-white">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Central Logging System for CCDC</h1>
        <p className="text-gray-700 dark:text-gray-300">
          The CSUN Collegiate Cyber Defense Competition (CCDC) team simulates
          real-world incident response scenarios, where students defend complex
          infrastructure against advanced cyber threats. I developed a
          centralized logging system to support their forensic and operational
          workflows, providing a streamlined way to collect, store, and analyze
          logs during and after security incidents.
        </p>
        <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-2">
          <li>
            Built a containerized logging infrastructure using Docker Compose to
            manage <code>syslog-ng</code>, PostgreSQL, and a custom Flask API.
          </li>
          <li>
            Configured remote log collection via the <code>logger</code> command
            and syslog protocols (TCP/UDP) for easy integration across multiple
            hosts.
          </li>
          <li>
            Designed a PostgreSQL schema for structured log storage, enabling
            fast queries by timestamp, IP, user, and event type.
          </li>
          <li>
            Developed CLI tools to filter and export logs in real time, aiding
            incident response during competitions.
          </li>
          <li>
            Outlined plans for future integration of AI-driven anomaly
            detection, alerting, and behavioral pattern analysis.
          </li>
        </ul>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Architecture Diagram</h2>
          <div className="bg-gray-200 dark:bg-gray-800 rounded p-4 flex items-center justify-center min-h-[200px]">
            <span className="text-gray-500 dark:text-gray-400">
              [Placeholder for architecture diagram]
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Sample Interface / Output Screenshot
          </h2>
          <div className="bg-gray-200 dark:bg-gray-800 rounded p-4 flex items-center justify-center min-h-[200px]">
            <span className="text-gray-500 dark:text-gray-400">
              [Placeholder for dashboard screenshot or CLI output]
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="https://github.com/gtech29/central-logging-system"
            className="px-4 py-2 rounded-md bg-[#8badec] text-black font-semibold shadow hover:opacity-90"
            target="_blank"
          >
            View Source Code
          </Link>
          <Link
            href="/assets/pdfs/central-logging-one-pager.pdf"
            className="px-4 py-2 rounded-md bg-gray-100 text-black font-semibold shadow hover:bg-gray-200"
            target="_blank"
          >
            Download One-Pager
          </Link>
        </div>
      </div>
    </section>
  );
}
