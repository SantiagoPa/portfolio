import type { ExperienceId } from "@/content/shared";

// Tecnologías con respaldo literal en el CV para un rol (ver docs/BLUEPRINT.md §0.2). La
// Fase 6 (Stack) ampliará esta unión con el resto de tecnologías del CV.
export type TechId = "react" | "html" | "css" | "javascript";

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
