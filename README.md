# Escaparate CV · Lucía del Río

Sitio web estático (ES/EN) para mostrar el currículum de forma profesional a empresas.

## Estructura

- `index.html`: estructura de la web
- `styles.css`: estilos visuales
- `main.js`: contenido bilingüe y selector de idioma
- `cv.pdf`: CV original descargable

## Publicar en GitHub Pages (sitio de proyecto)

1. Crea un repositorio en GitHub (por ejemplo: `curriculum`).
2. Sube estos archivos a la rama principal (`main`).
3. En GitHub, entra en **Settings > Pages**.
4. En **Build and deployment** selecciona:
   - **Source**: Deploy from a branch
   - **Branch**: `main` y carpeta `/ (root)`
5. Guarda y espera a que se publique.

La URL quedará así:

`https://TU_USUARIO.github.io/curriculum/`

## Editar contenido

- Texto ES/EN: modificar el objeto `content` en `main.js`.
- Enlaces de contacto: editar la sección de contacto en `index.html`.
- CV PDF: sustituir `cv.pdf` manteniendo el mismo nombre.