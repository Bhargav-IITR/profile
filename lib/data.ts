export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export const heroTypewriterWords = [
  "Software Engineer @BNY",
  "Distributed Systems",
  "Backend Developer",
  "IIT Roorkee '25",
  "Car Enthusiast",
];

export const heroStats = [
  "\u26A1 1 YR EXP",
  "\u{1F393} CGPA 8.63",
  "\u{1F3C6} AIR 1916 JEE ADV",
];

export const marqueeItems = [
  "Java",
  "Spring Boot",
  "Node.js",
  "Redis Pub/Sub",
  "Docker",
  "GCP",
  "MongoDB",
  "REST APIs",
  "Microservices",
  "TypeScript",
  "Python",
];

export const heroEngineSpecs = [
  { label: "ENGINE", value: "Java / Spring Boot", accent: "#0066CC" },
  { label: "FUEL SYS", value: "Node.js / Express", accent: "#E8002D" },
  { label: "COOLING", value: "Redis Pub/Sub", accent: "#0066CC" },
  { label: "CHASSIS", value: "Docker / GCP", accent: "#E8002D" },
  { label: "ECU CORE", value: "Multi-Agent LLMs", accent: "#0066CC" },
  { label: "DATA BUS", value: "SQL / MongoDB", accent: "#E8002D" },
] as const;

export const aboutStats = [
  { label: "TEAM", value: "BNY" },
  { label: "BASE", value: "Pune, India" },
  { label: "SEASON", value: "2025-PRESENT" },
  { label: "DEGREE", value: "IIT Roorkee EE" },
  { label: "CGPA", value: "8.63 / 10" },
  { label: "GITHUB", value: "Bhargav-IITR", href: "#contact-github" },
];

export const experienceEntries = [
  {
    company: "BNY",
    role: "Software Development Engineer",
    date: "Aug 2025 - Present",
    location: "Pune, India",
    accent: "#0066CC",
    bullets: [
      "Designed automated scheduler services in Java + Spring Boot managing data lifecycle across NAS storage systems",
      "Reduced stale data footprint by 35-40%, cutting storage overhead in high-volume surveillance workflows",
      "Built full-stack internal plugin (Angular + Java Spring Boot) for surveillance ingestion CRUD with pipeline visibility",
      "Designed multi-agent LLM workflow on internal ELIZA platform, orchestrating modular function units (nugget + state machine) to automate surveillance data reconciliation across MS Teams, Email, Confluence",
      "Refactored legacy Java codebase to SOLID principles; reduced average cyclomatic complexity per module by ~40%",
    ],
  },
  {
    company: "Gatepax AI",
    role: "Software Development Engineer (Part-Time, Remote)",
    date: "Jan 2025 - Aug 2025",
    location: "Denver, CO (Remote)",
    accent: "#E8002D",
    bullets: [
      "Designed and deployed scalable RESTful microservices using Node.js, Express, SQL on Google Cloud",
      "Implemented API rate limiting and request validation, reducing system errors by 60% under high traffic",
      "Integrated OpenAI APIs with retry logic, validation, and cost-aware request handling",
      "Developed secure OAuth (Google, Microsoft) and RBAC authentication systems",
      "Containerized services with Docker for consistent cross-environment deployment",
    ],
  },
  {
    company: "BNY Mellon",
    role: "Software Development Intern",
    date: "May 2024 - July 2024",
    location: "Pune, India",
    accent: "#D4AF37",
    bullets: [
      "Built RESTful APIs in Java + Spring Boot for internal alert management system",
      "Developed backend services integrated with Angular frontend for real-time alert monitoring",
      "Implemented unit tests and contributed to CI/CD pipelines",
    ],
  },
] as const;

export const projects = [
  {
    name: "ScaleChat",
    accent: "#0066CC",
    description:
      "Horizontally scalable real-time WebSocket messaging platform supporting persistent connections, direct messaging, and room-based chat across distributed server instances.",
    tech: [
      "Java 21",
      "Spring Boot",
      "WebSockets",
      "Redis Pub/Sub",
      "Docker",
      "Prometheus",
      "Grafana",
    ],
    github: "https://github.com/Bhargav-IITR/ScaleChat",
    live: null,
  },
  {
    name: "VLG Stable Diffusion",
    accent: "#E8002D",
    description:
      "Implemented and experimented with Stable Diffusion generative models and Vision Transformers for image generation and vision tasks. The project demonstrates hands-on experience with cutting-edge deep learning architectures through Jupyter notebook-based explorations and practical implementations.",
    tech: ["Python", "ViT", "Stable Diffusion", "PyTorch"],
    github: "https://github.com/Bhargav-IITR/VLG---PROJECT--STABLE-DIFFUSION",
    live: null,
  },
  {
    name: "GUI for Bullet Train Data Analysis",
    accent: "#D4AF37",
    description:
      "Developed a Python-based GUI using PyQt5 for real-time visualization and analysis of experimental data, significantly improving processing efficiency. Integrated Octave scripts via Oct2py for advanced computations, and built robust data logging and export features for seamless result sharing. Ensured application stability through thorough testing and debugging. This project was in collaboration with IIT Roorkee and NHSRCL",
    tech: [
      "Python",
      "Oct2Py",
      "Streamlit"
    ],
    github: "https://github.com/Bhargav-IITR/GUI_BulletTrain",
    live: null,
  },
  {
    name: "Personal portfolio website",
    accent: "#D4AF37",
    description:
      "Built a personal portfolio website using Next.js and React, showcasing projects, experience, and skills with a sleek, modern design. Implemented responsive layouts, interactive components, and optimized performance for fast load times. Deployed on Vercel with continuous integration for seamless updates.",
    tech: [
      "Next.js",
      "React",
      "TypeScript"
    ],
    github: "https://github.com/Bhargav-IITR/profile",
    live: null,
  },
] as const;

export const skillCategories = [
  {
    title: "BACKEND",
    skills: [
      "Java (Spring Boot)",
      "Node.js",
      "Express",
      "REST API Design",
      "Microservices Architecture",
    ],
  },
  {
    title: "DATABASES",
    skills: ["SQL", "MongoDB", "Query Optimization", "Indexing"],
  },
  {
    title: "CLOUD & DEVOPS",
    skills: ["Google Cloud (GCP)", "Docker", "CI/CD Pipelines"],
  },
  {
    title: "LANGUAGES",
    skills: ["Java", "C++", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "AI / ML INTEGRATION",
    skills: [
      "OpenAI APIs",
      "Multi-Agent Workflows",
      "LLM Platform Integration (ELIZA)",
    ],
  },
  {
    title: "SECURITY & AUTH",
    skills: [
      "Google OAuth",
      "Microsoft OAuth",
      "RBAC",
      "AES-256 Encryption",
    ],
  },
    {
    title: "Frontend",
    skills: [
      "AngularJS",
      "Next.js"
    ],
  },
] as const;

export const contactCards = [
  {
    label: "Email",
    value: "bhargav.nath.work@gmail.com",
    href: "mailto:bhargav.nath.work@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Bhargav-IITR",
    href: "https://github.com/Bhargav-IITR",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bhargav-pratim-nath",
    href: "https://linkedin.com/in/bhargav-pratim-nath",
  },
] as const;
