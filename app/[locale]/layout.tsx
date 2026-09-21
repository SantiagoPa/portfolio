import { notFound } from "next/navigation";
import { Archivo, IBM_Plex_Sans } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { getDictionary } from "@/content";
import { mainId } from "@/content/shared";
import { isLocale, locales } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

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
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = getDictionary(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title: meta.title,
    description: meta.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${archivo.variable} ${plex.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a
            href={`#${mainId}`}
            className="sr-only rounded-sm bg-surface px-4 py-3 font-medium text-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:border focus:border-rule"
          >
            {dict.header.skipLink}
          </a>
          <SiteHeader locale={locale} dict={dict} />
          <main id={mainId} className="flex-1">
            {children}
          </main>
          <SiteFooter dict={dict.footer} />
        </ThemeProvider>
      </body>
    </html>
  );
}
