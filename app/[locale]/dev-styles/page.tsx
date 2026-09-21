import type { Metadata } from "next";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// TEMPORAL (Fase 2): banco de pruebas de estilos base. Se borra en la Fase 10.
export const metadata: Metadata = {
  title: "Estilos base",
  robots: { index: false, follow: false },
};

const tokens = [
  { name: "paper", className: "bg-paper" },
  { name: "surface", className: "bg-surface" },
  { name: "ink", className: "bg-ink" },
  { name: "ink-soft", className: "bg-ink-soft" },
  { name: "rule", className: "bg-rule" },
  { name: "signal", className: "bg-signal" },
  { name: "block", className: "bg-block" },
  { name: "block-soft", className: "bg-block-soft" },
];

export default function DevStylesPage() {
  return (
    <div className="mx-auto w-full max-w-[68rem] px-5 py-20 md:px-8 md:py-28">
      <div className="flex items-center justify-between gap-4">
        <p className="type-meta text-muted-foreground">Página temporal de estilos base</p>
        <ThemeToggle label="Cambiar tema" />
      </div>

      <section className="mt-16" aria-labelledby="ds-type">
        <h1>Nombre de muestra</h1>
        <h2 id="ds-type" className="mt-10">
          Título de sección
        </h2>
        <h3 className="mt-8">Título de empresa o proyecto</h3>
        <p className="mt-4 max-w-measure">
          Texto de cuerpo a 17px con interlineado 1.62 y un ancho máximo de 66 caracteres,
          para comprobar el ritmo de lectura en IBM Plex Sans. Este párrafo es solo de
          prueba y no es contenido del sitio.
        </p>
        <p className="mt-3 type-meta text-muted-foreground">
          Meta o anotación en tinta suave, <time dateTime="2026">2026</time> ·{" "}
          <time dateTime="2021">2021</time> con cifras tabulares.
        </p>
        <p className="mt-3 type-meta font-medium">Peso 500 de IBM Plex Sans.</p>
      </section>

      <Separator className="my-16" />

      <section aria-labelledby="ds-color">
        <h2 id="ds-color">Color</h2>
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {tokens.map((token) => (
            <li key={token.name}>
              <div className={`h-16 rounded-sm border ${token.className}`} />
              <p className="mt-2 type-meta text-muted-foreground">{token.name}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-sm border bg-surface p-5">
            <p>Texto sobre surface</p>
            <p className="type-meta text-muted-foreground">Ink-soft sobre surface</p>
          </div>
          <div className="rounded-sm bg-block p-5 text-block-foreground">
            <p>Texto block-foreground sobre bloque block</p>
            <a href="#ds-color" className="underline underline-offset-4">
              Enlace con foco sobre bloque oscuro
            </a>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      <section aria-labelledby="ds-ui">
        <h2 id="ds-ui">Componentes</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="signal">Signal</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button disabled>Disabled</Button>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="signal">Signal</Badge>
        </div>
        <p className="mt-8 max-w-measure">
          Recorre con Tab para ver el anillo de foco{" "}
          <a href="#ds-ui" className="underline underline-offset-4">
            en un enlace
          </a>{" "}
          y en los botones.
        </p>
      </section>
    </div>
  );
}
