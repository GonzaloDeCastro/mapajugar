import type { ProvinceLocalContent } from "@/types/province";

import { ProvinceExploreTabs } from "./ProvinceExploreTabs";

export function ProvinceSections({
  localContent,
}: {
  localContent: ProvinceLocalContent;
}) {
  const p = (s: string) => `${localContent.slug}-${s}`;

  return (
    <article className="min-w-0 text-left">
      <section aria-labelledby={p("explore-heading")}>
        <span id={p("explore-heading")} className="sr-only">
          Explorar contenido
        </span>
        <ProvinceExploreTabs localContent={localContent} />
      </section>
    </article>
  );
}
