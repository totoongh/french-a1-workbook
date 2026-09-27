import type { Lesson, Lexeme, QuizItem } from "../types";

export function stripFrenchDiacritics(value: string): string {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function normalizeQuizAnswer(value: string): string {
  return stripFrenchDiacritics(value)
    .trim()
    .toLocaleLowerCase("fr")
    .replace(/[.,!?;:"“”„'’()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function isQuizAnswerCorrect(answer: string, acceptedAnswers: string[]) {
  const submitted = normalizeQuizAnswer(answer);

  return acceptedAnswers.some((acceptedAnswer) => {
    const normalizedAccepted = normalizeQuizAnswer(acceptedAnswer);
    const withOptionalJe = normalizedAccepted.startsWith("je ")
      ? normalizedAccepted.replace(/^je\s+/, "")
      : `je ${normalizedAccepted}`;

    return submitted === normalizedAccepted || submitted === withOptionalJe;
  });
}

export function buildQuizItems({
  lessons,
  lexemes,
  throughLessonIndex,
}: {
  lessons: Lesson[];
  lexemes: Lexeme[];
  throughLessonIndex?: number;
}): QuizItem[] {
  const selectedLessons =
    throughLessonIndex === undefined
      ? lessons
      : lessons.slice(0, throughLessonIndex + 1);
  const items = new Map<string, QuizItem>();
  const lessonSourcesByLexemeId = buildLessonSourcesByLexemeId(lessons);

  for (const lexeme of lexemes) {
    const sourceLessons = lessonSourcesByLexemeId.get(lexeme.id) ?? [];
    const sourceLessonTitles = sourceLessons.map((lesson) => lesson.title);

    addUniqueItem(items, {
      id: `word-${lexeme.id}`,
      lexemeId: lexeme.id,
      lessonId: sourceLessons[0]?.id ?? "a1-vocabulary",
      lessonTitle: sourceLessonTitles[0] ?? "Grundwortschatz",
      sourceLessonTitles,
      kind: "Wort",
      promptGerman: lexeme.german,
      acceptedFrench: [lexeme.french],
      hint: buildSafeHint(`Kategorie: ${lexeme.category}`, [lexeme.french]),
    });
  }

  for (const lesson of selectedLessons) {
    for (const note of lesson.grammarNotes) {
      for (const example of note.examples) {
        addUniqueItem(items, {
          id: `pattern-${lesson.id}-${example.id}`,
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          kind: "Satz",
          promptGerman: example.german,
          acceptedFrench: [example.french],
          hint: buildSafeHint(
            `Kurzgrammatik: ${note.title}`,
            [example.french],
            "Kurzgrammatik",
          ),
        });
      }
    }

    for (const [index, line] of lesson.dialogue.entries()) {
      addUniqueItem(items, {
        id: `dialogue-${lesson.id}-${index}`,
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        kind: "Satz",
        promptGerman: line.german,
        acceptedFrench: [line.french],
        hint: buildSafeHint(
          `Dialogzeile: ${line.speaker}`,
          [line.french],
          "Dialogzeile",
        ),
      });
    }
  }

  return Array.from(items.values());
}

function buildLessonSourcesByLexemeId(lessons: Lesson[]) {
  const sources = new Map<string, Lesson[]>();

  for (const lesson of lessons) {
    for (const lexemeId of lesson.focusLexemeIds ?? []) {
      sources.set(lexemeId, [...(sources.get(lexemeId) ?? []), lesson]);
    }
  }

  return sources;
}

function buildSafeHint(
  hint: string,
  acceptedAnswers: string[],
  fallback?: string,
): string | undefined {
  return hintLeaksAnswer(hint, acceptedAnswers) ? fallback : hint;
}

function hintLeaksAnswer(hint: string, acceptedAnswers: string[]) {
  const normalizedHintTokens = normalizeQuizAnswer(hint).split(" ");
  const normalizedHint = normalizedHintTokens.join(" ");

  return acceptedAnswers.some((acceptedAnswer) => {
    const normalizedAnswer = normalizeQuizAnswer(acceptedAnswer);
    const answerTokens = normalizedAnswer
      .split(" ")
      .filter((token) => token.length > 2);

    return (
      normalizedHint.includes(normalizedAnswer) ||
      answerTokens.some((token) => normalizedHintTokens.includes(token))
    );
  });
}

function addUniqueItem(items: Map<string, QuizItem>, item: QuizItem) {
  const normalizedPrompt = normalizeQuizAnswer(item.promptGerman);
  const normalizedAnswer = normalizeQuizAnswer(item.acceptedFrench[0]);
  const key = `${item.kind}-${normalizedPrompt}-${normalizedAnswer}`;

  if (!items.has(key)) {
    items.set(key, item);
  }
}
