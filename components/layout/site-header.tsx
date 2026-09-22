import { useLocale, useTranslations } from "next-intl";
import { LuDownload } from "react-icons/lu";

import { LocaleSwitch } from "@/components/layout/locale-switch";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavAnchors } from "@/components/layout/nav-anchors";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { cvPath, navSectionIds } from "@/content/shared";

export function SiteHeader() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-40 h-(--header-height) border-b border-rule bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-full w-full max-w-[68rem] items-center justify-between gap-2 px-5 md:px-8">
        <a
          href="#inicio"
          aria-label={t("header.homeLabel")}
          className="inline-flex h-11 items-center font-heading text-lg font-bold tracking-tight text-foreground"
        >
          <span aria-hidden="true" className="sm:hidden">
            {t("header.brandShort")}
          </span>
          <span aria-hidden="true" className="hidden sm:inline">
            {t("header.brand")}
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <NavAnchors />

          <LocaleSwitch
            current={locale}
            label={t("header.language.label")}
            names={{
              es: t("header.language.names.es"),
              en: t("header.language.names.en"),
            }}
          />

          <ThemeToggle label={t("header.themeToggle")} />
          <Button
            asChild
            variant="outline"
            size="sm"
            className="ml-2 hidden lg:inline-flex"
          >
            <a href={cvPath} download aria-label={t("header.cv.ariaLabel")}>
              <LuDownload strokeWidth={1.5} aria-hidden="true" className="size-4" />
              {t("header.cv.label")}
            </a>
          </Button>
          <MobileNav
            items={navSectionIds.map((id) => ({ id, label: t(`nav.${id}`) }))}
            navLabel={t("header.navLabel")}
            openLabel={t("header.menu.open")}
            closeLabel={t("header.menu.close")}
            title={t("header.menu.title")}
            description={t("header.menu.description")}
            cvHref={cvPath}
            cvLabel={t("header.cv.label")}
            cvAriaLabel={t("header.cv.ariaLabel")}
          />
        </div>
      </div>
    </header>
  );
}
