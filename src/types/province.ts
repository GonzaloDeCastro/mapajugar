export type ProvinceSlug =
  | "buenos-aires"
  | "catamarca"
  | "chaco"
  | "chubut"
  | "cordoba"
  | "corrientes"
  | "entre-rios"
  | "formosa"
  | "jujuy"
  | "la-pampa"
  | "la-rioja"
  | "mendoza"
  | "misiones"
  | "neuquen"
  | "rio-negro"
  | "salta"
  | "san-juan"
  | "san-luis"
  | "santa-cruz"
  | "santa-fe"
  | "santiago-del-estero"
  | "tierra-del-fuego"
  | "tucuman"
  | "ciudad-autonoma-buenos-aires"
  | "islas-malvinas";

export type ProvinceImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Province = {
  slug: ProvinceSlug;
  name: string;
  shortName: string;
  description: string;
  flora: string;
  fauna: string;
  foods: string;
  tourism: string;
  gallery: ProvinceImage[];
};
