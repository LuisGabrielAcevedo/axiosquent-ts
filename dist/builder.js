"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var query_1 = require("./query/query");
var filter_spec_1 = require("./filter/filter-spec");
var sort_directions_1 = require("./sort/sort-directions");
var sort_spec_1 = require("./sort/sort-spec");
var option_1 = require("./option/option");
var pagination_spec_1 = require("./pagination/pagination-spec");
var url_spec_1 = require("./url/url-spec");
var header_spec_1 = require("./header/header-spec");
var Builder = /** @class */ (function () {
    function Builder(modelType, baseModelType) {
        this.modelType = modelType;
        this.headers = [];
        var modelInstance = (new modelType());
        baseModelType = baseModelType ? baseModelType : modelInstance.getResource();
        this.query = new query_1.Query(baseModelType);
        this.httpClient = modelType.getHttpClient();
        this.initPaginationSpec();
    }
    Builder.prototype.all = function (page, perPage) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setHeaders();
                        if (page) {
                            this.query.getPaginationSpec().setPage(page);
                        }
                        if (perPage) {
                            this.query.getPaginationSpec().setPerPage(perPage);
                        }
                        return [4 /*yield*/, this.getHttpClient().get(this.query.toString())];
                    case 1:
                        resp = _a.sent();
                        data = {
                            data: resp.getData()
                        };
                        if (resp.getPagination()) {
                            data.pagination = resp.getPagination();
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Builder.prototype.find = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setHeaders();
                        return [4 /*yield*/, this.getHttpClient().get(this.query.toString(id))];
                    case 1:
                        resp = _a.sent();
                        return [2 /*return*/, resp.getData()];
                }
            });
        });
    };
    Builder.prototype.where = function (attribute, value) {
        this.query.addFilter(new filter_spec_1.FilterSpec(attribute, value));
        return this;
    };
    Builder.prototype.andWhere = function (attribute, value) {
        this.query.addAndFilter(new filter_spec_1.FilterSpec(attribute, value));
        return this;
    };
    Builder.prototype.orWhere = function (attribute, value, type) {
        var ats = '';
        if (typeof attribute === 'string') {
            ats = attribute;
            if (type) {
                ats += "_" + type;
            }
            this.query.addOrFilter(new filter_spec_1.FilterSpec(ats, value));
        }
        else if (Array.isArray(attribute)) {
            for (var _i = 0, attribute_1 = attribute; _i < attribute_1.length; _i++) {
                var a = attribute_1[_i];
                ats += !ats ? a : "_or_" + a;
            }
            if (type) {
                ats += "_" + type;
            }
            this.query.addOrFilter(new filter_spec_1.FilterSpec(ats, value));
        }
        else {
            throw new Error('The argument for \'with\' must be a string or an array of strings.');
        }
        return this;
    };
    Builder.prototype.orderBy = function (attribute, direction) {
        if (typeof direction === 'undefined' || !direction) {
            direction = sort_directions_1.SortDirection.ASC;
        }
        else if (typeof direction === 'string') {
            if (direction === 'asc') {
                direction = sort_directions_1.SortDirection.ASC;
            }
            else if (direction === 'desc') {
                direction = sort_directions_1.SortDirection.DESC;
            }
            else {
                throw new Error('The \'direction\' parameter must be string of value \'asc\' or \'desc\', ' +
                    'value \'' + direction + '\' invalid.');
            }
        }
        this.query.addSort(new sort_spec_1.SortSpec(attribute, direction === sort_directions_1.SortDirection.ASC));
        return this;
    };
    Builder.prototype.with = function (value) {
        if (typeof value === 'string') {
            this.query.addInclude(value);
        }
        else if (Array.isArray(value)) {
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var v = value_1[_i];
                this.query.addInclude(v);
            }
        }
        else {
            throw new Error('The argument for \'with\' must be a string or an array of strings.');
        }
        return this;
    };
    Builder.prototype.option = function (queryParameter, value) {
        this.query.addOption(new option_1.Option(queryParameter, value));
        return this;
    };
    Builder.prototype.setUrl = function (url, action) {
        if (typeof url === 'string') {
            this.query.addUrl(new url_spec_1.UrlSpec(url, action));
        }
        else if (Array.isArray(url)) {
            var urlFormatted = '';
            for (var _i = 0, url_1 = url; _i < url_1.length; _i++) {
                var u = url_1[_i];
                urlFormatted += !urlFormatted ? u : "/" + u;
            }
            this.query.addUrl(new url_spec_1.UrlSpec(urlFormatted, action));
        }
        return this;
    };
    Builder.prototype.header = function (name, value) {
        this.headers.push(new header_spec_1.HeaderSpec(name, value));
        return this;
    };
    Builder.prototype.setHeaders = function () {
        var _this = this;
        this.headers.forEach(function (header) {
            _this.getHttpClient().setHeader(header.getName(), header.getValue());
        });
    };
    Builder.prototype.initPaginationSpec = function () {
        this.query.setPaginationSpec(new pagination_spec_1.PaginationSpec);
    };
    Builder.prototype.getHttpClient = function () {
        return this.httpClient;
    };
    return Builder;
}());
exports.Builder = Builder;
