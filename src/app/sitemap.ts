import type { MetadataRoute } from "next";

import { getAllProvinceSlugs } from "@/data/provinces";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ).replace(/\/$/, "");
  const provinces = getAllProvinceSlugs().map((slug) => ({
    url: `${base}/provincias/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/mapa/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${base}/trivia/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...provinces,
  ];
}
