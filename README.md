# Portafolio · Julia Pinday Bautista

Sitio web de una sola página para el portafolio de diseño aplicado a la cultura: identidad institucional, exposiciones, diseño editorial y festivales.

## Estructura

```
index.html          Página y contenidos fijos (textos, secciones, contacto)
css/estilos.css     Estilos, colores y tipografías (variables al inicio del archivo)
js/proyectos.js     Lista de proyectos de la grilla: aquí se agregan los trabajos
js/main.js          Recorrido animado, filtros, visor de proyectos y formulario
assets/img/         Fotografías del portafolio
```

## Cómo agregar un proyecto

1. Copia las imágenes en `assets/img/` (JPG o WebP, unos 2000 px de lado mayor, menos de 500 KB cada una).
2. Abre `js/proyectos.js`, duplica un bloque `{ ... }` y completa título, año, institución, rol, descripción y ficha técnica.
3. Escribe las rutas en `imagenes`, por ejemplo `["assets/img/festival-afiche.jpg", "assets/img/festival-programa.jpg"]`. La primera es la portada.
4. Elige `encuadre: "cubrir"` para fotografías de sala o `"contener"` para afiches, catálogos y programas.
5. Los filtros de la grilla muestran solo las áreas que tienen proyectos.

## Imágenes

Cada proyecto tiene su carpeta en `assets/img/`, con archivos JPG numerados (`01-portada.jpg`, `02-sala.jpg`…) de 2000 px en el lado mayor. Para sumar un retrato, guárdalo como `assets/img/retrato.jpg` y aparecerá en «Sobre mí».

## Publicar con GitHub Pages

En el repositorio: **Settings → Pages → Build and deployment → Deploy from a branch**, rama `main`, carpeta `/ (root)`. El sitio queda en `https://pindayjulia-collab.github.io/portafolio/`.

## Notas técnicas

- Animación con GSAP 3.12.5 (ScrollTrigger y Flip) desde cdnjs.
- Si el visitante tiene activada la reducción de movimiento, o si GSAP no carga, el recorrido se muestra como secciones estáticas con la misma información.
- Tema claro y oscuro según el sistema, con botón para cambiarlo.
