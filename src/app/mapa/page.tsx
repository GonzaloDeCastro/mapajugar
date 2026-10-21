import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Elegí un mapa",
  description:
    "Elegí Argentina, Italia o las provincias de Sicilia y explorá naturaleza, comidas, lugares e historia.",
};

const COUNTRIES = [
  {
    href: "/mapa/argentina",
    name: "Argentina",
    flag: "🇦🇷",
    blurb: "Provincias, Malvinas, flora, fauna, comidas y trivia.",
  },
  {
    href: "/mapa/italia",
    name: "Italia",
    flag: "🇮🇹",
    blurb: "Le venti regioni, in italiano: natura, cucina, luoghi e storia.",
  },
  {
    href: "/mapa/sicilia",
    name: "Sicilia",
    flag: "🏝️",
    blurb:
      "Las nueve provincias, en italiano: animales, comidas, lugares e historia.",
  },
] as const;

export default function CountryPickerPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-sky-deep text-white">
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-4 py-10 sm:px-6">
        <p className="font-display text-sm font-bold uppercase tracking-wide text-sun">
          Mapa Jugar
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Elegí un mapa
        </h1>
        <p className="mt-3 max-w-xl text-base font-semibold text-white/80 sm:text-lg">
          Tocá un mapa y explorá sus regiones o provincias: naturaleza, comidas,
          lugares e historia.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COUNTRIES.map((country) => (
            <li key={country.href}>
              <Link
                href={country.href}
                className="flex h-full min-h-40 flex-col justify-between rounded-3xl border-2 border-white/25 bg-white/10 p-6 shadow-[var(--shadow-card)] transition-[transform,background-color,border-color] hover:border-sun hover:bg-white/15 active:scale-[0.99]"
              >
                <span className="text-5xl" aria-hidden>
                  {country.flag}
                </span>
                <span className="mt-6 block">
                  <span className="font-display text-3xl font-bold">
                    {country.name}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-white/75">
                    {country.blurb}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link
            href="/trivia"
            className="text-sm font-bold text-sun underline-offset-2 hover:underline"
          >
            Trivia de Argentina
          </Link>
        </p>
      </main>
    </div>
  );
}
