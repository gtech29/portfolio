import { RevealOnScroll } from "../RevealOnScroll";

const SectionCard = ({ title, data }) => (
  <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
    <div className="space-y-6">
      {data.map(({ company, title, years, description }, index) => (
        <div key={index} className="p-4 border border-white/10 rounded-lg">
          <h4 className="font-semibold text-blue-400 text-lg">
            {title} @ {company}
            <span className="text-sm text-gray-400"> ({years})</span>
          </h4>
          <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
            {description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

import PropTypes from "prop-types";

SectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      years: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export const About = () => {
  const programmingLanguages = ["Python", "Java", "HTML", "CSS", "SQL"];
  const programmingTools = [
    "Git & GitHub",
    "Docker",
    "Kubernetes",
    "Linux",
    "CI/CD",
    "SSH",
  ];
  const programmingFrameworks = [
    "Flask",
    "Bootstrap",
    "React",
    "Node.js",
    "Webflow",
    "OpenAI API",
  ];

  const workExperience = [
    {
      company: "NAVFAC EXWC",
      title: "Research & Development Intern",
      years: "Dec 2024 \u2013 Present",
      description: [
        "Developed and configured containerized applications to enhance deployment efficiency.",
        "Configured secure network setups for control systems, ensuring robust connectivity.",
        "Simulated operations using Python for accurate system modeling and testing.",
      ],
    },
    {
      company: "StelEsthetics",
      title: "Website Developer",
      years: "Feb 2022 \u2013 Present",
      description: [
        "Built a responsive website with Webflow, optimizing UX for mobile and desktop.",
        "Showcased services like facials, lash lifts, and peels to increase client engagement.",
        "Improved navigation and booking flow, increasing appointments by 15%.",
      ],
    },
    {
      company: "Accenture, LLC",
      title: "Business Analyst Intern",
      years: "Jun 2023 \u2013 Aug 2023",
      description: [
        "Tested Cisco's purchasing portal using SQL to simulate transactions.",
        "Debugged login issues to restore developer access, improving QA workflow.",
        "Led strategic meetings to align Accenture and Cisco development efforts.",
      ],
    },
    {
      company: "US Navy",
      title: "Hospital Corpsman",
      years: "Aug 2008 \u2013 Aug 2011",
      description: [
        "Applied critical thinking and technical skills in high-pressure environments.",
      ],
    },
  ];

  const campusInvolvement = [
    {
      company: "CSUN",
      title: "Association for Computing Machinery (ACM)",
      years: "Jul 2024 \u2013 Present",
      description: [
        "Built and maintained chapter website using HTML, CSS, JS, and Bootstrap.",
        "Increased engagement by 15% via UX improvements and analytics tracking.",
      ],
    },
  ];

  const educationExperience = [
    {
      company: "California State University, Northridge",
      title: "B.S. in Computer Science",
      years: "Expected Graduation: May 2026",
      description: [
        "Relevant Courses: Data Structures, Network Security, Software Engineering.",
        "GPA: 3.5 / 4.0",
      ],
    },
    {
      company: "Rio Hondo College",
      title: "A.S. in Computer Info. Systems & Mathematics",
      years: "Jun 2021 \u2013 May 2023",
      description: [
        "Relevant Courses: Ethical Hacking, System Design.",
        "GPA: 3.5 / 4.0",
      ],
    },
  ];

  const skillTagGroup = (title, list) => (
    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {list.map((item, index) => (
          <span
            key={index}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl border-white/10 border hover:-translate-y-1 transition-all mb-6">
            <p className="text-gray-300 mb-6 text-center">
              I&#39;m a rising senior at CSUN majoring in Computer Science with
              a passion for systems, security, and DevSecOps. I enjoy building
              scalable solutions through containerized development and
              automation. I&#39;m currently expanding my experience with tools
              like Docker and Kubernetes in both academic and industry settings.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillTagGroup("Programming Languages", programmingLanguages)}
              {skillTagGroup("Programming Tools", programmingTools)}
              {skillTagGroup("Frameworks & Platforms", programmingFrameworks)}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8">
            <SectionCard title="Work Experience" data={workExperience} />
            <SectionCard title="Campus Involvement" data={campusInvolvement} />
            <SectionCard title="Education" data={educationExperience} />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
export default About;
export { SectionCard };
