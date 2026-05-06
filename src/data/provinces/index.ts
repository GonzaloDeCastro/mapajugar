import type { Province, ProvinceSlug } from "@/types/province";
import { PROVINCE_BY_SLUG, PROVINCES } from "./mock-provinces";

export function getAllProvinceSlugs(): ProvinceSlug[] {
  return PROVINCES.map((p) => p.slug);
}

export function getProvinceBySlug(slug: string): Province | undefined {
  return PROVINCE_BY_SLUG[slug as ProvinceSlug];
}

export function listProvinces(): Province[] {
  return PROVINCES;
}
