"use client";

import { useId, useState } from "react";

import type { Province, ProvinceLocalContent } from "@/types/province";
import { ProvinceTopicGrid } from "./ProvinceTopicGrid";

type TabId = "flora" | "fauna" | "foods" | "tourism" | "curiosity";

const TABS: { id: TabId; label: string; emoji: string }[] = [
  { id: "flora", label: "Flora", emoji: "🌿" },
  { id: "fauna", label: "Fauna", emoji: "🦊" },
  { id: "foods", label: "Comidas", emoji: "🧉" },
  { id: "tourism", label: "Turismo", emoji: "🧭" },
  { id: "curiosity", label: "Curiosidades", emoji: "✨" },
];

type Props = {
  province: Province;
  localContent: ProvinceLocalContent;
};

export function ProvinceExploreTabs({ province, localContent }: Props) {
  const baseId = useId();
  const [active, setActive] = useState<TabId>("flora");

  const curiosityText =
    province.curiosity ??
    `¿Sabías que ${province.name} es parte del mapa vivo de Argentina? Seguí explorando para conocer más.`;

  const textContent: Record<Extract<TabId, "tourism">, string[]> = {
    tourism: province.tourism,
  };

  return (
    <div className="space-y-4">
      <div
        role="tablist"
        aria-label="Secciones de la provincia"
        className="-mx-1 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible"
      >
        {TABS.map((tab) => {
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
              className={`flex min-h-12 shrink-0 items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-extrabold transition-[background-color,border-color,transform] sm:text-base ${
                selected
                  ? "border-water bg-water text-white shadow-[var(--shadow-card)]"
                  : "border-heading/20 bg-surface-elevated text-heading hover:border-celeste/50"
              }`}
            >
              <span aria-hidden>{tab.emoji}</span>
              {tab.label}
            </button>
          );
        })}
      </div>

      {TABS.map((tab) => {
        const isDataTab =
          tab.id === "fauna" ||
          tab.id === "flora" ||
          tab.id === "foods" ||
          tab.id === "curiosity";
        const textTabId = tab.id as "tourism";
        const curiosityItems =
          localContent.curiosities.length > 0
            ? localContent.curiosities
            : [{ name: "Dato curioso", image: "", description: curiosityText }];
        return (
          <div
            key={tab.id}
            id={`${baseId}-panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-${tab.id}`}
            hidden={active !== tab.id}
            className="rounded-2xl border-2 border-sun/35 bg-background-warm/80 p-4 shadow-[var(--shadow-card)] sm:p-5"
          >
            {isDataTab ? (
              <ProvinceTopicGrid
                topicLabel={
                  tab.id === "fauna"
                    ? "fauna"
                    : tab.id === "flora"
                      ? "flora"
                      : tab.id === "foods"
                        ? "comidas"
                        : "curiosidades"
                }
                items={
                  tab.id === "fauna"
                    ? localContent.animals
                    : tab.id === "flora"
                      ? localContent.plants
                      : tab.id === "foods"
                        ? localContent.foods
                        : curiosityItems
                }
              />
            ) : (
              <ul className="space-y-3">
                {textContent[textTabId].map((place) => (
                  <li
                    key={place}
                    className="rounded-xl border border-heading/15 bg-surface px-3 py-2 text-base font-semibold leading-relaxed text-foreground sm:text-[17px]"
                  >
                    🧭 {place}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
