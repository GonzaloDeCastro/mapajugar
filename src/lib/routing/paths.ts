import type { ProvinceSlug } from "@/types/province";

export function provincePath(slug: ProvinceSlug | string): string {
  return `/mapa/argentina/provincias/${slug}`;
}

export function italyRegionPath(slug: string): string {
  return `/mapa/italia/regioni/${slug}`;
}
