import type { ProvinceContentItem, ProvinceSlug } from "@/types/province";

/**
 * Comidas iniciales por provincia.
 * La imagen queda en placeholder (string vacío) hasta cargar assets locales.
 */
export const DEFAULT_FOODS_BY_PROVINCE: Record<
  ProvinceSlug,
  ProvinceContentItem[]
> = {
  "buenos-aires": [
    {
      name: "Asado bonaerense",
      image: "",
      description:
        "Preparación tradicional de carnes a la parrilla, muy representativa de reuniones familiares.",
    },
    {
      name: "Milanesa a la napolitana",
      image: "",
      description: "Plato clásico de bodegones y casas de comida de la provincia.",
    },
    {
      name: "Dulce de leche",
      image: "",
      description: "Producto insignia de la repostería bonaerense y argentina.",
    },
  ],
  catamarca: [
    {
      name: "Empanadas catamarqueñas",
      image: "",
      description:
        "Empanadas regionales con rellenos especiados, típicas de celebraciones y encuentros.",
    },
    {
      name: "Locro del noroeste",
      image: "",
      description: "Guiso tradicional de maíz y legumbres muy presente en fiestas patrias.",
    },
    {
      name: "Tamales",
      image: "",
      description: "Preparación andina envuelta en chala, común en la cocina familiar.",
    },
  ],
  chaco: [
    {
      name: "Chipá",
      image: "",
      description:
        "Panecillo de almidón y queso muy popular en el nordeste argentino.",
    },
    {
      name: "Pacú a la parrilla",
      image: "",
      description: "Pescado de río muy consumido en la gastronomía regional.",
    },
    {
      name: "Mandioca hervida",
      image: "",
      description: "Acompañamiento tradicional del litoral y nordeste.",
    },
  ],
  chubut: [
    {
      name: "Cordero patagónico",
      image: "",
      description:
        "Plato emblemático del sur, cocido lentamente a la parrilla o al asador.",
    },
    {
      name: "Torta galesa",
      image: "",
      description: "Receta histórica del valle chubutense ligada a la colonia galesa.",
    },
    {
      name: "Trucha de río",
      image: "",
      description: "Pescado habitual en zonas cordilleranas de la provincia.",
    },
  ],
  cordoba: [
    {
      name: "Cabrito serrano",
      image: "",
      description:
        "Especialidad tradicional de zonas serranas, cocida al horno o a la parrilla.",
    },
    {
      name: "Choripán cordobés",
      image: "",
      description: "Sándwich callejero muy popular en fiestas y eventos deportivos.",
    },
    {
      name: "Alfajor cordobés",
      image: "",
      description: "Dulce regional muy difundido en rutas turísticas serranas.",
    },
  ],
  corrientes: [
    {
      name: "Mbaipy",
      image: "",
      description:
        "Preparación cremosa a base de maíz, muy presente en la cocina casera del litoral.",
    },
    {
      name: "Sopa correntina",
      image: "",
      description: "Torta salada de maíz y queso, típica de la región guaranítica.",
    },
    {
      name: "Dorado a la parrilla",
      image: "",
      description: "Pescado de río muy apreciado en la gastronomía local.",
    },
  ],
  "entre-rios": [
    {
      name: "Pescado de río",
      image: "",
      description:
        "Platos con especies del Paraná y Uruguay, centrales en la gastronomía regional.",
    },
    {
      name: "Empanadas de pescado",
      image: "",
      description: "Variante regional basada en productos frescos del río.",
    },
    {
      name: "Asado con cuero",
      image: "",
      description: "Técnica tradicional en encuentros rurales y fiestas populares.",
    },
  ],
  formosa: [
    {
      name: "Sopa paraguaya",
      image: "",
      description:
        "Torta salada de maíz y queso, muy difundida en el noreste argentino.",
    },
    {
      name: "Pacú al horno",
      image: "",
      description: "Preparación habitual con pescados de río en el norte.",
    },
    {
      name: "Chipá cuerito",
      image: "",
      description: "Panificado regional de almidón y queso, consumido como colación.",
    },
  ],
  jujuy: [
    {
      name: "Humita en chala",
      image: "",
      description:
        "Receta andina de maíz envuelta en hojas, tradicional en festividades del NOA.",
    },
    {
      name: "Tamales jujeños",
      image: "",
      description: "Preparación regional con relleno especiado y cocción envuelta.",
    },
    {
      name: "Calapurca",
      image: "",
      description: "Sopa andina caliente, típica de zonas de altura.",
    },
  ],
  "la-pampa": [
    {
      name: "Asado criollo pampeano",
      image: "",
      description:
        "Cocción de carnes a fuego lento, característica de la tradición rural pampeana.",
    },
    {
      name: "Chivito al asador",
      image: "",
      description: "Plato frecuente en encuentros camperos del centro del país.",
    },
    {
      name: "Torta frita",
      image: "",
      description: "Preparación casera tradicional en jornadas rurales.",
    },
  ],
  "la-rioja": [
    {
      name: "Chanfaina riojana",
      image: "",
      description:
        "Guiso tradicional del oeste argentino con fuerte identidad local.",
    },
    {
      name: "Empanadas riojanas",
      image: "",
      description: "Empanadas especiadas con perfil bien definido del noroeste.",
    },
    {
      name: "Locro riojano",
      image: "",
      description: "Versión local del guiso andino a base de maíz y legumbres.",
    },
  ],
  mendoza: [
    {
      name: "Tortitas mendocinas",
      image: "",
      description:
        "Panificados típicos de la provincia, consumidos en desayunos y meriendas.",
    },
    {
      name: "Chivo a la llama",
      image: "",
      description: "Plato tradicional de zonas de montaña mendocinas.",
    },
    {
      name: "Empanadas mendocinas",
      image: "",
      description: "Variante cuyana de empanadas horneadas muy popular.",
    },
  ],
  misiones: [
    {
      name: "Reviro",
      image: "",
      description:
        "Preparación de harina y grasa muy popular en el nordeste, servida en distintas variantes.",
    },
    {
      name: "Chipá misionero",
      image: "",
      description: "Panificado de almidón de mandioca y queso, clásico local.",
    },
    {
      name: "Mbejú",
      image: "",
      description: "Torta de almidón y queso vinculada a la tradición guaraní.",
    },
  ],
  neuquen: [
    {
      name: "Chivito neuquino",
      image: "",
      description:
        "Plato regional de tradición patagónica, habitual en celebraciones y ferias.",
    },
    {
      name: "Trucha patagónica",
      image: "",
      description: "Pescado de ríos y lagos andinos, muy presente en cartas regionales.",
    },
    {
      name: "Torta frita patagónica",
      image: "",
      description: "Preparación casera típica en zonas frías y de montaña.",
    },
  ],
  "rio-negro": [
    {
      name: "Trucha patagónica",
      image: "",
      description:
        "Pescado muy valorado en zonas de ríos y lagos andinos de la provincia.",
    },
    {
      name: "Cordero al asador",
      image: "",
      description: "Plato clásico en estepa y zonas rurales del norte patagónico.",
    },
    {
      name: "Frutas del valle",
      image: "",
      description: "Peras y manzanas del Alto Valle, base de postres y conservas.",
    },
  ],
  salta: [
    {
      name: "Empanadas salteñas",
      image: "",
      description:
        "Empanadas jugosas y especiadas, ícono gastronómico del noroeste argentino.",
    },
    {
      name: "Tamales salteños",
      image: "",
      description: "Preparación andina muy difundida en la cocina popular local.",
    },
    {
      name: "Humita",
      image: "",
      description: "Receta de maíz de gran tradición en mercados y hogares del NOA.",
    },
  ],
  "san-juan": [
    {
      name: "Punta de espalda",
      image: "",
      description:
        "Corte vacuno muy apreciado en asados y encuentros familiares cuyanos.",
    },
    {
      name: "Tomaticán",
      image: "",
      description: "Guiso cuyano con tomate y huevo, típico de cocina regional.",
    },
    {
      name: "Sopaipillas",
      image: "",
      description: "Masa frita tradicional en desayunos y meriendas del oeste.",
    },
  ],
  "san-luis": [
    {
      name: "Chivito puntano",
      image: "",
      description:
        "Preparación típica de la cocina serrana local, servida en festividades regionales.",
    },
    {
      name: "Empanadas puntanas",
      image: "",
      description: "Empanadas regionales con variantes locales de relleno.",
    },
    {
      name: "Carbonada",
      image: "",
      description: "Guiso criollo tradicional con verduras y carne.",
    },
  ],
  "santa-cruz": [
    {
      name: "Cazuela de mariscos",
      image: "",
      description:
        "Plato de costa patagónica con productos del mar y cocción reconfortante.",
    },
    {
      name: "Cordero santacruceño",
      image: "",
      description: "Preparación emblemática del sur cocida al asador.",
    },
    {
      name: "Centolla patagónica",
      image: "",
      description: "Producto marino típico de aguas australes.",
    },
  ],
  "santa-fe": [
    {
      name: "Dorado a la parrilla",
      image: "",
      description:
        "Preparación de pescado de río muy representativa de la cocina litoraleña.",
    },
    {
      name: "Surubí al horno",
      image: "",
      description: "Pescado regional cocido con técnicas locales.",
    },
    {
      name: "Empanada santafesina",
      image: "",
      description: "Variante local presente en gastronomía urbana y rural.",
    },
  ],
  "santiago-del-estero": [
    {
      name: "Locro santiagueño",
      image: "",
      description:
        "Guiso tradicional de maíz y legumbres, muy presente en fechas patrias y reuniones.",
    },
    {
      name: "Empanadas santiagueñas",
      image: "",
      description: "Empanadas de receta local con condimentos característicos.",
    },
    {
      name: "Rosquete santiagueño",
      image: "",
      description: "Dulce tradicional de panadería y fiestas regionales.",
    },
  ],
  "tierra-del-fuego": [
    {
      name: "Centolla fueguina",
      image: "",
      description:
        "Producto emblemático del sur austral, valorado por su sabor y textura.",
    },
    {
      name: "Merluza negra",
      image: "",
      description: "Pescado de aguas frías australes, destacado en cocina patagónica.",
    },
    {
      name: "Cordero fueguino",
      image: "",
      description: "Preparación regional asociada a asadores del extremo sur.",
    },
  ],
  tucuman: [
    {
      name: "Sánguche de milanesa",
      image: "",
      description:
        "Clásico tucumano de comida al paso, muy popular en la vida urbana local.",
    },
    {
      name: "Empanadas tucumanas",
      image: "",
      description: "Empanadas de receta local ampliamente reconocidas en el país.",
    },
    {
      name: "Humita tucumana",
      image: "",
      description: "Preparación de maíz típica de la cocina familiar del NOA.",
    },
  ],
  "ciudad-autonoma-buenos-aires": [
    {
      name: "Pizza porteña",
      image: "",
      description:
        "Estilo local con masa y queso abundante, ícono culinario de la ciudad.",
    },
    {
      name: "Fugazzeta rellena",
      image: "",
      description: "Especialidad de pizzerías porteñas con fuerte identidad barrial.",
    },
    {
      name: "Helado artesanal",
      image: "",
      description: "Producto emblemático de la cultura gastronómica urbana porteña.",
    },
  ],
  "islas-malvinas": [
    {
      name: "Cocina de mar austral",
      image: "",
      description:
        "Preparaciones basadas en pesca de aguas frías y productos locales de clima subantártico.",
    },
    {
      name: "Pescado de aguas frías",
      image: "",
      description: "Recetas basadas en especies marinas del Atlántico sur.",
    },
    {
      name: "Cordero isleño",
      image: "",
      description: "Preparación local adaptada a producción ganadera de clima frío.",
    },
  ],
};

