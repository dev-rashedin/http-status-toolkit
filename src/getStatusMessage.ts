// import shortMessages from './shortStatusMessages';
import {LongStatusMessages} from './longStatusMessages';
import type { StatusCode } from './statusCodes';
import {StatusMessages} from './statusMessage';


export function getStatusMessage(
  statusCode: StatusCode,
  long = false
): string {
  return long
    ? LongStatusMessages[statusCode] ?? 'Unknown Status'
    : StatusMessages[statusCode] ?? 'Unknown Status';
}
