"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";

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
const MAP_STROKE_HOVER = "rgba(255,255,255,0.98)";
const STROKE_WIDTH_BASE = 0.45;
const STROKE_WIDTH_HOVER = 1.45;

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
  /** Solo puntero fino: posición del tooltip junto al cursor */
  const [tipPos, setTipPos] = useState<{ x: number; y: number } | null>(null);
  const [previewViewBox, setPreviewViewBox] = useState<string>(MAP_VIEW_BOX);
  const previewPathRef = useRef<SVGPathElement | null>(null);
  const activeLabel = activeProvince
    ? getProvinceBySlug(activeProvince)?.name ?? null
    : null;
  const activeMainlandSlug =
    activeProvince && activeProvince !== MALVINAS_SLUG
      ? (activeProvince as MainlandProvinceSlug)
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
  const activePreviewFill =
    activeProvince === MALVINAS_SLUG
      ? malvinasFill
      : activeMainlandSlug
        ? MAINLAND_PROVINCE_FILLS[activeMainlandSlug].hover
        : "#ffffff";

  useEffect(() => {
    if (!activeProvince || !previewPathRef.current) return;
    const bbox = previewPathRef.current.getBBox();
    if (bbox.width <= 0 || bbox.height <= 0) return;
    const pad = Math.max(6, Math.max(bbox.width, bbox.height) * 0.35);
    setPreviewViewBox(
      `${bbox.x - pad} ${bbox.y - pad} ${bbox.width + pad * 2} ${bbox.height + pad * 2}`,
    );
  }, [activeProvince]);

  return (
    <figure
      className={`flex h-full min-h-0 w-full max-w-full flex-1 flex-col gap-3 sm:flex-row sm:items-stretch ${className ?? ""}`}
    >
      <div className="flex h-full min-h-0 min-w-0 flex-col sm:w-[54%] sm:max-w-[54%]">
        <div
          id={labelId}
          aria-live="polite"
          className="relative h-full min-h-[min(68vh,760px)] touch-manipulation rounded-2xl border border-heading/15 bg-surface shadow-[var(--shadow-card)] sm:min-h-0"
          onPointerMove={(e) => {
            if (e.pointerType !== "mouse") return;
            setTipPos({ x: e.clientX + 14, y: e.clientY + 14 });
          }}
          onPointerLeave={(e) => {
            const next = e.relatedTarget;
            if (
              next == null ||
              !(next instanceof Node) ||
              !e.currentTarget.contains(next)
            ) {
              setActiveProvince(null);
              setTipPos(null);
            }
          }}
        >
          <svg
            role="img"
            aria-labelledby={titleId}
            viewBox={MAP_VIEW_BOX}
            className="absolute inset-0 h-full w-full select-none drop-shadow-[0_4px_20px_rgba(15,61,92,0.08)]"
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
              const isOutline =
                activeProvince === p.slug || pressed === p.slug;
              return (
                <path
                  key={p.slug}
                  d={d}
                  fill={fill}
                  stroke={isOutline ? MAP_STROKE_HOVER : MAP_STROKE}
                  strokeWidth={isOutline ? STROKE_WIDTH_HOVER : STROKE_WIDTH_BASE}
                  className="cursor-pointer transition-[fill,stroke,stroke-width] duration-200 ease-out focus:outline-none"
                  tabIndex={0}
                  onPointerEnter={(e) => {
                    setActiveProvince(p.slug);
                    if (e.pointerType === "mouse") {
                      setTipPos({
                        x: e.clientX + 14,
                        y: e.clientY + 14,
                      });
                    } else {
                      setTipPos(null);
                    }
                  }}
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

          <div className="pointer-events-none absolute left-2 top-2 z-10 rounded-xl border border-white/60 bg-surface/90 px-2 py-1 shadow-[var(--shadow-card)] sm:left-3 sm:top-3">
            <p
              className={`text-pretty text-center text-[11px] leading-snug sm:text-left sm:text-sm ${activeLabel ? "font-display font-bold tracking-tight text-heading" : "font-semibold text-foreground-muted"}`}
            >
              {activeLabel ? (
                activeLabel
              ) : (
                <>
                  <span className="hidden [@media(pointer:fine)]:inline">
                    Pasá por una provincia
                  </span>
                  <span className="[@media(pointer:fine)]:hidden">
                    Tocá una provincia
                  </span>
                </>
              )}
            </p>
          </div>

          {malvinasProvince ? (
            <div className="pointer-events-auto absolute bottom-[11%] right-[36%] z-10 w-[min(12vw,4.25rem)] max-w-[4.75rem] min-w-[3rem] sm:bottom-[13%] sm:right-[38%] sm:w-[min(9.5%,4.75rem)] sm:max-w-[5rem]">
              <p className="mb-px text-center text-[0.5rem] font-bold leading-tight text-heading sm:text-[0.55rem]">
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
                    stroke={
                      activeProvince === MALVINAS_SLUG || pressed === MALVINAS_SLUG
                        ? MAP_STROKE_HOVER
                        : MAP_STROKE
                    }
                    strokeWidth={
                      activeProvince === MALVINAS_SLUG || pressed === MALVINAS_SLUG
                        ? STROKE_WIDTH_HOVER
                        : STROKE_WIDTH_BASE
                    }
                    className="cursor-pointer transition-[fill,stroke,stroke-width] duration-200 ease-out focus:outline-none"
                    tabIndex={0}
                    onPointerEnter={(e) => {
                      setActiveProvince(MALVINAS_SLUG);
                      if (e.pointerType === "mouse") {
                        setTipPos({
                          x: e.clientX + 14,
                          y: e.clientY + 14,
                        });
                      } else {
                        setTipPos(null);
                      }
                    }}
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
      </div>

      <div className="relative flex h-full min-h-[min(54vh,580px)] min-w-0 flex-1 items-center justify-center overflow-hidden rounded-2xl border border-heading/15 bg-surface p-3 shadow-[var(--shadow-card)] sm:min-h-0 sm:p-6">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-celeste/15 to-transparent" />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
          {activeProvince ? (
            <>
              <p className="mb-3 text-center font-display text-xl font-bold text-heading sm:mb-5 sm:text-3xl">
                {activeLabel}
              </p>
              <svg
                viewBox={previewViewBox}
                className="h-[72%] w-full max-w-[95%]"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden
              >
                {activeProvince === MALVINAS_SLUG ? (
                  <g transform={MALVINAS_GROUP_TRANSFORM}>
                    <path
                      d={MALVINAS_PATH_D}
                      fill={activePreviewFill}
                      stroke={MAP_STROKE_HOVER}
                      strokeWidth={STROKE_WIDTH_HOVER}
                    />
                  </g>
                ) : activeMainlandSlug ? (
                  <path
                    d={PROVINCE_SVG_PATHS[activeMainlandSlug]}
                    fill={activePreviewFill}
                    stroke={MAP_STROKE_HOVER}
                    strokeWidth={STROKE_WIDTH_HOVER}
                  />
                ) : null}
              </svg>
            </>
          ) : (
            <p className="max-w-sm text-center font-display text-xl font-bold text-foreground-muted sm:text-3xl">
              Seleccioná una provincia y la vas a ver mucho más grande acá.
            </p>
          )}
        </div>
      </div>

      {activeLabel && tipPos ? (
        <div
          role="tooltip"
          className="pointer-events-none fixed z-[999] hidden max-w-[min(88vw,18rem)] rounded-xl border-2 border-white/50 bg-sky-deep px-3 py-2 text-center font-display text-sm font-extrabold leading-snug text-white shadow-[var(--shadow-elevated)] [@media(hover:hover)_and_(pointer:fine)]:!block"
          style={{
            left: tipPos.x,
            top: tipPos.y,
            transform: "translate(0.5rem, 0.5rem)",
          }}
        >
          {activeLabel}
        </div>
      ) : null}

      {activeProvince ? (
        <svg
          aria-hidden
          viewBox={activeProvince === MALVINAS_SLUG ? MALVINAS_MAP_VIEW_BOX : MAP_VIEW_BOX}
          className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
        >
          {activeProvince === MALVINAS_SLUG ? (
            <g transform={MALVINAS_GROUP_TRANSFORM}>
              <path ref={previewPathRef} d={MALVINAS_PATH_D} />
            </g>
          ) : activeMainlandSlug ? (
            <path ref={previewPathRef} d={PROVINCE_SVG_PATHS[activeMainlandSlug]} />
          ) : null}
        </svg>
      ) : null}
    </figure>
  );
}
