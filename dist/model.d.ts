import { HttpClient } from './axios/interfaces/http-client';
import { Builder } from './builder';
import { AxiosquentHeaders } from './interfaces/axiosquent-headers';
import { AxiosquentModel } from './interfaces/axiosquent-model';
export declare abstract class Model {
    constructor();
    private static httpClient;
    resource: string;
    private id;
    private attributes;
    base_url: string;
    static getHttpClient(): HttpClient;
    static all(page?: number, perPage?: number): Promise<any>;
    static find(id: number): Promise<any>;
    static where(attribute: string, value: string): Builder;
    static andWhere(attribute: string, value: string): Builder;
    static orWhere(attribute: string, value: string, type?: string): Builder;
    static orderBy(attribute: string, direction?: string): Builder;
    static with(attribute: any): Builder;
    static option(queryParameter: string, value: string): Builder;
    static setUrl(url: string, action?: string): Builder;
    static header(name: string, value: string): Builder;
    abstract baseUrl(): string;
    abstract headers(): AxiosquentHeaders;
    getResource: () => string;
    getApiId: () => number | undefined;
    aspects: () => Promise<any>;
    private initHttpClient;
    save(): Promise<any>;
    create(AxiosquentModel: AxiosquentModel): void;
    destroy(id?: number): Promise<any>;
    protected setAttribute(attributeName: string, value: any): void;
}
