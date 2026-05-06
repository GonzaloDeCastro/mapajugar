"use client";

import Link from "next/link";
import { useRef } from "react";

import { useFullscreen } from "@/hooks/use-fullscreen";

import { InteractiveArgentinaMap } from "./InteractiveArgentinaMap";

type Variant = "home" | "fullPage";

type Props = {
  variant: Variant;
  /** Altura mínima del mapa en la home (clase Tailwind) */
  mapMinHeightClass?: string;
};

export function MapExplorerFrame({
  variant,
  mapMinHeightClass = "min-h-[min(68vh,540px)] sm:min-h-[min(72vh,620px)]",
}: Props) {
  const shellRef = useRef<HTMLDivElement>(null);
  const { active, toggle, supported } = useFullscreen(shellRef);

  const toolbar = (
    <div
      className={`flex flex-wrap items-center gap-2 ${variant === "fullPage" ? "justify-between" : ""}`}
    >
      {variant === "fullPage" ? (
        <Link
          href="/"
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white/15 px-4 text-sm font-extrabold text-white transition hover:bg-white/25"
        >
          <span aria-hidden>←</span> Volver al inicio
        </Link>
      ) : (
        <Link
          href="/mapa"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-water px-5 text-sm font-extrabold text-white shadow-[var(--shadow-card)] transition-[filter,transform] hover:brightness-110 active:scale-[0.98]"
        >
          Mapa grande
        </Link>
      )}
      {supported ? (
        <button
          type="button"
          onClick={() => void toggle()}
          className={`inline-flex min-h-12 items-center justify-center rounded-full border-2 px-5 text-sm font-extrabold transition-[filter,transform] active:scale-[0.98] ${
            variant === "fullPage"
              ? "border-sun bg-sun text-sky-deep hover:brightness-110"
              : "border-sky-deep/20 bg-surface-elevated text-sky-deep hover:border-celeste/60"
          }`}
        >
          {active ? "Salir de pantalla completa" : "Pantalla completa"}
        </button>
      ) : null}
      {variant === "home" && !supported ? (
        <span className="text-xs font-bold text-foreground-muted">
          Tip: en este dispositivo usá &quot;Mapa grande&quot; para verlo más cómodo.
        </span>
      ) : null}
    </div>
  );

  if (variant === "fullPage") {
    return (
      <div className="flex h-dvh flex-col overflow-hidden bg-sky-deep text-white">
        <div className="shrink-0 border-b border-white/15 px-3 py-3 sm:px-4">
          <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-celeste/90">
                Mapa Jugar
              </p>
              <h1 className="font-display text-lg font-bold sm:text-xl">
                Explorá el mapa
              </h1>
            </div>
            {toolbar}
          </div>
        </div>
        <div className="min-h-0 flex-1 p-2 sm:p-3">
          <div
            ref={shellRef}
            className="mx-auto flex h-full w-full max-w-[1800px] min-h-0 flex-col overflow-hidden rounded-2xl border-2 border-celeste/40 bg-surface p-2 sm:rounded-3xl sm:p-3"
          >
            <InteractiveArgentinaMap className="min-h-0 flex-1" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-0 flex-col gap-3">
      {toolbar}
      <div
        ref={shellRef}
        className="overflow-hidden rounded-3xl border-2 border-celeste/35 bg-surface p-2 shadow-[var(--shadow-elevated)] sm:p-3"
      >
        <InteractiveArgentinaMap className={mapMinHeightClass} />
      </div>
    </div>
  );
}
