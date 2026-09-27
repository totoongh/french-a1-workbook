export type EvaluationResult = {
  isCorrect: boolean;
  autoGraded: boolean;
  expected: string | string[];
  message: string;
};

