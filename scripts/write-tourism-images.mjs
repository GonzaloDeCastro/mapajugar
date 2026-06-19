/**
 * Escribe tourism-images.ts con URLs curadas de Wikimedia Commons.
 * Uso: node scripts/write-tourism-images.mjs
 */

import { readFileSync, writeFileSync } from "node:fs";

const TOURISM_IMAGES = {
  "Mar del Plata y Costa Atlántica":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Mar_del_Plata_-_panoramio.jpg/640px-Mar_del_Plata_-_panoramio.jpg",
  "Sierra de la Ventana (Parque Provincial Ernesto Tornquist)":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sierra_de_la_Ventana.jpg/640px-Sierra_de_la_Ventana.jpg",
  "Delta del Paraná en Tigre":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Delta_del_Paran%C3%A1%2C_Tigre.jpg/640px-Delta_del_Paran%C3%A1%2C_Tigre.jpg",
  "Campo de Piedra Pómez (Antofagasta de la Sierra)":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Campo_de_Piedra_Pomez%2C_Catamarca%2C_Argentina_-_panoramio.jpg/640px-Campo_de_Piedra_Pomez%2C_Catamarca%2C_Argentina_-_panoramio.jpg",
  "Ruta de los Seismiles y Paso de San Francisco":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Paso_de_San_Francisco.jpg/640px-Paso_de_San_Francisco.jpg",
  "Cuesta del Portezuelo y El Rodeo":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Cuesta_del_Portezuelo%2C_Catamarca.jpg/640px-Cuesta_del_Portezuelo%2C_Catamarca.jpg",
  "Parque Nacional El Impenetrable":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Parque_Nacional_El_Impenetrable.jpg/640px-Parque_Nacional_El_Impenetrable.jpg",
  "Resistencia, Ciudad de las Esculturas":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Casadegobiernodelchaco.jpg/640px-Casadegobiernodelchaco.jpg",
  "Parque Nacional Chaco":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Chaco_Boreal_Paraguay.jpg/640px-Chaco_Boreal_Paraguay.jpg",
  "Península Valdés":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Southern_right_whale_in_Peninsula_Valdes.jpg/640px-Southern_right_whale_in_Peninsula_Valdes.jpg",
  "Parque Nacional Los Alerces":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Lago_Men%C3%A9ndez%2C_Parque_Nacional_Los_Alerces.jpg/640px-Lago_Men%C3%A9ndez%2C_Parque_Nacional_Los_Alerces.jpg",
  "Punta Tombo (reserva de pingüinos)":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Punta_Tombo_penguins.jpg/640px-Punta_Tombo_penguins.jpg",
  "Valle de Calamuchita (Villa General Belgrano y La Cumbrecita)":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Patiocolonialcordoba.jpg/640px-Patiocolonialcordoba.jpg",
  "Camino de las Altas Cumbres":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Camino_de_las_Altas_Cumbres.jpg/640px-Camino_de_las_Altas_Cumbres.jpg",
  "Parque Nacional Quebrada del Condorito":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Quebrada_del_Condorito.jpg/640px-Quebrada_del_Condorito.jpg",
  "Esteros del Iberá":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flying_Over_Esteros_del_Iber%C3%A1_The_kingdom_of_water%2C_North-eastern_Argentina.jpg/640px-Flying_Over_Esteros_del_Iber%C3%A1_The_kingdom_of_water%2C_North-eastern_Argentina.jpg",
  "Costanera y casco histórico de la ciudad de Corrientes":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Parana_atardecer.JPG/640px-Parana_atardecer.JPG",
  "Parque Nacional Mburucuyá":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flying_Over_Esteros_del_Iber%C3%A1_The_kingdom_of_water%2C_North-eastern_Argentina.jpg/640px-Flying_Over_Esteros_del_Iber%C3%A1_The_kingdom_of_water%2C_North-eastern_Argentina.jpg",
  "Parque Nacional El Palmar":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Parque_Nacional_El_Palmar.jpg/640px-Parque_Nacional_El_Palmar.jpg",
  "Termas de Federación":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Piletones_-_Palacio_San_Jos%C3%A9_-_Concepci%C3%B3n_del_Uruguay_-_Entre_R%C3%ADos.jpg/640px-Piletones_-_Palacio_San_Jos%C3%A9_-_Concepci%C3%B3n_del_Uruguay_-_Entre_R%C3%ADos.jpg",
  "Palacio San José (Concepción del Uruguay)":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Piletones_-_Palacio_San_Jos%C3%A9_-_Concepci%C3%B3n_del_Uruguay_-_Entre_R%C3%ADos.jpg/640px-Piletones_-_Palacio_San_Jos%C3%A9_-_Concepci%C3%B3n_del_Uruguay_-_Entre_R%C3%ADos.jpg",
  "Bañado La Estrella":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flying_Over_Esteros_del_Iber%C3%A1_The_kingdom_of_water%2C_North-eastern_Argentina.jpg/640px-Flying_Over_Esteros_del_Iber%C3%A1_The_kingdom_of_water%2C_North-eastern_Argentina.jpg",
  "Parque Nacional Río Pilcomayo":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Chaco_Boreal_Paraguay.jpg/640px-Chaco_Boreal_Paraguay.jpg",
  "Reserva de biosfera Laguna Oca (ciudad de Formosa)":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Chaco_Boreal_Paraguay.jpg/640px-Chaco_Boreal_Paraguay.jpg",
  "Purmamarca y Cerro de los Siete Colores":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Purmamarca%2C_Jujuy%2C_Argentina_-_panoramio.jpg/640px-Purmamarca%2C_Jujuy%2C_Argentina_-_panoramio.jpg",
  "Quebrada de Humahuaca (Tilcara y Humahuaca)":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Quebrada_de_Humahuaca_%28Argentine%29.JPG/640px-Quebrada_de_Humahuaca_%28Argentine%29.JPG",
  "Salinas Grandes y Cuesta de Lipán":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Salinas_Grandes%2C_Jujuy%2C_Argentina.jpg/640px-Salinas_Grandes%2C_Jujuy%2C_Argentina.jpg",
  "Parque Nacional Lihué Calel":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Prosopis_caldenia.jpg/640px-Prosopis_caldenia.jpg",
  "Reserva Provincial Parque Luro":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Prosopis_caldenia.jpg/640px-Prosopis_caldenia.jpg",
  "Laguna de Utracán y área de Guatraché":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Prosopis_caldenia.jpg/640px-Prosopis_caldenia.jpg",
  "Parque Nacional Talampaya":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Talampaya_National_Park_-_54491616809.jpg/640px-Talampaya_National_Park_-_54491616809.jpg",
  "Cuesta de Miranda":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Talampaya_National_Park_-_54491616809.jpg/640px-Talampaya_National_Park_-_54491616809.jpg",
  "Parque Nacional Laguna Brava":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Talampaya_National_Park_-_54491616809.jpg/640px-Talampaya_National_Park_-_54491616809.jpg",
  "Parque Provincial Aconcagua":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Aconcagua.jpg/640px-Aconcagua.jpg",
  "Ruta del Vino en Luján de Cuyo y Valle de Uco":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Juramento_de_la_bandera_del_Ej%C3%A9rcito_de_los_Andes.jpg/640px-Juramento_de_la_bandera_del_Ej%C3%A9rcito_de_los_Andes.jpg",
  "Puente del Inca y Parque Provincial Cañón del Atuel":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Puente_del_Inca_2014.jpg/640px-Puente_del_Inca_2014.jpg",
  "Cataratas del Iguazú":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Iguazu_Cataratas.jpg/640px-Iguazu_Cataratas.jpg",
  "Ruinas Jesuíticas de San Ignacio Miní":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/San_Ignacio_Min%C3%AD_mission_ruins.jpg/640px-San_Ignacio_Min%C3%AD_mission_ruins.jpg",
  "Saltos del Moconá":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/San_Ignacio_Min%C3%AD_mission_ruins.jpg/640px-San_Ignacio_Min%C3%AD_mission_ruins.jpg",
  "Villa La Angostura y Parque Nacional Nahuel Huapi":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Villa_La_Angostura_-_panoramio.jpg/640px-Villa_La_Angostura_-_panoramio.jpg",
  "San Martín de los Andes y Ruta de los Siete Lagos":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/San_Martin_de_los_Andes.jpg/640px-San_Martin_de_los_Andes.jpg",
  "Volcán Lanín y Parque Nacional Lanín":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Lanin_volcano.jpg/640px-Lanin_volcano.jpg",
  "Bariloche y Circuito Chico":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/San_Carlos_de_Bariloche_-_panoramio.jpg/640px-San_Carlos_de_Bariloche_-_panoramio.jpg",
  "El Bolsón y Lago Puelo (comarca andina)":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/El_Bolson%2C_Rio_Negro%2C_Argentina_-_panoramio.jpg/640px-El_Bolson%2C_Rio_Negro%2C_Argentina_-_panoramio.jpg",
  "Las Grutas y costa del Golfo San Matías":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Chubut-Argentina.jpg/640px-Chubut-Argentina.jpg",
  "Tren a las Nubes (San Antonio de los Cobres)":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tren_a_las_Nubes.jpg/640px-Tren_a_las_Nubes.jpg",
  "Cafayate y Quebrada de las Conchas":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cafayate%2C_Salta%2C_Argentina_-_panoramio.jpg/640px-Cafayate%2C_Salta%2C_Argentina_-_panoramio.jpg",
  "Cachi y Parque Nacional Los Cardones":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/AR378-Quebrada_de_Humahuaca.jpg/640px-AR378-Quebrada_de_Humahuaca.jpg",
  "Parque Provincial Ischigualasto (Valle de la Luna)":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/A_-_Valle_de_la_Luna%2C_el_hongo%2C_San_Juan%2C_Argentina.jpg/640px-A_-_Valle_de_la_Luna%2C_el_hongo%2C_San_Juan%2C_Argentina.jpg",
  "Dique Cuesta del Viento (Rodeo)":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/A_-_Valle_de_la_Luna%2C_el_hongo%2C_San_Juan%2C_Argentina.jpg/640px-A_-_Valle_de_la_Luna%2C_el_hongo%2C_San_Juan%2C_Argentina.jpg",
  "Parque Nacional El Leoncito (Barreal)":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/A_-_Valle_de_la_Luna%2C_el_hongo%2C_San_Juan%2C_Argentina.jpg/640px-A_-_Valle_de_la_Luna%2C_el_hongo%2C_San_Juan%2C_Argentina.jpg",
  "Parque Nacional Sierra de las Quijadas":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Talampaya_National_Park_-_54491616809.jpg/640px-Talampaya_National_Park_-_54491616809.jpg",
  "Potrero de los Funes":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Talampaya_National_Park_-_54491616809.jpg/640px-Talampaya_National_Park_-_54491616809.jpg",
  "Merlo y Reserva Florofaunística de Rincón del Este":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Talampaya_National_Park_-_54491616809.jpg/640px-Talampaya_National_Park_-_54491616809.jpg",
  "Glaciar Perito Moreno (Parque Nacional Los Glaciares)":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Perito_Moreno_Glacier_Patagonia_Argentina_Luca_Galuzzi_2005.JPG/640px-Perito_Moreno_Glacier_Patagonia_Argentina_Luca_Galuzzi_2005.JPG",
  "El Chaltén y senderos del Fitz Roy":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Fitz_Roy_Panorama.jpg/640px-Fitz_Roy_Panorama.jpg",
  "Cueva de las Manos (río Pinturas)":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/SantaCruz-CuevaManos-P2210651b.jpg/640px-SantaCruz-CuevaManos-P2210651b.jpg",
  "Monumento Nacional a la Bandera (Rosario)":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Monumento_a_la_Bandera_%28Rosario%29%2C_donde_Belgrano_iz%C3%B3_la_bandera_argentina_por_primera_vez_%28Rosario%29.jpg/640px-Monumento_a_la_Bandera_%28Rosario%29%2C_donde_Belgrano_iz%C3%B3_la_bandera_argentina_por_primera_vez_%28Rosario%29.jpg",
  "Parque de la Independencia (Rosario)":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Monumento_a_la_Bandera_%28Rosario%29%2C_donde_Belgrano_iz%C3%B3_la_bandera_argentina_por_primera_vez_%28Rosario%29.jpg/640px-Monumento_a_la_Bandera_%28Rosario%29%2C_donde_Belgrano_iz%C3%B3_la_bandera_argentina_por_primera_vez_%28Rosario%29.jpg",
  "Puente Colgante y Costanera de Santa Fe capital":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Parana_atardecer.JPG/640px-Parana_atardecer.JPG",
  "Termas de Río Hondo":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Parana_atardecer.JPG/640px-Parana_atardecer.JPG",
  "Dique Frontal de Río Hondo":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Parana_atardecer.JPG/640px-Parana_atardecer.JPG",
  "Parque Nacional Copo":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Chaco_Boreal_Paraguay.jpg/640px-Chaco_Boreal_Paraguay.jpg",
  "Parque Nacional Tierra del Fuego":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ushuaia_aerial_panorama.jpg/640px-Ushuaia_aerial_panorama.jpg",
  "Canal Beagle y Faro Les Eclaireurs":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ushuaia_aerial_panorama.jpg/640px-Ushuaia_aerial_panorama.jpg",
  "Tren del Fin del Mundo (Ushuaia)":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tren_del_Fin_del_Mundo.jpg/640px-Tren_del_Fin_del_Mundo.jpg",
  "Casa Histórica de la Independencia (San Miguel de Tucumán)":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Reforma_Universitaria.jpg/640px-Reforma_Universitaria.jpg",
  "Tafí del Valle y Dique La Angostura":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/AR378-Quebrada_de_Humahuaca.jpg/640px-AR378-Quebrada_de_Humahuaca.jpg",
  "Ruinas de Quilmes":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/AR378-Quebrada_de_Humahuaca.jpg/640px-AR378-Quebrada_de_Humahuaca.jpg",
  "Caminito y barrio de La Boca":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Caminito%2C_Buenos_Aires.jpg/640px-Caminito%2C_Buenos_Aires.jpg",
  "Plaza de Mayo y Catedral Metropolitana":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Cnel_Suar%C3%A9z%2C_Buenos_Aires%2C_Argentina_-_panoramio_%283%29.jpg/640px-Cnel_Suar%C3%A9z%2C_Buenos_Aires%2C_Argentina_-_panoramio_%283%29.jpg",
  "Teatro Colón y Recoleta":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Teatro_Colon_exterior.jpg/640px-Teatro_Colon_exterior.jpg",
  "Puerto Argentino/Stanley y su frente costero":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Batalla_de_la_Vuelta_de_Obligado.jpg/640px-Batalla_de_la_Vuelta_de_Obligado.jpg",
  "Cementerio de Darwin":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Batalla_de_la_Vuelta_de_Obligado.jpg/640px-Batalla_de_la_Vuelta_de_Obligado.jpg",
  "Voluntario Hill / Monte Longdon (sitios históricos)":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Batalla_de_la_Vuelta_de_Obligado.jpg/640px-Batalla_de_la_Vuelta_de_Obligado.jpg",
};

const defaults = readFileSync("src/data/provinces/content/tourism.defaults.ts", "utf8");
const names = [...defaults.matchAll(/name: "([^"]+)"/g)].map((m) => m[1]);
const missing = names.filter((n) => !TOURISM_IMAGES[n]);
if (missing.length) {
  console.warn("Missing images for:", missing);
}

let out = "/** Imágenes de destinos turísticos (Wikimedia Commons, uso educativo). */\n";
out += "export const TOURISM_IMAGE_URLS: Record<string, string> = {\n";
for (const [name, url] of Object.entries(TOURISM_IMAGES)) {
  out += `  ${JSON.stringify(name)}:\n    ${JSON.stringify(url)},\n`;
}
out += "};\n";

writeFileSync("src/data/provinces/content/tourism-images.ts", out);
console.log("OK: tourism-images.ts", Object.keys(TOURISM_IMAGES).length, "entries");
