// Traduzioni dettagliate dei messaggi di stato HTTP in italiano

export const ItalianStatusMessages = {
  // --- 1xx: Informativo ---
  100: 'Continua. Richiesta ricevuta, continua a inviare il resto.',
  101: 'Cambio di protocollo. Cambio avviato come richiesto dal client.',
  102: 'Elaborazione in corso. Richiesta accettata, elaborazione in corso.',
  103: 'Suggerimenti anticipati. Intestazioni preliminari inviate prima della risposta finale.',

  // --- 2xx: Successo ---
  200: 'OK. La richiesta è andata a buon fine e la risposta contiene il risultato.',
  201: 'Creato. È stata creata una nuova risorsa.',
  202: 'Accettato. Richiesta ricevuta ma non ancora elaborata.',
  203: 'Informazioni non autorevoli. Metadati provenienti da fonti esterne.',
  204: 'Nessun contenuto. Richiesta riuscita, ma nessun contenuto da restituire.',
  205: 'Reset contenuto. Il client deve resettare la visualizzazione del documento.',
  206: 'Contenuto parziale. Solo una parte della risorsa viene restituita.',
  207: 'Multi-stato. Contiene stati multipli (WebDAV).',
  208: 'Già segnalato. Elementi già segnalati in una risposta precedente.',
  226: 'IM utilizzato. Risposta basata su manipolazioni di istanza.',

  // --- 3xx: Reindirizzamento ---
  300: 'Scelte multiple. Diverse opzioni disponibili per la risorsa richiesta.',
  301: 'Spostato permanentemente. La risorsa è stata spostata definitivamente.',
  302: 'Trovato. La risorsa è temporaneamente disponibile altrove.',
  303: 'Vedi altro. Reindirizza il client con metodo GET.',
  304: 'Non modificato. La risorsa non è cambiata dall’ultima richiesta.',
  305: 'Usa proxy. Accesso tramite proxy specificato richiesto.',
  307: 'Reindirizzamento temporaneo. URI diverso temporaneo con stesso metodo.',
  308: 'Reindirizzamento permanente. URI diverso permanente con stesso metodo.',

  // --- 4xx: Errori client ---
  400: 'Richiesta errata. Sintassi non valida.',
  401: 'Non autorizzato. Autenticazione richiesta.',
  402: 'Pagamento richiesto. Accesso che richiede pagamento.',
  403: 'Vietato. Accesso negato nonostante autenticazione.',
  404: 'Non trovato. La risorsa non esiste.',
  405: 'Metodo non consentito. Metodo riconosciuto ma non supportato.',
  406: 'Non accettabile. Formato non supportato.',
  407: 'Autenticazione proxy richiesta.',
  408: 'Timeout richiesta. Server ha atteso troppo a lungo.',
  409: 'Conflitto. Conflitto con lo stato corrente della risorsa.',
  410: 'Scomparso. La risorsa è stata rimossa definitivamente.',
  411: 'Lunghezza contenuto non specificata.',
  412: 'Precondizione fallita.',
  413: 'Payload troppo grande.',
  414: 'URI troppo lungo.',
  415: 'Tipo di media non supportato.',
  416: 'Intervallo non soddisfacente.',
  417: 'Aspettativa fallita.',
  418: 'Sono una teiera.',
  421: 'Richiesta mal indirizzata.',
  422: 'Entità non elaborabile. Errore semantico.',
  423: 'Bloccato. Risorsa bloccata.',
  424: 'Dipendenza fallita.',
  425: 'Troppo presto. Richiesta potrebbe essere ripetuta.',
  426: 'Aggiornamento richiesto. Cambiare protocollo.',
  428: 'Condizione richiesta.',
  429: 'Troppi richieste.',
  431: 'Campi header troppo grandi.',
  451: 'Non disponibile per motivi legali.',

  // --- 5xx: Errori server ---
  500: 'Errore interno del server. Errore imprevisto.',
  501: 'Non implementato. Funzionalità non supportata.',
  502: 'Gateway errato. Risposta non valida dal server upstream.',
  503: 'Servizio non disponibile. Sovraccarico o manutenzione.',
  504: 'Timeout gateway.',
  505: 'Versione HTTP non supportata.',
  506: 'Variante negozia anche. Errore di configurazione.',
  507: 'Spazio insufficiente.',
  508: 'Loop rilevato.',
  510: 'Estensione richiesta.',
  511: 'Autenticazione rete richiesta.',

  // --- Non ufficiali ---
  419: 'Pagina scaduta. Token CSRF mancante o non valido.',
  420: 'Fallimento metodo. Limite richieste superato.',
  450: 'Bloccato dal controllo parentale di Windows.',
  498: 'Token non valido o scaduto.',
  509: 'Limite di banda superato.',
  530: 'Sito congelato. Inattività o azione amministrativa.',
  598: 'Timeout lettura rete.',
  599: 'Timeout connessione rete.',

  // --- NGINX ---
  444: 'Nessuna risposta. Connessione chiusa immediatamente.',
  494: 'Header richiesta troppo grande.',
  495: 'Errore certificato SSL.',
  496: 'Certificato SSL richiesto.',
  497: 'Richiesta HTTP inviata alla porta HTTPS.',
  499: 'Richiesta chiusa dal client.',

  // --- Cloudflare ---
  520: 'Errore sconosciuto dal server originario.',
  521: 'Server web non disponibile.',
  522: 'Timeout connessione.',
  523: 'Server originario irraggiungibile.',
  524: 'Timeout scaduto.',
  525: 'Handshake SSL fallito.',
  526: 'Certificato SSL non valido.',
  527: 'Errore Railgun.',
} as const;

export type ItalianStatusMessage =
  (typeof ItalianStatusMessages)[keyof typeof ItalianStatusMessages];
