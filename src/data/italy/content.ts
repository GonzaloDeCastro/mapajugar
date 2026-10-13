import type { ItalyRegionContent, ItalyRegionSlug } from "@/types/region";

import { ITALY_CONTENT } from "./content.generated";

export function getItalyRegionContent(slug: ItalyRegionSlug): ItalyRegionContent {
  return ITALY_CONTENT[slug];
}
