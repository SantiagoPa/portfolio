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

- Copiado a `public/cv/santiago-padilla-cv-es.pdf` (desde `~/Documents/Hoja De Vida/CV - Santiago Padilla.pdf`). Version en ingles: no existe todavia.

## Proyectos (informacion del mock del usuario; no inventar descripciones)

| #   | Nombre         | GitHub                                         | Demo                                     |
| --- | -------------- | ---------------------------------------------- | ---------------------------------------- |
| 1   | Calculator CRC | https://github.com/SantiagoPa/CalculatorCRCApp | https://crc-app.netlify.app              |
| 2   | Maps App       | (sin github)                                   | https://maps-app-sp.netlify.app          |
| 3   | Peajes App     | https://github.com/SantiagoPa/PeajeApp         | https://app-peaje-santiagopa.netlify.app |
| 4   | CLI Clima App  | https://github.com/SantiagoPa/AppClima         | (sin demo)                               |

- Imagen: mientras no haya screenshots, mostrar el icono Lucide `ImageOff` como marcador.
- "Voting System with Blockchain" NO se incluye.
- Descripcion, rol, problema, stack y caracteristicas por proyecto: ver la seccion "Textos de proyectos (borrador generado)" mas abajo.

## Contacto

- Telefono/WhatsApp: decision pendiente del usuario. NO publicar todavia.
- Email (CV): `santiagopadilla117@gmail.com`
- Ubicacion: Monteria, Cordoba, Colombia (solo ciudad).

## Otros pendientes

- Vue NO va (no esta en el CV).
- Stack por empresa: solo Cognox -> React y Draco -> HTML/CSS/JavaScript; el resto vacio salvo confirmacion.
- Referencias: no se publican.

## Textos de proyectos (borrador generado)

**Borrador generado a partir de repos y demos publicos, pendiente de revision del usuario.** Vive en `messages/{es,en}.ts` (`projects.items.<id>`) y `content/shared.ts` (stack). Un texto `""` = sin evidencia suficiente; la tarjeta no muestra ese bloque. Rol: "Proyecto personal" para los 4 (dato del usuario, no verificable en los repos).

| Proyecto       | Campos generados                      | Fuente                                                                                                                                                | Vacio                                         |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| Calculator CRC | descripcion, 3 caracteristicas, stack | repo: `package.json`, `src/helper/calculatorCRC.js`, `FormCRC.jsx`, `InfoData.jsx`; demo: bundle JS (textos "Division", "Validacion", "Modificar TX") | problema                                      |
| Maps App       | ninguno                               | sin repo; la demo responde 404 de Netlify (sitio no encontrado), sin evidencia                                                                        | descripcion, problema, caracteristicas, stack |
| Peajes App     | descripcion, 3 caracteristicas, stack | repo: `package.json`, `src/peaje/page/*`, `src/store/slices/*`, `src/peaje/interface`; la demo responde 404 de Netlify                                | problema                                      |
| CLI Clima App  | descripcion, 3 caracteristicas, stack | repo: `package.json`, `index.js`, `models/busqueda.js`, `helpers/inquirer.js`, README                                                                 | problema                                      |

- Las demos de Maps App y Peajes App devuelven 404 de Netlify (sitio inexistente) al 2026-09-22; los enlaces se mantienen tal como el mock.
- CRC: el pie de la demo cita a un co-autor; el texto no lo menciona. Redux esta en `package.json` pero no se usa: no se muestra.
- Tecnologias fuera de `TechId` (Vite, Axios, Inquirer, Mapbox, OpenWeather): no son badges; Mapbox/OpenWeather solo se nombran en la descripcion de CLI Clima.
- Screenshots pendientes: hoy se muestra el icono `ImageOff`.
