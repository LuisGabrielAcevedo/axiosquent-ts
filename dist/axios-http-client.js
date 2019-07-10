"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var axios_http_client_promise_1 = require("./axios/classes/axios-http-client-promise");
var AxiosHttpClient = /** @class */ (function () {
    function AxiosHttpClient(axiosInstance) {
        if (axiosInstance === null || axiosInstance === undefined) {
            axiosInstance = axios_1.default.create();
        }
        this.axiosInstance = axiosInstance;
    }
    AxiosHttpClient.prototype.setBaseUrl = function (baseUrl) {
        this.axiosInstance.defaults.baseURL = baseUrl;
        // this.axiosInstance.defaults.headers['Accept'] = 'application/json';
        // this.axiosInstance.defaults.headers['Content-Type'] = 'application/json';
        // this.axiosInstance.defaults.headers['Allow-Control-Allow-Origin'] = '*';
    };
    AxiosHttpClient.prototype.setHeaders = function (headers) {
        if (headers && Object.keys(headers).length) {
            for (var _i = 0, _a = Object.keys(headers); _i < _a.length; _i++) {
                var header = _a[_i];
                this.setHeader(header, headers[header]);
            }
        }
    };
    AxiosHttpClient.prototype.setHeader = function (name, value) {
        this.axiosInstance.defaults.headers[name] = value;
    };
    AxiosHttpClient.prototype.get = function (url) {
        return new axios_http_client_promise_1.AxiosHttpClientPromise(this.axiosInstance.get(url));
    };
    AxiosHttpClient.prototype.delete = function (url) {
        return new axios_http_client_promise_1.AxiosHttpClientPromise(this.axiosInstance.delete(url));
    };
    AxiosHttpClient.prototype.head = function (url) {
        return new axios_http_client_promise_1.AxiosHttpClientPromise(this.axiosInstance.head(url));
    };
    AxiosHttpClient.prototype.post = function (url, data) {
        return new axios_http_client_promise_1.AxiosHttpClientPromise(this.axiosInstance.post(url, data));
    };
    AxiosHttpClient.prototype.put = function (url, data) {
        return new axios_http_client_promise_1.AxiosHttpClientPromise(this.axiosInstance.put(url, data));
    };
    AxiosHttpClient.prototype.patch = function (url, data) {
        return new axios_http_client_promise_1.AxiosHttpClientPromise(this.axiosInstance.patch(url, data));
    };
    AxiosHttpClient.prototype.getImplementingClient = function () {
        return this.axiosInstance;
    };
    return AxiosHttpClient;
}());
exports.AxiosHttpClient = AxiosHttpClient;
