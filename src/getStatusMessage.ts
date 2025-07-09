// import shortMessages from './shortStatusMessages';
import type { StatusCode } from './status-codes';
import { StatusMessages } from './status-messages';
import { DetailedStatusMessages } from './detailed-status-messages';

export function getStatusMessage(
  code: StatusCode,
  options?: { messages?: Record<number, string>; variant?: 'detailed' }
): string {
  if (options?.messages) {
    return options.messages[code] ?? 'Unknown Status';
  }

  if (options?.variant === 'detailed') {
    return DetailedStatusMessages[code] ?? 'Unknown Status';
  }

  return StatusMessages[code] ?? 'Unknown Status';
}
