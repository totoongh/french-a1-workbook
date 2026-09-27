import type { QuizItem } from "../types";

export const LOOP_CARD_LIMIT = 10;
export const LOOP_REQUIRED_STREAK = 2;

export type LoopCardState = {
  cardId: string;
  correctStreak: number;
};

export type LoopAnswerResult = {
  cards: LoopCardState[];
  completed: boolean;
  correctStreak: number;
  nextIndex: number;
};

export function createLoopCards(
  items: QuizItem[],
  limit = LOOP_CARD_LIMIT,
): LoopCardState[] {
  return items.slice(0, limit).map((item) => ({
    cardId: item.id,
    correctStreak: 0,
  }));
}

export function applyLoopAnswer(
  cards: LoopCardState[],
  currentCardId: string,
  isCorrect: boolean,
  currentIndex = 0,
): LoopAnswerResult {
  if (!cards.length) {
    return {
      cards,
      completed: false,
      correctStreak: 0,
      nextIndex: 0,
    };
  }

  const foundIndex = cards.findIndex((card) => card.cardId === currentCardId);
  const activeIndex = foundIndex >= 0 ? foundIndex : currentIndex;
  const activeCard = cards[activeIndex];

  if (!activeCard) {
    return {
      cards,
      completed: false,
      correctStreak: 0,
      nextIndex: 0,
    };
  }

  if (!isCorrect) {
    const nextCards = cards.map((card, index) =>
      index === activeIndex ? { ...card, correctStreak: 0 } : card,
    );

    return {
      cards: nextCards,
      completed: false,
      correctStreak: 0,
      nextIndex: getNextLoopIndex(activeIndex, nextCards.length),
    };
  }

  const correctStreak = activeCard.correctStreak + 1;

  if (correctStreak >= LOOP_REQUIRED_STREAK) {
    const nextCards = cards.filter((_, index) => index !== activeIndex);

    return {
      cards: nextCards,
      completed: true,
      correctStreak,
      nextIndex: nextCards.length ? activeIndex % nextCards.length : 0,
    };
  }

  const nextCards = cards.map((card, index) =>
    index === activeIndex ? { ...card, correctStreak } : card,
  );

  return {
    cards: nextCards,
    completed: false,
    correctStreak,
    nextIndex: getNextLoopIndex(activeIndex, nextCards.length),
  };
}

function getNextLoopIndex(currentIndex: number, cardCount: number) {
  if (!cardCount) {
    return 0;
  }

  return (currentIndex + 1) % cardCount;
}
