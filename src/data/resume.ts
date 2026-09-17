export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
  icon: "network" | "shield" | "systems" | "analytics";
};

export type Experience = {
  role: string;
  organization: string;
  location?: string;
  dates: string;
  bullets: string[];
  technologies?: string[];
  current?: boolean;
};

export type Education = {
  institution: string;
  location?: string;
  degree: string;
  date: string;
};

export const profile = {
  name: "Juan Rodriguez",
  eyebrow: "Build · Secure · Improve",
  title: "Information Systems Security Engineer",
  descriptor:
    "Cybersecurity · Systems Integration · Computer Science · Technical Project Delivery",
  summary:
    "Information Systems Security Engineer with a Computer Science background and experience spanning systems integration, network analysis, secure systems validation, containerized deployment, technical project delivery, and quality assurance.",
  overview: [
    "I am an Information Systems Security Engineer currently working at the Naval Facilities Engineering and Expeditionary Warfare Center. I have experience in systems integration, network analysis, secure systems validation, technical documentation, Docker deployment, microservices integration, quality assurance, web platform lifecycle management, and cybersecurity tooling.",
    "I hold a Bachelor of Science in Computer Science and previously served as a United States Navy Hospital Corpsman, where I developed a strong foundation in discipline, teamwork, and mission-focused problem solving.",
  ],
  email: "quiet.signal.294@proton.me",
  linkedin: "https://www.linkedin.com/in/juan-rodriguez-26b39427a/",
  github: "https://github.com/gtech29",
  stelEstheticsUrl: "https://stelesthetics.net/",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Security & Network Analysis",
    description: "Tools for examining traffic, logs, and system behavior.",
    items: ["ACAS", "Splunk", "Wireshark", "PCAP Analysis"],
    icon: "network",
  },
  {
    title: "Risk Management & Authorization",
    description: "Experience with risk management and authorization tooling.",
    items: ["DoW Risk Management Framework (RMF)", "eMASS"],
    icon: "shield",
  },
  {
    title: "Systems & Platforms",
    description:
      "Operating systems, virtualization, and containerized delivery.",
    items: ["Linux (Ubuntu)", "Windows", "VMware", "Docker"],
    icon: "systems",
  },
  {
    title: "Web Development & Analytics",
    description: "Platform lifecycle work, measurement, and user workflows.",
    items: ["Webflow", "React Router", "Google Analytics"],
    icon: "analytics",
  },
];

export const experience: Experience[] = [
  {
    role: "Information Systems Security Engineer (ISSE)",
    organization:
      "Naval Facilities Engineering and Expeditionary Warfare Center",
    location: "Port Hueneme, CA",
    dates: "June 2026 – Present",
    current: true,
    bullets: [
      "Coordinate systems integration, project priorities, and technical deliverables across cross-functional teams.",
      "Analyze network communications and system behavior to identify issues and support technical assessments.",
      "Perform network analysis, technical documentation, and secure systems validation for cybersecurity and systems engineering.",
    ],
    technologies: [
      "Systems integration",
      "Network analysis",
      "Secure systems validation",
    ],
  },
  {
    role: "Computer Science Research Assistant",
    organization:
      "Naval Facilities Engineering and Expeditionary Warfare Center",
    dates: "October 2024 – May 2026",
    bullets: [
      "Implemented Docker containers to standardize software deployment across distributed field and offline environments, improving operational consistency and reliability.",
      "Partnered with cybersecurity, network, and application teams to execute microservices integration testing across system components.",
      "Validated integrated services for secure and reliable operation across supported deployment environments.",
      "Guided a 10-member cross-functional team through technical presentations and system updates.",
      "Authored technical documentation supporting system updates, maintenance, lifecycle support, and issue resolution.",
    ],
    technologies: [
      "Docker",
      "Microservices integration",
      "Technical documentation",
      "Systems validation",
    ],
  },
  {
    role: "Technical Project Lead / Web Developer",
    organization: "StelEsthetics",
    location: "Los Angeles, CA",
    dates: "February 2022 – May 2026",
    bullets: [
      "Managed the website lifecycle from Webflow development through migration to React Router.",
      "Coordinated responsive design, accessibility, SEO, and content updates across the platform.",
      "Implemented Google Analytics to track engagement, booking paths, and high-performing pages.",
      "Used analytics insights to refine navigation and improve client booking workflows.",
      "Planned e-commerce enhancements to expand functionality, maintainability, and scalability.",
    ],
    technologies: [
      "Webflow",
      "React Router",
      "Google Analytics",
      "Responsive design",
      "SEO",
      "Accessibility",
    ],
  },
  {
    role: "Business Analyst Intern – Quality Assurance",
    organization: "Accenture, LLC",
    location: "Los Angeles, CA",
    dates: "June 2023 – August 2023",
    bullets: [
      "Conducted regression testing to validate database functionality.",
      "Supported website deployments serving more than 10,000 monthly users through quality assurance testing.",
      "Coordinated Agile testing milestones with Cisco stakeholders to support timely project delivery.",
    ],
    technologies: ["Regression testing", "Quality assurance", "Agile delivery"],
  },
];

export const training: Experience = {
  role: "Cybersecurity Student",
  organization: "CodePath Cybersecurity Course",
  location: "Los Angeles, CA",
  dates: "June 2025 – August 2025",
  bullets: [
    "Completed a 10-week cybersecurity program focused on logging, incident response, intrusion detection, threat hunting, and security operations.",
    "Built Splunk Catalyst case study reports using Splunk and Wireshark.",
  ],
  technologies: ["Splunk", "Wireshark", "Security operations"],
};

export const militaryExperience: Experience = {
  role: "Hospital Corpsman",
  organization: "United States Navy",
  location: "Corpus Christi, TX",
  dates: "August 2008 – August 2011",
  bullets: [
    "Collaborated with multidisciplinary teams under strict operational protocols to support mission-critical care.",
  ],
};

export const education: Education[] = [
  {
    institution: "California State University, Northridge",
    degree: "Bachelor of Science, Computer Science",
    date: "May 2026",
  },
  {
    institution: "Rio Hondo Community College",
    location: "Whittier, CA",
    degree:
      "Associate of Science, Computer Information Systems and Mathematics",
    date: "May 2023",
  },
];
