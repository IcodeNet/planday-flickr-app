import React from 'react';
import { ErrorFallbackComponent } from './ErrorFallbackComponent';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.Component<unknown & { FallbackComponent: any }, unknown> {

  static propTypes = {
    children: PropTypes.element.isRequired,
    FallbackComponent: PropTypes.any
  };
  state = {
    error: null
  };

  static getDerivedStateFromError(error: any): {} {
    // Update state so that the next render will show the fallback UI
    return { error };
  }

  render(): React.ReactNode | React.ReactChildren {
    const { children } = this.props;
    let { FallbackComponent } = this.props;

    const { error } = this.state;
    if (!FallbackComponent) {
      FallbackComponent = ErrorFallbackComponent;
    }

    if (error) {
      return <FallbackComponent error={error} />;
    }

    return children;
  }
}


