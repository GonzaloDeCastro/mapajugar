"use client";

import type { TriviaQuestion } from "@/lib/trivia/types";

const CATEGORY_EMOJI: Record<TriviaQuestion["category"], string> = {
  fauna: "🦊",
  flora: "🌿",
  food: "🧉",
  tourism: "🧭",
  history: "📜",
};

type Props = {
  playerName: string;
  turnLabel: string;
  question: TriviaQuestion;
  questionShownAt: number;
  disabled?: boolean;
  onAnswer: (index: number) => void;
};

export function TriviaBoard({
  playerName,
  turnLabel,
  question,
  questionShownAt,
  disabled,
  onAnswer,
}: Props) {
  const elapsed = Math.max(0, Date.now() - questionShownAt);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-extrabold uppercase tracking-wide text-water">{turnLabel}</p>
        <p className="rounded-full bg-sun/25 px-3 py-1 text-sm font-bold text-heading">
          Turno de {playerName}
        </p>
      </div>

      <div className="rounded-2xl border-2 border-celeste/40 bg-surface-elevated p-5 shadow-[var(--shadow-card)]">
        <p className="mb-2 text-3xl leading-none" aria-hidden>
          {CATEGORY_EMOJI[question.category]}
        </p>
        <p className="text-lg font-bold leading-snug text-heading sm:text-xl">{question.prompt}</p>
        <p className="mt-2 text-xs font-semibold text-foreground-muted" aria-live="polite">
          Tiempo: {(elapsed / 1000).toFixed(1)} s
        </p>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2">
        {question.choices.map((choice, index) => (
          <li key={`${question.id}-${index}`}>
            <button
              type="button"
              disabled={disabled}
              onClick={() => onAnswer(index)}
              className="flex min-h-14 w-full cursor-pointer items-center justify-center rounded-2xl border-2 border-heading/15 bg-background-warm px-4 py-3 text-center text-base font-extrabold text-heading transition hover:border-water hover:bg-surface active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {choice}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
