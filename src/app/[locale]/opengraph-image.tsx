import { ImageResponse } from "next/og";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = siteConfig.name;

// Colores fijos del bloque oscuro del sistema (docs/BLUEPRINT.md §4.2), variante oscura: la
// imagen OG es una superficie fija, no responde a `prefers-color-scheme`.
const colors = {
  block: "#0e2033",
  blockForeground: "#e6ecf2",
  blockSoft: "#9fb3c4",
  signal: "#f0b429",
};

interface OgImageProps {
  params: Promise<{ locale: string }>;
}

// Prerenderiza la imagen para `/es` y `/en` (SSG, igual que el resto del sitio).
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// `ImageResponse` por idioma (docs/BLUEPRINT.md §12, §16 Fase 9). Sin `next/font/google`: no
// admite `ImageResponse` sin cargar el buffer de la fuente por red, así que se usa una pila
// sans-serif del sistema ("alternativa sobria sin inventar assets"), coherente con los tokens.
export default async function OpengraphImage({ params }: OgImageProps) {
  const { locale: requested } = await params;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "hero" });

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        backgroundColor: colors.block,
        fontFamily: 'system-ui, "Segoe UI", -apple-system, sans-serif',
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: colors.blockForeground,
            lineHeight: 1.05,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 34,
            fontWeight: 600,
            color: colors.blockSoft,
          }}
        >
          {t("role")}
        </div>
        <div
          style={{
            marginTop: 32,
            maxWidth: 880,
            fontSize: 26,
            lineHeight: 1.5,
            color: colors.blockForeground,
          }}
        >
          {t("tagline")}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: 2,
            backgroundColor: colors.blockSoft,
          }}
        >
          <div
            style={{
              display: "flex",
              width: "22%",
              height: 2,
              backgroundColor: colors.signal,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 24,
            color: colors.blockSoft,
          }}
        >
          {t("location")}
        </div>
      </div>
    </div>,
    { ...size },
  );
}
