/* eslint-disable react-hooks/exhaustive-deps, react-hooks/immutability, react-hooks/purity, react-hooks/set-state-in-effect, react/no-unescaped-entities */

import { useEffect, useMemo, useState } from "react";
import {
  countCardsByBox,
  countCardsStudiedSince,
  filterDueCards,
  filterCardsByBox,
  filterNewCards,
  getCardProgress,
  gradeCardProgress,
  keepCardInCurrentBox,
  markCardWrongInCurrentBox,
  selectNextCard,
} from "../domain/spacedRepetition";
import { isQuizAnswerCorrect } from "../domain/quiz";
import {
  LOOP_CARD_LIMIT,
  LOOP_REQUIRED_STREAK,
  applyLoopAnswer,
  createLoopCards,
  type LoopCardState,
} from "../domain/loopSession";
import type {
  CardProgress,
  LeitnerBox,
  QuizItem,
} from "../types";

const BOXES = [1, 2, 3, 4, 5] as const satisfies readonly LeitnerBox[];
const QUIZ_SETTINGS_KEY = "french-a1-quiz-settings";

type BoxFilter = "all" | LeitnerBox;
type StudyMode = "all" | "leitner";
type LeitnerFallbackMode = "none" | "all" | "new";
type QuizSettings = {
  boxFilter: BoxFilter;
  loop: boolean;
  shuffle: boolean;
  studyMode: StudyMode;
};

type QuizResult = {
  isCorrect: boolean;
  expected: string;
  card: QuizItem;
  loopMessage?: string;
};

function parseBoxFilter(value: string): BoxFilter {
  if (value === "all") {
    return "all";
  }

  const parsed = Number(value);
  return BOXES.includes(parsed as LeitnerBox) ? (parsed as LeitnerBox) : "all";
}

function getTodayStartTimestamp() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today.getTime();
}

function loadQuizSettings(storageKey = QUIZ_SETTINGS_KEY): QuizSettings {
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) {
      return {
        boxFilter: "all",
        loop: false,
        shuffle: false,
        studyMode: "leitner",
      };
    }

    const parsed = JSON.parse(raw) as Partial<{
      boxFilter: string | number;
      loop: boolean;
      shuffle: boolean;
      studyMode: string;
    }>;

    return {
      boxFilter:
        parsed.boxFilter === undefined
          ? "all"
          : parseBoxFilter(String(parsed.boxFilter)),
      loop: Boolean(parsed.loop),
      shuffle: Boolean(parsed.shuffle),
      studyMode: parsed.studyMode === "all" ? "all" : "leitner",
    };
  } catch {
    return {
      boxFilter: "all",
      loop: false,
      shuffle: false,
      studyMode: "leitner",
    };
  }
}

function formatDateTime(timestamp?: number) {
  if (!timestamp) {
    return "Noch nicht gelernt";
  }

  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(timestamp);
}

function getQuizItemSourceLabel(item: QuizItem) {
  const sources = item.sourceLessonTitles?.length
    ? item.sourceLessonTitles
    : [item.lessonTitle];

  return Array.from(new Set(sources)).join(" · ");
}

export function QuizPage({
  answerPlaceholder = "z. B. Unë jam nga Gjermania",
  deckEyebrow = "Karteikarten",
  deckTitle = "Aktiv übersetzen und gezielt wiederholen.",
  description = "Dein Deck enthält alle bisher hinzugefügten Karten. Lerne nach Leitner-Fälligkeit, übe einzelne Boxen oder mische den aktiven Stapel zufällig.",
  emptyDeckText = "Wenn neues Vokabular verfügbar ist, füge es auf der passenden Lektionsseite zum Karteikartensystem hinzu.",
  onProgressChange,
  progress,
  quizItems,
  settingsStorageKey = QUIZ_SETTINGS_KEY,
}: {
  answerPlaceholder?: string;
  deckEyebrow?: string;
  deckTitle?: string;
  description?: string;
  emptyDeckText?: string;
  onProgressChange: (progress: Record<string, CardProgress>) => void;
  progress: Record<string, CardProgress>;
  quizItems: QuizItem[];
  settingsStorageKey?: string;
}) {
  const [settingsSeed] = useState<QuizSettings>(() =>
    loadQuizSettings(settingsStorageKey),
  );
  const [currentItem, setCurrentItem] = useState<QuizItem | undefined>();
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<QuizResult | null>(null);
  const [loop, setLoop] = useState(settingsSeed.loop);
  const [loopCards, setLoopCards] = useState<LoopCardState[]>([]);
  const [loopIndex, setLoopIndex] = useState(0);
  const [shuffle, setShuffle] = useState(settingsSeed.shuffle);
  const [boxFilter, setBoxFilter] = useState<BoxFilter>(settingsSeed.boxFilter);
  const [studyMode, setStudyMode] = useState<StudyMode>(
    settingsSeed.studyMode,
  );
  const [leitnerFallbackMode, setLeitnerFallbackMode] =
    useState<LeitnerFallbackMode>("none");

  const quizItemById = useMemo(
    () => new Map(quizItems.map((item) => [item.id, item])),
    [quizItems],
  );

  const deckItems = useMemo(
    () => quizItems.filter((item) => progress[item.id]),
    [progress, quizItems],
  );
  const deckItemIds = useMemo(
    () => deckItems.map((item) => item.id).join("|"),
    [deckItems],
  );
  const currentProgress = currentItem
    ? getCardProgress(progress, currentItem.id)
    : undefined;
  const activeLoopCard = currentItem
    ? loopCards.find((card) => card.cardId === currentItem.id)
    : undefined;
  const loopIsActive = loopCards.length > 0;
  const loopStatusLabel = loopIsActive
    ? `${loopCards.length}/${LOOP_CARD_LIMIT}`
    : loop
      ? "bereit"
      : "aus";
  const boxCounts = useMemo(
    () => countCardsByBox(deckItems, progress),
    [deckItems, progress],
  );
  const newCardCount = useMemo(
    () => filterNewCards(deckItems, progress).length,
    [deckItems, progress],
  );
  const newSelectableCardCount = useMemo(
    () => filterNewCards(getBaseSelectableItems(progress), progress).length,
    [boxFilter, deckItems, progress],
  );
  const dueCardCount = useMemo(
    () => getBaseSelectableItems(progress).filter((item) =>
      getCardProgress(progress, item.id).dueAt <= Date.now(),
    ).length,
    [boxFilter, deckItems, progress],
  );
  const baseSelectableCount = useMemo(
    () => getBaseSelectableItems(progress).length,
    [boxFilter, deckItems, progress],
  );
  const selectedCardCount = useMemo(
    () => getSelectableItems(progress).length,
    [boxFilter, deckItems, leitnerFallbackMode, progress, studyMode],
  );
  const learnedTodayCount = useMemo(
    () => countCardsStudiedSince(progress, getTodayStartTimestamp()),
    [progress],
  );

  useEffect(() => {
    window.localStorage.setItem(
      settingsStorageKey,
      JSON.stringify({ boxFilter, loop, shuffle, studyMode }),
    );
  }, [boxFilter, loop, settingsStorageKey, shuffle, studyMode]);

  useEffect(() => {
    const selectableItems = getSelectableItems(progress);

    setCurrentItem((current) => {
      if (current && selectableItems.some((item) => item.id === current.id)) {
        return current;
      }

      return selectNextCard({ items: selectableItems, progress, shuffle });
    });
    setAnswer("");
    setResult(null);
    setLoopCards([]);
    setLoopIndex(0);
  }, [boxFilter, deckItemIds, leitnerFallbackMode, shuffle, studyMode]);

  function getDeckItems(sourceProgress: Record<string, CardProgress>) {
    return quizItems.filter((item) => sourceProgress[item.id]);
  }

  function getBaseSelectableItems(sourceProgress: Record<string, CardProgress>) {
    const sourceDeckItems = getDeckItems(sourceProgress);
    return boxFilter === "all"
      ? sourceDeckItems
      : filterCardsByBox(sourceDeckItems, sourceProgress, boxFilter);
  }

  function getSelectableItems(sourceProgress: Record<string, CardProgress>) {
    const baseItems = getBaseSelectableItems(sourceProgress);

    if (studyMode !== "leitner" || leitnerFallbackMode === "all") {
      return baseItems;
    }

    if (leitnerFallbackMode === "new") {
      return filterNewCards(baseItems, sourceProgress);
    }

    return filterDueCards(baseItems, sourceProgress);
  }

  function selectNextFromProgress(
    sourceProgress: Record<string, CardProgress>,
    currentCardId?: string,
  ) {
    return selectNextCard({
      items: getSelectableItems(sourceProgress),
      progress: sourceProgress,
      currentCardId,
      shuffle,
    });
  }

  function selectLoopBatchItems(
    sourceProgress: Record<string, CardProgress>,
    currentCardId?: string,
  ) {
    const selectableItems = getSelectableItems(sourceProgress);
    const preferredItems =
      selectableItems.length > 1
        ? selectableItems.filter((item) => item.id !== currentCardId)
        : selectableItems;
    const selectedItems: QuizItem[] = [];

    while (
      selectedItems.length < LOOP_CARD_LIMIT &&
      selectedItems.length < preferredItems.length
    ) {
      const remainingItems = preferredItems.filter(
        (item) => !selectedItems.some((selected) => selected.id === item.id),
      );
      const nextItem = selectNextCard({
        items: remainingItems,
        progress: sourceProgress,
        shuffle,
      });

      if (!nextItem) {
        break;
      }

      selectedItems.push(nextItem);
    }

    return selectedItems;
  }

  function startLoopFromProgress(
    sourceProgress: Record<string, CardProgress>,
    currentCardId?: string,
  ) {
    const nextLoopCards = createLoopCards(
      selectLoopBatchItems(sourceProgress, currentCardId),
    );

    setLoopCards(nextLoopCards);
    setLoopIndex(0);

    return nextLoopCards[0]
      ? quizItemById.get(nextLoopCards[0].cardId)
      : selectNextFromProgress(sourceProgress, currentCardId);
  }

  function selectNextStudyCard(
    sourceProgress: Record<string, CardProgress>,
    currentCardId?: string,
    shouldAdvanceLoop = false,
  ) {
    if (loopCards.length) {
      if (!loop) {
        setLoopCards([]);
        setLoopIndex(0);
        return selectNextFromProgress(sourceProgress, currentCardId);
      }

      const activeIndex = loopCards.findIndex(
        (loopCard) => loopCard.cardId === currentCardId,
      );
      const nextIndex =
        shouldAdvanceLoop && activeIndex >= 0
          ? (activeIndex + 1) % loopCards.length
          : loopIndex;

      setLoopIndex(nextIndex);
      return quizItemById.get(loopCards[nextIndex].cardId);
    }

    if (loop) {
      return startLoopFromProgress(sourceProgress, currentCardId);
    }

    return selectNextFromProgress(sourceProgress, currentCardId);
  }

  function updateCardProgress(
    item: QuizItem,
    update: (cardProgress: CardProgress) => CardProgress,
    moveToNextCard: boolean,
  ) {
    const nextProgress = {
      ...progress,
      [item.id]: update(getCardProgress(progress, item.id)),
    };

    onProgressChange(nextProgress);

    if (moveToNextCard) {
      setCurrentItem(selectNextStudyCard(nextProgress, item.id));
      setAnswer("");
      setResult(null);
    }
  }

  function changeStudyMode(nextStudyMode: StudyMode) {
    setStudyMode(nextStudyMode);
    setLeitnerFallbackMode("none");
    setLoopCards([]);
    setLoopIndex(0);
    setAnswer("");
    setResult(null);
    setCurrentItem(undefined);
  }

  function changeBoxFilter(nextFilter: string) {
    setBoxFilter(parseBoxFilter(nextFilter));
    setLeitnerFallbackMode("none");
    setLoopCards([]);
    setLoopIndex(0);
    setAnswer("");
    setResult(null);
    setCurrentItem(undefined);
  }

  function checkAnswer() {
    if (!currentItem || !answer.trim()) {
      return;
    }

    const isCorrect = isQuizAnswerCorrect(answer, currentItem.acceptedFrench);
    if (loopCards.length) {
      const loopAnswer = applyLoopAnswer(
        loopCards,
        currentItem.id,
        isCorrect,
        loopIndex,
      );
      const loopMessage = isCorrect
        ? loopAnswer.completed
          ? `Loop geschafft: ${LOOP_REQUIRED_STREAK} richtige Antworten in Folge. Die Karte wandert in die nächste Box.`
          : `Loop: ${loopAnswer.correctStreak} von ${LOOP_REQUIRED_STREAK} richtigen Antworten in Folge.`
        : "Loop: Serie zurückgesetzt. Die Karte bleibt im Loop.";

      setResult({
        isCorrect,
        expected: currentItem.acceptedFrench[0],
        card: currentItem,
        loopMessage,
      });

      setLoopCards(loopAnswer.cards);
      setLoopIndex(loopAnswer.nextIndex);

      if (loopAnswer.completed) {
        updateCardProgress(
          currentItem,
          (cardProgress) => gradeCardProgress(cardProgress, true),
          false,
        );
      } else if (!isCorrect) {
        updateCardProgress(currentItem, markCardWrongInCurrentBox, false);
      }

      return;
    }

    setResult({
      isCorrect,
      expected: currentItem.acceptedFrench[0],
      card: currentItem,
    });

    if (isCorrect) {
      updateCardProgress(
        currentItem,
        (cardProgress) => gradeCardProgress(cardProgress, true),
        false,
      );
    }
  }

  function goToNext() {
    setCurrentItem(
      selectNextStudyCard(progress, currentItem?.id, result === null),
    );
    setAnswer("");
    setResult(null);
  }

  function retryCurrent() {
    setAnswer("");
    setResult(null);
  }

  function moveToBoxOne() {
    if (!currentItem) {
      return;
    }

    updateCardProgress(
      currentItem,
      (cardProgress) => gradeCardProgress(cardProgress, false),
      true,
    );
  }

  function keepInCurrentBox() {
    if (!currentItem) {
      return;
    }

    updateCardProgress(currentItem, keepCardInCurrentBox, true);
  }

  function advanceToNextBox() {
    if (!currentItem) {
      return;
    }

    updateCardProgress(
      currentItem,
      (cardProgress) => gradeCardProgress(cardProgress, true),
      true,
    );
  }

  const controls = (
    <>
      <div className="quiz-sidebar-block">
        <p className="eyebrow">Karteikarten</p>
        <h2>Lernsteuerung</h2>
        <label className="quiz-scope">
          Lernmodus
          <select
            onChange={(event) => changeStudyMode(event.target.value as StudyMode)}
            value={studyMode}
          >
            <option value="leitner">Nach Leitner-Zeiten lernen</option>
            <option value="all">Alle Karten üben</option>
          </select>
        </label>
        <label className="quiz-scope">
          Box-Auswahl
          <select
            onChange={(event) => changeBoxFilter(event.target.value)}
            value={boxFilter}
          >
            <option value="all">Alle Boxen ({deckItems.length})</option>
            {BOXES.map((box) => (
              <option key={box} value={box}>
                Nur Box {box} ({boxCounts[box]})
              </option>
            ))}
          </select>
        </label>
        <label className="shuffle-toggle">
          <input
            checked={shuffle}
            onChange={(event) => setShuffle(event.target.checked)}
            type="checkbox"
          />
          <span>Shuffle</span>
        </label>
        <label className="shuffle-toggle">
          <input
            checked={loop}
            onChange={(event) => setLoop(event.target.checked)}
            type="checkbox"
          />
          <span>Loop</span>
        </label>
      </div>

      <div className="quiz-sidebar-block">
        <p className="eyebrow">Deck</p>
        <div className="quiz-side-stats" aria-label="Kartenstatistik">
          <div>
            <span>Im Deck</span>
            <strong>{deckItems.length}</strong>
          </div>
          <div>
            <span>Aktiver Stapel</span>
            <strong>{selectedCardCount}</strong>
          </div>
          <div>
            <span>Fällig</span>
            <strong>{dueCardCount}</strong>
          </div>
          <div>
            <span>Neue Karten</span>
            <strong>{newCardCount}</strong>
          </div>
          <div>
            <span>Heute gelernt</span>
            <strong>{learnedTodayCount}</strong>
          </div>
          <div>
            <span>Loop</span>
            <strong>{loopStatusLabel}</strong>
          </div>
          {BOXES.map((box) => (
            <div key={box}>
              <span>Box {box}</span>
              <strong>{boxCounts[box]}</strong>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <>
      <aside className="sidebar quiz-control-sidebar" aria-label="Karteikartensteuerung">
        {controls}
      </aside>
      <main className="workspace quiz-page">
      <section className="lesson-hero quiz-hero" aria-labelledby="quiz-page-title">
        <div>
          <p className="eyebrow">{deckEyebrow}</p>
          <h1 id="quiz-page-title">{deckTitle}</h1>
          <p>{description}</p>
        </div>
      </section>

      <section className="content-section quiz-study-card" aria-label="Karteikarte">
        {currentItem && currentProgress ? (
          <>
            <div className="quiz-meta">
              <span>{currentItem.kind}</span>
              <span>{getQuizItemSourceLabel(currentItem)}</span>
              <span>Box {currentProgress.box}</span>
              {activeLoopCard ? (
                <span>
                  Loop {activeLoopCard.correctStreak}/{LOOP_REQUIRED_STREAK}
                </span>
              ) : null}
              <span>Zuletzt gelernt: {formatDateTime(currentProgress.lastSeenAt)}</span>
              <span>Fällig: {formatDateTime(currentProgress.dueAt)}</span>
            </div>

            <div className="quiz-prompt">
              <span>Übersetze ins Französische:</span>
              <strong>"{currentItem.promptGerman}"</strong>
            </div>

            {currentItem.hint ? (
              <p className="quiz-hint">Hinweis: {currentItem.hint}</p>
            ) : null}

            <label className="quiz-answer">
              Deine Übersetzung
              <input
                autoComplete="off"
                onChange={(event) => {
                  setAnswer(event.target.value);
                  setResult(null);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && answer.trim()) {
                    checkAnswer();
                  }
                }}
                placeholder={answerPlaceholder}
                type="text"
                value={answer}
              />
            </label>

            <div className="quiz-actions">
              <button
                className="primary-button"
                disabled={!answer.trim()}
                onClick={checkAnswer}
                type="button"
              >
                Prüfen
              </button>
              <button
                className="secondary-inline-button"
                disabled={result?.isCorrect === false && !loopIsActive}
                onClick={goToNext}
                type="button"
              >
                Nächste Karte
              </button>
            </div>

            {result ? (
              <div
                className={`feedback ${result.isCorrect ? "positive" : "needs-work"}`}
                role="status"
              >
                <strong>{result.isCorrect ? "Richtig" : "Noch nicht ganz"}</strong>
                <span>
                  Erwartet: {result.expected} · Sonderzeichen wie ë/e und ç/c
                  werden beim Prüfen ignoriert.
                </span>
                {result.loopMessage ? <span>{result.loopMessage}</span> : null}
                {!result.isCorrect && !loopIsActive ? (
                  <div className="quiz-review-actions">
                    <button
                      className="secondary-inline-button"
                      onClick={retryCurrent}
                      type="button"
                    >
                      Nochmal versuchen
                    </button>
                    <button
                      className="secondary-inline-button"
                      onClick={moveToBoxOne}
                      type="button"
                    >
                      In Box 1 verschieben
                    </button>
                    <button
                      className="secondary-inline-button"
                      onClick={keepInCurrentBox}
                      type="button"
                    >
                      Box belassen
                    </button>
                    <button
                      className="secondary-inline-button"
                      onClick={advanceToNextBox}
                      type="button"
                    >
                      In nächste Box
                    </button>
                  </div>
                ) : null}
              </div>
            ) : null}
          </>
        ) : (
          <div className="empty-quiz-state">
            {studyMode === "leitner" && baseSelectableCount > 0 ? (
              <>
                <strong>Keine Karte ist gerade fällig.</strong>
                <p>
                  Du kannst trotzdem aus dieser Auswahl üben oder gezielt neue,
                  noch nie gelernte Karten starten.
                </p>
                <div className="quiz-review-actions">
                  <button
                    className="secondary-inline-button"
                    onClick={() => setLeitnerFallbackMode("all")}
                    type="button"
                  >
                    Trotzdem üben
                  </button>
                  <button
                    className="secondary-inline-button"
                    disabled={!newSelectableCardCount}
                    onClick={() => setLeitnerFallbackMode("new")}
                    type="button"
                  >
                    Neue Karten lernen
                  </button>
                </div>
              </>
            ) : (
              <>
                <strong>Für diese Auswahl gibt es noch keine Karten.</strong>
                <p>
                  {emptyDeckText}
                </p>
              </>
            )}
          </div>
        )}
      </section>
    </main>
    </>
  );
}
