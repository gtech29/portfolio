"use client";

import { motion } from "framer-motion";

export type Experience = {
  role: string;
  company: string;
  date: string;
  current?: boolean;
  description: string[];
  tags: string[];
};

const experiences: Experience[] = [
  {
    role: "Computer Science Research Assistant",
    company:
      "Naval Facilities Engineering/Expeditionary Warfare Center (NAVFC/EXWC)",
    date: "October 2024 – Present",
    current: true,
    description: [
      "Built and deployed a Docker-based microservices architecture to simulate PLCs and sensor networks, enabling system-level testing.",
      "Deployed all services into a Kubernetes cluster using k3s with health checks, service discovery, and automated restarts.",
      "Automated image builds and deployment via CI/CD, validating device interactions across virtual networks.",
      "Used Python to script control logic and integrate anomaly detection for real-time monitoring and fault simulation.",
      "Improved development cycle time and system maintainability with automated pipelines.",
    ],
    tags: ["Docker", "Kubernetes", "Python", "CI/CD", "SSH"],
  },
  {
    role: "Front-End Web Developer",
    company: "Association for Computing Machinery, CSUN Chapter",
    date: "July 2024 – Present",
    current: true,
    description: [
      "Developed a mobile-first website using Bootstrap, HTML, and JavaScript for chapter event promotion.",
      "Integrated banners and Google Analytics to boost sign-ups and optimize UI through usage trends.",
      "Maintained an accessible layout with frequent updates supporting 150+ active members.",
    ],
    tags: ["Bootstrap", "HTML", "CSS", "JavaScript", "Git"],
  },
  {
    role: "Technical Advisor",
    company: "Life Aid Research Institute",
    date: "September 2024 – Present",
    current: true,
    description: [
      "Guided app architecture using Firebase, push notifications, and privacy-centric onboarding.",
      "Advised on authentication, analytics, and compliance-aligned metrics for veterans and first responders.",
    ],
    tags: ["Firebase", "Product Strategy", "UX", "Mobile App MVP"],
  },
  {
    role: "Front-End Web Developer",
    company: "StelEsthetics",
    date: "February 2022 – Present",
    current: true,
    description: [
      "Designed and launched a fully responsive Webflow site focused on mobile UX and intuitive navigation.",
      "Integrated Google Analytics for traffic insights, user flows, and conversion tracking.",
      "Published updates and testimonials to boost engagement and brand credibility.",
    ],
    tags: [
      "Webflow",
      "Responsive Design",
      "UX",
      "Analytics",
      "Client Engagement",
    ],
  },
];

export default function ProfessionalExperience(): React.ReactElement {
  return (
    <motion.section
      id="work-experience"
      className="space-y-12 px-6 py-12 bg-white text-black dark:from-gray-950 dark:to-gray-900 dark:text-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="text-2xl font-bold flex items-center gap-2 mb-1">
        Professional Experience
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mt-0 mb-6">
        Each role here reflects experiences that shaped how I solve problems,
        collaborate, and build with purpose. They come from environments that
        demanded adaptability, precision, and continuous learning.
      </p>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${exp.role}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="space-y-4"
          >
            <div>
              <h4 className="text-xl font-semibold flex items-center gap-2">
                {exp.role}
                {index === 0 && (
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 shadow-sm">
                    Current
                  </span>
                )}
              </h4>

              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.company}
                </p>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {exp.date}
              </p>
            </div>

            <ul className="list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">
              {exp.description.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-2 mt-2">
              {exp.tags.map((tag) => (
                <li
                  key={tag}
                  className="px-3 py-1 rounded-full bg-gray-100 text-blue-800 text-xs font-medium shadow-sm hover:bg-blue-200 transition-all"
                >
                  {tag}
                </li>
              ))}
            </ul>

            {index < experiences.length - 1 && (
              <hr className="border-gray-200 mt-6" />
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
