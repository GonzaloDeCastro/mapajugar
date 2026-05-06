import type { Province } from "@/types/province";

import { ProvinceExploreTabs } from "./ProvinceExploreTabs";
import { ProvinceGallery } from "./ProvinceGallery";

export function ProvinceSections({ province }: { province: Province }) {
  const p = (s: string) => `${province.slug}-${s}`;

  return (
    <article className="space-y-8">
      <header className="overflow-hidden rounded-3xl border-2 border-celeste/40 bg-gradient-to-br from-surface-elevated via-background to-background-warm p-5 shadow-[var(--shadow-elevated)] sm:p-8">
        <p className="inline-flex rounded-full bg-pampa/25 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-forest">
          {province.shortName}
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-heading sm:text-4xl">
          {province.name}
        </h1>
        <p className="mt-3 max-w-prose text-base font-semibold leading-relaxed text-foreground-muted sm:text-lg">
          {province.description}
        </p>
      </header>

      <section aria-labelledby={p("explore-heading")}>
        <h2 id={p("explore-heading")} className="sr-only">
          Explorar contenido
        </h2>
        <ProvinceExploreTabs province={province} />
      </section>

      <section className="space-y-3" aria-labelledby={p("gallery")}>
        <h2
          id={p("gallery")}
          className="font-display text-xl font-bold text-heading sm:text-2xl"
        >
          Galería
        </h2>
        <ProvinceGallery images={province.gallery} />
      </section>
    </article>
  );
}
