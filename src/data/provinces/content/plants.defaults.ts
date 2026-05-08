import type { ProvinceContentItem, ProvinceSlug } from "@/types/province";

/**
 * Flora inicial por provincia.
 * La imagen queda en placeholder (string vacío) hasta cargar assets locales.
 */
export const DEFAULT_PLANTS_BY_PROVINCE: Record<
  ProvinceSlug,
  ProvinceContentItem[]
> = {
  "buenos-aires": [
    {
      name: "Cortadera pampeana",
      image: "",
      description:
        "Gramínea nativa de pastizales húmedos y bordes de bañados de la llanura pampeana.",
    },
  ],
  catamarca: [
    {
      name: "Cardón",
      image: "",
      description:
        "Cactus columnar típico de ambientes áridos de altura, adaptado a gran amplitud térmica.",
    },
  ],
  chaco: [
    {
      name: "Quebracho colorado chaqueño",
      image: "",
      description:
        "Árbol emblemático del monte chaqueño, de madera muy dura y gran valor ecológico.",
    },
  ],
  chubut: [
    {
      name: "Coirón patagónico",
      image: "",
      description:
        "Pasto dominante de la estepa, clave para la cobertura del suelo en zonas ventosas.",
    },
  ],
  cordoba: [
    {
      name: "Molle de beber",
      image: "",
      description:
        "Árbol nativo serrano, frecuente en quebradas y laderas del centro del país.",
    },
  ],
  corrientes: [
    {
      name: "Irupé",
      image: "",
      description:
        "Planta acuática de grandes hojas flotantes, característica de lagunas y esteros del litoral.",
    },
  ],
  "entre-rios": [
    {
      name: "Sauce criollo",
      image: "",
      description:
        "Árbol ribereño típico de márgenes de ríos y arroyos del sistema Paraná-Uruguay.",
    },
  ],
  formosa: [
    {
      name: "Palo santo",
      image: "",
      description:
        "Especie chaqueña adaptada a climas cálidos y secos, de gran importancia para el bosque nativo.",
    },
  ],
  jujuy: [
    {
      name: "Queñoa",
      image: "",
      description:
        "Árbol andino de altura resistente al frío, presente en sectores de Puna y prepuna.",
    },
  ],
  "la-pampa": [
    {
      name: "Caldén",
      image: "",
      description:
        "Árbol característico del espinal pampeano, formando bosques abiertos en el centro del país.",
    },
  ],
  "la-rioja": [
    {
      name: "Jarilla",
      image: "",
      description:
        "Arbusto dominante de zonas áridas y pedregosas del oeste argentino.",
    },
  ],
  mendoza: [
    {
      name: "Ajarilla",
      image: "",
      description:
        "Arbusto nativo de ambientes áridos andinos, adaptado a suelos secos y alta insolación.",
    },
  ],
  misiones: [
    {
      name: "Palmito misionero",
      image: "",
      description:
        "Palmera nativa de la selva paranaense, asociada a ambientes húmedos subtropicales.",
    },
  ],
  neuquen: [
    {
      name: "Pehuén (araucaria)",
      image: "",
      description:
        "Conífera nativa andina, símbolo de los bosques de altura del norte patagónico.",
    },
  ],
  "rio-negro": [
    {
      name: "Neneo",
      image: "",
      description:
        "Arbusto típico de la estepa patagónica, resistente al viento y la baja humedad.",
    },
  ],
  salta: [
    {
      name: "Yuchán",
      image: "",
      description:
        "Árbol de tronco ensanchado común en áreas secas del noroeste, adaptado a sequías estacionales.",
    },
  ],
  "san-juan": [
    {
      name: "Retamo",
      image: "",
      description:
        "Arbusto nativo de zonas áridas cuyanas, muy presente en laderas y piedemonte.",
    },
  ],
  "san-luis": [
    {
      name: "Algarrobo dulce",
      image: "",
      description:
        "Árbol del espinal y monte abierto, de gran importancia para fauna y comunidades locales.",
    },
  ],
  "santa-cruz": [
    {
      name: "Mata negra",
      image: "",
      description:
        "Arbusto patagónico frecuente en estepa fría, adaptado a heladas y viento intenso.",
    },
  ],
  "santa-fe": [
    {
      name: "Ceibo",
      image: "",
      description:
        "Árbol ribereño de flores rojas, habitual en humedales y márgenes fluviales del litoral.",
    },
  ],
  "santiago-del-estero": [
    {
      name: "Itín",
      image: "",
      description:
        "Especie nativa del bosque chaqueño seco, adaptada a altas temperaturas.",
    },
  ],
  "tierra-del-fuego": [
    {
      name: "Lenga fueguina",
      image: "",
      description:
        "Árbol característico de bosques subantárticos del extremo sur argentino.",
    },
  ],
  tucuman: [
    {
      name: "Aliso del cerro",
      image: "",
      description:
        "Árbol de yungas montanas, importante para la regulación hídrica de cuencas serranas.",
    },
  ],
  "ciudad-autonoma-buenos-aires": [
    {
      name: "Tala ribereño",
      image: "",
      description:
        "Árbol nativo del área pampeana y ribereña, representativo de la vegetación originaria local.",
    },
  ],
  "islas-malvinas": [
    {
      name: "Pasto tussac",
      image: "",
      description:
        "Gramínea típica de ambientes costeros subantárticos, clave para refugio de fauna marina.",
    },
  ],
};

