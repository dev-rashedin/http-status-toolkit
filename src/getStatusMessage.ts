// import shortMessages from './shortStatusMessages';
import mediumMessages from './statusMessages';
import type { StatusCode } from './statusCodes';
import { ShortStatusMessages } from './shortStatusMessage';

export function getStatusMessage(statusCode: StatusCode, short = false): string {
  return short
    ? ShortStatusMessages[statusCode] ?? 'Unknown Status'
    : mediumMessages[statusCode] ?? 'Unknown Status';
}
