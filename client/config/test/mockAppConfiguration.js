import ConfigurationManager from "../../src/app/services/configuration/configuration-manager";
import { defaultConfiguration } from "../../src/app/services/configuration/default-configuration";

const setAppConfiguration = (overrides = {}) => {
  const configuration = { ...defaultConfiguration, ...overrides };
  ConfigurationManager.set(configuration);
};

export default setAppConfiguration;
