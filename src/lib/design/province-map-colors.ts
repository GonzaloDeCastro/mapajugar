import type { ProvinceSlug } from "@/types/province";

export type ProvinceMapFill = {
  base: string;
  hover: string;
  pressed: string;
};

const f = (base: string, hover: string, pressed: string): ProvinceMapFill => ({
  base,
  hover,
  pressed,
});

/** NOA — tonos lima / sol */
const NOA = f("#c0ca33", "#d4e157", "#afb42b");
/** NEA + Misiones — verdes húmedos */
const NEA = f("#66bb6a", "#81c784", "#4caf50");
/** Litoral */
const LITORAL = f("#9ccc65", "#aed581", "#8bc34a");
/** Pampeana */
const PAMPA = f("#c5e1a5", "#dcedc8", "#aed581");
/** Cuyo */
const CUYO = f("#9db89d", "#b2c9b2", "#7d9a7d");
/** Patagonia — verde azulado */
const PATAGONIA = f("#4db6ac", "#80cbc4", "#26a69a");
/** CABA */
const CABA = f("#ffd54f", "#ffe082", "#ffca28");
/** Malvinas — celeste océano */
export const MALVINAS_MAP_FILL = f("#4fc3f7", "#81d4fa", "#29b6f6");

export const MAINLAND_PROVINCE_FILLS: Record<
  Exclude<ProvinceSlug, "islas-malvinas">,
  ProvinceMapFill
> = {
  "buenos-aires": PAMPA,
  catamarca: NOA,
  chaco: NEA,
  chubut: PATAGONIA,
  cordoba: PAMPA,
  corrientes: NEA,
  "entre-rios": LITORAL,
  formosa: NEA,
  jujuy: NOA,
  "la-pampa": PAMPA,
  "la-rioja": NOA,
  mendoza: CUYO,
  misiones: NEA,
  neuquen: PATAGONIA,
  "rio-negro": PATAGONIA,
  salta: NOA,
  "san-juan": CUYO,
  "san-luis": CUYO,
  "santa-cruz": PATAGONIA,
  "santa-fe": LITORAL,
  "santiago-del-estero": NOA,
  "tierra-del-fuego": PATAGONIA,
  tucuman: NOA,
  "ciudad-autonoma-buenos-aires": CABA,
};
