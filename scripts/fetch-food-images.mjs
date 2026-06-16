/**
 * Busca imágenes en Wikipedia (es) para comidas típicas.
 * Uso: node scripts/fetch-food-images.mjs
 */

const WIKI_SEARCH = new Map([
  ["Asado bonaerense", "Asado"],
  ["Milanesa a la napolitana", "Milanesa a la napolitana"],
  ["Dulce de leche", "Dulce de leche"],
  ["Empanadas catamarqueñas", "Empanada"],
  ["Locro del noroeste", "Locro"],
  ["Tamales", "Tamal"],
  ["Chipá", "Chipa"],
  ["Pacú a la parrilla", "Pacú (pez)"],
  ["Mandioca hervida", "Mandioca"],
  ["Cordero patagónico", "Cordero"],
  ["Torta galesa", "Torta galesa"],
  ["Trucha de río", "Trucha arcoíris"],
  ["Cabrito serrano", "Cabrito"],
  ["Choripán cordobés", "Choripán"],
  ["Alfajor cordobés", "Alfajor"],
  ["Mbaipy", "Mazamorra"],
  ["Sopa correntina", "Sopa paraguaya"],
  ["Dorado a la parrilla", "Dorado (pez)"],
  ["Pescados del Paraná y el Uruguay", "Surubí"],
  ["Empanadas de pescado", "Empanada"],
  ["Asado con cuero", "Asado"],
  ["Sopa paraguaya", "Sopa paraguaya"],
  ["Pacú al horno", "Pacú (pez)"],
  ["Chipá cuerito", "Chipa"],
  ["Humita en chala", "Humita"],
  ["Tamales jujeños", "Tamal"],
  ["Calapurca", "Calapurca"],
  ["Asado criollo pampeano", "Asado"],
  ["Chivito al asador", "Cabrito"],
  ["Torta frita", "Torta frita"],
  ["Chanfaina riojana", "Chanfaina"],
  ["Empanadas riojanas", "Empanada"],
  ["Locro riojano", "Locro"],
  ["Tortitas mendocinas", "Tortita frita"],
  ["Chivo a la llama", "Cabrito"],
  ["Empanadas mendocinas", "Empanada"],
  ["Reviro", "Reviro"],
  ["Chipá misionero", "Chipa"],
  ["Mbejú", "Mbeju"],
  ["Chivito neuquino", "Cabrito"],
  ["Trucha patagónica", "Trucha arcoíris"],
  ["Torta frita patagónica", "Torta frita"],
  ["Cordero al asador", "Cordero"],
  ["Frutas del valle", "Manzana"],
  ["Empanadas salteñas", "Empanada salteña"],
  ["Tamales salteños", "Tamal"],
  ["Humita", "Humita"],
  ["Punta de espalda", "Asado"],
  ["Tomaticán", "Tomaticán"],
  ["Sopaipillas", "Sopaipilla"],
  ["Chivito puntano", "Cabrito"],
  ["Empanadas puntanas", "Empanada"],
  ["Carbonada", "Carbonada"],
  ["Cazuela de mariscos", "Cazuela de mariscos"],
  ["Cordero santacruceño", "Cordero"],
  ["Centolla patagónica", "Centolla"],
  ["Dorado a la parrilla", "Dorado (pez)"],
  ["Surubí al horno", "Surubí"],
  ["Empanada santafesina", "Empanada"],
  ["Locro santiagueño", "Locro"],
  ["Empanadas santiagueñas", "Empanada"],
  ["Rosquete santiagueño", "Rosca de Pascua"],
  ["Centolla fueguina", "Centolla"],
  ["Merluza negra", "Merluza negra"],
  ["Cordero fueguino", "Cordero"],
  ["Sánguche de milanesa", "Sándwich de milanesa"],
  ["Empanadas tucumanas", "Empanada tucumana"],
  ["Humita tucumana", "Humita"],
  ["Pizza porteña", "Pizza argentina"],
  ["Fugazzeta rellena", "Fugazzeta"],
  ["Helado artesanal", "Helado"],
  ["Pescado frito con papas", "Fish and chips"],
  ["Merluza y mariscos locales", "Merluza (pez)"],
  ["Cordero isleño", "Cordero"],
]);

async function fetchWikiImage(title) {
  const url = `https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  const res = await fetch(url, {
    headers: { "user-agent": "MapaJugar/1.0 (educational; github.com/GonzaloDeCastro/mapajugar)" },
  });
  if (!res.ok) return null;
  const data = await res.json();
  const thumb = data?.thumbnail?.source;
  if (!thumb) return null;
  return thumb.replace(/\/\d+px-/, "/640px-");
}

async function fetchCommonsImage(query) {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: query,
    gsrnamespace: "6",
    prop: "imageinfo",
    iiprop: "url",
    iiurlwidth: "640",
    format: "json",
    origin: "*",
  });
  const res = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`);
  if (!res.ok) return null;
  const data = await res.json();
  const pages = data?.query?.pages;
  if (!pages) return null;
  const first = Object.values(pages)[0];
  const info = first?.imageinfo?.[0];
  return info?.thumburl || info?.url || null;
}

async function resolveImage(foodName) {
  const wikiTitle = WIKI_SEARCH.get(foodName) ?? foodName;
  let image = await fetchWikiImage(wikiTitle);
  if (!image) {
    image = await fetchCommonsImage(`${foodName} comida argentina`);
  }
  if (!image && wikiTitle !== foodName) {
    image = await fetchCommonsImage(`${wikiTitle} argentina`);
  }
  return image;
}

const foods = [...WIKI_SEARCH.keys()];
const results = {};

for (const name of foods) {
  try {
    const image = await resolveImage(name);
    results[name] = image ?? "";
    console.log(`${image ? "OK" : "MISS"}  ${name}`);
    if (image) console.log(`      ${image}`);
  } catch (err) {
    results[name] = "";
    console.log(`ERR   ${name}: ${err.message}`);
  }
  await new Promise((r) => setTimeout(r, 120));
}

console.log("\n--- JSON ---\n");
console.log(JSON.stringify(results, null, 2));
