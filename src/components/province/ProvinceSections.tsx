import type { ProvinceContentItem } from "@/types/province";

import { ProvinceExploreTabs } from "./ProvinceExploreTabs";

type ExploreContent = {
  slug: string;
  animals: ProvinceContentItem[];
  plants: ProvinceContentItem[];
  foods: ProvinceContentItem[];
  curiosities: ProvinceContentItem[];
  tourism: ProvinceContentItem[];
};

export function ProvinceSections({
  localContent,
  locale = "es",
}: {
  localContent: ExploreContent;
  locale?: "es" | "it";
}) {
  const p = (s: string) => `${localContent.slug}-${s}`;

  return (
    <article className="min-w-0 text-left">
      <section aria-labelledby={p("explore-heading")}>
        <span id={p("explore-heading")} className="sr-only">
          {locale === "it" ? "Esplora i contenuti" : "Explorar contenido"}
        </span>
        <ProvinceExploreTabs localContent={localContent} locale={locale} />
      </section>
    </article>
  );
}
