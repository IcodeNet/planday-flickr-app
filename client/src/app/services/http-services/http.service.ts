import axios, { AxiosError, AxiosPromise, AxiosRequestConfig } from 'axios';
import * as constants from './http.constants';
import ConfigurationManager from '../configuration/configuration-manager';
import { HttpResponseCodes } from './http-response-codes';

export enum promiseRejectReason {
  error,
  cancelled
}

export class HttpService {


  constructor(private readonly consoleLogErrors: boolean = true) {

    this.consoleLogErrors = consoleLogErrors;

    this.onError = (error: AxiosError, consoleLogErrors: boolean): Promise<never> => {
      if (error.isAxiosError && error.code === 'ECONNABORTED') {
        console.error(`A timeout happened on url ${error.config.url} based on config:`, error.config)
        return Promise.reject(error);
      }

      if (consoleLogErrors && error.response &&
        error.response.status !== HttpResponseCodes.NOT_FOUND &&
        error.response.status >= HttpResponseCodes.OK) {
        console.error('Request Failed:', error.config);
        // Request was made but server responded with something
        // other than 2xx
        console.error('Status:', error.response.status);
        console.error('Data:', error.response.data);
        console.error('Headers:', error.response.headers);
      }
      return Promise.reject(error);
    };
  }

  patch(options: AxiosRequestConfig): AxiosPromise {
    options = Object.assign({}, options, { method: 'PATCH' });
    return this.jsonRequest(options);
  }

  get(options: AxiosRequestConfig): AxiosPromise {
    options = Object.assign({}, options, { method: 'GET' });
    return this.jsonRequest(options);
  }

  post(options: AxiosRequestConfig): AxiosPromise {
    options = Object.assign({}, options, { method: 'POST' });
    return this.jsonRequest(options);
  }

  put(options: AxiosRequestConfig): AxiosPromise {
    options = Object.assign({}, options, { method: 'PUT' });
    return this.jsonRequest(options);
  }

  delete(options: AxiosRequestConfig): AxiosPromise {
    options = Object.assign({}, options, { method: 'DELETE' });
    return this.jsonRequest(options);
  }

  request(options: AxiosRequestConfig): AxiosPromise {
    const addBaseUrl = (requestConfig: AxiosRequestConfig): AxiosRequestConfig => {
      const config = ConfigurationManager.get();
      const urlConfig: AxiosRequestConfig = {
        baseURL: `${config.apiBaseUrl}`,
        withCredentials: false,
        headers: {
          'Accept': constants.jsonHttpType
        }
      };
      return Object.assign({}, requestConfig, urlConfig);
    };
    return axios.request(addBaseUrl(options))
      .catch((error) => this.onError(error, this.consoleLogErrors)); // keeps 'this' in the catch's separate scope
  }

  jsonRequest(options: AxiosRequestConfig): AxiosPromise {
    options = Object.assign({}, options, { headers: { 'Accept': constants.jsonHttpType } });
    const result = this.request(options);
    return result;
  }

  private readonly onError = (error: AxiosError, consoleLogErrors: boolean): Promise<never> => {
    if (
      consoleLogErrors &&
      error.response.status !== HttpResponseCodes.NOT_FOUND &&
      error.response.status >= HttpResponseCodes.OK
    ) {
      // tslint:disable:no-console
      console.error('Request Failed:', error.config);
      // Request was made but server responded with something other than 2xx
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);
      // tslint:enable:no-console
    }

    return Promise.reject(error);
  };
}
