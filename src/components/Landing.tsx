// src/components/Landing.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { MotionSection, Chip } from "@/components/ui/ui-shared";
import { Analytics } from "@vercel/analytics/next"; 

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
              • Computer Science Research Assistant @ NAVFAC/EXWC<br></br> • B.S. Computer
              Science, CSUN &#39;26
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
                Welcome to my site! I am a U.S. Navy veteran and a Computer
                Science student at California State University, Northridge
                (CSUN). Throughout my studies, I have developed projects that
                highlight my experience in full-stack software development.
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                I also served as the webmaster for CSUN&#39;s ACM chapter and
                participated in the Layer 8 Cybersecurity Club, where I gained
                hands-on experience with cybersecurity best practices, Linux
                infrastructure, and other real-world technical skills. I am
                currently working as a Computer Science Research Assistant at
                the Naval Facilities Engineering and Expeditionary Warfare
                Center, where I am developing a digital twin tool to help
                modernize system controls.
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                This work enables more reliable testing, improves system
                efficiency, and reduces risk in real-world environments.
                <br></br>Please feel free to explore my portfolio. If you have
                any questions or would like to connect, I&#39;d be glad to hear
                from you.
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
                Resume (external)
              </a>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
