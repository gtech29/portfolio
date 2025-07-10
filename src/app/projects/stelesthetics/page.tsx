"use client";

// import Image from "next/image";
// import Link from "next/link";
import { motion } from "framer-motion";

export default function StelEstheticsPage() {
  return (
    <motion.section
      className="space-y-8 px-6 py-12 bg-white dark:bg-gray-950 text-black dark:text-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="text-2xl font-bold">StelEsthetics</h3>
      <p className="text-gray-700 dark:text-gray-300 max-w-3xl">
        StelEsthetics is a responsive website developed for a skincare
        esthetician. Built with Webflow, the site emphasizes clarity, ease of
        navigation, and mobile-first design principles. The goal was to improve
        client engagement and support appointment scheduling through thoughtful
        design and analytics-driven insights.
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
        <li>
          Designed and launched a fully responsive Webflow site, prioritizing
          user-friendly navigation and a mobile-first layout.
        </li>
        <li>
          Integrated Google Analytics to monitor bounce rates, track user
          behavior, and identify high-conversion flows for booking appointments.
        </li>
        <li>
          Regularly published service updates, testimonials, and announcements
          to keep clients informed and build trust.
        </li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
        <div className="space-y-2">
          <p className="text-sm font-semibold">Architecture Overview</p>
          <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center text-gray-500 text-sm">
            [Placeholder: Architecture Diagram]
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold">Dashboard Screenshot</p>
          <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center text-gray-500 text-sm">
            [Placeholder: Dashboard Screenshot]
          </div>
        </div>
      </div>

      <div className="pt-6 space-x-4">
        <a
          href="https://github.com/yourname/stelesthetics"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-[#8badec] text-black rounded hover:bg-blue-400 transition"
        >
          View Source Code
        </a>
        <a
          href="/assets/stelesthetics-onepager.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-gray-100 text-black rounded hover:bg-gray-300 transition"
        >
          View One-Pager PDF
        </a>
      </div>
    </motion.section>
  );
}

