import type { ProvinceContentItem, ProvinceSlug } from "@/types/province";

/**
 * Fauna autóctona base por provincia.
 * Imágenes en `public/images/animals/`. Los textos salen de `animal-descriptions.ts`
 * (una sola descripción por nombre de especie en todo el sitio).
 */
export const DEFAULT_ANIMALS_BY_PROVINCE: Record<
  ProvinceSlug,
  ProvinceContentItem[]
> = {
  "buenos-aires": [
    {
      name: "Hornero",
      image: "/images/animals/hornero.webp",
      description: "",
    },
    {
      name: "Ciervo de los pantanos",
      image: "/images/animals/ciervo-de-los-pantanos.webp",
      description: "",
    },
  ],
  catamarca: [
    {
      name: "Mara patagónica",
      image: "/images/animals/mara-rio-negro.webp",
      description: "",
    },
    {
      name: "Vicuña",
      image: "/images/animals/vicuna-argentina.webp",
      description: "",
    },
  ],
  chaco: [
    {
      name: "Aguará guazú",
      image: "/images/animals/aguara.webp",
      description: "",
    },
    {
      name: "Tatú carreta",
      image: "",
      description: "",
    },
  ],
  chubut: [
    {
      name: "Huemul",
      image: "/images/animals/huemul.webp",
      description: "",
    },
    {
      name: "Ballena franca austral",
      image: "/images/animals/Ballena-Aluminium-y-su-cr.webp",
      description: "",
    },
  ],
  cordoba: [
    {
      name: "Cóndor andino",
      image: "/images/animals/condor-andino.webp",
      description: "",
    },
    {
      name: "Puma",
      image: "/images/animals/puma-argentino.webp",
      description: "",
    },
  ],
  corrientes: [
    {
      name: "Carpincho",
      image: "/images/animals/carpincho.webp",
      description: "",
    },
    {
      name: "Yacaré overo",
      image: "/images/animals/yacare.webp",
      description: "",
    },
  ],
  "entre-rios": [
    {
      name: "Carpincho",
      image: "/images/animals/carpincho.webp",
      description: "",
    },
    {
      name: "Lobito de río",
      image: "",
      description: "",
    },
  ],
  formosa: [
    {
      name: "Lagarto overo",
      image: "/images/animals/lagarto-overo.webp",
      description: "",
    },
    {
      name: "Oso hormiguero",
      image: "",
      description: "",
    },
  ],
  jujuy: [
    {
      name: "Llama",
      image: "/images/animals/llama.webp",
      description: "",
    },
    {
      name: "Vicuña",
      image: "/images/animals/vicuna-argentina.webp",
      description: "",
    },
  ],
  "la-pampa": [
    {
      name: "Puma",
      image: "/images/animals/puma-argentino.webp",
      description: "",
    },
    {
      name: "Ñandú",
      image: "/images/animals/niandu.webp",
      description: "",
    },
  ],
  "la-rioja": [
    {
      name: "Ñandú",
      image: "/images/animals/niandu.webp",
      description: "",
    },
    {
      name: "Guanaco",
      image: "/images/animals/guanaco.webp",
      description: "",
    },
  ],
  mendoza: [
    {
      name: "Cóndor andino",
      image: "/images/animals/condor-andino.webp",
      description: "",
    },
    {
      name: "Guanaco",
      image: "/images/animals/guanaco.webp",
      description: "",
    },
  ],
  misiones: [
    {
      name: "Yaguareté",
      image: "/images/animals/yaguarete.webp",
      description: "",
    },
    {
      name: "Mono carayá",
      image: "/images/animals/mono-caraya.webp",
      description: "",
    },
  ],
  neuquen: [
    {
      name: "Zorro gris patagónico",
      image: "/images/animals/Zorro-gris.webp",
      description: "",
    },
    {
      name: "Pudú",
      image: "/images/animals/Pudu-Argentina.webp",
      description: "",
    },
  ],
  "rio-negro": [
    {
      name: "Mara patagónica",
      image: "/images/animals/mara-rio-negro.webp",
      description: "",
    },
    {
      name: "Guanaco",
      image: "/images/animals/guanaco.webp",
      description: "",
    },
  ],
  salta: [
    {
      name: "Tapir",
      image: "/images/animals/tapir.webp",
      description: "",
    },
    {
      name: "Vicuña",
      image: "/images/animals/vicuna-argentina.webp",
      description: "",
    },
  ],
  "san-juan": [
    {
      name: "Guanaco",
      image: "/images/animals/guanaco.webp",
      description: "",
    },
    {
      name: "Mara patagónica",
      image: "/images/animals/mara-rio-negro.webp",
      description: "",
    },
  ],
  "san-luis": [
    {
      name: "Peludo argentino",
      image: "/images/animals/peludo-argentino.webp",
      description: "",
    },
    {
      name: "Zorro gris",
      image: "/images/animals/Zorro-gris.webp",
      description: "",
    },
  ],
  "santa-cruz": [
    {
      name: "Pudú",
      image: "/images/animals/Pudu-Argentina.webp",
      description: "",
    },
    {
      name: "Guanaco",
      image: "/images/animals/guanaco.webp",
      description: "",
    },
  ],
  "santa-fe": [
    {
      name: "Yacaré",
      image: "/images/animals/yacare.webp",
      description: "",
    },
    {
      name: "Carpincho",
      image: "/images/animals/carpincho.webp",
      description: "",
    },
  ],
  "santiago-del-estero": [
    {
      name: "Pecarí de collar",
      image: "",
      description: "",
    },
    {
      name: "Tatú mulita",
      image: "",
      description: "",
    },
  ],
  "tierra-del-fuego": [
    {
      name: "Pingüino fueguino",
      image: "/images/animals/pinguino.webp",
      description: "",
    },
    {
      name: "Cauquén",
      image: "",
      description: "",
    },
  ],
  tucuman: [
    {
      name: "Tucán grande",
      image: "/images/animals/Tucán-Grande.webp",
      description: "",
    },
    {
      name: "Tapir",
      image: "/images/animals/tapir.webp",
      description: "",
    },
  ],
  "ciudad-autonoma-buenos-aires": [
    {
      name: "Hornero",
      image: "/images/animals/hornero.webp",
      description: "",
    },
    {
      name: "Benteveo",
      image: "",
      description: "",
    },
  ],
  "islas-malvinas": [
    {
      name: "Pingüino de penacho amarillo",
      image: "/images/animals/pinguino.webp",
      description: "",
    },
    {
      name: "Albatros de ceja negra",
      image: "",
      description: "",
    },
  ],
};
