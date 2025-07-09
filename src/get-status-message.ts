// import shortMessages from './shortStatusMessages';
import type { StatusCode } from './status-codes';
import { StatusMessages } from './status-messages';

export function getStatusMessage(
  code: StatusCode,
  variant?: { messages?: Record<number, string>; variant?: 'detailed' }
): string {
  if (variant?.messages) {
    return variant.messages[code] ?? 'Unknown Status';
  }

  return StatusMessages[code] ?? 'Unknown Status';
}
