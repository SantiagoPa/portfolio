# Placeholders y datos pendientes

Datos definidos por Santiago para las fases posteriores. Fuente de verdad de contenido: el CV. Las fases futuras deben tomar estos valores de aqui.

## Dominio final

- **MOCK:** `https://santiagopadilla.dev` (NO es un dominio real; se reemplaza cuando exista el definitivo). Usar en `lib/site.ts` (`metadataBase`, canonical, sitemap, OG).

## Redes

- LinkedIn: `https://www.linkedin.com/in/santiago-padilla-arcia-6562ba205/`
- GitHub: `https://github.com/SantiagoPa` (segun el mock; pendiente de confirmar)

## Foto de perfil

- MOCK: icono de Lucide `User` en lugar de imagen. Sustituir por `public/profile.webp` (640x640) cuando exista.

## PDF del CV

- CV por idioma en `public/cv/`: `CV_Santiago_Padilla_ATS_ES.pdf` (es) y `CV_Santiago_Padilla_ATS.pdf` (en), mapeados en `cvPaths` (`content/shared.ts`).

## Proyectos (informacion del mock del usuario; no inventar descripciones)

El sitio muestra hoy **solo Syner** (proyecto fullstack del usuario, 2026-10-10). Calculator CRC se retiro ese mismo dia por decision del usuario; los otros tres se retiraron el 2026-09-22 tras comprobar el estado real de cada uno:

| #   | Nombre         | GitHub                                         | Demo                                     | Estado                                                           |
| --- | -------------- | ---------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------- |
| 0   | Syner          | https://github.com/orgs/Syner-App/repositories | (sin demo publica)                       | **En el sitio.**                                                 |
| 1   | Calculator CRC | https://github.com/SantiagoPa/CalculatorCRCApp | https://crc-app.netlify.app              | Retirado por decision del usuario (2026-10-10).                  |
| 2   | Maps App       | (sin github)                                   | https://maps-app-sp.netlify.app          | Retirado: demo devuelve 404 de Netlify.                          |
| 3   | Peajes App     | https://github.com/SantiagoPa/PeajeApp         | https://app-peaje-santiagopa.netlify.app | Retirado: demo devuelve 404 de Netlify.                          |
| 4   | CLI Clima App  | https://github.com/SantiagoPa/AppClima         | (sin demo)                               | Retirado: el repo publico tiene un `.env` commiteado (ver nota). |

- Si se reactivan las demos de Maps App o Peajes App, o se limpia el historial del repo de CLI Clima App, volver a añadirlos es solo editar `content/shared.ts` y `messages/{es,en}.ts`; `ProjectCard`, `SiGithub` (react-icons) y la logica de campos opcionales ya estan listos.
- **CLI Clima App:** el `.env` commiteado no se leyo. Si contiene claves de Mapbox/OpenWeather, conviene rotarlas antes de reactivar el proyecto; borrar el archivo no las quita del historial de git.
- Imagenes: Syner tiene 5 capturas en `public/projects/syner/`, mostradas en la galeria de la tarjeta (`ProjectGallery`). Un proyecto sin capturas muestra el icono `ImageOff`.
- "Voting System with Blockchain" NO se incluye.
- Descripcion, rol, problema, stack y caracteristicas de Syner: ver la seccion "Textos de proyectos (borrador generado)" mas abajo.

## Contacto

- **WhatsApp:** retirado por decision del usuario (2026-09-26). El sitio no publica telefono ni enlace `wa.me`.
- Email (CV): `santiagopadilla117@gmail.com`
- Ubicacion: Monteria, Cordoba, Colombia (solo ciudad).
- GitHub: `https://github.com/SantiagoPa` (segun el mock del usuario; pendiente de confirmar, ver "Redes" arriba).

## Otros pendientes

- Vue NO va (no esta en el CV).
- Stack por empresa: solo Cognox -> React y Draco -> HTML/CSS/JavaScript; el resto vacio salvo confirmacion.
- Referencias: no se publican.

## Textos de proyectos (borrador generado)

**Borrador generado a partir del README y los `package.json` de `syner-launcher`, pendiente de revision del usuario.** Vive en `messages/{es,en}.ts` (`projects.items.syner`) y `content/shared.ts` (stack e imagenes). Un texto `""` = sin evidencia suficiente; la tarjeta no muestra ese bloque. Rol: "Proyecto personal · Fullstack".

| Proyecto | Campos generados                                             | Fuente                                                                                       | Vacio |
| -------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------- | ----- |
| Syner    | descripcion, problema, 3 caracteristicas, stack, alt de imagenes | `syner-launcher/README.md`, `.gitmodules`, `package.json` de `syner-app` y de cada microservicio | —     |

- Stack de Syner: gRPC, RabbitMQ, Prisma, Socket.IO y Nginx se añadieron tambien a la seccion Stack por decision del usuario (2026-10-10).
- Los textos de Calculator CRC, Maps App, Peajes App y CLI Clima App se retiraron junto con los proyectos; no quedan en `messages/` ni en `content/shared.ts`. Si se reactivan, hay que redactarlos de nuevo con evidencia vigente.
