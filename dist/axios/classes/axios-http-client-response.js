"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AxiosHttpClientResponse = /** @class */ (function () {
    function AxiosHttpClientResponse(axiosResponse) {
        this.axiosResponse = axiosResponse;
    }
    AxiosHttpClientResponse.prototype.getData = function () {
        return this.axiosResponse.data.data ? this.axiosResponse.data.data : this.axiosResponse.data;
    };
    AxiosHttpClientResponse.prototype.getPagination = function () {
        var headers = this.axiosResponse.headers;
        var pagination = {};
        if (headers['x-current-page']) {
            pagination.current_page = +headers['x-current-page'];
        }
        if (headers['x-per-page']) {
            pagination.per_page = +headers['x-per-page'];
        }
        if (headers['x-prev-page']) {
            pagination.prev_page = +headers['x-prev-page'];
        }
        if (headers['x-total-count']) {
            pagination.total_count = +headers['x-total-count'];
        }
        if (headers['x-total-pages']) {
            pagination.total_pages = +headers['x-total-pages'];
        }
        return Object.keys(pagination).length ? pagination : null;
    };
    AxiosHttpClientResponse.prototype.getUnderlying = function () {
        return this.axiosResponse;
    };
    return AxiosHttpClientResponse;
}());
exports.AxiosHttpClientResponse = AxiosHttpClientResponse;
