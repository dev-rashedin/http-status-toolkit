// import shortMessages from './shortStatusMessages';
import type { StatusCode } from './statusCodes';
import { StatusMessages } from './statusMessages';
import { DetailedStatusMessages } from './detailedStatusMessages';

export function getStatusMessage(
  statusCode: StatusCode,
  detailed = false
): string {
  return detailed
    ? DetailedStatusMessages[statusCode] ?? 'Unknown Status'
    : StatusMessages[statusCode] ?? 'Unknown Status';
}
