"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/#mapa-explorar", label: "Mapa" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] border-b border-white/15 bg-sky-deep text-white shadow-[var(--shadow-card)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-white sm:text-xl"
        >
          Mapa Jugar
        </Link>
        <nav
          className="hidden items-center gap-1 sm:flex"
          aria-label="Principal"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2.5 text-sm font-bold text-white/90 transition-colors hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#mapa-explorar"
            className="ml-1 min-h-12 rounded-full bg-sun px-5 py-2.5 text-center text-sm font-extrabold text-sky-deep shadow-[var(--shadow-card)] transition-[filter] hover:brightness-110"
          >
            ¡Explorar!
          </Link>
        </nav>
        <button
          type="button"
          className="flex h-12 min-w-12 items-center justify-center rounded-xl bg-white/15 sm:hidden"
          aria-expanded={open}
          aria-controls="site-mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menú</span>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            className="text-white"
            aria-hidden
          >
            {open ? (
              <>
                <path d="M6 6l12 12M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>
      {open ? (
        <div
          id="site-mobile-nav"
          className="border-t border-white/10 px-4 pb-4 sm:hidden"
        >
          <ul className="mt-3 flex flex-col gap-2">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-12 items-center rounded-2xl bg-white/10 px-4 text-base font-bold"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#mapa-explorar"
                className="flex min-h-12 items-center justify-center rounded-2xl bg-sun px-4 text-base font-extrabold text-sky-deep"
                onClick={() => setOpen(false)}
              >
                ¡Explorar el mapa!
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
