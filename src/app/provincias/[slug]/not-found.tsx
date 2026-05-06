import Link from "next/link";

import { SiteHeader } from "@/components/layout/SiteHeader";

export default function ProvinceNotFound() {
  return (
    <div className="min-h-dvh text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-lg px-4 py-16 text-center sm:px-6">
        <p className="text-4xl" aria-hidden>
          🗺️
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold text-sky-deep">
          Provincia no encontrada
        </h1>
        <p className="mt-2 text-base font-semibold text-foreground-muted">
          Verificá la URL o volvé al mapa para elegir otra jurisdicción.
        </p>
        <Link
          href="/#mapa-explorar"
          className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-terracotta px-6 text-base font-extrabold text-white shadow-[var(--shadow-card)] transition-[filter,transform] hover:brightness-110 active:scale-[0.98]"
        >
          Ir al mapa
        </Link>
      </main>
    </div>
  );
}
