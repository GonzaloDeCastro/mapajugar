import type { Metadata } from "next";

import { InteractiveItalyMap } from "@/components/map/InteractiveItalyMap";
import { MapExplorerFrame } from "@/components/map/MapExplorerFrame";

export const metadata: Metadata = {
  title: "Mappa dell'Italia",
  description:
    "Mappa interattiva dell'Italia: tocca una regione per scoprire natura, cucina, luoghi e storia.",
  openGraph: { locale: "it_IT" },
};

export default function ItalyMapPage() {
  return (
    <MapExplorerFrame
      variant="fullPage"
      map={<InteractiveItalyMap className="min-h-0 sm:flex-1 sm:min-h-0" />}
      showTrivia={false}
      chooserHref="/mapa"
      chooserLabel="Paesi"
      labels={{
        fullscreenEnter: "Schermo intero",
        fullscreenExit: "Esci da schermo intero",
      }}
    />
  );
}
