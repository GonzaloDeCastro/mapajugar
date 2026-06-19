import type { ProvinceSlug } from "@/types/province";

export type TriviaReward = {
  speciesName: string;
  label: string;
  svgPath: string;
};

/** Premio descargable: ilustración SVG por provincia (estilo sticker). */
export const TRIVIA_REWARDS: Record<ProvinceSlug, TriviaReward> = {
  "buenos-aires": {
    speciesName: "Hornero",
    label: "El hornero de Buenos Aires",
    svgPath: "/images/trivia-rewards/hornero.svg",
  },
  catamarca: {
    speciesName: "Vicuña",
    label: "La vicuña de Catamarca",
    svgPath: "/images/trivia-rewards/vicuna.svg",
  },
  chaco: {
    speciesName: "Yaguareté",
    label: "El yaguareté del Chaco",
    svgPath: "/images/trivia-rewards/yaguarete.svg",
  },
  chubut: {
    speciesName: "Huemul",
    label: "El huemul de Chubut",
    svgPath: "/images/trivia-rewards/huemul.svg",
  },
  cordoba: {
    speciesName: "Carpincho",
    label: "El carpincho de Córdoba",
    svgPath: "/images/trivia-rewards/carpincho.svg",
  },
  corrientes: {
    speciesName: "Yacaré",
    label: "El yacaré de Corrientes",
    svgPath: "/images/trivia-rewards/yacare.svg",
  },
  "entre-rios": {
    speciesName: "Ceibo",
    label: "El ceibo de Entre Ríos",
    svgPath: "/images/trivia-rewards/ceibo.svg",
  },
  formosa: {
    speciesName: "Tatú carreta",
    label: "El tatú de Formosa",
    svgPath: "/images/trivia-rewards/tatu.svg",
  },
  jujuy: {
    speciesName: "Llama",
    label: "La llama de Jujuy",
    svgPath: "/images/trivia-rewards/llama.svg",
  },
  "la-pampa": {
    speciesName: "Caldén",
    label: "El caldén de La Pampa",
    svgPath: "/images/trivia-rewards/calden.svg",
  },
  "la-rioja": {
    speciesName: "Guanaco",
    label: "El guanaco de La Rioja",
    svgPath: "/images/trivia-rewards/guanaco.svg",
  },
  mendoza: {
    speciesName: "Cóndor",
    label: "El cóndor de Mendoza",
    svgPath: "/images/trivia-rewards/condor.svg",
  },
  misiones: {
    speciesName: "Tucán",
    label: "El tucán de Misiones",
    svgPath: "/images/trivia-rewards/tucan.svg",
  },
  neuquen: {
    speciesName: "Araucaria",
    label: "La araucaria de Neuquén",
    svgPath: "/images/trivia-rewards/araucaria.svg",
  },
  "rio-negro": {
    speciesName: "Trucha",
    label: "La trucha de Río Negro",
    svgPath: "/images/trivia-rewards/trucha.svg",
  },
  salta: {
    speciesName: "Cardón",
    label: "El cardón de Salta",
    svgPath: "/images/trivia-rewards/cardon.svg",
  },
  "san-juan": {
    speciesName: "Zorro gris",
    label: "El zorro de San Juan",
    svgPath: "/images/trivia-rewards/zorro.svg",
  },
  "san-luis": {
    speciesName: "Mara",
    label: "La mara de San Luis",
    svgPath: "/images/trivia-rewards/mara.svg",
  },
  "santa-cruz": {
    speciesName: "Pingüino",
    label: "El pingüino de Santa Cruz",
    svgPath: "/images/trivia-rewards/pinguino.svg",
  },
  "santa-fe": {
    speciesName: "Dorado",
    label: "El dorado de Santa Fe",
    svgPath: "/images/trivia-rewards/dorado.svg",
  },
  "santiago-del-estero": {
    speciesName: "Chañar",
    label: "El chañar santiagueño",
    svgPath: "/images/trivia-rewards/chanar.svg",
  },
  "tierra-del-fuego": {
    speciesName: "Canelo",
    label: "El canelo fueguino",
    svgPath: "/images/trivia-rewards/canelo.svg",
  },
  tucuman: {
    speciesName: "Monito del monte",
    label: "El monito del monte",
    svgPath: "/images/trivia-rewards/monito.svg",
  },
  "ciudad-autonoma-buenos-aires": {
    speciesName: "Paloma",
    label: "La paloma porteña",
    svgPath: "/images/trivia-rewards/paloma.svg",
  },
  "islas-malvinas": {
    speciesName: "Pingüino",
    label: "El pingüino de Malvinas",
    svgPath: "/images/trivia-rewards/pinguino.svg",
  },
};

export function pickRewardForProvinces(provinces: ProvinceSlug[]): TriviaReward {
  const slug = provinces[Math.floor(Math.random() * provinces.length)] ?? "buenos-aires";
  return TRIVIA_REWARDS[slug];
}
