import { Archivo, IBM_Plex_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { JsonLd } from "@/components/shared/json-ld";
import { mainId } from "@/content/shared";
import { routing } from "@/i18n/routing";
import { ogLocales, siteConfig } from "@/lib/site";

import type { Metadata } from "next";

import "../globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "meta" });
  const otherLocale = routing.locales.find((candidate) => candidate !== locale);
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: title, template: `%s | ${siteConfig.name}` },
    description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
        "x-default": `/${routing.defaultLocale}`,
      },
    },
    openGraph: {
      type: "profile",
      url: `/${locale}`,
      siteName: siteConfig.name,
      title,
      description,
      locale: ogLocales[locale],
      alternateLocale: otherLocale ? ogLocales[otherLocale] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "header" });

  return (
    <html
      lang={locale}
      className={`${archivo.variable} ${plex.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <JsonLd locale={locale} />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a
            href={`#${mainId}`}
            className="sr-only rounded-sm bg-surface px-4 py-3 font-medium text-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:border focus:border-rule"
          >
            {t("skipLink")}
          </a>
          <SiteHeader />
          <main id={mainId} className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
