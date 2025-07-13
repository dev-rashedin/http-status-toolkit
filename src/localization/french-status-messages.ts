// French translations of detailed HTTP status messages

const FrenchStatusMessages = {
  // --- 1xx: Informational ---
  100: "Continuer. Requête reçue, continuer à envoyer le reste.",
  101: "Changement de protocoles. Changement initié comme demandé par le client.",
  102: "Traitement en cours. Requête acceptée, traitement en cours.",
  103: "Indices précoces. En-têtes préliminaires envoyés avant la réponse finale.",

  // --- 2xx: Success ---
  200: "OK. La requête a réussi et la réponse contient le résultat.",
  201: "Créé. Une nouvelle ressource a été créée avec succès.",
  202: "Accepté. La requête a été reçue mais pas encore traitée.",
  203: "Informations non autoritatives. Métadonnées issues d'une source externe.",
  204: "Pas de contenu. Requête réussie, mais pas de contenu à renvoyer.",
  205: "Réinitialiser le contenu. Le client doit réinitialiser la vue du document.",
  206: "Contenu partiel. Seule une partie de la ressource est renvoyée.",
  207: "Multi-Statut. Contient plusieurs statuts (WebDAV).",
  208: "Déjà rapporté. Éléments déjà signalés dans une réponse précédente.",
  226: "IM utilisé. Réponse basée sur des manipulations d'instance.",

  // --- 3xx: Redirection ---
  300: "Choix multiples. Plusieurs options disponibles pour la ressource demandée.",
  301: "Déplacé de façon permanente. La ressource a été déplacée définitivement.",
  302: "Trouvé. La ressource est temporairement disponible à une autre URL.",
  303: "Voir autre. Redirection vers une autre URL avec méthode GET.",
  304: "Non modifié. La ressource n'a pas changé depuis la dernière requête.",
  305: "Utiliser un proxy. L'accès doit se faire via le proxy spécifié.",
  307: "Redirection temporaire. Même méthode, URI différente temporaire.",
  308: "Redirection permanente. Même méthode, URI différente permanente.",

  // --- 4xx: Client Errors ---
  400: "Mauvaise requête. Syntaxe incorrecte.",
  401: "Non autorisé. Authentification requise.",
  402: "Paiement requis. Accès nécessitant un paiement.",
  403: "Interdit. Accès refusé malgré authentification.",
  404: "Non trouvé. La ressource n'existe pas.",
  405: "Méthode non autorisée. Méthode reconnue mais non supportée.",
  406: "Non acceptable. Format non supporté.",
  407: "Authentification proxy requise.",
  408: "Délai d'attente dépassé. Le serveur a attendu trop longtemps.",
  409: "Conflit. Conflit avec l'état actuel de la ressource.",
  410: "Parti. La ressource a été définitivement supprimée.",
  411: "Longueur du contenu non spécifiée.",
  412: "Précondition échouée.",
  413: "Charge utile trop grande.",
  414: "URI trop longue.",
  415: "Type de média non supporté.",
  416: "Plage non satisfaisante.",
  417: "Expectation échouée.",
  418: "Je suis une théière.",
  421: "Requête mal dirigée.",
  422: "Entité non traitable. Erreur sémantique.",
  423: "Verrouillé. Ressource verrouillée.",
  424: "Échec de dépendance.",
  425: "Trop tôt. Requête pouvant être rejouée.",
  426: "Mise à niveau requise. Changer de protocole.",
  428: "Condition requise.",
  429: "Trop de requêtes.",
  431: "Champs d'en-tête trop volumineux.",
  451: "Non disponible pour des raisons légales.",

  // --- 5xx: Server Errors ---
  500: "Erreur interne du serveur. Erreur inattendue.",
  501: "Non implémenté. Fonctionnalité non supportée.",
  502: "Mauvaise passerelle. Réponse invalide du serveur en amont.",
  503: "Service indisponible. Surcharge ou maintenance.",
  504: "Délai d'attente de la passerelle.",
  505: "Version HTTP non supportée.",
  506: "Variante négocie aussi. Erreur de configuration.",
  507: "Espace insuffisant.",
  508: "Boucle détectée.",
  510: "Extension requise.",
  511: "Authentification réseau requise.",

  // --- Unofficial ---
  419: "Page expirée. Jeton CSRF manquant ou invalide.",
  420: "Échec de la méthode. Limite de requêtes dépassée.",
  450: "Bloqué par le contrôle parental Windows.",
  498: "Jeton invalide ou expiré.",
  509: "Limite de bande passante dépassée.",
  530: "Site gelé. Inactivité ou action administrative.",
  598: "Délai d'attente de lecture réseau.",
  599: "Délai d'attente de connexion réseau.",

  // --- NGINX ---
  444: "Pas de réponse. Connexion fermée immédiatement.",
  494: "En-tête de requête trop grand.",
  495: "Erreur de certificat SSL.",
  496: "Certificat SSL requis.",
  497: "Requête HTTP envoyée au port HTTPS.",
  499: "Requête fermée par le client.",

  // --- Cloudflare ---
  520: "Erreur inconnue du serveur d'origine.",
  521: "Serveur web hors ligne.",
  522: "Délai de connexion dépassé.",
  523: "Serveur d'origine inaccessible.",
  524: "Délai d'attente écoulé.",
  525: "Échec de la négociation SSL.",
  526: "Certificat SSL invalide.",
  527: "Erreur Railgun.",
} as const;

export default FrenchStatusMessages;

export type FrenchStatusMessage =
  (typeof FrenchStatusMessages)[keyof typeof FrenchStatusMessages];
