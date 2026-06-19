"use client";

import Link from "next/link";
import { useCallback, useEffect, useReducer, useState } from "react";

import { TRIVIA_QUESTIONS } from "@/data/trivia/trivia-questions.generated";
import {
  INITIAL_TRIVIA_STATE,
  advanceAfterReveal,
  beginTurn,
  getActivePlayer,
  getTurnLabel,
  resolveWinners,
  startGame,
  submitAnswer,
} from "@/lib/trivia/game-state";
import type { TriviaGameState, TriviaPlayer, TriviaRoundsPerPlayer } from "@/lib/trivia/types";

import { TriviaBoard } from "./TriviaBoard";
import { TriviaLobby } from "./TriviaLobby";
import { TriviaScoreboard } from "./TriviaScoreboard";
import { TriviaWinner } from "./TriviaWinner";

type Action =
  | { type: "START"; players: TriviaPlayer[]; rounds: TriviaRoundsPerPlayer }
  | { type: "BEGIN_TURN" }
  | { type: "ANSWER"; choiceIndex: number }
  | { type: "ADVANCE" }
  | { type: "RESET" };

function reducer(state: TriviaGameState, action: Action): TriviaGameState {
  switch (action.type) {
    case "START":
      return startGame(INITIAL_TRIVIA_STATE, action.players, action.rounds, TRIVIA_QUESTIONS);
    case "BEGIN_TURN":
      return beginTurn(state);
    case "ANSWER":
      return submitAnswer(state, action.choiceIndex);
    case "ADVANCE":
      return advanceAfterReveal(state);
    case "RESET":
      return { ...INITIAL_TRIVIA_STATE };
    default:
      return state;
  }
}

export function TriviaGame() {
  const [state, dispatch] = useReducer(reducer, INITIAL_TRIVIA_STATE);
  const [, tick] = useState(0);

  useEffect(() => {
    if (state.phase !== "playing") return;
    const id = window.setInterval(() => tick((n) => n + 1), 200);
    return () => window.clearInterval(id);
  }, [state.phase]);

  useEffect(() => {
    if (state.phase === "handoff") {
      const t = window.setTimeout(() => dispatch({ type: "BEGIN_TURN" }), 1400);
      return () => window.clearTimeout(t);
    }
    if (state.phase === "reveal") {
      const t = window.setTimeout(() => dispatch({ type: "ADVANCE" }), 2200);
      return () => window.clearTimeout(t);
    }
  }, [state.phase, state.currentTurnIndex]);

  const handleStart = useCallback((players: TriviaPlayer[], rounds: TriviaRoundsPerPlayer) => {
    dispatch({ type: "START", players, rounds });
  }, []);

  const active = getActivePlayer(state);
  const winners = resolveWinners(state);

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-8">
      <header className="text-center">
        <h1 className="font-display text-3xl font-bold text-heading sm:text-4xl">
          Trivia de provincias
        </h1>
        <p className="mt-2 text-base font-medium text-foreground-muted">
          Preguntas al azar sobre flora, fauna, comidas, turismo e historia.
        </p>
      </header>

      {state.phase === "lobby" ? <TriviaLobby onStart={handleStart} /> : null}

      {state.phase === "handoff" && active ? (
        <div
          className="flex min-h-[280px] flex-col items-center justify-center rounded-3xl border-2 border-sun/40 bg-sun/15 p-8 text-center"
          role="status"
          aria-live="polite"
        >
          <p className="text-5xl" aria-hidden>
            👋
          </p>
          <p className="mt-4 font-display text-2xl font-bold text-heading">
            ¡Le toca a {active.name}!
          </p>
          <p className="mt-2 text-sm font-medium text-foreground-muted">
            {getTurnLabel(state)}
          </p>
        </div>
      ) : null}

      {state.phase === "playing" && active && state.currentQuestion && state.questionShownAt ? (
        <div className="grid gap-6 lg:grid-cols-[1fr_minmax(12rem,16rem)]">
          <TriviaBoard
            playerName={active.name}
            turnLabel={getTurnLabel(state)}
            question={state.currentQuestion}
            questionShownAt={state.questionShownAt}
            onAnswer={(choiceIndex) => dispatch({ type: "ANSWER", choiceIndex })}
          />
          <TriviaScoreboard players={state.players} activePlayerId={active.id} />
        </div>
      ) : null}

      {state.phase === "reveal" && state.lastAnswer && state.currentQuestion ? (
        <div
          className="rounded-3xl border-2 border-heading/15 bg-surface-elevated p-8 text-center"
          role="status"
          aria-live="polite"
        >
          <p className="text-5xl" aria-hidden>
            {state.lastAnswer.correct ? "✅" : "💡"}
          </p>
          <p className="mt-4 text-xl font-extrabold text-heading">
            {state.lastAnswer.correct
              ? `¡Correcto! +1 punto (${(state.lastAnswer.timeMs / 1000).toFixed(1)} s)`
              : "¡Casi! La respuesta correcta era:"}
          </p>
          {!state.lastAnswer.correct ? (
            <p className="mt-2 text-lg font-bold text-water">
              {state.currentQuestion.choices[state.currentQuestion.correctIndex]}
            </p>
          ) : null}
          {state.currentQuestion.explanation ? (
            <p className="mt-3 text-sm font-medium text-foreground-muted">
              {state.currentQuestion.explanation}
            </p>
          ) : null}
        </div>
      ) : null}

      {state.phase === "finished" && winners[0] ? (
        <TriviaWinner
          winners={winners[0].players}
          shared={winners[0].shared}
          onPlayAgain={() => dispatch({ type: "RESET" })}
        />
      ) : null}

      {state.phase === "reveal" || state.phase === "handoff" ? (
        <TriviaScoreboard players={state.players} activePlayerId={active?.id} />
      ) : null}

      <p className="text-center">
        <Link
          href="/mapa"
          className="text-sm font-bold text-water underline-offset-2 hover:underline"
        >
          Volver al mapa
        </Link>
      </p>
    </div>
  );
}
