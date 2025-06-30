
// generate long status message if required

export const LongStatusMessages = {
  // --- 1xx: Informational ---
  100: 'Request received, continue to send the rest of the request.',
  101: 'Protocol switch initiated as requested by the client.',
  102: 'Request accepted, processing is ongoing.',
  103: 'Preliminary headers sent before the final response.',

  // --- 2xx: Success ---
  200: 'The request was successful.',
  201: 'The resource was created successfully.',
  202: 'The request has been accepted but not yet processed.',
  203: 'Returned metadata may be from a local or third-party copy.',
  204: 'The request was successful but there is no content to send.',
  205: 'The client should reset the document view.',
  206: 'The server is returning part of the resource due to a range header.',
  207: 'Multiple statuses for different parts of a WebDAV request.',
  208: 'The members of a DAV binding have already been reported.',
  226: 'The server has fulfilled a GET request using instance manipulation.',

  // --- 3xx: Redirection ---
  300: 'Multiple options available for the requested resource.',
  301: 'Resource has been permanently moved to a new URL.',
  302: 'Resource temporarily found at a different URL.',
  303: 'Redirect to a different URL using GET method.',
  304: 'Resource not modified since last request; use cached version.',
  305: 'Request must use the specified proxy to access the resource.',
  307: 'Temporary redirect; request should be repeated with same method.',
  308: 'Permanent redirect; request should be repeated with same method.',

  // --- 4xx: Client Errors ---
  400: 'The server could not understand the request due to invalid syntax.',
  401: 'Authentication is required and has failed or not yet been provided.',
  402: 'Payment is required to access the requested resource.',
  403: 'The client does not have access rights to the content.',
  404: 'The server cannot find the requested resource.',
  405: 'The request method is known but is not supported by the resource.',
  406: 'The requested resource is not available in a format acceptable to the client.',
  407: 'Client must first authenticate itself with the proxy.',
  408: 'The server timed out waiting for the request.',
  409: 'The request conflicts with the current state of the resource.',
  410: 'The resource requested is no longer available and will not be available again.',
  411: 'The request did not specify the length of its content.',
  412: 'The server does not meet one of the preconditions specified by the client.',
  413: 'The request payload is larger than the server is willing or able to process.',
  414: 'The URI provided was too long for the server to process.',
  415: 'The media format of the requested data is not supported by the server.',
  416: 'The client has asked for a portion of the file, but the server cannot supply that portion.',
  417: 'The server cannot meet the requirements of the Expect request-header field.',
  418: 'The server refuses to brew coffee because it is a teapot.',
  421: 'The request was directed at a server that is not able to produce a response.',
  422: 'The request was well-formed but was unable to be followed due to semantic errors.',
  423: 'The resource that is being accessed is locked.',
  424: 'The request failed due to failure of a previous request.',
  425: 'The server is unwilling to risk processing a request that might be replayed.',
  426: 'The client should switch to a different protocol as requested by the server.',
  428: 'The origin server requires the request to be conditional.',
  429: 'The user has sent too many requests in a given amount of time.',
  431: 'The server is unwilling to process the request because its header fields are too large.',
  451: 'Access to the resource is denied for legal reasons.',

  // --- 5xx: Server Errors ---
  500: 'The server encountered an unexpected internal error.',
  501: 'The server does not support the requested feature.',
  502: 'Received an invalid response from the upstream server.',
  503: 'The server is currently unavailable or overloaded.',
  504: 'The gateway timed out while waiting for a response.',
  505: 'The HTTP version used is not supported by the server.',
  506: 'Content negotiation failed due to a server issue.',
  507: 'The server is unable to store the representation needed.',
  508: 'The server detected an infinite loop while processing.',
  510: 'Further extensions are required to complete the request.',
  511: 'Network authentication is required to access this resource.',

  // Unofficial
  419: 'Page expired due to missing or invalid CSRF token.',
  420: 'Request rate limited; please slow down.',
  450: 'Access blocked by Windows parental control settings.',
  498: 'Token provided is invalid or expired.',
  509: 'Bandwidth limit exceeded as per server settings.',
  530: 'Site is frozen due to inactivity or administrative action.',
  598: 'Network read timed out behind a proxy server.',
  599: 'Network connection timed out during communication.',

  // NGINX
  444: 'No response returned; connection closed immediately.',
  494: 'Request header is too large to be processed by the server.',
  495: 'Invalid client SSL certificate provided.',
  496: 'Client SSL certificate required but not provided.',
  497: 'HTTP request sent to an HTTPS port by mistake.',
  499: 'Client closed the request before server responded.',

  // Cloudflare
  520: 'Unknown error from origin server; connection reset or invalid response.',
  521: 'Origin server refused connection from Cloudflare.',
  522: 'TCP handshake timed out between Cloudflare and origin server.',
  523: 'Cloudflare could not reach the origin server.',
  524: 'Timeout occurred waiting for response from origin server.',
  525: 'SSL/TLS handshake failed between Cloudflare and origin server.',
  526: 'Origin server presented an invalid SSL certificate.',
  527: 'Request timed out or failed after WAN connection was established.',
} as const;


export type LongStatusMessage =
  (typeof LongStatusMessages)[keyof typeof LongStatusMessages];
