"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var filter_spec_1 = require("./filter-spec");
var ClassFilterSpec = /** @class */ (function (_super) {
    __extends(ClassFilterSpec, _super);
    function ClassFilterSpec(clazz, attribute, value) {
        var _this = _super.call(this, attribute, value) || this;
        _this.clazz = clazz;
        return _this;
    }
    ClassFilterSpec.prototype.getClass = function () {
        return this.clazz;
    };
    return ClassFilterSpec;
}(filter_spec_1.FilterSpec));
exports.ClassFilterSpec = ClassFilterSpec;
