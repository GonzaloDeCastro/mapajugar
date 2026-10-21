/**
 * Lee public/inputs/assets/sicilia.svg (Vonvikken, dominio público,
 * Wikimedia Commons: Map of region of Sicily, Italy.svg)
 * y genera src/data/map/sicily-paths.generated.ts
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const svgPath = path.join(root, "public/inputs/assets/sicilia.svg");
const outPath = path.join(root, "src/data/map/sicily-paths.generated.ts");

/** Capas del SVG → slugs. Identificadas por la provincia resaltada en los mapas hermanos. */
const LAYER_TO_SLUG = {
  layer9: "agrigento",
  layer6: "caltanissetta",
  layer4: "catania",
  layer5: "enna",
  layer2: "messina",
  layer3: "palermo",
  layer7: "ragusa",
  layer8: "siracusa",
  layer10: "trapani",
};

const svg = fs.readFileSync(svgPath, "utf8");
const width = svg.match(/\bwidth="([^"]+)"/)?.[1];
const height = svg.match(/\bheight="([^"]+)"/)?.[1];
if (!width || !height) {
  console.error("El SVG no tiene width/height");
  process.exit(1);
}
const viewBox = `0 0 ${width} ${height}`;

function bakeTranslate(d, tx, ty) {
  return d.replace(
    /^m\s+([-+0-9.eE]+)\s*,?\s*([-+0-9.eE]+)/,
    (_, x, y) => `m ${parseFloat(x) + tx},${parseFloat(y) + ty}`,
  );
}

const re =
  /<g\s+transform="translate\(([^,]+),([^)]+)\)"\s+id="(layer\d+)"[\s\S]*?<path\s+d="([^"]+)"/g;
const bySlug = new Map();
let m;
while ((m = re.exec(svg)) !== null) {
  const slug = LAYER_TO_SLUG[m[3]];
  if (!slug) continue;
  const d = bakeTranslate(m[4], parseFloat(m[1]), parseFloat(m[2]));
  if (bySlug.has(slug)) {
    console.warn(`Slug duplicado: ${slug}`);
  }
  bySlug.set(slug, d);
}

const required = Object.values(LAYER_TO_SLUG);
const missing = required.filter((slug) => !bySlug.has(slug));
if (missing.length) {
  console.error("Faltan paths para:", missing.join(", "));
  process.exit(1);
}

const lines = [
  "/**",
  " * Generado por scripts/extract-sicily-map.mjs — no editar a mano.",
  " * Fuente: public/inputs/assets/sicilia.svg",
  " * Vonvikken, dominio público, Wikimedia Commons (Map of region of Sicily, Italy.svg).",
  " */",
  "",
  'import type { SicilyProvinceSlug } from "@/types/sicily";',
  "",
  `export const SICILY_MAP_VIEW_BOX = ${JSON.stringify(viewBox)} as const;`,
  "",
  "export const SICILY_PROVINCE_SVG_PATHS: Record<SicilyProvinceSlug, string> = {",
];

for (const slug of [...required].sort()) {
  lines.push(`  ${JSON.stringify(slug)}: ${JSON.stringify(bySlug.get(slug))},`);
}
lines.push("};", "");

fs.writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(`OK: ${outPath} (${bySlug.size} province, viewBox ${viewBox})`);
