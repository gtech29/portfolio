"use client";

import { motion } from "framer-motion";
import React from "react";

// Refined EducationEntry model with updated bullet content
type EducationEntry = {
  school: string;
  location: string;
  degree: string;
  date: string;
  gpa?: string;
  bullets: string[];
};

const education: EducationEntry[] = [
  {
    school: "California State University, Northridge",
    location: "Northridge, CA",
    degree: "Bachelor of Science, Computer Science",
    date: "Expected: May 2026",
    gpa: "GPA: 3.5",
    bullets: [
      "Completed coursework in Data Structures, Operating Systems, Computer Architecture, and Software Engineering.",
      "Developed backend applications and CI/CD pipelines with GitHub Actions, Docker, and shell scripting.",
      "Gained hands-on experience using DevOps tools like Kubernetes, Bash, and version control for system-level programming.",
      "Focused on building scalable systems and understanding cloud-native infrastructure and automation workflows.",
    ],
  },
  {
    school: "CodePath Cybersecurity Course",
    location: "Los Angeles, CA",
    degree:
      "Cybersecurity Certificate, Hands-on Labs in Splunk, Wireshark, SIEM, and Incident Response",
    date: "August 2025",
    bullets: [
      "Completed hands-on labs simulating real-world attacks and defensive strategies using modern SIEM tools.",
      "Analyzed packet captures and logs to detect vulnerabilities and apply structured incident response techniques.",
      "Worked in team-based scenarios to triage threats and report findings, emphasizing clarity, precision, and collaboration.",
    ],
  },
  {
    school: "Rio Hondo Community College",
    location: "Whittier, CA",
    degree:
      "Associates of Science, Computer Information System and Mathematics",
    date: "May 2023",
    gpa: "GPA: 3.5",
    bullets: [
      "Learned core programming principles through projects in C++ and Java, with emphasis on OOP design.",
      "Studied mathematics relevant to algorithms and data processing, including statistics and discrete math.",
      "Explored cybersecurity fundamentals, including penetration testing methodologies and secure coding practices.",
    ],
  },
];

export default function Education() {
  return (
    <motion.section
      id="education"
      className="space-y-12 px-6 py-12 bg-white dark:bg-gray-950 text-black dark:text-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="text-2xl font-bold flex items-center gap-2 mb-4">
        Education
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mt-0 mb-6">
        Each academic experience has helped build the technical foundation I
        rely on today. From system design to secure development and
        incident response, my education has focused on practical skills that
        align with industry needs.
      </p>

      <div className="space-y-10">
        {education.map((edu, index) => (
          <motion.div
            key={`${edu.school}-${edu.location}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="border-l-4 border-blue-300 pl-4 space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h4 className="text-lg font-semibold">
                {edu.school}, {edu.location}
              </h4>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {edu.date}
              </p>
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-300">
              {edu.degree}
            </p>

            {edu.gpa && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {edu.gpa}
              </p>
            )}

            {edu.bullets.length > 0 && (
              <ul className="list-disc pl-5 text-sm text-gray-800 dark:text-gray-200 space-y-1">
                {edu.bullets.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
