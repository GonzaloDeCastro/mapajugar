/** Base path público del deploy (ej. `/mapajugar`). Vacío en local sin `BASE_PATH`. */
export function getBasePath(): string {
  let raw = process.env.BASE_PATH?.trim().replace(/\/$/, "") ?? "";
  if (raw.startsWith("/")) raw = raw.slice(1);
  return raw && raw !== "." ? `/${raw}` : "";
}

/** Prefija una ruta estática de `public/` con el base path del deploy. */
export function withBasePath(path: string): string {
  const base = getBasePath();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!base) return normalized;
  if (normalized.startsWith(`${base}/`) || normalized === base) return normalized;
  return `${base}${normalized}`;
}
