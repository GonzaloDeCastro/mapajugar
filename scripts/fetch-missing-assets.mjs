/**
 * Descarga imágenes faltantes de flora y fauna desde Wikimedia Commons.
 * Uso: node scripts/fetch-missing-assets.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";

const UA = "MapaJugar/1.0 (educational; github.com/GonzaloDeCastro/mapajugar)";

const ASSETS = [
  {
    name: "Lapacho negro",
    scientific: "Handroanthus impetiginosus",
    outDir: "public/images/plants",
    field: "plants",
  },
  {
    name: "Ajarilla",
    scientific: "Larrea divaricata",
    outDir: "public/images/plants",
    field: "plants",
  },
  {
    name: "Lenga fueguina",
    scientific: "Nothofagus pumilio",
    outDir: "public/images/plants",
    field: "plants",
  },
  {
    name: "Retamo",
    scientific: "Spartium junceum",
    outDir: "public/images/plants",
    field: "plants",
  },
  {
    name: "Pasto tussac",
    scientific: "Poa flabellata",
    outDir: "public/images/plants",
    field: "plants",
  },
  {
    name: "Festuca fueguina",
    scientific: "Festuca gracillima",
    outDir: "public/images/plants",
    field: "plants",
  },
  {
    name: "Matas almohadilladas",
    scientific: "Azorella selago",
    outDir: "public/images/plants",
    field: "plants",
  },
  {
    name: "Tala ribereño",
    scientific: "Celtis ehrenbergiana",
    outDir: "public/images/plants",
    field: "plants",
  },
  {
    name: "Tatú carreta",
    scientific: "Priodontes maximus",
    outDir: "public/images/animals",
    field: "animals",
    filename: "tatu-carreta.webp",
  },
  {
    name: "Lobito de río",
    scientific: "Lontra longicaudis",
    outDir: "public/images/animals",
    field: "animals",
    filename: "lobito-de-rio.webp",
  },
  {
    name: "Oso hormiguero",
    scientific: "Myrmecophaga tridactyla",
    outDir: "public/images/animals",
    field: "animals",
    filename: "oso-hormiguero.webp",
  },
  {
    name: "Pecarí de collar",
    scientific: "Pecari tajacu",
    outDir: "public/images/animals",
    field: "animals",
    filename: "pecari-de-collar.webp",
  },
  {
    name: "Tatú mulita",
    scientific: "Dasypus hybridus",
    outDir: "public/images/animals",
    field: "animals",
    filename: "tatu-mulita.webp",
  },
  {
    name: "Cauquén",
    scientific: "Chloephaga picta",
    outDir: "public/images/animals",
    field: "animals",
    filename: "cauquen.webp",
  },
  {
    name: "Benteveo",
    scientific: "Pitangus sulphuratus",
    outDir: "public/images/animals",
    field: "animals",
    filename: "benteveo.webp",
  },
  {
    name: "Albatros de ceja negra",
    scientific: "Thalassarche melanophris",
    outDir: "public/images/animals",
    field: "animals",
    filename: "albatros-ceja-negra.webp",
  },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchCommonsImage(query) {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: `filetype:bitmap ${query}`,
    gsrnamespace: "6",
    prop: "imageinfo",
    iiprop: "url|mime",
    iiurlwidth: "800",
    format: "json",
    origin: "*",
  });
  const res = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`, {
    headers: { "user-agent": UA },
  });
  if (!res.ok) return null;
  const text = await res.text();
  if (text.startsWith("You are")) return null;
  const data = JSON.parse(text);
  const pages = data?.query?.pages;
  if (!pages) return null;
  for (const page of Object.values(pages)) {
    const info = page?.imageinfo?.[0];
    if (info?.thumburl || info?.url) {
      return info.thumburl || info.url;
    }
  }
  return null;
}

async function fetchWikiEsImage(title) {
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

async function resolveImage(name, scientific) {
  let image = await fetchWikiEsImage(name);
  await sleep(400);
  if (!image) {
    image = await fetchCommonsImage(scientific);
    await sleep(400);
  }
  if (!image) {
    image = await fetchCommonsImage(name);
    await sleep(400);
  }
  return image;
}

function extFromUrl(url) {
  const match = url.match(/\.(jpe?g|png|webp)(?:\/|$)/i);
  return match ? `.${match[1].toLowerCase().replace("jpeg", "jpg")}` : ".jpg";
}

async function download(url, dest) {
  const res = await fetch(url, {
    headers: { "user-agent": UA, referer: "https://commons.wikimedia.org/" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.writeFile(dest, buf);
}

const results = {};

for (const asset of ASSETS) {
  const { name, scientific, outDir, filename } = asset;
  try {
    const url = await resolveImage(name, scientific);
    if (!url) {
      console.log(`MISS  ${name}`);
      results[name] = null;
      continue;
    }
    const outName = filename ?? `${name}.webp`;
    const dest = path.join(outDir, outName);
    const ext = path.extname(outName) || extFromUrl(url);
    const finalDest = path.extname(outName) ? dest : dest + extFromUrl(url);
    await download(url, finalDest);
    const webPath = `/${path.posix.join(outDir.replace(/^public\//, ""), path.basename(finalDest))}`;
    results[name] = webPath;
    console.log(`OK    ${name} -> ${webPath}`);
    console.log(`      ${url}`);
  } catch (err) {
    console.log(`ERR   ${name}: ${err.message}`);
    results[name] = null;
  }
  await sleep(500);
}

console.log("\n--- paths ---\n");
console.log(JSON.stringify(results, null, 2));
