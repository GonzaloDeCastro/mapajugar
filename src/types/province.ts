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

export type ProvinceContentItem = {
  name: string;
  image: string;
  description: string;
};

export type ProvinceLocalContent = {
  name: string;
  slug: ProvinceSlug;
  animals: ProvinceContentItem[];
  plants: ProvinceContentItem[];
  foods: ProvinceContentItem[];
  curiosities: ProvinceContentItem[];
  tourism: ProvinceContentItem[];
};

export type Province = {
  slug: ProvinceSlug;
  name: string;
  shortName: string;
  description: string;
  /**
   * Reseña junto al mapa SVG: historia breve, población aproximada y por qué
   * la jurisdicción es conocida o relevante (censo 2022 INDEC u orientativo).
   */
  spotlightOverview: string;
  /** Dato corto tipo “¿Sabías que…?” para la pestaña Curiosidades */
  curiosity?: string;
  flora: string;
  fauna: string;
  foods: string;
  tourism: string[];
};
