import type { MetadataRoute } from "next";

import { listItalyRegions } from "@/data/italy/regions";
import { getAllProvinceSlugs } from "@/data/provinces";
import { listSicilyProvinces } from "@/data/sicily/provinces";
import {
  italyRegionPath,
  provincePath,
  sicilyProvincePath,
} from "@/lib/routing/paths";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ).replace(/\/$/, "");
  const now = new Date();

  const provinces = getAllProvinceSlugs().flatMap((slug) => [
    {
      url: `${base}${provincePath(slug)}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${base}/provincias/${slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    },
  ]);

  const regions = listItalyRegions().map((region) => ({
    url: `${base}${italyRegionPath(region.slug)}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const sicilyProvinces = listSicilyProvinces().map((province) => ({
    url: `${base}${sicilyProvincePath(province.slug)}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/mapa/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${base}/mapa/argentina/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/mapa/italia/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/mapa/sicilia/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/trivia/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...provinces,
    ...regions,
    ...sicilyProvinces,
  ];
}
