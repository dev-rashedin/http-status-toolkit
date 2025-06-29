export const StatusMessages = {
  // --- 1xx: Informational ---
  // 100: 'Continue',
  // 101: 'Switching Protocols',
  // 102: 'Processing',
  // 103: 'Early Hints',

  // // --- 2xx: Success ---
  // 200: 'OK',
  // 201: 'Created',
  // 202: 'Accepted',
  // 203: 'Non-Authoritative Information',
  // 204: 'No Content',
  // 205: 'Reset Content',
  // 206: 'Partial Content',
  // 207: 'Multi Status',
  // 208: 'Already Reported',
  // 226: 'IM Used',

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
  300: 'Multiple Choices',
  301: 'Moved Permanently',
  302: 'Moved Temporarily',
  303: 'See Other',
  304: 'Not Modified',
  305: 'Use Proxy',
  307: 'Temporary Redirect',
  308: 'Permanent Redirect',

  // --- 4xx: Client Errors ---
  400: 'Bad Request',
  401: 'Unauthorized',
  402: 'Payment Required',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  406: 'Not Acceptable',
  407: 'Proxy Authentication Required',
  408: 'Request Timeout',
  409: 'Conflict',
  410: 'Gone',
  411: 'Length Required',
  412: 'Precondition Failed',
  413: 'Payload Too Large',
  414: 'URI Too Long',
  415: 'Unsupported Media Type',
  416: 'Range Not Satisfiable',
  417: 'Expectation Failed',
  418: "I'm a teapot",
  419: 'Insufficient Space on Resource',
  420: 'Method Failure',
  421: 'Misdirected Request',
  422: 'Unprocessable Entity',
  424: 'Failed Dependency',
  426: 'Upgrade Required',
  428: 'Precondition Required',
  429: 'Too Many Requests',
  451: 'Unavailable For Legal Reasons',

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


export type StatusMessage =
  (typeof StatusMessages)[keyof typeof StatusMessages];
