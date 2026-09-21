import type { Dictionary } from "@/content/types";

// Provisional texts derived from the CV; the final copy arrives in phases 4-8.
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
  },
  profile: {
    heading: "Profile",
    summary:
      "I work as a frontend developer, mainly using the technologies JavaScript offers on both the client and the server side, always following clean, scalable architectures alongside modern designs.",
    education: {
      degree: "Systems Engineer",
      institution: "Universidad de Córdoba, Montería",
      period: "August 2018 – October 2023",
    },
  },
  experience: {
    heading: "Experience",
    present: "present",
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
