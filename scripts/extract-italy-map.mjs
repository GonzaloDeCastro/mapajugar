/**
 * Lee public/inputs/assets/italia.svg (Simplemaps) y genera
 * src/data/map/italy-paths.generated.ts
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const svgPath = path.join(root, "public/inputs/assets/italia.svg");
const outPath = path.join(root, "src/data/map/italy-paths.generated.ts");

/** IDs del SVG → slugs del proyecto */
const ID_TO_SLUG = {
  IT23: "valle-d-aosta",
  IT21: "piemonte",
  IT42: "liguria",
  IT25: "lombardia",
  IT32: "trentino-alto-adige",
  IT34: "veneto",
  IT36: "friuli-venezia-giulia",
  IT45: "emilia-romagna",
  IT52: "toscana",
  IT55: "umbria",
  IT57: "marche",
  IT62: "lazio",
  IT65: "abruzzo",
  IT67: "molise",
  IT72: "campania",
  IT75: "puglia",
  IT77: "basilicata",
  IT78: "calabria",
  IT82: "sicilia",
  IT88: "sardegna",
};

const svg = fs.readFileSync(svgPath, "utf8");
const vbMatch = svg.match(/viewbox="([^"]+)"/i);
const viewBox = vbMatch?.[1]?.trim() ?? "0 0 1000 1000";

const re = /<path\s+d="([^"]*)"\s+id="(IT\d+)"/gi;
const bySlug = new Map();
let m;
while ((m = re.exec(svg)) !== null) {
  const d = m[1];
  const id = m[2];
  const slug = ID_TO_SLUG[id];
  if (!slug) {
    console.warn(`ID desconocido en SVG (ignorado): ${id}`);
    continue;
  }
  if (bySlug.has(slug)) {
    console.warn(`Slug duplicado para id ${id} → ${slug}`);
  }
  bySlug.set(slug, d);
}

const required = Object.values(ID_TO_SLUG);
const missing = required.filter((s) => !bySlug.has(s));
if (missing.length) {
  console.error("Faltan paths en el SVG para:", missing.join(", "));
  process.exit(1);
}

const lines = [
  "/**",
  " * Generado por scripts/extract-italy-map.mjs — no editar a mano.",
  " * Fuente: public/inputs/assets/italia.svg (Simplemaps; respetar licencia/atribución).",
  " */",
  "",
  'import type { ItalyRegionSlug } from "@/types/region";',
  "",
  `export const ITALY_MAP_VIEW_BOX = ${JSON.stringify(viewBox)} as const;`,
  "",
  "export const ITALY_REGION_SVG_PATHS: Record<ItalyRegionSlug, string> = {",
];

for (const slug of [...required].sort()) {
  const d = bySlug.get(slug);
  lines.push(`  ${JSON.stringify(slug)}: ${JSON.stringify(d)},`);
}
lines.push("};", "");

fs.writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(`OK: ${outPath} (${bySlug.size} regioni, viewBox ${viewBox})`);
