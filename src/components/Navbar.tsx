"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

// Type definitions
type InternalLink = {
  href: string;
  label: string;
  subLinks?: never;
  target?: undefined;
  rel?: undefined;
};
type ExternalLink = {
  href: string;
  label: string;
  target: string;
  rel: string;
  subLinks?: never;
};
type ProjectLinkGroup = {
  label: string;
  subLinks: { href: string; label: string }[];
};
type LinkType = InternalLink | ExternalLink | ProjectLinkGroup;

const links: LinkType[] = [
  { href: "/", label: "Home" },
  { href: "/work-experience", label: "Professional Experience" },
  {
    label: "Projects",
    subLinks: [
      { href: "/projects/digital-twin", label: "Digital Twin" },
      { href: "/projects/acm-website", label: "ACM @ CSUN Website" },
      { href: "/projects/stelesthetics", label: "StelEsthetics" },
    ],
  },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact Me" },
  {
    href: "https://gtech29.github.io/resume/",
    label: "Resume",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

function InternalNavLink({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}) {
  const baseClass = "p-4 block";
  const activeClass = "bg-[#8badec] text-black";
  const inactiveClass =
    "text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white";

  return (
    <Link
      href={href}
      className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

function ExternalNavLink({
  href,
  label,
  target,
  rel,
}: {
  href: string;
  label: string;
  target?: string;
  rel?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="p-4 block text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white"
    >
      {label}
    </a>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile header */}
      <div className="md:hidden flex items-center justify-between bg-gray-100 dark:bg-gray-950 text-black dark:text-white p-4 shadow fixed top-0 left-0 w-full z-50">
        <div className="font-bold text-lg">Menu</div>
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? (
            <X className="h-6 w-6 dark:text-white" />
          ) : (
            <Menu className="h-6 w-6 dark:text-white" />
          )}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav
        className={`bg-gray-100 dark:bg-gray-950 text-black dark:text-white shadow-inner md:h-screen md:w-[250px] fixed md:static top-[60px] w-full md:block z-40 transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden md:block"
        }`}
      >
        <div className="flex flex-col">
          {links.map((link) => {
            if ("subLinks" in link) {
              return (
                <div key={link.label} className="w-full">
                  <button
                    onClick={() => setProjectsOpen(!projectsOpen)}
                    className={`p-4 w-full text-left flex items-center justify-between font-medium ${
                      pathname?.startsWith("/projects")
                        ? "bg-[#8badec] text-black"
                        : "text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white"
                    }`}
                    aria-expanded={projectsOpen}
                    aria-controls="project-submenu"
                  >
                    <span>{link.label}</span>
                    {projectsOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>

                  {projectsOpen && (
                    <div
                      id="project-submenu"
                      className="pl-4 pb-2 flex flex-col gap-1"
                    >
                      {link.subLinks?.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`block px-4 py-2 text-sm rounded ${
                            pathname === sub.href
                              ? "bg-[#8badec] text-black"
                              : "text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white"
                          }`}
                          onClick={closeMenu}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            } else if ("target" in link) {
              return (
                <ExternalNavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  target={link.target}
                  rel={link.rel}
                />
              );
            } else {
              return (
                <InternalNavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={pathname === link.href}
                  onClick={closeMenu}
                />
              );
            }
          })}
        </div>
      </nav>
    </>
  );
}
