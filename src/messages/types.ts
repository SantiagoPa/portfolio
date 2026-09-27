import type { es } from "@/messages/es";

// Ensancha los literales de `es.ts` (`as const`) a `string`, conservando la forma y las claves.
// `en.ts` se declara contra este tipo: si le falta una clave (o sobra), no compila.
type Widen<T> = T extends string ? string : { -readonly [K in keyof T]: Widen<T[K]> };

export type Messages = Widen<typeof es>;
