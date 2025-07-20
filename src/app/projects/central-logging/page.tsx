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
            Centralized Logging System
          </h3>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Overview
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            A centralized logging system was deployed on a hardened virtualized
            Linux environment to collect and store system activity across
            connected hosts. The setup supports forensic visibility and incident
            response in competitive cybersecurity settings. Log data is
            structured for reliable storage and querying, with future plans for
            integration into DevOps pipelines, automation routines, or
            monitoring dashboards.
          </p>
        </div>

        <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
          <h2 className="text-xl font-semibold">Key Features</h2>
          <li>
            Configured a modular logging pipeline to receive external system
            messages for centralized monitoring and historical analysis.
          </li>
          <li>
            Implemented structured data handling using a relational database
            schema to support efficient log inspection and timeline
            reconstruction.
          </li>
          <li>
            Applied network access restrictions and service-level controls to
            align with standard hardening practices and reduce exposure.
          </li>
          <li>
            Conducted message delivery validation using system-native and
            low-level UDP testing tools to ensure compatibility across
            endpoints.
          </li>
          <li>
            Resolved parsing and ingestion issues related to data formatting and
            missing fields to improve reliability of automated inserts.
          </li>
          <li>
            Maintained clear documentation to support future UI integration and
            enable streamlined visualization or alerting workflows.
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
