/**
 * Regenera descripciones en tourism.defaults.ts (mantiene nombres e imágenes).
 * Uso: node scripts/generate-tourism-defaults.mjs
 */

import { readFileSync, writeFileSync } from "node:fs";

import { DEFAULT_TOURISM_BY_PROVINCE } from "../src/data/provinces/content/tourism.defaults.ts";

const DESCRIPTIONS = {
  "Mar del Plata y Costa Atlántica":
    "Playas, paseo costero y una de las ciudades balnearias más visitadas del país.",
  "Sierra de la Ventana (Parque Provincial Ernesto Tornquist)":
    "Sierras, senderos y el Cerro Tres Picos en un parque de formaciones rocosas únicas.",
  "Delta del Paraná en Tigre":
    "Islas, arroyos y paseos en lancha por el delta del Paraná, a pocos kilómetros de la capital.",
};

function descriptionFor(name) {
  if (DESCRIPTIONS[name]) return DESCRIPTIONS[name];
  const base = name.split("(")[0].trim();
  return `Lugar emblemático para conocer la provincia: ${base}. Ideal para recorrer con tiempo y cámara.`;
}

let out = `import type { ProvinceContentItem, ProvinceSlug } from "@/types/province";

/** Destinos turísticos base por provincia. Imágenes en \`tourism-images.ts\`. */
export const DEFAULT_TOURISM_BY_PROVINCE: Record<
  ProvinceSlug,
  ProvinceContentItem[]
> = {\n`;

for (const [slug, places] of Object.entries(DEFAULT_TOURISM_BY_PROVINCE)) {
  out += `  "${slug}": [\n`;
  for (const place of places) {
    const name = place.name;
    const desc = descriptionFor(name).replace(/"/g, '\\"');
    out += `    {\n      name: ${JSON.stringify(name)},\n      image: "",\n      description: ${JSON.stringify(desc)},\n    },\n`;
  }
  out += `  ],\n`;
}
out += `};\n`;

writeFileSync("src/data/provinces/content/tourism.defaults.ts", out);
console.log("OK: tourism.defaults.ts");
