import React from 'react';
import { ViewCenteredContainer } from '../LayoutContainers';
import PropTypes from 'prop-types';

export const CenteredMessage = ({ children }) => {
  return (
    <ViewCenteredContainer>
      <h3>
        {' '}
        {children}{' '}
      </h3>
    </ViewCenteredContainer>
  );
};

CenteredMessage.propTypes = { children: PropTypes.any.isRequired };
