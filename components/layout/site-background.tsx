"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

// AeroShards es WebGPU + ~80KB de lógica de render: se carga solo en cliente y fuera del bundle
// inicial (no bloquea el LCP del hero, que es texto).
const AeroShards = dynamic(
  () => import("@/components/animations/aero-shards").then((mod) => mod.AeroShards),
  { ssr: false },
);

// Paletas hex fijas: AeroShards solo acepta `#rrggbb`, no `var(--token)`. Sincronizadas a mano
// con los tokens del plano en app/globals.css (:root / .dark) — si esos cambian, actualizar aquí.
const PALETTES = {
  light: { backgroundColor: "#eff1f4", shardColor: "#40566b", accentColor: "#9a5f00" },
  dark: { backgroundColor: "#0d1b2a", shardColor: "#3d5a78", accentColor: "#f0b429" },
} as const;

export function SiteBackground() {
  const { resolvedTheme } = useTheme();

  // Antes de que next-themes resuelva el tema (SSR / primer render), no montar nada: el `body`
  // ya pinta bg-background debajo, así que no hay parpadeo ni salto de color.
  if (!resolvedTheme) return null;

  const palette = resolvedTheme === "dark" ? PALETTES.dark : PALETTES.light;

  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <AeroShards
        {...palette}
        placement="full"
        material="satin"
        detail="fine"
        density={0.8}
        shardSize={0.9}
        glow={0.6}
        bloom={0.3}
        grain={0.03}
        interaction="repel"
        onError={undefined}
      />
    </div>
  );
}
