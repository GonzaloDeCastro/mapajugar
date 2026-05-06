/**
 * Lee src/data/map/ar.svg (Simplemaps u otro SVG con <path id="ARX" d="...">)
 * y genera src/data/map/province-paths.generated.ts
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const svgPath = path.join(root, "src/data/map/ar.svg");
const outPath = path.join(root, "src/data/map/province-paths.generated.ts");

/** IDs del SVG → slugs del proyecto */
const ID_TO_SLUG = {
  ARE: "entre-rios",
  ARA: "salta",
  ARY: "jujuy",
  ARP: "formosa",
  ARN: "misiones",
  ARH: "chaco",
  ARW: "corrientes",
  ARK: "catamarca",
  ARF: "la-rioja",
  ARJ: "san-juan",
  ARM: "mendoza",
  ARQ: "neuquen",
  ARU: "chubut",
  ARR: "rio-negro",
  ARZ: "santa-cruz",
  ARV: "tierra-del-fuego",
  ARB: "buenos-aires",
  ARC: "ciudad-autonoma-buenos-aires",
  ARS: "santa-fe",
  ART: "tucuman",
  ARG: "santiago-del-estero",
  ARD: "san-luis",
  ARL: "la-pampa",
  ARX: "cordoba",
};

const svg = fs.readFileSync(svgPath, "utf8");
const vbMatch = svg.match(/viewbox="([^"]+)"/i);
const viewBox = vbMatch?.[1]?.trim() ?? "0 0 1000 1000";

const re = /<path\s+d="([^"]*)"\s+id="([A-Z]{2,3})"/gi;
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
  " * Generado por scripts/extract-map-paths.mjs — no editar a mano.",
  " * Fuente: src/data/map/ar.svg (respetar licencia/atribución del proveedor).",
  " */",
  "",
  'import type { ProvinceSlug } from "@/types/province";',
  "",
  "type MainlandProvinceSlug = Exclude<ProvinceSlug, \"islas-malvinas\">;",
  "",
  `export const MAP_VIEW_BOX = ${JSON.stringify(viewBox)} as const;`,
  "",
  "export const PROVINCE_SVG_PATHS: Record<MainlandProvinceSlug, string> = {",
];

for (const slug of [...required].sort()) {
  const d = bySlug.get(slug);
  lines.push(`  ${JSON.stringify(slug)}: ${JSON.stringify(d)},`);
}
lines.push("};", "");

fs.writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(`OK: ${outPath} (${bySlug.size} provincias, viewBox ${viewBox})`);
