// import shortMessages from './shortStatusMessages';
import type { StatusCode } from './status-codes';
import { StatusMessages } from './status-messages';

export function getStatusMessage(
  code: StatusCode,
  options?: { variant?: Record<number, string> }
): string {
  if (options?.variant) {
    return options.variant[code] ?? 'Unknown Status';
  }

  return StatusMessages[code] ?? 'Unknown Status';
}
