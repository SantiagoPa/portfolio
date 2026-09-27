import createMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";

// Solo actúa sobre "/": redirige al idioma preferido (Accept-Language / cookie NEXT_LOCALE).
// El matcher limitado a "/" evita que el resto de rutas pierdan el renderizado estático.
export default createMiddleware(routing);

export const config = {
  matcher: ["/"],
};
