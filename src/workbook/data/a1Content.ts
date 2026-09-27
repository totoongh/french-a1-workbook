import type { CurriculumUnit, Lesson, Lexeme } from "../types";

export const researchSources = [
  {
    "title": "CEFR A1 descriptors, Council of Europe",
    "url": "https://www.coe.int/fr/web/common-european-framework-reference-languages/cefr-descriptors-search",
    "note": "Rahmen für A1-Ziele: vertraute Ausdrücke, einfache Fragen und direkte Alltagssituationen."
  },
  {
    "title": "TV5MONDE – Apprendre le français",
    "url": "https://apprendre.tv5monde.com/fr",
    "note": "Authentische Übungen und Lernimpulse für Französisch als Fremdsprache."
  },
  {
    "title": "Le Point du FLE",
    "url": "https://www.lepointdufle.net/",
    "note": "Thematische Orientierung für Wortschatz, Aussprache und A1-Grammatik."
  }
];

export const curriculum: CurriculumUnit[] = [
  {
    "id": "greetings",
    "title": "Begrüßen und sich vorstellen",
    "cefrGoal": "Ich kann sehr einfache Begrüßungen verstehen und sagen, wer ich bin, woher ich komme und wo ich wohne.",
    "themes": [
      "Begrüßungen",
      "Name",
      "Herkunft",
      "Wohnort",
      "Höflichkeit"
    ],
    "status": "ready"
  },
  {
    "id": "greetings-1a",
    "moduleCode": "1a",
    "title": "Erweiterter Wortschatz und Grammatik zu Lektion 1",
    "cefrGoal": "Ich kann Personen genauer vorstellen und das Verb 'sein' in einfachen Sätzen bewusst verwenden.",
    "themes": [
      "Mehr Redemittel",
      "Personenangaben",
      "Pronomen",
      "être im Präsens"
    ],
    "status": "ready"
  },
  {
    "id": "alphabet",
    "title": "Alphabet und erste Aussprache",
    "cefrGoal": "Ich erkenne die französischen Sonderbuchstaben und kann einfache Wörter langsam lesen.",
    "themes": [
      "Alphabet",
      "Akzente é, è, ê",
      "ç",
      "ou / oi",
      "eau / au",
      "ch",
      "stummes e"
    ],
    "status": "ready",
    "plan": {
      "overview": "Diese Lektion führt in das französische Alphabet, Akzente und typische Laut-Buchstaben-Verbindungen ein. Der Fokus liegt auf Wiedererkennen, langsamem Lesen und nützlichen Rückfragen.",
      "canDo": [
        "Ich kann die französischen Akzente é, è, ê und ç erkennen.",
        "Ich kann typische Verbindungen wie ou, oi, eau und ch langsam lesen.",
        "Ich kann meinen Namen buchstabieren und höflich um Wiederholung bitten."
      ],
      "vocabulary": [
        {
          "french": "lettre",
          "german": "Buchstabe"
        },
        {
          "french": "alphabet",
          "german": "Alphabet"
        },
        {
          "french": "mot",
          "german": "Wort"
        },
        {
          "french": "Répétez, s'il vous plaît.",
          "german": "Wiederholen Sie bitte."
        },
        {
          "french": "plus lentement",
          "german": "langsamer"
        }
      ],
      "patterns": [
        {
          "french": "Comment épelez-vous votre nom ?",
          "german": "Wie schreibt man Ihren Namen?",
          "pattern": "französisches A1-Satzmuster"
        },
        {
          "french": "Veuillez répéter cela.",
          "german": "Bitte wiederholen Sie das.",
          "pattern": "französisches A1-Satzmuster"
        },
        {
          "french": "Parlez plus lentement, s'il vous plaît.",
          "german": "Sprechen Sie bitte langsamer.",
          "pattern": "französisches A1-Satzmuster"
        }
      ],
      "workbookTasks": [
        "Markiere in einer Wortliste alle Akzente (é, è, ê) und ç und ordne die Wörter der deutschen Bedeutung zu.",
        "Sortiere Wörter nach Lautschwierigkeit: einfach, aufmerksam lesen, später üben.",
        "Baue Mini-Dialoge mit 'Comment ça s'écrit ?' und 'Répétez, s'il vous plaît.'",
        "Lückentext: Bitte um Wiederholung oder langsameres Sprechen einsetzen."
      ],
      "checkpoint": "Mini-Aufgabe am Ende: Drei bekannte Wörter lesen, den eigenen Namen buchstabieren und einen Satz formulieren, mit dem man um Wiederholung bittet."
    }
  },
  {
    "id": "alphabet-2a",
    "moduleCode": "2a",
    "title": "Erweiterter Wortschatz und Grammatik zu Lektion 2",
    "cefrGoal": "Ich kann typische Unterrichts- und Workbook-Anweisungen verstehen und höflich um Hilfe beim Lesen, Schreiben und Verstehen bitten.",
    "themes": [
      "Unterrichtssprache",
      "Lernmaterial",
      "Imperative",
      "Feedback"
    ],
    "status": "ready"
  },
  {
    "id": "origin-language",
    "title": "Herkunft, Länder und Sprachen",
    "cefrGoal": "Ich kann einfache Fragen zu Herkunft und Sprache stellen und beantworten.",
    "themes": [
      "Länder",
      "Sprachen",
      "Fragewörter",
      "Verneinung"
    ],
    "status": "ready",
    "plan": {
      "overview": "Diese Lektion erweitert die Vorstellung aus Lektion 1. Der Fokus liegt auf Herkunft, Wohnort und Sprachen, inklusive einfacher Verneinung mit 'ne … pas'. Sie eignet sich gut als erstes echtes Austausch-Kapitel, weil Lernende fast jeden Satz persönlich variieren können.",
      "canDo": [
        "Ich kann sagen, aus welchem Land und welcher Stadt ich komme.",
        "Ich kann fragen, woher jemand kommt und welche Sprache jemand spricht.",
        "Ich kann einfach sagen, dass ich eine Sprache nicht spreche."
      ],
      "vocabulary": [
        {
          "french": "Allemagne",
          "german": "Deutschland"
        },
        {
          "french": "France",
          "german": "Frankreich"
        },
        {
          "french": "Belgique",
          "german": "Belgien"
        },
        {
          "french": "Autriche",
          "german": "Österreich"
        },
        {
          "french": "Suisse",
          "german": "die Schweiz"
        },
        {
          "french": "français",
          "german": "Französisch"
        },
        {
          "french": "Allemand",
          "german": "Deutsch"
        },
        {
          "french": "Anglais",
          "german": "Englisch"
        }
      ],
      "patterns": [
        {
          "french": "D'où venez-vous ?",
          "german": "Woher kommen Sie?",
          "pattern": "französisches A1-Satzmuster"
        },
        {
          "french": "Je viens d'Allemagne.",
          "german": "Ich komme aus Deutschland.",
          "pattern": "französisches A1-Satzmuster"
        },
        {
          "french": "Quelle langue parlez-vous?",
          "german": "Welche Sprache sprechen Sie?",
          "pattern": "französisches A1-Satzmuster"
        },
        {
          "french": "Je ne parle pas français.",
          "german": "Ich spreche kein Französisch.",
          "pattern": "französisches A1-Satzmuster"
        }
      ],
      "workbookTasks": [
        "Multiple Choice: Fragen zu Herkunft und Sprache erkennen.",
        "Zuordnung: Länder und Sprachen Französisch-Deutsch verbinden.",
        "Lückentext: 'Je viens de ___' und 'Je ne parle pas ___' vervollständigen.",
        "Freie Schreibaufgabe: Mini-Steckbrief mit Land, Stadt und Sprachen."
      ],
      "checkpoint": "Mini-Aufgabe am Ende: Einen kurzen Steckbrief schreiben und drei Fragen an eine andere Person formulieren."
    }
  },
  {
    "id": "origin-language-3a",
    "moduleCode": "3a",
    "title": "Erweiterter Wortschatz und Grammatik zu Lektion 3",
    "cefrGoal": "Ich kann Länder, Sprachen, Nationalität und einfache Ortsangaben genauer verstehen und in persönlichen Angaben verwenden.",
    "themes": [
      "Mehr Länder",
      "Nationalität",
      "Dokumente",
      "Ortswörter"
    ],
    "status": "ready"
  },
  {
    "id": "numbers-time",
    "title": "Zahlen, Uhrzeit und Kalender",
    "cefrGoal": "Ich kann Zahlen, Wochentage und einfache Zeitangaben in Alltagssituationen verwenden.",
    "themes": [
      "Zahlen",
      "Uhrzeit",
      "Wochentage",
      "Monate"
    ],
    "status": "ready",
    "plan": {
      "overview": "Diese Lektion baut numerische Alltagssicherheit auf: Telefonnummern, Alter, Preise, Uhrzeiten und einfache Termine. Die Aufgaben sollen viele kleine Wiederholungen haben, weil Zahlen auf A1 oft nicht schwer, aber flüchtig sind.",
      "canDo": [
        "Ich kann Zahlen bis 20 sicher erkennen und schreiben.",
        "Ich kann nach Uhrzeit, Alter und Telefonnummer fragen.",
        "Ich kann einfache Termine mit Wochentag und Uhrzeit verstehen."
      ],
      "vocabulary": [
        {
          "french": "zéro",
          "german": "null"
        },
        {
          "french": "un",
          "german": "eins"
        },
        {
          "french": "deux",
          "german": "zwei"
        },
        {
          "french": "trois",
          "german": "drei"
        },
        {
          "french": "dix",
          "german": "zehn"
        },
        {
          "french": "vingt",
          "german": "zwanzig"
        },
        {
          "french": "l'heure",
          "german": "die Uhr / Stunde"
        },
        {
          "french": "aujourd'hui",
          "german": "heute"
        },
        {
          "french": "demain",
          "german": "morgen"
        },
        {
          "french": "lundi",
          "german": "Montag"
        }
      ],
      "patterns": [
        {
          "french": "Quelle heure est-il ?",
          "german": "Wie spät ist es?",
          "pattern": "französisches A1-Satzmuster"
        },
        {
          "french": "Il est neuf heures.",
          "german": "Es ist neun Uhr.",
          "pattern": "französisches A1-Satzmuster"
        },
        {
          "french": "Quel âge avez-vous ?",
          "german": "Wie alt sind Sie?",
          "pattern": "französisches A1-Satzmuster"
        },
        {
          "french": "Le rendez-vous est lundi.",
          "german": "Der Termin ist am Montag.",
          "pattern": "französisches A1-Satzmuster"
        }
      ],
      "workbookTasks": [
        "Zahlen-Diktat ohne Audio: Ziffern und ausgeschriebene Zahlen verbinden.",
        "Uhrzeit-Multiple-Choice: passende Zeitangabe zum Satz auswählen.",
        "Kalenderübung: Wochentage in die richtige Reihenfolge bringen.",
        "Dialog ergänzen: nach Uhrzeit, Alter und Termin fragen."
      ],
      "checkpoint": "Mini-Aufgabe am Ende: Drei Zahlen notieren, eine Uhrzeit schreiben und einen einfachen Termin-Satz bilden."
    }
  },
  {
    "id": "numbers-time-4a",
    "moduleCode": "4a",
    "title": "Erweiterter Wortschatz und Grammatik zu Lektion 4",
    "cefrGoal": "Ich kann Zahlen bis 100, Monate, Datum und einfache Zeitadverbien in Termin- und Kalendertexten verstehen.",
    "themes": [
      "Zahlen bis 100",
      "Monate",
      "Datum",
      "Kalender"
    ],
    "status": "ready"
  },
  {
    "id": "family-people",
    "title": "Familie und Personen",
    "cefrGoal": "Ich kann nahe Personen benennen und einfache Angaben zu Familie und Beruf verstehen.",
    "themes": [
      "Familie",
      "Alter",
      "Berufe",
      "Personenbeschreibung"
    ],
    "status": "ready",
    "plan": {
      "overview": "Diese Lektion verschiebt den Fokus von 'ich' zu anderen Personen. Lernende sollen Familienmitglieder benennen, einfache Besitzstrukturen verstehen und sehr kurze Beschreibungen mit Name, Alter, Beziehung und Beruf lesen.",
      "canDo": [
        "Ich kann enge Familienmitglieder benennen.",
        "Ich kann sagen, wer eine Person ist und wie alt sie ungefähr ist.",
        "Ich kann einfache Sätze über Beruf oder Rolle in der Familie verstehen."
      ],
      "vocabulary": [
        {
          "french": "la famille",
          "german": "die Familie"
        },
        {
          "french": "la mère",
          "german": "die Mutter"
        },
        {
          "french": "le père",
          "german": "der Vater"
        },
        {
          "french": "la soeur",
          "german": "die Schwester"
        },
        {
          "french": "le frère",
          "german": "der Bruder"
        },
        {
          "french": "la grand-mère",
          "german": "die Großmutter"
        },
        {
          "french": "le grand-père",
          "german": "der Großvater"
        },
        {
          "french": "professeur",
          "german": "Lehrer"
        },
        {
          "french": "la médecin",
          "german": "Ärztin"
        }
      ],
      "patterns": [
        {
          "french": "C'est ma mère.",
          "german": "Das ist meine Mutter.",
          "pattern": "französisches A1-Satzmuster"
        },
        {
          "french": "C'est mon père.",
          "german": "Das ist mein Vater.",
          "pattern": "französisches A1-Satzmuster"
        },
        {
          "french": "Elle est enseignante.",
          "german": "Sie ist Lehrerin.",
          "pattern": "französisches A1-Satzmuster"
        },
        {
          "french": "Il a trente ans.",
          "german": "Er ist dreißig Jahre alt.",
          "pattern": "französisches A1-Satzmuster"
        }
      ],
      "workbookTasks": [
        "Bildlose Zuordnung: Familienwörter nach weiblich/männlich gruppieren.",
        "Multiple Choice: 'mon' und 'ma' in kurzen Sätzen unterscheiden.",
        "Lückentext: 'ma mère', 'mon père' und einfache Berufssätze einsetzen.",
        "Freie Aufgabe: Drei Sätze über eine fiktive Familie schreiben."
      ],
      "checkpoint": "Mini-Aufgabe am Ende: Eine Person aus einer Familie mit Beziehung, Name und einer einfachen Zusatzinfo vorstellen."
    }
  },
  {
    "id": "family-people-5a",
    "moduleCode": "5a",
    "title": "Erweiterter Wortschatz und Grammatik zu Lektion 5",
    "cefrGoal": "Ich kann Familienbeziehungen, Berufe und einfache Eigenschaften genauer beschreiben und Possessivformen wie mon/ma/ton/ta erkennen.",
    "themes": [
      "Mehr Familie",
      "Eigenschaften",
      "Berufe",
      "Possessive"
    ],
    "status": "ready"
  },
  {
    "id": "food",
    "title": "Essen, Trinken und Café",
    "cefrGoal": "Ich kann einfache Bestellungen machen und sagen, was ich möchte oder nicht möchte.",
    "themes": [
      "Lebensmittel",
      "Getränke",
      "Bestellen",
      "Vorlieben"
    ],
    "status": "ready"
  },
  {
    "id": "food-6a",
    "moduleCode": "6a",
    "title": "Erweiterter Wortschatz und Grammatik zu Lektion 6",
    "cefrGoal": "Ich kann im Restaurant mehr Speisen, Getränke, Mengen und Bezahlsituationen verstehen und einfache Bestellungen genauer formulieren.",
    "themes": [
      "Restaurant",
      "Geschirr",
      "Mengen",
      "Bezahlen"
    ],
    "status": "ready"
  },
  {
    "id": "shopping",
    "title": "Einkaufen, Preise und Farben",
    "cefrGoal": "Ich kann nach Preisen fragen, Farben nennen und einfache Kaufsätze verstehen.",
    "themes": [
      "Preise",
      "Kleidung",
      "Farben",
      "Mengen"
    ],
    "status": "ready"
  },
  {
    "id": "shopping-7a",
    "moduleCode": "7a",
    "title": "Erweiterter Wortschatz und Grammatik zu Lektion 7",
    "cefrGoal": "Ich kann Farben, Kleidung, Auswahlwörter und Bezahlfragen in einfachen Einkaufsgesprächen verwenden.",
    "themes": [
      "Mehr Farben",
      "Mehr Kleidung",
      "Auswahl",
      "Bezahlen"
    ],
    "status": "ready"
  },
  {
    "id": "home",
    "title": "Wohnen und Gegenstände",
    "cefrGoal": "Ich kann Zimmer und häufige Dinge im Haus benennen und einfache Ortsangaben machen.",
    "themes": [
      "Wohnung",
      "Räume",
      "Möbel",
      "Präpositionen"
    ],
    "status": "ready"
  },
  {
    "id": "places",
    "title": "Orte, Weg und Verkehr",
    "cefrGoal": "Ich kann nach Orten fragen und sehr einfache Wegbeschreibungen verstehen.",
    "themes": [
      "Stadt",
      "Verkehr",
      "Richtung",
      "Wegbeschreibung"
    ],
    "status": "ready"
  },
  {
    "id": "daily-life",
    "title": "Alltag, Bedürfnisse und Bitten",
    "cefrGoal": "Ich kann einfache Alltagshandlungen, Wünsche und Bitten ausdrücken.",
    "themes": [
      "Tagesablauf",
      "Modalität",
      "Bitten",
      "Probleme"
    ],
    "status": "ready"
  }
];

export const lexemes: Lexeme[] = [
  {
    "id": "pershendetje",
    "french": "salut",
    "german": "Hallo",
    "category": "Begrüßung"
  },
  {
    "id": "miremengjes",
    "french": "Bonjour",
    "german": "Guten Morgen",
    "category": "Begrüßung"
  },
  {
    "id": "miredita",
    "french": "Bonjour",
    "german": "Guten Tag",
    "category": "Begrüßung"
  },
  {
    "id": "mirembrema",
    "french": "Bonsoir",
    "german": "Guten Abend",
    "category": "Begrüßung"
  },
  {
    "id": "naten",
    "french": "Bonne nuit",
    "german": "Gute Nacht",
    "category": "Begrüßung"
  },
  {
    "id": "faleminderit",
    "french": "Merci",
    "german": "Danke",
    "category": "Höflichkeit"
  },
  {
    "id": "ju-lutem",
    "french": "S'il vous plaît",
    "german": "Bitte",
    "category": "Höflichkeit"
  },
  {
    "id": "me-falni",
    "french": "excusez-moi",
    "german": "Entschuldigung",
    "category": "Höflichkeit"
  },
  {
    "id": "po",
    "french": "oui",
    "german": "ja",
    "category": "Basiswort"
  },
  {
    "id": "jo",
    "french": "non",
    "german": "nein",
    "category": "Basiswort"
  },
  {
    "id": "une",
    "french": "je",
    "german": "ich",
    "category": "Pronomen"
  },
  {
    "id": "ti",
    "french": "tu",
    "german": "du",
    "category": "Pronomen"
  },
  {
    "id": "ai",
    "french": "il",
    "german": "er",
    "category": "Pronomen"
  },
  {
    "id": "ajo",
    "french": "elle",
    "german": "sie",
    "category": "Pronomen"
  },
  {
    "id": "ne",
    "french": "nous",
    "german": "wir",
    "category": "Pronomen"
  },
  {
    "id": "ju",
    "french": "vous",
    "german": "Sie / ihr",
    "category": "Pronomen"
  },
  {
    "id": "si",
    "french": "comment",
    "german": "wie",
    "category": "Fragewort"
  },
  {
    "id": "ku",
    "french": "où",
    "german": "wo",
    "category": "Fragewort"
  },
  {
    "id": "nga",
    "french": "de",
    "german": "aus / von",
    "category": "Präposition"
  },
  {
    "id": "ne-prep",
    "french": "à / en",
    "german": "in / nach",
    "category": "Präposition"
  },
  {
    "id": "jam",
    "french": "je suis",
    "german": "ich bin",
    "category": "Verb"
  },
  {
    "id": "je",
    "french": "tu es",
    "german": "du bist",
    "category": "Verb"
  },
  {
    "id": "eshte",
    "french": "il/elle est",
    "german": "er/sie/es ist",
    "category": "Verb"
  },
  {
    "id": "quhem",
    "french": "je m'appelle",
    "german": "ich heiße",
    "category": "Verb"
  },
  {
    "id": "quheni",
    "french": "vous vous appelez",
    "german": "Sie heißen",
    "category": "Verb"
  },
  {
    "id": "banoj",
    "french": "j'habite",
    "german": "ich wohne",
    "category": "Verb"
  },
  {
    "id": "flas",
    "french": "je parle",
    "german": "ich spreche",
    "category": "Verb"
  },
  {
    "id": "nuk",
    "french": "ne pas",
    "german": "nicht (ne … pas)",
    "category": "Verneinung"
  },
  {
    "id": "shqip",
    "french": "le français",
    "german": "Französisch (Sprache)",
    "category": "Sprache",
    "note": "Die Sprache. Das Land heißt la France."
  },
  {
    "id": "gjermanisht",
    "french": "l'allemand",
    "german": "Deutsch (Sprache)",
    "category": "Sprache"
  },
  {
    "id": "gjermania",
    "french": "Allemagne",
    "german": "Deutschland",
    "category": "Land"
  },
  {
    "id": "shqiperia",
    "french": "France",
    "german": "Frankreich",
    "category": "Land"
  },
  {
    "id": "kosova",
    "french": "Belgique",
    "german": "Belgien",
    "category": "Land"
  },
  {
    "id": "nje",
    "french": "un / une",
    "german": "eins / ein / eine",
    "category": "Zahl"
  },
  {
    "id": "dy",
    "french": "deux",
    "german": "zwei",
    "category": "Zahl"
  },
  {
    "id": "tre",
    "french": "trois",
    "german": "drei",
    "category": "Zahl"
  },
  {
    "id": "uje",
    "french": "l'eau",
    "german": "Wasser",
    "category": "Essen und Trinken"
  },
  {
    "id": "kafe",
    "french": "le café",
    "german": "Kaffee",
    "category": "Essen und Trinken"
  },
  {
    "id": "buke",
    "french": "le pain",
    "german": "Brot",
    "category": "Essen und Trinken"
  },
  {
    "id": "sa-kushton",
    "french": "Combien ça coûte ?",
    "german": "Wie viel kostet es?",
    "category": "Einkaufen"
  },
  {
    "id": "familja",
    "french": "la famille",
    "german": "die Familie",
    "category": "Familie"
  },
  {
    "id": "nena",
    "french": "la mère",
    "german": "die Mutter",
    "category": "Familie"
  },
  {
    "id": "babai",
    "french": "le père",
    "german": "der Vater",
    "category": "Familie"
  },
  {
    "id": "motra",
    "french": "la soeur",
    "german": "die Schwester",
    "category": "Familie"
  },
  {
    "id": "vellai",
    "french": "le frère",
    "german": "der Bruder",
    "category": "Familie"
  },
  {
    "id": "gjyshja",
    "french": "la grand-mère",
    "german": "die Großmutter",
    "category": "Familie"
  },
  {
    "id": "gjyshi",
    "french": "le grand-père",
    "german": "der Großvater",
    "category": "Familie"
  },
  {
    "id": "ime",
    "french": "ma",
    "german": "meine",
    "category": "Possessiv"
  },
  {
    "id": "im",
    "french": "mon",
    "german": "mein",
    "category": "Possessiv"
  },
  {
    "id": "ky",
    "french": "celui-ci",
    "german": "dieser hier (maskulin)",
    "category": "Zeigewort"
  },
  {
    "id": "kjo",
    "french": "celle-ci",
    "german": "diese hier (feminin)",
    "category": "Zeigewort"
  },
  {
    "id": "vjec",
    "french": "ans",
    "german": "Jahre alt",
    "category": "Alter"
  },
  {
    "id": "mesuese",
    "french": "la professeure",
    "german": "die Lehrerin",
    "category": "Beruf"
  },
  {
    "id": "mesues",
    "french": "le professeur",
    "german": "der Lehrer",
    "category": "Beruf"
  },
  {
    "id": "mjeke",
    "french": "la médecin",
    "german": "die Ärztin",
    "category": "Beruf"
  },
  {
    "id": "mjek",
    "french": "le médecin",
    "german": "der Arzt",
    "category": "Beruf"
  },
  {
    "id": "dua",
    "french": "je veux / je voudrais",
    "german": "ich will / ich möchte",
    "category": "Verb"
  },
  {
    "id": "kam",
    "french": "j'ai",
    "german": "ich habe",
    "category": "Verb"
  },
  {
    "id": "uri",
    "french": "la faim",
    "german": "Hunger",
    "category": "Essen und Trinken"
  },
  {
    "id": "etje",
    "french": "la soif",
    "german": "Durst",
    "category": "Essen und Trinken"
  },
  {
    "id": "caj",
    "french": "le thé",
    "german": "Tee",
    "category": "Essen und Trinken"
  },
  {
    "id": "djath",
    "french": "le fromage",
    "german": "Käse",
    "category": "Essen und Trinken"
  },
  {
    "id": "qumesht",
    "french": "le lait",
    "german": "Milch",
    "category": "Essen und Trinken"
  },
  {
    "id": "sheqer",
    "french": "le sucre",
    "german": "Zucker",
    "category": "Essen und Trinken"
  },
  {
    "id": "me",
    "french": "avec",
    "german": "mit",
    "category": "Präposition"
  },
  {
    "id": "pa",
    "french": "sans",
    "german": "ohne",
    "category": "Präposition"
  },
  {
    "id": "menyja",
    "french": "le menu",
    "german": "die Speisekarte",
    "category": "Café"
  },
  {
    "id": "kjo-shopping",
    "french": "ceci",
    "german": "das hier",
    "category": "Einkaufen"
  },
  {
    "id": "kushton",
    "french": "ça coûte",
    "german": "es kostet",
    "category": "Einkaufen"
  },
  {
    "id": "euro",
    "french": "l'euro",
    "german": "der Euro",
    "category": "Einkaufen"
  },
  {
    "id": "leke",
    "french": "le centime",
    "german": "der Cent",
    "category": "Einkaufen"
  },
  {
    "id": "ngjyre",
    "french": "la couleur",
    "german": "Farbe",
    "category": "Farbe"
  },
  {
    "id": "kuqe",
    "french": "rouge",
    "german": "rot",
    "category": "Farbe"
  },
  {
    "id": "zeze",
    "french": "noir",
    "german": "schwarz",
    "category": "Farbe"
  },
  {
    "id": "bardhe",
    "french": "blanc",
    "german": "weiß",
    "category": "Farbe"
  },
  {
    "id": "madhesi",
    "french": "la taille",
    "german": "Größe",
    "category": "Einkaufen"
  },
  {
    "id": "kemishe",
    "french": "la chemise",
    "german": "Hemd",
    "category": "Kleidung"
  },
  {
    "id": "fustan",
    "french": "la robe",
    "german": "Kleid",
    "category": "Kleidung"
  },
  {
    "id": "kepuce",
    "french": "les chaussures",
    "german": "Schuhe",
    "category": "Kleidung"
  },
  {
    "id": "shkronje",
    "french": "la lettre",
    "german": "Buchstabe",
    "category": "Alphabet"
  },
  {
    "id": "alfabet",
    "french": "l'alphabet",
    "german": "Alphabet",
    "category": "Alphabet"
  },
  {
    "id": "emer",
    "french": "le nom",
    "german": "Name",
    "category": "Alphabet"
  },
  {
    "id": "fjale",
    "french": "le mot",
    "german": "Wort",
    "category": "Alphabet"
  },
  {
    "id": "perseriteni",
    "french": "répétez",
    "german": "wiederholen Sie",
    "category": "Bitte"
  },
  {
    "id": "me-ngadale-word",
    "french": "plus lentement",
    "german": "langsamer",
    "category": "Bitte"
  },
  {
    "id": "shkruhet",
    "french": "ça s'écrit",
    "german": "man schreibt",
    "category": "Verb"
  },
  {
    "id": "flisni",
    "french": "parlez",
    "german": "sprechen Sie",
    "category": "Verb"
  },
  {
    "id": "cfare",
    "french": "quoi / quel",
    "german": "was / welche",
    "category": "Fragewort"
  },
  {
    "id": "gjuhe",
    "french": "la langue",
    "german": "Sprache",
    "category": "Sprache"
  },
  {
    "id": "anglisht",
    "french": "l'anglais",
    "german": "Englisch (Sprache)",
    "category": "Sprache"
  },
  {
    "id": "austria",
    "french": "Autriche",
    "german": "Österreich",
    "category": "Land"
  },
  {
    "id": "zvicra",
    "french": "Suisse",
    "german": "die Schweiz",
    "category": "Land"
  },
  {
    "id": "zero",
    "french": "zéro",
    "german": "null",
    "category": "Zahl"
  },
  {
    "id": "kater",
    "french": "quatre",
    "german": "vier",
    "category": "Zahl"
  },
  {
    "id": "pese",
    "french": "cinq",
    "german": "fünf",
    "category": "Zahl"
  },
  {
    "id": "gjashte",
    "french": "six",
    "german": "sechs",
    "category": "Zahl"
  },
  {
    "id": "shtate",
    "french": "sept",
    "german": "sieben",
    "category": "Zahl"
  },
  {
    "id": "tete",
    "french": "huit",
    "german": "acht",
    "category": "Zahl"
  },
  {
    "id": "nente",
    "french": "neuf",
    "german": "neun",
    "category": "Zahl"
  },
  {
    "id": "dhjete",
    "french": "dix",
    "german": "zehn",
    "category": "Zahl"
  },
  {
    "id": "njembedhjete",
    "french": "onze",
    "german": "elf",
    "category": "Zahl"
  },
  {
    "id": "dymbedhjete",
    "french": "douze",
    "german": "zwölf",
    "category": "Zahl"
  },
  {
    "id": "njezet",
    "french": "vingt",
    "german": "zwanzig",
    "category": "Zahl"
  },
  {
    "id": "ora",
    "french": "l'heure",
    "german": "die Uhr / Stunde",
    "category": "Zeit"
  },
  {
    "id": "sot",
    "french": "aujourd'hui",
    "german": "heute",
    "category": "Zeit"
  },
  {
    "id": "neser",
    "french": "demain",
    "german": "morgen",
    "category": "Zeit"
  },
  {
    "id": "e-hene",
    "french": "lundi",
    "german": "Montag",
    "category": "Zeit"
  },
  {
    "id": "e-marte",
    "french": "mardi",
    "german": "Dienstag",
    "category": "Zeit"
  },
  {
    "id": "e-merkure",
    "french": "mercredi",
    "german": "Mittwoch",
    "category": "Zeit"
  },
  {
    "id": "takimi",
    "french": "le rendez-vous",
    "german": "der Termin",
    "category": "Zeit"
  },
  {
    "id": "shtepia",
    "french": "la maison",
    "german": "das Haus / Zuhause",
    "category": "Wohnen"
  },
  {
    "id": "apartamenti",
    "french": "l'appartement",
    "german": "die Wohnung",
    "category": "Wohnen"
  },
  {
    "id": "dhoma",
    "french": "la pièce",
    "german": "das Zimmer",
    "category": "Wohnen"
  },
  {
    "id": "kuzhina",
    "french": "la cuisine",
    "german": "die Küche",
    "category": "Wohnen"
  },
  {
    "id": "banja",
    "french": "la salle de bain",
    "german": "das Bad",
    "category": "Wohnen"
  },
  {
    "id": "dhoma-gjumit",
    "french": "la chambre",
    "german": "das Schlafzimmer",
    "category": "Wohnen"
  },
  {
    "id": "tavolina",
    "french": "la table",
    "german": "der Tisch",
    "category": "Möbel"
  },
  {
    "id": "karrigia",
    "french": "la chaise",
    "german": "der Stuhl",
    "category": "Möbel"
  },
  {
    "id": "dera",
    "french": "la porte",
    "german": "die Tür",
    "category": "Möbel"
  },
  {
    "id": "dritarja",
    "french": "la fenêtre",
    "german": "das Fenster",
    "category": "Möbel"
  },
  {
    "id": "shtrati",
    "french": "le lit",
    "german": "das Bett",
    "category": "Möbel"
  },
  {
    "id": "ketu",
    "french": "ici",
    "german": "hier",
    "category": "Ort"
  },
  {
    "id": "atje",
    "french": "là",
    "german": "dort",
    "category": "Ort"
  },
  {
    "id": "mbi",
    "french": "sur",
    "german": "auf / über",
    "category": "Präposition"
  },
  {
    "id": "prane",
    "french": "près de",
    "german": "nahe bei",
    "category": "Präposition"
  },
  {
    "id": "ka",
    "french": "il y a / il a",
    "german": "es gibt / er hat",
    "category": "Verb"
  },
  {
    "id": "qyteti",
    "french": "la ville",
    "german": "die Stadt",
    "category": "Stadt"
  },
  {
    "id": "rruga",
    "french": "la rue",
    "german": "die Straße",
    "category": "Stadt"
  },
  {
    "id": "sheshi",
    "french": "la place",
    "german": "der Platz",
    "category": "Stadt"
  },
  {
    "id": "hoteli",
    "french": "l'hôtel",
    "german": "das Hotel",
    "category": "Stadt"
  },
  {
    "id": "stacioni",
    "french": "la gare / l'arrêt",
    "german": "der Bahnhof / die Haltestelle",
    "category": "Verkehr"
  },
  {
    "id": "autobusi",
    "french": "le bus",
    "german": "der Bus",
    "category": "Verkehr"
  },
  {
    "id": "taksia",
    "french": "le taxi",
    "german": "das Taxi",
    "category": "Verkehr"
  },
  {
    "id": "banka",
    "french": "la banque",
    "german": "die Bank",
    "category": "Stadt"
  },
  {
    "id": "farmacia",
    "french": "la pharmacie",
    "german": "die Apotheke",
    "category": "Stadt"
  },
  {
    "id": "dyqani",
    "french": "le magasin",
    "german": "der Laden",
    "category": "Stadt"
  },
  {
    "id": "majtas",
    "french": "à gauche",
    "german": "links",
    "category": "Richtung"
  },
  {
    "id": "djathtas",
    "french": "à droite",
    "german": "rechts",
    "category": "Richtung"
  },
  {
    "id": "drejt",
    "french": "tout droit",
    "german": "geradeaus",
    "category": "Richtung"
  },
  {
    "id": "afer",
    "french": "près",
    "german": "nah",
    "category": "Ort"
  },
  {
    "id": "larg",
    "french": "loin",
    "german": "weit weg",
    "category": "Ort"
  },
  {
    "id": "shkoni",
    "french": "allez",
    "german": "gehen Sie",
    "category": "Verb"
  },
  {
    "id": "kthehuni",
    "french": "tournez",
    "german": "biegen Sie ab",
    "category": "Verb"
  },
  {
    "id": "zgjohem",
    "french": "je me lève / je me réveille",
    "german": "ich stehe auf / wache auf",
    "category": "Alltag"
  },
  {
    "id": "punoj",
    "french": "je travaille",
    "german": "ich arbeite",
    "category": "Alltag"
  },
  {
    "id": "studioj",
    "french": "j'étudie",
    "german": "ich studiere / lerne",
    "category": "Alltag"
  },
  {
    "id": "lexoj",
    "french": "je lis",
    "german": "ich lese",
    "category": "Alltag"
  },
  {
    "id": "shkoj",
    "french": "je vais",
    "german": "ich gehe",
    "category": "Alltag"
  },
  {
    "id": "vij",
    "french": "je viens",
    "german": "ich komme",
    "category": "Alltag"
  },
  {
    "id": "ha",
    "french": "je mange",
    "german": "ich esse",
    "category": "Alltag"
  },
  {
    "id": "pi",
    "french": "je bois",
    "german": "ich trinke",
    "category": "Alltag"
  },
  {
    "id": "blej",
    "french": "j'achète",
    "german": "ich kaufe",
    "category": "Alltag"
  },
  {
    "id": "duhet",
    "french": "je dois",
    "german": "ich muss",
    "category": "Modalität"
  },
  {
    "id": "mund",
    "french": "je peux",
    "german": "ich kann",
    "category": "Modalität"
  },
  {
    "id": "tani",
    "french": "maintenant",
    "german": "jetzt",
    "category": "Zeit"
  },
  {
    "id": "me-vone",
    "french": "plus tard",
    "german": "später",
    "category": "Zeit"
  },
  {
    "id": "mengjes",
    "french": "le matin",
    "german": "am Morgen",
    "category": "Zeit"
  },
  {
    "id": "mbremje",
    "french": "le soir",
    "german": "am Abend",
    "category": "Zeit"
  },
  {
    "id": "problem",
    "french": "problème",
    "german": "Problem",
    "category": "Bitte"
  },
  {
    "id": "ndihme",
    "french": "l'aide",
    "german": "Hilfe",
    "category": "Bitte"
  },
  {
    "id": "telefon",
    "french": "le téléphone",
    "german": "Telefon",
    "category": "Alltag"
  },
  {
    "french": "au revoir",
    "german": "auf Wiedersehen",
    "category": "Begrüßung",
    "id": "x-greetings-01-mirupafshim",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "salut",
    "german": "hallo / tschüss (informell)",
    "category": "Begrüßung",
    "id": "x-greetings-02-tung",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "bienvenue",
    "german": "willkommen",
    "category": "Begrüßung",
    "id": "x-greetings-03-mire-se-vini",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "enchanté",
    "german": "freut mich",
    "category": "Redemittel",
    "id": "x-greetings-04-gezohem",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "de même",
    "german": "ebenfalls",
    "category": "Redemittel",
    "id": "x-greetings-05-po-ashtu",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "bien",
    "german": "gut",
    "category": "Adjektiv",
    "id": "x-greetings-06-mire",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "mauvais",
    "german": "schlecht",
    "category": "Adjektiv",
    "id": "x-greetings-07-keq",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "très / beaucoup",
    "german": "sehr / viel",
    "category": "Menge",
    "id": "x-greetings-08-shume",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "peu / un peu",
    "german": "wenig / ein bisschen",
    "category": "Menge",
    "id": "x-greetings-09-pak",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "aussi",
    "german": "auch",
    "category": "Funktionswort",
    "id": "x-greetings-10-edhe",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "seulement",
    "german": "nur",
    "category": "Funktionswort",
    "id": "x-greetings-11-vetem",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "Monsieur",
    "german": "Herr",
    "category": "Anrede",
    "id": "x-greetings-12-zoteri",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "Madame",
    "german": "Frau",
    "category": "Anrede",
    "id": "x-greetings-13-zonje",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "Mademoiselle",
    "german": "Fräulein / junge Frau",
    "category": "Anrede",
    "id": "x-greetings-14-zonjushe",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "mon nom",
    "german": "mein Name",
    "category": "Person",
    "id": "x-greetings-15-emri-im",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "le nom de famille",
    "german": "der Nachname",
    "category": "Person",
    "id": "x-greetings-16-mbiemri",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "l'adresse",
    "german": "die Adresse",
    "category": "Person",
    "id": "x-greetings-17-adresa",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "l'e-mail",
    "german": "die E-Mail",
    "category": "Person",
    "id": "x-greetings-18-emaili",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "le numéro",
    "german": "die Nummer",
    "category": "Person",
    "id": "x-greetings-19-numri",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "l'âge",
    "german": "das Alter",
    "category": "Person",
    "id": "x-greetings-20-mosha",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "le lieu / le pays",
    "german": "der Ort / das Land",
    "category": "Person",
    "id": "x-greetings-21-vendi",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "la personne",
    "german": "die Person",
    "category": "Person",
    "id": "x-greetings-22-personi",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "l'être humain",
    "german": "der Mensch",
    "category": "Person",
    "id": "x-greetings-23-njeriu",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "l'ami",
    "german": "der Freund",
    "category": "Person",
    "id": "x-greetings-24-shoku",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "l'amie",
    "german": "die Freundin",
    "category": "Person",
    "id": "x-greetings-25-shoqja",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "l'ami / l'hôte",
    "german": "der Freund / Gastgeber",
    "category": "Person",
    "id": "x-greetings-26-miku",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "l'amie / l'hôtesse",
    "german": "die Freundin / Gastgeberin",
    "category": "Person",
    "id": "x-greetings-27-mikja",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "l'étudiant",
    "german": "der Student",
    "category": "Person",
    "id": "x-greetings-28-studenti",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "l'étudiante",
    "german": "die Studentin",
    "category": "Person",
    "id": "x-greetings-29-studentja",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "français",
    "german": "Franzose / französisch (maskulin)",
    "category": "Nationalität",
    "id": "x-greetings-30-shqiptar",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "française",
    "german": "Französin / französisch (feminin)",
    "category": "Nationalität",
    "id": "x-greetings-31-shqiptare",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "allemand",
    "german": "Deutscher / deutsch (maskulin)",
    "category": "Nationalität",
    "id": "x-greetings-32-gjerman",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "allemande",
    "german": "Deutsche / deutsch (feminin)",
    "category": "Nationalität",
    "id": "x-greetings-33-gjermane",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "ils",
    "german": "sie (Plural, maskulin/gemischt)",
    "category": "Pronomen",
    "id": "x-greetings-34-ata",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "elles",
    "german": "sie (Plural, feminin)",
    "category": "Pronomen",
    "id": "x-greetings-35-ato",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "nous sommes",
    "german": "wir sind",
    "category": "Verb",
    "id": "x-greetings-36-jemi",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "vous êtes",
    "german": "Sie sind / ihr seid",
    "category": "Verb",
    "id": "x-greetings-37-jeni",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "ils sont",
    "german": "sie sind",
    "category": "Verb",
    "id": "x-greetings-38-jane",
    "note": "Modul 1a: Erweiterter Wortschatz und Grammatik zu Lektion 1"
  },
  {
    "french": "le livre",
    "german": "das Buch",
    "category": "Lernen",
    "id": "x-alphabet-01-libri",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "le cahier",
    "german": "das Heft",
    "category": "Lernen",
    "id": "x-alphabet-02-fletorja",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "le crayon",
    "german": "der Bleistift",
    "category": "Lernen",
    "id": "x-alphabet-03-lapsi",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "le stylo",
    "german": "der Kugelschreiber",
    "category": "Lernen",
    "id": "x-alphabet-04-stilolapsi",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "le tableau",
    "german": "die Tafel",
    "category": "Lernen",
    "id": "x-alphabet-05-tabela",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "la page",
    "german": "die Seite",
    "category": "Lernen",
    "id": "x-alphabet-06-faqja",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "le devoir",
    "german": "die Aufgabe / Hausaufgabe",
    "category": "Lernen",
    "id": "x-alphabet-07-detyra",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "l'exercice",
    "german": "die Übung",
    "category": "Lernen",
    "id": "x-alphabet-08-ushtrimi",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "la question",
    "german": "die Frage",
    "category": "Lernen",
    "id": "x-alphabet-09-pyetja",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "la réponse",
    "german": "die Antwort",
    "category": "Lernen",
    "id": "x-alphabet-10-pergjigjja",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "la leçon",
    "german": "die Lektion",
    "category": "Lernen",
    "id": "x-alphabet-11-mesimi",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "la classe",
    "german": "die Klasse",
    "category": "Lernen",
    "id": "x-alphabet-12-klasa",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "l'école",
    "german": "die Schule",
    "category": "Lernen",
    "id": "x-alphabet-13-shkolla",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "le cours",
    "german": "der Kurs",
    "category": "Lernen",
    "id": "x-alphabet-14-kursi",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "l'élève",
    "german": "der Schüler",
    "category": "Lernen",
    "id": "x-alphabet-15-nxenesi",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "l'élève",
    "german": "die Schülerin",
    "category": "Lernen",
    "id": "x-alphabet-16-nxenesja",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "le professeur",
    "german": "der Lehrer",
    "category": "Beruf",
    "id": "x-alphabet-17-mesuesi",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "la professeure",
    "german": "die Lehrerin",
    "category": "Beruf",
    "id": "x-alphabet-18-mesuesja",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "j'écris",
    "german": "ich schreibe",
    "category": "Verb",
    "id": "x-alphabet-19-shkruaj",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "lisez",
    "german": "lesen Sie",
    "category": "Verb",
    "id": "x-alphabet-20-lexoni",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "j'entends",
    "german": "ich höre",
    "category": "Verb",
    "id": "x-alphabet-21-degjoj",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "je comprends",
    "german": "ich verstehe",
    "category": "Verb",
    "id": "x-alphabet-22-kuptoj",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "j'apprends",
    "german": "ich lerne",
    "category": "Verb",
    "id": "x-alphabet-23-mesoj",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "je sais",
    "german": "ich weiß",
    "category": "Verb",
    "id": "x-alphabet-24-di",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "ouvrez",
    "german": "öffnen Sie",
    "category": "Verb",
    "id": "x-alphabet-25-hapni",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "fermez",
    "german": "schließen Sie",
    "category": "Verb",
    "id": "x-alphabet-26-mbyllni",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "regardez",
    "german": "schauen Sie",
    "category": "Verb",
    "id": "x-alphabet-27-shikoni",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "dites",
    "german": "sagen Sie",
    "category": "Verb",
    "id": "x-alphabet-28-thoni",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "correct",
    "german": "richtig",
    "category": "Feedback",
    "id": "x-alphabet-29-sakte",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "faux / erreur",
    "german": "falsch / Fehler",
    "category": "Feedback",
    "id": "x-alphabet-30-gabim",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "facile",
    "german": "leicht",
    "category": "Adjektiv",
    "id": "x-alphabet-31-lehte",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "difficile",
    "german": "schwer / schwierig",
    "category": "Adjektiv",
    "id": "x-alphabet-32-veshtire",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "vite",
    "german": "schnell",
    "category": "Adverb",
    "id": "x-alphabet-33-shpejt",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "clair",
    "german": "klar / deutlich",
    "category": "Adverb",
    "id": "x-alphabet-34-qarte",
    "note": "Modul 2a: Lernen, Schreiben und Unterrichtssprache"
  },
  {
    "french": "Italie",
    "german": "Italien",
    "category": "Land",
    "id": "x-origin-language-01-italia",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "France",
    "german": "Frankreich",
    "category": "Land",
    "id": "x-origin-language-02-franca",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "Espagne",
    "german": "Spanien",
    "category": "Land",
    "id": "x-origin-language-03-spanja",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "Turquie",
    "german": "Türkei",
    "category": "Land",
    "id": "x-origin-language-04-turqia",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "Grèce",
    "german": "Griechenland",
    "category": "Land",
    "id": "x-origin-language-05-greqia",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "Grande-Bretagne",
    "german": "Großbritannien",
    "category": "Land",
    "id": "x-origin-language-06-britania",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "les États-Unis",
    "german": "die USA",
    "category": "Land",
    "id": "x-origin-language-07-shtetet-e-bashkuara",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "Macédoine du Nord",
    "german": "Nordmazedonien",
    "category": "Land",
    "id": "x-origin-language-08-maqedonia-e-veriut",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "Monténégro",
    "german": "Montenegro",
    "category": "Land",
    "id": "x-origin-language-09-mali-i-zi",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "Serbie",
    "german": "Serbien",
    "category": "Land",
    "id": "x-origin-language-10-serbia",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "Bosnie",
    "german": "Bosnien",
    "category": "Land",
    "id": "x-origin-language-11-bosnja",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "Croatie",
    "german": "Kroatien",
    "category": "Land",
    "id": "x-origin-language-12-kroacia",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "l'italien",
    "german": "Italienisch",
    "category": "Sprache",
    "id": "x-origin-language-13-italisht",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "le français",
    "german": "Französisch",
    "category": "Sprache",
    "id": "x-origin-language-14-frengjisht",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "l'espagnol",
    "german": "Spanisch",
    "category": "Sprache",
    "id": "x-origin-language-15-spanjisht",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "le turc",
    "german": "Türkisch",
    "category": "Sprache",
    "id": "x-origin-language-16-turqisht",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "le grec",
    "german": "Griechisch",
    "category": "Sprache",
    "id": "x-origin-language-17-greqisht",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "le serbe",
    "german": "Serbisch",
    "category": "Sprache",
    "id": "x-origin-language-18-serbisht",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "la ville",
    "german": "Stadt",
    "category": "Ort",
    "id": "x-origin-language-19-qytet",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "le village",
    "german": "Dorf",
    "category": "Ort",
    "id": "x-origin-language-20-fshat",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "la capitale",
    "german": "Hauptstadt",
    "category": "Ort",
    "id": "x-origin-language-21-kryeqytet",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "la région",
    "german": "Region",
    "category": "Ort",
    "id": "x-origin-language-22-rajon",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "le lieu de naissance",
    "german": "Geburtsort",
    "category": "Person",
    "id": "x-origin-language-23-vendlindje",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "la nationalité",
    "german": "Nationalität",
    "category": "Person",
    "id": "x-origin-language-24-kombesi",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "le passeport",
    "german": "der Pass",
    "category": "Dokument",
    "id": "x-origin-language-25-pasaporte",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "le document",
    "german": "Dokument",
    "category": "Dokument",
    "id": "x-origin-language-26-dokument",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "la carte d'identité",
    "german": "Personalausweis",
    "category": "Dokument",
    "id": "x-origin-language-27-karte-identiteti",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "je vis",
    "german": "ich lebe",
    "category": "Verb",
    "id": "x-origin-language-28-jetoj",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "né",
    "german": "geboren",
    "category": "Person",
    "id": "x-origin-language-29-lindur",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "ici",
    "german": "hier",
    "category": "Ort",
    "id": "x-origin-language-30-ketu",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "là",
    "german": "dort",
    "category": "Ort",
    "id": "x-origin-language-31-atje",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "près",
    "german": "nah",
    "category": "Ort",
    "id": "x-origin-language-32-afer",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "loin",
    "german": "weit weg",
    "category": "Ort",
    "id": "x-origin-language-33-larg",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "étranger",
    "german": "ausländisch / fremd (maskulin)",
    "category": "Adjektiv",
    "id": "x-origin-language-34-i-huaj",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "étrangère",
    "german": "ausländisch / fremd (feminin)",
    "category": "Adjektiv",
    "id": "x-origin-language-35-e-huaj",
    "note": "Modul 3a: Länder, Nationalitäten und Herkunft genauer sagen"
  },
  {
    "french": "treize",
    "german": "dreizehn",
    "category": "Zahl",
    "id": "x-numbers-time-01-trembedhjete",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "quatorze",
    "german": "vierzehn",
    "category": "Zahl",
    "id": "x-numbers-time-02-katermbedhjete",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "quinze",
    "german": "fünfzehn",
    "category": "Zahl",
    "id": "x-numbers-time-03-pesembedhjete",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "seize",
    "german": "sechzehn",
    "category": "Zahl",
    "id": "x-numbers-time-04-gjashtembedhjete",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "dix-sept",
    "german": "siebzehn",
    "category": "Zahl",
    "id": "x-numbers-time-05-shtatembedhjete",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "dix-huit",
    "german": "achtzehn",
    "category": "Zahl",
    "id": "x-numbers-time-06-tetembedhjete",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "dix-neuf",
    "german": "neunzehn",
    "category": "Zahl",
    "id": "x-numbers-time-07-nentembedhjete",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "trente",
    "german": "dreißig",
    "category": "Zahl",
    "id": "x-numbers-time-08-tridhjete",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "quarante",
    "german": "vierzig",
    "category": "Zahl",
    "id": "x-numbers-time-09-dyzet",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "cinquante",
    "german": "fünfzig",
    "category": "Zahl",
    "id": "x-numbers-time-10-pesedhjete",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "soixante",
    "german": "sechzig",
    "category": "Zahl",
    "id": "x-numbers-time-11-gjashtedhjete",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "cent",
    "german": "hundert",
    "category": "Zahl",
    "id": "x-numbers-time-12-njeqind",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "jeudi",
    "german": "Donnerstag",
    "category": "Zeit",
    "id": "x-numbers-time-13-e-enjte",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "vendredi",
    "german": "Freitag",
    "category": "Zeit",
    "id": "x-numbers-time-14-e-premte",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "samedi",
    "german": "Samstag",
    "category": "Zeit",
    "id": "x-numbers-time-15-e-shtune",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "dimanche",
    "german": "Sonntag",
    "category": "Zeit",
    "id": "x-numbers-time-16-e-diel",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "la semaine",
    "german": "die Woche",
    "category": "Zeit",
    "id": "x-numbers-time-17-java",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "le mois",
    "german": "der Monat",
    "category": "Zeit",
    "id": "x-numbers-time-18-muaji",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "l'année",
    "german": "das Jahr",
    "category": "Zeit",
    "id": "x-numbers-time-19-viti",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "la date",
    "german": "das Datum",
    "category": "Zeit",
    "id": "x-numbers-time-20-data",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "janvier",
    "german": "Januar",
    "category": "Monat",
    "id": "x-numbers-time-21-janar",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "février",
    "german": "Februar",
    "category": "Monat",
    "id": "x-numbers-time-22-shkurt",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "mars",
    "german": "März",
    "category": "Monat",
    "id": "x-numbers-time-23-mars",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "avril",
    "german": "April",
    "category": "Monat",
    "id": "x-numbers-time-24-prill",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "mai",
    "german": "Mai",
    "category": "Monat",
    "id": "x-numbers-time-25-maj",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "juin",
    "german": "Juni",
    "category": "Monat",
    "id": "x-numbers-time-26-qershor",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "juillet",
    "german": "Juli",
    "category": "Monat",
    "id": "x-numbers-time-27-korrik",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "août",
    "german": "August",
    "category": "Monat",
    "id": "x-numbers-time-28-gusht",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "septembre",
    "german": "September",
    "category": "Monat",
    "id": "x-numbers-time-29-shtator",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "octobre",
    "german": "Oktober",
    "category": "Monat",
    "id": "x-numbers-time-30-tetor",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "novembre",
    "german": "November",
    "category": "Monat",
    "id": "x-numbers-time-31-nentor",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "décembre",
    "german": "Dezember",
    "category": "Monat",
    "id": "x-numbers-time-32-dhjetor",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "hier",
    "german": "gestern",
    "category": "Zeit",
    "id": "x-numbers-time-33-dje",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "après-demain",
    "german": "übermorgen",
    "category": "Zeit",
    "id": "x-numbers-time-34-pasneser",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "tôt",
    "german": "früh",
    "category": "Zeit",
    "id": "x-numbers-time-35-heret",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "tard",
    "german": "spät",
    "category": "Zeit",
    "id": "x-numbers-time-36-vone",
    "note": "Modul 4a: Zahlen, Datum und Kalender ausbauen"
  },
  {
    "french": "les parents",
    "german": "die Eltern",
    "category": "Familie",
    "id": "x-family-people-01-prinderit",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "l'enfant",
    "german": "das Kind",
    "category": "Familie",
    "id": "x-family-people-02-femija",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "le garçon / le fils",
    "german": "der Junge / Sohn",
    "category": "Familie",
    "id": "x-family-people-03-djali",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "la fille",
    "german": "das Mädchen / die Tochter",
    "category": "Familie",
    "id": "x-family-people-04-vajza",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "l'homme / le mari",
    "german": "der Mann / Ehemann",
    "category": "Familie",
    "id": "x-family-people-05-burri",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "la femme",
    "german": "die Frau / Ehefrau",
    "category": "Familie",
    "id": "x-family-people-06-gruaja",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "l'oncle",
    "german": "der Onkel",
    "category": "Familie",
    "id": "x-family-people-07-xhaxhai",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "la tante",
    "german": "die Tante",
    "category": "Familie",
    "id": "x-family-people-08-tezja",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "le cousin",
    "german": "der Cousin",
    "category": "Familie",
    "id": "x-family-people-09-kusheriri",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "la cousine",
    "german": "die Cousine",
    "category": "Familie",
    "id": "x-family-people-10-kusherira",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "jeune",
    "german": "jung (maskulin)",
    "category": "Adjektiv",
    "id": "x-family-people-11-i-ri",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "jeune",
    "german": "jung (feminin)",
    "category": "Adjektiv",
    "id": "x-family-people-12-e-re",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "vieux",
    "german": "alt (maskulin)",
    "category": "Adjektiv",
    "id": "x-family-people-13-i-vjeter",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "vieille",
    "german": "alt (feminin)",
    "category": "Adjektiv",
    "id": "x-family-people-14-e-vjeter",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "grand",
    "german": "groß (maskulin)",
    "category": "Adjektiv",
    "id": "x-family-people-15-i-madh",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "grande",
    "german": "groß (feminin)",
    "category": "Adjektiv",
    "id": "x-family-people-16-e-madhe",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "petit",
    "german": "klein (maskulin)",
    "category": "Adjektiv",
    "id": "x-family-people-17-i-vogel",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "petite",
    "german": "klein (feminin)",
    "category": "Adjektiv",
    "id": "x-family-people-18-e-vogel",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "marié",
    "german": "verheiratet (maskulin)",
    "category": "Person",
    "id": "x-family-people-19-i-martuar",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "mariée",
    "german": "verheiratet (feminin)",
    "category": "Person",
    "id": "x-family-people-20-e-martuar",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "célibataire",
    "german": "ledig (maskulin)",
    "category": "Person",
    "id": "x-family-people-21-beqar",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "célibataire",
    "german": "ledig (feminin)",
    "category": "Person",
    "id": "x-family-people-22-beqare",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "le travail",
    "german": "die Arbeit",
    "category": "Beruf",
    "id": "x-family-people-23-pune",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "l'employé",
    "german": "der Angestellte",
    "category": "Beruf",
    "id": "x-family-people-24-punonjes",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "l'employée",
    "german": "die Angestellte",
    "category": "Beruf",
    "id": "x-family-people-25-punonjese",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "l'ingénieur",
    "german": "der Ingenieur",
    "category": "Beruf",
    "id": "x-family-people-26-inxhinier",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "l'infirmier",
    "german": "der Pfleger",
    "category": "Beruf",
    "id": "x-family-people-27-infermier",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "l'infirmière",
    "german": "die Krankenschwester",
    "category": "Beruf",
    "id": "x-family-people-28-infermiere",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "le vendeur",
    "german": "der Verkäufer",
    "category": "Beruf",
    "id": "x-family-people-29-shites",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "la vendeuse",
    "german": "die Verkäuferin",
    "category": "Beruf",
    "id": "x-family-people-30-shitese",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "où",
    "german": "wo",
    "category": "Fragewort",
    "id": "x-family-people-31-ku",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "qui",
    "german": "wer",
    "category": "Fragewort",
    "id": "x-family-people-32-kush",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "quel métier",
    "german": "welcher Beruf / was beruflich",
    "category": "Fragewort",
    "id": "x-family-people-33-cfare-pune",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "ta",
    "german": "deine",
    "category": "Possessiv",
    "id": "x-family-people-34-jote",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "ton",
    "german": "dein",
    "category": "Possessiv",
    "id": "x-family-people-35-yt",
    "note": "Modul 5a: Familie, Personen und Eigenschaften ausbauen"
  },
  {
    "french": "le restaurant",
    "german": "das Restaurant",
    "category": "Restaurant",
    "id": "x-food-01-restoranti",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "le bistrot",
    "german": "das Lokal",
    "category": "Restaurant",
    "id": "x-food-02-lokali",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "la serveuse",
    "german": "die Kellnerin",
    "category": "Restaurant",
    "id": "x-food-03-kamarierja",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "l'addition",
    "german": "die Rechnung",
    "category": "Restaurant",
    "id": "x-food-04-fatura",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "la commande",
    "german": "die Bestellung",
    "category": "Restaurant",
    "id": "x-food-05-porosia",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "l'assiette",
    "german": "der Teller",
    "category": "Geschirr",
    "id": "x-food-06-pjata",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "le verre",
    "german": "das Glas",
    "category": "Geschirr",
    "id": "x-food-07-gota",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "la tasse",
    "german": "die Tasse",
    "category": "Geschirr",
    "id": "x-food-08-filxhani",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "la cuillère",
    "german": "der Löffel",
    "category": "Geschirr",
    "id": "x-food-09-luge",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "la fourchette",
    "german": "die Gabel",
    "category": "Geschirr",
    "id": "x-food-10-pirun",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "le couteau",
    "german": "das Messer",
    "category": "Geschirr",
    "id": "x-food-11-thike",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "la soupe",
    "german": "die Suppe",
    "category": "Essen",
    "id": "x-food-12-supe",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "le riz",
    "german": "der Reis",
    "category": "Essen",
    "id": "x-food-13-oriz",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "les pâtes",
    "german": "die Nudeln",
    "category": "Essen",
    "id": "x-food-14-makarona",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "l'œuf",
    "german": "das Ei",
    "category": "Essen",
    "id": "x-food-15-veze",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "la viande",
    "german": "das Fleisch",
    "category": "Essen",
    "id": "x-food-16-mish",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "le poisson",
    "german": "der Fisch",
    "category": "Essen",
    "id": "x-food-17-peshk",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "les légumes",
    "german": "das Gemüse",
    "category": "Essen",
    "id": "x-food-18-perime",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "les fruits",
    "german": "das Obst",
    "category": "Essen",
    "id": "x-food-19-fruta",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "la pomme",
    "german": "der Apfel",
    "category": "Essen",
    "id": "x-food-20-molle",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "la banane",
    "german": "die Banane",
    "category": "Essen",
    "id": "x-food-21-banane",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "la tomate",
    "german": "die Tomate",
    "category": "Essen",
    "id": "x-food-22-domate",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "la salade",
    "german": "der Salat",
    "category": "Essen",
    "id": "x-food-23-sallate",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "le sel",
    "german": "das Salz",
    "category": "Essen",
    "id": "x-food-24-kripe",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "le poivre",
    "german": "der Pfeffer",
    "category": "Essen",
    "id": "x-food-25-piper",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "le jus",
    "german": "der Saft",
    "category": "Getränk",
    "id": "x-food-26-leng",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "la bière",
    "german": "das Bier",
    "category": "Getränk",
    "id": "x-food-27-birre",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "le vin",
    "german": "der Wein",
    "category": "Getränk",
    "id": "x-food-28-vere",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "la bouteille",
    "german": "die Flasche",
    "category": "Menge",
    "id": "x-food-29-shishe",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "le morceau",
    "german": "das Stück",
    "category": "Menge",
    "id": "x-food-30-cope",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "un peu",
    "german": "ein bisschen",
    "category": "Menge",
    "id": "x-food-31-pak",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "beaucoup",
    "german": "viel",
    "category": "Menge",
    "id": "x-food-32-shume",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "chaud",
    "german": "warm (maskulin)",
    "category": "Adjektiv",
    "id": "x-food-33-i-ngrohte",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "froide",
    "german": "kalt (feminin)",
    "category": "Adjektiv",
    "id": "x-food-34-e-ftohte",
    "note": "Modul 6a: Essen, Trinken und Restaurant erweitern"
  },
  {
    "french": "vert",
    "german": "grün",
    "category": "Farbe",
    "id": "x-shopping-01-e-gjelber",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "jaune",
    "german": "gelb",
    "category": "Farbe",
    "id": "x-shopping-02-e-verdhe",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "bleu",
    "german": "blau",
    "category": "Farbe",
    "id": "x-shopping-03-blu",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "gris",
    "german": "grau",
    "category": "Farbe",
    "id": "x-shopping-04-gri",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "marron",
    "german": "braun",
    "category": "Farbe",
    "id": "x-shopping-05-kafe",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "rose",
    "german": "rosa",
    "category": "Farbe",
    "id": "x-shopping-06-roze",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "orange",
    "german": "orange",
    "category": "Farbe",
    "id": "x-shopping-07-portokalli",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "le pantalon",
    "german": "die Hose",
    "category": "Kleidung",
    "id": "x-shopping-08-pantallona",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "le chemisier",
    "german": "die Bluse",
    "category": "Kleidung",
    "id": "x-shopping-09-bluze",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "la veste",
    "german": "die Jacke",
    "category": "Kleidung",
    "id": "x-shopping-10-xhakete",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "le manteau",
    "german": "der Mantel",
    "category": "Kleidung",
    "id": "x-shopping-11-pallto",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "la jupe",
    "german": "der Rock",
    "category": "Kleidung",
    "id": "x-shopping-12-fund",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "les chaussettes",
    "german": "die Socken",
    "category": "Kleidung",
    "id": "x-shopping-13-corape",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "le sac",
    "german": "die Tasche",
    "category": "Kleidung",
    "id": "x-shopping-14-cante",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "le chapeau / la casquette",
    "german": "der Hut / die Mütze",
    "category": "Kleidung",
    "id": "x-shopping-15-kapele",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "le magasin",
    "german": "der Laden",
    "category": "Einkaufen",
    "id": "x-shopping-16-dyqan",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "le marché",
    "german": "der Markt",
    "category": "Einkaufen",
    "id": "x-shopping-17-treg",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "la caisse",
    "german": "die Kasse",
    "category": "Einkaufen",
    "id": "x-shopping-18-arke",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "le prix",
    "german": "der Preis",
    "category": "Einkaufen",
    "id": "x-shopping-19-cmim",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "l'argent",
    "german": "das Geld",
    "category": "Einkaufen",
    "id": "x-shopping-20-para",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "la carte",
    "german": "die Karte",
    "category": "Einkaufen",
    "id": "x-shopping-21-karte",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "en espèces",
    "german": "bar",
    "category": "Einkaufen",
    "id": "x-shopping-22-me-para-ne-dore",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "cher",
    "german": "teuer",
    "category": "Adjektiv",
    "id": "x-shopping-23-shtrenjte",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "bon marché",
    "german": "billig / günstig",
    "category": "Adjektiv",
    "id": "x-shopping-24-lire",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "nouveau",
    "german": "neu (maskulin)",
    "category": "Adjektiv",
    "id": "x-shopping-25-i-ri",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "nouvelle",
    "german": "neu (feminin)",
    "category": "Adjektiv",
    "id": "x-shopping-26-e-re",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "beau",
    "german": "schön (maskulin)",
    "category": "Adjektiv",
    "id": "x-shopping-27-i-bukur",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "belle",
    "german": "schön (feminin)",
    "category": "Adjektiv",
    "id": "x-shopping-28-e-bukur",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "ce / cette",
    "german": "diesen / diese / dieses",
    "category": "Zeigewort",
    "id": "x-shopping-29-kete",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "celui-là / celle-là",
    "german": "jenen / jene",
    "category": "Zeigewort",
    "id": "x-shopping-30-ate",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "je voudrais l'acheter",
    "german": "ich möchte es kaufen",
    "category": "Satzbaustein",
    "id": "x-shopping-31-dua-ta-blej",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "puis-je payer ?",
    "german": "kann ich bezahlen?",
    "category": "Satzbaustein",
    "id": "x-shopping-32-mund-te-paguaj",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "payé",
    "german": "bezahlt",
    "category": "Verb",
    "id": "x-shopping-33-paguan",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "j'essaie",
    "german": "ich probiere an",
    "category": "Verb",
    "id": "x-shopping-34-provoj",
    "note": "Modul 7a: Farben, Kleidung, Preise und Bezahlen erweitern"
  },
  {
    "french": "le salon",
    "german": "das Wohnzimmer",
    "category": "Wohnen",
    "id": "x-home-01-salloni",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "le balcon",
    "german": "der Balkon",
    "category": "Wohnen",
    "id": "x-home-02-ballkoni",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "le couloir",
    "german": "der Flur",
    "category": "Wohnen",
    "id": "x-home-03-korridori",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "le garage",
    "german": "die Garage",
    "category": "Wohnen",
    "id": "x-home-04-garazhi",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "la cour / le jardin",
    "german": "der Hof / Garten",
    "category": "Wohnen",
    "id": "x-home-05-oborri",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "l'étage",
    "german": "die Etage",
    "category": "Wohnen",
    "id": "x-home-06-kati",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "le loyer",
    "german": "die Miete",
    "category": "Wohnen",
    "id": "x-home-07-qiraja",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "l'adresse",
    "german": "die Adresse",
    "category": "Wohnen",
    "id": "x-home-08-adresa",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "le canapé",
    "german": "das Sofa",
    "category": "Möbel",
    "id": "x-home-09-divani",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "le placard",
    "german": "der Schrank",
    "category": "Möbel",
    "id": "x-home-10-dollapi",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "l'étagère",
    "german": "das Regal",
    "category": "Möbel",
    "id": "x-home-11-rafti",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "la lampe",
    "german": "die Lampe",
    "category": "Möbel",
    "id": "x-home-12-llamba",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "le miroir",
    "german": "der Spiegel",
    "category": "Möbel",
    "id": "x-home-13-pasqyra",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "le réfrigérateur",
    "german": "der Kühlschrank",
    "category": "Haushalt",
    "id": "x-home-14-frigoriferi",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "le four / la cuisinière",
    "german": "der Ofen / Herd",
    "category": "Haushalt",
    "id": "x-home-15-sobe",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "le lavabo",
    "german": "das Waschbecken",
    "category": "Haushalt",
    "id": "x-home-16-lavaman",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "la clé",
    "german": "der Schlüssel",
    "category": "Gegenstand",
    "id": "x-home-17-celesi",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "le téléphone",
    "german": "das Telefon",
    "category": "Gegenstand",
    "id": "x-home-18-telefoni",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "l'ordinateur",
    "german": "der Computer",
    "category": "Gegenstand",
    "id": "x-home-19-kompjuteri",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "la télévision",
    "german": "der Fernseher",
    "category": "Gegenstand",
    "id": "x-home-20-televizori",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "l'horloge",
    "german": "die Uhr",
    "category": "Gegenstand",
    "id": "x-home-21-ora",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "le livre",
    "german": "das Buch",
    "category": "Gegenstand",
    "id": "x-home-22-libri",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "les vêtements",
    "german": "die Kleidung",
    "category": "Gegenstand",
    "id": "x-home-23-rroba",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "devant",
    "german": "vor",
    "category": "Präposition",
    "id": "x-home-24-para",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "derrière",
    "german": "hinter",
    "category": "Präposition",
    "id": "x-home-25-pas",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "sous",
    "german": "unter",
    "category": "Präposition",
    "id": "x-home-26-nen",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "à l'intérieur",
    "german": "drinnen / innen",
    "category": "Ort",
    "id": "x-home-27-brenda",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "à l'extérieur",
    "german": "draußen",
    "category": "Ort",
    "id": "x-home-28-jashte",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "en haut",
    "german": "oben",
    "category": "Ort",
    "id": "x-home-29-lart",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "en bas",
    "german": "unten",
    "category": "Ort",
    "id": "x-home-30-poshte",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "propre",
    "german": "sauber (maskulin)",
    "category": "Adjektiv",
    "id": "x-home-31-i-paster",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "propre",
    "german": "sauber (feminin)",
    "category": "Adjektiv",
    "id": "x-home-32-e-paster",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "calme",
    "german": "ruhig (maskulin)",
    "category": "Adjektiv",
    "id": "x-home-33-i-qete",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "calme",
    "german": "ruhig (feminin)",
    "category": "Adjektiv",
    "id": "x-home-34-e-qete",
    "note": "Modul 8a: Wohnung, Gegenstände und Lage genauer sagen"
  },
  {
    "french": "l'aéroport",
    "german": "der Flughafen",
    "category": "Ort",
    "id": "x-places-01-aeroporti",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "l'hôpital",
    "german": "das Krankenhaus",
    "category": "Ort",
    "id": "x-places-02-spitali",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "la police",
    "german": "die Polizei",
    "category": "Ort",
    "id": "x-places-03-policia",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "la poste",
    "german": "die Post",
    "category": "Ort",
    "id": "x-places-04-posta",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "la bibliothèque",
    "german": "die Bibliothek",
    "category": "Ort",
    "id": "x-places-05-biblioteka",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "le musée",
    "german": "das Museum",
    "category": "Ort",
    "id": "x-places-06-muzeu",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "le parc",
    "german": "der Park",
    "category": "Ort",
    "id": "x-places-07-parku",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "la plage",
    "german": "der Strand",
    "category": "Ort",
    "id": "x-places-08-plazhi",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "le pont",
    "german": "die Brücke",
    "category": "Ort",
    "id": "x-places-09-ura",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "le centre",
    "german": "das Zentrum",
    "category": "Ort",
    "id": "x-places-10-qendra",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "les toilettes",
    "german": "die Toilette",
    "category": "Ort",
    "id": "x-places-11-tualeti",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "l'entrée",
    "german": "der Eingang",
    "category": "Ort",
    "id": "x-places-12-hyrja",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "la sortie",
    "german": "der Ausgang",
    "category": "Ort",
    "id": "x-places-13-dalja",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "la voiture",
    "german": "das Auto",
    "category": "Verkehr",
    "id": "x-places-14-makina",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "le train",
    "german": "der Zug",
    "category": "Verkehr",
    "id": "x-places-15-treni",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "le tramway",
    "german": "die Straßenbahn",
    "category": "Verkehr",
    "id": "x-places-16-tramvaji",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "le métro",
    "german": "die Metro",
    "category": "Verkehr",
    "id": "x-places-17-metroja",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "le vélo",
    "german": "das Fahrrad",
    "category": "Verkehr",
    "id": "x-places-18-bicikleta",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "le billet",
    "german": "die Fahrkarte",
    "category": "Verkehr",
    "id": "x-places-19-bileta",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "l'arrêt",
    "german": "die Haltestelle",
    "category": "Verkehr",
    "id": "x-places-20-ndalesa",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "l'horaire",
    "german": "der Fahrplan / Zeitplan",
    "category": "Verkehr",
    "id": "x-places-21-orari",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "le voyage / le trajet",
    "german": "die Reise / Fahrt",
    "category": "Verkehr",
    "id": "x-places-22-udhetim",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "à pied",
    "german": "zu Fuß",
    "category": "Richtung",
    "id": "x-places-23-kembe",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "en face",
    "german": "gegenüber",
    "category": "Richtung",
    "id": "x-places-24-perballe",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "entre",
    "german": "zwischen",
    "category": "Richtung",
    "id": "x-places-25-midis",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "après / derrière",
    "german": "nach / hinter",
    "category": "Richtung",
    "id": "x-places-26-pas",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "avant / devant",
    "german": "vor",
    "category": "Richtung",
    "id": "x-places-27-para",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "jusqu'à",
    "german": "bis zu",
    "category": "Richtung",
    "id": "x-places-28-deri-te",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "traversez / passez",
    "german": "überqueren Sie / gehen Sie vorbei",
    "category": "Verb",
    "id": "x-places-29-kaloni",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "arrêtez-vous",
    "german": "halten Sie an",
    "category": "Verb",
    "id": "x-places-30-ndaloni",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "prenez",
    "german": "nehmen Sie",
    "category": "Verb",
    "id": "x-places-31-merrni",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "descendez",
    "german": "steigen Sie aus",
    "category": "Verb",
    "id": "x-places-32-zbrisni",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "montez",
    "german": "steigen Sie ein",
    "category": "Verb",
    "id": "x-places-33-hipni",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "perdu",
    "german": "verloren",
    "category": "Adjektiv",
    "id": "x-places-34-humbur",
    "note": "Modul 9a: Stadt, Wege und Verkehr erweitern"
  },
  {
    "french": "le petit-déjeuner",
    "german": "das Frühstück",
    "category": "Alltag",
    "id": "x-daily-life-01-mengjesi",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "le déjeuner",
    "german": "das Mittagessen",
    "category": "Alltag",
    "id": "x-daily-life-02-dreka",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "le dîner",
    "german": "das Abendessen",
    "category": "Alltag",
    "id": "x-daily-life-03-darke",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "je me repose",
    "german": "ich ruhe mich aus",
    "category": "Verb",
    "id": "x-daily-life-04-pushoj",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "je dors",
    "german": "ich schlafe",
    "category": "Verb",
    "id": "x-daily-life-05-fle",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "je me lève tôt",
    "german": "ich stehe früh auf",
    "category": "Satzbaustein",
    "id": "x-daily-life-06-zgjohem-heret",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "je travaille à la maison",
    "german": "ich arbeite von zu Hause",
    "category": "Satzbaustein",
    "id": "x-daily-life-07-punoj-nga-shtepia",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "la réunion / le rendez-vous",
    "german": "das Treffen / der Termin",
    "category": "Alltag",
    "id": "x-daily-life-08-takim",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "la pause / les vacances",
    "german": "die Pause / der Urlaub",
    "category": "Alltag",
    "id": "x-daily-life-09-pushim",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "ce soir",
    "german": "heute Abend",
    "category": "Zeit",
    "id": "x-daily-life-10-sot-ne-mbremje",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "demain matin",
    "german": "morgen früh",
    "category": "Zeit",
    "id": "x-daily-life-11-neser-ne-mengjes",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "le temps",
    "german": "das Wetter / die Zeit",
    "category": "Wetter",
    "id": "x-daily-life-12-koha",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "le soleil",
    "german": "die Sonne",
    "category": "Wetter",
    "id": "x-daily-life-13-diell",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "la pluie",
    "german": "der Regen",
    "category": "Wetter",
    "id": "x-daily-life-14-shi",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "la neige",
    "german": "der Schnee",
    "category": "Wetter",
    "id": "x-daily-life-15-bore",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "le vent",
    "german": "der Wind",
    "category": "Wetter",
    "id": "x-daily-life-16-ere",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "chaud",
    "german": "warm",
    "category": "Wetter",
    "id": "x-daily-life-17-ngrohte",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "froid",
    "german": "kalt",
    "category": "Wetter",
    "id": "x-daily-life-18-ftohte",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "le corps",
    "german": "der Körper",
    "category": "Gesundheit",
    "id": "x-daily-life-19-trupi",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "la tête",
    "german": "der Kopf",
    "category": "Gesundheit",
    "id": "x-daily-life-20-koka",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "la main",
    "german": "die Hand",
    "category": "Gesundheit",
    "id": "x-daily-life-21-dora",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "la jambe / le pied",
    "german": "das Bein / der Fuß",
    "category": "Gesundheit",
    "id": "x-daily-life-22-kemba",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "le ventre",
    "german": "der Bauch",
    "category": "Gesundheit",
    "id": "x-daily-life-23-barku",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "la douleur",
    "german": "der Schmerz",
    "category": "Gesundheit",
    "id": "x-daily-life-24-dhimbje",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "malade",
    "german": "krank (maskulin)",
    "category": "Gesundheit",
    "id": "x-daily-life-25-i-semure",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "malade",
    "german": "krank (feminin)",
    "category": "Gesundheit",
    "id": "x-daily-life-26-e-semure",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "fatigué",
    "german": "müde (maskulin)",
    "category": "Gesundheit",
    "id": "x-daily-life-27-i-lodhur",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "fatiguée",
    "german": "müde (feminin)",
    "category": "Gesundheit",
    "id": "x-daily-life-28-e-lodhur",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "le médicament",
    "german": "das Medikament",
    "category": "Gesundheit",
    "id": "x-daily-life-29-ilac",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "le médecin",
    "german": "der Arzt",
    "category": "Gesundheit",
    "id": "x-daily-life-30-doktor",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "je téléphone / j'appelle",
    "german": "ich telefoniere / rufe an",
    "category": "Verb",
    "id": "x-daily-life-31-telefonoj",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "j'attends",
    "german": "ich warte",
    "category": "Verb",
    "id": "x-daily-life-32-pres",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "je trouve",
    "german": "ich finde",
    "category": "Verb",
    "id": "x-daily-life-33-gjej",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "je cherche / je demande",
    "german": "ich suche / bitte um",
    "category": "Verb",
    "id": "x-daily-life-34-kerkoj",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  },
  {
    "french": "j'ai besoin de",
    "german": "ich brauche",
    "category": "Satzbaustein",
    "id": "x-daily-life-35-me-duhet",
    "note": "Modul 10a: Alltag, Gesundheit, Wetter und Freizeit erweitern"
  }
];

export const lessons: Lesson[] = [
  {
    "id": "lesson-greetings-1",
    "unitId": "greetings",
    "title": "Lektion 1: Hallo, ich heiße...",
    "outcome": "Nach dieser Lektion kannst du jemanden formell begrüßen, nach dem Namen fragen und dich mit Name, Herkunft und Wohnort vorstellen.",
    "warmup": "A1 ist klein, aber praktisch: Du brauchst feste Satzmuster, die du sofort austauschen kannst. In dieser Lektion lernst du keine lange Grammatik, sondern fünf Sätze, die du direkt variieren kannst.",
    "focusLexemeIds": [
      "pershendetje",
      "miredita",
      "faleminderit",
      "ju-lutem",
      "une",
      "ju",
      "si",
      "nga",
      "ne-prep",
      "jam",
      "quhem",
      "banoj",
      "flas",
      "nuk",
      "shqip",
      "gjermanisht",
      "gjermania",
      "shqiperia"
    ],
    "dialogue": [
      {
        "speaker": "Léa",
        "french": "Bonjour ! Comment allez-vous ?",
        "german": "Guten Tag! Wie geht es Ihnen?"
      },
      {
        "speaker": "Ben",
        "french": "Je vais bien, merci. Et vous ?",
        "german": "Mir geht es gut, danke. Und Ihnen?"
      },
      {
        "speaker": "Léa",
        "french": "Je vais bien aussi. Comment vous appelez-vous ?",
        "german": "Mir geht es auch gut. Wie heißen Sie?"
      },
      {
        "speaker": "Ben",
        "french": "Je m'appelle Ben. Je viens d'Allemagne et j'habite à Berlin.",
        "german": "Ich heiße Ben. Ich komme aus Deutschland und wohne in Berlin."
      },
      {
        "speaker": "Léa",
        "french": "Ravi de vous rencontrer.",
        "german": "Freut mich, Sie kennenzulernen."
      }
    ],
    "grammarNotes": [
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "note-quhem",
            "french": "Je m'appelle Ana.",
            "german": "Ich heiße Ana.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-jam-nga",
            "french": "Je viens d'Allemagne.",
            "german": "Ich komme aus Deutschland.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-banoj",
            "french": "J'habite à Berlin.",
            "german": "Ich wohne in Berlin.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      },
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "note-miredita",
            "french": "Bonjour",
            "german": "Guten Tag",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-quhem",
            "french": "je m'appelle",
            "german": "ich heiße",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "ex-mc-miredita",
        "type": "multipleChoice",
        "title": "Bedeutung erkennen",
        "prompt": "Was bedeutet 'Bonjour'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "Guten Tag",
          "Gute Nacht",
          "Danke",
          "Ich wohne in Berlin"
        ],
        "correctOption": "Guten Tag"
      },
      {
        "id": "ex-match-basics",
        "type": "matching",
        "title": "Mini-Wortschatz zuordnen",
        "prompt": "Ordne die französischen Wörter der deutschen Bedeutung zu.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "pairs": [
          {
            "left": "Je",
            "right": "ich"
          },
          {
            "left": "merci",
            "right": "danke"
          },
          {
            "left": "de",
            "right": "aus / von"
          },
          {
            "left": "à / en",
            "right": "in / nach"
          }
        ]
      },
      {
        "id": "ex-fill-jam",
        "type": "fillBlank",
        "title": "Satzmuster einsetzen",
        "prompt": "Ergänze den Satz mit dem passenden Pronomen.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "___ viens d'Allemagne.",
        "correctAnswers": [
          "je"
        ]
      },
      {
        "id": "ex-order-name",
        "type": "sentenceOrder",
        "title": "Satz bauen",
        "prompt": "Baue den Satz: 'Ich heiße Ana.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "tokens": [
          ".",
          "Ana",
          "Je",
          "m'appelle"
        ],
        "correctOrder": [
          "Je",
          "m'appelle",
          "Ana",
          "."
        ],
        "translation": "Ich heiße Ana."
      },
      {
        "id": "ex-mc-si-jeni",
        "type": "multipleChoice",
        "title": "Formelle Frage",
        "prompt": "Welche Frage passt zu 'Wie geht es Ihnen?'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "Comment allez-vous ?",
          "Combien ça coûte ?",
          "Où habitez-vous ?",
          "Bonne nuit."
        ],
        "correctOption": "Comment allez-vous ?"
      },
      {
        "id": "ex-fill-nuk",
        "type": "fillBlank",
        "title": "Verneinung",
        "prompt": "Wie sagst du 'Ich spreche kein Französisch'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "Je ne parle ___ français.",
        "correctAnswers": [
          "pas"
        ]
      },
      {
        "id": "ex-free-intro",
        "type": "freeResponse",
        "title": "Deine Mini-Vorstellung",
        "prompt": "Schreibe eine kurze Vorstellung mit Name, Herkunft und Wohnort. Du kannst den Namen frei wählen.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "Je m'appelle Ben. Je viens d'Allemagne. J'habite à Berlin.",
          "Je m'appelle Ana. Je viens d'Allemagne et j'habite à Hambourg."
        ]
      }
    ]
  },
  {
    "id": "lesson-greetings-1a",
    "unitId": "greetings-1a",
    "title": "Lektion 1a: Erweiterter Wortschatz und Grammatik",
    "outcome": "Nach dieser Erweiterung kannst du Personen genauer vorstellen und die Formen von 'sein' im Präsens bewusst verwenden.",
    "warmup": "Lektion 1 hat mit festen Vorstellungsbausteinen gearbeitet. In 1a wird daraus ein kleines System: mehr Personenwörter, mehr höfliche Redemittel und die Verbformen von être, damit du nicht nur über dich, sondern auch über andere sprechen kannst.",
    "focusLexemeIds": [
      "x-greetings-01-mirupafshim",
      "x-greetings-02-tung",
      "x-greetings-03-mire-se-vini",
      "x-greetings-04-gezohem",
      "x-greetings-05-po-ashtu",
      "x-greetings-06-mire",
      "x-greetings-07-keq",
      "x-greetings-08-shume",
      "x-greetings-09-pak",
      "x-greetings-10-edhe",
      "x-greetings-11-vetem",
      "x-greetings-12-zoteri",
      "x-greetings-13-zonje",
      "x-greetings-14-zonjushe",
      "x-greetings-15-emri-im",
      "x-greetings-16-mbiemri",
      "x-greetings-17-adresa",
      "x-greetings-18-emaili",
      "x-greetings-19-numri",
      "x-greetings-20-mosha",
      "x-greetings-21-vendi",
      "x-greetings-22-personi",
      "x-greetings-23-njeriu",
      "x-greetings-24-shoku",
      "x-greetings-25-shoqja",
      "x-greetings-26-miku",
      "x-greetings-27-mikja",
      "x-greetings-28-studenti",
      "x-greetings-29-studentja",
      "x-greetings-30-shqiptar",
      "x-greetings-31-shqiptare",
      "x-greetings-32-gjerman",
      "x-greetings-33-gjermane",
      "x-greetings-34-ata",
      "x-greetings-35-ato",
      "x-greetings-36-jemi",
      "x-greetings-37-jeni",
      "x-greetings-38-jane"
    ],
    "dialogue": [
      {
        "speaker": "Léa",
        "french": "Bienvenue ! Je m'appelle Léa. Et vous ?",
        "german": "Willkommen! Ich bin Léa. Und Sie?"
      },
      {
        "speaker": "Ben",
        "french": "Je m'appelle Ben. Je suis allemand et étudiant.",
        "german": "Ich bin Ben. Ich bin Deutscher und Student."
      },
      {
        "speaker": "Léa",
        "french": "Enchantée. C'est mon amie Mira.",
        "german": "Freut mich. Sie ist meine Freundin Mira."
      },
      {
        "speaker": "Ben",
        "french": "Ravi de vous rencontrer. Êtes-vous de France?",
        "german": "Freut mich, Sie kennenzulernen. Sind Sie aus Frankreich?"
      },
      {
        "speaker": "Mira",
        "french": "Oui, nous venons de France. Ce sont des étudiants.",
        "german": "Ja, wir sind aus Frankreich. Sie sind Studenten."
      }
    ],
    "grammarNotes": [
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "g1a-pronouns-singular",
            "french": "Je suis Ben. Elle, c'est Mira.",
            "german": "Ich bin Ben. Sie ist Mira.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "g1a-pronouns-plural",
            "french": "Nous sommes étudiants. Vous venez d'Allemagne.",
            "german": "Wir sind Studenten. Sie sind aus Deutschland.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      },
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "g1a-jam-table-short",
            "french": "je suis · tu es · il/elle est",
            "german": "ich bin · du bist · er/sie ist",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "g1a-jam-table-plural",
            "french": "nous sommes · vous êtes · ils/elles sont",
            "german": "wir sind · Sie/ihr sind/seid · sie sind",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "ex1a-match-pronouns",
        "type": "matching",
        "title": "Pronomen zuordnen",
        "prompt": "Ordne die französischen Wörter der deutschen Bedeutung zu.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "pairs": [
          {
            "left": "Je",
            "right": "ich"
          },
          {
            "left": "vous",
            "right": "du"
          },
          {
            "left": "nous",
            "right": "wir"
          },
          {
            "left": "ils",
            "right": "sie maskulin/plural"
          }
        ]
      },
      {
        "id": "ex1a-mc-ju",
        "type": "multipleChoice",
        "title": "Formelle Anrede erkennen",
        "prompt": "Welche Übersetzung passt in einem höflichen Gespräch zu 'vous êtes'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "Sie sind",
          "ich bin",
          "du bist",
          "sie ist"
        ],
        "correctOption": "Sie sind"
      },
      {
        "id": "ex1a-fill-jam",
        "type": "fillBlank",
        "title": "Verbform: ich",
        "prompt": "Ergänze die Form von 'sein'.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "Je ___ étudiant.",
        "correctAnswers": [
          "suis"
        ]
      },
      {
        "id": "ex1a-fill-jeni",
        "type": "fillBlank",
        "title": "Verbform: Sie",
        "prompt": "Ergänze die höfliche Form: 'Sie sind aus Frankreich.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "Vous ___ de France.",
        "correctAnswers": [
          "êtes",
          "venez"
        ]
      },
      {
        "id": "ex1a-order-ajo",
        "type": "sentenceOrder",
        "title": "Über eine andere Person sprechen",
        "prompt": "Baue den Satz: 'Sie ist meine Freundin Mira.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "tokens": [
          ".",
          "amie",
          "C'est",
          "Mira",
          "mon"
        ],
        "correctOrder": [
          "C'est",
          "mon",
          "amie",
          "Mira",
          "."
        ],
        "translation": "Sie ist meine Freundin Mira."
      },
      {
        "id": "ex1a-fill-plural",
        "type": "fillBlank",
        "title": "Verbform: sie Plural",
        "prompt": "Ergänze: 'Sie sind Studenten.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "Ce ___ des étudiants.",
        "correctAnswers": [
          "sont"
        ]
      },
      {
        "id": "ex1a-free-person-card",
        "type": "freeResponse",
        "title": "Mini-Steckbrief mit zwei Personen",
        "prompt": "Schreibe 5 bis 6 Sätze. Stelle dich vor und stelle danach eine zweite Person vor. Verwende mindestens drei Formen von être: je suis, il/elle est, vous êtes oder ils sont.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "Je m'appelle Ben. Je suis allemand et je suis étudiant. Elle, c'est Mira. Mira est française. Vous êtes de France ? Nous sommes étudiants."
        ]
      }
    ]
  },
  {
    "id": "lesson-alphabet-2",
    "unitId": "alphabet",
    "title": "Lektion 2: Buchstaben, Namen und höfliche Nachfragen",
    "outcome": "Nach dieser Lektion erkennst du zentrale französische Sonderbuchstaben und kannst um Wiederholung, langsameres Sprechen und Schreibweise bitten.",
    "warmup": "Diese Seite macht Aussprache nicht akademisch. Du lernst die Buchstaben so, wie du sie im echten A1-Gespräch brauchst: Namen lesen, Wörter wiedererkennen und nachfragen, wenn etwas zu schnell geht.",
    "focusLexemeIds": [
      "shkronje",
      "alfabet",
      "emer",
      "fjale",
      "perseriteni",
      "me-ngadale-word",
      "shkruhet",
      "flisni",
      "ju-lutem",
      "cfare",
      "gjuhe",
      "shqip",
      "miredita",
      "quhem",
      "gjermania",
      "shqiperia"
    ],
    "dialogue": [
      {
        "speaker": "Léa",
        "french": "Bonjour ! Comment vous appelez-vous ?",
        "german": "Guten Tag! Wie heißen Sie?"
      },
      {
        "speaker": "Ben",
        "french": "Je m'appelle Ben. Comment épelez-vous votre nom ?",
        "german": "Ich heiße Ben. Wie schreibt man Ihren Namen?"
      },
      {
        "speaker": "Léa",
        "french": "L-É-A. Veuillez répéter votre nom.",
        "german": "L-É-A. Bitte wiederholen Sie Ihren Namen."
      },
      {
        "speaker": "Ben",
        "french": "B-E-N. Parlez plus lentement, s'il vous plaît.",
        "german": "B-E-N. Sprechen Sie bitte langsamer."
      }
    ],
    "grammarNotes": [
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "note-letter-e",
            "french": "Mots avec ç : français, garçon",
            "german": "Wörter mit ç: Französisch, Junge",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-letter-c",
            "french": "quoi / quel",
            "german": "was / welche",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-letter-gj",
            "french": "Langue, Allemagne",
            "german": "Sprache, Deutschland",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      },
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "note-repeat",
            "french": "Veuillez répéter cela.",
            "german": "Bitte wiederholen Sie das.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-slow",
            "french": "Parlez plus lentement, s'il vous plaît.",
            "german": "Sprechen Sie bitte langsamer.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "ex2-mc-cfare",
        "type": "multipleChoice",
        "title": "Buchstaben erkennen",
        "prompt": "Welches Wort enthält den Buchstaben ç?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "nom",
          "français",
          "vous",
          "mot"
        ],
        "correctOption": "français"
      },
      {
        "id": "ex2-match-classroom",
        "type": "matching",
        "title": "Workbook-Wörter zuordnen",
        "prompt": "Ordne die französischen Wörter der deutschen Bedeutung zu.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "pairs": [
          {
            "left": "lettre",
            "right": "Buchstabe"
          },
          {
            "left": "mot",
            "right": "Wort"
          },
          {
            "left": "nom",
            "right": "Name"
          },
          {
            "left": "répéter",
            "right": "wiederholen Sie"
          }
        ]
      },
      {
        "id": "ex2-fill-repeat",
        "type": "fillBlank",
        "title": "Höflich nachfragen",
        "prompt": "Ergänze die Bitte.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "Veuillez ___ cela.",
        "correctAnswers": [
          "répéter"
        ]
      },
      {
        "id": "ex2-order-slow",
        "type": "sentenceOrder",
        "title": "Satz bauen",
        "prompt": "Baue den Satz: 'Sprechen Sie bitte langsamer.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "tokens": [
          ",",
          ".",
          "lentement",
          "Parlez",
          "plaît",
          "plus",
          "s'il",
          "vous"
        ],
        "correctOrder": [
          "Parlez",
          "plus",
          "lentement",
          ",",
          "s'il",
          "vous",
          "plaît",
          "."
        ],
        "translation": "Sprechen Sie bitte langsamer."
      },
      {
        "id": "ex2-mc-gj",
        "type": "multipleChoice",
        "title": "Wiedererkennen in bekannten Wörtern",
        "prompt": "Welches Wort enthält die Buchstabenkombination 'gu'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "langue",
          "français",
          "nom",
          "l'horloge"
        ],
        "correctOption": "langue"
      },
      {
        "id": "ex2-free-two-requests",
        "type": "freeResponse",
        "title": "Zwei Hilfe-Sätze schreiben",
        "prompt": "Schreibe zwei kurze Sätze: eine Bitte um Wiederholung und eine Bitte, langsamer zu sprechen.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "Veuillez répéter. Parlez plus lentement, s'il vous plaît.",
          "Répétez, s'il vous plaît. Parlez plus lentement, s'il vous plaît."
        ]
      },
      {
        "id": "ex2-free-dialog",
        "type": "freeResponse",
        "title": "Fortgeschritten: Mini-Dialog mit Reparatur",
        "prompt": "Schreibe einen Mini-Dialog mit 4 Zeilen. Verwende Begrüßung, Name, eine Frage zur Schreibweise und eine Bitte um Wiederholung oder langsameres Sprechen.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "A : Bonjour ! Comment vous appelez-vous ?\nB : Je m'appelle Ben.\nA : Comment épelez-vous votre nom ?\nB : B-E-N. Parlez plus lentement, s'il vous plaît."
        ]
      }
    ]
  },
  {
    "id": "lesson-alphabet-2a",
    "unitId": "alphabet-2a",
    "title": "Lektion 2a: Erweiterter Wortschatz und Grammatik",
    "outcome": "Nach dieser Erweiterung verstehst du typische Unterrichtswörter und kannst einfache Arbeitsanweisungen wie lesen, schreiben, öffnen und wiederholen sicher einordnen.",
    "warmup": "Lektion 2 hat dir Reparatur-Sätze gegeben: langsamer sprechen, wiederholen, buchstabieren. In 2a wird daraus Unterrichtssprache. Du lernst die Wörter für Buch, Heft, Aufgabe und Antwort sowie feste höfliche Imperative, damit du Workbook- und Kursanweisungen nicht nur erraten musst.",
    "focusLexemeIds": [
      "x-alphabet-01-libri",
      "x-alphabet-02-fletorja",
      "x-alphabet-03-lapsi",
      "x-alphabet-04-stilolapsi",
      "x-alphabet-05-tabela",
      "x-alphabet-06-faqja",
      "x-alphabet-07-detyra",
      "x-alphabet-08-ushtrimi",
      "x-alphabet-09-pyetja",
      "x-alphabet-10-pergjigjja",
      "x-alphabet-11-mesimi",
      "x-alphabet-12-klasa",
      "x-alphabet-13-shkolla",
      "x-alphabet-14-kursi",
      "x-alphabet-15-nxenesi",
      "x-alphabet-16-nxenesja",
      "x-alphabet-17-mesuesi",
      "x-alphabet-18-mesuesja",
      "x-alphabet-19-shkruaj",
      "x-alphabet-20-lexoni",
      "x-alphabet-21-degjoj",
      "x-alphabet-22-kuptoj",
      "x-alphabet-23-mesoj",
      "x-alphabet-24-di",
      "x-alphabet-25-hapni",
      "x-alphabet-26-mbyllni",
      "x-alphabet-27-shikoni",
      "x-alphabet-28-thoni",
      "x-alphabet-29-sakte",
      "x-alphabet-30-gabim",
      "x-alphabet-31-lehte",
      "x-alphabet-32-veshtire",
      "x-alphabet-33-shpejt",
      "x-alphabet-34-qarte"
    ],
    "dialogue": [
      {
        "speaker": "La professeure",
        "french": "Veuillez ouvrir le livre à la page deux.",
        "german": "Öffnen Sie bitte das Buch auf Seite zwei."
      },
      {
        "speaker": "Ben",
        "french": "Désolé, je ne comprends pas. De quelle tâche s'agit-il ?",
        "german": "Entschuldigung, ich verstehe nicht. Welche Aufgabe ist es?"
      },
      {
        "speaker": "La professeure",
        "french": "Lisez la question et notez la réponse dans le cahier.",
        "german": "Lesen Sie die Frage und schreiben Sie die Antwort ins Heft."
      },
      {
        "speaker": "Ben",
        "french": "Veuillez répéter plus lentement.",
        "german": "Bitte wiederholen Sie es langsamer."
      },
      {
        "speaker": "La professeure",
        "french": "Très bien. La réponse est correcte.",
        "german": "Sehr gut. Die Antwort ist richtig."
      }
    ],
    "grammarNotes": [
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "a2a-imperative-open",
            "french": "Ouvrez le livre.",
            "german": "Öffnen Sie das Buch.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a2a-imperative-read",
            "french": "Lisez la question.",
            "german": "Lesen Sie die Frage.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a2a-imperative-repeat",
            "french": "Répétez plus lentement.",
            "german": "Wiederholen Sie es langsamer.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      },
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "a2a-feedback-correct",
            "french": "La réponse est correcte.",
            "german": "Die Antwort ist richtig.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a2a-feedback-wrong",
            "french": "C'est faux.",
            "german": "Das ist falsch.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "ex2a-match-classroom-objects",
        "type": "matching",
        "title": "Lernmaterial zuordnen",
        "prompt": "Ordne die französischen Wörter der deutschen Bedeutung zu.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "pairs": [
          {
            "left": "le livre",
            "right": "das Buch"
          },
          {
            "left": "le cahier",
            "right": "das Heft"
          },
          {
            "left": "le crayon",
            "right": "der Bleistift"
          },
          {
            "left": "le tableau",
            "right": "die Tafel"
          }
        ]
      },
      {
        "id": "ex2a-mc-hapni",
        "type": "multipleChoice",
        "title": "Anweisung erkennen",
        "prompt": "Was bedeutet 'Ouvrez le livre'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "Öffnen Sie das Buch",
          "Schreiben Sie die Antwort",
          "Schließen Sie das Heft",
          "Hören Sie die Frage"
        ],
        "correctOption": "Öffnen Sie das Buch"
      },
      {
        "id": "ex2a-fill-understand",
        "type": "fillBlank",
        "title": "Verstehen sagen",
        "prompt": "Ergänze: 'Ich verstehe nicht.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "Je ne ___ pas.",
        "correctAnswers": [
          "comprends"
        ]
      },
      {
        "id": "ex2a-order-read-write",
        "type": "sentenceOrder",
        "title": "Workbook-Anweisung bauen",
        "prompt": "Baue den Satz: 'Lesen Sie die Frage und schreiben Sie die Antwort.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "tokens": [
          ".",
          "écrivez",
          "et",
          "la",
          "la",
          "Lisez",
          "question",
          "réponse"
        ],
        "correctOrder": [
          "Lisez",
          "la",
          "question",
          "et",
          "écrivez",
          "la",
          "réponse",
          "."
        ],
        "translation": "Lesen Sie die Frage und schreiben Sie die Antwort."
      },
      {
        "id": "ex2a-fill-feedback",
        "type": "fillBlank",
        "title": "Feedbackwort einsetzen",
        "prompt": "Ergänze: 'Die Antwort ist richtig.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "La ___ est correcte.",
        "correctAnswers": [
          "réponse"
        ]
      },
      {
        "id": "ex2a-mc-gabim",
        "type": "multipleChoice",
        "title": "Feedback verstehen",
        "prompt": "Was bedeutet 'faux / erreur' in einer Übung?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "falsch / Fehler",
          "klar",
          "leicht",
          "schnell"
        ],
        "correctOption": "falsch / Fehler"
      },
      {
        "id": "ex2a-free-classroom-help",
        "type": "freeResponse",
        "title": "Mini-Situation im Kurs",
        "prompt": "Schreibe 4 bis 5 kurze Sätze oder Dialogzeilen. Verwende mindestens drei dieser Wörter: le livre, la page, la question, la réponse, je comprends, correct, faux / erreur.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "R : Ouvrez le livre à la page deux.\nB : Désolé, je ne comprends pas.\nR : Lisez la question.\nB : La réponse est correcte."
        ]
      }
    ]
  },
  {
    "id": "lesson-origin-3",
    "unitId": "origin-language",
    "title": "Lektion 3: Herkunft, Wohnort und Sprachen",
    "outcome": "Nach dieser Lektion kannst du sagen, woher du kommst, wo du wohnst, welche Sprachen du sprichst und was du noch nicht sprichst.",
    "warmup": "Jetzt wird die Vorstellung persönlicher. Du kombinierst die Sätze aus Lektion 1 mit Ländern, Städten, Sprachen und der Verneinung ne … pas.",
    "focusLexemeIds": [
      "nga",
      "ne-prep",
      "ku",
      "cfare",
      "jam",
      "banoj",
      "flas",
      "nuk",
      "gjuhe",
      "shqip",
      "gjermanisht",
      "anglisht",
      "gjermania",
      "shqiperia",
      "kosova",
      "austria",
      "zvicra",
      "ju"
    ],
    "dialogue": [
      {
        "speaker": "Léa",
        "french": "D'où venez-vous ?",
        "german": "Woher kommen Sie?"
      },
      {
        "speaker": "Ben",
        "french": "Je viens d'Allemagne et j'habite à Berlin.",
        "german": "Ich komme aus Deutschland und wohne in Berlin."
      },
      {
        "speaker": "Léa",
        "french": "Quelle langue parlez-vous?",
        "german": "Welche Sprache sprechen Sie?"
      },
      {
        "speaker": "Ben",
        "french": "Je parle allemand et anglais. Je ne parle pas bien le français.",
        "german": "Ich spreche Deutsch und Englisch. Ich spreche nicht gut Französisch."
      },
      {
        "speaker": "Léa",
        "french": "Très bien. Parlez lentement et tout va bien.",
        "german": "Sehr gut. Sprechen Sie langsam und es ist in Ordnung."
      }
    ],
    "grammarNotes": [
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "note-origin",
            "french": "Je viens d'Autriche.",
            "german": "Ich komme aus Österreich.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-live",
            "french": "J'habite à Berlin.",
            "german": "Ich wohne in Berlin.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      },
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "note-nuk",
            "french": "Je ne parle pas français.",
            "german": "Ich spreche kein Französisch.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-languages",
            "french": "Je parle allemand et anglais.",
            "german": "Ich spreche Deutsch und Englisch.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "ex3-mc-nga",
        "type": "multipleChoice",
        "title": "Frage verstehen",
        "prompt": "Was bedeutet 'D'où viens-tu ?'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "Woher kommen Sie?",
          "Wie heißen Sie?",
          "Wie spät ist es?",
          "Sprechen Sie langsamer?"
        ],
        "correctOption": "Woher kommen Sie?"
      },
      {
        "id": "ex3-match-countries",
        "type": "matching",
        "title": "Länder und Sprachen verbinden",
        "prompt": "Ordne die französischen Wörter der deutschen Bedeutung zu.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "pairs": [
          {
            "left": "Allemagne",
            "right": "Deutschland"
          },
          {
            "left": "Autriche",
            "right": "Österreich"
          },
          {
            "left": "Anglais",
            "right": "Englisch"
          },
          {
            "left": "français",
            "right": "Französisch"
          }
        ]
      },
      {
        "id": "ex3-fill-nuk-flas",
        "type": "fillBlank",
        "title": "Verneinung einsetzen",
        "prompt": "Ergänze: 'Ich spreche kein Französisch.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "Je ne ___ pas français.",
        "correctAnswers": [
          "parle"
        ]
      },
      {
        "id": "ex3-order-origin-live",
        "type": "sentenceOrder",
        "title": "Kombinierter Satz",
        "prompt": "Baue den Satz: 'Ich komme aus Österreich und wohne in Wien.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "tokens": [
          ".",
          "à",
          "d'Autriche",
          "et",
          "Je",
          "Vienne",
          "viens",
          "j'habite"
        ],
        "correctOrder": [
          "Je",
          "viens",
          "d'Autriche",
          "et",
          "j'habite",
          "à",
          "Vienne",
          "."
        ],
        "translation": "Ich komme aus Österreich und wohne in Wien."
      },
      {
        "id": "ex3-fill-gjuhe",
        "type": "fillBlank",
        "title": "Sprachfrage vervollständigen",
        "prompt": "Ergänze die Frage: 'Welche Sprache sprechen Sie?'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "Quelle ___ parlez-vous?",
        "correctAnswers": [
          "langue"
        ]
      },
      {
        "id": "ex3-free-profile",
        "type": "freeResponse",
        "title": "Fortgeschritten: Steckbrief in 5 Sätzen",
        "prompt": "Schreibe einen kurzen Steckbrief mit 5 Sätzen. Verwende Name, Herkunft, Wohnort, mindestens eine Sprache und eine Verneinung mit ne … pas.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "Je m'appelle Ben. Je viens d'Allemagne. J'habite à Berlin. Je parle allemand et anglais. Je ne parle pas bien le français."
        ]
      },
      {
        "id": "ex3-free-dialog",
        "type": "freeResponse",
        "title": "Fortgeschritten: Interview schreiben",
        "prompt": "Schreibe ein kurzes Interview mit 5 bis 6 Zeilen. Eine Person fragt nach Name, Herkunft und Sprache; die andere antwortet.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "A : Bonjour ! Comment vous appelez-vous ?\nB : Je m'appelle Ana.\nA : D’où viens-tu ?\nB : Je viens de France et j’habite à Paris.\nA : Quelle langue parlez-vous ?\nB : Je parle français et allemand."
        ]
      }
    ]
  },
  {
    "id": "lesson-origin-3a",
    "unitId": "origin-language-3a",
    "title": "Lektion 3a: Erweiterter Wortschatz und Grammatik",
    "outcome": "Nach dieser Erweiterung kannst du mehr Länder, Sprachen und Dokumentwörter verstehen und Herkunft, Wohnort sowie Nationalität genauer formulieren.",
    "warmup": "Lektion 3 konnte schon Herkunft und Sprache ausdrücken. In 3a wird das persönliche Profil genauer: mehr Länder, mehr Sprachen, Stadt und Dorf, hier und dort, plus die ersten Nationalitätsformen wie allemand/allemande und étranger/étrangère.",
    "focusLexemeIds": [
      "x-origin-language-01-italia",
      "x-origin-language-02-franca",
      "x-origin-language-03-spanja",
      "x-origin-language-04-turqia",
      "x-origin-language-05-greqia",
      "x-origin-language-06-britania",
      "x-origin-language-07-shtetet-e-bashkuara",
      "x-origin-language-08-maqedonia-e-veriut",
      "x-origin-language-09-mali-i-zi",
      "x-origin-language-10-serbia",
      "x-origin-language-11-bosnja",
      "x-origin-language-12-kroacia",
      "x-origin-language-13-italisht",
      "x-origin-language-14-frengjisht",
      "x-origin-language-15-spanjisht",
      "x-origin-language-16-turqisht",
      "x-origin-language-17-greqisht",
      "x-origin-language-18-serbisht",
      "x-origin-language-19-qytet",
      "x-origin-language-20-fshat",
      "x-origin-language-21-kryeqytet",
      "x-origin-language-22-rajon",
      "x-origin-language-23-vendlindje",
      "x-origin-language-24-kombesi",
      "x-origin-language-25-pasaporte",
      "x-origin-language-26-dokument",
      "x-origin-language-27-karte-identiteti",
      "x-origin-language-28-jetoj",
      "x-origin-language-29-lindur",
      "x-origin-language-30-ketu",
      "x-origin-language-31-atje",
      "x-origin-language-32-afer",
      "x-origin-language-33-larg",
      "x-origin-language-34-i-huaj",
      "x-origin-language-35-e-huaj"
    ],
    "dialogue": [
      {
        "speaker": "Léa",
        "french": "D’où viens-tu et où habites-tu actuellement ?",
        "german": "Woher kommen Sie und wo leben Sie jetzt?"
      },
      {
        "speaker": "Ben",
        "french": "Je viens d'Allemagne, mais j'habite ici, à Paris.",
        "german": "Ich komme aus Deutschland, aber ich lebe hier, in Paris."
      },
      {
        "speaker": "Léa",
        "french": "Quelle est votre nationalité ?",
        "german": "Was ist Ihre Nationalität?"
      },
      {
        "speaker": "Ben",
        "french": "Je suis allemand. Mon passeport est allemand.",
        "german": "Ich bin Deutscher. Mein Pass ist deutsch."
      },
      {
        "speaker": "Léa",
        "french": "Parlez-vous aussi italien ou français ?",
        "german": "Sprechen Sie auch Italienisch oder Französisch?"
      },
      {
        "speaker": "Ben",
        "french": "Non, je parle allemand et un peu français.",
        "german": "Nein, ich spreche Deutsch und ein bisschen Französisch."
      }
    ],
    "grammarNotes": [
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "a3a-live-city",
            "french": "J'habite à Paris.",
            "german": "Ich lebe in Paris.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a3a-live-here",
            "french": "J'habite ici.",
            "german": "Ich lebe hier.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a3a-origin-but",
            "french": "Je viens d'Italie, mais j'habite à Berlin.",
            "german": "Ich komme aus Italien, aber ich lebe in Berlin.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      },
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "a3a-nationality-m",
            "french": "Il est allemand.",
            "german": "Er ist Deutscher.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a3a-nationality-f",
            "french": "Elle est allemande.",
            "german": "Sie ist Deutsche.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a3a-document",
            "french": "Le passeport est un document.",
            "german": "Der Pass ist ein Dokument.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "ex3a-match-countries-expanded",
        "type": "matching",
        "title": "Mehr Länder erkennen",
        "prompt": "Ordne die französischen Wörter der deutschen Bedeutung zu.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "pairs": [
          {
            "left": "Italie",
            "right": "Italien"
          },
          {
            "left": "France",
            "right": "Frankreich"
          },
          {
            "left": "Turquie",
            "right": "Türkei"
          },
          {
            "left": "Grèce",
            "right": "Griechenland"
          }
        ]
      },
      {
        "id": "ex3a-mc-language",
        "type": "multipleChoice",
        "title": "Sprache erkennen",
        "prompt": "Welche Sprache ist 'Français'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "Französisch",
          "Italienisch",
          "Spanisch",
          "Türkisch"
        ],
        "correctOption": "Französisch"
      },
      {
        "id": "ex3a-fill-jetoj",
        "type": "fillBlank",
        "title": "Wohnort mit vivre",
        "prompt": "Ergänze: 'Ich lebe hier.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "___ vis ici",
        "correctAnswers": [
          "je"
        ]
      },
      {
        "id": "ex3a-order-origin-live",
        "type": "sentenceOrder",
        "title": "Herkunft und Leben verbinden",
        "prompt": "Baue den Satz: 'Ich komme aus Italien, aber ich lebe in Berlin.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "tokens": [
          ",",
          ".",
          "à",
          "Berlin",
          "d'Italie",
          "j'habite",
          "Je",
          "mais",
          "viens"
        ],
        "correctOrder": [
          "Je",
          "viens",
          "d'Italie",
          ",",
          "mais",
          "j'habite",
          "à",
          "Berlin",
          "."
        ],
        "translation": "Ich komme aus Italien, aber ich lebe in Berlin."
      },
      {
        "id": "ex3a-mc-nationality",
        "type": "multipleChoice",
        "title": "Nationalität erkennen",
        "prompt": "Welche Form passt zu 'Elle est ...' (Nationalität)?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "allemande",
          "allemand",
          "ville",
          "le passeport"
        ],
        "correctOption": "allemande"
      },
      {
        "id": "ex3a-fill-document",
        "type": "fillBlank",
        "title": "Dokumentwort einsetzen",
        "prompt": "Ergänze: 'Der Pass ist ein Dokument.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "Le ___ est un document.",
        "correctAnswers": [
          "passeport"
        ]
      },
      {
        "id": "ex3a-free-profile-expanded",
        "type": "freeResponse",
        "title": "Erweiterter Steckbrief",
        "prompt": "Schreibe 5 bis 6 Sätze über eine Person. Verwende Herkunft, aktuellen Wohnort, Nationalität, mindestens eine Sprache und ein Dokumentwort.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "Il s'appelle Ben. Ben est allemand. Il vient d'Allemagne, mais il vit ici, à Paris. Il parle allemand et un peu français. Son passeport est allemand."
        ]
      }
    ]
  },
  {
    "id": "lesson-numbers-4",
    "unitId": "numbers-time",
    "title": "Lektion 4: Zahlen, Uhrzeit und kleine Termine",
    "outcome": "Nach dieser Lektion kannst du einfache Zahlen, Uhrzeiten und Terminsätze verstehen und mit deiner bisherigen Vorstellung kombinieren.",
    "warmup": "Zahlen sind im Alltag überall: Alter, Uhrzeit, Telefonnummer, Termin. Diese Lektion startet mechanisch, endet aber mit längeren Nachrichten, in denen du Zahlen mit Name, Herkunft und Sprache verbindest.",
    "focusLexemeIds": [
      "zero",
      "nje",
      "dy",
      "tre",
      "kater",
      "pese",
      "gjashte",
      "shtate",
      "tete",
      "nente",
      "dhjete",
      "njembedhjete",
      "dymbedhjete",
      "njezet",
      "ora",
      "sot",
      "neser",
      "e-hene",
      "e-marte",
      "e-merkure",
      "takimi",
      "jam",
      "eshte"
    ],
    "dialogue": [
      {
        "speaker": "Léa",
        "french": "Quelle heure est-il ?",
        "german": "Wie spät ist es?"
      },
      {
        "speaker": "Ben",
        "french": "Il est neuf heures.",
        "german": "Es ist neun Uhr."
      },
      {
        "speaker": "Léa",
        "french": "Le rendez-vous est demain lundi à dix heures.",
        "german": "Der Termin ist morgen, am Montag, um zehn Uhr."
      },
      {
        "speaker": "Ben",
        "french": "Bien. Je m'appelle Ben, je viens d'Allemagne et je parle allemand.",
        "german": "Gut. Ich bin Ben, ich komme aus Deutschland und spreche Deutsch."
      }
    ],
    "grammarNotes": [
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "note-hour",
            "french": "Il est neuf heures.",
            "german": "Es ist neun Uhr.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-at-hour",
            "french": "à dix heures",
            "german": "um zehn Uhr",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      },
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "note-meeting",
            "french": "Le rendez-vous est lundi.",
            "german": "Der Termin ist am Montag.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-tomorrow",
            "french": "Le rendez-vous est demain.",
            "german": "Der Termin ist morgen.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "ex4-match-numbers",
        "type": "matching",
        "title": "Zahlen warm werden",
        "prompt": "Ordne die französischen Wörter der deutschen Bedeutung zu.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "pairs": [
          {
            "left": "zéro",
            "right": "0"
          },
          {
            "left": "un / une",
            "right": "1"
          },
          {
            "left": "cinq",
            "right": "5"
          },
          {
            "left": "dix",
            "right": "10"
          }
        ]
      },
      {
        "id": "ex4-mc-time-question",
        "type": "multipleChoice",
        "title": "Zeitfrage erkennen",
        "prompt": "Was bedeutet 'Quelle heure est-il ?'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "Wie spät ist es?",
          "Wie heißen Sie?",
          "Wo wohnen Sie?",
          "Welche Sprache sprechen Sie?"
        ],
        "correctOption": "Wie spät ist es?"
      },
      {
        "id": "ex4-fill-hour",
        "type": "fillBlank",
        "title": "Uhrzeit ergänzen",
        "prompt": "Ergänze den Satz: 'Es ist neun Uhr.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "Il est ___ heures.",
        "correctAnswers": [
          "neuf"
        ]
      },
      {
        "id": "ex4-order-meeting",
        "type": "sentenceOrder",
        "title": "Terminsatz bauen",
        "prompt": "Baue den Satz: 'Der Termin ist am Montag um zehn Uhr.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "tokens": [
          ".",
          "à",
          "dix",
          "est",
          "heures",
          "Le",
          "lundi",
          "rendez-vous"
        ],
        "correctOrder": [
          "Le",
          "rendez-vous",
          "est",
          "lundi",
          "à",
          "dix",
          "heures",
          "."
        ],
        "translation": "Der Termin ist am Montag um zehn Uhr."
      },
      {
        "id": "ex4-fill-age",
        "type": "fillBlank",
        "title": "Alter sagen",
        "prompt": "Ergänze: 'Ich bin zwanzig Jahre alt.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "J'ai ___ ans.",
        "correctAnswers": [
          "vingt"
        ]
      },
      {
        "id": "ex4-mc-tomorrow",
        "type": "multipleChoice",
        "title": "Zeitwort verstehen",
        "prompt": "Was bedeutet 'demain'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "morgen",
          "heute",
          "Montag",
          "Uhr"
        ],
        "correctOption": "morgen"
      },
      {
        "id": "ex4-free-schedule",
        "type": "freeResponse",
        "title": "Fortgeschritten: Nachricht mit Termin",
        "prompt": "Schreibe eine kurze Nachricht mit 5 bis 6 Sätzen. Verwende Name, Herkunft oder Wohnort, eine Sprache, einen Wochentag und eine Uhrzeit.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "Bonjour ! Je m'appelle Ben. Je viens d'Allemagne et j'habite à Berlin. Je parle allemand et anglais. La réunion a lieu lundi à dix heures. Parlez plus lentement, s'il vous plaît."
        ]
      },
      {
        "id": "ex4-free-interview-plus-time",
        "type": "freeResponse",
        "title": "Fortgeschritten: Interview plus Termin",
        "prompt": "Schreibe ein Interview mit 6 bis 8 Zeilen. Es soll Name, Herkunft, Sprache und einen Termin enthalten. Nutze nur Muster, die du bis Lektion 4 gesehen hast.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "A : Bonjour ! Comment vous appelez-vous ?\nB : Je m'appelle Ana.\nA : D’où viens-tu ?\nB : Je viens de Belgique et j'habite à Berlin.\nA : Quelle langue parlez-vous ?\nB : Je parle français et allemand.\nA : Quelle heure est-il ?\nB : Il est dix heures. La réunion est aujourd'hui."
        ]
      }
    ]
  },
  {
    "id": "lesson-numbers-4a",
    "unitId": "numbers-time-4a",
    "title": "Lektion 4a: Erweiterter Wortschatz und Grammatik",
    "outcome": "Nach dieser Erweiterung kannst du Zahlen bis 100, Monatsnamen, Datum und einfache Zeitwörter in Kalender- und Terminsätzen verwenden.",
    "warmup": "Lektion 4 hat Zahlen und einfache Termine eingeführt. In 4a wird daraus ein Kalender: höhere Zahlen, die restlichen Wochentage, Monate, Datum, gestern, übermorgen, früh und spät. Grammatisch bleiben wir bei festen Mustern, damit die Menge an neuen Formen nicht unnötig schwer wird.",
    "focusLexemeIds": [
      "x-numbers-time-01-trembedhjete",
      "x-numbers-time-02-katermbedhjete",
      "x-numbers-time-03-pesembedhjete",
      "x-numbers-time-04-gjashtembedhjete",
      "x-numbers-time-05-shtatembedhjete",
      "x-numbers-time-06-tetembedhjete",
      "x-numbers-time-07-nentembedhjete",
      "x-numbers-time-08-tridhjete",
      "x-numbers-time-09-dyzet",
      "x-numbers-time-10-pesedhjete",
      "x-numbers-time-11-gjashtedhjete",
      "x-numbers-time-12-njeqind",
      "x-numbers-time-13-e-enjte",
      "x-numbers-time-14-e-premte",
      "x-numbers-time-15-e-shtune",
      "x-numbers-time-16-e-diel",
      "x-numbers-time-17-java",
      "x-numbers-time-18-muaji",
      "x-numbers-time-19-viti",
      "x-numbers-time-20-data",
      "x-numbers-time-21-janar",
      "x-numbers-time-22-shkurt",
      "x-numbers-time-23-mars",
      "x-numbers-time-24-prill",
      "x-numbers-time-25-maj",
      "x-numbers-time-26-qershor",
      "x-numbers-time-27-korrik",
      "x-numbers-time-28-gusht",
      "x-numbers-time-29-shtator",
      "x-numbers-time-30-tetor",
      "x-numbers-time-31-nentor",
      "x-numbers-time-32-dhjetor",
      "x-numbers-time-33-dje",
      "x-numbers-time-34-pasneser",
      "x-numbers-time-35-heret",
      "x-numbers-time-36-vone"
    ],
    "dialogue": [
      {
        "speaker": "Léa",
        "french": "Quelle date est aujourd'hui ?",
        "german": "Welches Datum ist heute?"
      },
      {
        "speaker": "Ben",
        "french": "Aujourd'hui, c'est le cinq mai.",
        "german": "Heute ist der fünfte Mai."
      },
      {
        "speaker": "Léa",
        "french": "Le rendez-vous est vendredi à 14 heures.",
        "german": "Der Termin ist am Freitag um vierzehn Uhr."
      },
      {
        "speaker": "Ben",
        "french": "Est-ce tôt ou tard ?",
        "german": "Ist das früh oder spät?"
      },
      {
        "speaker": "Léa",
        "french": "Il est un peu tard, mais la semaine est libre.",
        "german": "Es ist ein bisschen spät, aber die Woche ist frei."
      }
    ],
    "grammarNotes": [
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "a4a-number-teens",
            "french": "treize, quatorze, quinze",
            "german": "dreizehn, vierzehn, fünfzehn",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a4a-number-tens",
            "french": "trente, quarante, cinquante",
            "german": "dreißig, vierzig, fünfzig",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a4a-hundred",
            "french": "cent",
            "german": "hundert",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      },
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "a4a-date-today",
            "french": "Aujourd'hui, c'est le cinq mai.",
            "german": "Heute ist der fünfte Mai.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a4a-meeting-friday",
            "french": "Le rendez-vous est vendredi.",
            "german": "Der Termin ist am Freitag.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a4a-time-adverbs",
            "french": "Hier, aujourd'hui, demain, après-demain.",
            "german": "Gestern, heute, morgen, übermorgen.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "ex4a-match-months",
        "type": "matching",
        "title": "Monate zuordnen",
        "prompt": "Ordne die französischen Wörter der deutschen Bedeutung zu.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "pairs": [
          {
            "left": "janvier",
            "right": "Januar"
          },
          {
            "left": "Février",
            "right": "Februar"
          },
          {
            "left": "mai",
            "right": "Mai"
          },
          {
            "left": "décembre",
            "right": "Dezember"
          }
        ]
      },
      {
        "id": "ex4a-mc-number",
        "type": "multipleChoice",
        "title": "Zahl erkennen",
        "prompt": "Was bedeutet 'soixante'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "sechzig",
          "sechzehn",
          "sechs",
          "siebzig"
        ],
        "correctOption": "sechzig"
      },
      {
        "id": "ex4a-fill-date",
        "type": "fillBlank",
        "title": "Datum formulieren",
        "prompt": "Ergänze: 'Heute ist der fünfte Mai.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "Aujourd'hui, c'est le cinq ___.",
        "correctAnswers": [
          "mai"
        ]
      },
      {
        "id": "ex4a-order-friday",
        "type": "sentenceOrder",
        "title": "Terminsatz mit Wochentag",
        "prompt": "Baue den Satz: 'Der Termin ist am Freitag um vierzehn Uhr.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "tokens": [
          ".",
          "14",
          "à",
          "est",
          "heures",
          "Le",
          "rendez-vous",
          "vendredi"
        ],
        "correctOrder": [
          "Le",
          "rendez-vous",
          "est",
          "vendredi",
          "à",
          "14",
          "heures",
          "."
        ],
        "translation": "Der Termin ist am Freitag um vierzehn Uhr."
      },
      {
        "id": "ex4a-mc-pasneser",
        "type": "multipleChoice",
        "title": "Zeitwort verstehen",
        "prompt": "Was bedeutet 'après-demain'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "übermorgen",
          "gestern",
          "heute",
          "spät"
        ],
        "correctOption": "übermorgen"
      },
      {
        "id": "ex4a-fill-late",
        "type": "fillBlank",
        "title": "Früh oder spät",
        "prompt": "Ergänze: 'Es ist spät.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "Il ___ tard.",
        "correctAnswers": [
          "est"
        ]
      },
      {
        "id": "ex4a-free-calendar-note",
        "type": "freeResponse",
        "title": "Kalendernotiz schreiben",
        "prompt": "Schreibe eine Kalendernotiz mit 5 bis 6 Sätzen. Verwende ein Datum, einen Monat, einen Wochentag, eine Uhrzeit und eines der Wörter hier, aujourd'hui, demain oder après-demain.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "Aujourd'hui, c'est le cinq mai. La réunion aura lieu vendredi à 16 heures. J'ai cours demain. La semaine est bonne. Il est un peu tard, mais bon."
        ]
      }
    ]
  },
  {
    "id": "lesson-family-5",
    "unitId": "family-people",
    "title": "Lektion 5: Familie und Personen beschreiben",
    "outcome": "Nach dieser Lektion kannst du einfache Familienmitglieder vorstellen und kurze Angaben zu Beziehung, Alter und Beruf machen.",
    "warmup": "Ab jetzt sprichst du nicht nur über dich. Du nutzt bekannte Muster wie 'il/elle est' und Zahlen, um andere Personen in kurzen, zusammenhängenden Sätzen zu beschreiben.",
    "focusLexemeIds": [
      "familja",
      "nena",
      "babai",
      "motra",
      "vellai",
      "gjyshja",
      "gjyshi",
      "ky",
      "kjo",
      "ime",
      "im",
      "ai",
      "ajo",
      "eshte",
      "vjec",
      "njezet",
      "mesuese",
      "mesues"
    ],
    "dialogue": [
      {
        "speaker": "Léa",
        "french": "Qui est-ce ?",
        "german": "Wer ist das?"
      },
      {
        "speaker": "Ben",
        "french": "C'est ma sœur. Elle s'appelle Ana.",
        "german": "Das ist meine Schwester. Sie heißt Ana."
      },
      {
        "speaker": "Léa",
        "french": "Quel âge a-t-elle?",
        "german": "Wie alt ist sie?"
      },
      {
        "speaker": "Ben",
        "french": "Elle a vingt ans et elle est enseignante.",
        "german": "Sie ist zwanzig Jahre alt und sie ist Lehrerin."
      },
      {
        "speaker": "Léa",
        "french": "Et celui-ci ?",
        "german": "Und dieser hier?"
      },
      {
        "speaker": "Ben",
        "french": "C'est mon père. Il est médecin.",
        "german": "Das ist mein Vater. Er ist Arzt."
      }
    ],
    "grammarNotes": [
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "note-kjo",
            "french": "C'est ma sœur.",
            "german": "Das ist meine Schwester.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-ky",
            "french": "C'est mon père.",
            "german": "Das ist mein Vater.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      },
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "note-ime",
            "french": "ma mère",
            "german": "meine Mutter",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-im",
            "french": "mon père",
            "german": "mein Vater",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "ex5-match-family",
        "type": "matching",
        "title": "Familienwörter sichern",
        "prompt": "Ordne die französischen Wörter der deutschen Bedeutung zu.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "pairs": [
          {
            "left": "la mère",
            "right": "Mutter"
          },
          {
            "left": "le père",
            "right": "Vater"
          },
          {
            "left": "la soeur",
            "right": "Schwester"
          },
          {
            "left": "le frère",
            "right": "Bruder"
          }
        ]
      },
      {
        "id": "ex5-mc-kjo",
        "type": "multipleChoice",
        "title": "Mon oder ma?",
        "prompt": "Welche Form passt zu '___ sœur' (meine Schwester)?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "ma",
          "mon",
          "de",
          "pas"
        ],
        "correctOption": "ma"
      },
      {
        "id": "ex5-fill-ime",
        "type": "fillBlank",
        "title": "Meine Mutter",
        "prompt": "Ergänze den Satz.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "C'est ___ mère.",
        "correctAnswers": [
          "ma"
        ]
      },
      {
        "id": "ex5-order-father",
        "type": "sentenceOrder",
        "title": "Person vorstellen",
        "prompt": "Baue den Satz: 'Das ist mein Vater.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "tokens": [
          ".",
          "C'est",
          "mon",
          "père"
        ],
        "correctOrder": [
          "C'est",
          "mon",
          "père",
          "."
        ],
        "translation": "Das ist mein Vater."
      },
      {
        "id": "ex5-fill-age",
        "type": "fillBlank",
        "title": "Alter ausdrücken",
        "prompt": "Ergänze: 'Sie ist zwanzig Jahre alt.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "Elle a vingt ___.",
        "correctAnswers": [
          "ans"
        ]
      },
      {
        "id": "ex5-mc-profession",
        "type": "multipleChoice",
        "title": "Beruf erkennen",
        "prompt": "Was bedeutet 'professeur'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "Lehrerin",
          "Schwester",
          "Montag",
          "Kaffee"
        ],
        "correctOption": "Lehrerin"
      },
      {
        "id": "ex5-free-family-card",
        "type": "freeResponse",
        "title": "Fortgeschritten: Familienkarte",
        "prompt": "Schreibe 5 bis 6 Sätze über eine fiktive Familie. Verwende mindestens drei Familienwörter, c'est, einen Namen und eine Altersangabe.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "C'est ma mère. Elle s'appelle Mira. C'est mon père. Il s'appelle Ben. Ma sœur est Ana. Elle a vingt ans."
        ]
      },
      {
        "id": "ex5-free-family-interview",
        "type": "freeResponse",
        "title": "Fortgeschritten: Familien-Interview",
        "prompt": "Schreibe einen Dialog mit 6 bis 8 Zeilen. Eine Person fragt nach zwei Familienmitgliedern; die andere antwortet mit Name, Beziehung und einer Zusatzinfo.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "A : Qui est-ce ?\nB : C'est ma sœur.\nA : Quel est son nom ?\nB : Elle s’appelle Ana.\nA : Quel âge a-t-elle ?\nB : Elle a vingt ans.\nA : Et celui-ci ?\nB : C'est mon père. Il est médecin."
        ]
      }
    ]
  },
  {
    "id": "lesson-family-5a",
    "unitId": "family-people-5a",
    "title": "Lektion 5a: Erweiterter Wortschatz und Grammatik",
    "outcome": "Nach dieser Erweiterung kannst du Familienmitglieder, Beziehungen, einfache Eigenschaften und Berufe genauer beschreiben.",
    "warmup": "Lektion 5 hat die Kernfamilie eingeführt. In 5a wird die Beschreibung lebendiger: Eltern, Kind, Cousin und Cousine, verheiratet oder ledig, groß oder klein, jung oder alt. Grammatisch bleibt der Fokus klein: Personenwörter haben oft männliche und weibliche Formen, und einfache Adjektive stehen nach dem Nomen.",
    "focusLexemeIds": [
      "x-family-people-01-prinderit",
      "x-family-people-02-femija",
      "x-family-people-03-djali",
      "x-family-people-04-vajza",
      "x-family-people-05-burri",
      "x-family-people-06-gruaja",
      "x-family-people-07-xhaxhai",
      "x-family-people-08-tezja",
      "x-family-people-09-kusheriri",
      "x-family-people-10-kusherira",
      "x-family-people-11-i-ri",
      "x-family-people-12-e-re",
      "x-family-people-13-i-vjeter",
      "x-family-people-14-e-vjeter",
      "x-family-people-15-i-madh",
      "x-family-people-16-e-madhe",
      "x-family-people-17-i-vogel",
      "x-family-people-18-e-vogel",
      "x-family-people-19-i-martuar",
      "x-family-people-20-e-martuar",
      "x-family-people-21-beqar",
      "x-family-people-22-beqare",
      "x-family-people-23-pune",
      "x-family-people-24-punonjes",
      "x-family-people-25-punonjese",
      "x-family-people-26-inxhinier",
      "x-family-people-27-infermier",
      "x-family-people-28-infermiere",
      "x-family-people-29-shites",
      "x-family-people-30-shitese",
      "x-family-people-31-ku",
      "x-family-people-32-kush",
      "x-family-people-33-cfare-pune",
      "x-family-people-34-jote",
      "x-family-people-35-yt"
    ],
    "dialogue": [
      {
        "speaker": "Léa",
        "french": "Ta famille est grande ?",
        "german": "Ist deine Familie groß?"
      },
      {
        "speaker": "Ben",
        "french": "Oui, ma famille est grande. Mes parents vivent à Berlin.",
        "german": "Ja, meine Familie ist groß. Meine Eltern leben in Berlin."
      },
      {
        "speaker": "Léa",
        "french": "Qui est-ce ?",
        "german": "Wer ist das?"
      },
      {
        "speaker": "Ben",
        "french": "C'est mon cousin. Il est ingénieur et célibataire.",
        "german": "Das ist mein Cousin. Er ist Ingenieur und ledig."
      },
      {
        "speaker": "Léa",
        "french": "Et ça ?",
        "german": "Und das hier?"
      },
      {
        "speaker": "Ben",
        "french": "C'est ma cousine. Elle est salariée et mariée.",
        "german": "Das ist meine Cousine. Sie ist Angestellte und verheiratet."
      }
    ],
    "grammarNotes": [
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "a5a-person-cousin",
            "french": "C'est mon cousin.",
            "german": "Das ist mein Cousin.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a5a-person-cousine",
            "french": "C'est ma cousine.",
            "german": "Das ist meine Cousine.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a5a-work-forms",
            "french": "C'est un vendeur. Elle est vendeuse.",
            "german": "Er ist Verkäufer. Sie ist Verkäuferin.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      },
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "a5a-adjective-small",
            "french": "la petite soeur",
            "german": "die kleine Schwester",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a5a-adjective-big",
            "french": "la grande famille",
            "german": "die große Familie",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a5a-status",
            "french": "Il est célibataire. Elle est mariée.",
            "german": "Er ist ledig. Sie ist verheiratet.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "ex5a-match-family-expanded",
        "type": "matching",
        "title": "Weitere Familienwörter",
        "prompt": "Ordne die französischen Wörter der deutschen Bedeutung zu.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "pairs": [
          {
            "left": "les parents",
            "right": "die Eltern"
          },
          {
            "left": "l'enfant",
            "right": "das Kind"
          },
          {
            "left": "le cousin",
            "right": "der Cousin"
          },
          {
            "left": "la cousine",
            "right": "die Cousine"
          }
        ]
      },
      {
        "id": "ex5a-mc-profession-feminine",
        "type": "multipleChoice",
        "title": "Berufsform erkennen",
        "prompt": "Welche Form bedeutet 'Verkäuferin'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "vendeuse",
          "le vendeur",
          "l'ingénieur",
          "célibataire"
        ],
        "correctOption": "vendeuse"
      },
      {
        "id": "ex5a-fill-possessive",
        "type": "fillBlank",
        "title": "Deine Familie",
        "prompt": "Ergänze: 'Deine Familie ist groß.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "Ta ___ est grande.",
        "correctAnswers": [
          "famille"
        ]
      },
      {
        "id": "ex5a-order-cousin",
        "type": "sentenceOrder",
        "title": "Cousin vorstellen",
        "prompt": "Baue den Satz: 'Das ist mein Cousin.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "tokens": [
          ".",
          "C'est",
          "cousin",
          "mon"
        ],
        "correctOrder": [
          "C'est",
          "mon",
          "cousin",
          "."
        ],
        "translation": "Das ist mein Cousin."
      },
      {
        "id": "ex5a-fill-adjective",
        "type": "fillBlank",
        "title": "Eigenschaft einsetzen",
        "prompt": "Ergänze: 'Die Schwester ist klein.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "La ___ est petite.",
        "correctAnswers": [
          "sœur"
        ]
      },
      {
        "id": "ex5a-mc-status",
        "type": "multipleChoice",
        "title": "Personenstatus verstehen",
        "prompt": "Was bedeutet 'Elle est célibataire'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "ledig feminin",
          "verheiratet maskulin",
          "groß feminin",
          "alt maskulin"
        ],
        "correctOption": "ledig feminin"
      },
      {
        "id": "ex5a-free-person-description",
        "type": "freeResponse",
        "title": "Person genauer beschreiben",
        "prompt": "Schreibe 5 bis 6 Sätze über zwei Personen aus einer Familie. Verwende mindestens zwei Familienwörter, einen Beruf, eine Eigenschaft und eine Possessivform wie mon, ma, ton oder ta.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "C'est ma cousine. Elle est salariée et mariée. C'est mon cousin. Il est ingénieur et célibataire. Ta famille est grande."
        ]
      }
    ]
  },
  {
    "id": "lesson-food-6",
    "unitId": "food",
    "title": "Lektion 6: Im Café bestellen",
    "outcome": "Nach dieser Lektion kannst du im Café einfache Wünsche äußern, mit oder ohne etwas bestellen und Hunger oder Durst sagen.",
    "warmup": "Die Café-Lektion bleibt alltagsnah. Du lernst wenige starke Muster: 'Je voudrais...' für Bestellungen, 'J'ai faim/soif' für Bedürfnisse und 'avec/sans' für mit oder ohne.",
    "focusLexemeIds": [
      "dua",
      "kam",
      "uri",
      "etje",
      "uje",
      "kafe",
      "caj",
      "buke",
      "djath",
      "qumesht",
      "sheqer",
      "me",
      "pa",
      "menyja",
      "ju-lutem",
      "faleminderit",
      "po",
      "jo"
    ],
    "dialogue": [
      {
        "speaker": "Le serveur",
        "french": "Bonjour ! Que désirez-vous ?",
        "german": "Guten Tag! Was möchten Sie?"
      },
      {
        "speaker": "Ben",
        "french": "Je voudrais un café et de l'eau, s'il vous plaît.",
        "german": "Ich möchte einen Kaffee und Wasser, bitte."
      },
      {
        "speaker": "Le serveur",
        "french": "Du café avec du sucre ?",
        "german": "Kaffee mit Zucker?"
      },
      {
        "speaker": "Ben",
        "french": "Non, sans sucre. J'ai faim. Je veux du pain avec du fromage.",
        "german": "Nein, ohne Zucker. Ich habe Hunger. Ich möchte Brot mit Käse."
      },
      {
        "speaker": "Le serveur",
        "french": "Oui, immédiatement.",
        "german": "Ja, sofort."
      }
    ],
    "grammarNotes": [
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "note-dua-kafe",
            "french": "Je voudrais un café.",
            "german": "Ich möchte einen Kaffee.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-dua-water",
            "french": "Je veux de l'eau.",
            "german": "Ich möchte Wasser.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      },
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "note-me",
            "french": "Café avec du sucre",
            "german": "Kaffee mit Zucker",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-pa",
            "french": "sans sucre",
            "german": "ohne Zucker",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "ex6-mc-dua",
        "type": "multipleChoice",
        "title": "Bestellmuster erkennen",
        "prompt": "Was bedeutet 'Je voudrais un café'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "Ich möchte einen Kaffee",
          "Ich habe Hunger",
          "Ich wohne in Berlin",
          "Wie viel kostet das?"
        ],
        "correctOption": "Ich möchte einen Kaffee"
      },
      {
        "id": "ex6-match-food",
        "type": "matching",
        "title": "Café-Wortschatz",
        "prompt": "Ordne die französischen Wörter der deutschen Bedeutung zu.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "pairs": [
          {
            "left": "eau",
            "right": "Wasser"
          },
          {
            "left": "Thé",
            "right": "Tee"
          },
          {
            "left": "Pain",
            "right": "Brot"
          },
          {
            "left": "Fromage",
            "right": "Käse"
          }
        ]
      },
      {
        "id": "ex6-fill-pa",
        "type": "fillBlank",
        "title": "Ohne Zucker",
        "prompt": "Ergänze die Bestellung.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "Café ___ sucre.",
        "correctAnswers": [
          "sans"
        ]
      },
      {
        "id": "ex6-order-order",
        "type": "sentenceOrder",
        "title": "Bestellung bauen",
        "prompt": "Baue den Satz: 'Ich möchte Brot mit Käse, bitte.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "tokens": [
          ",",
          ".",
          "avec",
          "du",
          "du",
          "fromage",
          "Je",
          "pain",
          "plaît",
          "s'il",
          "voudrais",
          "vous"
        ],
        "correctOrder": [
          "Je",
          "voudrais",
          "du",
          "pain",
          "avec",
          "du",
          "fromage",
          ",",
          "s'il",
          "vous",
          "plaît",
          "."
        ],
        "translation": "Ich möchte Brot mit Käse, bitte."
      },
      {
        "id": "ex6-fill-need",
        "type": "fillBlank",
        "title": "Bedürfnis ausdrücken",
        "prompt": "Ergänze: 'Ich habe Durst.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "J'ai ___.",
        "correctAnswers": [
          "Soif"
        ]
      },
      {
        "id": "ex6-mc-me",
        "type": "multipleChoice",
        "title": "Mit oder ohne?",
        "prompt": "Welche Übersetzung passt zu 'avec du lait'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "mit Milch",
          "ohne Milch",
          "mit Zucker",
          "ohne Zucker"
        ],
        "correctOption": "mit Milch"
      },
      {
        "id": "ex6-free-cafe-order",
        "type": "freeResponse",
        "title": "Fortgeschritten: Deine Café-Bestellung",
        "prompt": "Schreibe 5 bis 6 Sätze im Café. Verwende Begrüßung, mindestens zwei Getränke oder Speisen, avec oder sans, eine Bitte und danke.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "Bonjour ! Je voudrais un café sans sucre, s'il vous plaît. Je veux aussi de l'eau. J'ai faim. Je veux du pain avec du fromage. Merci."
        ]
      },
      {
        "id": "ex6-free-cafe-dialog",
        "type": "freeResponse",
        "title": "Fortgeschritten: Café-Dialog",
        "prompt": "Schreibe einen Dialog mit 6 bis 8 Zeilen zwischen Gast und Kellner. Der Gast bestellt, sagt mit/ohne etwas und nennt Hunger oder Durst.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "A : Bonjour ! Que veux-tu?\nB : Je voudrais du thé, s’il vous plaît.\nA : Avec du sucre ?\nB : Non, pas de sucre.\nA : Autre chose ?\nB : J'ai faim. Je veux du pain avec du fromage.\nA : Oui, immédiatement.\nB : Merci."
        ]
      }
    ]
  },
  {
    "id": "lesson-food-6a",
    "unitId": "food-6a",
    "title": "Lektion 6a: Erweiterter Wortschatz und Grammatik",
    "outcome": "Nach dieser Erweiterung kannst du im Restaurant mehr Speisen, Getränke, Mengen und einfache Bezahlsätze verstehen und formulieren.",
    "warmup": "Lektion 6 war das Café. In 6a wird daraus ein Restaurantbesuch: Bestellung, Rechnung, Teller, Glas, Suppe, Reis, Gemüse, Saft und kleine Mengen wie eine Flasche oder ein Stück. Grammatisch bleibt alles alltagstauglich: je voudrais für Wünsche, j'ai für Bedürfnisse und avec/sans für mit oder ohne.",
    "focusLexemeIds": [
      "x-food-01-restoranti",
      "x-food-02-lokali",
      "x-food-03-kamarierja",
      "x-food-04-fatura",
      "x-food-05-porosia",
      "x-food-06-pjata",
      "x-food-07-gota",
      "x-food-08-filxhani",
      "x-food-09-luge",
      "x-food-10-pirun",
      "x-food-11-thike",
      "x-food-12-supe",
      "x-food-13-oriz",
      "x-food-14-makarona",
      "x-food-15-veze",
      "x-food-16-mish",
      "x-food-17-peshk",
      "x-food-18-perime",
      "x-food-19-fruta",
      "x-food-20-molle",
      "x-food-21-banane",
      "x-food-22-domate",
      "x-food-23-sallate",
      "x-food-24-kripe",
      "x-food-25-piper",
      "x-food-26-leng",
      "x-food-27-birre",
      "x-food-28-vere",
      "x-food-29-shishe",
      "x-food-30-cope",
      "x-food-31-pak",
      "x-food-32-shume",
      "x-food-33-i-ngrohte",
      "x-food-34-e-ftohte"
    ],
    "dialogue": [
      {
        "speaker": "La serveuse",
        "french": "Bonjour ! Que souhaiteriez-vous au restaurant ?",
        "german": "Guten Tag! Was möchten Sie im Restaurant?"
      },
      {
        "speaker": "Ben",
        "french": "Je voudrais de la soupe, du riz aux légumes et un verre de jus.",
        "german": "Ich möchte Suppe, Reis mit Gemüse und ein Glas Saft."
      },
      {
        "speaker": "La serveuse",
        "french": "Voulez-vous de la viande ou du poisson?",
        "german": "Möchten Sie Fleisch oder Fisch?"
      },
      {
        "speaker": "Ben",
        "french": "Non, pas de viande ni de poisson, s'il vous plaît.",
        "german": "Nein, ohne Fleisch und ohne Fisch, bitte."
      },
      {
        "speaker": "La serveuse",
        "french": "D'accord. L'addition arrive tout de suite.",
        "german": "In Ordnung. Die Rechnung kommt sofort."
      }
    ],
    "grammarNotes": [
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "a6a-order-list",
            "french": "Je veux de la soupe et du riz.",
            "german": "Ich möchte Suppe und Reis.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a6a-order-with",
            "french": "Riz aux légumes",
            "german": "Reis mit Gemüse",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a6a-order-without",
            "french": "sans viande et sans poisson",
            "german": "ohne Fleisch und ohne Fisch",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      },
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "a6a-glass",
            "french": "un verre de jus",
            "german": "ein Glas Saft",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a6a-bottle",
            "french": "une bouteille d'eau",
            "german": "eine Flasche Wasser",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a6a-piece",
            "french": "un morceau de pain",
            "german": "ein Stück Brot",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "ex6a-match-restaurant",
        "type": "matching",
        "title": "Restaurantwörter",
        "prompt": "Ordne die französischen Wörter der deutschen Bedeutung zu.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "pairs": [
          {
            "left": "le restaurant",
            "right": "das Restaurant"
          },
          {
            "left": "la serveuse",
            "right": "die Kellnerin"
          },
          {
            "left": "l'addition",
            "right": "die Rechnung"
          },
          {
            "left": "la commande",
            "right": "die Bestellung"
          }
        ]
      },
      {
        "id": "ex6a-mc-vegetables",
        "type": "multipleChoice",
        "title": "Speise erkennen",
        "prompt": "Was bedeutet 'légumes'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "Gemüse",
          "Reis",
          "Fisch",
          "Rechnung"
        ],
        "correctOption": "Gemüse"
      },
      {
        "id": "ex6a-fill-without",
        "type": "fillBlank",
        "title": "Ohne Fleisch",
        "prompt": "Ergänze: 'ohne Fleisch'.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "___ viande",
        "correctAnswers": [
          "sans"
        ]
      },
      {
        "id": "ex6a-order-rice-vegetables",
        "type": "sentenceOrder",
        "title": "Bestellung bauen",
        "prompt": "Baue den Satz: 'Ich möchte Reis mit Gemüse.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "tokens": [
          ".",
          "aux",
          "du",
          "Je",
          "légumes",
          "riz",
          "veux"
        ],
        "correctOrder": [
          "Je",
          "veux",
          "du",
          "riz",
          "aux",
          "légumes",
          "."
        ],
        "translation": "Ich möchte Reis mit Gemüse."
      },
      {
        "id": "ex6a-fill-quantity",
        "type": "fillBlank",
        "title": "Ein Glas Saft",
        "prompt": "Ergänze: 'ein Glas Saft'.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "un ___ de jus",
        "correctAnswers": [
          "verre"
        ]
      },
      {
        "id": "ex6a-mc-bill",
        "type": "multipleChoice",
        "title": "Rechnung verstehen",
        "prompt": "Was bedeutet 'la facture'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "die Rechnung",
          "die Gabel",
          "der Saft",
          "die Suppe"
        ],
        "correctOption": "die Rechnung"
      },
      {
        "id": "ex6a-free-restaurant-order",
        "type": "freeResponse",
        "title": "Restaurantbestellung schreiben",
        "prompt": "Schreibe 5 bis 6 Sätze im Restaurant. Verwende mindestens drei Speisen oder Getränke, eine Menge wie verre/bouteille/morceau, avec oder sans und das Wort l'addition.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "Bonjour ! Je veux de la soupe et du riz avec des légumes. Je veux un verre de jus. Pas de viande ni de poisson, s'il vous plaît. L'addition, s'il vous plaît. Merci."
        ]
      }
    ]
  },
  {
    "id": "lesson-shopping-7",
    "unitId": "shopping",
    "title": "Lektion 7: Einkaufen, Preise und Farben",
    "outcome": "Nach dieser Lektion kannst du nach Preisen fragen, einfache Kleidungsstücke und Farben nennen und einen kleinen Einkauf beschreiben.",
    "warmup": "Jetzt kombinierst du Zahlen, Höflichkeit und Wünsche mit Einkaufssprache. Die letzte Aufgabe ist bewusst länger: ein kleiner Laden-Dialog mit Preis, Farbe, Wunsch und Entscheidung.",
    "focusLexemeIds": [
      "sa-kushton",
      "kushton",
      "kjo-shopping",
      "dua",
      "nje",
      "dy",
      "tre",
      "pese",
      "dhjete",
      "njezet",
      "euro",
      "leke",
      "ngjyre",
      "kuqe",
      "zeze",
      "bardhe",
      "madhesi",
      "kemishe",
      "fustan",
      "kepuce"
    ],
    "dialogue": [
      {
        "speaker": "Ben",
        "french": "Bonjour ! Combien coûte cette chemise ?",
        "german": "Guten Tag! Wie viel kostet dieses Hemd?"
      },
      {
        "speaker": "La vendeuse",
        "french": "Cette chemise coûte dix euros.",
        "german": "Dieses Hemd kostet zehn Euro."
      },
      {
        "speaker": "Ben",
        "french": "Je veux une chemise rouge. Taille M, s'il vous plaît.",
        "german": "Ich möchte ein rotes Hemd. Größe M, bitte."
      },
      {
        "speaker": "La vendeuse",
        "french": "Oui, celle-ci est rouge.",
        "german": "Ja, dieses hier ist rot."
      },
      {
        "speaker": "Ben",
        "french": "Bien. Merci.",
        "german": "Gut. Danke."
      }
    ],
    "grammarNotes": [
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "note-price-this",
            "french": "Combien ça coûte ici ?",
            "german": "Wie viel kostet das hier?",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-price-shirt",
            "french": "Cette chemise coûte dix euros.",
            "german": "Dieses Hemd kostet zehn Euro.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      },
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "note-red-shirt",
            "french": "Je veux une chemise rouge.",
            "german": "Ich möchte ein rotes Hemd.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-size",
            "french": "Taille M, s'il vous plaît.",
            "german": "Größe M, bitte.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "ex7-mc-price-question",
        "type": "multipleChoice",
        "title": "Preisfrage erkennen",
        "prompt": "Was bedeutet 'Combien ça coûte ici ?'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "Wie viel kostet das?",
          "Welche Sprache sprechen Sie?",
          "Ich möchte Wasser",
          "Woher kommen Sie?"
        ],
        "correctOption": "Wie viel kostet das?"
      },
      {
        "id": "ex7-match-shopping",
        "type": "matching",
        "title": "Einkaufswortschatz",
        "prompt": "Ordne die französischen Wörter der deutschen Bedeutung zu.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "pairs": [
          {
            "left": "chemise",
            "right": "Hemd"
          },
          {
            "left": "robe",
            "right": "Kleid"
          },
          {
            "left": "couleur",
            "right": "Farbe"
          },
          {
            "left": "taille",
            "right": "Größe"
          }
        ]
      },
      {
        "id": "ex7-fill-price",
        "type": "fillBlank",
        "title": "Preis angeben",
        "prompt": "Ergänze: 'Das kostet zehn Euro.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "Cela ___ dix euros.",
        "correctAnswers": [
          "coûte"
        ]
      },
      {
        "id": "ex7-order-red-shirt",
        "type": "sentenceOrder",
        "title": "Wunsch mit Farbe",
        "prompt": "Baue den Satz: 'Ich möchte ein rotes Hemd.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "tokens": [
          ".",
          "chemise",
          "Je",
          "rouge",
          "une",
          "veux"
        ],
        "correctOrder": [
          "Je",
          "veux",
          "une",
          "chemise",
          "rouge",
          "."
        ],
        "translation": "Ich möchte ein rotes Hemd."
      },
      {
        "id": "ex7-mc-color",
        "type": "multipleChoice",
        "title": "Farbe erkennen",
        "prompt": "Welche Farbe ist 'noir'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "schwarz",
          "rot",
          "weiß",
          "zehn"
        ],
        "correctOption": "schwarz"
      },
      {
        "id": "ex7-fill-size",
        "type": "fillBlank",
        "title": "Größe nennen",
        "prompt": "Ergänze: 'Größe M, bitte.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "___ M, s'il vous plaît.",
        "correctAnswers": [
          "taille"
        ]
      },
      {
        "id": "ex7-free-shopping-note",
        "type": "freeResponse",
        "title": "Fortgeschritten: Einkauf notieren",
        "prompt": "Schreibe 5 bis 6 Sätze über einen Einkauf. Verwende Begrüßung, ein Kleidungsstück, eine Farbe, eine Preisfrage und einen Preis.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "Bonjour ! Je veux une chemise rouge. Combien cela coûte-t-il ? Cette chemise coûte dix euros. Taille M, s'il vous plaît. Merci."
        ]
      },
      {
        "id": "ex7-free-shop-dialog",
        "type": "freeResponse",
        "title": "Fortgeschritten: Laden-Dialog",
        "prompt": "Schreibe einen Dialog mit 8 Zeilen zwischen Kunde und Verkäuferin. Der Dialog soll Preisfrage, Farbe, Größe, Preis und eine höfliche Entscheidung enthalten.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "A : Bonjour ! Combien coûte cette chemise ?\nB : Cette chemise coûte dix euros.\nA : Je veux une chemise rouge.\nB : Oui, c'est rouge.\nA : Taille M, s'il vous plaît.\nB : Oui, taille M.\nA : Bien. Je veux cette chemise.\nB : Merci."
        ]
      }
    ]
  },
  {
    "id": "lesson-shopping-7a",
    "unitId": "shopping-7a",
    "title": "Lektion 7a: Erweiterter Wortschatz und Grammatik",
    "outcome": "Nach dieser Erweiterung kannst du mehr Farben und Kleidungsstücke nennen, eine Auswahl treffen und einfache Bezahlfragen im Laden verwenden.",
    "warmup": "Lektion 7 hat Preis, Farbe und Kleidung eingeführt. In 7a wird der Laden-Dialog realistischer: Hose, Bluse, Jacke, Tasche, Kasse, Geld, Karte, bar bezahlen und Sätze wie 'ich möchte es kaufen' oder 'kann ich bezahlen?'.",
    "focusLexemeIds": [
      "x-shopping-01-e-gjelber",
      "x-shopping-02-e-verdhe",
      "x-shopping-03-blu",
      "x-shopping-04-gri",
      "x-shopping-05-kafe",
      "x-shopping-06-roze",
      "x-shopping-07-portokalli",
      "x-shopping-08-pantallona",
      "x-shopping-09-bluze",
      "x-shopping-10-xhakete",
      "x-shopping-11-pallto",
      "x-shopping-12-fund",
      "x-shopping-13-corape",
      "x-shopping-14-cante",
      "x-shopping-15-kapele",
      "x-shopping-16-dyqan",
      "x-shopping-17-treg",
      "x-shopping-18-arke",
      "x-shopping-19-cmim",
      "x-shopping-20-para",
      "x-shopping-21-karte",
      "x-shopping-22-me-para-ne-dore",
      "x-shopping-23-shtrenjte",
      "x-shopping-24-lire",
      "x-shopping-25-i-ri",
      "x-shopping-26-e-re",
      "x-shopping-27-i-bukur",
      "x-shopping-28-e-bukur",
      "x-shopping-29-kete",
      "x-shopping-30-ate",
      "x-shopping-31-dua-ta-blej",
      "x-shopping-32-mund-te-paguaj",
      "x-shopping-33-paguan",
      "x-shopping-34-provoj"
    ],
    "dialogue": [
      {
        "speaker": "Ben",
        "french": "Bonjour ! Je veux cette veste bleue.",
        "german": "Guten Tag! Ich möchte diese blaue Jacke."
      },
      {
        "speaker": "La vendeuse",
        "french": "Cette veste est jolie, mais elle est chère.",
        "german": "Diese Jacke ist schön, aber sie ist teuer."
      },
      {
        "speaker": "Ben",
        "french": "Oui, mais je veux l'acheter. Puis-je payer par carte ?",
        "german": "Ja, aber ich möchte sie kaufen. Kann ich mit Karte bezahlen?"
      },
      {
        "speaker": "La vendeuse",
        "french": "Oui, à la caisse. Vous pouvez payer par carte ou en espèces.",
        "german": "Ja, an der Kasse. Sie können mit Karte oder bar bezahlen."
      },
      {
        "speaker": "Ben",
        "french": "Merci. Je prends aussi ce sac vert.",
        "german": "Danke. Ich nehme auch diese grüne Tasche."
      }
    ],
    "grammarNotes": [
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "a7a-color-blue",
            "french": "veste bleue",
            "german": "blaue Jacke",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a7a-color-green",
            "french": "sac vert",
            "german": "grüne Tasche",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a7a-color-red",
            "french": "chemise rouge",
            "german": "rotes Hemd",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      },
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "a7a-this",
            "french": "Je veux cette veste.",
            "german": "Ich möchte diese Jacke.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a7a-buy",
            "french": "Je veux l'acheter.",
            "german": "Ich möchte es kaufen.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "a7a-pay",
            "french": "Puis-je payer par carte ?",
            "german": "Kann ich mit Karte bezahlen?",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "ex7a-match-clothes",
        "type": "matching",
        "title": "Mehr Kleidung",
        "prompt": "Ordne die französischen Wörter der deutschen Bedeutung zu.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "pairs": [
          {
            "left": "Pantalon",
            "right": "Hose"
          },
          {
            "left": "veste",
            "right": "Jacke"
          },
          {
            "left": "sac",
            "right": "Tasche"
          },
          {
            "left": "Chapeau/casquette",
            "right": "Hut / Mütze"
          }
        ]
      },
      {
        "id": "ex7a-mc-green",
        "type": "multipleChoice",
        "title": "Farbe erkennen",
        "prompt": "Welche Farbe ist 'vert'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "grün",
          "gelb",
          "grau",
          "rosa"
        ],
        "correctOption": "grün"
      },
      {
        "id": "ex7a-fill-this",
        "type": "fillBlank",
        "title": "Diese Jacke",
        "prompt": "Ergänze: 'Ich möchte diese Jacke.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "Je ___ cette veste.",
        "correctAnswers": [
          "veux"
        ]
      },
      {
        "id": "ex7a-order-pay-card",
        "type": "sentenceOrder",
        "title": "Bezahlfrage bauen",
        "prompt": "Baue den Satz: 'Kann ich mit Karte bezahlen?'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "tokens": [
          "?",
          "carte",
          "par",
          "payer",
          "Puis-je"
        ],
        "correctOrder": [
          "Puis-je",
          "payer",
          "par",
          "carte",
          "?"
        ],
        "translation": "Kann ich mit Karte bezahlen?"
      },
      {
        "id": "ex7a-fill-buy",
        "type": "fillBlank",
        "title": "Kaufen wollen",
        "prompt": "Ergänze: 'Ich möchte es kaufen.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "Je ___ l'acheter.",
        "correctAnswers": [
          "veux"
        ]
      },
      {
        "id": "ex7a-mc-cash",
        "type": "multipleChoice",
        "title": "Zahlungsart verstehen",
        "prompt": "Was bedeutet 'en espèces / avec de l'argent'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "bar / mit Bargeld",
          "mit Karte",
          "an der Kasse",
          "teuer"
        ],
        "correctOption": "bar / mit Bargeld"
      },
      {
        "id": "ex7a-free-shop-expanded",
        "type": "freeResponse",
        "title": "Erweiterter Laden-Dialog",
        "prompt": "Schreibe 7 bis 8 Dialogzeilen im Laden. Verwende zwei Kleidungsstücke, zwei Farben, eine Preis- oder Bewertungsangabe wie cher / pas cher / bon marché und eine Bezahlfrage.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "A : Bonjour ! Je veux cette veste bleue.\nB : Cette veste est jolie, mais chère.\nA : Je veux l'acheter.\nB : À la caisse, s’il vous plaît.\nA : Puis-je payer par carte ?\nB : Oui, par carte ou en espèces.\nA : Je prends aussi ce sac vert.\nB : Merci."
        ]
      }
    ]
  },
  {
    "id": "lesson-home-8",
    "unitId": "home",
    "title": "Lektion 8: Wohnen, Zimmer und Dinge",
    "outcome": "Nach dieser Lektion kannst du deine Wohnung sehr einfach beschreiben, Zimmer und Gegenstände nennen und sagen, wo etwas steht.",
    "warmup": "Diese Lektion macht aus Einzelwörtern kleine Beschreibungen. Du kennst schon 'est' und 'il y a'; jetzt nutzt du sie für Räume, Möbel und Ortsangaben wie ici, là, sur und près de.",
    "focusLexemeIds": [
      "shtepia",
      "apartamenti",
      "dhoma",
      "kuzhina",
      "banja",
      "dhoma-gjumit",
      "tavolina",
      "karrigia",
      "dera",
      "dritarja",
      "shtrati",
      "ketu",
      "atje",
      "mbi",
      "prane",
      "ka",
      "eshte",
      "nje"
    ],
    "dialogue": [
      {
        "speaker": "Léa",
        "french": "Où habites-tu maintenant ?",
        "german": "Wo wohnen Sie jetzt?"
      },
      {
        "speaker": "Ben",
        "french": "Je vis dans un petit appartement.",
        "german": "Ich wohne in einer kleinen Wohnung."
      },
      {
        "speaker": "Léa",
        "french": "Qu'est-ce qu'il y a dans l'appartement ?",
        "german": "Was hat die Wohnung?"
      },
      {
        "speaker": "Ben",
        "french": "L'appartement dispose d'une cuisine, d'une salle de bain et d'une chambre.",
        "german": "Die Wohnung hat eine Küche, ein Bad und ein Schlafzimmer."
      },
      {
        "speaker": "Léa",
        "french": "Où est la table ?",
        "german": "Wo ist der Tisch?"
      },
      {
        "speaker": "Ben",
        "french": "La table est près de la fenêtre. La chaise est ici.",
        "german": "Der Tisch ist nahe am Fenster. Der Stuhl ist hier."
      }
    ],
    "grammarNotes": [
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "note-home-ka-kitchen",
            "french": "L'appartement dispose d'une cuisine.",
            "german": "Die Wohnung hat eine Küche.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-home-ka-room",
            "french": "Il y a une table ici.",
            "german": "Hier gibt es einen Tisch.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      },
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "note-home-prane",
            "french": "La table est près de la fenêtre.",
            "german": "Der Tisch ist nahe am Fenster.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-home-mbi",
            "french": "Le téléphone est sur la table.",
            "german": "Das Telefon ist auf dem Tisch.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "ex8-match-rooms",
        "type": "matching",
        "title": "Räume und Wohnung",
        "prompt": "Ordne die französischen Wörter der deutschen Bedeutung zu.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "pairs": [
          {
            "left": "l'appartement",
            "right": "Wohnung"
          },
          {
            "left": "la cuisine",
            "right": "Küche"
          },
          {
            "left": "la salle de bain",
            "right": "Bad"
          },
          {
            "left": "la chambre",
            "right": "Schlafzimmer"
          }
        ]
      },
      {
        "id": "ex8-mc-ka",
        "type": "multipleChoice",
        "title": "Beschreibung verstehen",
        "prompt": "Was bedeutet 'L'appartement a une cuisine'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "Die Wohnung hat eine Küche",
          "Die Küche ist hier",
          "Ich wohne in Berlin",
          "Der Termin ist morgen"
        ],
        "correctOption": "Die Wohnung hat eine Küche"
      },
      {
        "id": "ex8-fill-ka",
        "type": "fillBlank",
        "title": "Es gibt / hat",
        "prompt": "Ergänze: 'Die Wohnung hat ein Bad.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "L'appartement ___ d'une salle de bain.",
        "correctAnswers": [
          "dispose"
        ]
      },
      {
        "id": "ex8-order-table-window",
        "type": "sentenceOrder",
        "title": "Ort im Zimmer",
        "prompt": "Baue den Satz: 'Der Tisch ist nahe am Fenster.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "tokens": [
          ".",
          "de",
          "est",
          "fenêtre",
          "la",
          "La",
          "près",
          "table"
        ],
        "correctOrder": [
          "La",
          "table",
          "est",
          "près",
          "de",
          "la",
          "fenêtre",
          "."
        ],
        "translation": "Der Tisch ist nahe am Fenster."
      },
      {
        "id": "ex8-fill-location",
        "type": "fillBlank",
        "title": "Hier sagen",
        "prompt": "Ergänze: 'Der Stuhl ist hier.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "La chaise est ___.",
        "correctAnswers": [
          "ici"
        ]
      },
      {
        "id": "ex8-mc-window",
        "type": "multipleChoice",
        "title": "Gegenstand erkennen",
        "prompt": "Was bedeutet 'la fenêtre'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "Fenster",
          "Tür",
          "Stuhl",
          "Bad"
        ],
        "correctOption": "Fenster"
      },
      {
        "id": "ex8-free-home-description",
        "type": "freeResponse",
        "title": "Fortgeschritten: Wohnung beschreiben",
        "prompt": "Schreibe 6 bis 7 Sätze über eine kleine Wohnung. Verwende mindestens drei Räume oder Dinge, il y a, il/elle est und mindestens zwei Ortswörter aus dieser Lektion.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "Je vis dans un petit appartement. L'appartement dispose d'une cuisine, d'une salle de bain et d'une chambre. La table est près de la fenêtre. La chaise est ici. Le lit est là. Le téléphone est sur la table."
        ]
      },
      {
        "id": "ex8-free-room-dialog",
        "type": "freeResponse",
        "title": "Fortgeschritten: Wohnungsdialog",
        "prompt": "Schreibe einen Dialog mit 8 Zeilen. Eine Person fragt nach Wohnort, Zimmern und der Position von zwei Dingen; die andere antwortet einfach.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "A : Où habites-tu maintenant ?\nB : Je vis dans un appartement.\nA : Qu’est-ce qu’il y a dans l’appartement ?\nB : Il y a une cuisine, une salle de bain et une chambre.\nA : Où est la table ?\nB : La table est près de la fenêtre.\nA : Où est la chaise ?\nB : La chaise est ici."
        ]
      }
    ]
  },
  {
    "id": "lesson-places-9",
    "unitId": "places",
    "title": "Lektion 9: Orte, Weg und Verkehr",
    "outcome": "Nach dieser Lektion kannst du nach Orten in der Stadt fragen, einfache Richtungen verstehen und sagen, ob etwas nah oder weit weg ist.",
    "warmup": "Wegbeschreibungen wirken schnell groß. Für A1 brauchst du aber nur wenige robuste Bausteine: où est, près/loin, allez tout droit, tournez à gauche oder à droite.",
    "focusLexemeIds": [
      "qyteti",
      "rruga",
      "sheshi",
      "hoteli",
      "stacioni",
      "autobusi",
      "taksia",
      "banka",
      "farmacia",
      "dyqani",
      "majtas",
      "djathtas",
      "drejt",
      "afer",
      "larg",
      "shkoni",
      "kthehuni",
      "ku",
      "eshte",
      "me"
    ],
    "dialogue": [
      {
        "speaker": "Ben",
        "french": "Excusez-moi, où est l'arrêt ?",
        "german": "Entschuldigung, wo ist die Haltestelle?"
      },
      {
        "speaker": "Léa",
        "french": "L'arrêt est proche de l'hôtel.",
        "german": "Die Haltestelle ist nahe beim Hotel."
      },
      {
        "speaker": "Ben",
        "french": "Comment puis-je y arriver ?",
        "german": "Wie komme ich dorthin?"
      },
      {
        "speaker": "Léa",
        "french": "Allez tout droit et tournez à droite.",
        "german": "Gehen Sie geradeaus und biegen Sie rechts ab."
      },
      {
        "speaker": "Ben",
        "french": "Est-ce loin ?",
        "german": "Ist es weit weg?"
      },
      {
        "speaker": "Léa",
        "french": "Non, ce n'est pas loin. Vous pouvez y aller en bus.",
        "german": "Nein, es ist nicht weit weg. Sie können mit dem Bus fahren."
      }
    ],
    "grammarNotes": [
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "note-place-station",
            "french": "Où est l'arrêt ?",
            "german": "Wo ist die Haltestelle?",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-place-pharmacy",
            "french": "Où est la pharmacie ?",
            "german": "Wo ist die Apotheke?",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      },
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "note-place-straight-left",
            "french": "Allez tout droit et tournez à gauche.",
            "german": "Gehen Sie geradeaus und biegen Sie links ab.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-place-bus",
            "french": "Vous pouvez y aller en bus.",
            "german": "Sie können mit dem Bus fahren.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "ex9-match-places",
        "type": "matching",
        "title": "Orte in der Stadt",
        "prompt": "Ordne die französischen Wörter der deutschen Bedeutung zu.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "pairs": [
          {
            "left": "la gare/l'arrêt",
            "right": "Haltestelle / Bahnhof"
          },
          {
            "left": "l'hôtel",
            "right": "Hotel"
          },
          {
            "left": "la pharmacie",
            "right": "Apotheke"
          },
          {
            "left": "le magasin",
            "right": "Laden"
          }
        ]
      },
      {
        "id": "ex9-mc-station",
        "type": "multipleChoice",
        "title": "Ortsfrage verstehen",
        "prompt": "Was bedeutet 'Où est l'arrêt ?'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "Wo ist die Haltestelle?",
          "Wie viel kostet die Haltestelle?",
          "Ich wohne nahe am Hotel",
          "Gehen Sie links"
        ],
        "correctOption": "Wo ist die Haltestelle?"
      },
      {
        "id": "ex9-fill-direction",
        "type": "fillBlank",
        "title": "Geradeaus",
        "prompt": "Ergänze: 'Gehen Sie geradeaus.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "Allez tout ___.",
        "correctAnswers": [
          "droit"
        ]
      },
      {
        "id": "ex9-order-left",
        "type": "sentenceOrder",
        "title": "Wegbeschreibung bauen",
        "prompt": "Baue den Satz: 'Gehen Sie geradeaus und biegen Sie links ab.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "tokens": [
          ".",
          "à",
          "Allez",
          "droit",
          "et",
          "gauche",
          "tournez",
          "tout"
        ],
        "correctOrder": [
          "Allez",
          "tout",
          "droit",
          "et",
          "tournez",
          "à",
          "gauche",
          "."
        ],
        "translation": "Gehen Sie geradeaus und biegen Sie links ab."
      },
      {
        "id": "ex9-fill-near",
        "type": "fillBlank",
        "title": "Nah oder weit?",
        "prompt": "Ergänze: 'Die Haltestelle ist nah.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "L'___ est à proximité.",
        "correctAnswers": [
          "arrêt"
        ]
      },
      {
        "id": "ex9-mc-transport",
        "type": "multipleChoice",
        "title": "Verkehrsmittel",
        "prompt": "Welche Übersetzung passt zu 'en bus'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "mit dem Bus",
          "mit dem Taxi",
          "in der Straße",
          "nahe am Hotel"
        ],
        "correctOption": "mit dem Bus"
      },
      {
        "id": "ex9-free-directions",
        "type": "freeResponse",
        "title": "Fortgeschritten: Wegbeschreibung",
        "prompt": "Schreibe 6 bis 7 Sätze für eine einfache Wegbeschreibung. Verwende Entschuldigung, eine Frage mit 'où est', einen Ort, près oder loin, und mindestens zwei Richtungen.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "Excusez-moi, où est la gare ? La gare est à proximité de l'hôtel. Ce n'est pas loin. Allez tout droit. Tournez ensuite à droite. Vous pouvez y aller en bus."
        ]
      },
      {
        "id": "ex9-free-city-dialog",
        "type": "freeResponse",
        "title": "Fortgeschritten: Stadt-Dialog",
        "prompt": "Schreibe einen Dialog mit 8 Zeilen. Eine Person sucht Hotel, Apotheke oder Haltestelle; die andere erklärt den Weg und nennt ein Verkehrsmittel.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "A : Excusez-moi, où est la pharmacie ?\nB : La pharmacie est près de la place.\nA : Est-ce loin ?\nB : Non, ce n'est pas loin.\nA : Comment puis-je y arriver ?\nB : Allez tout droit et tournez à gauche.\nA : Puis-je y aller en bus ?\nB : Oui, vous pouvez y aller en bus."
        ]
      }
    ]
  },
  {
    "id": "lesson-daily-life-10",
    "unitId": "daily-life",
    "title": "Lektion 10: Alltag, Bedürfnisse und Bitten",
    "outcome": "Nach dieser Lektion kannst du sehr einfache Tagesabläufe beschreiben, kleine Probleme nennen und höflich um Hilfe bitten.",
    "warmup": "Die letzte A1-Seite bündelt den Kurs: Uhrzeiten, Essen, Wege, Einkaufen und Wohnen werden zu kleinen Alltagstexten. Neu sind einfache Alltagsverben und Bitte-Sätze mit pouvoir und devoir.",
    "focusLexemeIds": [
      "zgjohem",
      "punoj",
      "studioj",
      "lexoj",
      "shkoj",
      "vij",
      "ha",
      "pi",
      "blej",
      "duhet",
      "mund",
      "dua",
      "kam",
      "tani",
      "me-vone",
      "mengjes",
      "mbremje",
      "problem",
      "ndihme",
      "telefon",
      "uje",
      "buke",
      "stacioni"
    ],
    "dialogue": [
      {
        "speaker": "Léa",
        "french": "Que fais-tu le matin ?",
        "german": "Was machen Sie am Morgen?"
      },
      {
        "speaker": "Ben",
        "french": "Je me lève à sept heures. Je bois du café et mange du pain.",
        "german": "Ich stehe um sieben Uhr auf. Ich trinke Kaffee und esse Brot."
      },
      {
        "speaker": "Léa",
        "french": "Et ensuite ?",
        "german": "Danach?"
      },
      {
        "speaker": "Ben",
        "french": "Je vais au travail en bus. Le soir, j'apprends le français.",
        "german": "Ich gehe mit dem Bus zur Arbeit. Am Abend lerne ich Französisch."
      },
      {
        "speaker": "Ben",
        "french": "J'ai un problème. Le téléphone ne fonctionne pas.",
        "german": "Ich habe ein Problem. Das Telefon funktioniert nicht."
      },
      {
        "speaker": "Léa",
        "french": "Pouvez-vous m'aider?",
        "german": "Können Sie mir helfen?"
      }
    ],
    "grammarNotes": [
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "note-daily-morning",
            "french": "Je me lève à sept heures.",
            "german": "Ich stehe um sieben Uhr auf.",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-daily-evening",
            "french": "Le soir, j'apprends le français.",
            "german": "Am Abend lerne ich Französisch.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      },
      {
        "title": "Französisches A1-Satzmuster",
        "body": "Achte auf die französische Wortstellung und die feste Formulierung. Die Beispiele zeigen eine gebräuchliche A1-Struktur mit deutscher Bedeutung.",
        "examples": [
          {
            "id": "note-daily-help",
            "french": "Pouvez-vous m'aider?",
            "german": "Können Sie mir helfen?",
            "pattern": "französisches A1-Satzmuster"
          },
          {
            "id": "note-daily-need",
            "french": "Je dois partir maintenant.",
            "german": "Ich muss jetzt gehen.",
            "pattern": "französisches A1-Satzmuster"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "ex10-match-daily-verbs",
        "type": "matching",
        "title": "Alltagsverben sichern",
        "prompt": "Ordne die französischen Wörter der deutschen Bedeutung zu.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "pairs": [
          {
            "left": "je me lève/je me réveille",
            "right": "ich stehe auf"
          },
          {
            "left": "je travaille",
            "right": "ich arbeite"
          },
          {
            "left": "J'apprends/étudie",
            "right": "ich lerne / studiere"
          },
          {
            "left": "je lis",
            "right": "ich lese"
          }
        ]
      },
      {
        "id": "ex10-mc-help",
        "type": "multipleChoice",
        "title": "Bitte verstehen",
        "prompt": "Was bedeutet 'Pouvez-vous m'aider?'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "Können Sie mir helfen?",
          "Ich muss jetzt gehen",
          "Wo ist die Haltestelle?",
          "Ich möchte Kaffee"
        ],
        "correctOption": "Können Sie mir helfen?"
      },
      {
        "id": "ex10-fill-morning",
        "type": "fillBlank",
        "title": "Uhrzeit im Alltag",
        "prompt": "Ergänze: 'Ich stehe um sieben Uhr auf.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "Je me lève à ___ heures.",
        "correctAnswers": [
          "sept"
        ]
      },
      {
        "id": "ex10-order-evening",
        "type": "sentenceOrder",
        "title": "Abends lernen",
        "prompt": "Baue den Satz: 'Am Abend lerne ich Französisch.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "tokens": [
          ",",
          ".",
          "j'apprends",
          "le français",
          "Le",
          "soir"
        ],
        "correctOrder": [
          "Le",
          "soir",
          ",",
          "j'apprends",
          "le français",
          "."
        ],
        "translation": "Am Abend lerne ich Französisch."
      },
      {
        "id": "ex10-fill-problem",
        "type": "fillBlank",
        "title": "Problem nennen",
        "prompt": "Ergänze: 'Ich habe ein Problem.'",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "template": "J'ai un ___.",
        "correctAnswers": [
          "problème"
        ]
      },
      {
        "id": "ex10-mc-must",
        "type": "multipleChoice",
        "title": "Müssen ausdrücken",
        "prompt": "Was bedeutet 'Je dois partir maintenant'?",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "options": [
          "Ich muss jetzt gehen",
          "Ich kann später kommen",
          "Ich kaufe Brot",
          "Ich wohne in einer Wohnung"
        ],
        "correctOption": "Ich muss jetzt gehen"
      },
      {
        "id": "ex10-free-daily-routine",
        "type": "freeResponse",
        "title": "Fortgeschritten: Tagesablauf schreiben",
        "prompt": "Schreibe 8 Sätze über einen einfachen Tag. Verwende eine Uhrzeit, Essen oder Trinken, ein Verkehrsmittel, Arbeit oder Lernen, und mindestens eine Bitte oder ein Problem.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "Je me réveille à sept heures. Je bois du café et mange du pain. Je vais au travail en bus. Le soir, j'étudie le français. J'achète de l'eau au magasin. J'ai un problème. Le téléphone ne fonctionne pas. Pouvez-vous m'aider?"
        ]
      },
      {
        "id": "ex10-free-final-dialog",
        "type": "freeResponse",
        "title": "Fortgeschritten: Abschlussdialog",
        "prompt": "Schreibe einen Dialog mit 10 Zeilen. Er soll Vorstellung, Tagesablauf, Weg oder Einkauf, ein Problem und eine höfliche Bitte enthalten. Nutze nur A1-Sätze aus dem Kurs.",
        "explanation": "Übe die französische A1-Formulierung und vergleiche sie mit der deutschen Bedeutung.",
        "modelAnswers": [
          "A : Bonjour ! Comment vous appelez-vous ?\nB : Je m'appelle Ben.\nA : D’où viens-tu ?\nB : Je viens d’Allemagne et j’habite à Berlin.\nA : Que fais-tu le matin ?\nB : Je me réveille à sept heures et je bois du café.\nA : Où vas-tu alors ?\nB : Je vais au travail en bus.\nA : Avez-vous un problème ?\nB : Oui, le téléphone ne fonctionne pas. Pouvez-vous m'aider?"
        ]
      }
    ]
  }
];
