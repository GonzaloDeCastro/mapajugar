import type { Province, ProvinceLocalContent } from "@/types/province";

import { ProvinceExploreTabs } from "./ProvinceExploreTabs";

export function ProvinceSections({
  province,
  localContent,
}: {
  province: Province;
  localContent: ProvinceLocalContent;
}) {
  const p = (s: string) => `${province.slug}-${s}`;

  return (
    <article className="min-w-0 text-left">
      <section aria-labelledby={p("explore-heading")}>
        <span id={p("explore-heading")} className="sr-only">
          Explorar contenido
        </span>
        <ProvinceExploreTabs province={province} localContent={localContent} />
      </section>
    </article>
  );
}
