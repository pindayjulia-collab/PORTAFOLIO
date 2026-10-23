/*
  PROYECTOS DEL PORTAFOLIO
  ------------------------
  Cada objeto es una tarjeta de la grilla, en el orden en que aparece. Para agregar un proyecto:

  1. Sube sus imágenes a assets/img/<nombre-del-proyecto>/ (JPG, ~2000 px de lado mayor).
  2. Duplica un bloque { ... } y completa los textos.
  3. La primera ruta de "imagenes" es la portada de la tarjeta.

  categoria: "institucional" | "exposiciones" | "editorial" | "festivales"
  ancho:     columnas que ocupa en escritorio, de 12 (4 u 8). Usa 8 para portadas horizontales.
  encuadre:  "cubrir" recorta la foto para llenar la tarjeta (fotografías de sala);
             "contener" muestra la pieza completa sobre fondo claro (afiches, catálogos, programas).
*/
window.PROYECTOS = [
  {
    categoria: "exposiciones",
    titulo: "Patrimonio y memoria de la Universidad de Piura",
    anio: "2024",
    institucion: "Dirección de Patrimonio Cultural Universitario, UDEP",
    rol: "Diseño y diagramación de paneles",
    descripcion: "Muestra itinerante que pone en valor las colecciones de patrimonio cultural que custodia la Universidad de Piura: bibliográfico, fotográfico y artístico. Diseñé un sistema de 17 paneles de gran formato que se montó en espacios públicos de Lima y en el campus de Piura, con casi 40 metros lineales de exposición.",
    ficha: [["Piezas", "17 paneles"], ["Formato", "220 × 170 cm"], ["Extensión", "Casi 40 m lineales"], ["Sedes", "Pasaje Santa Rosa (Centro de Lima), Parque Kennedy (Miraflores) y campus Piura"], ["Créditos", "Universidad de Piura"]],
    imagenes: [
      "assets/img/patrimonio-y-memoria-udep-2024/01-portada.jpg",
      "assets/img/patrimonio-y-memoria-udep-2024/02-sala.jpg",
      "assets/img/patrimonio-y-memoria-udep-2024/03-sala.jpg",
      "assets/img/patrimonio-y-memoria-udep-2024/04-sala.jpg",
      "assets/img/patrimonio-y-memoria-udep-2024/05-sala.jpg",
      "assets/img/patrimonio-y-memoria-udep-2024/06-detalle.jpg",
      "assets/img/patrimonio-y-memoria-udep-2024/07-detalle.jpg"
    ],
    ancho: 8,
    encuadre: "cubrir"
  },
  {
    categoria: "exposiciones",
    titulo: "Expediciones a Chachapoyas de Federico Kauffmann Doig",
    anio: "2025",
    institucion: "Dirección de Patrimonio Cultural Universitario, UDEP",
    rol: "Diseño y diagramación de paneles",
    descripcion: "Exposición que reseña las expediciones del arqueólogo Federico Kauffmann Doig a Chachapoyas, entre ellas el hallazgo de los mausoleos de Los Pinchudos. Diagramé 22 paneles instalados al aire libre en el campus de la Universidad de Piura, unificados por un amarillo intenso y una retícula común para texto e imagen.",
    ficha: [["Piezas", "22 paneles"], ["Formato", "86 × 107 cm"], ["Sede", "Universidad de Piura, campus Piura"], ["Créditos", "Universidad de Piura"]],
    imagenes: [
      "assets/img/expediciones-chachapoyas-2025/01-portada.jpg",
      "assets/img/expediciones-chachapoyas-2025/02-sala.jpg",
      "assets/img/expediciones-chachapoyas-2025/03-sala.jpg",
      "assets/img/expediciones-chachapoyas-2025/04-sala.jpg",
      "assets/img/expediciones-chachapoyas-2025/05-detalle.jpg"
    ],
    ancho: 4,
    encuadre: "contener"
  },
  {
    categoria: "exposiciones",
    titulo: "30 años: Edificio de Gobierno",
    anio: "2026",
    institucion: "Dirección de Patrimonio Cultural Universitario, UDEP",
    rol: "Diseño y diagramación de paneles",
    descripcion: "Exposición fotográfica por los 30 años del Edificio de Gobierno de la Universidad de Piura, uno de los edificios emblemáticos del campus. Diseñé 10 paneles que combinan fotografías de archivo y textos sobre la historia del edificio; la portada parte del dibujo de su elevación principal.",
    ficha: [["Piezas", "10 paneles"], ["Formato", "86 × 107 cm"], ["Sede", "Universidad de Piura, campus Piura"], ["Créditos", "Universidad de Piura"]],
    imagenes: [
      "assets/img/30-anos-edificio-de-gobierno-2026/01-portada.jpg",
      "assets/img/30-anos-edificio-de-gobierno-2026/02-sala.jpg",
      "assets/img/30-anos-edificio-de-gobierno-2026/03-sala.jpg",
      "assets/img/30-anos-edificio-de-gobierno-2026/04-sala.jpg",
      "assets/img/30-anos-edificio-de-gobierno-2026/05-detalle.jpg"
    ],
    ancho: 4,
    encuadre: "contener"
  },
  {
    categoria: "exposiciones",
    titulo: "El Perú y los peruanos: la visión de Francisco González Gamarra",
    anio: "2025",
    institucion: "Patrimonio Cultural Universitario UDEP y Gerencia de Cultura de la Municipalidad de Lima",
    rol: "Materiales gráficos de la exposición",
    descripcion: "Muestra pictórica del artista cusqueño Francisco González Gamarra, organizada para difundir su obra y la labor de la Universidad de Piura en la custodia del patrimonio. Diseñé la gráfica de sala: el muro de título, una línea de tiempo de 1890 a 1972 en vinil de corte, los paneles de las vitrinas y los rótulos de obra.",
    ficha: [["Piezas", "Muro de título, línea de tiempo, paneles de vitrina, rótulos"], ["Formatos", "De 150 a 300 cm"], ["Técnica", "Vinil de corte"], ["Sede", "Galería Pancho Fierro, Municipalidad de Lima"], ["Créditos", "Patrimonio Cultural UDEP · Archivo Universidad de Piura"]],
    imagenes: [
      "assets/img/gonzalez-gamarra-pancho-fierro-2024/01-portada.jpg",
      "assets/img/gonzalez-gamarra-pancho-fierro-2024/02-sala.jpg",
      "assets/img/gonzalez-gamarra-pancho-fierro-2024/04-sala.jpg",
      "assets/img/gonzalez-gamarra-pancho-fierro-2024/03-detalle.jpg"
    ],
    ancho: 8,
    encuadre: "cubrir"
  },
  {
    categoria: "editorial",
    titulo: "Francisco González Gamarra, el arte de retratar",
    anio: "2025",
    institucion: "Patrimonio Cultural Universitario UDEP, Pinacoteca Municipal Ignacio Merino y Municipalidad de Lima",
    rol: "Diseño del catálogo de obras",
    descripcion: "Catálogo de la exposición presentada en la Pinacoteca Municipal Ignacio Merino. Diseñé el catálogo de obras en formato cuadrado, con fondos de papel envejecido y negro que dan protagonismo a los retratos del artista cusqueño y a sus fichas técnicas.",
    ficha: [["Pieza", "Catálogo de obras"], ["Formato", "25 × 25 cm"], ["Sede", "Pinacoteca Municipal Ignacio Merino, Lima"]],
    imagenes: [
      "assets/img/catalogo-el-arte-de-retratar-2025/01-portada.jpg",
      "assets/img/catalogo-el-arte-de-retratar-2025/02-portada.jpg",
      "assets/img/catalogo-el-arte-de-retratar-2025/03-detalle.jpg",
      "assets/img/catalogo-el-arte-de-retratar-2025/04-detalle.jpg",
      "assets/img/catalogo-el-arte-de-retratar-2025/05-detalle.jpg"
    ],
    ancho: 4,
    encuadre: "contener"
  },
  {
    categoria: "editorial",
    titulo: "Entre cielo y tierra: la visión de Alexander von Humboldt",
    anio: "2025",
    institucion: "Centro Cultural UDEP · Colección Michael Hein",
    rol: "Diseño del afiche y el tríptico de la exposición",
    descripcion: "Piezas gráficas para la exposición de la colección de Michael Hein, coleccionista y estudioso de la vida e impacto de Alexander von Humboldt. Diseñé el afiche de difusión y un tríptico informativo con los temas de la muestra, la cronología del viaje y textos sobre su paso por América.",
    ficha: [["Piezas", "Afiche y tríptico"], ["Formato", "Tríptico A4"], ["Sede", "Centro Cultural UDEP, Casona Pardo, Miraflores"]],
    imagenes: [
      "assets/img/entre-el-cielo-y-la-tierra-2025/01-portada.jpg",
      "assets/img/entre-el-cielo-y-la-tierra-2025/02-brochure.jpg",
      "assets/img/entre-el-cielo-y-la-tierra-2025/03-brochure.jpg"
    ],
    ancho: 4,
    encuadre: "contener"
  },
  {
    categoria: "exposiciones",
    titulo: "Pedro R. Cateriano Delgado, poeta y pionero de la gestión cultural en el Perú",
    anio: "2023",
    institucion: "Centro Cultural UDEP",
    rol: "Diseño y diagramación de paneles",
    descripcion: "Homenaje a Pedro Cateriano Delgado en agradecimiento por la donación de su biblioteca a la Universidad de Piura. Diseñé 8 paneles que combinan collages de recortes de prensa, fotografías y portadas de sus publicaciones para recordar al poeta y pionero de la gestión cultural.",
    ficha: [["Piezas", "8 paneles"], ["Formato", "120 × 180 cm"], ["Sede", "Centro Cultural UDEP, Casona Pardo, Miraflores"], ["Créditos", "Universidad de Piura"]],
    imagenes: [
      "assets/img/pedro-cateriano-delgado-2023/01-portada.jpg",
      "assets/img/pedro-cateriano-delgado-2023/02-sala.jpg",
      "assets/img/pedro-cateriano-delgado-2023/03-sala.jpg",
      "assets/img/pedro-cateriano-delgado-2023/04-sala.jpg",
      "assets/img/pedro-cateriano-delgado-2023/05-detalle.jpg"
    ],
    ancho: 4,
    encuadre: "cubrir"
  },
  {
    categoria: "exposiciones",
    titulo: "Patrimonio cultural de la Universidad de Piura",
    anio: "2024",
    institucion: "Dirección de Patrimonio Cultural Universitario, UDEP",
    rol: "Diseño y diagramación de paneles",
    descripcion: "Exposición que pone en valor las colecciones de patrimonio cultural que custodia la Universidad de Piura, desde piezas arqueológicas hasta sus edificios históricos. Diseñé y diagramé 17 paneles para la galería de arte del Parque de la Amistad, en Surco.",
    ficha: [["Piezas", "17 paneles"], ["Formato", "200 × 150 cm"], ["Sede", "Galería del Parque de la Amistad, Surco"], ["Créditos", "Universidad de Piura"]],
    imagenes: [
      "assets/img/patrimonio-udep-surco-2024/02-sala.jpg",
      "assets/img/patrimonio-udep-surco-2024/01-portada.jpg",
      "assets/img/patrimonio-udep-surco-2024/03-sala.jpg",
      "assets/img/patrimonio-udep-surco-2024/04-detalle.jpg",
      "assets/img/patrimonio-udep-surco-2024/05-detalle.jpg"
    ],
    ancho: 4,
    encuadre: "cubrir"
  },
  {
    categoria: "editorial",
    titulo: "Francisco González Gamarra en Cusco",
    anio: "2025",
    institucion: "Patrimonio Cultural Universitario UDEP, Caja Cusco, Ministerio de Cultura y Sociedad Pro Cultura Clorinda Matto de Turner",
    rol: "Diseño de los brochures de exposición",
    descripcion: "Brochures de sala para dos exposiciones del artista en Cusco: «Artista cusqueño universal», en el Museo Histórico Regional, y «Corpus Christi en Cusco», en la Sociedad Pro Cultura Clorinda Matto de Turner. Cada pieza reúne biografía, textos curatoriales e imágenes de obra, con un color propio para cada muestra.",
    ficha: [["Piezas", "2 brochures"], ["Formato", "A4 plegado a A5"], ["Sedes", "Museo Histórico Regional del Cusco · Sociedad Pro Cultura Clorinda Matto de Turner"]],
    imagenes: [
      "assets/img/catalogo-gonzalez-gamarra-cusco-2025/01-portada.jpg",
      "assets/img/catalogo-gonzalez-gamarra-cusco-2025/02-reverso.jpg",
      "assets/img/catalogo-gonzalez-gamarra-cusco-2025/03-portada.jpg",
      "assets/img/catalogo-gonzalez-gamarra-cusco-2025/04-reverso.jpg"
    ],
    ancho: 4,
    encuadre: "contener"
  },
  {
    categoria: "editorial",
    titulo: "Da Capo, un reencuentro con el piano",
    anio: "2025",
    institucion: "Centro Cultural UDEP",
    rol: "Diseño y diagramación del programa de mano",
    descripcion: "Programa de mano para el concierto del pianista Arturo Hernández Chávez en la Universidad de Piura. Diseñé la pieza con portada en negro y dorado, la biografía del intérprete, los textos de presentación y la página de instituciones aliadas y auspiciadores.",
    ficha: [["Pieza", "Programa de mano"], ["Formato", "A4 plegado a A5"], ["Sede", "Universidad de Piura, Piura"]],
    imagenes: [
      "assets/img/da-capo-programa-2025/01-portada.jpg",
      "assets/img/da-capo-programa-2025/02-pagina.jpg",
      "assets/img/da-capo-programa-2025/03-pagina.jpg",
      "assets/img/da-capo-programa-2025/04-pagina.jpg"
    ],
    ancho: 4,
    encuadre: "contener"
  }
];
