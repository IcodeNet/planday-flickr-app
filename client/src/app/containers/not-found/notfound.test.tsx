import React from 'react';
import NotFound from './notfound.screen';
import { render } from 'test';

describe('Not Found Screen', function() {
  it('should render', function() {
    const { container } = render(<NotFound />);

    expect(container)
      .toBeDefined();
  });
});
