// src/components/Hero.tsx
"use client";

import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Local type definitions
type SocialLink = {
  href: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type Tag = {
  label: string;
  bg: string;
  text: string;
};

const SOCIALS: SocialLink[] = [
  { href: "mailto:juan.rodriguez.517@my.csun.edu", label: "Email", icon: Mail },
  { href: "https://github.com/gtech29", label: "GitHub", icon: Github },
  {
    href: "https://www.linkedin.com/in/juan-rodriguez-26b39427a/",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

const TAGS: Tag[] = [
  { label: "Software Engineering", bg: "bg-gray-100", text: "text-[#1f2937]" },
  {
    label: "Full-Stack Development",
    bg: "bg-gray-100",
    text: "text-[#1f2937]",
  },
  { label: "Cybersecurity", bg: "bg-gray-100", text: "text-[#1f2937]" },
  { label: "Applied AI", bg: "bg-gray-100", text: "text-[#1f2937]" },
];

export default function Hero(): React.ReactElement {
  return (
    <section
      id="hero"
      className="flex flex-col gap-12 px-6 mt-4 min-h-screen text-black dark:from-gray-950 dark:to-gray-900 dark:text-white pt-6"
    >
      {/* Profile & Intro */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 max-w-3xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-6 w-full">
          <div className="flex flex-col items-start text-left space-y-4 w-full">
            <h1 className="text-4xl font-bold">Juan Rodriguez</h1>
            <h2 className="text-lg text-gray-600 dark:text-gray-300">
              Software Engineer @ NAVFAC
              <br />
              B.S. Computer Science, CSUN &#39;26
            </h2>
            <div className="flex gap-4 text-gray-600 dark:text-gray-400">
              {SOCIALS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5 hover:text-blue-600 transition-colors duration-200" />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <span
                  key={tag.label}
                  className={`text-xs md:text-sm font-medium px-3 py-1 rounded-full border border-[#d1d5db] ${tag.bg} ${tag.text} hover:scale-105 transition-transform duration-200`}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <div className="space-y-4 pt-4 text-gray-800 dark:text-gray-200">
              <p className="text-gray-700 dark:text-gray-300">
                I&#39;m a U.S. Navy veteran and CSUN Computer Science student
                specializing in full-stack development, software engineering, cybersecurity, and
                DevSecOps. I build systems that prioritize scalability,
                reliability, and security.
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                My experience spans Docker, Kubernetes, CI/CD pipelines, and
                secure Linux infrastructure. At NAVFAC, I&#39;ve contributed to DoD
                research by developing digital twin systems and automating threat
                detection for industrial networks.
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                I apply a mission-driven mindset to solve real-world problems in
                software engineering. I thrive in
                environments that demand critical thinking, hands-on
                implementation, and continuous learning.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <Image
              src="/profile.webp"
              alt="Juan Rodriguez"
              width={120}
              height={120}
              className="rounded-full shadow-md"
              priority
            />
          </div>
        </div>
      </div>

      {/* About + Technical Details */}
      <div className="max-w-3xl mx-auto text-gray-800 dark:text-gray-200">
        <h2 className="text-3xl font-semibold mb-6">About the Site</h2>

        <p className="mb-4">
          This site reflects my transition into software engineering and
          highlights key projects developed through hands-on experience in
           software engineering, cybersecurity, and client-focused development. It&#39;s
          designed as a clean, accessible space to document my learning journey,
          showcase applied skills, and support my continued growth in the tech
          industry.
        </p>

        <div className="w-full max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="space-y-4 list-disc list-inside text-gray-700 dark:text-gray-300 break-words">
            <li>
              <Link href="/work-experience" className="text-blue-700 underline">
                Professional Experience
              </Link>{" "}
              — Highlights from research and development projects, with hands-on
              work in automation, security-focused software development, and
              DevSecOps practices.
            </li>
            <li>
              <Link
                href="/projects/digital-twin"
                className="text-blue-700 underline"
              >
                Projects
              </Link>{" "}
              — Selected work focused on cybersecurity, system
              simulation, and cloud-native deployments using tools like Docker,
              CI/CD pipelines, and version control.
            </li>
            <li>
              <Link href="/education" className="text-blue-700 underline">
                Education
              </Link>{" "}
              — Overview of my academic background, including coursework in
              software engineering, system architecture, and secure programming.
            </li>
            <li>
              <a
                href="https://gtech29.github.io/resume/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                Resume
              </a>{" "}
              — An interactive summary of my technical skills, certifications,
              and experience tailored to software development and
              security-driven roles.
            </li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold mt-10 mb-4">Built With</h3>
        <p className="mb-2">
          This site was built using <strong>Next.js</strong>, styled with{" "}
          <strong>Tailwind CSS</strong>, and deployed via{" "}
          <strong>Vercel</strong>.
        </p>
        <p>
          Source code available at:
          <br />
          <a
            href="https://github.com/gtech29/portfolio"
            target="_blank"
            className="text-blue-700 underline"
            rel="noopener noreferrer"
          >
            github.com/gtech29/portfolio
          </a>
        </p>
      </div>
    </section>
  );
}
