"use client";

import { useEffect, useRef, useState } from "react";

import {
  ITALY_MAP_VIEW_BOX,
  ITALY_REGION_SVG_PATHS,
} from "@/data/map/italy-paths.generated";
import { ITALY_REGION_FILLS } from "@/lib/design/italy-map-colors";
import type { ItalyRegionSlug } from "@/types/region";

type Props = {
  slug: ItalyRegionSlug;
  name: string;
  spotlightOverview: string;
};

export function RegionSpotlightMap({ slug, name, spotlightOverview }: Props) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [viewBox, setViewBox] = useState<string>(ITALY_MAP_VIEW_BOX);
  const pathD = ITALY_REGION_SVG_PATHS[slug];
  const fill = ITALY_REGION_FILLS[slug].hover;

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
        role="img"
        aria-label={`Mappa di ${name}`}
      >
        <path
          ref={pathRef}
          d={pathD}
          fill={fill}
          stroke="rgba(255,255,255,0.95)"
          strokeWidth={1.2}
        />
      </svg>
      <div className="mt-4 space-y-3 text-left text-sm font-semibold leading-relaxed text-foreground-muted sm:text-base">
        {spotlightOverview.split("\n").map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </aside>
  );
}
