import * as React from 'react';
import ConfigurationManager from './configuration-manager';
import fs from 'fs';
import { AppConfig } from './app-config';

/** The props used by the ConfigurationImporter component */
export interface ConfigurationImporterProps {
  /** Overrides for any configuration settings  */
  configurationSettings?: Partial<AppConfig>;
}

/**
 * Used when mounting components in unit tests to initialise the ConfigurationManager.
 */
export class ConfigurationImporter extends React.Component<ConfigurationImporterProps> {
  componentDidMount(): void {
    const defaultConfig = this.readConfigs();

    const overrides = this.props.configurationSettings || {};
    const overriddenConfig = Object.assign({}, defaultConfig, overrides);
    ConfigurationManager.set(overriddenConfig);
  }

  /**
   * Reads all configs from the file webpack uses
   */
  readConfigs(): AppConfig {
    const path = `config/settings/app.json`;
    const defaults = JSON.parse(fs.readFileSync(path, 'utf8'));
    return defaults;
  }

  render(): null {
    return null;
  }
}

export default ConfigurationImporter;

