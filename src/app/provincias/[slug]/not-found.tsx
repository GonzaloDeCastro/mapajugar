import Link from "next/link";

import { SiteHeader } from "@/components/layout/SiteHeader";

export default function ProvinceNotFound() {
  return (
    <div className="min-h-dvh bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader />
      <main className="mx-auto max-w-lg px-4 py-16 text-center sm:px-6">
        <h1 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
          Provincia no encontrada
        </h1>
        <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
          Verificá la URL o volvé al mapa para elegir otra jurisdicción.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-emerald-800 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600"
        >
          Ir al inicio
        </Link>
      </main>
    </div>
  );
}
