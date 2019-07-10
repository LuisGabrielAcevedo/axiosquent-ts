"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HeaderSpec = /** @class */ (function () {
    function HeaderSpec(name, value) {
        this.name = name;
        this.value = value;
    }
    HeaderSpec.prototype.getName = function () {
        return this.name;
    };
    HeaderSpec.prototype.getValue = function () {
        return this.value;
    };
    return HeaderSpec;
}());
exports.HeaderSpec = HeaderSpec;
