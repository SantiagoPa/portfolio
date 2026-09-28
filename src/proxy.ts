import { NextResponse, type NextRequest } from "next/server";
import { hasLocale } from "next-intl";
import createMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";

const handleI18nRouting = createMiddleware(routing);

const localePages = new Set(routing.locales.map((locale) => `/${locale}`));

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // "/": redirige al idioma preferido (Accept-Language / cookie NEXT_LOCALE).
  if (pathname === "/") return handleI18nRouting(request);

  // "/es" y "/en" pasan sin tocar para no perder el renderizado estático.
  if (localePages.has(pathname)) return NextResponse.next();

  // Ruta no definida: vuelve al index, conservando el idioma si la URL lo trae.
  const [, segment] = pathname.split("/");
  const target = hasLocale(routing.locales, segment) ? `/${segment}` : "/";
  return NextResponse.redirect(new URL(target, request.url));
}

export const config = {
  // Excluye internos de Next, archivos con extensión (public/, robots.txt, sitemap.xml, icon.svg)
  // y las rutas de metadatos sin extensión (apple-icon, [locale]/opengraph-image).
  matcher: ["/((?!_next|_vercel|apple-icon|.*/opengraph-image|.*\\..*).*)"],
};
