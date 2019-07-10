"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_http_client_response_1 = require("../classes/axios-http-client-response");
var AxiosHttpClientPromise = /** @class */ (function () {
    function AxiosHttpClientPromise(axiosPromise) {
        this.axiosPromise = axiosPromise;
    }
    AxiosHttpClientPromise.prototype.then = function (onFulfilled, onRejected) {
        var wrappedOnFulfilled = onFulfilled !== undefined
            ?
                (function (axiosResponse) { return onFulfilled(new axios_http_client_response_1.AxiosHttpClientResponse(axiosResponse)); })
            :
                undefined;
        return this.axiosPromise.then(wrappedOnFulfilled, onRejected);
    };
    AxiosHttpClientPromise.prototype.catch = function (onRejected) {
        return this.axiosPromise.catch(onRejected);
    };
    return AxiosHttpClientPromise;
}());
exports.AxiosHttpClientPromise = AxiosHttpClientPromise;
