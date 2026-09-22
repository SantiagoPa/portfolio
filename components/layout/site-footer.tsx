import { useTranslations } from "next-intl";

import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-block-soft/30 bg-block text-block-foreground">
      <div className="mx-auto flex w-full max-w-[68rem] flex-col gap-1 px-5 py-6 type-meta md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {year} {siteConfig.name}. {t("rights")}
        </p>
        <p className="text-block-soft">{t("builtWith")}</p>
      </div>
    </footer>
  );
}
