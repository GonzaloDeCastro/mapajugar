import type { Metadata } from "next";

import { MapExplorerFrame } from "@/components/map/MapExplorerFrame";

export const metadata: Metadata = {
  title: "Mapa grande",
  description:
    "Mapa interactivo de Argentina en tamaño amplio: tocá cada provincia para explorar.",
};

export default function MapaPage() {
  return <MapExplorerFrame variant="fullPage" />;
}
