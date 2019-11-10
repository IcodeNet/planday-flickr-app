import React from 'react';
import { render } from 'react-dom';

import App from './app';
import ConfigurationManager
  from './services/configuration/configuration-manager';
import { AppConfig, GetConfig } from './services/configuration/app-config';
import { getQueryParam, getQueryParams } from './lib/queryparams';

const container = document.getElementById('root');

/* GLOBAL ERROR HANDLING*/
window.addEventListener('error', e => {
  console.error(e.message);
});

const overrideAndReturnBasedOnQueryParams = (config): AppConfig => {
  // Override the default config values with query parameter values
  const queryParameters = getQueryParams();

  const excludedParameters = [];

  Object.keys(queryParameters).map(queryParameter => {
    const queryParameterValue = getQueryParam(queryParameter);

    /* eslint-disable */
    if (
      !!queryParameterValue &&
      config.hasOwnProperty(queryParameter) &&
      !excludedParameters.includes(queryParameter)
    ) {
      config[queryParameter] = queryParameterValue;
    }
  });

  return config;
};

export const initConfig = async () => {
  // Read the config settings from the config file.
  let config = await GetConfig();

  // use the Query string to override settings
  let basedOnQueryParams = overrideAndReturnBasedOnQueryParams(config);
  const newConfig = { ...basedOnQueryParams };

  // Store the configuration globally so all components need config settings can retrieve it.
  ConfigurationManager.set(newConfig);
};

export const renderApp = (App, target = document.getElementById('root')) => {
  render(<App />, target);
};

export const initConfigAndRender = async (App, target, callback): Promise<void> => {
  await initConfig();
  callback(App, target);
};

initConfigAndRender(App, container, renderApp);
