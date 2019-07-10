"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FilterSpec = /** @class */ (function () {
    function FilterSpec(attribute, value) {
        this.attribute = attribute;
        this.value = value;
    }
    FilterSpec.prototype.getAttribute = function () {
        return this.attribute;
    };
    FilterSpec.prototype.getValue = function () {
        return this.value;
    };
    return FilterSpec;
}());
exports.FilterSpec = FilterSpec;
