"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var query_params_1 = require("./query-params");
var class_filter_spec_1 = require("../filter/class-filter-spec");
var Query = /** @class */ (function () {
    function Query(resource) {
        var _this = this;
        this.addFilter = function (filter) {
            _this.filters.push(filter);
        };
        this.addAndFilter = function (filter) {
            _this.andFilters.push(filter);
        };
        this.addOrFilter = function (filter) {
            _this.orFilters.push(filter);
        };
        this.resource = resource;
        this.include = [];
        this.filters = [];
        this.andFilters = [];
        this.orFilters = [];
        this.options = [];
        this.sort = [];
        this.url = null;
    }
    Query.prototype.addSort = function (sort) {
        this.sort.push(sort);
    };
    Query.prototype.addInclude = function (includeSpec) {
        this.include.push(includeSpec);
    };
    Query.prototype.addOption = function (option) {
        this.options.push(option);
    };
    Query.prototype.addUrl = function (url) {
        this.url = url;
    };
    Query.prototype.setPaginationSpec = function (paginationSpec) {
        this.pagination = paginationSpec;
    };
    Query.prototype.addFilterParameters = function (searchParams) {
        for (var _i = 0, _a = this.filters; _i < _a.length; _i++) {
            var f = _a[_i];
            if (f instanceof class_filter_spec_1.ClassFilterSpec) {
                var ff = f;
                searchParams.push(new query_params_1.QueryParam("filter[" + ff.getClass() + "][" + ff.getAttribute() + "]", ff.getValue()));
            }
            else {
                searchParams.push(new query_params_1.QueryParam("filter[" + f.getAttribute() + "]", f.getValue()));
            }
        }
    };
    Query.prototype.addOrFilterParameters = function (searchParams) {
        for (var _i = 0, _a = this.orFilters; _i < _a.length; _i++) {
            var f = _a[_i];
            if (f instanceof class_filter_spec_1.ClassFilterSpec) {
                var ff = f;
                searchParams.push(new query_params_1.QueryParam("q[" + ff.getClass() + "][" + ff.getAttribute() + "]", ff.getValue()));
            }
            else {
                searchParams.push(new query_params_1.QueryParam("q[" + f.getAttribute() + "]", f.getValue()));
            }
        }
    };
    Query.prototype.addSortParameters = function (searchParams) {
        if (this.sort.length > 0) {
            var p = '';
            for (var _i = 0, _a = this.sort; _i < _a.length; _i++) {
                var sortSpec = _a[_i];
                if (p) {
                    p += ',';
                }
                if (!sortSpec.getPositiveDirection()) {
                    p += '-';
                }
                p += sortSpec.getAttribute();
            }
            searchParams.push(new query_params_1.QueryParam('sort', p));
        }
    };
    Query.prototype.addIncludeParameters = function (searchParams) {
        if (this.include.length > 0) {
            var p = '';
            for (var _i = 0, _a = this.include; _i < _a.length; _i++) {
                var incl = _a[_i];
                if (p !== '') {
                    p += ',';
                }
                p += incl;
            }
            searchParams.push(new query_params_1.QueryParam('embed', p));
        }
    };
    Query.prototype.getPaginationSpec = function () {
        return this.pagination;
    };
    Query.prototype.addOptionsParameters = function (searchParams) {
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            searchParams.push(new query_params_1.QueryParam(option.getParameter(), option.getValue()));
        }
    };
    Query.prototype.addPaginationParameters = function (searchParams) {
        if (this.pagination.page) {
            for (var _i = 0, _a = this.pagination.getPaginationParameters(); _i < _a.length; _i++) {
                var param = _a[_i];
                searchParams.push(new query_params_1.QueryParam(param.name, param.value));
            }
        }
    };
    Query.prototype.resetUrl = function (resource) {
        var url = '';
        if (this.url) {
            url = this.url.getAction() === 'force'
                ? this.url.getUrl()
                : resource + "/" + this.url.getUrl();
        }
        else {
            url = resource;
        }
        return url;
    };
    Query.prototype.toString = function (id) {
        var url = this.resetUrl(this.resource);
        if (id) {
            url += "/" + id;
        }
        var searchParams = [];
        this.addFilterParameters(searchParams);
        this.addSortParameters(searchParams);
        this.addIncludeParameters(searchParams);
        this.addOptionsParameters(searchParams);
        this.addPaginationParameters(searchParams);
        this.addOrFilterParameters(searchParams);
        var paramString = '';
        for (var _i = 0, searchParams_1 = searchParams; _i < searchParams_1.length; _i++) {
            var searchParam = searchParams_1[_i];
            paramString += !paramString ? '?' : '&';
            paramString += encodeURIComponent(searchParam.name) + '=' + encodeURIComponent(searchParam.value);
        }
        return url + paramString;
    };
    return Query;
}());
exports.Query = Query;
