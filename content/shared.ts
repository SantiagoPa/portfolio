import type { Experience } from "@/content/types";

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
// dibuja de 2021 a hoy). La Fase 5 (Experiencia) reutiliza este dato; si necesita el orden
// inverso, que invierta una copia en lugar de duplicar los datos.
export const experiences = [
  { id: "draco", company: "Draco Servicios", start: 2021, end: 2022 },
  { id: "sipremcol", company: "Sipremcol SAS", start: 2022, end: 2025 },
  { id: "cognox", company: "Cognox SAS", start: 2025, end: 2026 },
  { id: "freelance", company: "Freelance / Contractor", start: 2026, end: null },
] as const satisfies readonly Experience[];
