"use client";

import { Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/resume";

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

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
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
        <Link className="brand-mark" href="/" aria-label="Juan Rodriguez home">
          <span className="brand-monogram" aria-hidden="true">
            JR
          </span>
          <span className="brand-name">Juan Rodriguez</span>
        </Link>

        <button
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
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
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
          <Linkedin aria-hidden="true" />
          <span>LinkedIn</span>
        </a>
      </div>
    </header>
  );
}
