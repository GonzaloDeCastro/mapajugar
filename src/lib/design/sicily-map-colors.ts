import type { SicilyProvinceSlug } from "@/types/sicily";

import type { ProvinceMapFill } from "./province-map-colors";

const f = (base: string, hover: string, pressed: string): ProvinceMapFill => ({
  base,
  hover,
  pressed,
});

/** Colores distintos entre provincias que comparten frontera. */
export const SICILY_PROVINCE_FILLS: Record<SicilyProvinceSlug, ProvinceMapFill> = {
  trapani: f("#1e88e5", "#42a5f5", "#1565c0"),
  palermo: f("#ffb300", "#ffca28", "#ff8f00"),
  messina: f("#43a047", "#66bb6a", "#2e7d32"),
  enna: f("#8e24aa", "#ab47bc", "#6a1b9a"),
  catania: f("#e53935", "#ef5350", "#c62828"),
  caltanissetta: f("#00acc1", "#26c6da", "#00838f"),
  agrigento: f("#ec407a", "#f06292", "#d81b60"),
  ragusa: f("#5c6bc0", "#7986cb", "#3949ab"),
  siracusa: f("#c0ca33", "#d4e157", "#9e9d24"),
};
