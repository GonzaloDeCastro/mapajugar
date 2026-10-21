import type { SicilyProvince, SicilyProvinceSlug } from "@/types/sicily";

import {
  SICILY_PROVINCE_BY_SLUG,
  SICILY_PROVINCES,
} from "./provinces.generated";

const SLUGS = new Set<string>(SICILY_PROVINCES.map((province) => province.slug));

export function isSicilyProvinceSlug(slug: string): slug is SicilyProvinceSlug {
  return SLUGS.has(slug);
}

export function listSicilyProvinces(): SicilyProvince[] {
  return SICILY_PROVINCES;
}

export function getSicilyProvinceBySlug(slug: string): SicilyProvince | undefined {
  return SICILY_PROVINCE_BY_SLUG[slug];
}
