import shivamPortrait from "@/assets/shivam-portrait.jpg";
import projPortfolio from "@/assets/project-portfolio.jpg";
import projSms from "@/assets/project-sms.jpg";
import projTodo from "@/assets/project-todo.jpg";

export const profile = {
  name: "Shivam Garg",
  role: "B.Tech Student",
  tagline: "B.Tech Student | AI & Technology Enthusiast",
  college: "JECRC UNIVERSITY",
  location: "Jaipur, India",
  email: "shivamgarghello@gmail.com",
  linkedin: "https://www.linkedin.com/in/shivam-garg-84b4ab409",
  github: "https://github.com/shivamgargdev",
  aboutMe:
    "I am a B.Tech student interested in technology, artificial intelligence, web development and digital productivity. I am learning modern technologies and building practical projects.",
  detailedBio:
    "Welcome! I am a passionate B.Tech Computer Science student at JECRC University with a deep fascination for modern web engineering, artificial intelligence, and streamlined digital productivity systems. I combine strong algorithmic thinking with clean, user-centric interface design to build practical, real-world solutions. Continuously learning, iterating, and exploring emerging technologies.",
  portrait: shivamPortrait,
  resume: "#contact",
};

export const typingRoles = [
  "B.Tech Student",
  "AI & Technology Enthusiast",
  "Frontend Web Developer",
  "Digital Productivity Builder",
  "Problem Solver",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const statHighlights = [
  { label: "Academic Degree", value: "B.Tech", suffix: "" },
  { label: "Core Skills", value: "8+", suffix: "" },
  { label: "Projects Built", value: "3+", suffix: "" },
  { label: "Certifications", value: "4+", suffix: "" },
];

export const educationData = {
  degree: "Bachelor of Technology (B.Tech)",
  specialization: "Computer Science & Engineering",
  college: "JECRC UNIVERSITY",
  year: "2024 — 2028 (Pursuing)",
  location: "Jaipur, Rajasthan, India",
  description:
    "Pursuing undergraduate studies with an intensive focus on computational theory, algorithmic problem-solving, modern web development, and artificial intelligence foundations.",
  learningAreas: [
    {
      title: "Data Structures & Algorithms",
      desc: "Arrays, Linked Lists, Trees, Graphs, Sorting & Searching, Algorithmic Complexity.",
    },
    {
      title: "Web Development & Frameworks",
      desc: "Semantic HTML5, CSS3, Modern JavaScript (ES6+), React component architecture, and responsive styling.",
    },
    {
      title: "Artificial Intelligence Foundations",
      desc: "Machine Learning concepts, intelligent agents, prompt engineering, and GenAI integrations.",
    },
    {
      title: "Database Management Systems (DBMS)",
      desc: "Relational database design, SQL querying, normalization, and data persistence.",
    },
    {
      title: "Object-Oriented Programming",
      desc: "Class structures, inheritance, polymorphism, encapsulation using Python and C++.",
    },
    {
      title: "Software Engineering & Tools",
      desc: "Version control with Git/GitHub, debugging workflows, and digital productivity tools.",
    },
  ],
};

export type SkillCategory = "All" | "Frontend & Web" | "AI & Programming" | "Productivity";

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level: number;
  description: string;
  badge: string;
  iconName: string;
}

export const skillsList: SkillItem[] = [
  {
    name: "HTML",
    category: "Frontend & Web",
    level: 90,
    description:
      "Semantic HTML5, document structure, accessibility (ARIA), and SEO best practices.",
    badge: "Structure",
    iconName: "FileCode2",
  },
  {
    name: "CSS",
    category: "Frontend & Web",
    level: 85,
    description:
      "Responsive design, Tailwind CSS, Flexbox/Grid layouts, animations, and modern UI styling.",
    badge: "Styling",
    iconName: "Palette",
  },
  {
    name: "JavaScript",
    category: "Frontend & Web",
    level: 80,
    description:
      "Modern ES6+, DOM manipulation, asynchronous programming, APIs, and state handling.",
    badge: "Logic",
    iconName: "FileJson",
  },
  {
    name: "Python",
    category: "AI & Programming",
    level: 82,
    description:
      "Core programming, object-oriented concepts, scripting, automation, and AI libraries.",
    badge: "Core Language",
    iconName: "Terminal",
  },
  {
    name: "Artificial Intelligence",
    category: "AI & Programming",
    level: 75,
    description:
      "Foundational AI principles, machine learning concepts, heuristic search, and data workflows.",
    badge: "Intelligence",
    iconName: "BrainCircuit",
  },
  {
    name: "Generative AI",
    category: "AI & Programming",
    level: 78,
    description:
      "LLM prompting, multimodal models, API integrations, and AI-assisted application building.",
    badge: "Cutting-Edge",
    iconName: "Sparkles",
  },
  {
    name: "Web Development",
    category: "Frontend & Web",
    level: 85,
    description:
      "Full frontend lifecycle with React, Vite, responsive UI/UX, and component-driven architecture.",
    badge: "Full Cycle",
    iconName: "Globe",
  },
  {
    name: "Digital Productivity",
    category: "Productivity",
    level: 88,
    description:
      "Workflow optimization, Markdown documentation, Git version control, and developer tooling.",
    badge: "Workflow",
    iconName: "Zap",
  },
];

export interface ProjectItem {
  title: string;
  tag: string;
  shortDesc: string;
  fullDesc: string;
  technologies: string[];
  image: string;
  liveDemo: string;
  github: string;
  highlights: string[];
}

export const projectsList: ProjectItem[] = [
  {
    title: "Personal Portfolio Website",
    tag: "Featured Project",
    shortDesc:
      "A modern, responsive, and high-performance personal portfolio website built with React, Vite, and Tailwind CSS showcasing skills, projects, and achievements.",
    fullDesc:
      "Designed and engineered from the ground up to present a clean, premium digital presence. Features smooth scrolling, dark/light theme switching, responsive mobile navigation, glassmorphic cards, and interactive UI animations.",
    technologies: ["React", "Vite", "Tailwind CSS", "TypeScript", "Motion"],
    image: projPortfolio,
    liveDemo: "#home",
    github: "https://github.com/shivamgargdev",
    highlights: [
      "100% responsive and accessible mobile-first architecture",
      "Interactive dark/light theme with persistent user preference",
      "Glassmorphic design system with smooth motion micro-interactions",
    ],
  },
  {
    title: "AI Website Project",
    tag: "AI & Innovation",
    shortDesc:
      "An intelligent, interactive AI-powered web platform integrating cutting-edge Generative AI models to assist users with automated content generation and smart workflows.",
    fullDesc:
      "Built to demonstrate the practical application of modern AI APIs. Enables real-time conversational assistance, prompt engineering workflows, and intelligent text processing with an intuitive, distraction-free user interface.",
    technologies: ["React", "Python", "Generative AI", "AI APIs", "Tailwind CSS"],
    image: projSms,
    liveDemo: "https://github.com/shivamgargdev",
    github: "https://github.com/shivamgargdev",
    highlights: [
      "Seamless integration with modern Generative AI endpoints",
      "Dynamic prompt templates and real-time response rendering",
      "Clean UI designed for seamless productivity and instant results",
    ],
  },
  {
    title: "Student Productivity Project",
    tag: "Productivity System",
    shortDesc:
      "A tailored digital productivity hub for college students featuring smart task tracking, study timer sessions, exam milestone organizers, and habit building.",
    fullDesc:
      "Engineered to help students organize their academic life effectively. Incorporates focus timers, category-based priority boards, local storage persistence, and quick progress analytics to prevent burnout and maximize focus.",
    technologies: ["JavaScript", "React", "Tailwind CSS", "LocalStorage", "Productivity Design"],
    image: projTodo,
    liveDemo: "https://github.com/shivamgargdev",
    github: "https://github.com/shivamgargdev",
    highlights: [
      "Distraction-free focus timer with audible cues and break intervals",
      "Prioritized task organization with persistent local state",
      "Study goal tracker designed specifically for university coursework",
    ],
  },
];

export type AchievementCategory =
  "All" | "Certifications" | "Hackathons" | "Courses" | "Awards" | "Other achievements";

export interface AchievementItem {
  title: string;
  category: "Certifications" | "Hackathons" | "Courses" | "Awards" | "Other achievements";
  issuer: string;
  date: string;
  description: string;
  badge: string;
  linkText?: string;
  linkUrl?: string;
}

export const achievementsList: AchievementItem[] = [
  {
    title: "Python Programming Foundations",
    category: "Certifications",
    issuer: "Online Certification Platform",
    date: "2025",
    description:
      "Comprehensive mastery of Python syntax, data structures, modular programming, and automated scripting.",
    badge: "Verified Certificate",
    linkText: "View Profile",
    linkUrl: profile.linkedin,
  },
  {
    title: "Modern Web Development",
    category: "Certifications",
    issuer: "Tech Learning Academy",
    date: "2025",
    description:
      "Hands-on certification covering HTML5, modern CSS3 layout techniques, responsive design, and JavaScript essentials.",
    badge: "Verified Certificate",
    linkText: "View Profile",
    linkUrl: profile.linkedin,
  },
  {
    title: "Introduction to Artificial Intelligence & GenAI",
    category: "Courses",
    issuer: "AI Educational Portal",
    date: "2025",
    description:
      "Explored fundamental principles of AI, machine learning terminology, large language models, and practical prompting.",
    badge: "Course Completed",
    linkText: "Course Details",
    linkUrl: profile.linkedin,
  },
  {
    title: "Version Control & GitHub Collaboration",
    category: "Certifications",
    issuer: "Developer Community",
    date: "2025",
    description:
      "Proficiency in Git branching, commit discipline, pull requests, resolving merge conflicts, and repository management.",
    badge: "Credential",
    linkText: "GitHub Profile",
    linkUrl: profile.github,
  },
  {
    title: "University Hackathon Participant",
    category: "Hackathons",
    issuer: "JECRC University Tech Fest",
    date: "2025",
    description:
      "Collaborated in an intensive hackathon challenge developing a prototype software solution for student community needs.",
    badge: "Hackathon",
  },
  {
    title: "Academic Excellence & Continuous Learning",
    category: "Awards",
    issuer: "JECRC University",
    date: "2024 — Present",
    description:
      "Maintained consistent high academic performance and demonstrated dedication to practical tech projects.",
    badge: "Honor",
  },
  {
    title: "Open Source Contributor & Tech Community Member",
    category: "Other achievements",
    issuer: "Student Developer Community",
    date: "2024 — Present",
    description:
      "Active contributor to student coding initiatives, tech meetups, and digital productivity workshops.",
    badge: "Community",
    linkText: "GitHub Profile",
    linkUrl: profile.github,
  },
];
