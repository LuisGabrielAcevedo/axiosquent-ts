export declare class UrlSpec {
    private url;
    private action;
    constructor(url: string, action?: string);
    getUrl(): string;
    getAction(): string | null;
}
