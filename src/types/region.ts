import type { ProvinceContentItem } from "@/types/province";

export type ItalyRegionSlug =
  | "valle-d-aosta"
  | "piemonte"
  | "liguria"
  | "lombardia"
  | "trentino-alto-adige"
  | "veneto"
  | "friuli-venezia-giulia"
  | "emilia-romagna"
  | "toscana"
  | "umbria"
  | "marche"
  | "lazio"
  | "abruzzo"
  | "molise"
  | "campania"
  | "puglia"
  | "basilicata"
  | "calabria"
  | "sicilia"
  | "sardegna";

export type ItalyRegion = {
  slug: ItalyRegionSlug;
  name: string;
  shortName: string;
  description: string;
  spotlightOverview: string;
  curiosity: string;
  flora: string;
  fauna: string;
  foods: string;
  tourism: string[];
};

export type ItalyRegionContent = {
  plants: ProvinceContentItem[];
  animals: ProvinceContentItem[];
  foods: ProvinceContentItem[];
  tourism: ProvinceContentItem[];
  curiosities: ProvinceContentItem[];
};
