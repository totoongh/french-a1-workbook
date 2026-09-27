"use client";

/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useMemo, useState } from "react";
import { QuizPage } from "./components/QuizPage";
import {
  curriculum,
  lessons,
  lexemes,
  researchSources,
} from "./data/a1Content";
import { a1SentenceQuizItems } from "./data/a1SentenceDeck";
import { evaluateExerciseAnswer } from "./domain/exercises";
import { buildFeedbackPrompt } from "./domain/feedbackPrompt";
import { buildQuizItems } from "./domain/quiz";
import {
  addMissingCardsToProgress,
  countCardsByBox,
  getCardProgress,
} from "./domain/spacedRepetition";
import {
  getVocabularyCardsForLexemeIds,
  loadCardDeckProgress,
  QUIZ_DECK_BASELINE_KEY,
  SENTENCE_QUIZ_DECK_BASELINE_KEY,
  SENTENCE_QUIZ_PROGRESS_KEY,
  saveCardDeckProgress,
} from "./domain/cardDeck";
import type {
  CardProgress,
  CurriculumUnit,
  Exercise,
  ExerciseAnswer,
  LeitnerBox,
  Lesson,
  QuizItem,
  SavedProgress,
} from "./types";

const STORAGE_KEY = "french-a1-workbook-progress";
const LEITNER_BOXES = [1, 2, 3, 4, 5] as const satisfies readonly LeitnerBox[];

type ActiveView = "workbook" | "quiz" | "sentenceQuiz" | "wordlist";
type WordListBoxFilter = "all" | LeitnerBox;

function getModuleLabel(unit: CurriculumUnit, index: number) {
  if (unit.moduleCode) {
    return unit.moduleCode;
  }

  const baseModuleNumber = curriculum
    .slice(0, index + 1)
    .filter((item) => !item.moduleCode).length;

  return String(baseModuleNumber).padStart(2, "0");
}

function loadProgress(): SavedProgress {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { activeUnitId: "greetings", answers: {}, completed: {} };
    }

    const parsed = JSON.parse(raw) as SavedProgress;
    return {
      activeUnitId: parsed.activeUnitId || "greetings",
      answers: parsed.answers || {},
      completed: parsed.completed || {},
    };
  } catch {
    return { activeUnitId: "greetings", answers: {}, completed: {} };
  }
}

function App() {
  const [progress, setProgress] = useState<SavedProgress>({
    activeUnitId: "greetings",
    answers: {},
    completed: {},
  });
  const [deckProgress, setDeckProgress] = useState<Record<string, CardProgress>>(
    {},
  );
  const [sentenceDeckProgress, setSentenceDeckProgress] = useState<
    Record<string, CardProgress>
  >({});
  const [activeView, setActiveView] = useState<ActiveView>("workbook");
  const [storageReady, setStorageReady] = useState(false);

  const activeUnit =
    curriculum.find((unit) => unit.id === progress.activeUnitId) ??
    curriculum[0];
  const activeLesson = lessons.find((item) => item.unitId === activeUnit.id);

  const allQuizItems = useMemo(() => buildQuizItems({ lessons, lexemes }), []);
  const allVocabularyQuizItems = useMemo(
    () => allQuizItems.filter((item) => item.kind === "Wort"),
    [allQuizItems],
  );
  const activeLessonVocabularyCards = useMemo(
    () =>
      activeLesson
        ? getVocabularyCardsForLexemeIds(
            allQuizItems,
            activeLesson.focusLexemeIds,
          )
        : [],
    [activeLesson, allQuizItems],
  );
  const activeLessonCardsInDeck = activeLessonVocabularyCards.filter(
    (item) => deckProgress[item.id],
  ).length;

  useEffect(() => {
    setProgress(loadProgress());
    setDeckProgress(loadCardDeckProgress());
    setSentenceDeckProgress(
      loadCardDeckProgress(SENTENCE_QUIZ_PROGRESS_KEY),
    );
    setStorageReady(true);
  }, []);

  useEffect(() => {
    if (!storageReady) {
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress, storageReady]);

  useEffect(() => {
    if (!storageReady) {
      return;
    }
    saveCardDeckProgress(deckProgress);
  }, [deckProgress, storageReady]);

  useEffect(() => {
    if (!storageReady) {
      return;
    }
    saveCardDeckProgress(sentenceDeckProgress, SENTENCE_QUIZ_PROGRESS_KEY);
  }, [sentenceDeckProgress, storageReady]);

  useEffect(() => {
    if (!storageReady) {
      return;
    }
    if (window.localStorage.getItem(QUIZ_DECK_BASELINE_KEY)) {
      return;
    }

    setDeckProgress((current) => {
      const next = addMissingCardsToProgress(allVocabularyQuizItems, current);
      saveCardDeckProgress(next);
      return next;
    });
    window.localStorage.setItem(QUIZ_DECK_BASELINE_KEY, "true");
  }, [allVocabularyQuizItems, storageReady]);

  useEffect(() => {
    if (!storageReady) {
      return;
    }
    if (window.localStorage.getItem(SENTENCE_QUIZ_DECK_BASELINE_KEY)) {
      return;
    }

    setSentenceDeckProgress((current) => {
      const next = addMissingCardsToProgress(a1SentenceQuizItems, current);
      saveCardDeckProgress(next, SENTENCE_QUIZ_PROGRESS_KEY);
      return next;
    });
    window.localStorage.setItem(SENTENCE_QUIZ_DECK_BASELINE_KEY, "true");
  }, [storageReady]);

  function setActiveUnit(unit: CurriculumUnit) {
    setActiveView("workbook");
    setProgress((current) => ({ ...current, activeUnitId: unit.id }));
  }

  function setExerciseAnswer(id: string, answer: ExerciseAnswer) {
    setProgress((current) => ({
      ...current,
      answers: {
        ...current.answers,
        [id]: answer,
      },
      completed: {
        ...current.completed,
        [id]: false,
      },
    }));
  }

  function submitExercise(id: string) {
    setProgress((current) => ({
      ...current,
      completed: {
        ...current.completed,
        [id]: true,
      },
    }));
  }

  function addVocabularyCardsToDeck(cards: QuizItem[]) {
    setDeckProgress((current) => {
      const next = addMissingCardsToProgress(cards, current);
      saveCardDeckProgress(next);
      return next;
    });
  }

  return (
    <div className="app-frame">
      <header className="app-topbar">
        <div className="brand">
          <span className="brand-mark">A1</span>
          <div>
            <p>Französisch</p>
            <strong>A1 Lernstudio</strong>
          </div>
        </div>

        <div className="view-switch" aria-label="Bereich wechseln">
          <button
            className={activeView === "workbook" ? "is-active" : ""}
            onClick={() => setActiveView("workbook")}
            type="button"
          >
            Workbook
          </button>
          <button
            className={activeView === "quiz" ? "is-active" : ""}
            onClick={() => setActiveView("quiz")}
            type="button"
          >
            Wortabfrage
          </button>
          <button
            className={activeView === "sentenceQuiz" ? "is-active" : ""}
            onClick={() => setActiveView("sentenceQuiz")}
            type="button"
          >
            Satzabfrage
          </button>
          <button
            className={activeView === "wordlist" ? "is-active" : ""}
            onClick={() => setActiveView("wordlist")}
            type="button"
          >
            Wortliste
          </button>
        </div>
      </header>

      <div className="app-shell">
        {activeView === "quiz" ? (
          <QuizPage
            onProgressChange={setDeckProgress}
            progress={deckProgress}
            quizItems={allVocabularyQuizItems}
            settingsStorageKey="french-a1-word-quiz-settings"
          />
        ) : activeView === "sentenceQuiz" ? (
          <QuizPage
            answerPlaceholder="z. B. J’apprends le français"
            deckEyebrow="Satzkarten"
            deckTitle="Satzabfrager: Deutsch sehen, Französisch schreiben."
            description="Dieses getrennte Leitner-Deck enthält 200 A1-Sätze aus dem bestehenden Grundwortschatz. Die Schwierigkeit variiert von festen Redemitteln bis zu kurzen Alltagssätzen mit Zeit, Ort und Objekt."
            emptyDeckText="Das Satzdeck wird automatisch mit 200 A1-Karten angelegt. Lade die App neu, falls hier noch nichts sichtbar ist."
            onProgressChange={setSentenceDeckProgress}
            progress={sentenceDeckProgress}
            quizItems={a1SentenceQuizItems}
            settingsStorageKey="french-a1-sentence-quiz-settings"
          />
        ) : activeView === "wordlist" ? (
          <WordListPage
            progress={deckProgress}
            quizItems={allVocabularyQuizItems}
          />
        ) : (
          <>
            <aside className="sidebar" aria-label="A1 Curriculum">
              <nav className="unit-list" aria-label="Lernmodule">
                {curriculum.map((unit, index) => (
                  <button
                    className={`unit-button ${
                      activeUnit.id === unit.id ? "is-active" : ""
                    }`}
                    key={unit.id}
                    onClick={() => setActiveUnit(unit)}
                    type="button"
                  >
                    <span className="unit-index">
                      {getModuleLabel(unit, index)}
                    </span>
                    <span>
                      <strong>{unit.title}</strong>
                    </span>
                  </button>
                ))}
              </nav>
            </aside>

            <main className="workspace">
              <section className="lesson-hero lesson-hero-simple" aria-labelledby="page-title">
                <div>
                  <p className="eyebrow">Deutschsprachiger Französisch-A1-Kurs</p>
                  <h1 id="page-title">Französisch A1 Workbook</h1>
                </div>
              </section>

              {activeLesson ? (
                <LessonWorkbook
                  answers={progress.answers}
                  completed={progress.completed}
                  deckCount={activeLessonCardsInDeck}
                  lesson={activeLesson}
                  onAddVocabulary={() =>
                    addVocabularyCardsToDeck(activeLessonVocabularyCards)
                  }
                  onAnswer={setExerciseAnswer}
                  onSubmit={submitExercise}
                  vocabularyCardCount={activeLessonVocabularyCards.length}
                />
              ) : (
                <UnitPreview unit={activeUnit} />
              )}

              <section
                className="content-section source-section"
                aria-labelledby="sources-title"
              >
                <div className="section-heading">
                  <p className="eyebrow">Recherchebasis</p>
                  <h2 id="sources-title">Quellen und Ableitung</h2>
                </div>
                <div className="source-grid">
                  {researchSources.map((source) => (
                    <a
                      href={source.url}
                      key={source.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <strong>{source.title}</strong>
                      <span>{source.note}</span>
                    </a>
                  ))}
                </div>
              </section>
            </main>
          </>
        )}
      </div>
    </div>
  );
}

function WordListPage({
  progress,
  quizItems,
}: {
  progress: Record<string, CardProgress>;
  quizItems: QuizItem[];
}) {
  const [activeBox, setActiveBox] = useState<WordListBoxFilter>("all");
  const deckItems = useMemo(
    () => quizItems.filter((item) => progress[item.id]),
    [progress, quizItems],
  );
  const boxCounts = useMemo(
    () => countCardsByBox(deckItems, progress),
    [deckItems, progress],
  );
  const visibleItems = useMemo(() => {
    const filteredItems =
      activeBox === "all"
        ? deckItems
        : deckItems.filter(
            (item) => getCardProgress(progress, item.id).box === activeBox,
          );

    return [...filteredItems].sort((a, b) => {
      const progressA = getCardProgress(progress, a.id);
      const progressB = getCardProgress(progress, b.id);

      if (progressA.box !== progressB.box) {
        return progressA.box - progressB.box;
      }

      return (
        getQuizItemSourceLabel(a).localeCompare(getQuizItemSourceLabel(b), "de") ||
        a.promptGerman.localeCompare(b.promptGerman, "de")
      );
    });
  }, [activeBox, deckItems, progress]);

  return (
    <>
      <aside className="sidebar wordlist-sidebar" aria-label="Wortlistenfilter">
        <div className="quiz-sidebar-block">
          <p className="eyebrow">Wortliste</p>
          <h2>Leitner-Boxen</h2>
          <div className="box-filter-list" aria-label="Box filtern">
            <button
              className={activeBox === "all" ? "is-active" : ""}
              onClick={() => setActiveBox("all")}
              type="button"
            >
              <span>Alle</span>
              <strong>{deckItems.length}</strong>
            </button>
            {LEITNER_BOXES.map((box) => (
              <button
                className={activeBox === box ? "is-active" : ""}
                key={box}
                onClick={() => setActiveBox(box)}
                type="button"
              >
                <span>Box {box}</span>
                <strong>{boxCounts[box]}</strong>
              </button>
            ))}
          </div>
        </div>
      </aside>

      <main className="workspace wordlist-page">
        <section className="lesson-hero lesson-hero-simple" aria-labelledby="wordlist-title">
          <div>
            <p className="eyebrow">Grundwortschatz</p>
            <h1 id="wordlist-title">Wortliste</h1>
          </div>
        </section>

        <section className="content-section vocabulary-notebook">
          <div className="section-heading">
            <h2>
              {activeBox === "all"
                ? "Alle Wortkarten"
                : `Wortkarten in Box ${activeBox}`}
            </h2>
            <span className="subtle-count">{visibleItems.length} Einträge</span>
          </div>

          <div className="notebook-list">
            {visibleItems.map((item) => {
              const cardProgress = getCardProgress(progress, item.id);
              const lastLearned = formatDateOnly(cardProgress.lastSeenAt);

              return (
                <article className="notebook-word-card" key={item.id}>
                  <div className="notebook-word-main">
                    <h3>{item.acceptedFrench[0]}</h3>
                    <p>{item.promptGerman}</p>
                  </div>
                  <div className="notebook-word-meta">
                    <span>Box {cardProgress.box}</span>
                    <span>{getQuizItemSourceLabel(item)}</span>
                    {lastLearned ? <span>Zuletzt: {lastLearned}</span> : null}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

function getLessonPhraseItems(lesson: Lesson) {
  return [
    ...lesson.dialogue.map((line, index) => ({
      id: `${lesson.id}-dialogue-${index}`,
      french: line.french,
      german: line.german,
      pattern: `Dialog: ${line.speaker}`,
    })),
    ...lesson.grammarNotes.flatMap((note, noteIndex) =>
      note.examples.map((example, exampleIndex) => ({
        id: `${lesson.id}-grammar-${noteIndex}-${exampleIndex}-${example.id}`,
        french: example.french,
        german: example.german,
        pattern: example.pattern || note.title,
      })),
    ),
  ];
}

function getQuizItemSourceLabel(item: QuizItem) {
  const sources = item.sourceLessonTitles?.length
    ? item.sourceLessonTitles
    : [item.lessonTitle];

  return Array.from(new Set(sources)).join(" · ");
}

function formatDateOnly(timestamp?: number) {
  if (!timestamp) {
    return "";
  }

  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
  }).format(timestamp);
}

function LessonWorkbook({
  answers,
  completed,
  deckCount,
  lesson,
  onAddVocabulary,
  onAnswer,
  onSubmit,
  vocabularyCardCount,
}: {
  answers: SavedProgress["answers"];
  completed: SavedProgress["completed"];
  deckCount: number;
  lesson: Lesson;
  onAddVocabulary: () => void;
  onAnswer: (id: string, answer: ExerciseAnswer) => void;
  onSubmit: (id: string) => void;
  vocabularyCardCount: number;
}) {
  const lessonPhrases = getLessonPhraseItems(lesson);

  return (
    <section className="lesson-layout" aria-labelledby="lesson-title">
      <div className="lesson-main">
        <div className="content-section lesson-intro">
          <p className="eyebrow">Aktive Lektion</p>
          <h2 id="lesson-title">{lesson.title}</h2>
          <p>{lesson.outcome}</p>
          <div className="warmup-box">{lesson.warmup}</div>
          <div className="lesson-deck-tools lesson-deck-tools-inline">
            <button
              className="secondary-inline-button"
              disabled={!vocabularyCardCount || deckCount === vocabularyCardCount}
              onClick={onAddVocabulary}
              type="button"
            >
              Vokabular dieser Lektion zu Karteikarten hinzufügen
            </button>
            <small>
              {vocabularyCardCount
                ? `${deckCount} von ${vocabularyCardCount} Wortkarten im Deck`
                : "Diese Lektion hat keine separaten Wortkarten."}
            </small>
          </div>
        </div>

        <div className="content-section" aria-labelledby="dialogue-title">
          <div className="section-heading">
            <p className="eyebrow">Mini-Dialog</p>
            <h2 id="dialogue-title">Lesen, verstehen, dann variieren</h2>
          </div>
          <div className="dialogue">
            {lesson.dialogue.map((line, lineIndex) => (
              <article className="dialogue-line" key={`${lineIndex}-${line.speaker}-${line.french}`}>
                <strong>{line.speaker}</strong>
                <div>
                  <p>{line.french}</p>
                  <span>{line.german}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="content-section" aria-labelledby="grammar-title">
          <div className="section-heading">
            <p className="eyebrow">Kurzgrammatik</p>
            <h2 id="grammar-title">Nur das, was diese Lektion braucht</h2>
          </div>
          <div className="note-grid">
            {lesson.grammarNotes.map((note, noteIndex) => (
              <article className="note-card" key={`${noteIndex}-${note.title}`}>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
                {note.examples.map((example, exampleIndex) => (
                  <div className="example-row" key={`${noteIndex}-${exampleIndex}-${example.id}`}>
                    <strong>{example.french}</strong>
                    <span>{example.german}</span>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </div>

        <div className="content-section" aria-labelledby="lesson-phrases-title">
          <div className="section-heading">
            <p className="eyebrow">Satzliste</p>
            <h2 id="lesson-phrases-title">Sätze aus dieser Lektion</h2>
          </div>
          <div className="phrase-list">
            {lessonPhrases.map((phrase) => (
              <article className="phrase-card" key={phrase.id}>
                <div>
                  <h3>{phrase.french}</h3>
                  <p>{phrase.german}</p>
                </div>
                <small>{phrase.pattern}</small>
              </article>
            ))}
          </div>
        </div>

        <div className="content-section" aria-labelledby="exercise-title">
          <div className="section-heading">
            <p className="eyebrow">Aufgaben</p>
            <h2 id="exercise-title">Üben mit sofortigem Feedback</h2>
          </div>
          <div className="exercise-stack">
            {lesson.exercises.map((exercise, index) => (
              <ExerciseCard
                answer={answers[exercise.id]}
                completed={Boolean(completed[exercise.id])}
                exercise={exercise}
                index={index + 1}
                key={exercise.id}
                lesson={lesson}
                onAnswer={(answer) => onAnswer(exercise.id, answer)}
                onSubmit={() => onSubmit(exercise.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExerciseCard({
  exercise,
  index,
  answer,
  completed,
  lesson,
  onAnswer,
  onSubmit,
}: {
  exercise: Exercise;
  index: number;
  answer: ExerciseAnswer;
  completed: boolean;
  lesson: Lesson;
  onAnswer: (answer: ExerciseAnswer) => void;
  onSubmit: () => void;
}) {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const result = completed
    ? evaluateExerciseAnswer(exercise, answer)
    : undefined;
  const canSubmit = hasAnswer(exercise, answer);
  const canCopyFeedbackPrompt =
    exercise.type === "freeResponse" &&
    typeof answer === "string" &&
    answer.trim().length > 0;

  async function copyFeedbackPrompt() {
    if (exercise.type !== "freeResponse" || typeof answer !== "string") {
      return;
    }

    const prompt = buildFeedbackPrompt({ lesson, exercise, answer });
    await writeClipboard(prompt);
    setCopiedPrompt(true);
    window.setTimeout(() => setCopiedPrompt(false), 1800);
  }

  return (
    <article className={`exercise-card ${result?.isCorrect ? "is-correct" : ""}`}>
      <header>
        <span>Aufgabe {index}</span>
        <h3>{exercise.title}</h3>
        <p>{exercise.prompt}</p>
      </header>

      <ExerciseInput exercise={exercise} answer={answer} onAnswer={onAnswer} />

      {exercise.type === "freeResponse" ? (
        <div className="prompt-copy-box">
          <div>
            <strong>ChatGPT-Feedback</strong>
            <span>
              Kopiert einen eigenständigen Prompt mit Aufgabe, deiner Antwort
              und A1-Feedbackregeln.
            </span>
          </div>
          <button
            className="secondary-inline-button"
            disabled={!canCopyFeedbackPrompt}
            onClick={copyFeedbackPrompt}
            type="button"
          >
            {copiedPrompt ? "Prompt kopiert" : "Feedbackprompt kopieren"}
          </button>
        </div>
      ) : null}

      <div className="exercise-actions">
        <button
          className="primary-button"
          disabled={!canSubmit}
          onClick={onSubmit}
          type="button"
        >
          Prüfen
        </button>
        <p>{exercise.explanation}</p>
      </div>

      {result ? (
        <div
          className={`feedback ${result.isCorrect ? "positive" : "needs-work"}`}
          role="status"
        >
          <strong>
            {result.autoGraded
              ? result.isCorrect
                ? "Richtig"
                : "Noch nicht ganz"
              : "Modellvergleich"}
          </strong>
          <span>{result.message}</span>
        </div>
      ) : null}
    </article>
  );
}

async function writeClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "true");
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }
}

function ExerciseInput({
  exercise,
  answer,
  onAnswer,
}: {
  exercise: Exercise;
  answer: ExerciseAnswer;
  onAnswer: (answer: ExerciseAnswer) => void;
}) {
  switch (exercise.type) {
    case "multipleChoice":
      return (
        <div className="option-grid">
          {exercise.options.map((option) => (
            <button
              className={`option-button ${answer === option ? "is-selected" : ""}`}
              key={option}
              onClick={() => onAnswer(option)}
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
      );

    case "matching": {
      const current =
        answer && typeof answer === "object" && !Array.isArray(answer)
          ? answer
          : {};
      const options = exercise.pairs.map((pair) => pair.right);

      return (
        <div className="matching-grid">
          {exercise.pairs.map((pair) => (
            <label key={pair.left}>
              <span>{pair.left}</span>
              <select
                onChange={(event) =>
                  onAnswer({ ...current, [pair.left]: event.target.value })
                }
                value={current[pair.left] ?? ""}
              >
                <option value="">Auswählen</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      );
    }

    case "fillBlank":
      return (
        <div className="blank-task">
          <p>{exercise.template.replace("___", "_____")}</p>
          <label>
            Antwort
            <input
              onChange={(event) => onAnswer(event.target.value)}
              placeholder="fehlendes Wort"
              type="text"
              value={typeof answer === "string" ? answer : ""}
            />
          </label>
        </div>
      );

    case "sentenceOrder": {
      const selected = Array.isArray(answer) ? answer : [];
      const available = exercise.tokens.filter((token) => !selected.includes(token));

      return (
        <div className="order-task">
          <div className="translation-target">{exercise.translation}</div>
          <div className="selected-tokens" aria-label="Aktueller Satz">
            {selected.length ? (
              selected.map((token, tokenIndex) => (
                <button
                  key={`${token}-${tokenIndex}`}
                  onClick={() =>
                    onAnswer(selected.filter((_, index) => index !== tokenIndex))
                  }
                  type="button"
                >
                  {token}
                </button>
              ))
            ) : (
              <span>Tippe die Wörter unten an.</span>
            )}
          </div>
          <div className="token-bank" aria-label="Wortbank">
            {available.map((token) => (
              <button
                key={token}
                onClick={() => onAnswer([...selected, token])}
                type="button"
              >
                {token}
              </button>
            ))}
          </div>
        </div>
      );
    }

    case "freeResponse":
      return (
        <label className="free-response">
          Deine Antwort
          <textarea
            onChange={(event) => onAnswer(event.target.value)}
            placeholder="Je m’appelle..."
            rows={4}
            value={typeof answer === "string" ? answer : ""}
          />
        </label>
      );
  }
}

function hasAnswer(exercise: Exercise, answer: ExerciseAnswer): boolean {
  switch (exercise.type) {
    case "multipleChoice":
    case "fillBlank":
    case "freeResponse":
      return typeof answer === "string" && answer.trim().length > 0;
    case "matching":
      return (
        Boolean(answer) &&
        typeof answer === "object" &&
        !Array.isArray(answer) &&
        exercise.pairs.every((pair) => Boolean(answer[pair.left]))
      );
    case "sentenceOrder":
      return Array.isArray(answer) && answer.length === exercise.tokens.length;
  }
}

function UnitPreview({ unit }: { unit: CurriculumUnit }) {
  return (
    <section className="content-section preview-panel" aria-labelledby="preview-title">
      <p className="eyebrow">Geplanter A1-Baustein</p>
      <h2 id="preview-title">{unit.title}</h2>
      <p>{unit.cefrGoal}</p>
      <div className="theme-row">
        {unit.themes.map((theme) => (
          <span key={theme}>{theme}</span>
        ))}
      </div>

      {unit.plan ? (
        <div className="plan-detail">
          <div className="plan-summary">
            <h3>Workbook-Fokus</h3>
            <p>{unit.plan.overview}</p>
          </div>

          <div className="plan-grid">
            <article className="plan-card">
              <h3>Kann ich danach?</h3>
              <ul>
                {unit.plan.canDo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="plan-card">
              <h3>Aufgabentypen</h3>
              <ul>
                {unit.plan.workbookTasks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="plan-columns">
            <article className="plan-card">
              <h3>Wortschatz-Seed</h3>
              <div className="plan-word-list">
                {unit.plan.vocabulary.map((item) => (
                  <div key={`${item.french}-${item.german}`}>
                    <strong>{item.french}</strong>
                    <span>{item.german}</span>
                    {item.note ? <small>{item.note}</small> : null}
                  </div>
                ))}
              </div>
            </article>

            <article className="plan-card">
              <h3>Satzmuster</h3>
              <div className="plan-patterns">
                {unit.plan.patterns.map((pattern) => (
                  <div key={`${pattern.french}-${pattern.german}`}>
                    <strong>{pattern.french}</strong>
                    <span>{pattern.german}</span>
                    <small>{pattern.pattern}</small>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="checkpoint-box">
            <strong>Abschluss-Check</strong>
            <span>{unit.plan.checkpoint}</span>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default App;
