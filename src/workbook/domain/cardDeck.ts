import type { CardProgress, QuizItem } from "../types";

export const QUIZ_PROGRESS_KEY = "french-a1-card-progress";
export const QUIZ_DECK_BASELINE_KEY =
  "french-a1-card-deck-baseline-vocabulary-v2";
export const SENTENCE_QUIZ_PROGRESS_KEY = "french-a1-sentence-card-progress";
export const SENTENCE_QUIZ_DECK_BASELINE_KEY =
  "french-a1-card-deck-baseline-sentences-v1";

export function loadCardDeckProgress(
  storageKey = QUIZ_PROGRESS_KEY,
): Record<string, CardProgress> {
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) {
      return {};
    }

    return JSON.parse(raw) as Record<string, CardProgress>;
  } catch {
    return {};
  }
}

export function saveCardDeckProgress(
  progress: Record<string, CardProgress>,
  storageKey = QUIZ_PROGRESS_KEY,
) {
  window.localStorage.setItem(storageKey, JSON.stringify(progress));
}

export function getDeckWordCardId(lexemeId: string) {
  return `word-${lexemeId}`;
}

export function getVocabularyCardsForLexemeIds(
  quizItems: QuizItem[],
  lexemeIds: string[] = [],
): QuizItem[] {
  const wantedIds = new Set(lexemeIds.map(getDeckWordCardId));
  return quizItems.filter((item) => wantedIds.has(item.id));
}
