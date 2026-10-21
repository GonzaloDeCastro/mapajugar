import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { ProvinceSections } from "@/components/province/ProvinceSections";
import { SicilyProvinceSpotlightMap } from "@/components/sicily/SicilyProvinceSpotlightMap";
import { getSicilyProvinceContent } from "@/data/sicily/content";
import {
  getSicilyProvinceBySlug,
  isSicilyProvinceSlug,
  listSicilyProvinces,
} from "@/data/sicily/provinces";
import { sicilyProvincePath } from "@/lib/routing/paths";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return listSicilyProvinces().map((province) => ({ slug: province.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const province = getSicilyProvinceBySlug(slug);
  if (!province) return { title: "Provincia non trovata" };
  const url = sicilyProvincePath(province.slug);
  return {
    title: province.name,
    description: province.description.slice(0, 155),
    alternates: { canonical: url },
    openGraph: {
      title: `${province.name} — Mapa Jugar`,
      description: province.description.slice(0, 200),
      url,
      locale: "it_IT",
      type: "article",
    },
  };
}

export default async function SicilyProvincePage({ params }: Props) {
  const { slug } = await params;
  if (!isSicilyProvinceSlug(slug)) notFound();
  const province = getSicilyProvinceBySlug(slug);
  if (!province) notFound();
  const content = getSicilyProvinceContent(slug);

  return (
    <div className="min-h-dvh text-foreground">
      <SiteHeader />
      <main className="mx-auto min-w-0 max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        <nav className="mb-8 w-full" aria-label="Percorso">
          <ol className="flex w-full flex-wrap items-center justify-start gap-2 text-left text-sm font-bold sm:text-base">
            <li>
              <Link
                href="/mapa/sicilia"
                className="rounded-full bg-water/15 px-3 py-1.5 text-water underline-offset-4 transition hover:bg-water/25 hover:underline"
              >
                Mappa
              </Link>
            </li>
            <li aria-hidden="true" className="text-foreground-muted">
              /
            </li>
            <li className="font-display text-heading">{province.name}</li>
          </ol>
        </nav>
        <div className="flex min-w-0 flex-col-reverse gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(18rem,40%)] lg:items-start">
          <ProvinceSections
            locale="it"
            localContent={{
              slug: province.slug,
              plants: content.plants,
              animals: content.animals,
              foods: content.foods,
              tourism: content.tourism,
              curiosities: content.curiosities,
            }}
          />
          <SicilyProvinceSpotlightMap
            slug={province.slug}
            name={province.name}
            spotlightOverview={`${province.spotlightOverview}\n${province.curiosity}`}
          />
        </div>
      </main>
    </div>
  );
}
