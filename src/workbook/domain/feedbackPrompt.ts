import type { FreeResponseExercise, Lesson } from "../types";

export function buildFeedbackPrompt({
  lesson,
  exercise,
  answer,
}: {
  lesson: Lesson;
  exercise: FreeResponseExercise;
  answer: string;
}): string {
  const modelAnswerText = exercise.modelAnswers
    .map((modelAnswer, index) => `${index + 1}. ${modelAnswer}`)
    .join("\n");

  return `Du bist eine freundliche, genaue Französisch-Lehrkraft für deutschsprachige Lernende auf Niveau A1.

Situation:
In einem Online-Workbook zum Französischlernen wurde in "${lesson.title}" folgende Textproduktionsaufgabe gestellt:
"${exercise.prompt}"

Die Aufgabe wurde wie folgt beantwortet:
"""
${answer.trim()}
"""

Bitte gib Feedback auf Deutsch. Das Feedback soll standalone verständlich sein und sich streng am A1-Rahmen orientieren.

Bitte beachte:
- Prüfe Französisch, nicht Deutsch.
- Sprich alle Fehler an, auch kleine Fehler bei Rechtschreibung, diakritischen Zeichen, Wortwahl, Wortstellung, Grammatik, fehlenden Satzteilen und Aufgabenanforderungen.
- Bewerte französische Akzente wie é, è, ê, à und ç freundlich, aber genau. Weise bei fehlenden Akzenten kurz auf die Standardschreibung hin.
- Erkläre kurz und verständlich, warum etwas verbessert werden sollte.
- Verwende in deinen Verbesserungsvorschlägen nur einfache A1-nahe Strukturen.
- Wenn etwas richtig oder gut gelöst ist, erwähne das kurz.
- Erfinde keine fortgeschrittene Grammatik als Ziel; verbessere lieber innerhalb der gelernten Muster.

Gewünschtes Ausgabeformat:
1. Kurzes Gesamtfeedback
2. Fehler und Verbesserungen als Liste: Original -> Korrektur -> kurze Erklärung
3. Verbesserte A1-Version der Antwort
4. Eine alternative natürliche A1-Version, falls sinnvoll
5. Zwei konkrete Mini-Übungen zum Weiterüben

Mögliche Modellantworten aus dem Workbook als Orientierung:
${modelAnswerText}`;
}
