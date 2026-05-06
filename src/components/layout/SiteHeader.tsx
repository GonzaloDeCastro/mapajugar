import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-stone-200/80 bg-white/80 backdrop-blur-sm dark:border-stone-800 dark:bg-stone-950/80">
      <div className="mx-auto flex max-w-5xl items-center px-4 py-2.5 sm:px-6">
        <Link
          href="/"
          className="text-sm font-medium text-emerald-800 underline-offset-4 hover:underline dark:text-emerald-200"
        >
          Inicio
        </Link>
      </div>
    </header>
  );
}
