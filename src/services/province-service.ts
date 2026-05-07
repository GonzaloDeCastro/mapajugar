import { getProvinceBySlug, listProvinces } from "@/data/provinces";
import { getProvinceLocalContent } from "@/data/provinces/content";
import type { Province, ProvinceLocalContent, ProvinceSlug } from "@/types/province";

/**
 * Capa de servicio: hoy lee datos locales; mañana puede llamar a API/DB (PostgreSQL)
 * sin cambiar los componentes de UI.
 */
export async function fetchProvinces(): Promise<Province[]> {
  return listProvinces();
}

export async function fetchProvinceBySlug(slug: string): Promise<Province | null> {
  return getProvinceBySlug(slug) ?? null;
}

export async function fetchProvinceLocalContentBySlug(
  slug: string,
): Promise<ProvinceLocalContent | null> {
  const province = getProvinceBySlug(slug);
  if (!province) return null;
  return getProvinceLocalContent(province.slug as ProvinceSlug);
}
