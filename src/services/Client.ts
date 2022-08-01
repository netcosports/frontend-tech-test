import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface IClient {
  findAll: <T>(path: string, params: AxiosRequestConfig) => Promise<T>;
  find: <T>(path: string, config: AxiosRequestConfig) => Promise<T>;
  create: <T>(path: string, data: unknown) => Promise<T>;
  update: <T>(path: string, data: unknown) => Promise<T>;
  delete: <T>(path: string) => Promise<T>;
}

class Client implements IClient {
  protected axios: AxiosInstance;

  constructor(baseUrl: string, xAccountKey: string) {
    this.axios = axios.create({
      baseURL: baseUrl,
      headers: {
        'X-Account-Key': xAccountKey,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Accept-Version': 'v6',
      },
    });
  }

  findAll<T>(path: string, params = {}): Promise<T> {
    return this.axios.get(path, { params }).then((res) => res.data);
  }

  find<T>(path: string, config: AxiosRequestConfig = {}): Promise<T> {
    return this.axios.get(path, config).then((res) => res.data);
  }

  create<T>(path: string, data: unknown, params = {}): Promise<T> {
    return this.axios.post(path, data, { params }).then((res) => res.data);
  }

  update<T>(path: string, data: unknown, params = {}): Promise<T> {
    return this.axios.put(path, data, { params }).then((res) => res.data);
  }

  delete<T>(path: string, params = {}): Promise<T> {
    return this.axios.delete(path, { params }).then((res) => res.data);
  }
}

export default Client;
