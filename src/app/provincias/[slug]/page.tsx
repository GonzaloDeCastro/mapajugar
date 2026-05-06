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
      title: `${province.name} — Mapa Interactivo de Argentina`,
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
    <div className="min-h-dvh bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
        <nav className="mb-8 text-sm" aria-label="Migas de pan">
          <ol className="flex flex-wrap gap-2 text-stone-600 dark:text-stone-400">
            <li>
              <Link href="/" className="underline-offset-4 hover:underline">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-stone-800 dark:text-stone-200">
              {province.name}
            </li>
          </ol>
        </nav>
        <ProvinceSections province={province} />
      </main>
    </div>
  );
}
