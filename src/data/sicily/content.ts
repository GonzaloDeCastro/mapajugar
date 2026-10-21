import type { SicilyProvinceContent, SicilyProvinceSlug } from "@/types/sicily";

import { SICILY_CONTENT } from "./content.generated";

export function getSicilyProvinceContent(
  slug: SicilyProvinceSlug,
): SicilyProvinceContent {
  return SICILY_CONTENT[slug];
}
