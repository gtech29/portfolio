// src/components/Hero.tsx
import React from "react";
import { Mail, Github, Linkedin, Globe } from "lucide-react";
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
  { href: "https://www.juan-rodriguez.dev/", label: "Portfolio", icon: Globe },
];

const TAGS: Tag[] = [
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
              B.S. Computer Science, CSUN '26
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
                  className={`text-xs md:text-sm font-medium px-3 py-1 rounded-full border border-[#d1d5db] ${tag.bg} ${tag.text}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <div className="space-y-4 pt-4 text-gray-800 dark:text-gray-200">
              <p className="text-gray-700 dark:text-gray-300">
                I am a U.S. Navy veteran and a current Computer Science student
                at California State University, Northridge. My work spans full
                stack development, Kubernetes orchestration, and simulation of
                embedded systems.
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                I've contributed to research at NAVFAC EXWC, supported
                nonprofits through web platforms, and deployed production-grade
                websites with Google Analytics and SEO optimization.
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                This portfolio reflects my journey from Hospital Corpsman to
                software engineer. It showcases projects that combine hands-on
                experience with thoughtful, scalable design.
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
          This site documents my transition into software development and
          showcases a selection of personal and professional projects. It’s
          designed as a clean, accessible space for continuous learning and
          growth.
        </p>

        <ul className="space-y-3 list-disc list-inside">
          <li>
            <Link href="/work-experience" className="text-blue-700 underline">
              Professional Experience
            </Link>{" "}
            — Highlights from research, development, and military service.
          </li>
          <li>
            <Link
              href="/projects/digital-twin"
              className="text-blue-700 underline"
            >
              Projects
            </Link>{" "}
            — Selected work in cybersecurity, DevSecOps, and client-focused
            development.
          </li>
          <li>
            <Link href="/education" className="text-blue-700 underline">
              Education
            </Link>{" "}
            — Academic background and learning path.
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
            — Interactive resume with skills and experience summary.
          </li>
        </ul>

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
