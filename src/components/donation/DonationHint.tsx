"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

type Props = {
  paypalUrl?: string;
  qrPath: string;
};

export function DonationHint({ paypalUrl, qrPath }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed bottom-3 left-3 z-[60] sm:bottom-4 sm:left-4"
    >
      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-labelledby={`${panelId}-title`}
          className="pointer-events-auto mb-2 w-[min(18rem,calc(100vw-1.5rem))] rounded-2xl border border-white/20 bg-sky-deep/95 p-4 text-white shadow-[var(--shadow-elevated)] backdrop-blur-md"
        >
          <div className="flex items-start justify-between gap-3">
            <p
              id={`${panelId}-title`}
              className="text-sm font-semibold leading-snug text-white/95"
            >
              Si te sirve Mapa Jugar, podés apoyar el proyecto con una donación
              voluntaria.
            </p>
            <button
              type="button"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-lg leading-none transition hover:bg-white/20"
              aria-label="Cerrar"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="shrink-0 self-center rounded-xl bg-white p-2">
              <Image
                src={qrPath}
                alt="Código QR para donar"
                width={112}
                height={112}
                className="h-28 w-28 object-contain"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <p className="text-xs font-bold text-white/75">
                {paypalUrl
                  ? "Escaneá el QR o usá PayPal:"
                  : "Escaneá el QR para donar:"}
              </p>
              {paypalUrl ? (
                <a
                  href={paypalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center justify-center rounded-full bg-sun px-4 text-center text-sm font-extrabold text-sun-ink shadow-[var(--shadow-card)] transition hover:brightness-110"
                >
                  Donar con PayPal
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-label="Apoyar el proyecto"
        className="pointer-events-auto inline-flex h-10 items-center gap-1.5 rounded-full border border-white/25 bg-sky-deep/80 px-3 text-xs font-bold text-white shadow-[var(--shadow-card)] backdrop-blur-md transition hover:bg-sky-deep/95 sm:h-11 sm:gap-2 sm:px-4 sm:text-sm"
        onClick={() => setOpen((value) => !value)}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
          className="text-sun"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <span className="hidden sm:inline">Apoyar</span>
      </button>
    </div>
  );
}
