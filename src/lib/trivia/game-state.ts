import type {
  TriviaGameState,
  TriviaPlayer,
  TriviaQuestion,
  TriviaRoundsPerPlayer,
} from "./types";

export const INITIAL_TRIVIA_STATE: TriviaGameState = {
  phase: "lobby",
  players: [],
  roundsPerPlayer: 3,
  questionQueue: [],
  currentTurnIndex: 0,
  totalTurns: 0,
  currentQuestion: null,
  questionShownAt: null,
  lastAnswer: null,
  provincesInGame: [],
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function createPlayer(name: string, index: number): TriviaPlayer {
  return {
    id: `p-${index}-${name.trim().toLowerCase().replace(/\s+/g, "-")}`,
    name: name.trim(),
    score: 0,
    totalCorrectTimeMs: 0,
  };
}

export function buildQuestionQueue(
  pool: TriviaQuestion[],
  totalTurns: number,
): TriviaQuestion[] {
  if (pool.length < totalTurns) {
    const extra = shuffle([...pool]);
    const queue: TriviaQuestion[] = [];
    while (queue.length < totalTurns) {
      queue.push(...extra);
    }
    return queue.slice(0, totalTurns);
  }
  return shuffle([...pool]).slice(0, totalTurns);
}

export function getActivePlayer(state: TriviaGameState): TriviaPlayer | null {
  if (!state.players.length) return null;
  return state.players[state.currentTurnIndex % state.players.length] ?? null;
}

export function startGame(
  state: TriviaGameState,
  players: TriviaPlayer[],
  roundsPerPlayer: TriviaRoundsPerPlayer,
  pool: TriviaQuestion[],
): TriviaGameState {
  const totalTurns = players.length * roundsPerPlayer;
  const questionQueue = buildQuestionQueue(pool, totalTurns);
  return {
    ...state,
    phase: "handoff",
    players,
    roundsPerPlayer,
    questionQueue,
    currentTurnIndex: 0,
    totalTurns,
    currentQuestion: null,
    questionShownAt: null,
    lastAnswer: null,
    provincesInGame: [],
  };
}

export function beginTurn(state: TriviaGameState): TriviaGameState {
  const turnNumber = state.currentTurnIndex;
  if (turnNumber >= state.totalTurns) {
    return { ...state, phase: "finished", currentQuestion: null };
  }
  const currentQuestion = state.questionQueue[turnNumber] ?? null;
  if (!currentQuestion) {
    return { ...state, phase: "finished", currentQuestion: null };
  }
  const provincesInGame = state.provincesInGame.includes(currentQuestion.provinceSlug)
    ? state.provincesInGame
    : [...state.provincesInGame, currentQuestion.provinceSlug];
  return {
    ...state,
    phase: "playing",
    currentQuestion,
    questionShownAt: Date.now(),
    lastAnswer: null,
    provincesInGame,
  };
}

export function submitAnswer(
  state: TriviaGameState,
  choiceIndex: number,
): TriviaGameState {
  const player = getActivePlayer(state);
  const question = state.currentQuestion;
  if (!player || !question || state.phase !== "playing" || state.questionShownAt === null) {
    return state;
  }
  const correct = choiceIndex === question.correctIndex;
  const timeMs = Math.max(0, Date.now() - state.questionShownAt);
  const players = state.players.map((p) => {
    if (p.id !== player.id) return p;
    return {
      ...p,
      score: correct ? p.score + 1 : p.score,
      totalCorrectTimeMs: correct ? p.totalCorrectTimeMs + timeMs : p.totalCorrectTimeMs,
    };
  });
  return {
    ...state,
    phase: "reveal",
    players,
    lastAnswer: { playerId: player.id, correct, timeMs },
  };
}

export function advanceAfterReveal(state: TriviaGameState): TriviaGameState {
  const nextTurn = state.currentTurnIndex + 1;
  if (nextTurn >= state.totalTurns) {
    return {
      ...state,
      phase: "finished",
      currentTurnIndex: nextTurn,
      currentQuestion: null,
      questionShownAt: null,
    };
  }
  return {
    ...state,
    phase: "handoff",
    currentTurnIndex: nextTurn,
    currentQuestion: null,
    questionShownAt: null,
    lastAnswer: null,
  };
}

export type TriviaWinner = {
  players: TriviaPlayer[];
  shared: boolean;
};

export function resolveWinners(state: TriviaGameState): TriviaWinner[] {
  if (!state.players.length) return [];
  const maxScore = Math.max(...state.players.map((p) => p.score));
  const top = state.players.filter((p) => p.score === maxScore);
  const minTime = Math.min(...top.map((p) => p.totalCorrectTimeMs));
  const winners = top.filter((p) => p.totalCorrectTimeMs === minTime);
  return [{ players: winners, shared: winners.length > 1 }];
}

export function getTurnLabel(state: TriviaGameState): string {
  const turn = state.currentTurnIndex + 1;
  return `Turno ${turn} de ${state.totalTurns}`;
}
