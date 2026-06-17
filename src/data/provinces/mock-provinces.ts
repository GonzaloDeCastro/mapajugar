import type { Province, ProvinceSlug } from "@/types/province";

import { DEFAULT_TOURISM_BY_PROVINCE } from "./content/tourism.defaults";
import { PROVINCE_SPOTLIGHT } from "./province-spotlight";

function stub(
  slug: ProvinceSlug,
  name: string,
  shortName: string,
  hint: string,
): Province {
  return {
    slug,
    name,
    shortName,
    description: `${name} concentra paisajes y culturas propias de ${hint}. Ideal para recorrer con tiempo, priorizando rutas escénicas y estaciones del año.`,
    curiosity: `Tip de explorador: en ${name} destaca ${hint.toLowerCase()} — ideal para aprender con el mapa.`,
    flora: `Vegetación típica de la región: formaciones nativas, bosques y pastizales según relieve y precipitación.`,
    fauna: `Aves, pequeños mamíferos y especies acuáticas en humedales y ríos; la observación responsable respeta cerramientos y períodos de reproducción.`,
    foods: `Platos regionales de cocina casera, productos locales de estación y especialidades de ferias.`,
    tourism: (DEFAULT_TOURISM_BY_PROVINCE[slug] ?? []).map((t) => t.name),
    spotlightOverview: PROVINCE_SPOTLIGHT[slug],
  };
}

export const PROVINCES: Province[] = [
  {
    slug: "buenos-aires",
    name: "Buenos Aires",
    shortName: "BA",
    description:
      "La provincia más poblada del país combina la Pampa húmeda, la costa atlántica y sierras del sistema de Tandilia y Ventania. Ofrece playas extensas, estancias, gastronomía fuerte en carnes y lácteos, y una red urbana muy activa alrededor del Gran Buenos Aires.",
    flora:
      "Pastizales de la Pampa, caldén en zonas más secas, monte ribereño en el Paraná y delta, dunas vegetadas en la costa.",
    fauna:
      "Aves acuáticas y playeras, zorros, liebres y biodiversidad costera; en áreas protegidas conviene el avistaje con guías.",
    foods:
      "Asado, milanesas, fugazzetta, dulce de leche, quesos y vinos de la región vitivinícola bonaerense.",
    tourism: (DEFAULT_TOURISM_BY_PROVINCE["buenos-aires"] ?? []).map((t) => t.name),
    curiosity:
      "La provincia tiene miles de kilómetros de costa atlántica: un mundo de playas, dunas y reservas para descubrir.",
    spotlightOverview: PROVINCE_SPOTLIGHT["buenos-aires"],
  },
  {
    slug: "cordoba",
    name: "Córdoba",
    shortName: "CBA",
    description:
      "Sierras Grandes, valles templados y una fuerte tradición estudiantil definen la identidad cordobesa. Es un destino clásico para trekking liviano, ríos y pueblos serranos con excelente oferta gastronómica.",
    flora:
      "Bosques serranos, pastizales altos y especies arbóreas como el cedro salteño y el piquillín en distintos pisos altitudinales.",
    fauna:
      "Cóndor andino en sectores altos, zorros, liebres y avifauna variada en quebradas y embalses.",
    foods:
      "Choripán, empanadas, cabrito y alfajores artesanales; cervezas de la región y quesos serranos.",
    tourism: (DEFAULT_TOURISM_BY_PROVINCE.cordoba ?? []).map((t) => t.name),
    curiosity:
      "Las Sierras de Córdoba son un clásico del centro del país: ríos, pueblos y miradores en cada curva.",
    spotlightOverview: PROVINCE_SPOTLIGHT.cordoba,
  },
  {
    slug: "jujuy",
    name: "Jujuy",
    shortName: "JY",
    description:
      "Quebrada de Humahuaca, Puna y Yungas condensan contrastes extremos: colores minerales, altiplano y selva de montaña en pocos kilómetros.",
    flora:
      "Cardones y queñoas en altura, bosques de yungas con cebil y tipas hacia el este.",
    fauna:
      "Vicuñas, zorros andinos, cóndores y aves de altura; en yungas, mayor diversidad de passeriformes.",
    foods:
      "Humitas, tamales, quinoa en guisos, chicha y dulces regionales de caña.",
    tourism: (DEFAULT_TOURISM_BY_PROVINCE.jujuy ?? []).map((t) => t.name),
    curiosity:
      "En pocos kilómetros podés pasar de la Puna alta a las Yungas: un cambio de paisaje dramático.",
    spotlightOverview: PROVINCE_SPOTLIGHT.jujuy,
  },
  stub("catamarca", "Catamarca", "CT", "los Valles Calchaquíes y la Puna"),
  stub("chaco", "Chaco", "CC", "el Chaco húmedo y el Impenetrable"),
  stub("chubut", "Chubut", "CH", "la estepa patagónica y la cordillera"),
  stub("corrientes", "Corrientes", "CN", "los Esteros del Iberá y el río Paraná"),
  stub("entre-rios", "Entre Ríos", "ER", "el litoral y los ríos Paraná y Uruguay"),
  stub("formosa", "Formosa", "FM", "el Chaco húmedo y bañados"),
  stub("la-pampa", "La Pampa", "LP", "la estepa y la meseta"),
  stub("la-rioja", "La Rioja", "LR", "los valles y la cordillera riojana"),
  stub("mendoza", "Mendoza", "MZ", "los Andes y el oasis vitivinícola"),
  stub("misiones", "Misiones", "MN", "la selva misionera y el Iguazú"),
  stub("neuquen", "Neuquén", "NQ", "la meseta y el corredor cordillerano"),
  stub("rio-negro", "Río Negro", "RN", "el valle y la meseta patagónica"),
  stub("salta", "Salta", "SA", "Valles, Quebrada y Puna salteña"),
  stub("san-juan", "San Juan", "SJ", "el pie de cordillera y los valles"),
  stub("san-luis", "San Luis", "SL", "sierras centrales y llanuras"),
  stub("santa-cruz", "Santa Cruz", "SC", "la Patagonia austral y los glaciares"),
  stub("santa-fe", "Santa Fe", "SF", "el río Paraná y la pampa húmeda"),
  stub("santiago-del-estero", "Santiago del Estero", "SE", "el Chaco santiagueño"),
  stub("tierra-del-fuego", "Tierra del Fuego", "TF", "la isla grande y el canal Beagle"),
  stub("islas-malvinas", "Islas Malvinas", "IK", "el archipiélago y el mar argentino austral"),
  stub("tucuman", "Tucumán", "TM", "los valles tucumanos y las yungas"),
  {
    slug: "ciudad-autonoma-buenos-aires",
    name: "Ciudad Autónoma de Buenos Aires",
    shortName: "CABA",
    description:
      "Capital federal con intensa vida cultural, amplios espacios verdes y arquitectura ecléctica. Es ideal para recorrer a pie o en transporte público, combinando barrios históricos y waterfront.",
    flora:
      "Arbolado urbano destacado: tipas, lapachos y palos borrachos en avenidas y parques.",
    fauna:
      "Aves urbanas como palomas, tordo y loros barranqueros; en Reserva Ecológica, mayor biodiversidad ribereña.",
    foods:
      "Pizza, helado, cafés notables, parrilla porteña y pastelería tradicional.",
    tourism: (DEFAULT_TOURISM_BY_PROVINCE["ciudad-autonoma-buenos-aires"] ?? []).map(
      (t) => t.name,
    ),
    curiosity:
      "La ciudad mezcla parques enormes, historia y arte callejero: perfecta para recorrer con curiosidad.",
    spotlightOverview: PROVINCE_SPOTLIGHT["ciudad-autonoma-buenos-aires"],
  },
];

export const PROVINCE_BY_SLUG = Object.fromEntries(
  PROVINCES.map((p) => [p.slug, p]),
) as Record<ProvinceSlug, Province>;
