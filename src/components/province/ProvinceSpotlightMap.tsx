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
};

export function ProvinceSpotlightMap({ slug, name }: Props) {
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
    <aside className="rounded-3xl border-2 border-celeste/35 bg-surface p-4 shadow-[var(--shadow-elevated)] lg:sticky lg:top-24">
      <p className="text-center font-display text-xl font-bold text-heading sm:text-2xl">
        {name}
      </p>
      <svg
        viewBox={viewBox}
        className="mt-3 h-[44vh] w-full min-h-[18rem] rounded-2xl bg-background-warm/75"
        preserveAspectRatio="xMidYMid meet"
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
    </aside>
  );
}

