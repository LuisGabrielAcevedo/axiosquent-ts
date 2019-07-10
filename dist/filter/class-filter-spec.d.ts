import { FilterSpec } from './filter-spec';
export declare class ClassFilterSpec extends FilterSpec {
    private clazz;
    constructor(clazz: string, attribute: string, value: string);
    getClass(): string;
}
