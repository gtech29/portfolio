"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/resume";
import LinkedInIcon from "@/components/LinkedInIcon";

const links = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Case Study", href: "/#case-study" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const mobileViewport = window.matchMedia("(max-width: 760px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (!event.matches) setIsOpen(false);
    };

    mobileViewport.addEventListener("change", closeOnDesktop);
    return () => mobileViewport.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuToggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.toggle("menu-open", isOpen);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link
          className="brand-mark"
          href="/"
          aria-label="Juan Rodriguez home"
          onClick={() => setIsOpen(false)}
        >
          <span className="brand-monogram" aria-hidden="true">
            JR
          </span>
          <span className="brand-name">Juan Rodriguez</span>
        </Link>

        <button
          ref={menuToggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav${isOpen ? " is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          className="nav-linkedin"
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with Juan Rodriguez on LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </div>
    </header>
  );
}
