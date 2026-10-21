/*
  PROYECTOS DEL PORTAFOLIO
  ------------------------
  Cada objeto es una tarjeta de la grilla. Para agregar o reemplazar un proyecto:

  1. Sube tus imágenes a assets/img/ (JPG o WebP, ~2000 px de lado mayor).
  2. Escribe sus rutas en "imagenes". La primera es la portada de la tarjeta.
  3. Completa los textos y cambia "ejemplo" a false.

  categoria: "institucional" | "exposiciones" | "editorial" | "festivales"
  ancho:     columnas que ocupa en escritorio, de 12 (4, 8 o 12)
  arte:      composición de reserva mientras no haya imágenes; puede quedar vacío.
*/
window.PROYECTOS = [
  {
    ejemplo: true,
    categoria: "festivales",
    titulo: "Identidad para un festival de artes",
    anio: "2026",
    institucion: "[Nombre del festival]",
    rol: "Concepto, identidad y piezas gráficas",
    descripcion: "Sistema gráfico para una edición anual: afiche principal, programa de mano, banderolas y piezas para redes, todos derivados de las mismas formas y la misma paleta.",
    ficha: [["Piezas", "Afiche, programa, banderolas, credenciales"], ["Formatos", "A2 · A5 · 80 × 200 cm"], ["Color", "Tres tintas planas"]],
    imagenes: [],
    ancho: 8,
    arte: '<div class="canvas c-poster"><div class="poster"></div><div class="poster b"></div></div>'
  },
  {
    ejemplo: true,
    categoria: "institucional",
    titulo: "Identidad para un museo comunitario",
    anio: "2025",
    institucion: "[Nombre de la institución]",
    rol: "Identidad visual y manual de marca",
    descripcion: "Logotipo, paleta y tipografía institucional pensados para convivir con las colecciones sin competir con ellas.",
    ficha: [["Entregables", "Logotipo, manual, plantillas"], ["Paleta", "Tres colores + neutros"], ["Aplicaciones", "Sala, web, papelería"]],
    imagenes: [],
    ancho: 4,
    arte: '<div class="canvas c-identity"><div class="mark"></div></div>'
  },
  {
    ejemplo: true,
    categoria: "exposiciones",
    titulo: "Paneles para una muestra de patrimonio",
    anio: "2025",
    institucion: "[Museo o centro cultural]",
    rol: "Diseño gráfico expositivo",
    descripcion: "Sistema de paneles en tres núcleos temáticos con un color por sala y texto introductorio en el panel central.",
    ficha: [["Piezas", "12 paneles · 48 cartelas"], ["Formato", "100 × 200 cm"], ["Soporte", "Foam board 10 mm"]],
    imagenes: [],
    ancho: 4,
    arte: '<div class="canvas c-panels"><i></i><i></i><i></i></div>'
  },
  {
    ejemplo: true,
    categoria: "editorial",
    titulo: "Catálogo de exposición colectiva",
    anio: "2024",
    institucion: "[Galería o editorial]",
    rol: "Diseño editorial y preprensa",
    descripcion: "Catálogo con ensayo curatorial, láminas a sangre y fichas técnicas de cada obra, preparado para impresión offset.",
    ficha: [["Páginas", "96"], ["Formato", "17 × 24 cm"], ["Papel", "Estucado mate 150 g/m²"]],
    imagenes: [],
    ancho: 8,
    arte: '<div class="canvas c-spread"><div class="book"><div class="pg"></div><div class="pg"></div></div></div>'
  },
  {
    ejemplo: true,
    categoria: "festivales",
    titulo: "Piezas para un encuentro cultural",
    anio: "2024",
    institucion: "[Organización]",
    rol: "Diseño de piezas de difusión",
    descripcion: "Banderolas de calle y señalética temporal para orientar al público entre sedes.",
    ficha: [["Piezas", "Banderolas, señalética, redes"], ["Formato", "80 × 200 cm"], ["Sedes", "[Número de sedes]"]],
    imagenes: [],
    ancho: 4,
    arte: '<div class="canvas c-banderolas"><i></i><i></i><i></i></div>'
  },
  {
    ejemplo: true,
    categoria: "institucional",
    titulo: "Aplicaciones de marca institucional",
    anio: "2023",
    institucion: "[Nombre de la institución]",
    rol: "Aplicaciones y papelería",
    descripcion: "Hoja membretada, sobres, tarjetas y credenciales que aplican el manual de marca de forma consistente.",
    ficha: [["Piezas", "Papelería, credenciales, plantillas"], ["Formatos", "A4 · DL · 9 × 5,5 cm"]],
    imagenes: [],
    ancho: 4,
    arte: '<div class="canvas c-papeleria"><i></i><i></i><i></i></div>'
  },
  {
    ejemplo: true,
    categoria: "exposiciones",
    titulo: "Gráfica de sala y cartelas",
    anio: "2023",
    institucion: "[Museo o centro cultural]",
    rol: "Vinilos, cartelas y textos de sala",
    descripcion: "Vinilo de título, textos de sala y cartelas con jerarquía legible a distancia.",
    ficha: [["Muro", "[Metros lineales]"], ["Cartelas", "15 × 10 cm"], ["Cuerpo mínimo", "24 pt"]],
    imagenes: [],
    ancho: 4,
    arte: '<div class="canvas c-wall"><div class="vinilo">Archivo abierto<small>SALA III · FOTOGRAFÍA</small></div><div class="marcos"><i></i><i></i><i></i><i></i></div></div>'
  },
  {
    ejemplo: true,
    categoria: "editorial",
    titulo: "Serie de publicaciones institucionales",
    anio: "2022",
    institucion: "[Institución]",
    rol: "Diseño de colección editorial",
    descripcion: "Portadas y maqueta interior para una colección de publicaciones con un sistema común de retícula y color.",
    ficha: [["Títulos", "3"], ["Formato", "17 × 24 cm"], ["Encuadernación", "Rústica cosida"]],
    imagenes: [],
    ancho: 12,
    arte: '<div class="canvas c-cover"><div class="cv"></div><div class="cv"></div><div class="cv"></div></div>'
  }
];
