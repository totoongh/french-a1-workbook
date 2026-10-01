import type { EvaluationResult } from "./types-internal";
import type { Exercise, ExerciseAnswer } from "../types";

export function normalizeAnswer(value: string): string {
  return value
    .trim()
    .toLocaleLowerCase("fr")
    .replace(/œ/g, "oe")
    .replace(/\s+/g, " ")
    .replace(/[.!?]+$/g, "");
}

export function evaluateExerciseAnswer(
  exercise: Exercise,
  answer: ExerciseAnswer,
): EvaluationResult {
  switch (exercise.type) {
    case "multipleChoice": {
      const selected = typeof answer === "string" ? answer : "";
      const isCorrect = selected === exercise.correctOption;
      return {
        isCorrect,
        autoGraded: true,
        expected: exercise.correctOption,
        message: isCorrect
          ? "Richtig. Genau diese Bedeutung ist gesucht."
          : `Fast. Richtig ist: ${exercise.correctOption}.`,
      };
    }

    case "matching": {
      const submitted =
        answer && typeof answer === "object" && !Array.isArray(answer)
          ? answer
          : {};
      const wrong = exercise.pairs.filter(
        (pair) => submitted[pair.left] !== pair.right,
      );
      return {
        isCorrect: wrong.length === 0,
        autoGraded: true,
        expected: exercise.pairs.map((pair) => `${pair.left} = ${pair.right}`),
        message:
          wrong.length === 0
            ? "Alles korrekt zugeordnet."
            : `Prüfe noch einmal: ${wrong.map((pair) => pair.left).join(", ")}.`,
      };
    }

    case "fillBlank": {
      const submitted = typeof answer === "string" ? normalizeAnswer(answer) : "";
      const accepted = exercise.correctAnswers.map(normalizeAnswer);
      const isCorrect = accepted.includes(submitted);
      return {
        isCorrect,
        autoGraded: true,
        expected: exercise.correctAnswers,
        message: isCorrect
          ? "Richtig eingesetzt."
          : `Gesucht ist: ${exercise.correctAnswers.join(" / ")}.`,
      };
    }

    case "sentenceOrder": {
      const submitted = Array.isArray(answer) ? answer : [];
      const isCorrect =
        submitted.length === exercise.correctOrder.length &&
        submitted.every((token, index) => token === exercise.correctOrder[index]);
      return {
        isCorrect,
        autoGraded: true,
        expected: exercise.correctOrder.join(" "),
        message: isCorrect
          ? "Der Satz ist in der richtigen Reihenfolge."
          : `Die richtige Reihenfolge ist: ${exercise.correctOrder.join(" ")}.`,
      };
    }

    case "freeResponse": {
      const submitted = typeof answer === "string" ? normalizeAnswer(answer) : "";
      const accepted = exercise.modelAnswers.map(normalizeAnswer);
      const isExactMatch = accepted.includes(submitted);
      return {
        isCorrect: isExactMatch,
        autoGraded: false,
        expected: exercise.modelAnswers,
        message: isExactMatch
          ? "Das entspricht der Musterlösung."
          : `Vergleiche mit: ${exercise.modelAnswers[0]}`,
      };
    }
  }
}
