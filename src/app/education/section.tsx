"use client";

import {
  MotionSection,
  SectionHeader,
  StackChips,
  Card,
} from "@/components/ui/ui-shared";

type EducationEntry = {
  school: string;
  location: string;
  degree: string;
  date: string;
  gpa?: string;
  bullets: string[];
  stack?: string[];
};

const education: EducationEntry[] = [
  {
    school: "California State University, Northridge",
    location: "Northridge, CA",
    degree: "Bachelor of Science, Computer Science",
    date: "Expected: May 2026",
    gpa: "GPA: 3.5",
    bullets: [
      "Completed coursework in Data Structures, Operating Systems, Computer Architecture, and Software Engineering with emphasis on scalable and secure design.",
      "Built backend applications and CI/CD pipelines using GitHub Actions, Docker, and shell scripting for automated deployments.",
      "Applied DevOps tools such as Kubernetes, Bash, and version control to system level programming projects.",
      "Focused on cloud native infrastructure, automation workflows, and performance optimization.",
    ],
    stack: [
      "Linux",
      "Kubernetes",
      "Docker",
      "GitHub Actions",
      "PostgreSQL",
      "Java",
      "Python",
    ],
  },
  {
    school: "CodePath Cybersecurity Course",
    location: "Los Angeles, CA",
    degree:
      "Cybersecurity Certificate, hands on labs in Splunk, Wireshark, SIEM, and Incident Response",
    date: "August 2025",
    bullets: [
      "Completed labs simulating real world attacks and defensive strategies using modern SIEM tools.",
      "Analyzed packet captures and logs to detect vulnerabilities and apply structured incident response techniques.",
      "Worked in team scenarios to triage threats and produce concise, actionable reports.",
    ],
    stack: [
      "Splunk",
      "Wireshark",
      "SIEM",
      "Incident Response",
      "Network Analysis",
    ],
  },
  {
    school: "Rio Hondo Community College",
    location: "Whittier, CA",
    degree: "Associate of Science, Computer Information System and Mathematics",
    date: "May 2023",
    gpa: "GPA: 3.5",
    bullets: [
      "Built projects in C++ and Java using object oriented programming principles.",
      "Studied mathematics relevant to algorithms and data processing including statistics and discrete math.",
      "Explored cybersecurity fundamentals including penetration testing and secure coding practices.",
    ],
    stack: [
      "C++",
      "Java",
      "OOP",
      "Statistics",
      "Discrete Math",
      "Cybersecurity Fundamentals",
    ],
  },
];

export default function EducationSection() {
  return (
    <MotionSection ariaLabel="Education section">
      <div className="max-w-5xl mx-auto space-y-10">
        <SectionHeader
          title="Education"
          subtitle="A foundation in software engineering, DevOps, and cybersecurity built through applied coursework, labs, and team projects. Focus on secure system design, automation, and incident response."
        />

        <div className="space-y-8">
          {education.map((edu) => (
            <Card key={`${edu.school}-${edu.date}`}>
              <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h4 className="text-lg font-semibold">
                  {edu.school}{" "}
                  <span className="text-gray-500 dark:text-gray-400">
                    • {edu.location}
                  </span>
                </h4>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {edu.date}
                </p>
              </header>

              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                {edu.degree}
              </p>
              {edu.gpa && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                  {edu.gpa}
                </p>
              )}

              {edu.stack && (
                <div className="mt-3">
                  <StackChips items={edu.stack} />
                </div>
              )}

              {edu.bullets.length > 0 && (
                <ul className="list-disc pl-5 text-sm text-gray-800 dark:text-gray-200 space-y-1 mt-3">
                  {edu.bullets.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
