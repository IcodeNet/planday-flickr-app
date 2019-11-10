import React from 'react';
import PropTypes from 'prop-types';

export const ErrorFallbackComponent = ({ error }) => {
  return (
      <h3>
        {error.message}
      </h3>
  );
};
ErrorFallbackComponent.propTypes = { error: PropTypes.any.isRequired };
