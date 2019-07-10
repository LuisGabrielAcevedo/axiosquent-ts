"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SortSpec = /** @class */ (function () {
    function SortSpec(attribute, positiveDirection) {
        if (positiveDirection === void 0) { positiveDirection = true; }
        this.attribute = attribute;
        this.positiveDirection = positiveDirection;
    }
    SortSpec.prototype.getAttribute = function () {
        return this.attribute;
    };
    SortSpec.prototype.getPositiveDirection = function () {
        return this.positiveDirection;
    };
    return SortSpec;
}());
exports.SortSpec = SortSpec;
