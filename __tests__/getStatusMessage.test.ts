
import { StatusCodes } from '../src/statusCodes';
import { getStatusMessage } from './../src/getStatusMessage';

describe('getStatusMessage', () => {
  it('should return a short message by default', () => {
    expect(getStatusMessage(StatusCodes.OK)).toBe('OK');
  });


  it('should return a long message if long = true', () => {
    expect(getStatusMessage(StatusCodes.OK, true)).toMatch(/successful/i)
  })

  it('should return a "Unknown Status" for invalid code', () => {
    expect(getStatusMessage(999 as any)).toBe('Unknown Status');
  }) 

})

