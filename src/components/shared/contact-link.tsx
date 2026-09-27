import { cn } from "@/lib/utils";

import type { IconType } from "react-icons";

interface ContactLinkProps {
  // Icono decorativo (react-icons, sets Lucide/Simple Icons/Font Awesome); el texto
  // acompañante ya nombra el canal.
  icon: IconType;
  label: string;
  // Sin `href` no es un enlace (p. ej. la ubicación): se renderiza como texto.
  href?: string;
  // Enlaces a otro sitio: `target="_blank"`, `rel` y texto sr-only traducible.
  external?: boolean;
  // Texto sr-only para los enlaces externos ("(abre en una pestaña nueva)").
  newTab?: string;
  // Tinta del bloque en el que se coloca; hoy solo se usa sobre `--block`.
  className?: string;
}

const rowClass = "flex min-h-11 items-center gap-3 py-2";

// Un canal de contacto: icono + etiqueta + enlace (docs/BLUEPRINT.md §8). Target táctil >=44px.
export function ContactLink({
  icon: Icon,
  label,
  href,
  external = false,
  newTab,
  className,
}: ContactLinkProps) {
  const content = (
    <>
      <Icon strokeWidth={1.5} aria-hidden="true" className="size-5 shrink-0" />
      <span>{label}</span>
    </>
  );

  return href ? (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : null)}
      className={cn(
        rowClass,
        "decoration-block-soft underline-offset-4 hover:underline",
        className,
      )}
    >
      {content}
      {external && newTab ? <span className="sr-only">{newTab}</span> : null}
    </a>
  ) : (
    <span className={cn(rowClass, className)}>{content}</span>
  );
}
