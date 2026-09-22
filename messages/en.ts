import type { Messages } from "@/messages/types";

// Hero and Profile carry real CV content (EN is a faithful translation pending review);
// the rest is provisional (phases 5-8).
export const en: Messages = {
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
    paragraphs: {
      first:
        "I work as a frontend developer with JavaScript and TypeScript, on both the client and the server side, following clean, scalable architectures and modern designs.",
      second:
        "Much of my work has been maintaining, improving and optimizing applications that already exist: evolving them, refactoring them and resolving incidents without losing their stability. I have also taken part in building new projects from scratch.",
    },
    workStyle: {
      heading: "How I work",
      items: {
        communication:
          "Close communication with clients to understand their requirements and expectations before building.",
        maintenance:
          "Maintenance, refactoring and incident resolution in existing applications to ensure their stability and performance.",
        greenfield:
          "Involvement in new projects from scratch to a polished, high-quality final product.",
      },
    },
    softSkills: {
      heading: "Soft skills",
      items: {
        communication: "Communication",
        leadership: "Leadership",
        adaptability: "Adaptability",
        flexibility: "Flexibility",
        responsibility: "Responsibility",
        teamwork: "Teamwork",
      },
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
    stackLabel: "Technologies",
    roles: {
      freelance: {
        title: "FullStack Developer",
        bullets: {
          first:
            "Maintenance, optimization and evolution of applications, including new features.",
          second: "Refactoring and incident resolution.",
          third:
            "Development of new projects with modern technologies and good practices, for scalable, efficient and maintainable solutions.",
        },
      },
      cognox: {
        title: "React Developer",
        bullets: {
          first: "Maintenance, improvement and optimization of React web applications.",
          second: "Evolution of existing projects and development of new features.",
          third: "Refactoring, and identification and resolution of bugs.",
        },
      },
      sipremcol: {
        title: "Fullstack Developer",
        bullets: {
          first: "Development and improvement of features in existing applications.",
          second: "Creation of new projects from scratch.",
          third:
            "Close communication with clients to understand their requirements and expectations.",
        },
      },
      draco: {
        title: "Junior Developer",
        bullets: {
          first: "Layout of online courses with HTML and CSS.",
          second: "Implementation of interactivity and functionality with JavaScript.",
        },
      },
    },
  },
  stack: {
    heading: "Stack",
    groups: {
      languages: "Languages",
      frontend: "Frontend",
      mobile: "Mobile",
      backend: "Backend",
      databases: "Databases",
      infrastructure: "Infrastructure",
      versionControl: "Version control",
    },
  },
  projects: {
    heading: "Projects",
    labels: {
      role: "Role",
      problem: "Problem it solves",
      stack: "Technologies",
      demo: "View demo",
      repo: "View code",
      newTab: "(opens in a new tab)",
      imageAlt: "Screenshot of {title}",
    },
    items: {
      crc: {
        title: "Calculator CRC",
        role: "Personal project",
        description:
          "CRC (cyclic redundancy check) calculator: from a binary data string and a generator polynomial, it computes the CRC and the frame to transmit.",
        problem: "",
        features: {
          first: "Shows the binary (XOR) division step by step.",
          second:
            "Expresses the data, the generator and the frame in polynomial notation.",
          third: "Validates a modified frame and checks whether it contains errors.",
        },
      },
      maps: {
        title: "Maps App",
        role: "Personal project",
        description: "",
        problem: "",
        features: { first: "", second: "", third: "" },
      },
      peajes: {
        title: "Peajes App",
        role: "Personal project",
        description:
          "Application to register vehicles at a toll booth, with their category, price, license plate and shift.",
        problem: "",
        features: {
          first: "Vehicle registration and a list of what has been registered.",
          second:
            "Categories, with their price and vehicle types, and shifts with their hours.",
          third: "Report of revenue and vehicle count by category and by shift.",
        },
      },
      clima: {
        title: "CLI Clima App",
        role: "Personal project",
        description:
          "Node.js console application to search for a city and see its current weather, using data from the Mapbox and OpenWeather APIs.",
        problem: "",
        features: {
          first: "City search and selection of one result among several.",
          second:
            "Shows temperature, minimum, maximum and a weather description, plus latitude and longitude.",
          third: "Search history saved to a local file.",
        },
      },
    },
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
};
