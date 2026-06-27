# Autochequeo de accesibilidad — La Tulpa

Estado del cumplimiento WCAG 2.1 AA. Última revisión: junio 2025.

## Criterios cumplidos

### Perceptible

- [x] **1.1.1 Contenido no textual (A):** Todas las imágenes tienen texto alternativo. Los placeholders incluyen `role="img"` y `aria-label` descriptivo.
- [x] **1.3.1 Información y relaciones (A):** HTML semántico con landmarks (`header`, `nav`, `main`, `footer`). Jerarquía de encabezados correcta (h1 > h2 > h3) en todas las páginas.
- [x] **1.3.2 Secuencia significativa (A):** El orden del DOM sigue el orden visual de lectura.
- [x] **1.3.4 Orientación (AA):** El diseño es responsive y funciona en horizontal y vertical.
- [x] **1.4.1 Uso del color (A):** La información no se transmite solo mediante el color. Los enlaces tienen subrayado. Las badges tienen borde además de color.
- [x] **1.4.3 Contraste mínimo (AA):** Texto principal `#ECE7DE` sobre `#0B0B0D`: ratio ~16:1. Texto secundario `#9E9890` sobre `#0B0B0D`: ratio ~5.5:1. Acento interactivo `#C44040` sobre `#0B0B0D`: ratio ~5.2:1. Todos superan el mínimo de 4.5:1.
- [x] **1.4.4 Cambio de tamaño del texto (AA):** Tipografía en unidades relativas (rem, clamp). Probado al 200% sin pérdida de contenido.
- [x] **1.4.10 Reajuste del contenido (AA):** Diseño responsive, sin scroll horizontal a 320px de ancho.
- [x] **1.4.11 Contraste de elementos no textuales (AA):** Los bordes y filetes decorativos (`#7A2222`) se usan como decoración, no como portadores de información.

### Operable

- [x] **2.1.1 Teclado (A):** Toda la funcionalidad es accesible por teclado. El menú móvil se abre/cierra con Enter y Escape.
- [x] **2.1.2 Sin trampa de teclado (A):** No hay trampas de teclado. Escape cierra el menú y devuelve el foco al botón.
- [x] **2.4.1 Evitar bloques (A):** Enlace de salto al contenido principal ("Ir al contenido principal" / "Skip to main content").
- [x] **2.4.2 Título de la página (A):** Cada página tiene un `<title>` descriptivo y único.
- [x] **2.4.3 Orden del foco (A):** El orden de tabulación sigue el orden lógico del documento.
- [x] **2.4.4 Propósito de los enlaces (A):** Los textos de enlace describen su destino.
- [x] **2.4.6 Encabezados y etiquetas (AA):** Encabezados descriptivos en todas las secciones.
- [x] **2.4.7 Foco visible (AA):** Outline visible en todos los elementos interactivos (`outline: 2px solid` con `outline-offset`).
- [x] **2.5.3 Etiqueta en el nombre (A):** Las etiquetas visibles coinciden con los nombres accesibles.

### Comprensible

- [x] **3.1.1 Idioma de la página (A):** Atributo `lang` en `<html>` (`es` o `en` según la versión).
- [x] **3.1.2 Idioma de las partes (AA):** El enlace de cambio de idioma tiene atributos `lang` y `hreflang`.
- [x] **3.2.3 Navegación coherente (AA):** La navegación es idéntica en todas las páginas.
- [x] **3.2.4 Identificación coherente (AA):** Los componentes con la misma función tienen nombres coherentes.

### Robusto

- [x] **4.1.2 Nombre, función, valor (A):** Botón del menú con `aria-expanded`, `aria-controls` y `aria-label`. Landmarks identificados.
- [x] **4.1.3 Mensajes de estado (AA):** No hay mensajes de estado dinámicos en el sitio actual.

## Criterios con implementación parcial o pendientes de revisión

- [ ] **1.2.1 Solo audio y solo vídeo (A):** Pendiente. No hay vídeo ni audio integrado aún. Cuando Manuel facilite vídeos, deberán incluir subtítulos y transcripción.
- [ ] **1.2.2 Subtítulos (A):** Pendiente de que se añadan vídeos.
- [ ] **1.2.3 Audiodescripción o alternativa (A):** Pendiente de que se añadan vídeos. Incluir descripción textual de los fragmentos de danza.
- [ ] **1.2.5 Audiodescripción (AA):** Pendiente de que se añadan vídeos.
- [ ] **1.1.1 Imágenes reales:** Los placeholders cumplen técnicamente, pero las imágenes definitivas necesitarán texto alternativo descriptivo real cuando se incorporen.
- [ ] **2.4.5 Múltiples vías (AA):** El sitio tiene navegación principal pero no mapa del sitio ni buscador. Considerar añadir un sitemap visible si el sitio crece.

## Notas

- El acento decorativo `#7A2222` no se usa para texto ni para elementos que transmitan información. Solo aparece en filetes, bordes y detalles visuales.
- `prefers-reduced-motion` está implementado: todas las animaciones de scroll reveal se desactivan cuando el usuario lo solicita. `scroll-behavior: smooth` también se desactiva.
- El sitio no usa JavaScript más allá del menú móvil y el scroll reveal. Funciona sin JavaScript (el menú queda oculto en móvil, pero el contenido es accesible).
- **Revisión humana recomendada:** este chequeo es del desarrollador. Se recomienda una auditoría con lectores de pantalla (NVDA, VoiceOver) y con usuarios reales antes de publicar.
