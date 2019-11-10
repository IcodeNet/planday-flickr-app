import { _plainImport, StyleConstants } from './StyleConstants';

jest.mock('../../exports.scss', () => ({
  'font-family-base': '\'Exo\', sans-serif',
  'zindex-navbar': '1000'
}));

describe('StyleConstants', () => {
  describe('helper functions', () => {
    describe('_plainImport', () => {
      it('should return the value for the given key', () => {
        expect(_plainImport('font-family-base')).toEqual('\'Exo\', sans-serif');
        expect(_plainImport('zindex-navbar')).toEqual('1000');
      });
    });
  });

  it('Should have the correct structure', () => {
    expect(StyleConstants).toEqual({
                                     font: expect.any(Object),
                                     icons: expect.any(Object),
                                     colors: expect.objectContaining({
                                                                       brand: expect.any(Object),
                                                                       data: expect.any(Object)
                                                                     }),
                                     zIndex: expect.any(Object)
                                   });
  });
});
