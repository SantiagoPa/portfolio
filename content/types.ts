import type { ExperienceId, TechGroupId } from "@/content/shared";

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
