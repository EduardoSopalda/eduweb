# La Tulpa — Compañía de danza

Sitio web de **La Tulpa**, compañía de danza dirigida por Manuel Monró. Construido con [Astro](https://astro.build). Bilingüe: español e inglés.

## Arrancar en local

```bash
npm install
npm run dev
```

El sitio se sirve en `http://localhost:4321`.

## Estructura del proyecto

```
src/
├── content/
│   └── obras/              ← Colección de contenido: un .md por obra
├── components/              ← Componentes reutilizables (Header, Footer, etc.)
├── i18n/                    ← Traducciones y utilidades de idioma
├── layouts/                 ← Layout base (head, header, footer, scripts)
├── pages/                   ← Páginas en español (idioma por defecto)
│   ├── en/                  ← Páginas en inglés (misma estructura)
│   └── obras/
│       ├── index.astro      ← Listado de obras
│       └── [slug].astro     ← Página individual de obra
├── styles/
│   └── global.css           ← Variables CSS, reset, utilidades
└── content.config.ts        ← Esquema de la colección de obras
```

## Cómo añadir una nueva obra

1. Crea un archivo `.md` en `src/content/obras/`, por ejemplo `nueva-obra.md`.
2. Copia el frontmatter de una obra existente y rellena los campos:

```yaml
---
title: Nombre de la obra
slug: nombre-de-la-obra
year: 2025
choreography: Manuel Monró
performers: Nombre y nombre
music: Nombre
production: Producción
premiere: Fecha y lugar
type: Pieza breve de danza teatro
touring: true
order: 2
---
```

3. Escribe el contenido debajo del frontmatter, usando las secciones `## es` y `## en` para cada idioma.
4. La obra aparecerá automáticamente en el listado y tendrá su página propia.

## Cómo editar textos

Los textos de cada página están directamente en los archivos `.astro` de `src/pages/`:

- **Español:** archivos en `src/pages/`.
- **Inglés:** archivos en `src/pages/en/`.

Las traducciones de la interfaz (menú, etiquetas) están en `src/i18n/ui.ts`.

## Contenido pendiente

Busca `[Pendiente` o `[Pending` en los archivos para encontrar todos los marcadores de contenido que falta:

```bash
grep -r "\[Pendiente\|Pending" src/
```

## Construir para producción

```bash
npm run build
```

Genera el sitio estático en `dist/`. Listo para desplegar en Netlify, Vercel o GitHub Pages.

## Desplegar

### Netlify

Conecta el repositorio. Build command: `npm run build`. Publish directory: `dist`.

### Vercel

Conecta el repositorio. Astro se detecta automáticamente.

### GitHub Pages

Configura GitHub Actions con el adaptador oficial de Astro para GitHub Pages.

## Paleta de color

| Token | Hex | Uso |
|---|---|---|
| Base | `#0B0B0D` | Fondo |
| Texto | `#ECE7DE` | Cuerpo y títulos |
| Acento | `#7A2222` | Filetes, bordes decorativos |
| Acento interactivo | `#C44040` | Enlaces, hover, focus |
| Secundario | `#9E9890` | Texto secundario |

## Tipografías

- **Playfair Display** — Titulares (serif display).
- **Source Sans 3** — Cuerpo (sans humanista).

## Accesibilidad

Ver el [autochequeo de accesibilidad](ACCESSIBILITY.md) para el estado actual de cumplimiento WCAG 2.1 AA.
