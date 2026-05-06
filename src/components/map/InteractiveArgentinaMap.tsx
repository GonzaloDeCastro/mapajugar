"use client";

import { useRouter } from "next/navigation";
import { useCallback, useId, useState } from "react";

import {
  MALVINAS_GROUP_TRANSFORM,
  MALVINAS_MAP_VIEW_BOX,
  MALVINAS_PATH_D,
} from "@/data/map/malvinas-path.generated";
import { MAP_VIEW_BOX, PROVINCE_SVG_PATHS } from "@/data/map/province-paths.generated";
import { getProvinceBySlug, listProvinces } from "@/data/provinces";
import {
  MALVINAS_MAP_FILL,
  MAINLAND_PROVINCE_FILLS,
} from "@/lib/design/province-map-colors";
import { provincePath } from "@/lib/routing/paths";
import type { ProvinceSlug } from "@/types/province";

type MainlandProvinceSlug = Exclude<ProvinceSlug, "islas-malvinas">;

const provinces = listProvinces();
const MALVINAS_SLUG = "islas-malvinas" as const satisfies ProvinceSlug;
const provincesOnMainland = provinces.filter(
  (p): p is (typeof p & { slug: MainlandProvinceSlug }) =>
    p.slug !== MALVINAS_SLUG,
);
const malvinasProvince = getProvinceBySlug(MALVINAS_SLUG);

const MAP_STROKE = "var(--map-stroke)";

type Props = {
  className?: string;
  "aria-label"?: string;
};

export function InteractiveArgentinaMap({
  className,
  "aria-label": ariaLabel = "Mapa interactivo de Argentina por provincias",
}: Props) {
  const router = useRouter();
  const titleId = useId();
  const malvinasTitleId = useId();
  const labelId = useId();
  const [pressed, setPressed] = useState<ProvinceSlug | null>(null);
  const [activeProvince, setActiveProvince] = useState<ProvinceSlug | null>(null);
  const activeLabel = activeProvince
    ? getProvinceBySlug(activeProvince)?.name ?? null
    : null;

  const navigate = useCallback(
    (slug: ProvinceSlug) => {
      router.push(provincePath(slug));
    },
    [router],
  );

  const malvinasFill = (() => {
    if (pressed === MALVINAS_SLUG) return MALVINAS_MAP_FILL.pressed;
    if (activeProvince === MALVINAS_SLUG) return MALVINAS_MAP_FILL.hover;
    return MALVINAS_MAP_FILL.base;
  })();

  return (
    <figure
      className={`flex min-h-0 w-full max-w-full flex-1 flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0 ${className ?? ""}`}
    >
      <div
        id={labelId}
        aria-live="polite"
        className="flex shrink-0 flex-col justify-center rounded-2xl border border-sky-deep/10 bg-surface px-3 py-3 shadow-[var(--shadow-card)] sm:w-[11.5rem] sm:border-r sm:border-b-0 sm:rounded-r-none sm:rounded-l-2xl sm:px-4 sm:py-5"
      >
        <p
          className={`text-pretty text-center text-[15px] leading-snug sm:text-left sm:text-base ${activeLabel ? "font-display text-xl font-bold tracking-tight text-sky-deep sm:text-2xl" : "font-semibold text-foreground-muted"}`}
        >
          {activeLabel ? (
            activeLabel
          ) : (
            <>
              <span className="hidden [@media(pointer:fine)]:inline">
                Pasá el cursor por una provincia
              </span>
              <span className="[@media(pointer:fine)]:hidden">
                Tocá una provincia en el mapa
              </span>
            </>
          )}
        </p>
      </div>
      <div
        className="relative min-h-0 min-w-0 flex-1 touch-manipulation rounded-2xl sm:rounded-l-none sm:rounded-r-2xl"
        onPointerLeave={(e) => {
          const next = e.relatedTarget;
          if (
            next == null ||
            !(next instanceof Node) ||
            !e.currentTarget.contains(next)
          ) {
            setActiveProvince(null);
          }
        }}
      >
        <svg
          role="img"
          aria-labelledby={titleId}
          viewBox={MAP_VIEW_BOX}
          className="absolute inset-0 h-full w-full max-h-full select-none drop-shadow-[0_4px_20px_rgba(15,61,92,0.08)]"
          preserveAspectRatio="xMidYMid meet"
        >
          <title id={titleId}>{ariaLabel}</title>
          {provincesOnMainland.map((p) => {
            const d = PROVINCE_SVG_PATHS[p.slug];
            const colors = MAINLAND_PROVINCE_FILLS[p.slug];
            const fill =
              pressed === p.slug
                ? colors.pressed
                : activeProvince === p.slug
                  ? colors.hover
                  : colors.base;
            return (
              <path
                key={p.slug}
                d={d}
                fill={fill}
                stroke={MAP_STROKE}
                strokeWidth={0.45}
                className="cursor-pointer transition-[fill,stroke-width] duration-200 ease-out focus:outline-none focus-visible:stroke-[0.65]"
                tabIndex={0}
                onPointerEnter={() => setActiveProvince(p.slug)}
                onPointerLeave={() => setPressed(null)}
                onFocus={() => setActiveProvince(p.slug)}
                onBlur={() => setActiveProvince(null)}
                onPointerDown={() => setPressed(p.slug)}
                onPointerUp={() => setPressed(null)}
                onPointerCancel={() => setPressed(null)}
                onClick={() => navigate(p.slug)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    navigate(p.slug);
                  }
                }}
              >
                <title>{p.name}</title>
              </path>
            );
          })}
        </svg>

        {malvinasProvince ? (
          <div className="pointer-events-auto absolute bottom-[11%] right-[36%] z-10 w-[min(12vw,4.25rem)] max-w-[4.75rem] min-w-[3rem] sm:bottom-[13%] sm:right-[38%] sm:w-[min(9.5%,4.75rem)] sm:max-w-[5rem]">
            <p className="mb-px text-center text-[0.5rem] font-bold leading-tight text-sky-deep sm:text-[0.55rem]">
              Islas Malvinas
            </p>
            <svg
              role="img"
              aria-labelledby={malvinasTitleId}
              viewBox={MALVINAS_MAP_VIEW_BOX}
              className="h-auto w-full overflow-visible select-none drop-shadow-sm"
              preserveAspectRatio="xMidYMid meet"
            >
              <title id={malvinasTitleId}>{malvinasProvince.name}</title>
              <g transform={MALVINAS_GROUP_TRANSFORM}>
                <path
                  d={MALVINAS_PATH_D}
                  fill={malvinasFill}
                  stroke={MAP_STROKE}
                  strokeWidth={0.45}
                  className="cursor-pointer transition-[fill,stroke-width] duration-200 ease-out focus:outline-none focus-visible:stroke-[0.65]"
                  tabIndex={0}
                  onPointerEnter={() => setActiveProvince(MALVINAS_SLUG)}
                  onPointerLeave={() => setPressed(null)}
                  onFocus={() => setActiveProvince(MALVINAS_SLUG)}
                  onBlur={() => setActiveProvince(null)}
                  onPointerDown={() => setPressed(MALVINAS_SLUG)}
                  onPointerUp={() => setPressed(null)}
                  onPointerCancel={() => setPressed(null)}
                  onClick={() => navigate(MALVINAS_SLUG)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      navigate(MALVINAS_SLUG);
                    }
                  }}
                >
                  <title>{malvinasProvince.name}</title>
                </path>
              </g>
            </svg>
          </div>
        ) : null}
      </div>
    </figure>
  );
}
