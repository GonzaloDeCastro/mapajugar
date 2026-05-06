/**
 * Lee src/data/map/Islas-Malvinas.svg y genera src/data/map/malvinas-path.generated.ts
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const svgPath = path.join(root, "src/data/map/Islas-Malvinas.svg");
const outPath = path.join(root, "src/data/map/malvinas-path.generated.ts");

const svg = fs.readFileSync(svgPath, "utf8");
const vbMatch = svg.match(/viewBox="([^"]+)"/i);
const viewBox = vbMatch?.[1]?.trim() ?? "0 0 2598.7 1574.5";

const dMatch = svg.match(/\sd="([^"]+)"/);
const d = dMatch?.[1];
if (!d) {
  console.error("No se encontró atributo d en un <path> del SVG de Malvinas.");
  process.exit(1);
}

const tm = svg.match(/transform="([^"]+)"/);
const groupTransform = tm?.[1]?.trim() ?? "translate(0 0)";

const lines = [
  "/**",
  " * Generado por scripts/extract-malvinas-path.mjs — no editar a mano.",
  " * Fuente: src/data/map/Islas-Malvinas.svg",
  " */",
  "",
  `export const MALVINAS_MAP_VIEW_BOX = ${JSON.stringify(viewBox)} as const;`,
  `export const MALVINAS_GROUP_TRANSFORM = ${JSON.stringify(groupTransform)} as const;`,
  `export const MALVINAS_PATH_D = ${JSON.stringify(d)} as const;`,
  "",
];

fs.writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(`OK: ${outPath} (viewBox ${viewBox}, d length ${d.length})`);
