"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MotionSection,
  SectionHeader,
  StackChips,
  FeatureGrid,
  FeatureCard,
  Card,
} from "@/components/ui/ui-shared";
import {
  Monitor,
  Palette,
  Link as LinkIcon,
  Image as ImageIcon,
  SunMoon,
} from "lucide-react";

const STACK = [
  "HTML5",
  "Bootstrap 5 grid/utilities",
  "CSS",
  "SEO",
  "Performance-minded layout",
];

const FEATURES = [
  {
    icon: <ImageIcon className="w-5 h-5" aria-hidden />,
    title: "Hero background image",
    desc: "Full-bleed header with cover-fit image, centered content, and contrast overlay for readability.",
  },
  {
    icon: <Monitor className="w-5 h-5" aria-hidden />,
    title: "Responsive, mobile-first",
    desc: "Fluid type/spacing, Bootstrap grid, and zero layout shift across breakpoints.",
  },
  {
    icon: <SunMoon className="w-5 h-5" aria-hidden />,
    title: "Dark mode ready",
    desc: "Colors sourced from CSS tokens so the hero, pills, and buttons adapt automatically.",
  },
  {
    icon: <LinkIcon className="w-5 h-5" aria-hidden />,
    title: "Anchor Navigation",
    desc: "Single-page anchor nav (Home, About, Events, Projects, FAQ, Contact) plus persistent Join CTA.",
  },
  {
    icon: <Palette className="w-5 h-5" aria-hidden />,
    title: "CSUN-aligned styling",
    desc: "Brand red accents, subtle borders, and readable hierarchy.",
  },
];

export default function AcmWebsiteSection() {
  return (
    <MotionSection ariaLabel="ACM website refresh section">
      <div className="max-w-5xl mx-auto space-y-10">
        <SectionHeader
          title="ACM @ CSUN Website Refresh"
          subtitle={
            <>
              Built the CSUN ACM website as a single page with a responsive
              layout, cover hero, anchor navigation, theme aware dark mode, and
              accessible markup. I led architecture, design, and performance,
              adding lazy loading and async image decoding and verifying
              contrast. I leveraged AI assistants for rapid prototyping and
              refactoring while owning every decision, delivering a fast site
              that boosts student outreach with clear calls to action and simple
              event discovery.
            </>
          }
        />

        <StackChips items={STACK} />

        <FeatureGrid>
          {FEATURES.map((f, i) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              desc={f.desc}
              delay={i * 0.05}
            />
          ))}
        </FeatureGrid>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <figure className="md:col-span-2 space-y-2">
            <figcaption className="text-sm font-semibold">
              Architecture Overview
            </figcaption>
            <div className="w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
              <Image
                src="/acm-diagram.png"
                alt="Site architecture showing Webflow build, content structure, analytics, and booking flow."
                width={1600}
                height={900}
                className="w-full h-auto"
                priority
              />
            </div>
          </figure>
        </div>

        <Card>
          <h4 className="text-lg font-semibold mb-2">Outcomes</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200 text-sm">
            <li>
              Higher student interaction shown by more clicks on Join and Events
              and longer session duration.
            </li>
            <li>
              More event participation with increased RSVPs and attendance.
            </li>
            <li>
              Stronger online presence through improved search visibility and
              shareable previews on social media.
            </li>
            <li>
              Better mobile experience that reduces bounce rate and improves
              time on page.
            </li>
            <li>
              Clear calls to action that drive mailing list signups and interest
              in project teams.
            </li>
            <li>
              Faster content updates by officers so announcements and schedules
              stay current.
            </li>
          </ul>
        </Card>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://github.com/CSUN-ACM/csun-acm.github.io"
            className="px-4 py-2 rounded-md bg-[#8badec] text-black font-semibold shadow hover:opacity-90"
            target="_blank"
          >
            View Source Code
          </Link>
          <Link
            href="https://www.ecs.csun.edu/acm/"
            className="px-4 py-2 rounded-md bg-[#8badec] text-black font-semibold shadow hover:opacity-90"
            target="_blank"
          >
            View Live Website
          </Link>
        </div>
      </div>
    </MotionSection>
  );
}
