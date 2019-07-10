"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var query_params_1 = require("../query/query-params");
var PaginationSpec = /** @class */ (function () {
    function PaginationSpec() {
        this.page = null;
        this.perPage = 50;
        this.queryParams = [];
    }
    PaginationSpec.prototype.getPaginationParameters = function () {
        this.queryParams.push(new query_params_1.QueryParam('page', this.page));
        this.queryParams.push(new query_params_1.QueryParam('per_page', this.perPage));
        return this.queryParams;
    };
    PaginationSpec.prototype.setPage = function (value) {
        this.page = value;
    };
    PaginationSpec.prototype.setPerPage = function (value) {
        this.perPage = value;
    };
    return PaginationSpec;
}());
exports.PaginationSpec = PaginationSpec;
