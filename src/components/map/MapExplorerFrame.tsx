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
      {variant === "home" ? (
        <Link
          href="/mapa"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-water px-5 text-sm font-extrabold text-white shadow-[var(--shadow-card)] transition-[filter,transform] hover:brightness-110 active:scale-[0.98]"
        >
          Mapa grande
        </Link>
      ) : null}
      {supported ? (
        <button
          type="button"
          onClick={() => void toggle()}
          className={`inline-flex min-h-12 items-center justify-center rounded-full border-2 px-5 text-sm font-extrabold transition-[filter,transform] active:scale-[0.98] ${
            variant === "fullPage"
              ? "border-sun bg-sun text-sun-ink hover:brightness-110"
              : "border-heading/25 bg-surface-elevated text-heading hover:border-celeste/60"
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
        <div className="relative min-h-0 flex-1 p-2 sm:p-3">
          <div className="pointer-events-none absolute inset-x-3 top-3 z-30 flex justify-end sm:inset-x-4 sm:top-4">
            <div className="pointer-events-auto">{toolbar}</div>
          </div>
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
