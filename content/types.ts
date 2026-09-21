import type { Locale } from "@/lib/i18n";

import type { NavSectionId } from "@/content/shared";

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
  };
  profile: {
    heading: string;
    summary: string;
    education: {
      degree: string;
      institution: string;
      period: string;
    };
  };
  experience: {
    heading: string;
    present: string;
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
