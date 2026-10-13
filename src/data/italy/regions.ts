import type { ItalyRegion, ItalyRegionSlug } from "@/types/region";

import { ITALY_REGION_BY_SLUG, ITALY_REGIONS } from "./regions.generated";

const SLUGS = new Set<string>(ITALY_REGIONS.map((region) => region.slug));

export function isItalyRegionSlug(slug: string): slug is ItalyRegionSlug {
  return SLUGS.has(slug);
}

export function listItalyRegions(): ItalyRegion[] {
  return ITALY_REGIONS;
}

export function getItalyRegionBySlug(slug: string): ItalyRegion | undefined {
  return ITALY_REGION_BY_SLUG[slug];
}
