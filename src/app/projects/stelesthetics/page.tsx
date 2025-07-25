"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function StelEstheticsPage() {
  return (
    <motion.section
      className="px-4 sm:px-6 lg:px-8 py-12 min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold">StelEsthetics</h3>
          <p className="text-gray-700 dark:text-gray-300">
            StelEsthetics is a responsive website designed for an independent
            skincare esthetician to showcase services, promote products, and
            attract new clients. Built with Webflow, the site emphasizes
            clarity, mobile-first design, and user-friendly navigation to
            deliver a seamless experience across all devices. The primary goals
            were to improve client engagement, build trust through updated
            content, and streamline the appointment booking process using
            insights from analytics.
          </p>
        </div>

        <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
          <h2 className="text-xl font-semibold">Key Features</h2>
          <li>
            Developed and deployed a fully responsive website using Webflow,
            with an intuitive layout that adapts fluidly to mobile, tablet, and
            desktop screens.
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Diagram: spans both columns on desktop */}
          <div className="md:col-span-2 space-y-2">
            <h1 className="text-sm font-semibold">Architecture Overview</h1>
            <div className="w-full rounded-2xl overflow-x-auto">
              <Image
                src="/stelesthetics-architecture.png"
                alt="stelesthetics-architecture"
                width={0}
                height={0}
                className="w-full h-full"
                unoptimized
                priority
              />
            </div>
          </div>

          {/* Screenshot: takes one column */}
          <div className="space-y-2">
            <p className="text-sm font-semibold">Website Screenshot</p>
            <div className="w-full aspect-[16/9] bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center text-gray-500 text-sm">
              [Screenshot coming soon.]
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://github.com/gtech29/stelesthetics"
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
