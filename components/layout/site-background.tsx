"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

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

// Sin suscripción real: solo existe para que useSyncExternalStore reporte snapshots distintos
// en servidor (false) y cliente (true), que es exactamente el caso para el que está pensado.
const noopSubscribe = () => () => {};

export function SiteBackground() {
  const { resolvedTheme } = useTheme();
  // `resolvedTheme` no sirve para decidir el primer render: next-themes lee el tema guardado en
  // localStorage de forma síncrona (vía useState lazy init) apenas hay `window`, así que en el
  // *hidratado* del cliente ya llega resuelto mientras que en el servidor siempre es `undefined`
  // — eso es un mismatch de hidratación garantizado. `mounted` fuerza a que el primer render del
  // cliente (el que se compara contra el HTML del servidor) también devuelva null; el tema real
  // solo se pinta en el paso posterior a la hidratación, ya sin nada que comparar contra SSR.
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  if (!mounted) return null;

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
