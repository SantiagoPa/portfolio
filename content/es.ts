import type { Dictionary } from "@/content/types";

// Textos provisionales derivados del CV; el contenido definitivo llega en las fases 4-8.
export const es = {
  meta: {
    title: "Santiago Padilla Arcia — Fullstack Developer | React, Next.js, TypeScript",
    description:
      "Santiago Padilla Arcia, Fullstack Developer en Montería, Colombia. React, Next.js y TypeScript, de la interfaz al servidor.",
  },
  header: {
    homeLabel: "Ir al inicio",
    brand: "Santiago Padilla",
    brandShort: "SP",
    skipLink: "Saltar al contenido",
    navLabel: "Secciones",
    themeToggle: "Cambiar entre tema claro y oscuro",
    language: {
      label: "Idioma",
      names: { es: "Español", en: "English" },
    },
    menu: {
      open: "Abrir menú",
      close: "Cerrar menú",
      title: "Menú",
      description: "Navegación por las secciones del sitio",
    },
    cv: {
      label: "CV",
      ariaLabel: "Descargar CV en PDF",
    },
  },
  nav: {
    perfil: "Perfil",
    experiencia: "Experiencia",
    stack: "Stack",
    proyectos: "Proyectos",
    contacto: "Contacto",
  },
  hero: {
    name: "Santiago Padilla Arcia",
    role: "Fullstack Developer",
    tagline:
      "Construyo y mantengo aplicaciones web con JavaScript y TypeScript, de la interfaz al servidor, con arquitecturas limpias y escalables.",
    location: "Montería, Colombia",
    ctaExperience: "Ver experiencia",
    ctaCv: "Descargar CV",
  },
  profile: {
    heading: "Perfil",
    summary:
      "Trabajo como desarrollador frontend utilizando principalmente las tecnologías que nos proporciona JavaScript, tanto del lado del Cliente como del lado del Servidor, siempre siguiendo arquitecturas limpias y escalables de la mano de diseños modernos.",
    education: {
      degree: "Ingeniero de Sistemas",
      institution: "Universidad de Córdoba, Montería",
      period: "agosto 2018 – octubre 2023",
    },
  },
  experience: {
    heading: "Experiencia",
    present: "presente",
  },
  stack: {
    heading: "Stack",
  },
  projects: {
    heading: "Proyectos",
  },
  contact: {
    heading: "Contacto",
    email: "Correo electrónico",
    location: "Ubicación",
    cv: "Descargar CV",
    references: "Referencias disponibles a solicitud",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    builtWith: "Hecho con Next.js y Tailwind CSS",
  },
  notFound: {
    title: "Página no encontrada",
    description: "La página que buscas no existe.",
    back: "Volver al inicio",
  },
} satisfies Dictionary;
