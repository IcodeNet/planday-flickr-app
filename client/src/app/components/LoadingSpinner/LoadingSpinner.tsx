import * as React from 'react';
import clsx from 'clsx';
import propTypes from 'prop-types';

import './LoadingSpinner.styles.scss';

const LoadingSpinner = (props) => {
  const { size, classes, ...rest } = props;
  const classList = clsx('spinner', classes);
  let spinnerClass;

  switch (size) {
    case 'small':
      spinnerClass = 'spinner-sm';
      break;

    case 'medium':
      spinnerClass = 'spinner-md';
      break;

    case 'large':
    default:
      spinnerClass = 'spinner-lg';
      break;
  }

  return (
    <div className={classList} {...rest}>
      <div className={spinnerClass} />
      <div className='spinner-mask' />
    </div>
  );
};

LoadingSpinner.displayName = 'Loading';

LoadingSpinner.propTypes = {
  size: propTypes.string,
  classes: propTypes.any
};

export default LoadingSpinner;
