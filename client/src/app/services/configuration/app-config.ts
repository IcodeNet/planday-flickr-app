import axios from 'axios';

// This should match the schema in app.json
export class AppConfig {
  /** The Api URL used to get the data from. */
  apiBaseUrl = null;
  
  /** The timeout in millsecs to wait for a server response. */
  timeout = 2500;
  
}

export const GetConfig = async (): Promise<AppConfig> => {
  // @ts-ignore
  const configPath = WEBPACK_DEFINED_CONFIGURATION.configPath;
  const response = await axios.get(configPath);

  return response.data;
};
