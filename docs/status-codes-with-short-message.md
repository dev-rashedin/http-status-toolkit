# HTTP Status Codes Documentation

This document includes all the supported HTTP status codes provided by `http-status-toolkit`. Each entry shows:

- The numerical code
- Its constant name (TypeScript-safe)
- A short message

---

## ✅ Official HTTP Status Codes

| Code | Constant                        | Message                         |
|------|----------------------------------|----------------------------------|
| 100  | CONTINUE                        | Continue                        |
| 101  | SWITCHING_PROTOCOLS             | Switching Protocols             |
| 102  | PROCESSING                      | Processing                      |
| 103  | EARLY_HINTS                     | Early Hints                     |
| 200  | OK                              | OK                              |
| 201  | CREATED                         | Created                         |
| 202  | ACCEPTED                        | Accepted                        |
| 203  | NON_AUTHORITATIVE_INFORMATION   | Non-Authoritative Information   |
| 204  | NO_CONTENT                      | No Content                      |
| 205  | RESET_CONTENT                   | Reset Content                   |
| 206  | PARTIAL_CONTENT                 | Partial Content                 |
| 207  | MULTI_STATUS                    | Multi Status                    |
| 208  | ALREADY_REPORTED                | Already Reported                |
| 226  | IM_USED                         | IM Used                         |
| 300  | MULTIPLE_CHOICES                | Multiple Choices                |
| 301  | MOVED_PERMANENTLY               | Moved Permanently               |
| 302  | FOUND                           | Found                           |
| 303  | SEE_OTHER                       | See Other                       |
| 304  | NOT_MODIFIED                    | Not Modified                    |
| 305  | USE_PROXY                       | Use Proxy                       |
| 307  | TEMPORARY_REDIRECT              | Temporary Redirect              |
| 308  | PERMANENT_REDIRECT              | Permanent Redirect              |
| 400  | BAD_REQUEST                     | Bad Request                     |
| 401  | UNAUTHORIZED                    | Unauthorized                    |
| 402  | PAYMENT_REQUIRED                | Payment Required                |
| 403  | FORBIDDEN                       | Forbidden                       |
| 404  | NOT_FOUND                       | Not Found                       |
| 405  | METHOD_NOT_ALLOWED              | Method Not Allowed              |
| 406  | NOT_ACCEPTABLE                  | Not Acceptable                  |
| 407  | PROXY_AUTHENTICATION_REQUIRED   | Proxy Authentication Required   |
| 408  | REQUEST_TIMEOUT                 | Request Timeout                 |
| 409  | CONFLICT                        | Conflict                        |
| 410  | GONE                            | Gone                            |
| 411  | LENGTH_REQUIRED                 | Length Required                 |
| 412  | PRECONDITION_FAILED             | Precondition Failed             |
| 413  | PAYLOAD_TOO_LARGE               | Payload Too Large               |
| 414  | URI_TOO_LONG                    | URI Too Long                    |
| 415  | UNSUPPORTED_MEDIA_TYPE          | Unsupported Media Type          |
| 416  | RANGE_NOT_SATISFIABLE           | Range Not Satisfiable           |
| 417  | EXPECTATION_FAILED              | Expectation Failed              |
| 418  | IM_A_TEAPOT                     | I'm a teapot                    |
| 421  | MISDIRECTED_REQUEST             | Misdirected Request             |
| 422  | UNPROCESSABLE_ENTITY            | Unprocessable Entity            |
| 423  | LOCKED                          | Locked                          |
| 424  | FAILED_DEPENDENCY               | Failed Dependency               |
| 426  | UPGRADE_REQUIRED                | Upgrade Required                |
| 428  | PRECONDITION_REQUIRED           | Precondition Required           |
| 429  | TOO_MANY_REQUESTS               | Too Many Requests               |
| 431  | REQUEST_HEADER_FIELDS_TOO_LARGE | Request Header Fields Too Large |
| 451  | UNAVAILABLE_FOR_LEGAL_REASONS   | Unavailable For Legal Reasons   |
| 500  | INTERNAL_SERVER_ERROR           | Internal Server Error           |
| 501  | NOT_IMPLEMENTED                 | Not Implemented                 |
| 502  | BAD_GATEWAY                     | Bad Gateway                     |
| 503  | SERVICE_UNAVAILABLE             | Service Unavailable             |
| 504  | GATEWAY_TIMEOUT                 | Gateway Timeout                 |
| 505  | HTTP_VERSION_NOT_SUPPORTED      | HTTP Version Not Supported      |
| 506  | VARIANT_ALSO_NEGOTIATES         | Variant Also Negotiates         |
| 507  | INSUFFICIENT_STORAGE            | Insufficient Storage            |
| 508  | LOOP_DETECTED                   | Loop Detected                   |
| 510  | NOT_EXTENDED                    | Not Extended                    |
| 511  | NETWORK_AUTHENTICATION_REQUIRED | Network Authentication Required |

---

## 🟡 Unofficial Status Codes

| Code | Constant                         | Message                                 |
|------|-----------------------------------|------------------------------------------|
| 419  | PAGE_EXPIRED                     | Page Expired                            |
| 420  | METHOD_FAILURE                   | Method Failure                          |
| 420  | ENHANCE_YOUR_CALM                | Enhance Your Calm                       |
| 450  | BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS | Blocked by Parental Controls       |
| 498  | INVALID_TOKEN                    | Invalid Token                           |
| 499  | TOKEN_REQUIRED                   | Token Required                          |
| 509  | BANDWIDTH_LIMIT_EXCEEDED         | Bandwidth Limit Exceeded                |
| 530  | SITE_IS_FROZEN                   | Site is Frozen                          |
| 598  | NETWORK_READ_TIMEOUT_ERROR       | Network Read Timeout Error              |
| 599  | NETWORK_CONNECT_TIMEOUT_ERROR    | Network Connect Timeout Error           |

---

## 🪟 Microsoft IIS Codes

| Code | Constant          | Message           |
|------|-------------------|--------------------|
| 440  | LOGIN_TIMEOUT     | Login Timeout      |
| 449  | RETRY_WITH        | Retry With         |
| 451  | REDIRECT          | Redirect           |

---

## 🧩 NGINX Specific Codes

| Code | Constant                         | Message                                |
|------|-----------------------------------|----------------------------------------|
| 444  | NO_RESPONSE                      | No Response                            |
| 494  | REQUEST_HEADER_TOO_LARGE        | Request Header Too Large               |
| 495  | SSL_CERTIFICATE_ERROR           | SSL Certificate Error                  |
| 496  | SSL_CERTIFICATE_REQUIRED        | SSL Certificate Required               |
| 497  | HTTP_REQUEST_SENT_TO_HTTPS_PORT | HTTP Request Sent to HTTPS Port        |
| 499  | CLIENT_CLOSED_REQUEST           | Client Closed Request                  |

---

## ☁️ Cloudflare Specific Codes

| Code | Constant                      | Message                         |
|------|-------------------------------|----------------------------------|
| 520  | UNKNOWN_ERROR                 | Unknown Error                   |
| 521  | WEB_SERVER_IS_DOWN           | Web Server Is Down              |
| 522  | CONNECTION_TIMED_OUT         | Connection Timed Out            |
| 523  | ORIGIN_IS_UNREACHABLE        | Origin Is Unreachable           |
| 524  | A_TIMEOUT_OCCURRED           | A Timeout Occurred              |
| 525  | SSL_HANDSHAKE_FAILED         | SSL Handshake Failed            |
| 526  | INVALID_SSL_CERTIFICATE      | Invalid SSL Certificate         |
| 527  | RAILGUN_ERROR                | Railgun Error                   |

---

## 📦 Tip

To get messages programmatically:

```ts
getStatusMessage(StatusCodes.NOT_FOUND); // "Not Found"
getStatusMessage(StatusCodes.NOT_FOUND, true); // Detailed message
