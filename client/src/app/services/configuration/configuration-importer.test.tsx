import React from 'react';
import { ConfigurationImporter } from './configuration-importer';
import { render } from 'test';
import ConfigurationManager from './configuration-manager';

describe('ConfigurationImporter', () => {
  describe('when we don\'t pass in override config', () => {
    it('the configuration manager remains with defaults', async () => {
      await render(<ConfigurationImporter />);

      const configFile = require('fs').readFileSync('config/settings/app.json');
      const dataUrl = JSON.parse(configFile).apiBaseUrl;
      
      expect(ConfigurationManager.get().apiBaseUrl).toEqual(dataUrl);
  

    });
  });

  describe('when we pass in override config', () => {
    it('sets the configuration manager', async () => {
      await render(
        <ConfigurationImporter configurationSettings={{ 'apiBaseUrl': 'someurl' }}
        />
      );

      expect(ConfigurationManager.get().apiBaseUrl).toEqual('someurl');

    });
  });
});
