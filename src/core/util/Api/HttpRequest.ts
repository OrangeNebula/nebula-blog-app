import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import Logger from '../Logger/Logger';
import HTTPException from './HttpException';

export enum Method {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE',
}

export default class HttpRequest<T = any> {
  private readonly headers: Record<string, string> = {};

  private readonly parameters: {key: string, value: any}[] = [];

  private body: Record<string, any> | null = null;

  constructor(
    private readonly method: Method,
    private readonly url: string,
  ) {
  }

  setJson = (): HttpRequest => {
    this.headers['Content-Type'] = 'application/json';
    return this;
  }

  setNocache = (): HttpRequest => {
    this.headers['pragma'] = 'no-cache';
    this.headers['cache-control'] = 'no-cache';
    return this;
  }

  setHeader = (key: string, value: string): HttpRequest => {
    this.headers[key] = value;
    return this;
  }

  setQuery = (key: string, value: any): HttpRequest => {
    this.parameters.push({
      key,
      value,
    });
    return this;
  }

  setBody = (body: object): HttpRequest => {
    this.body = body;
    return this;
  }

  invoke = async (): Promise<T> => {
    try {
      const request = this.buildRequest();
      this.printRequest();
      const response: AxiosResponse<T> = await axios(request);
      this.printResponse(response);

      return response.data;
    } catch (err) {
      throw this.parseError(err);
    }
  }

  private buildQuery(): string {
    return this.parameters
      .map((item) => `${item.key}=${item.value}`)
      .join('&');
  }

  private buildRequest(): AxiosRequestConfig {
    return {
      method: this.method,
      url: `${this.url}?${this.buildQuery()}`,
      data: this.body,
      headers: this.headers,
    };
  }

  private parseError = (e: AxiosError): HTTPException<T> => {
    const response = e.response;
    this.printResponse(response);
    return new HTTPException<T>(e.message, response?.status, response?.data);
  };

  private printRequest = () => {
    Logger.debug(`${this.method} ${this.url}:`, this.body);
  }

  private printResponse = (response?: AxiosResponse) => {
    Logger.error(`${this.method} ${this.url}:`, {
      status: response?.status,
      data: response?.data,
    });
  }

}