/**
 * Carga un export nombrado desde un .ts sin transpilar (solo datos planos).
 */
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..", "..");

export async function loadTsNamedExport(relativePath, exportName) {
  const absPath = resolve(root, relativePath);
  const src = readFileSync(absPath, "utf8")
    .replace(/^import type .*$/gm, "")
    .replace(/export const (\w+):\s*[\s\S]*?=\s*/, "export const $1 = ");

  const dir = mkdtempSync(join(tmpdir(), "mapajugar-ts-"));
  const modPath = join(dir, "module.mjs");

  try {
    writeFileSync(modPath, src, "utf8");
    const mod = await import(pathToFileURL(modPath).href);
    if (!(exportName in mod)) {
      throw new Error(`Export "${exportName}" no encontrado en ${relativePath}`);
    }
    return mod[exportName];
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}
