"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import { listSicilyProvinces } from "@/data/sicily/provinces";
import {
  SICILY_MAP_VIEW_BOX,
  SICILY_PROVINCE_SVG_PATHS,
} from "@/data/map/sicily-paths.generated";
import { SICILY_PROVINCE_FILLS } from "@/lib/design/sicily-map-colors";
import { sicilyProvincePath } from "@/lib/routing/paths";
import type { SicilyProvinceSlug } from "@/types/sicily";

const provinces = listSicilyProvinces();

const MAP_STROKE = "rgba(15, 61, 92, 0.55)";
const MAP_STROKE_HOVER = "rgba(255,255,255,0.98)";
const STROKE_WIDTH_BASE = 1.6;
const STROKE_WIDTH_HOVER = 2.6;

type Props = {
  className?: string;
  "aria-label"?: string;
};

export function InteractiveSicilyMap({
  className,
  "aria-label": ariaLabel = "Mappa interattiva della Sicilia per province",
}: Props) {
  const router = useRouter();
  const titleId = useId();
  const labelId = useId();
  const [pressed, setPressed] = useState<SicilyProvinceSlug | null>(null);
  const [activeProvince, setActiveProvince] = useState<SicilyProvinceSlug | null>(
    null,
  );
  const [tipPos, setTipPos] = useState<{ x: number; y: number } | null>(null);
  const [previewViewBox, setPreviewViewBox] = useState<string>(SICILY_MAP_VIEW_BOX);
  const previewPathRef = useRef<SVGPathElement | null>(null);
  const activeLabel = activeProvince
    ? (provinces.find((province) => province.slug === activeProvince)?.name ??
      null)
    : null;

  const navigate = useCallback(
    (slug: SicilyProvinceSlug) => {
      router.push(sicilyProvincePath(slug));
    },
    [router],
  );

  const activePreviewFill = activeProvince
    ? SICILY_PROVINCE_FILLS[activeProvince].hover
    : "#ffffff";

  useEffect(() => {
    if (!activeProvince || !previewPathRef.current) return;
    const bbox = previewPathRef.current.getBBox();
    if (bbox.width <= 0 || bbox.height <= 0) return;
    const pad = Math.max(40, Math.max(bbox.width, bbox.height) * 0.22);
    setPreviewViewBox(
      `${bbox.x - pad} ${bbox.y - pad} ${bbox.width + pad * 2} ${bbox.height + pad * 2}`,
    );
  }, [activeProvince]);

  return (
    <figure
      className={`flex h-full min-h-0 w-full min-w-0 max-w-full flex-1 flex-col gap-2 sm:gap-3 sm:flex-row sm:items-stretch ${className ?? ""}`}
    >
      <div className="flex min-h-0 min-w-0 flex-1 flex-col sm:h-full sm:w-[54%] sm:max-w-[54%] sm:flex-none">
        <div
          id={labelId}
          aria-live="polite"
          className="relative min-h-[min(52dvh,28rem)] flex-1 touch-manipulation rounded-2xl border border-heading/15 bg-surface shadow-[var(--shadow-card)] sm:h-full sm:min-h-0"
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
            viewBox={SICILY_MAP_VIEW_BOX}
            className="absolute inset-0 h-full w-full select-none drop-shadow-[0_4px_20px_rgba(15,61,92,0.08)]"
            preserveAspectRatio="xMidYMid meet"
          >
            <title id={titleId}>{ariaLabel}</title>
            {provinces.map((province) => {
              const d = SICILY_PROVINCE_SVG_PATHS[province.slug];
              const colors = SICILY_PROVINCE_FILLS[province.slug];
              const fill =
                pressed === province.slug
                  ? colors.pressed
                  : activeProvince === province.slug
                    ? colors.hover
                    : colors.base;
              const isOutline =
                activeProvince === province.slug || pressed === province.slug;
              return (
                <path
                  key={province.slug}
                  d={d}
                  fill={fill}
                  stroke={isOutline ? MAP_STROKE_HOVER : MAP_STROKE}
                  strokeWidth={
                    isOutline ? STROKE_WIDTH_HOVER : STROKE_WIDTH_BASE
                  }
                  vectorEffect="non-scaling-stroke"
                  className="cursor-pointer transition-[fill,stroke] duration-200 ease-out focus:outline-none"
                  tabIndex={0}
                  onPointerEnter={(e) => {
                    setActiveProvince(province.slug);
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
                  onFocus={() => setActiveProvince(province.slug)}
                  onBlur={() => setActiveProvince(null)}
                  onPointerDown={() => setPressed(province.slug)}
                  onPointerUp={() => setPressed(null)}
                  onPointerCancel={() => setPressed(null)}
                  onClick={() => navigate(province.slug)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      navigate(province.slug);
                    }
                  }}
                >
                  <title>{province.name}</title>
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
                    Passa su una provincia
                  </span>
                  <span className="[@media(pointer:fine)]:hidden">
                    Tocca una provincia
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex min-h-[min(42dvh,22rem)] min-w-0 flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl border border-heading/15 bg-surface p-2 shadow-[var(--shadow-card)] sm:h-full sm:min-h-0 sm:p-6">
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
                <path
                  d={SICILY_PROVINCE_SVG_PATHS[activeProvince]}
                  fill={activePreviewFill}
                  stroke={MAP_STROKE_HOVER}
                  strokeWidth={STROKE_WIDTH_HOVER}
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </>
          ) : (
            <p className="max-w-sm text-center font-display text-xl font-bold text-foreground-muted sm:text-3xl">
              Scegli una provincia e la vedrai molto più grande qui.
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
          viewBox={SICILY_MAP_VIEW_BOX}
          className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
        >
          <path
            ref={previewPathRef}
            d={SICILY_PROVINCE_SVG_PATHS[activeProvince]}
          />
        </svg>
      ) : null}
    </figure>
  );
}
