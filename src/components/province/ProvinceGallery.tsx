import Image from "next/image";

import type { ProvinceImage } from "@/types/province";

type Props = {
  images: ProvinceImage[];
};

export function ProvinceGallery({ images }: Props) {
  if (images.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-stone-300 bg-stone-50 px-4 py-6 text-sm text-stone-600 dark:border-stone-700 dark:bg-stone-900/40 dark:text-stone-400">
        Galería en preparación. Podés reemplazar esto con fotos optimizadas (WebP/AVIF)
        en <code className="rounded bg-stone-200 px-1 dark:bg-stone-800">public/</code>.
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {images.map((img, i) => (
        <li key={`${img.src}-${i}`} className="overflow-hidden rounded-xl bg-stone-100 dark:bg-stone-900">
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
