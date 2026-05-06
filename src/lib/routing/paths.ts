import type { ProvinceSlug } from "@/types/province";

export function provincePath(slug: ProvinceSlug | string): string {
  return `/provincias/${slug}`;
}
