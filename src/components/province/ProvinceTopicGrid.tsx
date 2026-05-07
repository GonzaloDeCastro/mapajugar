import Image from "next/image";

import type { ProvinceContentItem } from "@/types/province";

type Props = {
  items: ProvinceContentItem[];
  topicLabel: "fauna" | "flora" | "comidas";
};

const EMPTY_COPY: Record<Props["topicLabel"], string> = {
  fauna:
    "Estamos preparando la fauna de esta provincia. Mientras tanto, podés seguir explorando otras secciones.",
  flora:
    "Todavía no hay imágenes de flora cargadas para esta provincia. Pronto estarán disponibles.",
  comidas:
    "Las comidas típicas de esta provincia se están cargando. Volvé pronto para descubrirlas.",
};

const EMPTY_ICON: Record<Props["topicLabel"], string> = {
  fauna: "🦊",
  flora: "🌿",
  comidas: "🧉",
};

function isLocalImage(path: string) {
  return typeof path === "string" && path.trim().startsWith("/images/");
}

export function ProvinceTopicGrid({ items, topicLabel }: Props) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-water/40 bg-surface p-5 text-center shadow-[var(--shadow-card)]">
        <p className="text-3xl" aria-hidden>
          {EMPTY_ICON[topicLabel]}
        </p>
        <p className="mt-2 text-sm font-semibold text-foreground-muted sm:text-base">
          {EMPTY_COPY[topicLabel]}
        </p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((item) => {
        const hasImage = isLocalImage(item.image);
        return (
          <li
            key={`${topicLabel}-${item.name}`}
            className="overflow-hidden rounded-2xl border-2 border-heading/15 bg-surface-elevated shadow-[var(--shadow-card)]"
          >
            {hasImage ? (
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={300}
                sizes="(max-width: 640px) 100vw, 50vw"
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center bg-background-warm text-4xl">
                {EMPTY_ICON[topicLabel]}
              </div>
            )}
            <div className="space-y-1 p-3 sm:p-4">
              <h3 className="font-display text-lg font-bold text-heading">{item.name}</h3>
              <p className="text-sm font-medium leading-relaxed text-foreground-muted">
                {item.description || "Contenido en preparación."}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

