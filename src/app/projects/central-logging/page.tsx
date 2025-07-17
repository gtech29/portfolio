"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CentralLoggingSystemPage() {
  return (
    <motion.section
      className="px-4 sm:px-6 lg:px-8 py-12 min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Central Logging System for CCDC
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            The CSUN Collegiate Cyber Defense Competition (CCDC) team simulates
            real-world incident response scenarios, where students defend
            complex infrastructure against advanced cyber threats. I developed a
            centralized logging system to support their forensic and operational
            workflows, providing a streamlined way to collect, store, and
            analyze logs during and after security incidents.
          </p>
        </div>

        <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
          <h2 className="text-xl font-semibold">Key Features</h2>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold">Architecture Overview</p>
            <div className="w-full aspect-[4/3] bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center text-gray-500 text-sm">
              [Architecture diagram coming soon.]
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold">Dashboard Overview</p>
            <div className="w-full aspect-[4/3] bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center text-gray-500 text-sm">
              [Dashboard diagram coming soon.]
            </div>
          </div>

          {/* <div className="space-y-2">
            <p className="text-sm font-semibold">Website Screenshot</p>
            <div className="w-full aspect-[16/9] bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center text-gray-500 text-sm">
              [Screenshot coming soon.]
            </div>
          </div> */}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://github.com/gtech29/ccdc"
            className="px-4 py-2 rounded-md bg-[#8badec] text-black font-semibold shadow hover:opacity-90"
            target="_blank"
          >
            View Source Code
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
