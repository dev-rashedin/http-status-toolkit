import { StatusCode } from './statusCodes';
import { StatusMessages } from './statusMessages';

export function getStatusMessage(code: StatusCode): string {
  return StatusMessages[code] ?? 'Unknown Status Code';
}
