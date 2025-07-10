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
          This project was developed to support the CSUN CCDC team&#39;s incident
          response and forensic analysis workflows. It collects and parses logs
          across systems to support structured analysis in real-time and
          post-event.
        </p>
        <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-2">
          <li>
            Built with Docker Compose to orchestrate syslog-ng, PostgreSQL, and
            a custom Flask API.
          </li>
          <li>
            Accepts remote logs using the <code>logger</code> command or syslog
            forwarders over TCP/UDP.
          </li>
          <li>
            Stores log data in a relational format with searchable fields like
            timestamp, IP, and event type.
          </li>
          <li>
            Designed CLI tools to filter, sort, and export logs efficiently
            during competitions.
          </li>
          <li>
            Includes future plans for optional AI-driven threat pattern matching
            and alert generation.
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
