/*
 * Einfacher Passwortschutz für die Vorschau-Phase (Cloudflare Pages Function).
 * HTTP Basic Auth: Der Browser fragt Benutzername/Passwort ab, bevor
 * irgendeine Seite oder Datei ausgeliefert wird.
 *
 * Zugangsdaten ändern: einfach die beiden Konstanten anpassen und committen.
 * Schutz entfernen (Livegang): diese Datei löschen.
 */
const BENUTZER = 'lithothek';
const PASSWORT = 'Micromount2026';

export async function onRequest(context) {
  const auth = context.request.headers.get('Authorization') || '';
  const erwartet = 'Basic ' + btoa(`${BENUTZER}:${PASSWORT}`);

  if (auth === erwartet) {
    return context.next();
  }

  return new Response('Diese Vorschau ist passwortgeschützt.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Lithothek Vorschau", charset="UTF-8"',
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}
