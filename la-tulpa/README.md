# La Tulpa — Compañía de Danza

Sitio web de La Tulpa, compañía de danza contemporánea dirigida por Manuel Monró.

Bilingue (español / inglés). Construido con Astro. Estático, accesible, desplegable en Netlify, Vercel o GitHub Pages.

## Arrancar en local

```sh
npm install
npm run dev
```

El servidor de desarrollo arranca en `http://localhost:4321`.

## Compilar para producción

```sh
npm run build
npm run preview   # previsualizar el resultado
```

Los archivos generados quedan en `./dist/`.

## Estructura del proyecto

```
la-tulpa/
├── src/
│   ├── content/
│   │   ├── obras/           ← Colección de obras (JSON)
│   │   └── media/           ← Colección de multimedia (JSON)
│   ├── components/          ← Componentes reutilizables
│   ├── layouts/             ← Layout base
│   ├── pages/               ← Páginas en español (raíz)
│   │   ├── en/              ← Páginas en inglés
│   │   └── obras/[slug]     ← Fichas individuales de obra
│   ├── i18n/                ← Traducciones (es.json, en.json)
│   └── styles/              ← CSS global
├── public/                  ← Activos estáticos (imágenes, fuentes, dossier)
└── astro.config.mjs
```

## Cómo añadir una nueva obra

1. Copia el archivo `src/content/obras/ensayo-sobre-nadie.json`.
2. Renómbralo con el slug de la nueva obra (ej. `nueva-pieza.json`).
3. Rellena los campos del JSON. Los campos con textos en español e inglés llevan sufijo `En` (ej. `title` / `titleEn`).
4. Pon `onTour: true` si está en gira; aparecerá automáticamente en la portada y en "En gira".
5. Ejecuta `npm run build` para verificar.

Campos opcionales: `video`, `image`, `tourDates`, `themes`.

## Cómo añadir material multimedia

1. Crea un nuevo archivo JSON en `src/content/media/`.
2. El campo `type` acepta: `video`, `audio`, `image`, `text`, `banner`.
3. El material aparecerá automáticamente en la sección Multimedia.

## Cómo editar textos

- Textos de la interfaz (botones, etiquetas, navegación): `src/i18n/es.json` y `src/i18n/en.json`.
- Contenido de las páginas estáticas (compañía, biografía, prensa, contacto): editar directamente los archivos `.astro` en `src/pages/`.

## Marcadores pendientes

Los elementos pendientes de Manuel están marcados visualmente en el sitio con un borde discontinuo rojo y el texto "PENDIENTE DE MANUEL:". Busca `placeholder-content` en el código para localizarlos todos.

Contenido pendiente:
- Fotografías (retrato de Manuel, fotos de las piezas)
- Vídeo promocional
- Formación y trayectoria detallada de Manuel
- Declaración de artista
- Email de contacto y redes sociales
- Dossier y rider técnico
- Autor y medio de la reseña de prensa
- Sentido personal del nombre "La Tulpa"
- Próximas funciones y nuevos proyectos

## Despliegue

El sitio está listo para desplegar en cualquier servicio de hosting estático:

- **Netlify / Vercel**: conectar el repositorio y configurar `npm run build` como comando, `dist` como directorio de salida.
- **GitHub Pages**: usar la acción oficial de Astro para GitHub Pages.

## Accesibilidad

El sitio cumple WCAG 2.1 AA. Ver la sección de autochequeo más abajo o en el código fuente.

## Comandos

| Comando             | Acción                                      |
| :------------------ | :------------------------------------------ |
| `npm install`       | Instalar dependencias                       |
| `npm run dev`       | Servidor de desarrollo en localhost:4321    |
| `npm run build`     | Compilar para producción en `./dist/`       |
| `npm run preview`   | Previsualizar la compilación                |
