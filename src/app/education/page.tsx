// src/components/Education.tsx
"use client";

import { motion } from "framer-motion";
// Define the EducationEntry type locally since '@/types' cannot be found
type EducationEntry = {
  school: string;
  degree: string;
  date: string;
  bullets: string[];
};

const education: EducationEntry[] = [
  {
    school: "California State University, Northridge",
    degree: "Bachelor of Science in Computer Science",
    date: "Jan 2024 – May 2026",
    bullets: [
      "Pursuing a B.S. in Computer Science with a focus on systems engineering, automation, and cloud-native development.",
      "Experience in operating systems, computer architecture, and software engineering for scalable and secure systems.",
      "Hands-on with Docker, Kubernetes, Python, and Bash for infrastructure automation and deployment.",
      "Projects emphasize system reliability, real-time monitoring, and cloud integration for DevOps and AI-driven workflows.",
    ],
  },
  {
    school: "Rio Hondo Community College",
    degree: "Associate of Science in CIS & Mathematics",
    date: "Jun 2021 – May 2023",
    bullets: [
      "Built a foundation in software development, system analysis, and cybersecurity.",
      "Created object-oriented apps in C++ using encapsulation, inheritance, and polymorphism.",
      "Applied system analysis methodologies to model complex environments efficiently.",
      "Studied ethical hacking: penetration testing, secure coding, and vulnerability assessment.",
    ],
  },
];

import React from "react";

export default function Education() {
  return (
    <motion.section
      id="education"
      className="space-y-12 px-6 py-12 bg-white text-black dark:from-gray-950 dark:to-gray-900 dark:text-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="text-2xl font-bold flex items-center gap-2 mb-4">
        Education
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mt-0 mb-6">
        Education has always been more than assignments or grades. It&#39;s been
        about understanding technology more deeply, asking better questions, and
        learning alongside communities that encourage growth.
      </p>

      <div className="space-y-10">
        {education.map((edu, index) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="border-l-4 border-blue-300 pl-4 space-y-3"
          >
            <h4 className="text-lg font-semibold">{edu.school}</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {edu.degree}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {edu.date}
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-800 dark:text-gray-200 space-y-1">
              {edu.bullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
