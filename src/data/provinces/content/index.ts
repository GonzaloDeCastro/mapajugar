import { promises as fs } from "node:fs";
import path from "node:path";
import { cache } from "react";

import type {
  ProvinceContentItem,
  ProvinceLocalContent,
  ProvinceSlug,
} from "@/types/province";
import { withBasePath } from "@/lib/routing/base-path";
import { getCanonicalAnimalDescription } from "./animal-descriptions";
import { DEFAULT_ANIMALS_BY_PROVINCE } from "./animals.defaults";
import { DEFAULT_CURIOSITIES_BY_PROVINCE } from "./curiosities.defaults";
import { DEFAULT_FOODS_BY_PROVINCE } from "./foods.defaults";
import { FOOD_IMAGE_URLS } from "./food-images";
import { HISTORY_IMAGE_URLS } from "./history-images";
import { PLANT_IMAGE_URLS } from "./plant-images";
import { DEFAULT_PLANTS_BY_PROVINCE } from "./plants.defaults";

const CONTENT_DIR = path.join(process.cwd(), "src", "data", "provinces", "content");

function withAssetPath(image: string): string {
  const trimmed = image.trim();
  if (!trimmed) return image;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return withBasePath(trimmed);
}

function resolveItemImage(
  item: ProvinceContentItem,
  fallbackUrls?: Record<string, string>,
): string {
  const raw = item.image.trim() || fallbackUrls?.[item.name]?.trim() || "";
  if (!raw) return "";
  return withAssetPath(raw);
}

function mapItems(
  items: ProvinceContentItem[],
  fallbackUrls?: Record<string, string>,
): ProvinceContentItem[] {
  return items.map((item) => ({
    ...item,
    image: resolveItemImage(item, fallbackUrls),
  }));
}

function applyCanonicalAnimalDescriptions(
  items: ProvinceContentItem[],
): ProvinceContentItem[] {
  return items.map((item) => {
    const canon = getCanonicalAnimalDescription(item.name);
    return canon ? { ...item, description: canon } : item;
  });
}

function emptyContent(slug: ProvinceSlug): ProvinceLocalContent {
  return {
    slug,
    name: slug,
    animals: mapItems(
      applyCanonicalAnimalDescriptions(
        DEFAULT_ANIMALS_BY_PROVINCE[slug] ?? [],
      ),
    ),
    plants: mapItems(DEFAULT_PLANTS_BY_PROVINCE[slug] ?? [], PLANT_IMAGE_URLS),
    foods: mapItems(DEFAULT_FOODS_BY_PROVINCE[slug] ?? [], FOOD_IMAGE_URLS),
    curiosities: mapItems(
      DEFAULT_CURIOSITIES_BY_PROVINCE[slug] ?? [],
      HISTORY_IMAGE_URLS,
    ),
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

function mergeItems(
  defaults: ProvinceContentItem[],
  custom: ProvinceContentItem[],
) {
  const seen = new Set<string>();
  const merged: ProvinceContentItem[] = [];
  for (const item of [...custom, ...defaults]) {
    const key = item.name.trim().toLowerCase();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    merged.push(item);
  }
  return merged;
}

function normalizeContent(
  raw: unknown,
  slug: ProvinceSlug,
): ProvinceLocalContent {
  if (!raw || typeof raw !== "object") return emptyContent(slug);
  const r = raw as Record<string, unknown>;
  const arr = (v: unknown) =>
    Array.isArray(v) ? v.map(normalizeItem).filter(Boolean) : [];
  const animals = arr(r.animals) as ProvinceContentItem[];
  const plants = arr(r.plants) as ProvinceContentItem[];
  const foods = arr(r.foods) as ProvinceContentItem[];
  const curiosities = arr(r.curiosities) as ProvinceContentItem[];
  return {
    slug,
    name: typeof r.name === "string" ? r.name : slug,
    animals: mapItems(
      applyCanonicalAnimalDescriptions(
        mergeItems(DEFAULT_ANIMALS_BY_PROVINCE[slug] ?? [], animals),
      ),
    ),
    plants: mapItems(
      mergeItems(DEFAULT_PLANTS_BY_PROVINCE[slug] ?? [], plants),
      PLANT_IMAGE_URLS,
    ),
    foods: mapItems(
      mergeItems(DEFAULT_FOODS_BY_PROVINCE[slug] ?? [], foods),
      FOOD_IMAGE_URLS,
    ),
    curiosities: mapItems(
      mergeItems(DEFAULT_CURIOSITIES_BY_PROVINCE[slug] ?? [], curiosities),
      HISTORY_IMAGE_URLS,
    ),
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

