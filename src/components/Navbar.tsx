"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/work-experience", label: "Professional Experience" },
  {
    label: "Projects",
    subLinks: [
      { href: "/projects/digital-twin", label: "Digital Twin" },
      { href: "/projects/central-logging", label: "Central Logging System" },
      { href: "/projects/stelesthetics", label: "StelEsthetics" },
    ],
  },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact Me" },
];

function NavLink({
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
  const inactiveClass = "text-black hover:bg-gray-700 hover:text-white";

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
        <button onClick={toggleMenu}>
          {isOpen ? (
            <X className="h-6 w-6 dark:text-white" />
          ) : (
            <Menu className="h-6 w-6 dark:text-white" />
          )}
        </button>
      </div>

      {/* Sidebar Nav */}
      <nav
        className={`bg-gray-100 dark:bg-gray-950 text-black dark:text-white shadow-inner md:h-screen md:w-[250px] fixed md:static top-[60px] w-full md:block z-40 transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden md:block"
        }`}
      >
        <div className="flex flex-col dark:text-white">
          {links.map((link) =>
            "subLinks" in link ? (
              <div key={link.label} className="w-full">
                <button
                  onClick={() => setProjectsOpen(!projectsOpen)}
                  className={`p-4 w-full text-left flex items-center justify-between font-medium ${
                    pathname?.startsWith("/projects")
                      ? "bg-[#8badec] text-black"
                      : "text-black hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {projectsOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>

                {projectsOpen && (
                  <div className="pl-4 pb-2 flex flex-col gap-1">
                    {link.subLinks?.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`block px-4 py-2 text-sm rounded ${
                          pathname === sub.href
                            ? "bg-[#8badec] text-black"
                            : "text-black hover:bg-gray-700 hover:text-white"
                        }`}
                        onClick={closeMenu}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={pathname === link.href}
                onClick={closeMenu}
              />
            )
          )}
        </div>
      </nav>
    </>
  );
}
