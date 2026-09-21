import { Download } from "lucide-react";

import { LocaleSwitch } from "@/components/layout/locale-switch";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavAnchors } from "@/components/layout/nav-anchors";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { cvPath, navSectionIds } from "@/content/shared";

import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";

interface SiteHeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function SiteHeader({ locale, dict }: SiteHeaderProps) {
  const { header, nav } = dict;

  return (
    <header className="sticky top-0 z-40 h-(--header-height) border-b border-rule bg-paper">
      <div className="mx-auto flex h-full w-full max-w-[68rem] items-center justify-between gap-2 px-5 md:px-8">
        <a
          href="#inicio"
          aria-label={header.homeLabel}
          className="inline-flex h-11 items-center font-heading text-lg font-bold tracking-tight text-foreground"
        >
          <span aria-hidden="true" className="sm:hidden">
            {header.brandShort}
          </span>
          <span aria-hidden="true" className="hidden sm:inline">
            {header.brand}
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <NavAnchors label={header.navLabel} items={nav} />
          <LocaleSwitch current={locale} labels={header.language} />
          <ThemeToggle label={header.themeToggle} />
          <Button
            asChild
            variant="outline"
            size="sm"
            className="ml-2 hidden lg:inline-flex"
          >
            <a href={cvPath} download aria-label={header.cv.ariaLabel}>
              <Download strokeWidth={1.5} aria-hidden="true" className="size-4" />
              {header.cv.label}
            </a>
          </Button>
          <MobileNav
            items={navSectionIds.map((id) => ({ id, label: nav[id] }))}
            navLabel={header.navLabel}
            openLabel={header.menu.open}
            closeLabel={header.menu.close}
            title={header.menu.title}
            description={header.menu.description}
            cvHref={cvPath}
            cvLabel={header.cv.label}
            cvAriaLabel={header.cv.ariaLabel}
          />
        </div>
      </div>
    </header>
  );
}
