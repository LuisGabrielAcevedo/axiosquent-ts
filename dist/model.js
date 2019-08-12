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
var axios_http_client_1 = require("./axios-http-client");
var attributes_map_1 = require("./attribute/attributes.map");
var builder_1 = require("./builder");
var Model = /** @class */ (function () {
    function Model() {
        var _this = this;
        this.getResource = function () { return _this.resource; };
        this.getApiId = function () { return _this.id; };
        this.aspects = function () { return __awaiter(_this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Model.httpClient.get(this.getResource() + "/aspects")];
                    case 1:
                        resp = _a.sent();
                        return [2 /*return*/, resp.getData()];
                }
            });
        }); };
        this.attributes = new attributes_map_1.AttributesMap();
        this.base_url = this.baseUrl();
        if (!Model.httpClient) {
            Model.httpClient = new axios_http_client_1.AxiosHttpClient();
        }
        this.initHttpClient();
    }
    Model.getHttpClient = function () {
        return this.httpClient;
    };
    Model.all = function (page, perPage) {
        return new builder_1.Builder(this).all(page, perPage);
    };
    Model.find = function (id) {
        return new builder_1.Builder(this).find(id);
    };
    Model.where = function (attribute, value) {
        return new builder_1.Builder(this).where(attribute, value);
    };
    Model.andWhere = function (attribute, value) {
        return new builder_1.Builder(this).andWhere(attribute, value);
    };
    Model.orWhere = function (attribute, value, type) {
        return new builder_1.Builder(this).orWhere(attribute, value, type);
    };
    Model.orderBy = function (attribute, direction) {
        return new builder_1.Builder(this).orderBy(attribute, direction);
    };
    Model.with = function (attribute) {
        return new builder_1.Builder(this).with(attribute);
    };
    Model.option = function (queryParameter, value) {
        return new builder_1.Builder(this).option(queryParameter, value);
    };
    Model.setUrl = function (url, action) {
        return new builder_1.Builder(this).setUrl(url, action);
    };
    Model.header = function (name, value) {
        return new builder_1.Builder(this).header(name, value);
    };
    Model.prototype.initHttpClient = function () {
        Model.httpClient.setBaseUrl(this.baseUrl());
        Model.httpClient.setHeaders(this.headers());
    };
    Model.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var payload, resp, _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        payload = this.attributes.toArray();
                        resp = void 0;
                        if (!this.id) return [3 /*break*/, 2];
                        return [4 /*yield*/, Model.httpClient.put(this.getResource() + ("/" + this.id), payload)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, Model.httpClient.post(this.getResource(), payload)];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        resp = _a;
                        return [2 /*return*/, resp.getData()];
                    case 5:
                        e_1 = _b.sent();
                        return [2 /*return*/, Promise.reject(e_1.response.data)];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Model.prototype.create = function (AxiosquentModel) {
        this.id = AxiosquentModel.id ? AxiosquentModel.id : undefined;
        for (var key in AxiosquentModel) {
            this.setAttribute(key, AxiosquentModel[key]);
        }
    };
    Model.prototype.destroy = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (id) {
                            this.id = id;
                        }
                        if (!this.id) {
                            throw new Error('Cannot delete a model with no ID.');
                        }
                        return [4 /*yield*/, Model.httpClient.delete(this.getResource() + ("/" + this.id))];
                    case 1:
                        resp = _a.sent();
                        return [2 /*return*/, resp.getData()];
                    case 2:
                        e_2 = _a.sent();
                        return [2 /*return*/, Promise.reject(e_2.response.data)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Model.prototype.setAttribute = function (attributeName, value) {
        this.attributes.set(attributeName, value);
    };
    return Model;
}());
exports.Model = Model;
