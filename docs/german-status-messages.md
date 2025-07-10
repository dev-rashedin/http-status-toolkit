# 📘 German HTTP Status Messages

This document provides **German translations** of HTTP status code messages, including official, unofficial, and vendor-specific codes—offered by the [`http-status-toolkit`](https://www.npmjs.com/package/http-status-toolkit) package.

Each entry includes:

- The status code
- Its corresponding German message

---

## ✅ 1xx — Informationell (Informational)

| Code | Message |
|------|---------|
| 100 | Weiter. Anfrage erhalten, sende den Rest fort. |
| 101 | Protokollwechsel. Protokollwechsel eingeleitet wie vom Client angefordert. |
| 102 | Verarbeitung läuft. Anfrage akzeptiert, wird verarbeitet. |
| 103 | Frühe Hinweise. Vorläufige Header vor der endgültigen Antwort gesendet. |

---

## 🟩 2xx — Erfolgreich (Successful)

| Code | Message |
|------|---------|
| 200 | OK. Die Anfrage war erfolgreich und das Ergebnis ist enthalten. |
| 201 | Erstellt. Eine neue Ressource wurde erfolgreich erstellt. |
| 202 | Akzeptiert. Die Anfrage wurde erhalten, aber noch nicht verarbeitet. |
| 203 | Nicht autorisierte Information. Metadaten aus externer Quelle. |
| 204 | Kein Inhalt. Erfolgreiche Anfrage, aber kein Inhalt zum Zurücksenden. |
| 205 | Inhalt zurücksetzen. Dokumentansicht zurücksetzen. |
| 206 | Teilinhalt. Nur ein Teil der Ressource wurde gesendet. |
| 207 | Mehrere Status. Enthält Status mehrerer Operationen (WebDAV). |
| 208 | Bereits gemeldet. Elemente bereits in vorheriger Antwort enthalten. |
| 226 | IM verwendet. Antwort basiert auf Instanz-Manipulationen. |

---

## 🟨 3xx — Umleitung (Redirection)

| Code | Message |
|------|---------|
| 300 | Mehrere Auswahlmöglichkeiten. Mehrere Optionen für die Ressource verfügbar. |
| 301 | Dauerhaft verschoben. Die Ressource wurde dauerhaft verschoben. |
| 302 | Gefunden. Vorübergehend an anderer URL verfügbar. |
| 303 | Siehe andere. Umleitung zu anderer URL mit GET. |
| 304 | Nicht geändert. Ressource wurde nicht geändert. |
| 305 | Proxy verwenden. Zugriff muss über angegebenen Proxy erfolgen. |
| 307 | Vorübergehende Umleitung. Gleiche Methode, andere URI. |
| 308 | Permanente Umleitung. Gleiche Methode, andere URI dauerhaft. |

---

## 🟥 4xx — Clientfehler (Client Errors)

| Code | Message |
|------|---------|
| 400 | Fehlerhafte Anfrage. Ungültige Syntax. |
| 401 | Nicht autorisiert. Authentifizierung erforderlich. |
| 402 | Zahlung erforderlich. Zugriff nur mit Zahlung. |
| 403 | Verboten. Zugriff trotz Authentifizierung verweigert. |
| 404 | Nicht gefunden. Die Ressource existiert nicht. |
| 405 | Methode nicht erlaubt. Methode wird nicht unterstützt. |
| 406 | Nicht akzeptabel. Kein akzeptables Format verfügbar. |
| 407 | Proxy-Authentifizierung erforderlich. |
| 408 | Zeitüberschreitung. Server hat zu lange gewartet. |
| 409 | Konflikt. Ressourcenkonflikt vorhanden. |
| 410 | Nicht mehr verfügbar. Ressource dauerhaft entfernt. |
| 411 | Content-Length nicht angegeben. |
| 412 | Vorbedingung fehlgeschlagen. |
| 413 | Nutzlast zu groß. |
| 414 | URI zu lang. |
| 415 | Medientyp nicht unterstützt. |
| 416 | Bereich nicht erfüllbar. |
| 417 | Erwartung fehlgeschlagen. |
| 418 | Ich bin eine Teekanne. |
| 421 | Fehlgeleitete Anfrage. |
| 422 | Unverarbeitbare Entität. Semantischer Fehler. |
| 423 | Gesperrt. Ressource ist gesperrt. |
| 424 | Abhängigkeit fehlgeschlagen. |
| 425 | Zu früh. Anfrage könnte wiederholt werden. |
| 426 | Upgrade erforderlich. Protokoll wechseln. |
| 428 | Voraussetzung erforderlich. |
| 429 | Zu viele Anfragen. |
| 431 | Headerfelder zu groß. |
| 451 | Nicht verfügbar aus rechtlichen Gründen. |

---

## 🛑 5xx — Serverfehler (Server Errors)

| Code | Message |
|------|---------|
| 500 | Interner Serverfehler. Unerwarteter Fehler. |
| 501 | Nicht implementiert. Funktion wird nicht unterstützt. |
| 502 | Fehlerhaftes Gateway. Ungültige Antwort von Upstream-Server. |
| 503 | Dienst nicht verfügbar. Überlastung oder Wartung. |
| 504 | Gateway-Zeitüberschreitung. |
| 505 | HTTP-Version nicht unterstützt. |
| 506 | Variante verhandelt auch. Konfigurationsfehler. |
| 507 | Unzureichender Speicher. |
| 508 | Schleife entdeckt. |
| 510 | Erweiterung erforderlich. |
| 511 | Netzwerkauthentifizierung erforderlich. |

---

## 🌀 Inoffiziell (Unofficial)

| Code | Message |
|------|---------|
| 419 | Seite abgelaufen. CSRF-Token fehlt oder ungültig. |
| 420 | Methodenfehler. Anfrage begrenzt. |
| 450 | Durch Jugendschutz gesperrt. |
| 498 | Ungültiges oder abgelaufenes Token. |
| 509 | Bandbreitenlimit überschritten. |
| 530 | Website eingefroren. Inaktivität oder administrative Maßnahme. |
| 598 | Netzwerk-Lese-Zeitüberschreitung. |
| 599 | Netzwerk-Verbindungs-Zeitüberschreitung. |

---

## ⚙️ NGINX-spezifisch

| Code | Message |
|------|---------|
| 444 | Keine Antwort. Verbindung sofort geschlossen. |
| 494 | Header zu groß. |
| 495 | SSL-Zertifikatsfehler. |
| 496 | SSL-Zertifikat erforderlich. |
| 497 | HTTP-Anfrage an HTTPS-Port. |
| 499 | Anfrage vom Client geschlossen. |

---

## ☁️ Cloudflare-spezifisch

| Code | Message |
|------|---------|
| 520 | Unbekannter Fehler vom Ursprung. |
| 521 | Webserver ist offline. |
| 522 | Verbindungstimeout. |
| 523 | Ursprungsserver nicht erreichbar. |
| 524 | Zeitüberschreitung beim Warten auf Antwort. |
| 525 | SSL-Handshake fehlgeschlagen. |
| 526 | Ungültiges SSL-Zertifikat. |
| 527 | Railgun-Fehler. |
