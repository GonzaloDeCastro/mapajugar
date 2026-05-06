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

  const malvinasPressedClass =
    pressed === MALVINAS_SLUG
      ? "fill-[rgba(21,128,61,0.65)]"
      : "fill-[rgba(22,101,52,0.35)] [@media(hover:hover)_and_(pointer:fine)]:hover:fill-[rgba(22,163,74,0.55)]";

  return (
    <figure
      className={`flex min-h-0 w-full max-w-full flex-1 flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-0 ${className ?? ""}`}
    >
      <div
        id={labelId}
        aria-live="polite"
        className="flex shrink-0 flex-col justify-center border-b border-stone-200/80 px-2 py-1.5 sm:w-[10.5rem] sm:border-b-0 sm:border-r sm:px-3 sm:py-4 dark:border-stone-800"
      >
        <p
          className={`text-pretty text-center text-sm leading-snug sm:text-left sm:text-base ${activeLabel ? "text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-50 sm:text-2xl" : "font-normal text-stone-500 dark:text-stone-400"}`}
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
        className="relative min-h-0 min-w-0 flex-1 touch-manipulation"
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
          className="absolute inset-0 h-full w-full select-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <title id={titleId}>{ariaLabel}</title>
          {provincesOnMainland.map((p) => {
            const d = PROVINCE_SVG_PATHS[p.slug];
            const pressedClass =
              pressed === p.slug
                ? "fill-[rgba(21,128,61,0.65)]"
                : "fill-[rgba(22,101,52,0.35)] [@media(hover:hover)_and_(pointer:fine)]:hover:fill-[rgba(22,163,74,0.55)]";
            return (
              <path
                key={p.slug}
                d={d}
                stroke="rgba(255,255,255,0.55)"
                strokeWidth={0.35}
                className={`cursor-pointer transition-[fill,stroke-width] duration-200 ease-out focus:outline-none focus-visible:stroke-[rgba(255,255,255,0.95)] focus-visible:stroke-[0.55] ${pressedClass}`}
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
            <p className="mb-px text-center text-[0.5rem] font-semibold leading-tight text-stone-600 dark:text-stone-300 sm:text-[0.55rem]">
              Islas Malvinas
            </p>
            <svg
              role="img"
              aria-labelledby={malvinasTitleId}
              viewBox={MALVINAS_MAP_VIEW_BOX}
              className="h-auto w-full overflow-visible select-none"
              preserveAspectRatio="xMidYMid meet"
            >
              <title id={malvinasTitleId}>{malvinasProvince.name}</title>
              <g transform={MALVINAS_GROUP_TRANSFORM}>
                <path
                  d={MALVINAS_PATH_D}
                  stroke="rgba(255,255,255,0.55)"
                  strokeWidth={0.35}
                  className={`cursor-pointer transition-[fill,stroke-width] duration-200 ease-out focus:outline-none focus-visible:stroke-[rgba(255,255,255,0.95)] focus-visible:stroke-[0.55] ${malvinasPressedClass}`}
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
