import type { routing } from "@/i18n/routing";
import type { Messages } from "@/messages/types";

// Claves y locales tipados: `t("clave.inexistente")` y un locale no soportado fallan al compilar.
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: Messages;
  }
}
