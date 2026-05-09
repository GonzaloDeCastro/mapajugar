"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import {
  MALVINAS_GROUP_TRANSFORM,
  MALVINAS_MAP_VIEW_BOX,
  MALVINAS_PATH_D,
} from "@/data/map/malvinas-path.generated";
import { MAP_VIEW_BOX, PROVINCE_SVG_PATHS } from "@/data/map/province-paths.generated";
import {
  MALVINAS_MAP_FILL,
  MAINLAND_PROVINCE_FILLS,
} from "@/lib/design/province-map-colors";
import type { ProvinceSlug } from "@/types/province";

type MainlandProvinceSlug = Exclude<ProvinceSlug, "islas-malvinas">;
const MALVINAS_SLUG = "islas-malvinas" as const;

type Props = {
  slug: ProvinceSlug;
  name: string;
  spotlightOverview: string;
};

export function ProvinceSpotlightMap({ slug, name, spotlightOverview }: Props) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [viewBox, setViewBox] = useState<string>(
    slug === MALVINAS_SLUG ? MALVINAS_MAP_VIEW_BOX : MAP_VIEW_BOX,
  );

  const isMalvinas = slug === MALVINAS_SLUG;
  const pathD = isMalvinas
    ? MALVINAS_PATH_D
    : PROVINCE_SVG_PATHS[slug as MainlandProvinceSlug];

  const fill = useMemo(() => {
    if (isMalvinas) return MALVINAS_MAP_FILL.hover;
    return MAINLAND_PROVINCE_FILLS[slug as MainlandProvinceSlug].hover;
  }, [isMalvinas, slug]);

  useEffect(() => {
    if (!pathRef.current) return;
    const bbox = pathRef.current.getBBox();
    if (bbox.width <= 0 || bbox.height <= 0) return;
    const pad = Math.max(10, Math.max(bbox.width, bbox.height) * 0.4);
    setViewBox(
      `${bbox.x - pad} ${bbox.y - pad} ${bbox.width + pad * 2} ${bbox.height + pad * 2}`,
    );
  }, [slug]);

  return (
    <aside className="min-w-0 w-full rounded-3xl border-2 border-celeste/35 bg-surface p-4 text-left shadow-[var(--shadow-elevated)] lg:sticky lg:top-24">
      <h1 className="text-left font-display text-xl font-bold tracking-tight text-heading sm:text-2xl">
        {name}
      </h1>
      <svg
        viewBox={viewBox}
        className="mt-3 h-[min(44vh,20rem)] w-full min-h-[12rem] rounded-2xl bg-background-warm/75 sm:h-[44vh] sm:min-h-[18rem]"
        preserveAspectRatio="xMinYMid meet"
        aria-label={`Mapa de ${name}`}
        role="img"
      >
        {isMalvinas ? (
          <g transform={MALVINAS_GROUP_TRANSFORM}>
            <path
              ref={pathRef}
              d={pathD}
              fill={fill}
              stroke="rgba(255,255,255,0.98)"
              strokeWidth={1.35}
            />
          </g>
        ) : (
          <path
            ref={pathRef}
            d={pathD}
            fill={fill}
            stroke="rgba(255,255,255,0.98)"
            strokeWidth={1.35}
          />
        )}
      </svg>
      <div className="mt-4 border-t border-heading/10 pt-4">
        <h2 className="sr-only">Sobre {name}</h2>
        <div className="space-y-3 text-left text-sm font-medium leading-relaxed text-foreground-muted sm:text-[0.9375rem]">
          {spotlightOverview
            .split(/\n\n+/)
            .map((block) => block.trim())
            .filter(Boolean)
            .map((paragraph, index) => (
              <p key={`${slug}-spotlight-${index}`}>{paragraph}</p>
            ))}
        </div>
      </div>
    </aside>
  );
}

