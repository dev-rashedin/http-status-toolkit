
// generate long status message if required

const LongStatusMessages = {
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
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
  505: 'HTTP Version Not Supported',
  506: 'Variant Also Negotiates',
  507: 'Insufficient Storage',
  508: 'Loop Detected',
  510: 'Not Extended',
  511: 'Network Authentication Required',
  599: 'Network Connect Timeout Error',
} as const;


export default LongStatusMessages;


export type LongStatusMessages =
  (typeof LongStatusMessages)[keyof typeof LongStatusMessages];
