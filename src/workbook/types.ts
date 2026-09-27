export type CurriculumUnit = {
  id: string;
  moduleCode?: string;
  title: string;
  cefrGoal: string;
  themes: string[];
  status: "ready" | "preview";
  plan?: UnitPlan;
};

export type UnitPlan = {
  overview: string;
  canDo: string[];
  vocabulary: Array<{
    french: string;
    german: string;
    note?: string;
  }>;
  patterns: Array<{
    french: string;
    german: string;
    pattern: string;
  }>;
  workbookTasks: string[];
  checkpoint: string;
};

export type Lexeme = {
  id: string;
  french: string;
  german: string;
  category: string;
  note?: string;
};

export type Phrase = {
  id: string;
  french: string;
  german: string;
  pattern: string;
};

export type DialogueLine = {
  speaker: string;
  french: string;
  german: string;
};

export type BaseExercise = {
  id: string;
  title: string;
  prompt: string;
  explanation: string;
};

export type MultipleChoiceExercise = BaseExercise & {
  type: "multipleChoice";
  options: string[];
  correctOption: string;
};

export type MatchingExercise = BaseExercise & {
  type: "matching";
  pairs: Array<{ left: string; right: string }>;
};

export type FillBlankExercise = BaseExercise & {
  type: "fillBlank";
  template: string;
  correctAnswers: string[];
};

export type SentenceOrderExercise = BaseExercise & {
  type: "sentenceOrder";
  tokens: string[];
  correctOrder: string[];
  translation: string;
};

export type FreeResponseExercise = BaseExercise & {
  type: "freeResponse";
  modelAnswers: string[];
};

export type Exercise =
  | MultipleChoiceExercise
  | MatchingExercise
  | FillBlankExercise
  | SentenceOrderExercise
  | FreeResponseExercise;

export type Lesson = {
  id: string;
  unitId: string;
  title: string;
  outcome: string;
  warmup: string;
  focusLexemeIds?: string[];
  dialogue: DialogueLine[];
  grammarNotes: Array<{ title: string; body: string; examples: Phrase[] }>;
  exercises: Exercise[];
};

export type ExerciseAnswer =
  | string
  | string[]
  | Record<string, string>
  | undefined;

export type SavedProgress = {
  activeUnitId: string;
  answers: Record<string, ExerciseAnswer>;
  completed: Record<string, boolean>;
};

export type QuizItem = {
  id: string;
  lexemeId?: string;
  lessonId: string;
  lessonTitle: string;
  sourceLessonTitles?: string[];
  kind: "Wort" | "Satz";
  promptGerman: string;
  acceptedFrench: string[];
  hint?: string;
};

export type LeitnerBox = 1 | 2 | 3 | 4 | 5;

export type CardProgress = {
  cardId: string;
  box: LeitnerBox;
  dueAt: number;
  addedAt?: number;
  correctCount: number;
  wrongCount: number;
  lastSeenAt?: number;
};
