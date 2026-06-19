"use client";

import { useState } from "react";

import { pickRewardForProvinces } from "@/data/trivia/reward-manifest";
import { downloadTriviaCertificate } from "@/lib/trivia/download-certificate";
import type { TriviaPlayer } from "@/lib/trivia/types";
import type { ProvinceSlug } from "@/types/province";

type Props = {
  winners: TriviaPlayer[];
  shared: boolean;
  provincesInGame: ProvinceSlug[];
  onPlayAgain: () => void;
};

export function TriviaWinner({
  winners,
  shared,
  provincesInGame,
  onPlayAgain,
}: Props) {
  const [downloading, setDownloading] = useState(false);
  const reward = pickRewardForProvinces(
    provincesInGame.length ? provincesInGame : ["buenos-aires"],
  );

  const handleDownload = async (player: TriviaPlayer) => {
    setDownloading(true);
    try {
      await downloadTriviaCertificate(player, reward);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="mx-auto max-w-lg space-y-6 rounded-3xl border-2 border-sun/50 bg-surface-elevated p-6 text-center shadow-[var(--shadow-elevated)]">
      <p className="text-5xl leading-none" aria-hidden>
        🏆
      </p>
      <h2 className="font-display text-3xl font-bold text-heading">
        {shared && winners.length > 1 ? "¡Empate! Ganadores" : "¡Ganador!"}
      </h2>
      <ul className="space-y-2">
        {winners.map((w) => (
          <li key={w.id} className="text-xl font-extrabold text-heading">
            {w.name} — {w.score} punto{w.score === 1 ? "" : "s"}
          </li>
        ))}
      </ul>
      <p className="text-sm font-medium text-foreground-muted">
        Premio: {reward.label}. Descargá tu certificado con el dibujo.
      </p>
      <div className="flex flex-col gap-3">
        {winners.map((w) => (
          <button
            key={w.id}
            type="button"
            disabled={downloading}
            onClick={() => void handleDownload(w)}
            className="min-h-12 rounded-2xl bg-water px-4 text-sm font-extrabold text-white shadow-[var(--shadow-card)] hover:brightness-110 disabled:opacity-60"
          >
            Descargar premio de {w.name}
          </button>
        ))}
        <button
          type="button"
          onClick={onPlayAgain}
          className="min-h-12 rounded-2xl border-2 border-heading/20 bg-background-warm text-sm font-extrabold text-heading"
        >
          Jugar de nuevo
        </button>
      </div>
    </div>
  );
}
