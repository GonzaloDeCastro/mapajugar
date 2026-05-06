import { getProvinceBySlug, listProvinces } from "@/data/provinces";
import type { Province } from "@/types/province";

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
