import curry from './currier';

describe('curry', () => {
  it('creates a function which has access to a combination of higher-scoped and locally-scoped arguments', () => {
    const fn = jest.fn();

    const highScopedArgs = { state: {}, dispatch: jest.fn(), history: {} };
    const localScopedArgs = { e: 'f', g: 'h' };
    const expectedArgs = { ...highScopedArgs, ...localScopedArgs };

    curry(highScopedArgs)(fn)(localScopedArgs);

    expect(fn)
      .toHaveBeenCalledWith(expectedArgs);
  });
});
