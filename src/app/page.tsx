import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { MapExplorerFrame } from "@/components/map/MapExplorerFrame";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Elegí una provincia en el mapa para ver flora, fauna, gastronomía y turismo.",
};

export default function HomePage() {
  return (
    <div className="min-h-dvh text-foreground">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pb-10 pt-4 sm:gap-8 sm:px-6 sm:pt-6">
        <section
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-deep via-water to-forest px-5 py-8 text-white shadow-[var(--shadow-elevated)] sm:px-10 sm:py-10"
          aria-labelledby="home-hero-title"
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sun/25 blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-10 left-10 h-40 w-40 rounded-full bg-celeste/30 blur-2xl"
            aria-hidden
          />
          <p className="relative text-sm font-bold uppercase tracking-wider text-celeste/95">
            Atlas interactivo
          </p>
          <h1
            id="home-hero-title"
            className="relative mt-2 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
          >
            Descubrí Argentina
          </h1>
          <p className="relative mt-3 max-w-xl text-base font-semibold leading-relaxed text-white/90 sm:text-lg">
            Tocá el mapa, elegí una provincia y explorá naturaleza, sabores y
            lugares para visitar. ¡Vamos de viaje sin salir de la pantalla!
          </p>
          <div className="relative mt-6 flex flex-wrap gap-3">
            <Link
              href="#mapa-explorar"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-sun px-6 text-base font-extrabold text-sky-deep shadow-[var(--shadow-card)] transition-[filter,transform] hover:brightness-110 active:scale-[0.98]"
            >
              ¡Ir al mapa!
            </Link>
            <Link
              href="/mapa"
              className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-white/80 bg-white/10 px-6 text-base font-extrabold text-white backdrop-blur-sm transition-[filter,transform] hover:bg-white/20 active:scale-[0.98]"
            >
              Mapa en pantalla grande
            </Link>
            <p className="flex min-h-14 items-center text-sm font-semibold text-white/80">
              Tip: en el celular, usá el dedo para elegir.
            </p>
          </div>
        </section>

        <section
          id="mapa-explorar"
          className="flex min-h-0 flex-col gap-3 scroll-mt-[5.5rem]"
          aria-labelledby="mapa-explorar-title"
        >
          <div className="flex flex-wrap items-end justify-between gap-2">
            <h2
              id="mapa-explorar-title"
              className="font-display text-xl font-bold text-sky-deep sm:text-2xl"
            >
              Mapa por provincias
            </h2>
            <span className="rounded-full bg-pampa/25 px-3 py-1 text-xs font-extrabold text-forest">
              Modo exploración
            </span>
          </div>
          <MapExplorerFrame variant="home" />
        </section>

        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Ideas para explorar"
        >
          {[
            {
              title: "Naturaleza",
              text: "Flora y fauna en cada región del país.",
              emoji: "🌿",
              border: "border-pampa/40",
            },
            {
              title: "Sabores",
              text: "Comidas típicas para conocer de otra forma.",
              emoji: "🧉",
              border: "border-sun/50",
            },
            {
              title: "Turismo",
              text: "Destinos para soñar el próximo viaje.",
              emoji: "🧭",
              border: "border-water/40",
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl border-2 ${card.border} bg-surface-elevated/90 p-4 shadow-[var(--shadow-card)] transition-[transform] hover:-translate-y-0.5`}
            >
              <p className="text-2xl" aria-hidden>
                {card.emoji}
              </p>
              <h3 className="mt-2 font-display text-lg font-bold text-sky-deep">
                {card.title}
              </h3>
              <p className="mt-1 text-sm font-semibold text-foreground-muted">
                {card.text}
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
