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
