"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QueryParam = /** @class */ (function () {
    function QueryParam(name, value) {
        if (value === void 0) { value = null; }
        this._name = name;
        this._value = value;
    }
    Object.defineProperty(QueryParam.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryParam.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return QueryParam;
}());
exports.QueryParam = QueryParam;
