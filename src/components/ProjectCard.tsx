// src/components/ProjectCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
export interface Project {
  title: string;
  description: string;
  imageSrc: string;
  codeUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps extends Project {
  index: number;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  codeUrl,
  liveUrl,
  index,
}: ProjectCardProps): React.ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
    >
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={192}
        className="w-full h-48 object-cover"
        priority={index === 0}
      />
      <div className="p-4 flex-1 flex flex-col">
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-sm flex-1">{description}</p>
        <div className="mt-4 flex gap-4 text-sm">
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
