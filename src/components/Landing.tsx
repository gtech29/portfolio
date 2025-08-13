// src/components/Landing.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { MotionSection, Chip } from "@/components/ui/ui-shared";

type SocialLink = {
  href: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  external?: boolean;
};

const SOCIALS: SocialLink[] = [
  { href: "mailto:juan.rodriguez.517@my.csun.edu", label: "Email", icon: Mail },
  {
    href: "https://github.com/gtech29",
    label: "GitHub",
    icon: Github,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/juan-rodriguez-26b39427a/",
    label: "LinkedIn",
    icon: Linkedin,
    external: true,
  },
];

const TAGS = [
  "Software Engineering",
  "Full-Stack Development",
  "Cybersecurity",
  "DevOps / DevSecOps",
  "Applied AI",
];

export default function Hero(): React.ReactElement {
  return (
    <MotionSection
      ariaLabel="Intro section"
      className="flex flex-col gap-12 px-6 mt-4 min-h-screen text-black dark:text-white"
    >
      {/* Profile & Intro */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-6 w-full">
          <div className="flex flex-col items-start text-left space-y-4 w-full">
            <h1 className="text-4xl font-bold tracking-tight">
              Juan Rodriguez
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              Software Engineer @ NAVFAC • B.S. Computer Science, CSUN &#39;26
            </p>

            {/* Socials */}
            <ul
              className="flex gap-4 text-gray-600 dark:text-gray-400"
              aria-label="Social links"
            >
              {SOCIALS.map(({ href, label, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-2 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {TAGS.map((label) => (
                <Chip key={label} label={label} />
              ))}
            </div>

            {/* Summary */}
            <div className="space-y-4 pt-4 text-gray-800 dark:text-gray-200 max-w-prose">
              <p className="text-gray-700 dark:text-gray-300">
                U.S. Navy veteran and CSUN Computer Science student focused on
                full-stack engineering, cybersecurity, and DevSecOps. I build
                systems that prioritize scalability, reliability, and security.
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                Hands-on with Docker, Kubernetes, CI/CD, and secure Linux
                infrastructure. At NAVFAC, I&#39;ve contributed to DoD research by
                developing ICS digital twins and automating threat detection
                workflows for industrial networks.
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                I like mission-driven problems, clear interfaces, and automation
                that reduces toil.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/projects/digital-twin"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8badec] text-black font-medium shadow hover:opacity-90"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                Contact Me
              </Link>
              <a
                href="https://gtech29.github.io/resume/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                Résumé (external)
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="shrink-0 self-start">
            <Image
              src="/profile.webp"
              alt="Portrait of Juan Rodriguez"
              width={160}
              height={160}
              sizes="(min-width: 1024px) 160px, 120px"
              className="rounded-full shadow-md"
              priority
            />
          </div>
        </div>
      </div>

      {/* About + Navigation */}
      <div className="max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
        <h2 className="text-3xl font-semibold mb-6">About the Site</h2>

        <p className="mb-4">
          This portfolio highlights applied work across software engineering,
          cybersecurity, and client-focused development. It&#39;s clean, accessible,
          and focused on real, hands-on skills.
        </p>

        <div className="w-full max-w-screen-md mx-auto px-2 sm:px-0">
          <ul className="space-y-4 list-disc list-inside text-gray-700 dark:text-gray-300 break-words">
            <li>
              <Link href="/work-experience" className="text-blue-700 underline">
                Professional Experience
              </Link>{" "}
              — Research and development work including automation,
              security-aware design, and DevSecOps practices.
            </li>
            <li>
              <Link
                href="/projects/digital-twin"
                className="text-blue-700 underline"
              >
                Projects
              </Link>{" "}
              — ICS simulation, centralized logging, and cloud-native
              deployments (Docker, CI/CD, Git).
            </li>
            <li>
              <Link href="/education" className="text-blue-700 underline">
                Education
              </Link>{" "}
              — Coursework in software engineering, systems, and secure
              programming.
            </li>
            <li>
              <a
                href="https://gtech29.github.io/resume/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                Résumé
              </a>{" "}
              — Interactive summary of skills, certifications, and experience.
            </li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold mt-10 mb-4">Built With</h3>
        <p className="mb-2">
          Built with <strong>Next.js</strong>, styled with{" "}
          <strong>Tailwind CSS</strong>, and deployed via{" "}
          <strong>Vercel</strong>.
        </p>
        <p>
          Source code:
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
    </MotionSection>
  );
}
