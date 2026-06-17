"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  placeholderEmoji: string;
};

export function TopicImage({ src, alt, placeholderEmoji }: Props) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  return (
    <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-background-warm">
      {status === "loading" && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-background-warm px-4"
          aria-hidden
        >
          <span className="animate-bounce text-4xl leading-none">{placeholderEmoji}</span>
          <p className="text-center text-sm font-bold text-heading">Cargando foto…</p>
          <p className="text-center text-xs font-medium text-foreground-muted">
            Un momentito, estamos buscando la imagen
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
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
          status === "loaded" ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
