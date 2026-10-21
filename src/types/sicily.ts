import type { ProvinceContentItem } from "@/types/province";

export type SicilyProvinceSlug =
  | "agrigento"
  | "caltanissetta"
  | "catania"
  | "enna"
  | "messina"
  | "palermo"
  | "ragusa"
  | "siracusa"
  | "trapani";

export type SicilyProvince = {
  slug: SicilyProvinceSlug;
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

export type SicilyProvinceContent = {
  plants: ProvinceContentItem[];
  animals: ProvinceContentItem[];
  foods: ProvinceContentItem[];
  tourism: ProvinceContentItem[];
  curiosities: ProvinceContentItem[];
};
