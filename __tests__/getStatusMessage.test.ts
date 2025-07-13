import { StatusCodes } from '../src/status-codes';
import { getStatusMessage } from '../src/get-status-message';
import DetailedStatusMessages from './../src/detailed-status-messages';
import BengaliStatusMessages from './../src/localization/bengali-status-messages';
import GermanStatusMessages from './../src/localization/german-status-messages';
import JapaneseStatusMessages from './../src/localization/japanese-status-messages';

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
    expect(getStatusMessage(StatusCodes.OK, {
      variant: DetailedStatusMessages
    })).toMatch(/successful/i);

     expect(
       getStatusMessage(StatusCodes.CREATED, {
         variant: DetailedStatusMessages,
       })
     ).toMatch(/has been created/i);
     expect(
       getStatusMessage(StatusCodes.NOT_FOUND, {
         variant: DetailedStatusMessages,
       })
     ).toMatch(/cannot locate/i);
     expect(
       getStatusMessage(StatusCodes.INSUFFICIENT_STORAGE, {
         variant: DetailedStatusMessages,
       })
     ).toMatch(/cannot store/i);
     expect(
       getStatusMessage(StatusCodes.MOVED_PERMANENTLY, {
         variant: DetailedStatusMessages,
       })
     ).toMatch(/permanently moved /i);
     expect(
       getStatusMessage(StatusCodes.PERMANENT_REDIRECT, {
         variant: DetailedStatusMessages,
       })
     ).toMatch(/permanent redirect/i);
   
  });

  it('should return a detailed bengali message if detailed = true', () => {
    expect(getStatusMessage(StatusCodes.OK, {
      variant: BengaliStatusMessages
    })).toMatch(/ঠিক আছে/);
  });

  it('should return a detailed german message if detailed = true', () => {
    expect(
      getStatusMessage(StatusCodes.OK, {
        variant: GermanStatusMessages,
      })
    ).toMatch(/Die Anfrage/i);
  });

  it('should return a detailed japanese message if detailed = true', () => {
    expect(
      getStatusMessage(StatusCodes.OK, {
        variant: JapaneseStatusMessages,
      })
    ).toMatch(/成功/i);
  });

  // check if it returns a "Unknown Status" for invalid code
  it('should return a "Unknown Status" for invalid code', () => {
    expect(getStatusMessage(999 as any)).toBe('Unknown Status');
    expect(getStatusMessage(600 as any, {
      variant: DetailedStatusMessages
    })).toBe('Unknown Status');
  });
});
