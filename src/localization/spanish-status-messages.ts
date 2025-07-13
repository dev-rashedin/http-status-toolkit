// Spanish translations of detailed HTTP status messages

const SpanishStatusMessages = {
  // --- 1xx: Informativo ---
  100: 'Continuar. Solicitud recibida, continúe enviando el resto de la solicitud.',
  101: 'Cambiando protocolos. Cambio de protocolo iniciado según lo solicitado por el cliente.',
  102: 'Procesando. Solicitud aceptada, el procesamiento continúa sin respuesta final aún.',
  103: 'Pistas tempranas. Encabezados preliminares enviados antes de la respuesta final.',

  // --- 2xx: Éxito ---
  200: 'OK. La solicitud fue exitosa y la respuesta contiene el resultado.',
  201: 'Creado. La solicitud fue exitosa y se ha creado un nuevo recurso.',
  202: 'Aceptado. La solicitud ha sido recibida pero aún no se ha procesado.',
  203: 'Información no autorizada. Los metadatos pueden provenir de una copia local o de terceros.',
  204: 'Sin contenido. La solicitud fue exitosa, pero no hay contenido que devolver.',
  205: 'Restablecer contenido. El cliente debe restablecer la vista del documento.',
  206: 'Contenido parcial. Se devuelve solo parte del recurso solicitado.',
  207: 'Multi-estado. Contiene el estado de múltiples operaciones (WebDAV).',
  208: 'Ya informado. Los elementos ya fueron reportados en una respuesta anterior (WebDAV).',
  226: 'IM usado. Solicitud GET cumplida con manipulaciones de instancia (codificación delta).',

  // --- 3xx: Redirección ---
  300: 'Múltiples opciones. Hay varias opciones disponibles para el recurso solicitado.',
  301: 'Movido permanentemente. El recurso ha sido movido permanentemente a una nueva URL.',
  302: 'Encontrado. El recurso se encuentra temporalmente en otra URL.',
  303: 'Ver otro. Redirigir al cliente a otra URL usando el método GET.',
  304: 'No modificado. El recurso no ha cambiado desde la última solicitud.',
  305: 'Usar proxy. Se debe acceder al recurso a través del proxy especificado.',
  307: 'Redirección temporal. El recurso se encuentra temporalmente en otra URI.',
  308: 'Redirección permanente. El recurso se encuentra permanentemente en otra URI.',

  // --- 4xx: Errores del cliente ---
  400: 'Solicitud incorrecta. El servidor no pudo entender la solicitud debido a una sintaxis inválida.',
  401: 'No autorizado. Se requiere autenticación y ha fallado o no se ha proporcionado.',
  402: 'Pago requerido. Se requiere pago para acceder al recurso solicitado.',
  403: 'Prohibido. El cliente está autenticado pero no tiene permisos.',
  404: 'No encontrado. El recurso solicitado no fue encontrado en el servidor.',
  405: 'Método no permitido. El método solicitado no está permitido para el recurso.',
  406: 'No aceptable. El recurso solicitado no está disponible en el formato aceptado.',
  407: 'Autenticación de proxy requerida. Se requiere autenticación con el proxy.',
  408: 'Tiempo de espera de la solicitud. El servidor esperó demasiado la solicitud.',
  409: 'Conflicto. La solicitud no se pudo completar debido a un conflicto con el estado actual.',
  410: 'Desaparecido. El recurso ya no está disponible y fue eliminado permanentemente.',
  411: 'Falta Content-Length. No se especificó la longitud del contenido.',
  412: 'Precondición fallida. El servidor no cumplió con una de las condiciones.',
  413: 'Carga útil muy grande. El servidor no puede procesar la solicitud por su tamaño.',
  414: 'URI muy largo. El URI es demasiado largo para ser procesado.',
  415: 'Tipo de medio no soportado. El formato de los datos no es compatible.',
  416: 'Rango no satisfactorio. El servidor no puede proporcionar esa parte del recurso.',
  417: 'Expectativa fallida. El servidor no puede cumplir con la cabecera Expect.',
  418: 'Soy una tetera. El servidor se niega a preparar café.',
  421: 'Mala dirección. La solicitud fue enviada a un servidor incorrecto.',
  422: 'Entidad no procesable. Errores semánticos impiden el procesamiento.',
  423: 'Bloqueado. El recurso está bloqueado.',
  424: 'Falló dependencia. Una solicitud previa falló.',
  425: 'Demasiado temprano. Riesgo de repetición, la solicitud no se procesa.',
  426: 'Requiere cambio de protocolo. Cambiar a otro protocolo según lo indicado.',
  428: 'Requiere condición. El servidor necesita que la solicitud sea condicional.',
  429: 'Demasiadas solicitudes. El usuario envió demasiadas solicitudes en poco tiempo.',
  431: 'Encabezados demasiado grandes. El servidor no los puede procesar.',
  451: 'No disponible por razones legales. El recurso está restringido legalmente.',

  // --- 5xx: Errores del servidor ---
  500: 'Error interno del servidor. El servidor encontró una condición inesperada.',
  501: 'No implementado. El servidor no soporta la funcionalidad requerida.',
  502: 'Puerta de enlace incorrecta. Respuesta inválida desde el servidor ascendente.',
  503: 'Servicio no disponible. El servidor no puede manejar la solicitud temporalmente.',
  504: 'Tiempo de espera de la puerta de enlace. No hubo respuesta oportuna.',
  505: 'Versión HTTP no soportada. El servidor no soporta esta versión.',
  506: 'Variante también negocia. Error de configuración al negociar contenido.',
  507: 'Almacenamiento insuficiente. No se pudo almacenar la representación.',
  508: 'Bucle detectado. Se detectó un bucle infinito en la solicitud.',
  510: 'Extensión requerida. Se necesitan más extensiones para procesar.',
  511: 'Autenticación de red requerida. El cliente debe autenticarse.',

  // --- No oficiales ---
  419: 'Página expirada. Token CSRF inválido o faltante.',
  420: 'Fallo de método. Demasiadas solicitudes; intente más tarde.',
  450: 'Bloqueado por control parental de Windows.',
  498: 'Token inválido o expirado.',
  509: 'Límite de ancho de banda excedido.',
  530: 'Sitio congelado por inactividad o administración.',
  598: 'Tiempo de lectura de red agotado.',
  599: 'Tiempo de conexión de red agotado.',

  // --- NGINX ---
  444: 'Sin respuesta. Conexión cerrada inmediatamente.',
  494: 'Encabezado demasiado grande. No puede ser procesado.',
  495: 'Error de certificado SSL. Certificado inválido.',
  496: 'Se requiere certificado SSL.',
  497: 'Solicitud HTTP enviada al puerto HTTPS.',
  499: 'Solicitud cerrada por el cliente.',

  // --- Cloudflare ---
  520: 'Error desconocido del servidor de origen.',
  521: 'Servidor web apagado.',
  522: 'Tiempo de conexión agotado.',
  523: 'Servidor de origen inalcanzable.',
  524: 'Tiempo de espera agotado esperando respuesta.',
  525: 'Error en el handshake SSL.',
  526: 'Certificado SSL inválido.',
  527: 'Error Railgun. Falla después de establecer conexión WAN.',
} as const;

export default SpanishStatusMessages;

export type SpanishStatusMessage =
  (typeof SpanishStatusMessages)[keyof typeof SpanishStatusMessages];
