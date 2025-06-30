
// generate long status message if required

export const DetailedStatusMessages = {
  // --- 1xx: Informational ---
  100: 'Continue. Request received, continue to send the rest of the request.',
  101: 'Switching Protocols. Protocol switch initiated as requested by the client.',
  102: 'Processing. Request accepted, processing is ongoing without final response yet.',
  103: 'Early Hints. Preliminary headers sent before the final response.',

  // --- 2xx: Success ---
  200: 'OK. The request was successful and the response contains the result.',
  201: 'Created. The request was successful and a new resource has been created.',
  202: 'Accepted. The request has been received but not yet acted upon.',
  203: 'Non-Authoritative Information. Metadata may come from a local or third-party copy.',
  204: 'No Content. The request was successful, but there is no content to return.',
  205: 'Reset Content. The client should reset the document view after receiving this response.',
  206: 'Partial Content. The server is returning only part of the resource due to a range header.',
  207: 'Multi-Status. Contains status for multiple independent operations (WebDAV).',
  208: 'Already Reported. Elements have already been reported in a previous response (WebDAV).',
  226: 'IM Used. GET request fulfilled with a response based on instance manipulations (Delta encoding).',

  // --- 3xx: Redirection ---
  300: 'Multiple Choices. Multiple options are available for the requested resource.',
  301: 'Moved Permanently. The resource has been permanently moved to a new URL.',
  302: 'Found. The resource is temporarily located at a different URL.',
  303: 'See Other. Redirect the client to a different URL using the GET method.',
  304: 'Not Modified. The resource has not changed since the last request; use cached version.',
  305: 'Use Proxy. Access to the resource must be made through the specified proxy.',
  307: 'Temporary Redirect. The resource resides temporarily under a different URI using the same method.',
  308: 'Permanent Redirect. The resource is permanently located at a different URI using the same method.',

  // --- 4xx: Client Errors ---
  400: 'Bad Request. The server could not understand the request due to malformed syntax.',
  401: 'Unauthorized. Authentication is required and has either failed or not been provided.',
  402: 'Payment Required. Payment is required to access the requested resource.',
  403: 'Forbidden. The client is authenticated but does not have access rights to the content.',
  404: 'Not Found. The server cannot locate the requested resource.',
  405: 'Method Not Allowed. The request method is recognized but not supported by the target resource.',
  406: 'Not Acceptable. The requested resource is not available in a format acceptable to the client.',
  407: 'Proxy Authentication Required. The client must authenticate itself with the proxy first.',
  408: 'Request Timeout. The server timed out waiting for the client’s request.',
  409: 'Conflict. The request could not be completed due to a conflict with the current state of the resource.',
  410: 'Gone. The requested resource is no longer available and has been permanently removed.',
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
  500: 'Internal Server Error. The server encountered an unexpected condition that prevented it from fulfilling the request.',
  501: 'Not Implemented. The server does not support the functionality required to fulfill the request.',
  502: 'Bad Gateway. The server received an invalid response from an upstream server while acting as a gateway or proxy.',
  503: 'Service Unavailable. The server is currently unable to handle the request due to maintenance or overload.',
  504: 'Gateway Timeout. The server, acting as a gateway or proxy, did not receive a timely response from the upstream server.',
  505: 'HTTP Version Not Supported. The server does not support the HTTP protocol version used in the request.',
  506: 'Variant Also Negotiates. The server encountered an internal configuration error while negotiating content.',
  507: 'Insufficient Storage. The server cannot store the representation needed to complete the request.',
  508: 'Loop Detected. The server terminated the request because it detected an infinite loop in processing.',
  510: 'Not Extended. Further extensions are required for the server to fulfill the request.',
  511: 'Network Authentication Required. The client must authenticate to gain network access.',

  // --- Unofficial Codes ---
  419: 'Page Expired. Page expired due to missing or invalid CSRF token.',
  420: 'Method Failure. Request rate limited; please slow down.',
  450: 'Blocked by Windows Parental Controls. Access blocked by Windows parental control settings.',
  498: 'Invalid Token. Token provided is invalid or expired.',
  509: 'Bandwidth Limit Exceeded. Bandwidth limit exceeded as per server settings.',
  530: 'Site Frozen. Site is frozen due to inactivity or administrative action.',
  598: 'Network Read Timeout Error. Network read timed out behind a proxy server.',
  599: 'Network Connect Timeout Error. Network connection timed out during communication.',

  // --- NGINX ---
  444: 'No Response. No response returned; connection closed immediately.',
  494: 'Request Header Too Large. Request header is too large to be processed by the server.',
  495: 'SSL Certificate Error. Invalid client SSL certificate provided.',
  496: 'SSL Certificate Required. Client SSL certificate required but not provided.',
  497: 'HTTP Request Sent to HTTPS Port. HTTP request sent to an HTTPS port by mistake.',
  499: 'Client Closed Request. Client closed the request before server responded.',

  // --- Cloudflare ---
  520: 'Unknown Error. Unknown error from origin server; connection reset or invalid response.',
  521: 'Web Server Is Down. Origin server refused connection from Cloudflare.',
  522: 'Connection Timed Out. TCP handshake timed out between Cloudflare and origin server.',
  523: 'Origin Is Unreachable. Cloudflare could not reach the origin server.',
  524: 'A Timeout Occurred. Timeout occurred waiting for response from origin server.',
  525: 'SSL Handshake Failed. SSL/TLS handshake failed between Cloudflare and origin server.',
  526: 'Invalid SSL Certificate. Origin server presented an invalid SSL certificate.',
  527: 'Railgun Error. Request timed out or failed after WAN connection was established.',
} as const;


export type DetailedStatusMessage =
  (typeof DetailedStatusMessages)[keyof typeof DetailedStatusMessages];
