// src/components/Hero.tsx
import React from "react";
import { Mail, Github, Linkedin, Globe } from "lucide-react";
// Define SocialLink and Tag types locally since '@/types' cannot be found
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
import Image from "next/image";
import Link from "next/link";

const SOCIALS: SocialLink[] = [
  { href: "mailto:juan.rodriguez.517@my.csun.edu", label: "Email", icon: Mail },
  { href: "https://github.com/gtech29", label: "GitHub", icon: Github },
  {
    href: "https://www.linkedin.com/in/juan-rodriguez-26b39427a/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://www.juan-rodriguez.dev/",
    label: "Portfolio",
    icon: Globe,
  },
];

const TAGS: Tag[] = [
  {
    label: "Full-Stack Development",
    bg: "bg-gray-100", // soft blue background
    text: "text-[#1f2937]", // Tailwind slate-800 equivalent
  },
  {
    label: "Cybersecurity",
    bg: "bg-gray-100",
    text: "text-[#1f2937]",
  },
  {
    label: "Applied AI",
    bg: "bg-gray-100",
    text: "text-[#1f2937]",
  },
];

export default function Hero(): React.ReactElement {
  return (
    <section
      id="hero"
      className="
        flex flex-col gap-20 px-6 mt-4 min-h-screen
         text-black
        dark:from-gray-950 dark:to-gray-900 dark:text-white
        pt-6
      "
    >
      {/* Profile & Intro */}
      <div
        className="
          flex flex-col lg:flex-row justify-center items-start gap-12
          max-w-3xl mx-auto
        "
      >
        <div
          className="
            flex flex-col-reverse lg:flex-row items-start gap-6 w-full
          "
        >
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5 hover:text-black transition-colors" />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <span
                  key={tag.label}
                  className={`
        text-xs md:text-sm font-medium
        px-3 py-1 rounded-full
        border border-[#d1d5db]  // optional subtle
        ${tag.bg} ${tag.text}
      `}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <div className="space-y-4 pt-6 text-gray-800 dark:text-gray-200 mb-0">
              <p className="text-gray-700 dark:text-gray-300 mt-0 mb-6">
                I am a U.S. Navy veteran and a current Computer Science student
                at California State University, Northridge. My work has included
                full stack development, Kubernetes orchestration, and simulation
                of embedded systems.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-0 mb-6">
                I have contributed to research projects at NAVFAC EXWC, built
                web platforms to support nonprofit outreach, and developed
                production ready websites that integrate tools like Google
                Analytics and search optimization.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-0 mb-6">
                This portfolio reflects my transition from serving as a Hospital
                Corpsman to building in the tech space. It is a collection of
                work that combines practical experience with thoughtful,
                scalable design.
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
          I built this site to document my career transition into software
          development and to showcase personal and professional projects.
          It&#39;s a hub for learning, writing, and experimentation.
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            <Link href="/work-experience" className="text-blue-700 underline">
              Professional Experience
            </Link>{" "}
            — Roles, skills, and impact from military, research, and dev work.
          </li>
          <li>
            <Link href="/projects" className="text-blue-700 underline">
              Projects
            </Link>{" "}
            — Cybersecurity research, applied AI, and full-stack development.
          </li>
          <li>
            <Link href="/education" className="text-blue-700 underline">
              Education
            </Link>{" "}
            — Academic journey, coursework, and university involvement.
          </li>
          <li>
            <a
              href="https://gtech29.github.io/resume/"
              className="text-blue-700 underline hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>{" "}
            — Interactive web PDF viewer with a streamlined overview of my
            background.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-10 mb-4">Technical</h3>
        <p className="mb-2">
          This site is built using <strong>Next.js</strong>, styled with{" "}
          <strong>Tailwind CSS</strong>, and hosted on <strong>Vercel</strong>.
        </p>
        <p className="mt-5">
          You can find the source code here:
          <br />
          <a
            href="https://github.com/gtech29/portfolio"
            target="_blank"
            className="text-blue-700 underline"
            rel="noopener noreferrer"
          >
            https://github.com/gtech29/portfolio
          </a>
        </p>
      </div>
    </section>
  );
}
