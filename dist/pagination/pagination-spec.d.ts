import { QueryParam } from '../query/query-params';
export declare class PaginationSpec {
    page: number | null;
    protected perPage: number;
    protected queryParams: QueryParam[];
    constructor();
    getPaginationParameters(): QueryParam[];
    setPage(value: number): void;
    setPerPage(value: number): void;
}
