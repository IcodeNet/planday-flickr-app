import { getQueryParams } from './queryparams';

describe('queryparams', () => {
  it('gets and empty object when there is no location or document', () => {
    // eslint-disable-next-line no-undef
    jsdom.reconfigure({
                        url:
                          'https://www.example.com'
                      });
    const result = getQueryParams();
    expect(result).toEqual({});
  });

  it('gets the parsed search from location', () => {
    // eslint-disable-next-line no-undef
    jsdom.reconfigure({
                        url:
                          'https://www.example.com/?currencyCode=EUR&currencySymbol=€&locale=el-GR'
                      });
    const result = getQueryParams();
    expect(result).toEqual({
                             currencyCode: 'EUR',
                             currencySymbol: '€',
                             locale: 'el-GR'
                           });
  });
});
