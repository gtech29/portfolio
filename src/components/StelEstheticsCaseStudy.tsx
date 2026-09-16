import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { profile } from "@/data/resume";

const technologies = [
  "Webflow",
  "React Router",
  "Google Analytics",
  "Responsive Design",
  "SEO",
  "Accessibility",
];

export default function StelEstheticsCaseStudy() {
  return (
    <main id="main-content" className="case-study-page">
      <div className="section-shell">
        <section className="case-study-hero" aria-labelledby="case-study-title">
          <Link className="back-link" href="/#case-study">
            <ArrowLeft size={15} aria-hidden="true" /> Back to portfolio
          </Link>
          <p className="eyebrow">Featured technical case study</p>
          <h1 id="case-study-title">StelEsthetics Web Platform</h1>
          <p className="case-study-subtitle">
            Platform Lifecycle, Migration, Analytics &amp; User Experience
          </p>
          <a
            className="text-link case-study-hero-link"
            href={profile.stelEstheticsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the live StelEsthetics website
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </section>

        <div className="case-study-layout">
          <section className="case-study-panel wide" aria-labelledby="overview-title">
            <p className="mono-label">01 / OVERVIEW</p>
            <h2 id="overview-title">A responsive platform built around engagement and booking.</h2>
            <p>
              StelEsthetics is a responsive, mobile-first website initially developed in Webflow to improve client engagement and streamline booking. The platform included responsive design, mobile-first layouts, SEO optimization, accessibility considerations, user-friendly navigation, Google Analytics instrumentation, content updates, testimonials, and booking workflows.
            </p>
            <div className="case-study-mockup" aria-label="Abstract browser mockup representing the StelEsthetics platform. No customer data is shown.">
              <div className="mockup-browser">
                <div className="mockup-top"><i /><i /><i /><b>stelesthetics / responsive platform</b></div>
                <div className="mockup-body">
                  <div className="mockup-copy"><span /><b /><b /><em /></div>
                  <div className="mockup-photo" />
                </div>
                <div className="mockup-cards"><span /><span /><span /></div>
              </div>
            </div>
          </section>

          <section className="case-study-panel" aria-labelledby="challenge-title">
            <p className="mono-label">02 / CHALLENGE</p>
            <h2 id="challenge-title">Keep a client-facing platform useful as its needs evolve.</h2>
            <p>
              The work combined ongoing content and booking needs with a longer-term move toward a more flexible application structure. The goal was to preserve a clear user experience while creating room for future feature development and e-commerce functionality.
            </p>
          </section>

          <section className="case-study-panel" aria-labelledby="responsibilities-title">
            <p className="mono-label">03 / RESPONSIBILITIES</p>
            <h2 id="responsibilities-title">Technical project ownership across the platform lifecycle.</h2>
            <ul className="detail-list">
              <li>Managed the website lifecycle from Webflow development through migration to React Router.</li>
              <li>Coordinated responsive design, accessibility, SEO, and content updates.</li>
              <li>Used analytics insights to refine navigation and improve client booking workflows.</li>
              <li>Planned e-commerce enhancements for future functionality and maintainability.</li>
            </ul>
          </section>

          <section className="case-study-panel wide" aria-labelledby="evolution-title">
            <p className="mono-label">04 / PLATFORM EVOLUTION</p>
            <h2 id="evolution-title">A deliberate move from managed pages to a flexible application.</h2>
            <p>
              The platform was later migrated from Webflow to a React Router-based application to improve flexibility, maintainability, future feature development, and scalability.
            </p>
            <div className="evolution-track" aria-label="Platform evolution from Webflow to React Router">
              <div className="evolution-step"><span>Initial platform</span><strong>Webflow development</strong></div>
              <div className="evolution-step"><span>Operational focus</span><strong>Content, booking, and analytics</strong></div>
              <div className="evolution-step"><span>Next structure</span><strong>React Router migration</strong></div>
            </div>
          </section>

          <section className="case-study-panel" aria-labelledby="analytics-title">
            <p className="mono-label">05 / ANALYTICS</p>
            <h2 id="analytics-title">Measure the paths that matter.</h2>
            <p>
              Google Analytics was used to identify engagement trends, high-performing pages, and effective booking paths. Those observations supported navigation and workflow refinements without overstating outcomes or introducing unsupported metrics.
            </p>
          </section>

          <section className="case-study-panel" aria-labelledby="ux-title">
            <p className="mono-label">06 / USER EXPERIENCE</p>
            <h2 id="ux-title">Clarity across screen sizes and content updates.</h2>
            <p>
              Responsive layouts, accessibility considerations, SEO-friendly structure, testimonials, and ongoing content updates helped keep the platform approachable and discoverable.
            </p>
          </section>

          <section className="case-study-panel wide" aria-labelledby="outcomes-title">
            <p className="mono-label">07 / OUTCOMES</p>
            <h2 id="outcomes-title">Supported outcomes.</h2>
            <ul className="check-list">
              <li><Check size={16} aria-hidden="true" /> Clear booking paths surfaced through navigation and calls to action.</li>
              <li><Check size={16} aria-hidden="true" /> Analytics instrumentation identified high-performing pages and funnels.</li>
              <li><Check size={16} aria-hidden="true" /> SEO-friendly structure and ongoing content supported discoverability.</li>
              <li><Check size={16} aria-hidden="true" /> Platform migration improved maintainability and future development flexibility.</li>
            </ul>
          </section>

          <section className="case-study-panel wide" aria-labelledby="technology-title">
            <p className="mono-label">08 / TECHNOLOGY</p>
            <h2 id="technology-title">Tools and practices.</h2>
            <ul className="tag-list">
              {technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </section>
        </div>

        <div className="case-study-next">
          <Link className="text-link" href="/#contact">
            Discuss the technical background <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}
