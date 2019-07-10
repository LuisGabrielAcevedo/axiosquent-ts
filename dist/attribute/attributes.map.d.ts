export declare class AttributesMap<T> {
    protected data: {
        [key: string]: T;
    };
    constructor();
    get(key: string): T;
    set(key: string, value: T): void;
    toArray(): {
        [key: string]: T;
    };
}
