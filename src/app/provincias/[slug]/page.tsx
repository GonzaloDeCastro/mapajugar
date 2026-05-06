import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { ProvinceSections } from "@/components/province/ProvinceSections";
import { getAllProvinceSlugs } from "@/data/provinces";
import { fetchProvinceBySlug } from "@/services/province-service";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProvinceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const province = await fetchProvinceBySlug(slug);
  if (!province) {
    return { title: "Provincia no encontrada" };
  }
  const url = `/provincias/${province.slug}`;
  return {
    title: province.name,
    description: province.description.slice(0, 155),
    alternates: { canonical: url },
    openGraph: {
      title: `${province.name} — Mapa Jugar`,
      description: province.description.slice(0, 200),
      url,
      locale: "es_AR",
      type: "article",
    },
  };
}

export default async function ProvincePage({ params }: Props) {
  const { slug } = await params;
  const province = await fetchProvinceBySlug(slug);
  if (!province) notFound();

  return (
    <div className="min-h-dvh text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <nav className="mb-8" aria-label="Migas de pan">
          <ol className="flex flex-wrap items-center gap-2 text-sm font-bold sm:text-base">
            <li>
              <Link
                href="/"
                className="rounded-full bg-water/15 px-3 py-1.5 text-water underline-offset-4 transition hover:bg-water/25 hover:underline"
              >
                Inicio
              </Link>
            </li>
            <li aria-hidden="true" className="text-foreground-muted">
              /
            </li>
            <li className="font-display text-heading">{province.name}</li>
          </ol>
        </nav>
        <ProvinceSections province={province} />
      </main>
    </div>
  );
}
