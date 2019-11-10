import React from 'react';
import { render } from 'test';
import { CenteredMessage } from './CenteredMessage';
import { LoadingMessage } from './LoadingMessage';
import { NotFound } from './NotFound';

describe('<CenteredMessage />', () => {
  it('renders a centered message', () => {
    const message = 'Hello!';
    const { getByText } = render(<CenteredMessage>{message}</CenteredMessage>);
    expect(getByText(message)).toBeInTheDocument();
  });
});

describe('<Loading />', () => {
  it('renders the loading message', () => {
    const message = 'Loading...';
    const { getByText } = render(<LoadingMessage />);
    expect(getByText(message)).toBeInTheDocument();
  });
});

describe('<NotFound />', () => {
  it('renders the not found message', () => {
    const message = 'Page Not Found';
    const { getByText } = render(<NotFound />);
    expect(getByText(message)).toBeInTheDocument();
  });
});
