import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { TriviaGame } from "@/components/trivia/TriviaGame";

export const metadata: Metadata = {
  title: "Trivia",
  description:
    "Jugá la trivia de provincias argentinas: hasta 4 jugadores, puntos y premio descargable.",
};

export default function TriviaPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-dvh bg-background">
        <TriviaGame />
      </main>
    </>
  );
}
