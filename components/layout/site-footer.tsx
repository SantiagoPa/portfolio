import { useTranslations } from "next-intl";

import { siteConfig } from "@/lib/site";

// Sobre `--paper` y no sobre `--block`: el bloque de Contacto que lo precede es oscuro en ambos
// temas, y otro bloque oscuro se fundiría con él. El cambio de fondo ya separa, sin hairline.
export function SiteFooter() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-[68rem] flex-col gap-1 px-5 py-8 type-meta md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {year} {siteConfig.name}. {t("rights")}
        </p>
        <p className="text-ink-soft">{t("tagline")}</p>
      </div>
    </footer>
  );
}
