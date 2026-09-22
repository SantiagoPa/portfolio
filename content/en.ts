import type { Dictionary } from "@/content/types";

// Hero and Profile carry real CV content (EN is a faithful translation pending review);
// the rest is provisional (phases 5-8).
export const en = {
  meta: {
    title: "Santiago Padilla Arcia — Fullstack Developer | React, Next.js, TypeScript",
    description:
      "Santiago Padilla Arcia, Fullstack Developer based in Montería, Colombia. React, Next.js and TypeScript, from the interface to the server.",
  },
  header: {
    homeLabel: "Go to top",
    brand: "Santiago Padilla",
    brandShort: "SP",
    skipLink: "Skip to content",
    navLabel: "Sections",
    themeToggle: "Switch between light and dark theme",
    language: {
      label: "Language",
      names: { es: "Español", en: "English" },
    },
    menu: {
      open: "Open menu",
      close: "Close menu",
      title: "Menu",
      description: "Navigate the sections of the site",
    },
    cv: {
      label: "CV",
      ariaLabel: "Download CV as PDF",
    },
  },
  nav: {
    perfil: "Profile",
    experiencia: "Experience",
    stack: "Stack",
    proyectos: "Projects",
    contacto: "Contact",
  },
  hero: {
    name: "Santiago Padilla Arcia",
    role: "Fullstack Developer",
    tagline:
      "I build and maintain web applications with JavaScript and TypeScript, from the interface to the server, with clean and scalable architectures.",
    location: "Montería, Colombia",
    ctaExperience: "View experience",
    ctaCv: "Download CV",
    // TODO: job availability status (pending from the user; do not claim it).
    measure: {
      label: "Professional timeline",
      today: "today",
    },
  },
  profile: {
    heading: "Profile",
    paragraphs: [
      "I work as a frontend developer with JavaScript and TypeScript, on both the client and the server side, following clean, scalable architectures and modern designs.",
      "Much of my work has been maintaining, improving and optimizing applications that already exist: evolving them, refactoring them and resolving incidents without losing their stability. I have also taken part in building new projects from scratch.",
    ],
    workStyle: {
      heading: "How I work",
      items: [
        "Close communication with clients to understand their requirements and expectations before building.",
        "Maintenance, refactoring and incident resolution in existing applications to ensure their stability and performance.",
        "Involvement in new projects from scratch to a polished, high-quality final product.",
      ],
    },
    softSkills: {
      heading: "Soft skills",
      items: [
        "Communication",
        "Leadership",
        "Adaptability",
        "Flexibility",
        "Responsibility",
        "Teamwork",
      ],
    },
    education: {
      heading: "Education",
      degree: "Systems Engineer",
      institution: "Universidad de Córdoba, Montería",
      period: "August 2018 – October 2023",
    },
  },
  experience: {
    heading: "Experience",
    present: "present",
    roles: {
      draco: "Junior Developer",
      sipremcol: "Fullstack Developer",
      cognox: "React Developer",
      freelance: "FullStack Developer",
    },
  },
  stack: {
    heading: "Stack",
  },
  projects: {
    heading: "Projects",
  },
  contact: {
    heading: "Contact",
    email: "Email",
    location: "Location",
    cv: "Download CV",
    references: "References available upon request",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with Next.js and Tailwind CSS",
  },
  notFound: {
    title: "Page not found",
    description: "The page you are looking for does not exist.",
    back: "Back to home",
  },
} satisfies Dictionary;
