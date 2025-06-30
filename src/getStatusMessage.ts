// import shortMessages from './shortStatusMessages';
import { LongStatusMessages } from './detailedStatusMessages';
import type { StatusCode } from './statusCodes';
import { StatusMessages } from './statusMessages';

export function getStatusMessage(statusCode: StatusCode, long = false): string {
  return long
    ? LongStatusMessages[statusCode] ?? 'Unknown Status'
    : StatusMessages[statusCode] ?? 'Unknown Status';
}
