import { AxiosInstance } from 'axios';
import { HttpClient } from './axios/interfaces/http-client';
import { HttpClientPromise } from './axios/interfaces/http-client-promise';
import { AxiosquentHeaders } from './interfaces/axiosquent-headers';
export declare class AxiosHttpClient implements HttpClient {
    private axiosInstance;
    constructor();
    setBaseUrl(baseUrl: string): void;
    setHeaders(headers?: AxiosquentHeaders): void;
    setHeader(name: string, value: string): void;
    get(url: string): HttpClientPromise;
    delete(url: string): HttpClientPromise;
    head(url: string): HttpClientPromise;
    post(url: string, data?: any): HttpClientPromise;
    put(url: string, data?: any): HttpClientPromise;
    patch(url: string, data?: any): HttpClientPromise;
    getImplementingClient(): AxiosInstance;
}
