import React from 'react';
import { render } from 'test';
import LoadingSpinner from './LoadingSpinner';

describe('Loading', () => {

  describe('Sets the spinner classes based on size prop', () => {
    it('should set extra classes on', () => {
      const { container } = render(<LoadingSpinner classes={'extra'} />);
      expect(container.querySelector('.extra')).not.toBeNull();

    });
    it('should have the spinner class', () => {
      const { container } = render(<LoadingSpinner />);
      expect(container.querySelector('.spinner')).not.toBeNull();

    });
    it('Should change class based on size prop', () => {

      const { container, rerender } = render(<LoadingSpinner />);

      expect(container.querySelector('.spinner-lg')).not.toBeNull();
      expect(container.querySelector('.spinner-md')).toBeNull();
      expect(container.querySelector('.spinner-sm')).toBeNull();

      rerender(<LoadingSpinner size={'small'} />);

      expect(container.querySelector('.spinner-lg')).toBeNull();
      expect(container.querySelector('.spinner-md')).toBeNull();
      expect(container.querySelector('.spinner-sm')).not.toBeNull();

      rerender(<LoadingSpinner size={'medium'} />);

      expect(container.querySelector('.spinner-lg')).toBeNull();
      expect(container.querySelector('.spinner-md')).not.toBeNull();
      expect(container.querySelector('.spinner-sm')).toBeNull();

      rerender(<LoadingSpinner size={'large'} />);

      expect(container.querySelector('.spinner-lg')).not.toBeNull();
      expect(container.querySelector('.spinner-md')).toBeNull();
      expect(container.querySelector('.spinner-sm')).toBeNull();

    });
  });

});
