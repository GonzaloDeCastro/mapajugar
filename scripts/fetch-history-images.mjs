/** Busca imágenes en Wikipedia (es) para hechos históricos. */

const WIKI_SEARCH = new Map([
  ["La Vuelta de Obligado y la soberanía", "Batalla de la Vuelta de Obligado"],
  ["Un territorio de frontera histórica", "Provincia de Buenos Aires"],
  ["Fiambalá y la ruta andina", "Fiambalá"],
  ["Valle y devoción mariana", "Virgen del Valle (Catamarca)"],
  ["Resistencia, museo a cielo abierto", "Resistencia (Chaco)"],
  ["El monte chaqueño, clave histórica", "Gran Chaco"],
  ["Colonización galesa en el valle", "Gaiman"],
  ["Patagonia de dos mundos", "Provincia del Chubut"],
  ["Universidad histórica", "Universidad Nacional de Córdoba"],
  ["La Reforma Universitaria de 1918", "Reforma Universitaria (Argentina)"],
  ["Herencia guaraní viva", "Guaraníes"],
  ["Iberá y la recuperación de fauna", "Esteros del Iberá"],
  ["Capital de la Confederación", "Paraná (Entre Ríos)"],
  ["Palacio San José y Urquiza", "Palacio San José"],
  ["Ríos y pueblos originarios", "Provincia de Formosa"],
  ["Bañado La Estrella", "Bañado La Estrella"],
  ["Quebrada de Humahuaca milenaria", "Quebrada de Humahuaca"],
  ["Belgrano y la Bandera en Jujuy", "Bandera de Argentina"],
  ["El caldén, árbol emblema", "Caldén"],
  ["Cruce de rutas históricas", "Provincia de La Pampa"],
  ["Tierra de caudillos federales", "Facundo Quiroga"],
  ["Talampaya y el tiempo profundo", "Parque nacional Talampaya"],
  ["Cuna del Ejército de los Andes", "Ejército de los Andes"],
  ["Oasis construidos por acequias", "Acequia"],
  ["Las Misiones Jesuíticas", "Misiones jesuíticas de la Selva Paranaense"],
  ["La selva y la yerba mate", "Yerba mate"],
  ["Territorio mapuche y cordillerano", "Pueblo mapuche"],
  ["Vaca Muerta y energía", "Formación Vaca Muerta"],
  ["Alto Valle frutícola", "Alto Valle del Río Negro"],
  ["Costa atlántica y paleontología", "Provincia de Río Negro"],
  ["Güemes y la guerra de independencia", "Martín Miguel de Güemes"],
  ["Un mosaico de paisajes", "Provincia de Salta"],
  ["Sarmiento y la educación", "Domingo Faustino Sarmiento"],
  ["Ischigualasto y fósiles únicos", "Parque provincial Ischigualasto"],
  ["Posta de caminos interiores", "Provincia de San Luis"],
  ["Paisaje de sierras y salinas", "Sierras de San Luis"],
  ["Hielos continentales", "Campo de Hielo Patagónico Sur"],
  ["Cueva de las Manos", "Cueva de las Manos"],
  ["Cuna de la Bandera", "Monumento Nacional a la Bandera"],
  ["Puerto, ríos e inmigración", "Provincia de Santa Fe"],
  ["Madre de ciudades", "Santiago del Estero"],
  ["Quichua santiagueño", "Quichua santiagueño"],
  ["Fin del mundo habitado", "Ushuaia"],
  ["Historia selk'nam y yámana", "Selk'nam"],
  ["La Casa de la Independencia", "Casa de Tucumán"],
  ["Industria azucarera", "Azúcar en Argentina"],
  ["Plaza de Mayo y vida política", "Plaza de Mayo"],
  ["Puerto e inmigración masiva", "Inmigración en Argentina"],
  ["Atlántico Sur estratégico", "Islas Malvinas"],
  ["Memoria de 1982", "Guerra de las Malvinas"],
]);

async function fetchWikiImage(title) {
  const url = `https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  const res = await fetch(url, {
    headers: { "user-agent": "MapaJugar/1.0" },
  });
  if (!res.ok) return null;
  const data = await res.json();
  const thumb = data?.thumbnail?.source;
  if (!thumb) return null;
  return thumb.replace(/\/\d+px-/, "/640px-");
}

const results = {};
for (const [name, title] of WIKI_SEARCH) {
  const image = await fetchWikiImage(title);
  results[name] = image ?? "";
  console.log(image ? "OK " : "MISS", name);
  await new Promise((r) => setTimeout(r, 150));
}

console.log("\n" + JSON.stringify(results, null, 2));
