import equals from 'fast-deep-equal';

expect.extend({
  toEqualRegardlessOfKeyCase: (received, expected) => {
    return {
      pass: Object.keys(received).every(k_r => {
        const k_e = Object.keys(expected)
          .find(k => new RegExp(`^${k_r}$`, 'i').test(k));
        return (k_e) && equals(expected[k_e],received[k_r])
      }),
      message: () => `object equality failure ${JSON.stringify(received)} does not match ${JSON.stringify(expected)}`
    };
  }
});
