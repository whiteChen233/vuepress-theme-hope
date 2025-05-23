import type { ThemeLocaleData } from "../../shared/index.js";

export const esLocale: ThemeLocaleData = {
  lang: "es-ES",

  navbarLocales: {
    langName: "Español",
    selectLangAriaLabel: "Seleccionar idioma",
  },

  metaLocales: {
    author: "Autor",
    date: "Fecha de publicación",
    origin: "Original",
    views: "Páginas vistas",
    category: "Categoría",
    tag: "Etiquetas",
    readingTime: "Tiempo de lectura",
    words: "Palabras",
    toc: "En esta página",
    prev: "Anterior",
    next: "Siguiente",
    contributors: "Contribuidores",
    editLink: "Editar esta página",
    print: "Imprimir",
  },

  blogLocales: {
    article: "Artículos",
    articleList: "Lista de artículos",
    category: "Categoría",
    tag: "Etiquetas",
    timeline: "Línea de tiempo",
    timelineTitle: "Ayer una vez más!",
    all: "Todos",
    intro: "Introducción personal",
    star: "Estrella",
    empty: "$text está vacío",
  },

  paginationLocales: {
    prev: "Anterior",
    next: "Siguiente",
    navigate: "Saltar a",
    action: "Ir",
    errorText: "Por favor ingrese un número entre 1 y $page !",
  },

  outlookLocales: {
    themeColor: "Color del tema",
    darkmode: "Modo del tema",
    fullscreen: "Pantalla completa",
  },

  encryptLocales: {
    iconLabel: "Página encriptada",
    placeholder: "Ingresar contraseña",
    remember: "Recordar contraseña",
    errorHint: "Por favor ingrese la contraseña correcta!",
  },

  routerLocales: {
    skipToContent: "Saltar al contenido principal",
    notFoundTitle: "Página no encontrada",
    notFoundMsg: [
      "No hay nada aquí.",
      "Cómo llegamos aquí?",
      "Eso es un Cuatro-Cero-Cuatro.",
      "Parece que tenemos algunos enlaces rotos.",
    ],
    back: "Regresar",
    home: "Llévame al inicio",
  },
};
