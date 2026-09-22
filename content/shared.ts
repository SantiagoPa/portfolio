import type { Experience, Project, TechGroup, TechId } from "@/content/types";

// Datos no traducibles. Los ids de sección van en español en ambos idiomas para que
// los enlaces no se rompan al cambiar de locale.
export const sectionIds = [
  "inicio",
  "perfil",
  "experiencia",
  "stack",
  "proyectos",
  "contacto",
] as const;

export type SectionId = (typeof sectionIds)[number];

// Anclas del nav: todas menos el hero (el logo apunta a #inicio).
export const navSectionIds = [
  "perfil",
  "experiencia",
  "stack",
  "proyectos",
  "contacto",
] as const satisfies readonly SectionId[];

export type NavSectionId = (typeof navSectionIds)[number];

export const mainId = "contenido";

export const cvPath = "/cv/santiago-padilla-cv-es.pdf";

export const experienceIds = ["draco", "sipremcol", "cognox", "freelance"] as const;

export type ExperienceId = (typeof experienceIds)[number];

// Fuente única de los roles del CV, en orden cronológico ascendente (la línea de cota los
// dibuja de 2021 a hoy). La sección Experiencia lo muestra del más reciente al más antiguo
// invirtiendo una copia, sin duplicar los datos.
export const experiences = [
  {
    id: "draco",
    company: "Draco Servicios",
    start: 2021,
    end: 2022,
    // Literal del CV: maquetación HTML/CSS e interactividad con JavaScript.
    stack: ["html", "css", "javascript"],
  },
  { id: "sipremcol", company: "Sipremcol SAS", start: 2022, end: 2025 },
  {
    id: "cognox",
    company: "Cognox SAS",
    start: 2025,
    end: 2026,
    // El cargo del CV es literalmente "React Developer".
    stack: ["react"],
  },
  { id: "freelance", company: "Freelance / Contractor", start: 2026, end: null },
] as const satisfies readonly Experience[];

// Nombres propios de tecnología: no se traducen. Única fuente de etiquetas (Stack y Experiencia).
export const techLabels = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  python: "Python",
  react: "React",
  nextjs: "Next.js",
  redux: "Redux",
  mui: "MUI",
  tailwind: "Tailwind CSS",
  bootstrap: "Bootstrap",
  reactNative: "React Native",
  nodejs: "Node.js",
  express: "Express",
  nestjs: "NestJS",
  mongodb: "MongoDB",
  mysql: "MySQL",
  postgresql: "PostgreSQL",
  docker: "Docker",
  kubernetes: "Kubernetes",
  cicd: "CI/CD",
  aws: "AWS",
  git: "Git",
  github: "GitHub",
  gitlab: "GitLab",
  html: "HTML",
  css: "CSS",
} as const satisfies Record<TechId, string>;

export const techGroupIds = [
  "languages",
  "frontend",
  "mobile",
  "backend",
  "databases",
  "infrastructure",
  "versionControl",
] as const;

export type TechGroupId = (typeof techGroupIds)[number];

// Los 7 grupos del CV (docs/BLUEPRINT.md §6). El orden es de posicionamiento, no alfabético:
// React, Next.js y TypeScript (keywords del objetivo laboral) van primero y como `primary`;
// Python y Bootstrap quedan al final de su grupo. Sin porcentajes ni años por tecnología.
export const techGroups = [
  {
    id: "languages",
    technologies: [
      { id: "typescript", level: "primary" },
      { id: "javascript", level: "secondary" },
      { id: "python", level: "secondary" },
    ],
  },
  {
    id: "frontend",
    technologies: [
      { id: "react", level: "primary" },
      { id: "nextjs", level: "primary" },
      { id: "redux", level: "secondary" },
      { id: "mui", level: "secondary" },
      { id: "tailwind", level: "secondary" },
      { id: "bootstrap", level: "secondary" },
    ],
  },
  { id: "mobile", technologies: [{ id: "reactNative", level: "secondary" }] },
  {
    id: "backend",
    technologies: [
      { id: "nodejs", level: "secondary" },
      { id: "express", level: "secondary" },
      { id: "nestjs", level: "secondary" },
    ],
  },
  {
    id: "databases",
    technologies: [
      { id: "mongodb", level: "secondary" },
      { id: "mysql", level: "secondary" },
      { id: "postgresql", level: "secondary" },
    ],
  },
  {
    id: "infrastructure",
    technologies: [
      { id: "docker", level: "secondary" },
      { id: "kubernetes", level: "secondary" },
      { id: "cicd", level: "secondary" },
      { id: "aws", level: "secondary" },
    ],
  },
  {
    id: "versionControl",
    technologies: [
      { id: "git", level: "secondary" },
      { id: "github", level: "secondary" },
      { id: "gitlab", level: "secondary" },
    ],
  },
] as const satisfies readonly TechGroup[];

export const projectIds = ["crc", "maps", "peajes", "clima"] as const;

export type ProjectId = (typeof projectIds)[number];

// Los 4 proyectos del mock del usuario (content/PLACEHOLDERS.md). Añadir uno = añadir un id a
// `projectIds`, un objeto aquí y sus textos en `messages/{es,en}.ts`.
// Stack: solo dependencias/lenguaje verificados en el repo público (package.json y código) y
// presentes en el CV. Maps App no tiene repo y su demo no responde: stack vacío.
export const projects: readonly Project[] = [
  {
    id: "crc",
    github: "https://github.com/SantiagoPa/CalculatorCRCApp",
    demo: "https://crc-app.netlify.app",
    stack: ["react", "mui", "javascript"],
  },
  {
    id: "maps",
    demo: "https://maps-app-sp.netlify.app",
    stack: [],
  },
  {
    id: "peajes",
    github: "https://github.com/SantiagoPa/PeajeApp",
    demo: "https://app-peaje-santiagopa.netlify.app",
    stack: ["react", "typescript", "redux", "mui"],
  },
  {
    id: "clima",
    github: "https://github.com/SantiagoPa/AppClima",
    stack: ["nodejs", "javascript"],
  },
];
