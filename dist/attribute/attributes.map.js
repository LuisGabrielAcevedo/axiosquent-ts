"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AttributesMap = /** @class */ (function () {
    function AttributesMap() {
        this.data = {};
    }
    AttributesMap.prototype.get = function (key) {
        return this.data[key];
    };
    AttributesMap.prototype.set = function (key, value) {
        this.data[key] = value;
    };
    AttributesMap.prototype.toArray = function () {
        return this.data;
    };
    return AttributesMap;
}());
exports.AttributesMap = AttributesMap;
