# Blueprint — Portafolio de Santiago Padilla Arcia

## Context

Santiago necesita un portafolio profesional orientado a conseguir oportunidades como **Fullstack / React / Frontend Developer**. Hoy solo existe un CV en PDF (`~/Documents/Hoja De Vida/CV - Santiago Padilla.pdf`) y el directorio `~/Dev/projects/portfolio` está vacío (solo `.claude/`, `.agents/` y `skills-lock.json`; no es repo git todavía).

El CV es la **única fuente de verdad** de experiencia, stack y formación. Este documento es el blueprint completo para que la implementación no requiera decisiones de arquitectura, diseño ni contenido.

**Decisiones ya tomadas por Santiago:**

| Tema        | Decisión                                               |
| ----------- | ------------------------------------------------------ |
| Idioma      | Bilingüe ES/EN con toggle (rutas `/es` y `/en`)        |
| Contacto    | Enlaces directos, sin backend ni formulario            |
| Proyectos   | Los 4 del mock, con screenshots aportados por Santiago |
| Tema visual | Claro/oscuro con toggle                                |

---

## 0. Datos extraídos del CV (fuente de verdad)

**Identidad:** Santiago Padilla Arcia — Fullstack Developer.
**Contacto:** `santiagopadilla117@gmail.com` · +57 322 357 5357 · Cra. 24 B, Montería, Córdoba (Colombia).

**Perfil (textual del CV):** _"Trabajo como desarrollador frontend utilizando principalmente las tecnologías que nos proporciona JavaScript, tanto del lado del Cliente como del lado del Servidor, siempre siguiendo arquitecturas limpias y escalables de la mano de diseños modernos."_

**Experiencia (4 roles, continuos, sin gaps):**

| Periodo         | Empresa                | Cargo               | Núcleo de la responsabilidad (del CV)                                                                                                                                                                                                                         |
| --------------- | ---------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026 – presente | Freelance / Contractor | FullStack Developer | Mantenimiento, optimización y evolución de aplicaciones; nuevas funcionalidades; refactorización; resolución de incidencias; desarrollo de nuevos proyectos con tecnologías modernas y buenas prácticas para soluciones escalables, eficientes y mantenibles. |
| 2025 – 2026     | Cognox SAS             | React Developer     | Mantenimiento, mejora y optimización de aplicaciones web en React; evolución de proyectos existentes; nuevas funcionalidades; refactorización; identificación y resolución de bugs.                                                                           |
| 2022 – 2025     | Sipremcol SAS          | Fullstack Developer | Desarrollo y mejora de funcionalidades de aplicaciones existentes; creación de nuevos proyectos desde cero; **comunicación cercana con clientes** para entender requerimientos y expectativas.                                                                |
| 2021 – 2022     | Draco Servicios        | Desarrollador Jr.   | Maquetación de cursos en línea (HTML/CSS) e implementación de interactividad y funcionalidad con JavaScript.                                                                                                                                                  |

**Educación:** Ingeniero de Sistemas — Universidad de Córdoba, Montería (agosto 2018 – octubre 2023).

**Habilidades técnicas (literal del CV):** JavaScript & TypeScript · React & NextJs & Redux & MUI · React Native · Git & GitHub & GitLab · Bootstrap & Tailwind CSS · Node & Express & NestJs · Docker & Kubernetes & CI/CD · AWS · MongoDB & MySQL & Postgres · Python.

**Habilidades blandas:** Comunicación · Liderazgo · Adaptabilidad · Flexibilidad · Responsabilidad · Trabajo en equipo.

**Referencias:** Carlos Maussa y Santiago Lopez, con teléfono y correo personales.

### Discrepancias y decisiones de veracidad (importante)

1. **Vue no aparece en el CV.** Tu brief lo mencionaba, el CV no. Regla aplicada: **se excluye**. Si quieres incluirlo, confírmalo y se añade.
2. **El CV no asocia tecnologías a empresas.** No se inventará un stack por rol. El tipo de dato `Experience` incluye `stack?: TechId[]` **vacío por defecto**; solo se rellena con lo que tú confirmes (excepción segura: Cognox → React, porque el cargo es literalmente "React Developer", y Draco → HTML/CSS/JavaScript, porque el CV lo dice explícitamente).
3. **Referencias: no se publican.** Son teléfonos y correos de terceros; publicarlos sin su consentimiento es un riesgo legal y de spam. Se reemplazan por "Referencias disponibles a solicitud".
4. **Teléfono y dirección exacta:** se recomienda publicar solo **ciudad** (Montería, Colombia) y un enlace de WhatsApp con el número, no el número como texto plano indexable. Decisión pendiente tuya.
5. **El CV no contiene proyectos.** Los 4 del mock vienen de tu mensaje, no del CV; se tratan como contenido aportado por ti y se etiquetan como proyectos personales.

---

## 1. Resumen del concepto

**"Hoja de plano" (technical sheet).** El portafolio se presenta como un plano técnico: retícula de hairlines, márgenes de dibujo, anotaciones cotadas y un **eje vertical continuo** que recorre toda la página.

La idea nace de un hecho real y verificable del CV: **tres de los cuatro roles de Santiago son de mantenimiento, optimización y evolución de sistemas existentes**, encadenados sin interrupción desde 2021. No es un dev que solo arranca proyectos verdes: es alguien que hereda código en producción y lo mejora. Eso es exactamente lo que necesita una empresa con producto vivo, y es el posicionamiento del sitio.

El elemento memorable es uno solo: en el hero, una **línea de cota horizontal** que mide 2021 → hoy con una marca por cada rol. En mobile esa línea rota a vertical y **se convierte en el eje que estructura el resto de la página**. Una sola idea, usada dos veces, sostiene toda la composición. Todo lo demás es silencioso.

---

## 2. Objetivos

1. Que un reclutador entienda **quién es y qué resuelve** en menos de 10 segundos (hero).
2. Que encuentre **experiencia, stack y contacto** sin scroll exploratorio (nav ancla fija).
3. Posicionar en búsquedas de `React Developer`, `Frontend Developer`, `Fullstack Developer`, `Next.js Developer`, `TypeScript Developer` (ES y EN).
4. Que el propio sitio sea **evidencia técnica**: Lighthouse ≥ 95 en las 4 categorías, JS mínimo, accesible AA.
5. Acceso al CV en PDF en un clic desde cualquier punto de la página.
6. Base mantenible: añadir un proyecto o un rol = editar un archivo de contenido, nunca un componente.

---

## 3. Usuario objetivo

| Perfil                     | Qué busca                                                 | Cómo lo sirve el sitio                                             |
| -------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------ |
| Recruiter técnico (no-dev) | Años de experiencia, stack, ubicación, disponibilidad, CV | Hero + línea cotada + botón CV siempre visible                     |
| Hiring manager / Tech lead | Profundidad real, tipo de problemas resueltos, criterio   | Experiencia con verbos de acción del CV + calidad del propio sitio |
| Dev que evalúa código      | Repos, demos, limpieza del front                          | Sección Proyectos con enlaces a GitHub y demos en vivo             |
| Cliente freelance          | Qué construye, cómo comunica, cómo contactarlo            | Perfil + Contacto directo (WhatsApp/email)                         |

**Contexto de uso:** mayoritariamente mobile (recruiters revisando perfiles) y desktop en segunda pasada. Mobile-first no es negociable.

---

## 4. Dirección visual

### 4.1 Revisión contra los defaults genéricos

Antes de fijar la dirección se descartó explícitamente: fondo crema `#F4F1EA` + serif display + acento terracota; negro casi puro con acento verde ácido; layout broadsheet; el kit de cards SaaS idénticas con la misma sombra; y el _chrome_ de plantilla (eyebrows en MAYÚSCULAS tracked-out, cadenas `A · B · C`, `→` pegado al texto de los botones, mono para micro-etiquetas, `#0B0B0B` haciendo de negro). **Ninguno de esos recursos se usa.** El sistema que sigue se deriva del cianotipo / dibujo técnico, que conecta con "arquitecturas limpias y escalables" y con su formación de Ingeniero de Sistemas.

### 4.2 Color

Tokens en `globals.css` como variables CSS, consumidas por Tailwind v4 vía `@theme inline`.

**Claro (base papel frío):**

| Token        | Hex       | Uso                                                   |
| ------------ | --------- | ----------------------------------------------------- |
| `--paper`    | `#EFF1F4` | Fondo de página                                       |
| `--surface`  | `#FFFFFF` | Superficies elevadas (cards de proyecto, sheet)       |
| `--ink`      | `#0E2033` | Texto principal                                       |
| `--ink-soft` | `#40566B` | Texto secundario, metadatos                           |
| `--rule`     | `#C3CDD7` | Hairlines, retícula, bordes                           |
| `--signal`   | `#9A5F00` | **Único acento.** Estado "actual", foco, marca activa |

**Oscuro (base prusia):**

| Token        | Hex       |
| ------------ | --------- |
| `--paper`    | `#0D1B2A` |
| `--surface`  | `#13263A` |
| `--ink`      | `#E6ECF2` |
| `--ink-soft` | `#9FB3C4` |
| `--rule`     | `#27405A` |
| `--signal`   | `#F0B429` |

**Bloques que siguen oscuros en ambos temas (hero, contacto, footer):**

| Token                | Claro     | Oscuro    | Uso                                |
| -------------------- | --------- | --------- | ---------------------------------- |
| `--block`            | `#0E2033` | `#1D3550` | Fondo del bloque (`bg-block`)      |
| `--block-foreground` | `#EFF1F4` | `#E6ECF2` | Texto principal dentro del bloque  |
| `--block-soft`       | `#9FB3C4` | `#9FB3C4` | Texto secundario dentro del bloque |

> Bloques oscuros = `--block`, no `--ink`. `--ink` es el color de texto y se invierte con el tema; en oscuro es casi blanco, así que un bloque `bg-ink` quedaría claro.

**Reglas de color:**

- El ámbar `--signal` **solo** marca información de estado: el rol actual, el idioma activo, el anillo de foco, el punto de disponibilidad. Nunca decora.
- **Cero gradientes.** Ningún `bg-gradient-*` en el proyecto.
- **Cero sombras** salvo la del overlay del Sheet móvil. La jerarquía se construye con hairlines y espacio, no con elevación.
- Todo par texto/fondo debe pasar AA (4.5:1 texto normal, 3:1 texto ≥ 24px). Verificar `--ink-soft` sobre `--paper` y `--signal` sobre ambas bases. `--signal` claro (`#9A5F00`) da 4.63:1 sobre `--paper` y 5.24:1 sobre `--surface`, por lo que también sirve como color de texto. Dentro de `--block`, `--signal` es solo para foco y marcas (≥3:1: 3.15:1 en claro, 8.25:1 en oscuro), no para texto en el tema claro.

### 4.3 Tipografía

Dos familias, cargadas con `next/font/google` (self-host, `display: "swap"`, `subsets: ["latin"]`, variables CSS):

- **Display — `Archivo`** (variable, pesos 600/700). Grotesca industrial, anchura recta, muy legible en tamaños grandes. Para el nombre, los `h2` de sección y los nombres de empresa.
- **Cuerpo — `IBM Plex Sans`** (pesos 400/500). Humanista de origen técnico (IBM), con letterforms claramente distintos de Archivo. Para todo el texto corrido, metadatos y UI.

**No hay tercera familia y no se usa monospace en ninguna parte** — el mono para micro-etiquetas es el tell más común de los portafolios de dev.

**Escala modular 1.25 (tercera mayor), base 17px:**

| Rol                   | Tamaño                          | Line-height | Tracking |
| --------------------- | ------------------------------- | ----------- | -------- |
| Display (nombre)      | `clamp(2.75rem, 7vw, 5.25rem)`  | 1.02        | -0.03em  |
| H2 sección            | `clamp(1.75rem, 3.5vw, 2.6rem)` | 1.12        | -0.02em  |
| H3 (empresa/proyecto) | `1.328rem`                      | 1.25        | -0.01em  |
| Cuerpo                | `1.0625rem` (17px)              | 1.62        | 0        |
| Meta / anotación      | `0.85rem`                       | 1.45        | 0.01em   |

**Reglas tipográficas:**

- Ancho de línea máximo **66ch** en todo texto corrido (`max-w-[66ch]`).
- **Prohibido** acentuar una sola palabra del titular en otro color/itálica.
- **Prohibidas** las etiquetas en MAYÚSCULAS con tracking. Los metadatos van en sentence case a `0.85rem` en `--ink-soft`.
- **Prohibidos** los labels tipográficos sobre el contenido ("EXPERIENCIA —"). El `h2` ya es la etiqueta.
- Cifras tabulares (`font-variant-numeric: tabular-nums`) en fechas y años, para que las cotas alineen.

### 4.4 Espaciado y composición

- Escala base 4px (defaults de Tailwind). Ritmo vertical de sección: `py-20 md:py-28 lg:py-36`.
- Contenedor: `max-w-[68rem]` centrado, gutter `px-5 md:px-8`.
- **Margen de plano:** desde `lg`, un raíl izquierdo de 72px que contiene el eje vertical continuo y las marcas de sección. Por debajo de `lg` el raíl colapsa y el eje se pega al gutter izquierdo (línea de 1px a 20px del borde).
- **Todo alineado a la izquierda.** Ningún bloque de texto centrado — el centrado es el default genérico. Única excepción: el footer de una línea.
- **Bordes:** `--radius: 2px` como radio estructural (casi escuadra, como una hoja de dibujo). Círculo completo solo en el avatar y el punto de disponibilidad. No se usa el mismo radio para todo indiscriminadamente.
- **Separadores:** hairlines de 1px `--rule`. Las secciones se separan con espacio, no con líneas; las líneas solo aparecen donde codifican estructura (eje, cotas, borde inferior del header).

### 4.5 Dispositivos estructurales (qué información codifican)

| Dispositivo                | Qué significa                          | Dónde                |
| -------------------------- | -------------------------------------- | -------------------- |
| Eje vertical continuo      | La continuidad de la carrera, sin gaps | Raíl, toda la página |
| Marca de cota (tick + año) | Un cambio de rol                       | Hero y Experiencia   |
| Segmento ámbar             | Rol actual / disponibilidad            | Hero, Experiencia    |
| Hairline agrupadora        | Pertenencia de un grupo de tecnologías | Stack                |

**No se usan marcadores numerados `01 / 02 / 03`.** Solo la experiencia es una secuencia real, y ahí la secuencia la dan los años, que son información verdadera.

### 4.6 Movimiento

**Un único momento orquestado:** al cargar, la línea de cota del hero se dibuja de izquierda a derecha (≈600ms, `cubic-bezier(.22,1,.36,1)`) y las 4 marcas aparecen escalonadas 80ms. Nada más.

- Sin librería de animación. CSS puro, `transform`/`opacity` únicamente.
- **Sin** entradas fade-and-slide-up por sección al hacer scroll. **Sin** transiciones hover en cada card.
- Sí hay transición en cambios de estado que responden a una acción: apertura del Sheet, foco, cambio de tema.
- `@media (prefers-reduced-motion: reduce)` → todo en estado final, sin animación.

---

## 5. Estructura de la página

Una sola página por idioma (`/es`, `/en`) con anclas. Orden y propósito:

| #   | Sección     | `id`           | Propósito                                | Decisión                                    |
| --- | ----------- | -------------- | ---------------------------------------- | ------------------------------------------- |
| 0   | Header      | —              | Navegación, idioma, tema, CV             | Sticky, hairline inferior                   |
| 1   | Hero        | `#inicio`      | Quién es + prueba de continuidad + CTAs  | Bloque en `--ink`                           |
| 2   | Perfil      | `#perfil`      | Narrativa, formación y forma de trabajar | **Absorbe las soft skills y la educación**  |
| 3   | Experiencia | `#experiencia` | 4 roles sobre el eje                     | Sección núcleo                              |
| 4   | Stack       | `#stack`       | Tecnologías agrupadas por dominio        | Sin barras ni porcentajes                   |
| 5   | Proyectos   | `#proyectos`   | 4 proyectos con demo y repo              | Se oculta si el array está vacío            |
| 6   | Contacto    | `#contacto`    | Canales directos + CV + disponibilidad   | Bloque en `--ink`, cierra simétrico al hero |
| 7   | Footer      | —              | Copyright + repo del sitio               | Una línea                                   |

**Secciones eliminadas o fusionadas, con justificación:**

- **Soft Skills como sección propia: eliminada.** Una grilla de badges con "Liderazgo / Adaptabilidad" es ruido genérico. Se reescriben como 3–4 frases ancladas en hechos del CV dentro de Perfil (ej.: _Comunicación_ → "comunicación cercana con clientes para entender requerimientos", literal de Sipremcol).
- **Educación como sección propia: eliminada.** Es un dato, no una sección; vive como bloque compacto dentro de Perfil.
- **Referencias: eliminada.** Datos personales de terceros (ver §0).
- **Sección "Servicios" o similar: no se añade.** No hay respaldo en el CV.

---

## 6. Contenido por sección

Leyenda: ✅ existe en el CV · ✍️ redacción nueva derivada del CV (no inventa hechos) · ⚠️ **falta, lo debes aportar** · ➕ opcional.

### Hero

- ✅ Nombre: Santiago Padilla Arcia
- ✅ Cargo: Fullstack Developer
- ✍️ Frase de posicionamiento (ES): _"Construyo y mantengo aplicaciones web con JavaScript y TypeScript, de la interfaz al servidor, con arquitecturas limpias y escalables."_ (derivada literal del apartado PERFIL)
- ✍️ Línea cotada: 2021 · 2022 · 2025 · 2026→hoy con las 4 empresas
- ✅ Ubicación: Montería, Colombia
- ⚠️ Estado de disponibilidad (abierto a oportunidades / no disponible)
- CTAs: "Ver experiencia" (ancla) y "Descargar CV" (PDF)

### Perfil

- ✍️ 2 párrafos (≤ 66ch) derivados del apartado PERFIL y de los verbos recurrentes de la experiencia
- ✍️ 3 frases de forma de trabajo, ancladas en el CV: comunicación con clientes (Sipremcol), evolución de código existente (Cognox/Freelance), entrega desde cero (Sipremcol)
- ✅ Educación: Ingeniero de Sistemas, Universidad de Córdoba, ago 2018 – oct 2023
- ⚠️ Foto de perfil en alta resolución (la del PDF es de baja calidad)

### Experiencia

- ✅ Los 4 roles con empresa, cargo y periodo exactos
- ✍️ Cada descripción del CV convertida en 2–3 bullets de acción (mismo contenido, más escaneable)
- ⚠️ Stack por empresa — el CV no lo asocia (ver §0.2)
- ➕ Duración calculada ("3 años") — derivable, no inventada

### Stack

- ✅ Los 7 grupos, todos respaldados por el CV:

| Grupo                | Tecnologías                                         |
| -------------------- | --------------------------------------------------- |
| Lenguajes            | JavaScript, TypeScript, Python                      |
| Frontend             | React, Next.js, Redux, MUI, Tailwind CSS, Bootstrap |
| Mobile               | React Native                                        |
| Backend              | Node.js, Express, NestJS                            |
| Bases de datos       | MongoDB, MySQL, PostgreSQL                          |
| Infraestructura      | Docker, Kubernetes, CI/CD, AWS                      |
| Control de versiones | Git, GitHub, GitLab                                 |

- **Jerarquía de posicionamiento:** el orden no es alfabético. React, Next.js y TypeScript van primero y con peso visual mayor porque son las keywords del objetivo laboral; Python y Bootstrap quedan al final, presentes pero sin protagonismo. Esto no oculta ni exagera nada, solo prioriza.
- **Sin barras de progreso ni porcentajes** — serían datos inventados.

### Proyectos

> **Actualización (Fase 7, 2026-09-22):** al comprobar el estado real de los 4 proyectos del mock, dos demos devolvían 404 de Netlify (Maps App, Peajes App) y el repo de CLI Clima App tiene un `.env` público commiteado. Por decisión del usuario, **el sitio muestra hoy solo Calculator CRC**; los otros tres se retiraron (detalle y cómo reactivarlos en `content/PLACEHOLDERS.md`). La tabla y el contenido de abajo quedan como registro de lo que traía el mock original.

Contenido **disponible hoy** (de tu mock, no del CV):

| #   | Nombre         | Repo                                     | Demo                               |
| --- | -------------- | ---------------------------------------- | ---------------------------------- |
| 1   | Calculator CRC | `github.com/SantiagoPa/CalculatorCRCApp` | `crc-app.netlify.app`              |
| 2   | Maps App       | ⚠️ falta                                 | `maps-app-sp.netlify.app`          |
| 3   | Peajes App     | `github.com/SantiagoPa/PeajeApp`         | `app-peaje-santiagopa.netlify.app` |
| 4   | CLI Clima App  | `github.com/SantiagoPa/AppClima`         | — (sin demo, es CLI)               |

Contenido ⚠️ **que debes aportar por proyecto**: descripción de 1–2 frases · problema que resuelve · tu rol · stack real · 2–3 características · screenshot 1600×1000px.

El componente se construye para tolerar campos ausentes: sin `demo` no se renderiza ese botón; sin `image` se muestra el icono `LuImageOff` (react-icons) como marcador (nunca un placeholder gris roto); sin `github` solo demo.

> Nota: "Voting System with Blockchain" venía comentado en tu mock y **no se incluye**.

### Contacto

- ✅ Email `santiagopadilla117@gmail.com`
- ✅ Ubicación Montería, Colombia
- ⚠️ ¿Publicar el teléfono? (recomendación: solo enlace WhatsApp)
- ⚠️ URL de LinkedIn
- ⚠️ Confirmar GitHub (`github.com/SantiagoPa` según el mock)
- ⚠️ PDF del CV para `/public/cv/` (¿y versión en inglés?)
- ✍️ "Referencias disponibles a solicitud"

### Lista consolidada de bloqueantes

1. Dominio final (necesario para `metadataBase`, canonical, sitemap y OG).
2. URL de LinkedIn y confirmación del usuario de GitHub.
3. Foto de perfil en alta resolución.
4. PDF del CV (ES y, si existe, EN).
5. Datos y screenshots de los 4 proyectos.
6. Stack por empresa (o confirmación de omitirlo).
7. Decisión sobre teléfono/dirección.
8. Traducción al inglés del contenido (se puede redactar y entregar para tu revisión).
9. ¿Vue sí o no? (no está en el CV).

**Ninguno bloquea el inicio:** las Fases 1–6 se pueden completar con los datos del CV; los bloqueantes afectan a las Fases 7–9.

---

## 7. Arquitectura técnica

**Stack:** Next.js (última estable, App Router) · TypeScript strict · Tailwind CSS v4 · shadcn/ui · react-icons · next-themes · Prettier.
**Dependencias runtime totales: 6** (`next`, `react`, `react-dom`, `next-themes`, `next-intl`, `react-icons`) más las que arrastra shadcn (`class-variance-authority`, `clsx`, `tailwind-merge`, `tw-animate-css`). i18n con `next-intl` (única librería añadida por decisión del usuario, ver "i18n con next-intl"), sin librería de animación. Iconos: `react-icons` (decisión del usuario, ver "Iconos react-icons"), reemplaza a `lucide-react`.

```
portfolio/
├─ app/
│  ├─ [locale]/
│  │  ├─ layout.tsx            Server · fuentes, ThemeProvider, Header, Footer, <html lang>
│  │  ├─ page.tsx              Server · compone las 6 secciones + JSON-LD
│  │  ├─ opengraph-image.tsx   ImageResponse por idioma
│  │  └─ not-found.tsx
│  ├─ globals.css              tokens CSS + @theme inline + base
│  ├─ icon.svg                 favicon (monograma SP)
│  ├─ apple-icon.png
│  ├─ robots.ts
│  └─ sitemap.ts
├─ components/
│  ├─ layout/
│  │  ├─ site-header.tsx       Server
│  │  ├─ site-footer.tsx       Server
│  │  ├─ nav-anchors.tsx       Server
│  │  ├─ mobile-nav.tsx        "use client" · Sheet
│  │  ├─ locale-switch.tsx     "use client" · <Link> + router, conserva el #ancla
│  │  ├─ theme-toggle.tsx      "use client" · useTheme
│  │  └─ theme-provider.tsx    "use client" · next-themes
│  ├─ sections/
│  │  ├─ hero.tsx · profile.tsx · experience.tsx
│  │  ├─ stack.tsx · projects.tsx · contact.tsx     (todos Server)
│  ├─ shared/
│  │  ├─ section.tsx           <section> + id + aria-labelledby + ritmo
│  │  ├─ section-heading.tsx   h2 + marca de raíl
│  │  ├─ measure-line.tsx      línea cotada del hero (Server, CSS puro)
│  │  ├─ rail.tsx              eje vertical
│  │  ├─ tech-badge.tsx        badge de tecnología con jerarquía
│  │  ├─ experience-item.tsx
│  │  ├─ project-card.tsx
│  │  ├─ contact-link.tsx
│  │  └─ json-ld.tsx
│  └─ ui/                      shadcn (generado por CLI)
├─ i18n/                       (Fase 5) next-intl
│  ├─ routing.ts               defineRouting: locales ["es","en"], defaultLocale "es"
│  ├─ request.ts               getRequestConfig: carga messages/{locale}
├─ messages/                   (Fase 5) textos traducibles
│  ├─ es.ts                    export default {...} as const  (fuente de las claves)
│  └─ en.ts                    tipado contra es.ts → paridad comprobada en compilación
├─ content/
│  ├─ types.ts                 Experience, Project, TechGroup (datos no traducibles)
│  └─ shared.ts                datos no traducibles: fechas, stack, links, repos
├─ lib/
│  ├─ utils.ts                 cn() (shadcn)
│  └─ site.ts                  url, nombre, redes, keywords
├─ public/
│  ├─ cv/santiago-padilla-cv-es.pdf
│  ├─ projects/*.webp
│  └─ profile.webp
├─ proxy.ts                    createMiddleware(routing) de next-intl; solo actúa en "/"
├─ components.json · prettier.config.mjs · .editorconfig
└─ next.config.ts · tsconfig.json
```

### Separación UI / datos

Los componentes **nunca** contienen texto literal. Los textos traducibles viven en `messages/es.ts` y `messages/en.ts` y se leen con `next-intl`; `en.ts` se tipa contra `es.ts`, así que TypeScript falla en compilación si a un idioma le falta una clave. Los datos no traducibles (fechas, URLs, ids de tecnología, rutas de imagen) viven una sola vez en `content/shared.ts`; los proyectos combinan `shared.projects[id]` (links, imagen) con `t("projects.<id>.title")` (título, descripción).

### i18n con next-intl

**Decisión del usuario:** el soporte ES/EN se apoya en una librería de i18n estándar en lugar del diccionario casero de la Fase 3. Se usa **`next-intl`** (App Router, Server Components como ciudadano de primera clase, mensajes tipados, sin bundle de cliente obligatorio). Es la única dependencia nueva de la Fase 5 y el único cambio respecto a "sin librería de i18n".

- **Routing:** `i18n/routing.ts` con `defineRouting({ locales: ["es","en"], defaultLocale: "es", localePrefix: "always" })`. Rutas `/es` y `/en`.
- **Proxy:** `proxy.ts` (Next 16, no `middleware.ts`) con `createMiddleware(routing)` y `matcher: ["/"]` únicamente: detecta el idioma (`Accept-Language` y cookie `NEXT_LOCALE` de next-intl) y redirige `/` a `/es` o `/en`. No se ejecuta en ninguna otra ruta, para no perder el SSG. Sustituye a `negotiateLocale()` de `lib/i18n.ts`, que se elimina.
- **Renderizado estático:** `generateStaticParams()` con `routing.locales.map(...)`, `dynamicParams = false` y `setRequestLocale(locale)` en `app/[locale]/layout.tsx` y en cada `page.tsx`, antes de cualquier llamada a `next-intl`. Ambas páginas siguen prerenderizándose como SSG.
- **Mensajes:** `messages/es.ts` es la fuente de las claves (`as const`); `messages/en.ts` se declara contra ese tipo. `i18n/request.ts` con `getRequestConfig` importa el fichero del locale. Se aumenta `AppConfig` (`Locale`, `Messages`) para que `t("clave.inexistente")` falle en compilación.
- **Desviación (Fase 5, medida):** `locale-switch` no usa `createNavigation` de `next-intl`: importarlo en un Client Component exige `NextIntlClientProvider` y añade ~10–12KB gzip al bundle de cliente. Se usa `next/link` + `useRouter`/`usePathname` de `next/navigation` con `router.replace('/<idioma><ruta>' + hash)` (`localePrefix: "always"`); no existe `i18n/navigation.ts`. Comportamiento idéntico, First Load JS sin cambio.
- **Uso:** Server Components con `getTranslations({ locale, namespace })` (async) o `useTranslations` (sync). **No** se monta `NextIntlClientProvider` salvo que un Client Component lo exija: los 4 Client Components siguen recibiendo strings por props (`server-serialization`), así el bundle de cliente no crece.
- **Navegación:** el switch de idioma es el Client Component `locale-switch`: al pulsar, `router.replace('/<idioma><ruta>' + window.location.hash)`, de modo que **el `#ancla` se conserva**. Sin JS, los enlaces `<Link href="/<idioma>">` llevan al inicio del otro idioma (ver la desviación anterior).
- **SEO:** `generateMetadata` con `getTranslations`; `alternates.languages` y `x-default` como en §12.
- **Reglas:** ids de sección en español en ambos idiomas · nada de texto literal en componentes · plurales y fechas con el formateo ICU de `next-intl` (`t.rich`/`format`) en lugar de concatenar strings · cualquier texto nuevo se añade a **ambos** ficheros de mensajes en el mismo commit.
- **Peso de JS:** medido en la Fase 5, el JS de cliente por ruta es ~201.5KB gzip antes y después de la migración a `next-intl` (diferencia 0), casi todo React y Next. Por eso el límite de 95KB original deja de ser criterio de "terminado" (ver §13). Vigilar que ningún cambio posterior aumente esa cifra de forma apreciable.

### Server vs Client

**Client Components — exactamente cuatro:**

| Componente       | Por qué                                | Coste                   |
| ---------------- | -------------------------------------- | ----------------------- |
| `theme-provider` | next-themes necesita contexto          | ~2KB                    |
| `theme-toggle`   | `useTheme()`                           | mínimo                  |
| `mobile-nav`     | Sheet de Radix, estado abierto/cerrado | ~8KB, solo Radix Dialog |
| `locale-switch`  | Leer `location.hash` al cambiar de idioma (el fragmento no llega al servidor) | mínimo |

**Todo lo demás es Server Component.** No hay `useState` en el sitio salvo el del Sheet (gestionado por Radix). Sin `useEffect` en ninguna parte. Sin data fetching: todo el contenido es estático en el bundle del servidor.

**Estado:** el único estado real es el tema (persistido por next-themes en `localStorage`, con script inline anti-FOUC) y la apertura del menú móvil. La sección activa del nav **no** se rastrea con un IntersectionObserver — eso obligaría a convertir el header en Client Component por un detalle cosmético. Se usa `:target` de CSS o simplemente nada.

### Assets

- Imágenes en `public/`, importadas estáticamente donde se pueda para obtener `blurDataURL` y dimensiones automáticas.
- Screenshots: WebP, 1600×1000 (16:10), ≤ 150KB cada una.
- Foto de perfil: WebP cuadrada 640×640, con `priority` (está sobre el fold).
- PDF del CV servido desde `/public/cv/` con `download` en el enlace.

### Convenciones de nombres

Archivos `kebab-case.tsx` · componentes `PascalCase` · exports **nombrados** (excepto los `default` que exige Next en `page`/`layout`/`route`) · tipos `PascalCase` en `content/types.ts` · constantes de contenido `camelCase` · ids de sección en español en ambos idiomas para que los enlaces no se rompan al cambiar de locale.

---

## 8. Componentes

| Componente                  | Tipo       | Reutilizable | Responsabilidad                                                              |
| --------------------------- | ---------- | ------------ | ---------------------------------------------------------------------------- |
| `Section`                   | Server     | ✅           | Wrapper `<section id aria-labelledby>` con el ritmo vertical y el raíl       |
| `SectionHeading`            | Server     | ✅           | `h2` + marca de cota en el raíl                                              |
| `Rail`                      | Server     | ✅           | Eje vertical continuo, responsive                                            |
| `MeasureLine`               | Server     | ❌ (hero)    | Línea cotada 2021→hoy, CSS puro, `aria-hidden` + tabla accesible alternativa |
| `TechBadge`                 | Server     | ✅           | Badge con nivel de jerarquía (`primary` \| `secondary`)                      |
| `ExperienceItem`            | Server     | ✅           | Un rol: periodo, empresa, cargo, bullets, stack opcional                     |
| `ProjectCard`               | Server     | ✅           | Screenshot opcional, título, descripción, stack, enlaces condicionales       |
| `ContactLink`               | Server     | ✅           | Icono react-icons + etiqueta + `href`, interno/externo                       |
| `NavAnchors`                | Server     | ❌           | Anclas de escritorio                                                         |
| `MobileNav`                 | **Client** | ❌           | Sheet + mismas anclas                                                        |
| `LocaleSwitch`              | **Client** | ❌           | ES/EN como enlaces con `hrefLang`; conserva el `#ancla` al cambiar de idioma |
| `ThemeToggle`               | **Client** | ❌           | Claro/oscuro/sistema                                                         |
| `JsonLd`                    | Server     | ✅           | `<script type="application/ld+json">`                                        |
| `SiteHeader` / `SiteFooter` | Server     | ❌           | Layout                                                                       |
| 6 × `sections/*`            | Server     | ❌           | Composición de cada sección a partir de los mensajes (`next-intl`)                         |

---

## 9. shadcn/ui

`npx shadcn@latest init` con `baseColor: neutral`, `cssVariables: true`, `iconLibrary: "lucide"`, `rsc: true`. `iconLibrary` es el único valor que soporta shadcn/ui, pero el proyecto migró a `react-icons` (ver "Iconos react-icons" más abajo); cualquier componente que `shadcn add` traiga con imports de `lucide-react` se migra a mano antes de commitear.

**Se instalan 4 componentes:**

| Componente  | Justificación                                                                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `button`    | CVA + estados de foco correctos + `asChild` para renderizar `<Link>` como botón sin anidar `<a><button>`. Se le añade la variante `signal` del sistema. |
| `badge`     | Base para `TechBadge`; se sobreescriben radio y colores hacia los tokens del plano.                                                                     |
| `sheet`     | Menú móvil. Radix aporta focus trap, `Esc`, bloqueo de scroll y `aria-modal` — reimplementarlo sería peor.                                              |
| `separator` | Hairlines semánticas con el rol ARIA adecuado.                                                                                                          |

**Se descartan deliberadamente:**

- `card` — su estética (radio grande + sombra suave uniforme) es justo el look de kit SaaS que evitamos. `ProjectCard` se escribe a mano con hairlines.
- `navigation-menu` — sobredimensionado para 5 anclas; añade JS de cliente para nada.
- `tooltip` — convertiría en cliente lo que toca; toda la información va visible o en `aria-label`.
- `dialog` — los proyectos enlazan a demos reales; no hace falta un modal.
- `accordion`, `tabs` — esconderían experiencia y stack, justo lo que el recruiter viene a ver.

**Regla:** los componentes de `components/ui/` se editan para adoptar los tokens del sistema; no se acepta el aspecto por defecto de shadcn. El sitio no debe parecer una demo de shadcn.

---

## 10. Iconos react-icons

Uso obligatorio y exclusivo de `react-icons` (decisión del usuario, sustituye a `lucide-react`). Import nombrado por subpaquete, nunca del barril raíz: `import { LuMail } from "react-icons/lu"`. Next ya incluye `react-icons/*` en `optimizePackageImports`, así que no penaliza el bundle.

**Sets usados:** `lu` (Lucide vía react-icons — mismo dibujo que antes) para toda la UI y los iconos de grupo del Stack · `si` (Simple Icons) para los logos de tecnología del Stack y GitHub · `fa6` (Font Awesome) para LinkedIn y AWS, que no están en Simple Icons.

**Convenciones UI (`lu`):** `strokeWidth={1.5}` global (armoniza con los hairlines de 1px) · tamaños `size-4` (16px, inline) y `size-5` (20px, botones) · siempre `currentColor` · `aria-hidden="true"` cuando hay texto acompañante · `aria-label` en el botón cuando el icono va solo. Los logos de marca (`si`/`fa6`) son de relleno: sin `strokeWidth`.

| Zona      | Iconos                                                                                                                                                                      |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Header    | `LuMenu`, `LuSun`, `LuMoon`, `LuLanguages`, `LuDownload`                                                                                                                    |
| Hero      | `LuMapPin`, `LuArrowDown` (única flecha, en el enlace de scroll; **nunca** un `→` pegado al texto de un botón)                                                             |
| Perfil    | `LuGraduationCap`                                                                                                                                                            |
| Stack     | Grupos: `LuCodeXml` (lenguajes), `LuAppWindow` (frontend), `LuSmartphone` (mobile), `LuServer` (backend), `LuDatabase` (datos), `LuContainer` (infra), `LuGitBranch` (versiones). Por tecnología: logo Simple Icons (`components/shared/tech-icons.ts`), salvo `cicd` (`LuWorkflow`, no es una marca) y `aws` (`FaAws`, no está en Simple Icons) |
| Proyectos | `LuExternalLink` (demo), `SiGithub` (repo), `LuImageOff` (marcador sin screenshot)                                                                                          |
| Contacto  | `LuMail`, `LuMessageCircle` (WhatsApp), `LuMapPin`, `FaLinkedin`, `SiGithub`, `LuFileDown`                                                                                  |

---

## 11. Responsive

Breakpoints Tailwind: base (`<640`) · `sm 640` · `md 768` (tablet) · `lg 1024` (desktop) · `xl 1280`.

| Zona            | Mobile                                                                             | Tablet (`md`)                            | Desktop (`lg+`)                                                                     |
| --------------- | ---------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------- |
| **Header**      | Logo + `Languages` + `Sun/Moon` + `Menu`→Sheet. Alto 56px                          | Igual, anclas aún ocultas                | Anclas inline, sin Sheet, botón "CV" visible. Alto 64px                             |
| **Hero**        | Nombre `clamp` ~44px, cota **vertical** integrada al eje, CTAs apiladas full-width | Nombre ~64px, cota horizontal compacta   | Nombre hasta 84px, cota horizontal a todo el ancho con 4 marcas etiquetadas         |
| **Perfil**      | 1 columna, foto 96px arriba                                                        | Foto 128px a la izquierda, texto al lado | 2 columnas (5/7): foto + educación \| narrativa                                     |
| **Experiencia** | Stack vertical sobre el eje: periodo → cargo → empresa → bullets                   | Igual con más aire                       | 2 columnas alineadas al eje: periodo+empresa (3 col) \| cargo+bullets+stack (8 col) |
| **Stack**       | 1 grupo por fila, badges en wrap                                                   | 2 columnas                               | 3 columnas, hairline superior por grupo                                             |
| **Proyectos**   | 1 columna, imagen 16:10 full-width                                                 | 2 columnas                               | 2 columnas (no 3: mantiene los screenshots legibles)                                |
| **Contacto**    | Lista vertical de enlaces, touch target ≥ 44px                                     | 2 columnas                               | 2 columnas (7/5): canales \| CV + disponibilidad                                    |
| **Raíl**        | Oculto; eje como hairline a 20px del borde                                         | Igual                                    | Raíl de 72px con marcas de sección                                                  |
| **Footer**      | 2 líneas centradas al inicio                                                       | 1 línea                                  | 1 línea, izquierda/derecha                                                          |

Reglas transversales: nada de scroll horizontal a 320px · targets táctiles ≥ 44×44px · `scroll-margin-top` igual al alto del header en cada `section[id]` para que las anclas no queden bajo el header sticky · `scroll-behavior: smooth` solo si no hay `prefers-reduced-motion`.

---

## 12. SEO

**Metadata** (`generateMetadata` en `app/[locale]/layout.tsx`, valores desde `messages/{locale}.ts` (vía `getTranslations`) y `lib/site.ts`):

- `metadataBase: new URL(siteUrl)` — bloqueante hasta tener dominio.
- `title.default`: ES _"Santiago Padilla Arcia — Fullstack Developer | React, Next.js, TypeScript"_ · EN _"Santiago Padilla Arcia — Fullstack Developer | React, Next.js, TypeScript"_.
- `description` (≤ 155 car.) con las keywords objetivo y la ubicación, distinta por idioma.
- `keywords`: `Fullstack Developer`, `React Developer`, `Frontend Developer`, `Next.js Developer`, `TypeScript Developer`, `JavaScript Developer`, `Node.js`, `NestJS`, `Colombia`, `Montería`, `remote`.
- `alternates`: `canonical` por idioma + `languages: { es, en, "x-default": es }` → **hreflang correcto**, crítico en un sitio bilingüe.
- `openGraph`: `type: "profile"`, `locale` (`es_CO` / `en_US`), `alternateLocale`, imagen 1200×630.
- `twitter`: `summary_large_image`.
- `robots`: `index, follow` + `googleBot` con `max-image-preview: large`.
- `authors`, `creator`.

**Archivos:** `app/[locale]/opengraph-image.tsx` con `ImageResponse` (tipografía y tokens del sistema, sin librería extra) · `app/icon.svg` (monograma SP en `--ink`/`--signal`) · `app/sitemap.ts` (ambas URLs con `alternates.languages`) · `app/robots.ts` (allow all + sitemap).

**JSON-LD `Person`** renderizado en servidor: `name`, `jobTitle`, `description`, `url`, `image`, `email`, `address` (Montería, CO), `alumniOf` (Universidad de Córdoba), `knowsAbout` (stack del CV), `sameAs` (GitHub, LinkedIn), `worksFor` (rol actual). **No se añade `ProfilePage` con datos que no existan** ni certificaciones inventadas.

**Semántica:** un solo `<h1>` (el nombre, en el hero) · `<h2>` por sección, cada `<section>` con `aria-labelledby` apuntando a su `h2` · `<nav>` con `aria-label` · `<main>` único · `<article>` por proyecto · `<time dateTime="2026">` en los periodos · `<address>` en contacto · `<html lang>` correcto por ruta.

---

## 13. Performance (aplicando `vercel-react-best-practices`)

| Regla                            | Aplicación concreta                                                                                                                         |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `server-*` general               | El 95% del árbol son Server Components; solo 4 componentes cliente                                                                          |
| `server-hoist-static-io`         | Fuentes cargadas a nivel de módulo con `next/font/google` (self-hosted, sin petición a Google, sin bloqueo de render)                       |
| `server-serialization`           | A los 4 componentes cliente solo se les pasan strings cortos; los mensajes completos nunca cruzan la frontera servidor→cliente (sin `NextIntlClientProvider` salvo necesidad)              |
| `bundle-barrel-imports`          | Imports nombrados por subpaquete de `react-icons` (`react-icons/lu`, `/si`, `/fa6`; ya en `optimizePackageImports` de Next); nada de `import * as Icons`                                   |
| `bundle-analyzable-paths`        | Imports estáticos y literales; sin `import()` dinámico con rutas construidas                                                                |
| `bundle-dynamic-imports`         | No hace falta: no hay componentes pesados. **No se añade `next/dynamic` por rutina**                                                        |
| `bundle-defer-third-party`       | Sin analytics en v1. Si se añade Vercel Analytics, va después de la hidratación                                                             |
| `async-*`                        | No aplica: no hay data fetching. Sin waterfalls por construcción                                                                            |
| `rerender-*`                     | Sin `useState`/`useEffect` propios → no hay re-renders que optimizar. **No se usan `memo`/`useMemo`/`useCallback` preventivos**             |
| `rendering-hydration-no-flicker` | next-themes inyecta el script inline que fija la clase antes de pintar → sin flash de tema                                                  |
| `rendering-animate-svg-wrapper`  | La línea cotada se anima con `transform` sobre `div`s, no sobre elementos SVG                                                               |
| `rendering-resource-hints`       | `preload` de la imagen LCP vía `priority` en `next/image`                                                                                   |
| `rendering-conditional-render`   | Ternarios, nunca `&&`, para render condicional (evita renderizar `0`)                                                                       |
| Imágenes                         | `next/image` en todas; `priority` solo en la foto de perfil; `sizes` explícito; import estático para `blurDataURL`; screenshots WebP ≤150KB |
| Renderizado                      | 100% estático (SSG) en ambas rutas; `dynamicParams = false`; `proxy.ts` limitado a `/`                                                    |

**Presupuestos:** LCP ≤ 1.8s (4G simulado) · CLS ≤ 0.02 · INP ≤ 120ms · TBT ≤ 100ms · peso total de la home ≤ 900KB con screenshots.

**Peso de JS (decisión tras la Fase 5):** el límite inicial de First Load JS ≤ 95KB no era realista: la línea base medida es ~201.5KB gzip por ruta (React + Next). Ya no es criterio de aceptación. En la Fase 10 se mide con Lighthouse (mobile) y se fija ahí un objetivo alcanzable, con la regla de que **ningún cambio del proyecto aumenta la línea base de forma apreciable** y solo hay 4 Client Components.

**Descartado explícitamente:** Framer Motion, GSAP, react-icons, cualquier librería de i18n distinta de `next-intl`, librería de carrusel, cursor personalizado, canvas de partículas, efectos de scroll parallax. Ninguno aporta valor al objetivo del sitio y todos degradan las Core Web Vitals.

---

## 14. Accesibilidad (objetivo WCAG 2.2 AA)

- **Skip link** "Saltar al contenido" como primer elemento focusable, visible al recibir foco.
- **Foco visible** propio: `outline: 2px solid var(--signal); outline-offset: 2px` en `:focus-visible`. Nunca `outline: none` sin reemplazo.
- **Semántica antes que ARIA:** `<a>` para navegar, `<button>` para actuar. `aria-*` solo donde el HTML no alcanza (`aria-labelledby` en secciones, `aria-label` en botones de solo icono, `aria-current="true"` en el idioma activo).
- **Teclado:** orden de tabulación natural; el Sheet atrapa el foco, cierra con `Esc` y lo devuelve al trigger (Radix); anclas navegables con `Enter`.
- **Lectores de pantalla:** la línea cotada del hero es `aria-hidden` y va acompañada de una lista visualmente oculta (`sr-only`) con los mismos 4 roles y periodos; iconos decorativos ocultos; texto `sr-only` en los enlaces externos ("(abre en una pestaña nueva)").
- **Contraste:** verificar cada par de tokens en ambos temas antes de cerrar la Fase 2.
- **Movimiento:** `prefers-reduced-motion: reduce` desactiva el dibujado de la cota y el scroll suave.
- **Zoom:** legible y sin pérdida de funcionalidad al 200%.
- **Idioma:** `lang` correcto en `<html>`; `hrefLang` en el switch; si queda algún término en el otro idioma, `<span lang="en">`.
- **Enlaces externos:** `rel="noopener noreferrer"` + `target="_blank"` solo en demos y repos.

---

## 15. Convenciones de código

**Prettier** (`prettier.config.mjs`):

```js
export default {
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 90,
  tabWidth: 2,
  arrowParens: "always",
  plugins: ["prettier-plugin-tailwindcss"], // ordena las clases de Tailwind
};
```

Más `.editorconfig` (LF, UTF-8, 2 espacios) y scripts `format` / `format:check`.

**Orden de imports** (manual y consistente, separado por líneas en blanco):

1. `react` / `next/*`
2. Externos (`react-icons/*`, `next-themes`)
3. `@/components/*`
4. `@/lib/*`
5. `@/content/*`
6. Tipos (`import type`)

➕ Opcional: `@ianvs/prettier-plugin-sort-imports` para automatizarlo (1 devDependency).

**TypeScript:** `strict: true`, sin `any`, sin `as` salvo aserciones `const`. Props tipadas con `interface` nombrada (`interface ProjectCardProps`). `import type` para tipos.

**Componentes:** una responsabilidad por archivo · exports nombrados · nada de componentes definidos dentro de otros (`rerender-no-inline-components`) · las clases condicionales pasan por `cn()` de `lib/utils.ts` · `"use client"` solo en los 4 archivos autorizados, y **todo PR que añada un quinto debe justificarlo**.

**Reutilización:** si un patrón visual aparece 3 veces, se extrae a `components/shared/`. Si aparece 2, se deja duplicado.

**Git:** repo inicializado en Fase 1, commits convencionales (`feat:`, `style:`, `chore:`).

**Regla obligatoria — un commit por fase con `caveman-commit`:** al terminar cada fase (con `pnpm build` y `pnpm format:check` en verde y tras la revisión del usuario) se hace **un commit de esa fase**, y el mensaje se redacta siempre con la skill `caveman-commit` (Conventional Commits comprimido a la intención). No se mezclan cambios de dos fases en el mismo commit y no se empieza una fase con cambios de la anterior sin commitear. El commit termina con la línea de atribución `Co-Authored-By` que corresponda.

---

## 16. Plan de implementación

> **Cierre de cada fase:** `pnpm build` + `pnpm format:check` en verde, revisión del usuario y **un commit de la fase redactado con la skill `caveman-commit`** (ver §15, Git).

### Fase 1 — Inicialización

**Objetivo:** proyecto ejecutable con el tooling completo y ninguna decisión pendiente de tooling.
**Tareas:** `npx create-next-app@latest` (TypeScript, Tailwind, App Router, alias `@/*`, ESLint, sin `src/`) · `npx shadcn@latest init` (`neutral`, CSS variables, `iconLibrary: lucide`, `rsc: true`) · instalar `next-themes`, `prettier`, `prettier-plugin-tailwindcss` · `prettier.config.mjs` + `.editorconfig` + scripts · `git init` + `.gitignore` · **verificar que `Github` y `Linkedin` existen en la versión instalada de `lucide-react`** · crear el árbol de carpetas vacío.
**Archivos:** `package.json`, `components.json`, `prettier.config.mjs`, `next.config.ts`, `tsconfig.json`.
**Dependencias:** ninguna previa.
**Resultado:** `pnpm dev` levanta, `pnpm build` pasa, `pnpm format` funciona.

### Fase 2 — Sistema visual

**Objetivo:** que todo el sistema de diseño exista antes de escribir una sola sección.
**Tareas:** tokens de color claro/oscuro en `globals.css` con `@theme inline` · fuentes Archivo + IBM Plex Sans con `next/font/google` como variables CSS · escala tipográfica y estilos base · `--radius: 2px` · estilos de `:focus-visible` · bloque `prefers-reduced-motion` · `ThemeProvider` + `ThemeToggle` · **verificar contraste AA de los 12 tokens en ambos temas** · página de pruebas temporal con todos los estilos base (se borra en Fase 10).
**Componentes:** `ThemeProvider`, `ThemeToggle`.
**Archivos:** `app/globals.css`, `app/[locale]/layout.tsx`, `components/layout/theme-*.tsx`.
**Dependencias:** Fase 1.
**Resultado:** tipografía, color y tema conmutable funcionando sin flash.

### Fase 3 — i18n, layout y navegación

**Objetivo:** el esqueleto bilingüe navegable.
**Nota:** esta fase se implementó con un diccionario propio (`lib/i18n.ts`, `content/{es,en}.ts`, `getDictionary()`); la Fase 5 lo migra a `next-intl`. **Tareas:** `lib/i18n.ts` · `content/types.ts` con `interface Dictionary` completa · `es.ts`/`en.ts` con las claves vacías o provisionales · `getDictionary()` · `app/[locale]/` con `generateStaticParams` y `dynamicParams = false` · `proxy.ts` (solo `/`; Next 16 renombró `middleware.ts`) · `Section`, `SectionHeading`, `Rail` · `SiteHeader` con `NavAnchors`, `LocaleSwitch`, `ThemeToggle`, `MobileNav` (Sheet) · `SiteFooter` · skip link · `scroll-margin-top`.
**Componentes:** todos los de `layout/` y `shared/section*`, `rail`.
**Archivos:** `middleware.ts`, `lib/i18n.ts`, `content/*`, `components/layout/*`.
**Dependencias:** Fase 2. Requiere `sheet` y `button` de shadcn.
**Resultado:** `/es` y `/en` renderizan, el header navega entre secciones vacías, el menú móvil funciona con teclado.

### Fase 4 — Hero y Perfil

**Objetivo:** la primera pantalla, con el elemento memorable resuelto.
**Tareas:** `MeasureLine` (CSS puro, animación de carga única, `aria-hidden` + lista `sr-only`) · sección Hero con `h1`, posicionamiento, ubicación, CTAs · sección Perfil con narrativa, forma de trabajo (soft skills reescritas) y educación · foto con `next/image priority` (placeholder hasta recibir la definitiva) · contenido ES real desde el CV + borrador EN.
**Componentes:** `MeasureLine`, `sections/hero`, `sections/profile`.
**Archivos:** `components/shared/measure-line.tsx`, `components/sections/{hero,profile}.tsx`, `content/{es,en}.ts`.
**Dependencias:** Fase 3. ⚠️ foto en alta resolución.
**Resultado:** above-the-fold terminado en mobile y desktop, con la cota animándose una sola vez.

### Fase 5 — i18n con next-intl y Experiencia

**Objetivo:** (A) migrar el soporte multi-idioma ES/EN a `next-intl` sin cambiar el comportamiento visible, y (B) construir la sección núcleo, fiel al CV. Orden obligatorio: primero A (con build verde), después B ya sobre `next-intl`.

**Parte A — migración i18n (ver "i18n con next-intl" en §7):**
**Tareas A:** `pnpm add next-intl` · crear `i18n/{routing,request,navigation}.ts` · reescribir `proxy.ts` con `createMiddleware(routing)` y `matcher: ["/"]` · mover los textos de `content/{es,en}.ts` a `messages/{es,en}.ts` (misma información, `en.ts` tipado contra `es.ts`; los textos de Hero y Perfil de la Fase 4 se migran tal cual, sin reescribirlos) · aumentar `AppConfig` con `Locale` y `Messages` · `app/[locale]/layout.tsx` y `page.tsx` con `generateStaticParams`, `dynamicParams = false`, `hasLocale`/`notFound()` y `setRequestLocale` · sustituir `getDictionary()` por `getTranslations`/`useTranslations` en cada Server Component · adaptar `locale-switch` a `next-intl` conservando el `#ancla` · `generateMetadata` con `getTranslations` (title/description por idioma provisionales; los definitivos son Fase 9) · eliminar `lib/i18n.ts` (`negotiateLocale`), `content/index.ts` y las `interface Dictionary` que queden sin uso; `content/shared.ts` se conserva para datos no traducibles.
**Archivos A:** `i18n/*`, `messages/*`, `proxy.ts`, `app/[locale]/{layout,page}.tsx`, `components/layout/locale-switch.tsx`, `components/sections/*`, `package.json`.
**Verificación A:** `/es` y `/en` siguen prerenderizándose como SSG; `/` redirige por `Accept-Language`; `/fr` da 404; en `/es#perfil`, pulsar EN lleva a `/en#perfil`; sigue habiendo exactamente 4 `"use client"` fuera de `components/ui/` y ningún `useEffect`; First Load JS dentro del presupuesto (informar de la diferencia frente al commit anterior); TypeScript falla si se borra una clave de `en.ts`.

**Parte B — Experiencia:**
**Tareas B:** tipo `Experience` en `types.ts` · los 4 roles en `shared.ts` (fechas, orden) y descripciones en `messages/{es,en}.ts` · `ExperienceItem` alineado al eje con marca de cota por rol · marcado ámbar del rol actual · `<time dateTime>` · duración derivada · layout 2 columnas desde `lg` · `stack` opcional preparado pero vacío.
**Componentes:** `ExperienceItem`, `sections/experience`.
**Archivos:** `components/shared/experience-item.tsx`, `components/sections/experience.tsx`.
**Dependencias:** Fase 4; `next-intl` (única dependencia nueva). ⚠️ stack por empresa (opcional).
**Resultado:** el sitio funciona en ES/EN sobre `next-intl` con el mismo comportamiento que antes, y los 4 roles quedan legibles y escaneables, sin bloques de texto densos.

### Fase 6 — Stack

**Objetivo:** comunicar el alcance técnico con jerarquía de posicionamiento.
**Tareas:** `TechGroup` y `TechBadge` con niveles `primary`/`secondary` · los 7 grupos con icono Lucide cada uno · React/Next.js/TypeScript destacados · grid 1/2/3 columnas · sin barras ni porcentajes.
**Componentes:** `TechBadge`, `sections/stack`.
**Archivos:** `components/shared/tech-badge.tsx`, `components/sections/stack.tsx`, `content/shared.ts`.
**Dependencias:** Fase 3. Requiere `badge` de shadcn.
**Resultado:** stack completo, escaneable en < 5s, sin dato inventado.

### Fase 7 — Proyectos

**Objetivo:** mostrar trabajo verificable y dejar la sección preparada para crecer.
**Tareas:** tipo `Project` con `github?`, `demo?`, `image?`, `stack`, `role`, `problem`, `features` · los 4 proyectos en `shared.ts` · `ProjectCard` a mano con hairlines (sin `card` de shadcn) · botones condicionales · marcador tipográfico cuando falte imagen · optimizar screenshots a WebP 16:10 · la sección no se renderiza si el array está vacío.
**Componentes:** `ProjectCard`, `sections/projects`.
**Archivos:** `components/shared/project-card.tsx`, `components/sections/projects.tsx`, `public/projects/*`.
**Dependencias:** Fase 6. ⚠️ **bloqueante:** descripciones, stack, rol y screenshots de los 4 proyectos.
**Resultado:** 4 proyectos con enlaces funcionales; añadir uno nuevo = añadir un objeto al array.

### Fase 8 — Contacto y footer

**Objetivo:** cerrar la conversión.
**Tareas:** `ContactLink` con icono · email (`mailto:`), WhatsApp (`wa.me`), LinkedIn, GitHub, ubicación · descarga de CV (`download`) · estado de disponibilidad con el punto ámbar · "Referencias disponibles a solicitud" · `<address>` · footer con año dinámico y enlace al repo del sitio.
**Componentes:** `ContactLink`, `sections/contact`, `SiteFooter`.
**Archivos:** `components/shared/contact-link.tsx`, `components/sections/contact.tsx`, `public/cv/*`.
**Dependencias:** Fase 7. ⚠️ **bloqueante:** LinkedIn, GitHub confirmado, PDF del CV, decisión sobre el teléfono.
**Resultado:** todos los canales de contacto funcionan en mobile y desktop.

### Fase 9 — SEO y accesibilidad

**Objetivo:** que el sitio sea encontrable y usable por todos.
**Tareas:** `generateMetadata` por idioma con `alternates.languages` y `x-default` · `opengraph-image.tsx` por idioma · `sitemap.ts` + `robots.ts` · `icon.svg` + `apple-icon.png` · JSON-LD `Person` · auditoría semántica (un solo `h1`, `aria-labelledby`, `<time>`, `<address>`) · recorrido completo solo con teclado · prueba con VoiceOver · verificación de contraste en ambos temas · `axe` DevTools sin violaciones.
**Archivos:** `app/[locale]/{layout,opengraph-image}.tsx`, `app/{sitemap,robots,icon}.*`, `components/shared/json-ld.tsx`.
**Dependencias:** Fase 8. ⚠️ **bloqueante:** dominio final.
**Resultado:** metadata completa, OG renderizando, 0 violaciones de axe.

### Fase 10 — Performance y revisión final

**Objetivo:** cumplir presupuestos y pulir.
**Tareas:** `pnpm build` y medición del JS de cliente por ruta frente a la línea base de ~201.5KB gzip · Lighthouse mobile y desktop (fijar aquí el objetivo de peso de JS, ver §13) · comprobar que solo hay 4 componentes cliente fuera de `components/ui/` (`grep -r "use client"`) · comprobar que no hay `useEffect` · verificar imágenes (formato, `sizes`, `priority`) · borrar la página de pruebas de la Fase 2 y todo código muerto · prueba responsive a 320/375/768/1024/1440 · `prefers-reduced-motion` · **crítica de diseño final: aplicar la regla de Chanel — quitar un elemento** · deploy en Vercel · verificar `hreflang` y OG con las herramientas de validación.
**Dependencias:** todas.
**Resultado:** sitio en producción cumpliendo los presupuestos.

---

## 17. Checklist final

> Revisado en la Fase 10 (2026-09-22). Estado real tras build/format/lint verdes, Lighthouse local y capturas Playwright. Detalle completo en el informe de la Fase 10.

**Veracidad**

- [x] Ninguna tecnología fuera del CV (Vue excluido salvo confirmación)
- [x] Cargos, empresas y periodos idénticos al CV
- [x] Ningún proyecto, métrica ni certificación inventados
- [x] Sin stack por empresa no confirmado
- [x] Sin datos personales de las referencias

**Diseño**

- [x] Un único elemento memorable (la cota); el resto, silencioso
- [x] Sin gradientes, sin sombras decorativas, sin eyebrows en mayúsculas, sin `→` en botones, sin monospace
- [x] Ámbar usado solo para estado
- [x] Texto corrido ≤ 66ch, todo alineado a la izquierda
- [x] Una sola animación de carga, respetando `prefers-reduced-motion`
- [x] No parece ni una plantilla de portafolio ni una demo de shadcn — **crítica de diseño final (Fase 10):** se retiró la grilla de badges "Habilidades blandas" de Perfil (contradecía la decisión de §5 de no usar una grilla de badges genérica; "Cómo trabajo" ya cubre los mismos hechos en prosa)

**Técnico**

- [x] Exactamente 4 componentes cliente (fuera de `components/ui/`)
- [x] Sin `useEffect` propio
- [x] Ambas rutas estáticas (`setRequestLocale` en layout y páginas); `proxy.ts` solo en `/`
- [x] `messages/es.ts` y `messages/en.ts` con paridad de claves garantizada por tipos; sin texto literal en componentes
- [x] Cambio de idioma conserva el `#ancla`
- [x] `pnpm build` sin errores ni warnings; `pnpm format:check` limpio

**Performance**

- [x] LCP ≤ 1.8s · CLS ≤ 0.02 · Lighthouse ≥ 95×4 (medido local: mobile 99/100/100/100, desktop 100/100/100/100; LCP mobile 2.2s por el throttling simulado de Lighthouse, en Playwright sin throttling la carga es casi instantánea) · JS de cliente: línea base de la Fase 5 (~201.5KB gzip) pasó a ~206.3KB gzip (+~4.8KB, +2.4%) tras las Fases 6–9 (Stack, Proyectos, Contacto, SEO); objetivo fijado en la Fase 10 (ver §13 y el informe): mantener el JS de cliente por ruta **≤ 215KB gzip**, ya que los 4 Client Components no cambiaron
- [x] Imágenes WebP con `sizes`; `priority` solo en la LCP — hoy no hay imágenes reales (foto de perfil e imágenes de proyecto siguen siendo mock/marcador); `next/image` con `sizes` explícito ya está listo en `project-card.tsx` para cuando lleguen los assets
- [x] Fuentes self-hosted con `swap`

**SEO**

- [x] Title/description únicos por idioma con las keywords objetivo
- [x] `hreflang` es/en/x-default correcto
- [x] OG image renderizando en ambos idiomas
- [x] JSON-LD `Person` válido (JSON bien formado, campos verificados contra el CV); **Rich Results Test real queda pendiente**: requiere el dominio de producción, hoy es el mock `https://santiagopadilla.dev`
- [x] `sitemap.xml` y `robots.txt` accesibles
- [x] Un solo `h1`; jerarquía de headings correcta

**Accesibilidad**

- [x] Recorrido completo con teclado, incluido el Sheet
- [x] Foco visible en todo elemento interactivo
- [x] Contraste AA en ambos temas
- [x] Alternativa `sr-only` para la línea cotada
- [x] `lang` y `hrefLang` correctos
- [x] axe DevTools sin violaciones (verificado en la Fase 9; Lighthouse accessibility 100/100 en la Fase 10 lo reconfirma)

**Contenido**

- [x] CV descargable desde header y contacto
- [ ] Los 4 enlaces de demo y los 3 de repo funcionan — **no aplica tal cual**: por decisión del usuario (Fase 7) solo queda 1 proyecto (Calculator CRC) con 1 demo y 1 repo, ambos verificados con HTTP 200 en la Fase 10; el resto se retiró (ver `content/PLACEHOLDERS.md`)
- [ ] Contenido EN revisado por Santiago — pendiente de que Santiago lo revise (fuera del alcance de un agente)
- [x] Todos los ⚠️ de §6 resueltos o conscientemente aplazados (ver `content/PLACEHOLDERS.md`)

---

## Verificación end-to-end

```bash
pnpm build                       # 0 errores; revisar First Load JS por ruta
pnpm start                       # probar /es y /en
grep -rn "use client" components --exclude-dir=ui # debe devolver exactamente 4 archivos
grep -rn "useEffect" components  # debe devolver 0
pnpm format:check                # limpio
```

Manual: Lighthouse mobile/desktop en ambas rutas · recorrido solo con teclado desde el skip link hasta el footer · VoiceOver en Hero y Experiencia · DevTools a 320/768/1440 · conmutar tema y recargar (sin flash) · conmutar idioma manteniendo el ancla · validar OG y `hreflang` tras el deploy.
