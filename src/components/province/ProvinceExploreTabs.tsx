"use client";

import { useId, useState } from "react";

import type { ProvinceLocalContent } from "@/types/province";
import { ProvinceTopicGrid } from "./ProvinceTopicGrid";

type TabId = "flora" | "fauna" | "foods" | "tourism" | "curiosity";

const TABS: { id: TabId; label: string; emoji: string }[] = [
  { id: "flora", label: "Flora", emoji: "🌿" },
  { id: "fauna", label: "Fauna", emoji: "🦊" },
  { id: "foods", label: "Comidas", emoji: "🧉" },
  { id: "tourism", label: "Turismo", emoji: "🧭" },
  { id: "curiosity", label: "Historia", emoji: "📜" },
];

/** En pantallas chicas: fila 3+2 (más ancho para Turismo y Curiosidades) */
const TAB_MOBILE_COL_SPAN = [
  "col-span-2 sm:col-span-1",
  "col-span-2 sm:col-span-1",
  "col-span-2 sm:col-span-1",
  "col-span-3 sm:col-span-1",
  "col-span-3 sm:col-span-1",
] as const;

type Props = {
  localContent: ProvinceLocalContent;
};

export function ProvinceExploreTabs({ localContent }: Props) {
  const baseId = useId();
  const [active, setActive] = useState<TabId>("flora");

  return (
    <div className="space-y-4 text-left">
      <div
        role="tablist"
        aria-label="Secciones de la provincia"
        className="grid w-full grid-cols-6 gap-1 sm:grid-cols-5 sm:gap-2"
      >
        {TABS.map((tab, index) => {
          const selected = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`${baseId}-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${tab.id}`}
              tabIndex={0}
              onClick={() => setActive(tab.id)}
              className={`${TAB_MOBILE_COL_SPAN[index]} flex min-h-10 min-w-0 w-full cursor-pointer flex-col items-start justify-center gap-0 rounded-lg border px-1 py-1 text-left text-[10px] font-extrabold leading-none tracking-tight transition-[background-color,border-color,transform] sm:min-h-12 sm:flex-row sm:items-center sm:justify-start sm:gap-1 sm:rounded-xl sm:border-2 sm:px-2 sm:py-1.5 sm:text-sm md:text-base ${
                selected
                  ? "border-water bg-water text-white shadow-[var(--shadow-card)]"
                  : "border-heading/20 bg-surface-elevated text-heading hover:border-celeste/50"
              }`}
            >
              <span
                aria-hidden
                className="shrink-0 text-[0.95rem] leading-none sm:text-lg"
              >
                {tab.emoji}
              </span>
              <span className="min-w-0 max-w-full whitespace-normal sm:whitespace-nowrap">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {TABS.map((tab) => {
        const topicLabel =
          tab.id === "fauna"
            ? "fauna"
            : tab.id === "flora"
              ? "flora"
              : tab.id === "foods"
                ? "comidas"
                : tab.id === "tourism"
                  ? "turismo"
                  : "historia";

        const items =
          tab.id === "fauna"
            ? localContent.animals
            : tab.id === "flora"
              ? localContent.plants
              : tab.id === "foods"
                ? localContent.foods
                : tab.id === "tourism"
                  ? localContent.tourism
                  : localContent.curiosities;

        return (
          <div
            key={tab.id}
            id={`${baseId}-panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-${tab.id}`}
            hidden={active !== tab.id}
            className="w-full min-w-0 rounded-2xl border-2 border-sun/35 bg-background-warm/80 p-4 text-left shadow-[var(--shadow-card)] sm:p-5"
          >
            <ProvinceTopicGrid items={items} topicLabel={topicLabel} />
          </div>
        );
      })}
    </div>
  );
}
