import type { ProvinceSlug } from "@/types/province";

export type TriviaCategory = "fauna" | "flora" | "food" | "tourism" | "history";

export type TriviaQuestion = {
  id: string;
  provinceSlug: ProvinceSlug;
  category: TriviaCategory;
  prompt: string;
  choices: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation?: string;
};

export type TriviaPlayer = {
  id: string;
  name: string;
  score: number;
  totalCorrectTimeMs: number;
};

export type TriviaPhase = "lobby" | "handoff" | "playing" | "reveal" | "finished";

export type TriviaRoundsPerPlayer = 3 | 5;

export type TriviaGameState = {
  phase: TriviaPhase;
  players: TriviaPlayer[];
  roundsPerPlayer: TriviaRoundsPerPlayer;
  questionQueue: TriviaQuestion[];
  currentTurnIndex: number;
  totalTurns: number;
  currentQuestion: TriviaQuestion | null;
  questionShownAt: number | null;
  lastAnswer: {
    playerId: string;
    correct: boolean;
    timeMs: number;
  } | null;
  provincesInGame: ProvinceSlug[];
};
