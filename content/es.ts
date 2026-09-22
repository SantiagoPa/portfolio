import type { Dictionary } from "@/content/types";

// Hero y Perfil ya llevan contenido real del CV; el resto son textos provisionales (fases 5-8).
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
    // TODO: estado de disponibilidad laboral (dato pendiente del usuario; no afirmarlo).
    measure: {
      label: "Trayectoria profesional",
      today: "hoy",
    },
  },
  profile: {
    heading: "Perfil",
    paragraphs: [
      "Trabajo como desarrollador frontend con JavaScript y TypeScript, tanto del lado del cliente como del servidor, siguiendo arquitecturas limpias y escalables y diseños modernos.",
      "Buena parte de mi trabajo ha sido mantener, mejorar y optimizar aplicaciones que ya existen: evolucionarlas, refactorizarlas y resolver incidencias sin perder su estabilidad. También he participado en la creación de proyectos nuevos desde cero.",
    ],
    workStyle: {
      heading: "Cómo trabajo",
      items: [
        "Comunicación cercana con los clientes para entender sus requerimientos y expectativas antes de construir.",
        "Mantenimiento, refactorización y resolución de incidencias en aplicaciones existentes para garantizar su estabilidad y rendimiento.",
        "Participación en proyectos nuevos desde cero hasta un producto final elaborado y de calidad.",
      ],
    },
    softSkills: {
      heading: "Habilidades blandas",
      items: [
        "Comunicación",
        "Liderazgo",
        "Adaptabilidad",
        "Flexibilidad",
        "Responsabilidad",
        "Trabajo en equipo",
      ],
    },
    education: {
      heading: "Formación",
      degree: "Ingeniero de Sistemas",
      institution: "Universidad de Córdoba, Montería",
      period: "agosto 2018 – octubre 2023",
    },
  },
  experience: {
    heading: "Experiencia",
    present: "presente",
    roles: {
      draco: "Desarrollador Jr.",
      sipremcol: "Fullstack Developer",
      cognox: "React Developer",
      freelance: "FullStack Developer",
    },
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
