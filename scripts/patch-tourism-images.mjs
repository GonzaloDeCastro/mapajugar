/**
 * Completa tourism-images.ts: conserva URLs válidas, aplica fallbacks y busca el resto en Wikipedia.
 * Uso: node scripts/patch-tourism-images.mjs
 */

import { readFileSync, writeFileSync } from "node:fs";

import { TOURISM_IMAGE_URLS } from "../src/data/provinces/content/tourism-images.ts";
import { DEFAULT_TOURISM_BY_PROVINCE } from "../src/data/provinces/content/tourism.defaults.ts";

const WIKI_SEARCH = new Map([
  ["Campo de Piedra Pómez (Antofagasta de la Sierra)", "Campo de Piedra Pómez"],
  ["Ruta de los Seismiles y Paso de San Francisco", "Paso de San Francisco (Argentina)"],
  ["Punta Tombo (reserva de pingüinos)", "Punta Tombo"],
  ["Valle de Calamuchita (Villa General Belgrano y La Cumbrecita)", "Valle de Calamuchita"],
  ["Camino de las Altas Cumbres", "Camino de las Altas Cumbres"],
  ["Parque Nacional Quebrada del Condorito", "Parque Nacional Quebrada del Condorito"],
  ["Costanera y casco histórico de la ciudad de Corrientes", "Corrientes (ciudad)"],
  ["Parque Nacional Mburucuyá", "Parque Nacional Mburucuyá"],
  ["Parque Nacional El Palmar", "Parque Nacional El Palmar"],
  ["Termas de Federación", "Termas de Federación"],
  ["Parque Nacional Río Pilcomayo", "Parque Nacional Río Pilcomayo"],
  ["Reserva de biosfera Laguna Oca (ciudad de Formosa)", "Laguna Oca"],
  ["Purmamarca y Cerro de los Siete Colores", "Purmamarca"],
  ["Salinas Grandes y Cuesta de Lipán", "Salinas Grandes (Jujuy)"],
  ["Parque Nacional Lihué Calel", "Parque Nacional Lihué Calel"],
  ["Reserva Provincial Parque Luro", "Parque Luro"],
  ["Laguna de Utracán y área de Guatraché", "Guatraché"],
  ["Cuesta de Miranda", "Cuesta de Miranda"],
  ["Parque Nacional Laguna Brava", "Parque Nacional Laguna Brava"],
  ["Ruta del Vino en Luján de Cuyo y Valle de Uco", "Valle de Uco"],
  ["Puente del Inca y Parque Provincial Cañón del Atuel", "Puente del Inca"],
  ["Cataratas del Iguazú", "Cataratas del Iguazú"],
  ["Saltos del Moconá", "Saltos del Moconá"],
  ["Villa La Angostura y Parque Nacional Nahuel Huapi", "Villa La Angostura"],
  ["San Martín de los Andes y Ruta de los Siete Lagos", "San Martín de los Andes"],
  ["Volcán Lanín y Parque Nacional Lanín", "Volcán Lanín"],
  ["Bariloche y Circuito Chico", "San Carlos de Bariloche"],
  ["El Bolsón y Lago Puelo (comarca andina)", "El Bolsón (Río Negro)"],
  ["Las Grutas y costa del Golfo San Matías", "Las Grutas (Río Negro)"],
  ["Tren a las Nubes (San Antonio de los Cobres)", "Tren a las Nubes"],
  ["Cafayate y Quebrada de las Conchas", "Cafayate"],
  ["Cachi y Parque Nacional Los Cardones", "Cachi (Salta)"],
  ["Dique Cuesta del Viento (Rodeo)", "Dique Cuesta del Viento"],
  ["Parque Nacional El Leoncito (Barreal)", "Parque Nacional El Leoncito"],
  ["Parque Nacional Sierra de las Quijadas", "Parque Nacional Sierra de las Quijadas"],
  ["Potrero de los Funes", "Potrero de los Funes"],
  ["Merlo y Reserva Florofaunística de Rincón del Este", "Merlo (San Luis)"],
  ["Glaciar Perito Moreno (Parque Nacional Los Glaciares)", "Perito Moreno (glaciar)"],
  ["Parque de la Independencia (Rosario)", "Parque de la Independencia (Rosario)"],
  ["Puente Colgante y Costanera de Santa Fe capital", "Santa Fe (Argentina)"],
  ["Termas de Río Hondo", "Termas de Río Hondo"],
  ["Dique Frontal de Río Hondo", "Dique Frontal"],
  ["Plaza de Mayo y Catedral Metropolitana", "Plaza de Mayo"],
  ["Teatro Colón y Recoleta", "Teatro Colón (Buenos Aires)"],
  ["Puerto Argentino/Stanley y su frente costero", "Stanley (islas Malvinas)"],
  ["Cementerio de Darwin", "Cementerio de Darwin"],
  ["Voluntario Hill / Monte Longdon (sitios históricos)", "Monte Longdon"],
]);

/** URLs directas ya verificadas en history-images u otras secciones. */
const STATIC_FALLBACKS = {
  "Esteros del Iberá":
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flying_Over_Esteros_del_Iber%C3%A1_The_kingdom_of_water%2C_North-eastern_Argentina.jpg",
  "Bañado La Estrella":
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flying_Over_Esteros_del_Iber%C3%A1_The_kingdom_of_water%2C_North-eastern_Argentina.jpg",
  "Palacio San José (Concepción del Uruguay)":
    "https://upload.wikimedia.org/wikipedia/commons/9/94/Piletones_-_Palacio_San_Jos%C3%A9_-_Concepci%C3%B3n_del_Uruguay_-_Entre_R%C3%ADos.jpg",
  "Quebrada de Humahuaca (Tilcara y Humahuaca)":
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/Quebrada_de_Humahuaca_%28Argentine%29.JPG",
  "Parque Nacional Talampaya":
    "https://upload.wikimedia.org/wikipedia/commons/4/46/Talampaya_National_Park_-_54491616809.jpg",
  "Cuesta de Miranda":
    "https://upload.wikimedia.org/wikipedia/commons/4/46/Talampaya_National_Park_-_54491616809.jpg",
  "Parque Nacional Laguna Brava":
    "https://upload.wikimedia.org/wikipedia/commons/4/46/Talampaya_National_Park_-_54491616809.jpg",
  "Parque Provincial Ischigualasto (Valle de la Luna)":
    "https://upload.wikimedia.org/wikipedia/commons/f/f3/A_-_Valle_de_la_Luna%2C_el_hongo%2C_San_Juan%2C_Argentina.jpg",
  "Ruinas Jesuíticas de San Ignacio Miní":
    "https://upload.wikimedia.org/wikipedia/commons/2/28/San_Ignacio_Min%C3%AD_mission_ruins.jpg",
  "Cueva de las Manos (río Pinturas)":
    "https://upload.wikimedia.org/wikipedia/commons/f/f4/SantaCruz-CuevaManos-P2210651b.jpg",
  "Monumento Nacional a la Bandera (Rosario)":
    "https://upload.wikimedia.org/wikipedia/commons/a/ac/Monumento_a_la_Bandera_%28Rosario%29%2C_donde_Belgrano_iz%C3%B3_la_bandera_argentina_por_primera_vez_%28Rosario%29.jpg",
  "Parque de la Independencia (Rosario)":
    "https://upload.wikimedia.org/wikipedia/commons/a/ac/Monumento_a_la_Bandera_%28Rosario%29%2C_donde_Belgrano_iz%C3%B3_la_bandera_argentina_por_primera_vez_%28Rosario%29.jpg",
  "Puente Colgante y Costanera de Santa Fe capital":
    "https://upload.wikimedia.org/wikipedia/commons/b/b6/Parana_atardecer.JPG",
  "Valle de Calamuchita (Villa General Belgrano y La Cumbrecita)":
    "https://upload.wikimedia.org/wikipedia/commons/6/61/Patiocolonialcordoba.jpg",
  "Parque Nacional Los Alerces":
    "https://upload.wikimedia.org/wikipedia/commons/8/84/Chubut-Argentina.jpg",
  "Plaza de Mayo y Catedral Metropolitana":
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/Cnel_Suar%C3%A9z%2C_Buenos_Aires%2C_Argentina_-_panoramio_%283%29.jpg",
  "Parque Nacional Tierra del Fuego":
    "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ushuaia_aerial_panorama.jpg",
};

const UA = "MapaJugar/1.0 (educational)";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Convierte thumb de Commons a URL directa del archivo (evita 400 por tamaños inválidos). */
function toCommonsOriginal(url) {
  if (!url) return null;
  const thumb = url.match(
    /\/wikipedia\/commons\/thumb\/([a-f0-9]\/[a-f0-9]{2})\/(.+?)\/\d+px-.+$/,
  );
  if (thumb) {
    return `https://upload.wikimedia.org/wikipedia/commons/${thumb[1]}/${thumb[2]}`;
  }
  return url;
}

async function fetchWikiImage(title, lang = "es") {
  const res = await fetch(
    `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
    { headers: { "user-agent": UA } },
  );
  if (!res.ok) return null;
  const data = await res.json();
  const thumb = data?.thumbnail?.source;
  if (!thumb) return null;
  return toCommonsOriginal(thumb);
}

async function resolveWikiImage(name) {
  const titles = [WIKI_SEARCH.get(name), name.split("(")[0].trim()].filter(Boolean);
  for (const title of titles) {
    for (const lang of ["es", "en"]) {
      const image = await fetchWikiImage(title, lang);
      if (image) return image;
      await sleep(600);
    }
  }
  return null;
}

const names = [
  ...new Set(
    Object.values(DEFAULT_TOURISM_BY_PROVINCE).flatMap((items) =>
      items.map((i) => i.name),
    ),
  ),
];

const FORCE_REFRESH = process.argv.includes("--force");
const results = {};

for (const [name, url] of Object.entries(STATIC_FALLBACKS)) {
  results[name] = url;
}

for (const name of names) {
  if (!FORCE_REFRESH && TOURISM_IMAGE_URLS[name]?.trim()) {
    results[name] = toCommonsOriginal(TOURISM_IMAGE_URLS[name]) ?? TOURISM_IMAGE_URLS[name];
    continue;
  }
  const image = await resolveWikiImage(name);
  if (image) results[name] = image;
  console.log(image ? "OK  " : "MISS", name);
  await sleep(900);
}

for (const [name, url] of Object.entries(STATIC_FALLBACKS)) {
  if (!results[name]?.trim()) results[name] = url;
}

let out = "/** Imágenes de destinos turísticos (Wikimedia Commons, uso educativo). */\n";
out += "export const TOURISM_IMAGE_URLS: Record<string, string> = {\n";
for (const name of names) {
  out += `  ${JSON.stringify(name)}:\n    ${JSON.stringify(results[name] ?? "")},\n`;
}
out += "};\n";

writeFileSync("src/data/provinces/content/tourism-images.ts", out);
const ok = names.filter((n) => results[n]?.trim()).length;
console.log(`\n${ok}/${names.length} con imagen`);
