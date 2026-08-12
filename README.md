# Lithothek gGmbH – Website

Neue Website der Lithothek gGmbH, gebaut mit [Astro](https://astro.build)
und betrieben über [Cloudflare Pages](https://pages.cloudflare.com/).

Der inhaltliche Plan (Aufgaben & offene Fragen) liegt in Notion:
„Lithothek gGmbH – Website-Projekt". Die Redaktion der Texte läuft über die
Notion-Tabelle „Website-Texte zur Überarbeitung (für Matthias)".

## Design

Das Design folgt der **Corporate Identity v1.3**
(`Lithothek_Corporate_Identity_v1.3.docx`, liegt im lokalen Projektordner,
bewusst nicht im Repo). Verbindliche Referenz ist die umgesetzte Startseite:
Foto-Hero über volle Breite, Vollbreite-Bänder statt Boxen, dunkles
Kopfband auf allen Unterseiten (zentral in `src/layouts/BaseLayout.astro`).
Farben/Schriften kommen ausschließlich aus `src/styles/tokens.css`.

## Vorschau-Passwortschutz

Die Seite ist während der Aufbauphase per HTTP Basic Auth geschützt
(`functions/_middleware.js`, Cloudflare Pages Function).
Zugangsdaten stehen in der Datei; zum Livegang die Datei löschen.

## Struktur

- `src/pages/` – Seiten: Start, Über uns, Sammlung (Lithothek Online), Museum,
  Projekte, Sammler-Steckbriefe, News, Impressum, Datenschutz
- `src/content/` – Inhalte als Markdown über Astro Content Collections:
  `sammler/`, `news/`, `projekte/`, `objekte/` (Demo-Datenbank der Sammlung;
  Einträge mit `demo: true` sind Beispieldaten und werden auf der Website
  als solche gekennzeichnet)
- `src/layouts/BaseLayout.astro` – Grundgerüst inkl. Unterseiten-Kopfband
  (Props: `pageTitle`, `kicker`, `lead`) und automatischen Brotkrumen
- `src/components/` – Header, Footer, `brand/` (Wortmarke, Kristall-Linienmotiv)
- `src/styles/` – `tokens.css` (CI-Werte) und `global.css` (Layout)
- `public/bilder/` – frei lizenzierte Mineralfotos als Platzhalter
  (Wikimedia Commons, **Bildnachweis im Impressum**); werden durch eigene
  Sammlungsfotos ersetzt
- `functions/` – Cloudflare Pages Functions (derzeit nur Passwortschutz)
- `.github/workflows/` – CI-Check gegen verbotene Begriffe (u. a. „Geolitho")

Impressum und Datenschutz enthalten aktuell **Platzhaltertexte** – vor dem
Livegang mit den echten rechtlichen Angaben ersetzen. Die News-Beiträge
außer „Die neue Website entsteht" sowie alle Objekte der Demo-Datenbank
sind **Beispielinhalte** zur Layout-Abnahme.

## Lokal entwickeln

```bash
npm install
npm run dev       # Entwicklungsserver unter http://localhost:4321
npm run build     # Produktions-Build nach dist/
npm run preview   # Build lokal testen
```

## Status

- GitHub: [github.com/Erikemmer/lithothek-website](https://github.com/Erikemmer/lithothek-website)
- Cloudflare Pages: automatisches Deploy bei jedem Push auf `main`
- Live (passwortgeschützt): [lithothek-website.pages.dev](https://lithothek-website.pages.dev)

## Zusammenarbeit (mehrere Personen)

Jede Person arbeitet mit ihrer eigenen Claude/Cowork-Session auf einem eigenen,
lokal geklonten Ordner. Zusammenarbeit läuft über das gemeinsame GitHub-Repo.

**Einmalig einrichten (Repo-Owner):**

1. Kollegen als Collaborator einladen: **Settings → Collaborators and teams →
   Add people** ([direkter Link](https://github.com/Erikemmer/lithothek-website/settings/access)).
2. Branch-Schutz für `main`: **Settings → Branches → Add branch protection rule** →
   `main` → „Require a pull request before merging"
   ([direkter Link](https://github.com/Erikemmer/lithothek-website/settings/branches)).
3. Empfohlen: Repo auf **privat** stellen (Settings → unten „Change visibility"),
   solange das Vorschau-Passwort im Code steht.

**Workflow pro Änderung:**

```bash
git clone https://github.com/Erikemmer/lithothek-website.git
cd lithothek-website
git checkout -b meine-aenderung
# Änderungen machen, dann:
git add -A
git commit -m "Kurze Beschreibung der Änderung"
git push -u origin meine-aenderung
```

Danach auf GitHub einen **Pull Request** gegen `main` öffnen. Cloudflare Pages
baut automatisch eine **Vorschau-URL**; nach Merge geht die Änderung live.

## Offene Punkte

Siehe Notion („Lithothek gGmbH – Website-Projekt"), u. a.: echte Impressums-/
Datenschutzangaben, eigene Sammlungsfotos statt CC-Platzhalter, echte
Sammlungsdaten statt Demo-Objekte, Texte-Redaktion (Matthias), Domain,
Suche/Filter der Sammlungsansicht, Repo-Sichtbarkeit.
