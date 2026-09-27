import type { CardProgress, LeitnerBox, QuizItem } from "../types";

const BOX_INTERVALS: Record<LeitnerBox, number> = {
  1: 10 * 60 * 1000,
  2: 24 * 60 * 60 * 1000,
  3: 3 * 24 * 60 * 60 * 1000,
  4: 7 * 24 * 60 * 60 * 1000,
  5: 14 * 24 * 60 * 60 * 1000,
};

export function createInitialCardProgress(
  cardId: string,
  now = Date.now(),
): CardProgress {
  return {
    cardId,
    box: 1,
    dueAt: now,
    addedAt: now,
    correctCount: 0,
    wrongCount: 0,
  };
}

export function getCardProgress(
  progress: Record<string, CardProgress>,
  cardId: string,
  now = Date.now(),
): CardProgress {
  return progress[cardId] ?? createInitialCardProgress(cardId, now);
}

export function addMissingCardsToProgress(
  items: QuizItem[],
  progress: Record<string, CardProgress>,
  now = Date.now(),
): Record<string, CardProgress> {
  const nextProgress = { ...progress };

  for (const item of items) {
    if (!nextProgress[item.id]) {
      nextProgress[item.id] = createInitialCardProgress(item.id, now);
    }
  }

  return nextProgress;
}

export function gradeCardProgress(
  current: CardProgress,
  isCorrect: boolean,
  now = Date.now(),
): CardProgress {
  if (!isCorrect) {
    return {
      ...current,
      box: 1,
      dueAt: now + BOX_INTERVALS[1],
      wrongCount: current.wrongCount + 1,
      lastSeenAt: now,
    };
  }

  const nextBox = Math.min(current.box + 1, 5) as LeitnerBox;

  return {
    ...current,
    box: nextBox,
    dueAt: now + BOX_INTERVALS[nextBox],
    correctCount: current.correctCount + 1,
    lastSeenAt: now,
  };
}

export function keepCardInCurrentBox(
  current: CardProgress,
  now = Date.now(),
): CardProgress {
  return {
    ...current,
    dueAt: now + BOX_INTERVALS[current.box],
    lastSeenAt: now,
  };
}

export function markCardWrongInCurrentBox(
  current: CardProgress,
  now = Date.now(),
): CardProgress {
  return {
    ...current,
    dueAt: now,
    wrongCount: current.wrongCount + 1,
    lastSeenAt: now,
  };
}

export function selectNextCard({
  items,
  progress,
  currentCardId,
  shuffle = false,
  random = Math.random,
  now = Date.now(),
}: {
  items: QuizItem[];
  progress: Record<string, CardProgress>;
  currentCardId?: string;
  shuffle?: boolean;
  random?: () => number;
  now?: number;
}): QuizItem | undefined {
  if (!items.length) {
    return undefined;
  }

  const otherItems =
    items.length > 1
      ? items.filter((item) => item.id !== currentCardId)
      : items;

  if (shuffle) {
    return chooseCard(otherItems, random);
  }

  const dueItems = otherItems
    .filter((item) => getCardProgress(progress, item.id, now).dueAt <= now)
    .sort(compareByPriority(progress, now));

  if (dueItems.length) {
    return dueItems[0];
  }

  const unseenItems = otherItems.filter((item) => !progress[item.id]);
  if (unseenItems.length) {
    return unseenItems[0];
  }

  return [...otherItems].sort(compareByPriority(progress, now))[0];
}

function chooseCard(items: QuizItem[], random: () => number): QuizItem | undefined {
  const index = Math.min(items.length - 1, Math.floor(random() * items.length));
  return items[index];
}

export function filterCardsByBox(
  items: QuizItem[],
  progress: Record<string, CardProgress>,
  box: LeitnerBox,
  now = Date.now(),
): QuizItem[] {
  return items.filter((item) => getCardProgress(progress, item.id, now).box === box);
}

export function filterDueCards(
  items: QuizItem[],
  progress: Record<string, CardProgress>,
  now = Date.now(),
): QuizItem[] {
  return items.filter((item) => getCardProgress(progress, item.id, now).dueAt <= now);
}

export function filterNewCards(
  items: QuizItem[],
  progress: Record<string, CardProgress>,
): QuizItem[] {
  return items.filter((item) => !progress[item.id]?.lastSeenAt);
}

export function countCardsByBox(
  items: QuizItem[],
  progress: Record<string, CardProgress>,
  now = Date.now(),
): Record<LeitnerBox, number> {
  return items.reduce(
    (counts, item) => {
      const box = getCardProgress(progress, item.id, now).box;
      return {
        ...counts,
        [box]: counts[box] + 1,
      };
    },
    { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } as Record<LeitnerBox, number>,
  );
}

export function countCardsStudiedSince(
  progress: Record<string, CardProgress>,
  since: number,
): number {
  return Object.values(progress).filter(
    (cardProgress) =>
      cardProgress.lastSeenAt !== undefined && cardProgress.lastSeenAt >= since,
  ).length;
}

function compareByPriority(
  progress: Record<string, CardProgress>,
  now: number,
) {
  return (a: QuizItem, b: QuizItem) => {
    const progressA = getCardProgress(progress, a.id, now);
    const progressB = getCardProgress(progress, b.id, now);

    if (progressA.dueAt !== progressB.dueAt) {
      return progressA.dueAt - progressB.dueAt;
    }

    return progressA.box - progressB.box;
  };
}
