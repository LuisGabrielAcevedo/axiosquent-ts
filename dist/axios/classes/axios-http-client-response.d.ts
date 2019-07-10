import { AxiosResponse } from 'axios';
import { HttpClientResponse } from '../interfaces/http-client-response';
import { AxiosquentPagination } from '../../interfaces/axiosquent-pagination';
export declare class AxiosHttpClientResponse implements HttpClientResponse {
    private axiosResponse;
    constructor(axiosResponse: AxiosResponse);
    getData(): any;
    getPagination(): AxiosquentPagination | null;
    getUnderlying(): any;
}
