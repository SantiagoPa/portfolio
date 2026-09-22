import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import type { IconType } from "react-icons";
import type { TechLevel } from "@/content/types";

interface TechBadgeProps {
  level?: TechLevel;
  // Logo de la tecnología (react-icons, Simple Icons); opcional, hoy solo lo usa Stack.
  icon?: IconType;
  className?: string;
  children: React.ReactNode;
}

// Etiqueta de tecnología con jerarquía de posicionamiento (docs/BLUEPRINT.md §6, §8).
// `primary`: tinta llena y algo más grande (keywords del objetivo laboral). `secondary`:
// contorno fino. Sin ámbar: es solo para estado.
export function TechBadge({
  level = "secondary",
  icon: Icon,
  className,
  children,
}: TechBadgeProps) {
  const primary = level === "primary";

  return (
    <Badge
      variant={primary ? "default" : "outline"}
      data-level={level}
      className={cn(primary && "px-3 py-1 text-base font-semibold", className)}
    >
      {Icon ? <Icon aria-hidden="true" className="size-3.5 shrink-0" /> : null}
      {children}
    </Badge>
  );
}
