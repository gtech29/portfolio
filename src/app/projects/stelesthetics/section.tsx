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
import { Smartphone, Search, BarChart4, MessageSquare } from "lucide-react";

const STACK = [
  "Webflow",
  "Responsive design",
  "Google Analytics",
  "SEO basics",
  "Accessibility checks",
  "Content updates",
];

const FEATURES = [
  {
    icon: <Smartphone className="w-5 h-5" aria-hidden />,
    title: "Mobile first layout",
    desc: "Fluid experience across phone, tablet, and desktop with clear navigation.",
  },
  {
    icon: <Search className="w-5 h-5" aria-hidden />,
    title: "SEO and performance",
    desc: "Clean structure, metadata, and image practices to support search visibility.",
  },
  {
    icon: <BarChart4 className="w-5 h-5" aria-hidden />,
    title: "Analytics insight",
    desc: "Google Analytics tracks engagement and identifies effective booking paths.",
  },
  {
    icon: <MessageSquare className="w-5 h-5" aria-hidden />,
    title: "Trust building",
    desc: "Regular updates to services, testimonials, and announcements encourage return visits.",
  },
];

export default function StelEstheticsSection() {
  return (
    <MotionSection ariaLabel="StelEsthetics website project section">
      <div className="max-w-5xl mx-auto space-y-10">
        <SectionHeader
          title="StelEsthetics"
          subtitle={
            <>
              A responsive, mobile-first website originally built in Webflow to
              improve client engagement and streamline booking. Designed with
              SEO optimization, accessibility, and user-friendly navigation, and
              instrumented with Google Analytics to identify high-performing
              booking paths. The project has since been migrated to a React
              Router-based application similar in structure to this portfolio,
              enabling greater flexibility, maintainability, and future feature
              development. Currently working on implementing an online store to
              support product sales, while ongoing content updates and
              testimonials maintain trust and ensure the site&#39;s structure
              supports discoverability and long-term scalability.
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
                src="/stelesthetics-architecture.png"
                alt="Site architecture showing Webflow build, content structure, analytics, and booking flow."
                width={1600}
                height={900}
                className="w-full h-auto"
                priority
              />
            </div>
          </figure>

          {/* <figure className="space-y-2">
            <figcaption className="text-sm font-semibold">
              Website Screenshot
            </figcaption>
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
              <Image
                src="/stelesthetics-home.png"
                alt="StelEsthetics homepage preview with services and booking call to action."
                width={1600}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
          </figure>

          <figure className="space-y-2">
            <figcaption className="text-sm font-semibold">
              Mobile View
            </figcaption>
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
              <Image
                src="/stelesthetics-mobile.png"
                alt="Mobile view of the site with responsive navigation and service cards."
                width={1600}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
          </figure> */}
        </div>

        <Card>
          <h4 className="text-lg font-semibold mb-2">Outcomes</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200 text-sm">
            <li>
              Clear booking path surfaced in navigation and call to action
              blocks.
            </li>
            <li>
              Analytics instrumentation identifies high performing pages and
              funnels.
            </li>
            <li>
              SEO friendly structure and content cadence that support
              discoverability.
            </li>
          </ul>
        </Card>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://github.com/gtech29/stelesthetics"
            className="px-4 py-2 rounded-md bg-[#8badec] text-black font-semibold shadow hover:opacity-90"
            target="_blank"
          >
            View Source Code
          </Link>
        </div>
      </div>
    </MotionSection>
  );
}
