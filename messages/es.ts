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
    paragraphs: {
      first:
        "Trabajo como desarrollador frontend con JavaScript y TypeScript, tanto del lado del cliente como del servidor, siguiendo arquitecturas limpias y escalables y diseños modernos.",
      second:
        "Buena parte de mi trabajo ha sido mantener, mejorar y optimizar aplicaciones que ya existen: evolucionarlas, refactorizarlas y resolver incidencias sin perder su estabilidad. También he participado en la creación de proyectos nuevos desde cero.",
    },
    workStyle: {
      heading: "Cómo trabajo",
      items: {
        communication:
          "Comunicación cercana con los clientes para entender sus requerimientos y expectativas antes de construir.",
        maintenance:
          "Mantenimiento, refactorización y resolución de incidencias en aplicaciones existentes para garantizar su estabilidad y rendimiento.",
        greenfield:
          "Participación en proyectos nuevos desde cero hasta un producto final elaborado y de calidad.",
      },
    },
    softSkills: {
      heading: "Habilidades blandas",
      items: {
        communication: "Comunicación",
        leadership: "Liderazgo",
        adaptability: "Adaptabilidad",
        flexibility: "Flexibilidad",
        responsibility: "Responsabilidad",
        teamwork: "Trabajo en equipo",
      },
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
    stackLabel: "Tecnologías",
    roles: {
      freelance: {
        title: "FullStack Developer",
        bullets: {
          first:
            "Mantenimiento, optimización y evolución de aplicaciones, con nuevas funcionalidades.",
          second: "Refactorización y resolución de incidencias.",
          third:
            "Desarrollo de nuevos proyectos con tecnologías modernas y buenas prácticas, para soluciones escalables, eficientes y mantenibles.",
        },
      },
      cognox: {
        title: "React Developer",
        bullets: {
          first: "Mantenimiento, mejora y optimización de aplicaciones web en React.",
          second:
            "Evolución de proyectos existentes y desarrollo de nuevas funcionalidades.",
          third: "Refactorización, e identificación y resolución de bugs.",
        },
      },
      sipremcol: {
        title: "Fullstack Developer",
        bullets: {
          first: "Desarrollo y mejora de funcionalidades de aplicaciones existentes.",
          second: "Creación de nuevos proyectos desde cero.",
          third:
            "Comunicación cercana con los clientes para entender sus requerimientos y expectativas.",
        },
      },
      draco: {
        title: "Desarrollador Jr.",
        bullets: {
          first: "Maquetación de cursos en línea con HTML y CSS.",
          second: "Implementación de interactividad y funcionalidad con JavaScript.",
        },
      },
    },
  },
  stack: {
    heading: "Stack",
    groups: {
      languages: "Lenguajes",
      frontend: "Frontend",
      mobile: "Mobile",
      backend: "Backend",
      databases: "Bases de datos",
      infrastructure: "Infraestructura",
      versionControl: "Control de versiones",
    },
  },
  projects: {
    heading: "Proyectos",
    // Borrador generado a partir de repos y demos públicos, pendiente de revisión
    // (content/PLACEHOLDERS.md). "" = sin evidencia suficiente: el bloque no se muestra.
    labels: {
      role: "Rol",
      problem: "Problema que resuelve",
      stack: "Tecnologías",
      demo: "Ver demo",
      repo: "Ver código",
      newTab: "(abre en una pestaña nueva)",
      imageAlt: "Captura de {title}",
    },
    items: {
      crc: {
        title: "Calculator CRC",
        role: "Proyecto personal",
        description:
          "Calculadora de CRC (código de redundancia cíclica): a partir de un dato binario y un polinomio generador calcula el CRC y la trama a transmitir.",
        problem: "",
        features: {
          first: "Muestra la división binaria (XOR) paso a paso.",
          second: "Expresa el dato, el generador y la trama en notación polinómica.",
          third: "Valida una trama modificada y comprueba si contiene errores.",
        },
      },
      maps: {
        title: "Maps App",
        role: "Proyecto personal",
        description: "",
        problem: "",
        features: { first: "", second: "", third: "" },
      },
      peajes: {
        title: "Peajes App",
        role: "Proyecto personal",
        description:
          "Aplicación para registrar vehículos en un peaje, con su categoría, valor, placa y turno.",
        problem: "",
        features: {
          first: "Registro de vehículos y listado de lo registrado.",
          second:
            "Consulta de categorías, con su valor y sus tipos de vehículo, y de turnos con su horario.",
          third: "Reporte de recaudo y cantidad de vehículos por categoría y por turno.",
        },
      },
      clima: {
        title: "CLI Clima App",
        role: "Proyecto personal",
        description:
          "Aplicación de consola en Node.js para buscar una ciudad y ver su clima actual, con datos de las API de Mapbox y OpenWeather.",
        problem: "",
        features: {
          first: "Búsqueda de ciudades y selección de un resultado entre varios.",
          second:
            "Muestra temperatura, mínima, máxima y descripción del clima, junto con latitud y longitud.",
          third: "Historial de búsquedas guardado en un archivo local.",
        },
      },
    },
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
} as const;
