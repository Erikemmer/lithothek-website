# Lithothek gGmbH – Website

Neue Website der Lithothek / Geolitho Stiftung gGmbH, gebaut mit [Astro](https://astro.build)
und gedacht für den Betrieb via [Cloudflare Pages](https://pages.cloudflare.com/).

Der inhaltliche Plan (Aufgaben & offene Fragen) liegt in Notion:
„Lithothek gGmbH – Website Projektplan“.

## Struktur

- `src/pages/` – Seiten: Start, Über uns, Virtuelle Sammlung, Virtuelles Museum, Projekte,
  Sammler-Steckbriefe, Neuigkeiten, Impressum, Datenschutz
- `src/content/` – Inhalte als Markdown (Sammler-Steckbriefe, News, Projekte) über Astro
  Content Collections
- `src/layouts/`, `src/components/` – gemeinsames Layout, Header/Footer
- `src/styles/global.css` – Basis-Styling (Platzhalter, kein finales Design)

Impressum und Datenschutz enthalten aktuell **Platzhaltertexte** – vor dem Livegang mit den
echten rechtlichen Angaben ersetzen (siehe offene Fragen in Notion).

## Lokal entwickeln

```bash
npm install
npm run dev       # Entwicklungsserver unter http://localhost:4321
npm run build     # Produktions-Build nach dist/
npm run preview   # Build lokal testen
```

## Status

- GitHub: [github.com/Erikemmer/lithothek-website](https://github.com/Erikemmer/lithothek-website)
- Cloudflare Pages: mit dem Repo verbunden, automatisches Deploy bei jedem Push auf `main`
- Live: [lithothek-website.pages.dev](https://lithothek-website.pages.dev)

## Zusammenarbeit (mehrere Personen)

Jede Person arbeitet mit ihrer eigenen Claude/Cowork-Session auf einem eigenen, lokal
geklonten Ordner. Es gibt keine geteilte Session – Zusammenarbeit läuft über das
gemeinsame GitHub-Repo.

**Einmalig einrichten (Repo-Owner):**

1. Kollegen als Collaborator einladen: Repo → **Settings → Collaborators and teams →
   Add people** ([direkter Link](https://github.com/Erikemmer/lithothek-website/settings/access)).
2. Branch-Schutz für `main` aktivieren, damit nichts versehentlich direkt live geht:
   **Settings → Branches → Add branch protection rule** → Branch name pattern `main` →
   „Require a pull request before merging" aktivieren
   ([direkter Link](https://github.com/Erikemmer/lithothek-website/settings/branches)).
3. Notion-Projektplan „Lithothek gGmbH – Website Projektplan" mit dem Kollegen teilen
   (Notion → Share → per E-Mail einladen).

**Workflow pro Änderung (jede Person):**

```bash
git clone https://github.com/Erikemmer/lithothek-website.git
cd lithothek-website
git checkout -b meine-aenderung
# Änderungen machen, dann:
git add -A
git commit -m "Kurze Beschreibung der Änderung"
git push -u origin meine-aenderung
```

Danach auf GitHub einen **Pull Request** gegen `main` öffnen. Cloudflare Pages baut dafür
automatisch eine **Vorschau-URL** (Preview Deployment) – die Änderung lässt sich also
ansehen, bevor sie live geht. Nach Review/Freigabe: **Merge** → automatischer Deploy nach
`lithothek-website.pages.dev`.

## Offene inhaltliche Punkte

Siehe Notion-Datenbank „Lithothek gGmbH – Website Projektplan“, Spalte „Typ = Offene Frage“ –
u. a. CMS-Entscheidung, Budget/Zeitrahmen, Einwilligungen für Sammler-Steckbriefe, Corporate
Design, Spendenfunktion.
