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

## Nächste Schritte: GitHub

1. Auf [github.com](https://github.com) ein neues, leeres Repository anlegen
   (z. B. `lithothek-website`), **ohne** README/Lizenz/.gitignore (die gibt es hier schon).
2. Im Projektordner:

   ```bash
   git remote add origin https://github.com/<dein-github-name>/lithothek-website.git
   git branch -M main
   git push -u origin main
   ```

## Nächste Schritte: Cloudflare Pages

1. Im [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** →
   **Create application** → **Pages** → **Connect to Git**.
2. Das eben erstellte GitHub-Repo auswählen und Zugriff autorisieren.
3. Build-Einstellungen:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. **Save and Deploy** – Cloudflare baut und deployt bei jedem Push auf `main` automatisch.
5. Optional: eigene Domain unter **Custom domains** verbinden.

## Offene inhaltliche Punkte

Siehe Notion-Datenbank „Lithothek gGmbH – Website Projektplan“, Spalte „Typ = Offene Frage“ –
u. a. CMS-Entscheidung, Budget/Zeitrahmen, Einwilligungen für Sammler-Steckbriefe, Corporate
Design, Spendenfunktion.
