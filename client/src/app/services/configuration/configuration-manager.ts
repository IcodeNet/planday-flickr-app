import { AppConfig } from './app-config';
import reactGlobalConfiguration from 'react-global-configuration';

/**
 * Loads and saves application configuration.
 */
export default class ConfigurationManager {
  /**
   * Gets the application configuration shared across all component.
   */
  static get(): AppConfig {
    const configurationObject = reactGlobalConfiguration.get('ApplicationConfiguration');
    // The object we get back is just a JSON object, we use Object.assign here to make it an
    // actual AppConfig object rather than just using duck typing.
    const configurationSettings = new AppConfig();
    Object.assign(configurationSettings, configurationObject);
    return configurationSettings;
  }

  /**
   * Update the application configuration shared across all component.
   */
  public static set = (configurationSettings: AppConfig): void => {
    reactGlobalConfiguration.set({ ApplicationConfiguration: configurationSettings }, { freeze: false });
  };
}

