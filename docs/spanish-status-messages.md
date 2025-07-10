# 📘 Spanish HTTP Status Messages

This document provides **Spanish translations** of HTTP status code messages, including official, unofficial, and vendor-specific codes—offered by the [`http-status-toolkit`](https://www.npmjs.com/package/http-status-toolkit) package.

Each entry includes:

* The status code
* Its corresponding Spanish message

---

## ✅ 1xx — Informativo (Informational)

| Code | Message                                                                          |
| ---- | -------------------------------------------------------------------------------- |
| 100  | Continuar. Solicitud recibida, continúe enviando el resto.                       |
| 101  | Cambiando protocolos. Cambio iniciado según lo solicitado.                       |
| 102  | Procesando. Solicitud aceptada, el procesamiento está en curso.                  |
| 103  | Avisos tempranos. Encabezados preliminares enviados antes de la respuesta final. |

---

## 🟩 2xx — Éxito (Successful)

| Code | Message                                                            |
| ---- | ------------------------------------------------------------------ |
| 200  | OK. La solicitud fue exitosa y la respuesta contiene el resultado. |
| 201  | Creado. Se creó un nuevo recurso.                                  |
| 202  | Aceptado. Recibido pero aún no procesado.                          |
| 203  | Información no autoritativa. Metadatos de fuente externa o caché.  |
| 204  | Sin contenido. Solicitud exitosa, sin contenido de respuesta.      |
| 205  | Restablecer contenido. Restablecer vista del documento.            |
| 206  | Contenido parcial. Solo se devuelve parte del recurso.             |
| 207  | Multi-estado. Resultados múltiples (WebDAV).                       |
| 208  | Ya reportado. Ya informado en respuesta previa.                    |
| 226  | IM usado. Respuesta basada en manipulaciones de instancia.         |

---

## 🟨 3xx — Redirección (Redirection)

| Code | Message                                               |
| ---- | ----------------------------------------------------- |
| 300  | Múltiples opciones. Varias opciones disponibles.      |
| 301  | Movido permanentemente. Nuevo URL permanente.         |
| 302  | Encontrado. URL temporal diferente.                   |
| 303  | Ver otro. Redirigir usando método GET.                |
| 304  | No modificado. Sin cambios desde la última solicitud. |
| 305  | Usar proxy. Acceso a través del proxy especificado.   |
| 307  | Redirección temporal. Recurso movido temporalmente.   |
| 308  | Redirección permanente. Nuevo URI permanente.         |

---

## 🟥 4xx — Errores del cliente (Client Errors)

| Code | Message                                                   |
| ---- | --------------------------------------------------------- |
| 400  | Solicitud incorrecta. Sintaxis inválida.                  |
| 401  | No autorizado. Requiere autenticación.                    |
| 402  | Pago requerido. Se requiere pago.                         |
| 403  | Prohibido. Acceso denegado.                               |
| 404  | No encontrado. El recurso no existe.                      |
| 405  | Método no permitido. Método reconocido pero no permitido. |
| 406  | No aceptable. Formato no compatible.                      |
| 407  | Autenticación de proxy requerida.                         |
| 408  | Tiempo de espera agotado. El servidor esperó demasiado.   |
| 409  | Conflicto. Estado actual del recurso entra en conflicto.  |
| 410  | Desaparecido. Eliminado permanentemente.                  |
| 411  | Longitud de contenido no especificada.                    |
| 412  | Falla de precondición. No se cumplió una condición.       |
| 413  | Carga útil demasiado grande.                              |
| 414  | URI demasiado largo.                                      |
| 415  | Tipo de medio no compatible.                              |
| 416  | Rango no satisfactorio.                                   |
| 417  | Falla de expectativa.                                     |
| 418  | Soy una tetera. Rechazo a preparar café.                  |
| 421  | Solicitud mal dirigida.                                   |
| 422  | Entidad no procesable. Error semántico.                   |
| 423  | Bloqueado. El recurso está bloqueado.                     |
| 424  | Fallo de dependencia. Solicitud anterior falló.           |
| 425  | Demasiado temprano. Solicitud podría repetirse.           |
| 426  | Actualización requerida. Cambiar de protocolo.            |
| 428  | Requiere condiciones.                                     |
| 429  | Demasiadas solicitudes.                                   |
| 431  | Campos de encabezado demasiado grandes.                   |
| 451  | No disponible por razones legales.                        |

---

## 🛑 5xx — Errores del servidor (Server Errors)

| Code | Message                                                                |
| ---- | ---------------------------------------------------------------------- |
| 500  | Error interno del servidor. Error inesperado.                          |
| 501  | No implementado. Funcionalidad no soportada.                           |
| 502  | Puerta de enlace incorrecta. Respuesta inválida del servidor upstream. |
| 503  | Servicio no disponible. Sobrecarga o mantenimiento.                    |
| 504  | Tiempo de espera de puerta de enlace.                                  |
| 505  | Versión HTTP no soportada.                                             |
| 506  | Variante también negocia. Error de configuración.                      |
| 507  | Almacenamiento insuficiente. No se puede almacenar la respuesta.       |
| 508  | Bucle detectado.                                                       |
| 510  | Extensiones requeridas.                                                |
| 511  | Autenticación de red requerida.                                        |

---

## 🌀 No oficiales (Unofficial)

| Code | Message                                               |
| ---- | ----------------------------------------------------- |
| 419  | Página expirada. Token CSRF inválido o ausente.       |
| 420  | Falla del método. Límite de solicitudes excedido.     |
| 450  | Bloqueado por control parental de Windows.            |
| 498  | Token inválido o expirado.                            |
| 509  | Límite de ancho de banda excedido.                    |
| 530  | Sitio congelado. Inactividad o acción administrativa. |
| 598  | Tiempo de espera de lectura de red.                   |
| 599  | Tiempo de espera de conexión de red.                  |

---

## ⚙️ Específicos de NGINX

| Code | Message                                         |
| ---- | ----------------------------------------------- |
| 444  | Sin respuesta. Conexión cerrada inmediatamente. |
| 494  | Encabezado de solicitud demasiado grande.       |
| 495  | Error de certificado SSL.                       |
| 496  | Se requiere certificado SSL.                    |
| 497  | Solicitud HTTP enviada al puerto HTTPS.         |
| 499  | Solicitud cerrada por el cliente.               |

---

## ☁️ Específicos de Cloudflare

| Code | Message                                                |
| ---- | ------------------------------------------------------ |
| 520  | Error desconocido. Respuesta desconocida del servidor. |
| 521  | Servidor web caído. Cloudflare no pudo conectar.       |
| 522  | Tiempo de conexión agotado.                            |
| 523  | Origen inalcanzable.                                   |
| 524  | Tiempo de espera. Respuesta demorada.                  |
| 525  | Fallo en el handshake SSL.                             |
| 526  | Certificado SSL inválido.                              |
| 527  | Error de Railgun.                                      |
