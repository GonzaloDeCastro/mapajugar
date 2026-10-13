import type { Metadata } from "next";

import { MapExplorerFrame } from "@/components/map/MapExplorerFrame";

export const metadata: Metadata = {
  title: "Mapa de Argentina",
  description:
    "Mapa interactivo de Argentina en tamaño amplio: tocá cada provincia para explorar.",
};

export default function ArgentinaMapPage() {
  return (
    <MapExplorerFrame
      variant="fullPage"
      chooserHref="/mapa"
      chooserLabel="Países"
    />
  );
}
