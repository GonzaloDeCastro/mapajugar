import { promises as fs } from "node:fs";
import path from "node:path";
import { cache } from "react";

import type { ProvinceLocalContent, ProvinceSlug } from "@/types/province";

const CONTENT_DIR = path.join(process.cwd(), "src", "data", "provinces", "content");

function emptyContent(slug: ProvinceSlug): ProvinceLocalContent {
  return {
    slug,
    name: slug,
    animals: [],
    plants: [],
    foods: [],
  };
}

function normalizeItem(item: unknown) {
  if (!item || typeof item !== "object") return null;
  const i = item as Record<string, unknown>;
  const name = typeof i.name === "string" ? i.name : "";
  const image = typeof i.image === "string" ? i.image : "";
  const description = typeof i.description === "string" ? i.description : "";
  if (!name) return null;
  return { name, image, description };
}

function normalizeContent(
  raw: unknown,
  slug: ProvinceSlug,
): ProvinceLocalContent {
  if (!raw || typeof raw !== "object") return emptyContent(slug);
  const r = raw as Record<string, unknown>;
  const arr = (v: unknown) =>
    Array.isArray(v) ? v.map(normalizeItem).filter(Boolean) : [];
  return {
    slug,
    name: typeof r.name === "string" ? r.name : slug,
    animals: arr(r.animals),
    plants: arr(r.plants),
    foods: arr(r.foods),
  } as ProvinceLocalContent;
}

export const getProvinceLocalContent = cache(
  async (slug: ProvinceSlug): Promise<ProvinceLocalContent> => {
    const filepath = path.join(CONTENT_DIR, `${slug}.json`);
    try {
      const raw = await fs.readFile(filepath, "utf8");
      return normalizeContent(JSON.parse(raw), slug);
    } catch {
      return emptyContent(slug);
    }
  },
);

