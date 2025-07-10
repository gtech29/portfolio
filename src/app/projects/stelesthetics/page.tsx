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
        StelEsthetics is a responsive website designed for an independent
        skincare esthetician to showcase services, promote products, and attract
        new clients. Built with Webflow, the site emphasizes clarity,
        mobile-first design, and user-friendly navigation to deliver a seamless
        experience across all devices. The primary goals were to improve client
        engagement, build trust through updated content, and streamline the
        appointment booking process using insights from analytics.
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
        <li>
          Developed and deployed a fully responsive website using Webflow, with
          an intuitive layout that adapts fluidly to mobile, tablet, and desktop
          screens.
        </li>
        <li>
          Integrated Google Analytics to measure engagement, track user
          behavior, and identify the highest-performing paths to appointment
          scheduling.
        </li>
        <li>
          Maintained site relevance by regularly updating services, sharing
          client testimonials, and posting announcements to encourage repeat
          visits and trust.
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

