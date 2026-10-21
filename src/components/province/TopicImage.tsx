"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  placeholderEmoji: string;
  locale?: "es" | "it";
};

export function TopicImage({ src, alt, placeholderEmoji, locale = "es" }: Props) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  return (
    <div
      className={`relative w-full shrink-0 bg-background-warm ${
        status === "loaded" ? "" : "min-h-48"
      }`}
    >
      {status === "loading" && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-background-warm px-4"
          aria-hidden
        >
          <span className="animate-bounce text-4xl leading-none">{placeholderEmoji}</span>
          <p className="text-center text-sm font-bold text-heading">
            {locale === "it" ? "Caricamento foto…" : "Cargando foto…"}
          </p>
          <p className="text-center text-xs font-medium text-foreground-muted">
            {locale === "it"
              ? "Un attimo, stiamo cercando l'immagine"
              : "Un momentito, estamos buscando la imagen"}
          </p>
        </div>
      )}
      {status === "error" && (
        <div className="flex aspect-[4/3] w-full items-start justify-start px-3 pt-3 text-4xl leading-none">
          {placeholderEmoji}
        </div>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
        className={`mx-auto block h-auto max-h-60 w-auto max-w-full object-contain transition-opacity duration-300 sm:max-h-64 ${
          status === "error" ? "hidden" : status === "loaded" ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
