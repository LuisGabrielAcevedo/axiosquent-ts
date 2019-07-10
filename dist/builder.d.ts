import { QueryMethods } from './query/query-methods';
import { Model } from './model';
import { SortDirection } from './sort/sort-directions';
import { HeaderSpec } from './header/header-spec';
export declare class Builder implements QueryMethods {
    protected modelType: typeof Model;
    protected headers: HeaderSpec[];
    private httpClient;
    private query;
    constructor(modelType: typeof Model, baseModelType?: string);
    all(page?: number, perPage?: number): Promise<any>;
    find(id: number): Promise<any>;
    where(attribute: string, value: string): Builder;
    andWhere(attribute: string, value: string): Builder;
    orWhere(attribute: string | string[], value: string, type?: string): Builder;
    orderBy(attribute: string, direction?: SortDirection | string): Builder;
    with(value: string | string[]): Builder;
    option(queryParameter: string, value: string): Builder;
    setUrl(url: string | string[], action?: string): Builder;
    header(name: string, value: string): Builder;
    private setHeaders;
    private initPaginationSpec;
    private getHttpClient;
}
