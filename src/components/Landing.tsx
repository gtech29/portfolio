import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Boxes,
  Check,
  Github,
  Linkedin,
  Mail,
  Network,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import {
  education,
  experience,
  militaryExperience,
  profile,
  skillGroups,
  training,
} from "@/data/resume";

function SectionHeading({
  index,
  eyebrow,
  title,
  titleId,
  children,
}: {
  index: string;
  eyebrow: string;
  title: string;
  titleId?: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <p className="section-index">{index}</p>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId}>{title}</h2>
        {children ? <div className="section-lede">{children}</div> : null}
      </div>
    </div>
  );
}

function SkillIcon({ type }: { type: (typeof skillGroups)[number]["icon"] }) {
  const props = { size: 20, strokeWidth: 1.6, "aria-hidden": true };
  if (type === "network") return <Network {...props} />;
  if (type === "shield") return <ShieldCheck {...props} />;
  if (type === "systems") return <Boxes {...props} />;
  return <BarChart3 {...props} />;
}

function ExperienceCard({
  role,
  organization,
  location,
  dates,
  bullets,
  technologies,
  current,
}: (typeof experience)[number]) {
  return (
    <article className="experience-card">
      <div className="experience-marker" aria-hidden="true">
        <span />
      </div>
      <div className="experience-content">
        <div className="experience-topline">
          <div>
            <p className="experience-kicker">
              {current ? "Current role" : "Experience"}
            </p>
            <h3>{role}</h3>
          </div>
          <time>{dates}</time>
        </div>
        <p className="experience-org">{organization}</p>
        {location ? <p className="experience-location">{location}</p> : null}
        <ul className="detail-list">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        {technologies ? (
          <ul className="tag-list" aria-label={`${role} focus areas`}>
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

function EducationCard({
  institution,
  location,
  degree,
  date,
}: (typeof education)[number]) {
  return (
    <article className="education-card">
      <div className="education-icon" aria-hidden="true">
        <BookOpen size={20} strokeWidth={1.6} />
      </div>
      <div>
        <p className="mono-label">{date}</p>
        <h3>{degree}</h3>
        <p className="education-institution">{institution}</p>
        {location ? <p className="experience-location">{location}</p> : null}
      </div>
    </article>
  );
}

export default function Landing() {
  return (
    <main id="main-content">
      <section
        className="hero section-shell"
        id="top"
        aria-labelledby="hero-title"
      >
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {profile.eyebrow}
          </p>
          <h1 id="hero-title">
            Juan Rodriguez
          </h1>
          <p className="hero-descriptor">{profile.descriptor}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">
              View experience <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              className="button button-quiet"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn <Linkedin size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-meta" aria-label="Current professional context">
            <span>Current role</span>
            <span>Port Hueneme, CA</span>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="Decorative systems relationship diagram"
        >
          <div className="visual-orbit orbit-one" aria-hidden="true" />
          <div className="visual-orbit orbit-two" aria-hidden="true" />
          <div className="visual-line line-a" aria-hidden="true" />
          <div className="visual-line line-b" aria-hidden="true" />
          <div className="visual-line line-c" aria-hidden="true" />
          <div className="visual-node node-core">
            <span className="node-index">01</span>
            <strong>ISSE</strong>
            <small>systems assurance</small>
          </div>
          <div className="visual-node node-one">
            <span className="node-index">A</span>
            <strong>ANALYSIS</strong>
            <small>network behavior</small>
          </div>
          <div className="visual-node node-two">
            <span className="node-index">B</span>
            <strong>INTEGRATION</strong>
            <small>system context</small>
          </div>
          <div className="visual-node node-three">
            <span className="node-index">C</span>
            <strong>VALIDATION</strong>
            <small>technical evidence</small>
          </div>
          <p className="visual-caption">
            Decorative systems map / not an architecture diagram
          </p>
        </div>
      </section>

      <section
        className="section-shell section-block"
        id="about"
        aria-labelledby="about-title"
      >
        <SectionHeading
          index="01"
          eyebrow="Professional overview"
          title="Security work grounded in systems context."
          titleId="about-title"
        />
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I currently work as an Information Systems Security Engineer,
              coordinating systems integration, technical priorities, network
              analysis, documentation, and secure systems validation across
              cross-functional teams.
            </p>
            <p>
              My broader technical background includes microservices integration
              testing, QA, web platform lifecycle management, and
              analytics-informed user workflows. I hold a Bachelor of Science in
              Computer Science and previously served in the United States Navy
              as a Hospital Corpsman.
            </p>
          </div>
          <figure className="portrait-card">
            <Image
              src="/profile.webp"
              alt="Portrait of Juan Rodriguez"
              width={800}
              height={800}
              sizes="(max-width: 900px) 100vw, 320px"
            />
            <figcaption>
              <span>JUAN RODRIGUEZ</span>
              <span>COMPUTER SCIENCE · CYBERSECURITY</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className="section-shell section-block"
        id="skills"
        aria-labelledby="skills-title"
      >
        <SectionHeading
          index="02"
          eyebrow="Core technical capabilities"
          title="A practical technical toolkit."
          titleId="skills-title"
        >
          Four areas connect the current security engineering role with prior
          systems, delivery, and platform experience.
        </SectionHeading>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-topline">
                <span className="skill-number">0{index + 1}</span>
                <SkillIcon type={group.icon} />
              </div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul className="tag-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section-shell section-block"
        id="experience"
        aria-labelledby="experience-title"
      >
        <SectionHeading
          index="03"
          eyebrow="Professional experience"
          title="From integration and validation to ISSE work."
          titleId="experience-title"
        >
          Roles are shown in professional relevance order, with the current
          Information Systems Security Engineer position first.
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
        className="section-shell section-block"
        id="case-study"
        aria-labelledby="case-study-title"
      >
        <SectionHeading
          index="04"
          eyebrow="Featured technical case study"
          title="StelEsthetics Web Platform."
          titleId="case-study-heading"
        />
        <article className="case-study-preview">
          <div className="case-study-preview-copy">
            <p className="mono-label">
              PLATFORM LIFECYCLE / MIGRATION / ANALYTICS
            </p>
            <h3 id="case-study-title">
              A client platform shaped by clear workflows and steady iteration.
            </h3>
            <p>
              A responsive, mobile-first website developed in Webflow, later
              migrated to a React Router-based application to support
              maintainability and future feature development.
            </p>
            <ul className="check-list">
              <li>
                <Check size={16} aria-hidden="true" /> Responsive design, SEO,
                and accessibility considerations
              </li>
              <li>
                <Check size={16} aria-hidden="true" /> Google Analytics
                instrumentation for engagement and booking paths
              </li>
              <li>
                <Check size={16} aria-hidden="true" /> Ongoing content,
                testimonials, and e-commerce planning
              </li>
            </ul>
            <div className="case-study-links">
              <Link className="text-link" href="/case-studies/steleesthetics">
                Read the case study <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a
                className="text-link text-link-muted"
                href={profile.stelEstheticsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit StelEsthetics <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="platform-visual" aria-hidden="true">
            <div className="browser-bar">
              <span />
              <span />
              <span />
              <b>steleesthetics / platform</b>
            </div>
            <div className="platform-layout">
              <div className="platform-sidebar">
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="platform-main">
                <div className="platform-heading">
                  <span />
                  <em />
                </div>
                <div className="platform-cards">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="platform-chart">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
            <div className="platform-footer">
              <span /> <span /> <span />
            </div>
          </div>
        </article>
      </section>

      <section
        className="section-shell section-block split-block"
        id="development"
        aria-labelledby="development-title"
      >
        <div>
          <SectionHeading
            index="05"
            eyebrow="Training & development"
            title="Cybersecurity training, clearly labeled as training."
            titleId="development-title"
          />
          <article className="compact-card">
            <div className="compact-card-icon" aria-hidden="true">
              <Terminal size={19} />
            </div>
            <div>
              <p className="mono-label">{training.dates}</p>
              <h3>{training.role}</h3>
              <p className="compact-org">
                {training.organization} · {training.location}
              </p>
              <ul className="detail-list">
                {training.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <ul className="tag-list">
                {training.technologies?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
        <div id="military">
          <SectionHeading
            index="06"
            eyebrow="Military experience"
            title="United States Navy."
            titleId="military-title"
          />
          <article className="compact-card military-card">
            <div className="compact-card-icon" aria-hidden="true">
              <ShieldCheck size={19} />
            </div>
            <div>
              <p className="mono-label">{militaryExperience.dates}</p>
              <h3>{militaryExperience.role}</h3>
              <p className="compact-org">
                {militaryExperience.organization} ·{" "}
                {militaryExperience.location}
              </p>
              <ul className="detail-list">
                {militaryExperience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section
        className="section-shell section-block"
        id="education"
        aria-labelledby="education-title"
      >
        <SectionHeading
          index="07"
          eyebrow="Education"
          title="Computer Science foundation."
          titleId="education-title"
        />
        <div className="education-grid">
          {education.map((item) => (
            <EducationCard key={item.institution} {...item} />
          ))}
        </div>
      </section>

      <section
        className="section-shell section-block contact-block"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="contact-copy">
          <SectionHeading
            index="08"
            eyebrow="Contact"
            title="Connect."
            titleId="contact-title"
          />
          <p>
            For professional networking or technical conversations, connect with
            me through LinkedIn or email.
          </p>
        </div>
        <div className="contact-actions">
          <a className="contact-link" href={`mailto:${profile.email}`}>
            <Mail size={18} aria-hidden="true" />
            <span>
              <small>Email</small>
              {profile.email}
            </span>
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
          <a
            className="contact-link"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={18} aria-hidden="true" />
            <span>
              <small>LinkedIn</small>Connect professionally
            </span>
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <p className="footer-name">Juan Rodriguez</p>
            <p>Information Systems Security Engineer</p>
          </div>
          <div className="footer-links">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} aria-hidden="true" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={17} aria-hidden="true" />
            </a>
            <span>© {new Date().getFullYear()} Juan Rodriguez</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
