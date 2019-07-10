"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Option = /** @class */ (function () {
    function Option(parameter, value) {
        this.parameter = parameter;
        this.value = value;
    }
    Option.prototype.getParameter = function () {
        return this.parameter;
    };
    Option.prototype.getValue = function () {
        return this.value;
    };
    return Option;
}());
exports.Option = Option;
