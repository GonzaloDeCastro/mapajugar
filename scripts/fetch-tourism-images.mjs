/**
 * Regenera tourism-images.ts con miniaturas válidas desde Wikipedia (es).
 * Uso: node scripts/fetch-tourism-images.mjs
 */

import { readFileSync, writeFileSync } from "node:fs";

import { DEFAULT_TOURISM_BY_PROVINCE } from "../src/data/provinces/content/tourism.defaults.ts";

const WIKI_SEARCH = new Map([
  ["Mar del Plata y Costa Atlántica", "Mar del Plata"],
  ["Sierra de la Ventana (Parque Provincial Ernesto Tornquist)", "Sierra de la Ventana"],
  ["Delta del Paraná en Tigre", "Delta del Paraná"],
  ["Campo de Piedra Pómez (Antofagasta de la Sierra)", "Campo de Piedra Pómez"],
  ["Ruta de los Seismiles y Paso de San Francisco", "Paso de San Francisco (Argentina)"],
  ["Cuesta del Portezuelo y El Rodeo", "Cuesta del Portezuelo"],
  ["Parque Nacional El Impenetrable", "Parque Nacional El Impenetrable"],
  ["Resistencia, Ciudad de las Esculturas", "Resistencia (Chaco)"],
  ["Parque Nacional Chaco", "Parque Nacional Chaco"],
  ["Península Valdés", "Península Valdés"],
  ["Parque Nacional Los Alerces", "Parque Nacional Los Alerces"],
  ["Punta Tombo (reserva de pingüinos)", "Punta Tombo"],
  ["Valle de Calamuchita (Villa General Belgrano y La Cumbrecita)", "Valle de Calamuchita"],
  ["Camino de las Altas Cumbres", "Camino de las Altas Cumbres"],
  ["Parque Nacional Quebrada del Condorito", "Parque Nacional Quebrada del Condorito"],
  ["Esteros del Iberá", "Esteros del Iberá"],
  ["Costanera y casco histórico de la ciudad de Corrientes", "Corrientes (ciudad)"],
  ["Parque Nacional Mburucuyá", "Parque Nacional Mburucuyá"],
  ["Parque Nacional El Palmar", "Parque Nacional El Palmar"],
  ["Termas de Federación", "Termas de Federación"],
  ["Palacio San José (Concepción del Uruguay)", "Palacio San José (Concepción del Uruguay)"],
  ["Bañado La Estrella", "Bañado La Estrella"],
  ["Parque Nacional Río Pilcomayo", "Parque Nacional Río Pilcomayo"],
  ["Reserva de biosfera Laguna Oca (ciudad de Formosa)", "Laguna Oca"],
  ["Purmamarca y Cerro de los Siete Colores", "Purmamarca"],
  ["Quebrada de Humahuaca (Tilcara y Humahuaca)", "Quebrada de Humahuaca"],
  ["Salinas Grandes y Cuesta de Lipán", "Salinas Grandes (Jujuy)"],
  ["Parque Nacional Lihué Calel", "Parque Nacional Lihué Calel"],
  ["Reserva Provincial Parque Luro", "Parque Luro"],
  ["Laguna de Utracán y área de Guatraché", "Guatraché"],
  ["Parque Nacional Talampaya", "Parque Nacional Talampaya"],
  ["Cuesta de Miranda", "Cuesta de Miranda"],
  ["Parque Nacional Laguna Brava", "Parque Nacional Laguna Brava"],
  ["Parque Provincial Aconcagua", "Aconcagua"],
  ["Ruta del Vino en Luján de Cuyo y Valle de Uco", "Valle de Uco"],
  ["Puente del Inca y Parque Provincial Cañón del Atuel", "Puente del Inca"],
  ["Cataratas del Iguazú", "Cataratas del Iguazú"],
  ["Ruinas Jesuíticas de San Ignacio Miní", "San Ignacio Miní"],
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
  ["Parque Provincial Ischigualasto (Valle de la Luna)", "Ischigualasto"],
  ["Dique Cuesta del Viento (Rodeo)", "Dique Cuesta del Viento"],
  ["Parque Nacional El Leoncito (Barreal)", "Parque Nacional El Leoncito"],
  ["Parque Nacional Sierra de las Quijadas", "Parque Nacional Sierra de las Quijadas"],
  ["Potrero de los Funes", "Potrero de los Funes"],
  ["Merlo y Reserva Florofaunística de Rincón del Este", "Merlo (San Luis)"],
  ["Glaciar Perito Moreno (Parque Nacional Los Glaciares)", "Perito Moreno (glaciar)"],
  ["El Chaltén y senderos del Fitz Roy", "El Chaltén"],
  ["Cueva de las Manos (río Pinturas)", "Cueva de las Manos"],
  ["Monumento Nacional a la Bandera (Rosario)", "Monumento Nacional a la Bandera"],
  ["Parque de la Independencia (Rosario)", "Parque de la Independencia (Rosario)"],
  ["Puente Colgante y Costanera de Santa Fe capital", "Santa Fe (Argentina)"],
  ["Termas de Río Hondo", "Termas de Río Hondo"],
  ["Dique Frontal de Río Hondo", "Dique Frontal"],
  ["Parque Nacional Copo", "Parque Nacional Copo"],
  ["Parque Nacional Tierra del Fuego", "Parque Nacional Tierra del Fuego (Argentina)"],
  ["Canal Beagle y Faro Les Eclaireurs", "Canal Beagle"],
  ["Tren del Fin del Mundo (Ushuaia)", "Tren del Fin del Mundo"],
  ["Casa Histórica de la Independencia (San Miguel de Tucumán)", "Casa de Tucumán"],
  ["Tafí del Valle y Dique La Angostura", "Tafí del Valle"],
  ["Ruinas de Quilmes", "Ruinas de Quilmes"],
  ["Caminito y barrio de La Boca", "Caminito"],
  ["Plaza de Mayo y Catedral Metropolitana", "Plaza de Mayo"],
  ["Teatro Colón y Recoleta", "Teatro Colón (Buenos Aires)"],
  ["Puerto Argentino/Stanley y su frente costero", "Stanley (islas Malvinas)"],
  ["Cementerio de Darwin", "Cementerio de Darwin"],
  ["Voluntario Hill / Monte Longdon (sitios históricos)", "Monte Longdon"],
]);

const UA = "MapaJugar/1.0 (educational; github.com/GonzaloDeCastro/mapajugar)";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchWikiImage(title) {
  const res = await fetch(
    `https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
    { headers: { "user-agent": UA } },
  );
  if (!res.ok) return null;
  const data = await res.json();
  const thumb = data?.thumbnail?.source;
  if (!thumb) return null;
  return thumb.replace(/\/\d+px-/, "/800px-");
}

const names = [
  ...new Set(
    Object.values(DEFAULT_TOURISM_BY_PROVINCE).flatMap((items) =>
      items.map((i) => i.name),
    ),
  ),
];

const results = {};
for (const name of names) {
  const title = WIKI_SEARCH.get(name) ?? name.split("(")[0].trim();
  let image = await fetchWikiImage(title);
  if (!image && title !== name) {
    await sleep(300);
    image = await fetchWikiImage(name.split("(")[0].trim());
  }
  results[name] = image ?? "";
  console.log(image ? "OK  " : "MISS", name);
  await sleep(400);
}

let out = "/** Imágenes de destinos turísticos (Wikimedia Commons, uso educativo). */\n";
out += "export const TOURISM_IMAGE_URLS: Record<string, string> = {\n";
for (const [name, url] of Object.entries(results)) {
  out += `  ${JSON.stringify(name)}:\n    ${JSON.stringify(url)},\n`;
}
out += "};\n";

writeFileSync("src/data/provinces/content/tourism-images.ts", out);
const ok = Object.values(results).filter(Boolean).length;
console.log(`\nWrote tourism-images.ts — ${ok}/${names.length} with image`);
