import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CodeXml,
  Database,
  FileText,
  GraduationCap,
  Mail,
  Shield,
  Star,
} from "lucide-react";
import StelEstheticsPreview from "@/components/StelEstheticsPreview";
import LinkedInIcon from "@/components/LinkedInIcon";
import {
  education,
  experience,
  militaryExperience,
  profile,
  skillGroups,
  training,
} from "@/data/resume";

function SectionHeading({
  id,
  children,
  icon,
}: {
  id: string;
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <h2 className="section-heading" id={id}>
      {icon}
      <span>{children}</span>
    </h2>
  );
}

function SkillIcon({ type }: { type: (typeof skillGroups)[number]["icon"] }) {
  const props = { strokeWidth: 1.5, "aria-hidden": true as const };
  if (type === "network") return <Shield {...props} />;
  if (type === "shield") return <FileText {...props} />;
  if (type === "systems") return <Database {...props} />;
  return <CodeXml {...props} />;
}

function compactDates(dates: string) {
  return dates.replace(
    /\b(January|February|March|April|June|July|August|September|October|November|December)\b/g,
    (month) => month.slice(0, 3),
  );
}

function LinkedInButton() {
  return (
    <a
      className="button button-quiet"
      href={profile.linkedin}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedInIcon />
      Connect on LinkedIn
    </a>
  );
}

function ExperienceCard({
  role,
  organization,
  location,
  dates,
  bullets,
  current,
}: (typeof experience)[number]) {
  return (
    <article className={`experience-card${current ? " is-current" : ""}`}>
      <div className="experience-meta">
        <p>{compactDates(dates)}</p>
        {location && <p className="experience-location">{location}</p>}
      </div>
      <div className="experience-content">
        <h3>{role}</h3>
        <p className="experience-org">{organization}</p>
        <ul className="detail-list">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function BackgroundCard({
  item,
  military = false,
}: {
  item: typeof training;
  military?: boolean;
}) {
  return (
    <article className={`compact-card${military ? " military-card" : ""}`}>
      <div className="compact-card-icon" aria-hidden="true">
        {military ? <Star /> : <GraduationCap />}
      </div>
      <div>
        <h3>{item.organization}</h3>
        <p className="compact-meta">
          <span>{item.location}</span>
          <span>{item.role}</span>
          <span>{compactDates(item.dates)}</span>
        </p>
        <ul className="detail-list">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Landing() {
  return (
    <main id="main-content" className="portfolio-page">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="section-shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">{profile.eyebrow}</p>
            <h1 id="hero-title">{profile.name}</h1>
            <p className="hero-role">{profile.title}</p>
            <p className="hero-descriptor">{profile.descriptor}</p>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">
                View Experience <ArrowRight aria-hidden="true" />
              </a>
              <LinkedInButton />
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <Image
              className="hero-globe"
              src="/security-globe.svg"
              alt=""
              width={460}
              height={400}
              priority
            />
            <div className="hero-annotations">
              <p>
                People
                <br />
                Systems
                <br />
                Security
                <br />A more resilient
                <br />
                Tomorrow
              </p>
              <p>
                Secure
                <br />
                Integrate
                <br />
                Deliver
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-shell resume-sections">
        <section
          className="about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <SectionHeading id="about-title">
            <span className="heading-white">About / </span>Professional Overview
          </SectionHeading>
          <div className="about-copy">
            {profile.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section
          className="section-block"
          id="skills"
          aria-labelledby="skills-title"
        >
          <SectionHeading id="skills-title">
            Core Technical Capabilities
          </SectionHeading>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <SkillIcon type={group.icon} />
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.items.join(", ")}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section-block"
          id="experience"
          aria-labelledby="experience-title"
        >
          <SectionHeading id="experience-title">
            Professional Experience
          </SectionHeading>
          <div className="experience-list">
            {experience.map((item) => (
              <ExperienceCard
                key={`${item.organization}-${item.role}`}
                {...item}
              />
            ))}
          </div>
        </section>

        <section
          className="section-block"
          id="case-study"
          aria-labelledby="case-study-title"
        >
          <SectionHeading id="case-study-title">
            Featured Case Study
          </SectionHeading>
          <article className="case-study-preview">
            <StelEstheticsPreview />
            <div className="case-study-preview-copy">
              <h3>StelEsthetics Web Platform</h3>
              <p className="case-study-preview-subtitle">
                Platform Lifecycle, Migration, Analytics &amp; User Experience
              </p>
              <p className="case-study-preview-description">
                A responsive, mobile-first website built with Webflow and later
                migrated to React Router. Implemented Google Analytics to track
                engagement and booking workflows, with a focus on SEO-friendly
                structure, content updates, and long-term scalability.
              </p>
              <Link
                className="button button-primary"
                href="/case-studies/steleesthetics"
              >
                View Case Study <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </article>
        </section>

        <div className="section-block split-block">
          <section id="development" aria-labelledby="development-title">
            <SectionHeading
              id="development-title"
              icon={<GraduationCap aria-hidden="true" />}
            >
              Cybersecurity Training &amp; Development
            </SectionHeading>
            <BackgroundCard item={training} />
          </section>
          <section id="military" aria-labelledby="military-title">
            <SectionHeading
              id="military-title"
              icon={<Star aria-hidden="true" />}
            >
              Military Experience
            </SectionHeading>
            <BackgroundCard item={militaryExperience} military />
          </section>
        </div>

        <section
          className="section-block education-section"
          id="education"
          aria-labelledby="education-title"
        >
          <SectionHeading id="education-title">Education</SectionHeading>
          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.institution}>
                <GraduationCap className="education-icon" aria-hidden="true" />
                <div>
                  <h3>{item.institution}</h3>
                  <p>{item.degree}</p>
                </div>
                <p className="education-date">{item.date}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section-block contact-block"
          id="contact"
          aria-labelledby="contact-title"
        >
          <SectionHeading id="contact-title">Contact / Connect</SectionHeading>
          <div className="contact-row">
            <div className="contact-copy">
              <Mail aria-hidden="true" />
              <p>
                For professional networking or technical conversations,
                <br className="desktop-break" /> connect with me through
                LinkedIn or email.
              </p>
            </div>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" />
              {profile.email}
            </a>
            <div className="contact-social">
              <LinkedInButton />
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <div>
            <p>
              © {new Date().getFullYear()} {profile.name}
            </p>
            <p>{profile.title}</p>
          </div>
          <p className="footer-motto">
            Build Today.
            <br />A More Secure Tomorrow.
          </p>
        </div>
      </footer>
    </main>
  );
}
