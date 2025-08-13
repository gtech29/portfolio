// src/components/ui/ui-shared.tsx
"use client";

import * as React from "react";
import { motion, MotionProps } from "framer-motion";
import clsx from "clsx";

/*
  Shared UI for consistent styling across project/education pages.
  Components: MotionSection, SectionHeader, Chip, StackChips, FeatureCard
  Animation helpers: fadeInUp, cardTransition
*/

// ---- Animation helpers ----
export const fadeInUp = (): MotionProps["initial"] => ({
  opacity: 0,
  y: 8,
});

export const cardTransition = (delay = 0) => ({
  duration: 0.35,
  delay,
  ease: "easeOut" as const,
});

// ---- MotionSection ----
export function MotionSection({
  children,
  className,
  ariaLabel,
  initial = { opacity: 0, y: 8 },
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true, amount: 0.2 },
  transition = { duration: 0.5, ease: "easeOut" },
}: {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  initial?: MotionProps["initial"];
  whileInView?: MotionProps["whileInView"];
  viewport?: MotionProps["viewport"];
  transition?: MotionProps["transition"];
}) {
  return (
    <motion.section
      className={clsx(
        "px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-gray-950 text-black dark:text-white",
        className
      )}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      aria-label={ariaLabel}
    >
      {children}
    </motion.section>
  );
}

// ---- SectionHeader ----
export function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: React.ReactNode; // <-- allow JSX OR string
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h3>
      {subtitle ? (
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

// ---- Chip ----
export function Chip({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "text-xs rounded-full border border-gray-200 dark:border-gray-800 px-3 py-1 bg-gray-50 dark:bg-gray-900",
        className
      )}
    >
      {label}
    </span>
  );
}

// ---- StackChips ----
export function StackChips({ items }: { items: string[] }) {
  if (!items?.length) return null;
  return (
    <div className="flex flex-wrap items-center gap-2">
      {items.map((label) => (
        <Chip key={label} label={label} />
      ))}
    </div>
  );
}

// ---- FeatureCard ----
export function FeatureCard({
  icon,
  title,
  desc,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/20 shadow-sm"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={cardTransition(delay)}
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 text-gray-900 dark:text-gray-100">{icon}</div>
        <div>
          <h4 className="font-semibold text-base">{title}</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ---- Utility grid wrappers ----
export function FeatureGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
  );
}

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white/60 dark:bg-black/20",
        className
      )}
    >
      {children}
    </div>
  );
}
