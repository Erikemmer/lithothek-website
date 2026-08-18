# Offene Aufgaben & Rückfragen

Stand: 18.08.2026 · gepflegt aus dem Umsetzungs-Prompt (mit Erik abgestimmt).
Diese Punkte sind bewusst **nicht** umgesetzt, nur vorgemerkt.

## Offene Rückfragen an Erik (blockieren den Livegang von Impressum/Datenschutz)

1. **E-Mail-Adresse** der Die Lithothek gGmbH (Impressum, Datenschutzerklärung,
   Startseiten-Kontakt, Briefkopf der Word-Vorlagen)
2. **HRB-Nummer** (Registergericht: Amtsgericht München)
3. **Umsatzsteuer-Identifikationsnummer**
4. **Zuständiges Finanzamt + Datum des Freistellungsbescheids**
   (Impressum und Spendenquittung-Vorlage)
5. **Satzungsauszug** für die Über-uns-Seite („aus der Mail") — Text liegt nicht vor,
   TODO-Kommentar steht in `src/pages/ueber-uns.astro`
6. **Bestätigung:** Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV — aktuell
   Matthias Fieser als Geschäftsführer eingetragen (Tendenz aus dem Gespräch,
   noch nicht final bestätigt)

## Vorgemerkte Aufgaben (Entscheidung bzw. Spezifikation steht aus)

- **Mineralklassen-Systematik** für das Kategorien-Diagramm auf der Sammlungsseite
  wählen: Lapis (9 Klassen) vs. Strunz (10 Klassen). Danach das `kategorie`-Enum in
  `src/content.config.ts` und die Farbzuordnung in `src/pages/lithothek-online.astro`
  anpassen.
- **Kontaktaufnahme mit den Entwicklern der Lapis-Systematik** wegen Kooperation /
  Rechteübertragung.
- **Erfassungsmaske für Mitglieder**, um neue Mineralien selbst in der
  Sammlungsverwaltung zu erfassen (größeres Feature, noch nicht spezifiziert).
- **Lehrvideos / Sonderformate im Museumsbereich** — noch keine Inhalte/Skripte
  vorhanden. Das Museum soll perspektivisch als interaktive Ausstellung verstanden
  werden, in der auch aktive Beiträge und andere Medien Platz finden.
- **Museum als eigenständige zweite Sammlung** (Mittel- und Großstufen) innerhalb der
  Sammlungsverwaltung — braucht perspektivisch einen eigenen Einstiegspunkt dorthin
  (noch nicht spezifiziert, nur vormerken).
- **Word-Vorlagen** (`docs/vorlagen/`): gelbe Lücken ergänzen, sobald die Angaben
  vorliegen; vor der ersten Verwendung rechtlich/steuerlich prüfen lassen. Falls die
  Vorlagen später über die Website verlinkbar sein sollen: nach `public/downloads/`
  verschieben (vorher mit Erik klären).
