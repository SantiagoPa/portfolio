import { cn } from "@/lib/utils";

interface RailProps {
  tone?: "default" | "block";
}

// Eje vertical continuo. Cada sección dibuja su tramo y, al ir contiguas, forman una sola línea.
// Debe colocarse dentro de un contenedor `relative`. Por debajo de `lg` es un hairline a 20px del
// borde; desde `lg` marca el borde izquierdo del raíl de 72px reservado para las marcas.
export function Rail({ tone = "default" }: RailProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-y-0 left-5 w-px lg:left-8",
        tone === "block" ? "bg-block-soft/40" : "bg-rule",
      )}
    />
  );
}
