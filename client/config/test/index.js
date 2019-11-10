///
import React from "react";
import { render } from "@testing-library/react";
import PropTypes from "prop-types";

export { default as suppressErrorPropagation } from './suppress-error-propagation';

const TestWrapper = ({ children }) => {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: TestWrapper, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };

TestWrapper.propTypes = { children: PropTypes.element.isRequired };

// Fail tests on any warning
console.error = message => {
  throw new Error(`GLOBAL UNCAUGHT ERROR IN TESTS: ${message}`);
};

