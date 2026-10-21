import type { Metadata } from "next";

import { InteractiveSicilyMap } from "@/components/map/InteractiveSicilyMap";
import { MapExplorerFrame } from "@/components/map/MapExplorerFrame";

export const metadata: Metadata = {
  title: "Mappa della Sicilia",
  description:
    "Mappa interattiva della Sicilia: tocca una provincia per scoprire animali, cucina, luoghi e storia.",
  openGraph: { locale: "it_IT" },
};

export default function SicilyMapPage() {
  return (
    <MapExplorerFrame
      variant="fullPage"
      map={<InteractiveSicilyMap className="min-h-0 sm:flex-1 sm:min-h-0" />}
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
