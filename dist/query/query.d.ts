import { PaginationSpec } from '../pagination/pagination-spec';
import { FilterSpec } from '../filter/filter-spec';
import { Option } from '../option/option';
import { SortSpec } from '../sort/sort-spec';
import { QueryParam } from './query-params';
import { UrlSpec } from '../url/url-spec';
export declare class Query {
    protected resource: string;
    protected pagination: PaginationSpec;
    protected include: string[];
    protected filters: FilterSpec[];
    protected andFilters: FilterSpec[];
    protected orFilters: FilterSpec[];
    protected options: Option[];
    protected sort: SortSpec[];
    protected url: UrlSpec | null;
    constructor(resource: string);
    addFilter: (filter: FilterSpec) => void;
    addAndFilter: (filter: FilterSpec) => void;
    addOrFilter: (filter: FilterSpec) => void;
    addSort(sort: SortSpec): void;
    addInclude(includeSpec: string): void;
    addOption(option: Option): void;
    addUrl(url: UrlSpec): void;
    setPaginationSpec(paginationSpec: PaginationSpec): void;
    protected addFilterParameters(searchParams: QueryParam[]): void;
    protected addOrFilterParameters(searchParams: QueryParam[]): void;
    protected addSortParameters(searchParams: QueryParam[]): void;
    protected addIncludeParameters(searchParams: QueryParam[]): void;
    getPaginationSpec(): PaginationSpec;
    protected addOptionsParameters(searchParams: QueryParam[]): void;
    protected addPaginationParameters(searchParams: QueryParam[]): void;
    protected resetUrl(resource: string): string;
    toString(id?: number): string;
}