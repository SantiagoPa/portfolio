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

El sitio muestra hoy **solo Calculator CRC**. El resto se retiro por decision del usuario (2026-09-22) tras comprobar el estado real de cada uno:

| #   | Nombre         | GitHub                                         | Demo                                     | Estado                                                           |
| --- | -------------- | ---------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------- |
| 1   | Calculator CRC | https://github.com/SantiagoPa/CalculatorCRCApp | https://crc-app.netlify.app              | **En el sitio.**                                                 |
| 2   | Maps App       | (sin github)                                   | https://maps-app-sp.netlify.app          | Retirado: demo devuelve 404 de Netlify.                          |
| 3   | Peajes App     | https://github.com/SantiagoPa/PeajeApp         | https://app-peaje-santiagopa.netlify.app | Retirado: demo devuelve 404 de Netlify.                          |
| 4   | CLI Clima App  | https://github.com/SantiagoPa/AppClima         | (sin demo)                               | Retirado: el repo publico tiene un `.env` commiteado (ver nota). |

- Si se reactivan las demos de Maps App o Peajes App, o se limpia el historial del repo de CLI Clima App, volver a añadirlos es solo editar `content/shared.ts` y `messages/{es,en}.ts`; `ProjectCard`, `GithubIcon` y la logica de campos opcionales ya estan listos.
- **CLI Clima App:** el `.env` commiteado no se leyo. Si contiene claves de Mapbox/OpenWeather, conviene rotarlas antes de reactivar el proyecto; borrar el archivo no las quita del historial de git.
- Imagen: mientras no haya screenshots, mostrar el icono Lucide `ImageOff` como marcador.
- "Voting System with Blockchain" NO se incluye.
- Descripcion, rol, problema, stack y caracteristicas de Calculator CRC: ver la seccion "Textos de proyectos (borrador generado)" mas abajo.

## Contacto

- **WhatsApp:** publicado como enlace `https://wa.me/573223575357` (numero del CV), con la etiqueta "WhatsApp" y sin mostrar el numero como texto visible. Es el valor por defecto que recomendaba el blueprint; el usuario no confirmo explicitamente el numero, asi que sigue pendiente de que lo confirme o pida quitarlo (aislado en `whatsappUrl` en `content/shared.ts`).
- Email (CV): `santiagopadilla117@gmail.com`
- Ubicacion: Monteria, Cordoba, Colombia (solo ciudad).
- GitHub: `https://github.com/SantiagoPa` (segun el mock del usuario; pendiente de confirmar, ver "Redes" arriba).

## Otros pendientes

- Vue NO va (no esta en el CV).
- Stack por empresa: solo Cognox -> React y Draco -> HTML/CSS/JavaScript; el resto vacio salvo confirmacion.
- Referencias: no se publican.

## Textos de proyectos (borrador generado)

**Borrador generado a partir del repo y la demo publicos, pendiente de revision del usuario.** Vive en `messages/{es,en}.ts` (`projects.items.crc`) y `content/shared.ts` (stack). Un texto `""` = sin evidencia suficiente; la tarjeta no muestra ese bloque. Rol: "Proyecto personal" (dato del usuario, no verificable en el repo).

| Proyecto       | Campos generados                      | Fuente                                                                                                                                                | Vacio    |
| -------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Calculator CRC | descripcion, 3 caracteristicas, stack | repo: `package.json`, `src/helper/calculatorCRC.js`, `FormCRC.jsx`, `InfoData.jsx`; demo: bundle JS (textos "Division", "Validacion", "Modificar TX") | problema |

- CRC: el pie de la demo cita a un co-autor; el usuario decidio dejar el texto como esta, sin mencionarlo. Redux esta en `package.json` pero no se usa: no se muestra.
- Screenshot pendiente: hoy se muestra el icono `ImageOff`.
- Los textos generados de Maps App, Peajes App y CLI Clima App (descripcion, caracteristicas, stack) se retiraron junto con los proyectos; no quedan en `messages/` ni en `content/shared.ts`. Si se reactivan, hay que redactarlos de nuevo con evidencia vigente.
