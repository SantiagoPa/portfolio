import type { Locale } from "@/lib/i18n";

import type { ExperienceId, NavSectionId } from "@/content/shared";

// Dato no traducible de un rol. La Fase 5 lo reutiliza (fechas, orden, empresa); los textos
// traducibles del rol viven en `Dictionary["experience"]`, indexados por `ExperienceId`.
export interface Experience {
  id: ExperienceId;
  company: string;
  // Año de inicio. `end: null` marca el rol actual.
  start: number;
  end: number | null;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  header: {
    homeLabel: string;
    brand: string;
    brandShort: string;
    skipLink: string;
    navLabel: string;
    themeToggle: string;
    language: {
      label: string;
      names: Record<Locale, string>;
    };
    menu: {
      open: string;
      close: string;
      title: string;
      description: string;
    };
    cv: {
      label: string;
      ariaLabel: string;
    };
  };
  nav: Record<NavSectionId, string>;
  hero: {
    name: string;
    role: string;
    tagline: string;
    location: string;
    ctaExperience: string;
    ctaCv: string;
    measure: {
      // Nombre accesible de la lista sr-only con los 4 roles.
      label: string;
      // Etiqueta del extremo de la línea de cota (presente).
      today: string;
    };
  };
  profile: {
    heading: string;
    paragraphs: readonly [string, string];
    workStyle: {
      heading: string;
      items: readonly [string, string, string];
    };
    softSkills: {
      heading: string;
      items: readonly [string, string, string, string, string, string];
    };
    education: {
      heading: string;
      degree: string;
      institution: string;
      period: string;
    };
  };
  experience: {
    heading: string;
    present: string;
    // Cargo por rol; la empresa es un nombre propio y vive en `content/shared.ts`.
    roles: Record<ExperienceId, string>;
  };
  stack: {
    heading: string;
  };
  projects: {
    heading: string;
  };
  contact: {
    heading: string;
    email: string;
    location: string;
    cv: string;
    references: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
  notFound: {
    title: string;
    description: string;
    back: string;
  };
}
