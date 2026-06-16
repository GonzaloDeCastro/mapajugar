import type { ProvinceContentItem } from "@/types/province";

type Props = {
  items: ProvinceContentItem[];
  topicLabel: "fauna" | "flora" | "comidas" | "historia";
};

const EMPTY_COPY: Record<Props["topicLabel"], string> = {
  fauna:
    "Estamos preparando la fauna de esta provincia. Mientras tanto, podés seguir explorando otras secciones.",
  flora:
    "Todavía no hay imágenes de flora cargadas para esta provincia. Pronto estarán disponibles.",
  comidas:
    "Las comidas típicas de esta provincia se están cargando. Volvé pronto para descubrirlas.",
  historia:
    "Estamos preparando más historia de esta provincia para que sigas aprendiendo.",
};

const EMPTY_ICON: Record<Props["topicLabel"], string> = {
  fauna: "🦊",
  flora: "🌿",
  comidas: "🧉",
  historia: "📜",
};

function hasDisplayableImage(path: string) {
  const value = path.trim();
  return value.includes("/images/") || /^https?:\/\//i.test(value);
}

export function ProvinceTopicGrid({ items, topicLabel }: Props) {
  if (items.length === 0) {
    return (
      <div className="flex min-h-[11rem] w-full flex-col items-start justify-center gap-2 rounded-2xl border-2 border-dashed border-water/40 bg-surface px-4 py-8 text-left shadow-[var(--shadow-card)]">
        <p className="text-3xl leading-none" aria-hidden>
          {EMPTY_ICON[topicLabel]}
        </p>
        <p className="max-w-none text-sm font-semibold leading-relaxed text-foreground-muted sm:text-base">
          {EMPTY_COPY[topicLabel]}
        </p>
      </div>
    );
  }

  return (
    <ul className="grid w-full grid-cols-1 items-stretch gap-4 sm:grid-cols-2">
      {items.map((item) => {
        const hasImage = hasDisplayableImage(item.image);
        return (
          <li
            key={`${topicLabel}-${item.name}`}
            className="flex h-full min-h-0 min-w-0 flex-col overflow-hidden rounded-2xl border-2 border-heading/15 bg-surface-elevated shadow-[var(--shadow-card)]"
          >
            {hasImage ? (
              <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-background-warm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ) : (
              <div className="flex aspect-[4/3] w-full shrink-0 items-start justify-start bg-background-warm px-3 pt-3 text-4xl leading-none">
                {EMPTY_ICON[topicLabel]}
              </div>
            )}
            <div className="flex min-h-0 flex-1 flex-col gap-1 p-3 sm:p-4">
              <h3 className="font-display text-lg font-bold text-heading">{item.name}</h3>
              <p className="min-h-0 flex-1 break-words text-sm font-medium leading-relaxed text-foreground-muted">
                {item.description || "Contenido en preparación."}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

