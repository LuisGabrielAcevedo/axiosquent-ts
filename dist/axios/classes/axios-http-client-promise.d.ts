import { HttpClientResponse } from '../interfaces/http-client-response';
import { AxiosPromise } from 'axios';
import { HttpClientPromise } from '../interfaces/http-client-promise';
import { Thenable } from '../interfaces/types';
export declare class AxiosHttpClientPromise implements HttpClientPromise {
    private axiosPromise;
    constructor(axiosPromise: AxiosPromise);
    then<U>(onFulfilled?: (value: HttpClientResponse) => (Thenable<U> | U), onRejected?: (error: any) => (Thenable<U> | U)): Promise<U>;
    catch<U>(onRejected?: (error: any) => (Thenable<U> | U)): Promise<U>;
}
