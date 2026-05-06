import Image from "next/image";

import type { ProvinceImage } from "@/types/province";

type Props = {
  images: ProvinceImage[];
};

export function ProvinceGallery({ images }: Props) {
  if (images.length === 0) {
    return (
      <p className="rounded-2xl border-2 border-dashed border-water/40 bg-surface px-4 py-8 text-center text-sm font-semibold text-foreground-muted">
        Galería en preparación. Podés sumar fotos optimizadas en{" "}
        <code className="rounded-lg bg-celeste/20 px-2 py-0.5 text-forest">
          public/
        </code>
        .
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {images.map((img, i) => (
        <li
          key={`${img.src}-${i}`}
          className="overflow-hidden rounded-2xl border-2 border-sky-deep/10 bg-surface-elevated shadow-[var(--shadow-card)] transition-[transform] hover:-translate-y-0.5"
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            sizes="(max-width: 640px) 100vw, 50vw"
            loading="lazy"
            decoding="async"
            className="h-auto w-full object-cover"
          />
        </li>
      ))}
    </ul>
  );
}
