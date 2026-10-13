import type { ItalyRegionSlug } from "@/types/region";

import type { ProvinceMapFill } from "./province-map-colors";

const f = (base: string, hover: string, pressed: string): ProvinceMapFill => ({
  base,
  hover,
  pressed,
});

/**
 * Cada región contrasta con las que comparte frontera,
 * para que el contorno se lea aunque el trazo sea fino.
 */
export const ITALY_REGION_FILLS: Record<ItalyRegionSlug, ProvinceMapFill> = {
  "valle-d-aosta": f("#2e7d32", "#43a047", "#1b5e20"),
  piemonte: f("#ffcc80", "#ffe0b2", "#ffb74d"),
  liguria: f("#00897b", "#26a69a", "#00695c"),
  lombardia: f("#5c6bc0", "#7986cb", "#3949ab"),
  "trentino-alto-adige": f("#00acc1", "#26c6da", "#00838f"),
  veneto: f("#ff8a65", "#ffab91", "#f4511e"),
  "friuli-venezia-giulia": f("#8e24aa", "#ab47bc", "#6a1b9a"),
  "emilia-romagna": f("#c0ca33", "#d4e157", "#9e9d24"),
  toscana: f("#e53935", "#ef5350", "#c62828"),
  umbria: f("#827717", "#9e9d24", "#616116"),
  marche: f("#29b6f6", "#4fc3f7", "#0288d1"),
  lazio: f("#ffb300", "#ffca28", "#ff8f00"),
  abruzzo: f("#43a047", "#66bb6a", "#2e7d32"),
  molise: f("#ec407a", "#f06292", "#d81b60"),
  campania: f("#1b5e20", "#2e7d32", "#0d3b12"),
  puglia: f("#fb8c00", "#ffa726", "#ef6c00"),
  basilicata: f("#7e57c2", "#9575cd", "#5e35b1"),
  calabria: f("#fdd835", "#ffee58", "#f9a825"),
  sicilia: f("#1e88e5", "#42a5f5", "#1565c0"),
  sardegna: f("#ff7043", "#ff8a65", "#e64a19"),
};
