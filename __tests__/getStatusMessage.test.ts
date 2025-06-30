import { StatusCodes } from '../src/statusCodes';
import { getStatusMessage } from './../src/getStatusMessage';

describe('getStatusMessage', () => {
  // check if it returns a short message
  it('should return a short message by default', () => {
    expect(getStatusMessage(StatusCodes.OK)).toBe('OK');
    expect(getStatusMessage(StatusCodes.CREATED)).toBe('Created');
    expect(getStatusMessage(StatusCodes.NOT_FOUND)).toBe('Not Found');
    expect(getStatusMessage(StatusCodes.INSUFFICIENT_STORAGE)).toBe(
      'Insufficient Storage'
    );
    expect(getStatusMessage(StatusCodes.MOVED_PERMANENTLY)).toBe(
      'Moved Permanently'
    );
    expect(getStatusMessage(StatusCodes.PERMANENT_REDIRECT)).toBe(
      'Permanent Redirect'
    );
  });

  // check if it returns a detailed message
  it('should return a detailed message if detailed = true', () => {
    expect(getStatusMessage(StatusCodes.OK, true)).toMatch(/successful/i);
    expect(getStatusMessage(StatusCodes.CREATED, true)).toMatch(
      /has been created/i
    );
    expect(getStatusMessage(StatusCodes.NOT_FOUND, true)).toMatch(
      /cannot locate/i
    );
    expect(getStatusMessage(StatusCodes.INSUFFICIENT_STORAGE, true)).toMatch(
      /cannot store/i
    );
    expect(getStatusMessage(StatusCodes.MOVED_PERMANENTLY, true)).toMatch(
      /permanently moved /i
    );
    expect(getStatusMessage(StatusCodes.PERMANENT_REDIRECT, true)).toMatch(
      /permanent redirect/i
    );
  });

  // check if it returns a "Unknown Status" for invalid code
  it('should return a "Unknown Status" for invalid code', () => {
    expect(getStatusMessage(999 as any)).toBe('Unknown Status');
    expect(getStatusMessage(600 as any, true)).toBe('Unknown Status');
  });
});
