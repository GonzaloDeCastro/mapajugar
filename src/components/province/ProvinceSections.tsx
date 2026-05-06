import type { ReactNode } from "react";

import type { Province } from "@/types/province";

import { ProvinceGallery } from "./ProvinceGallery";

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) => (
  <section className="space-y-2" aria-labelledby={id}>
    <h2
      id={id}
      className="text-base font-semibold text-emerald-950 dark:text-emerald-50"
    >
      {title}
    </h2>
    <div className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">
      {children}
    </div>
  </section>
);

export function ProvinceSections({ province }: { province: Province }) {
  const p = (s: string) => `${province.slug}-${s}`;

  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-wide text-emerald-800/80 dark:text-emerald-200/80">
          {province.shortName}
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-50 sm:text-3xl">
          {province.name}
        </h1>
        <p className="max-w-prose text-sm leading-relaxed text-stone-700 dark:text-stone-300">
          {province.description}
        </p>
      </header>

      <div className="grid gap-8">
        <Section id={p("flora")} title="Flora">
          {province.flora}
        </Section>
        <Section id={p("fauna")} title="Fauna">
          {province.fauna}
        </Section>
        <Section id={p("foods")} title="Comidas típicas">
          {province.foods}
        </Section>
        <Section id={p("tourism")} title="Turismo">
          {province.tourism}
        </Section>
        <section className="space-y-3" aria-labelledby={p("gallery")}>
          <h2
            id={p("gallery")}
            className="text-base font-semibold text-emerald-950 dark:text-emerald-50"
          >
            Galería
          </h2>
          <ProvinceGallery images={province.gallery} />
        </section>
      </div>
    </article>
  );
}
