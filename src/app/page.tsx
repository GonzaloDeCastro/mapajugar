import type { Metadata } from "next";

import { InteractiveArgentinaMap } from "@/components/map/InteractiveArgentinaMap";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Elegí una provincia en el mapa para ver flora, fauna, gastronomía y turismo.",
};

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-[var(--background)] text-[var(--foreground)]">
      <main className="box-border flex h-dvh max-h-dvh min-h-0 w-full flex-col p-2 sm:p-3">
        <InteractiveArgentinaMap className="min-h-0 flex-1" />
      </main>
    </div>
  );
}
