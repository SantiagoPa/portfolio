import type { ExperienceId, ProjectId, TechGroupId } from "@/content/shared";

import type { StaticImageData } from "next/image";

// Tecnologías del CV (ver docs/BLUEPRINT.md §0 y §6). `html` y `css` solo aparecen en la
// experiencia de Draco: no forman parte de los grupos del Stack.
export type TechId =
  | "javascript"
  | "typescript"
  | "python"
  | "react"
  | "nextjs"
  | "redux"
  | "mui"
  | "tailwind"
  | "bootstrap"
  | "reactNative"
  | "expo"
  | "nodejs"
  | "express"
  | "nestjs"
  | "mongodb"
  | "mysql"
  | "postgresql"
  | "docker"
  | "kubernetes"
  | "cicd"
  | "aws"
  | "git"
  | "github"
  | "gitlab"
  | "html"
  | "css";

// Nivel de posicionamiento (no de dominio): `primary` marca las keywords del objetivo laboral.
export type TechLevel = "primary" | "secondary";

export interface TechGroupItem {
  id: TechId;
  level: TechLevel;
}

// Un grupo del Stack. El nombre traducible vive en `messages/{es,en}.ts` bajo
// `stack.groups.<id>`; el icono Lucide se asigna en `components/sections/stack.tsx`.
export interface TechGroup {
  id: TechGroupId;
  // Orden de posicionamiento, no alfabético.
  technologies: readonly TechGroupItem[];
}

// Dato no traducible de un rol. Los textos traducibles (cargo, bullets) viven en
// `messages/{es,en}.ts` bajo `experience.roles.<id>`.
export interface Experience {
  id: ExperienceId;
  company: string;
  // Año de inicio. `end: null` marca el rol actual.
  start: number;
  end: number | null;
  // Vacío/ausente por defecto: el CV no asocia tecnologías a empresas. Solo se rellena con lo
  // que el CV dice literalmente (Cognox: React; Draco: HTML, CSS, JavaScript).
  stack?: readonly TechId[];
}

// Dato no traducible de un proyecto. Los textos traducibles (título, rol, descripción, problema,
// características) viven en `messages/{es,en}.ts` bajo `projects.items.<id>`; un texto vacío ("")
// significa "sin evidencia suficiente" y el bloque correspondiente no se renderiza.
export interface Project {
  id: ProjectId;
  // Sin `github` no se muestra el enlace al repositorio; sin `demo`, el de la demo.
  github?: string;
  demo?: string;
  // Screenshot WebP 16:10 importado estáticamente (`import shot from "@/public/projects/x.webp"`).
  // Sin imagen se muestra el marcador `ImageOff`.
  image?: StaticImageData;
  // Solo tecnologías que aparecen en la evidencia del proyecto y en el CV. Vacío = sin bloque.
  stack: readonly TechId[];
}
