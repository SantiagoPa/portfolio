import { NextResponse } from "next/server";

import { negotiateLocale } from "@/lib/i18n";

import type { NextRequest } from "next/server";

// Solo actúa sobre "/": redirige al idioma preferido (Accept-Language), por defecto es.
export function proxy(request: NextRequest) {
  const locale = negotiateLocale(request.headers.get("accept-language"));
  const response = NextResponse.redirect(new URL(`/${locale}`, request.url));
  response.headers.set("Vary", "Accept-Language");
  return response;
}

export const config = {
  matcher: ["/"],
};
