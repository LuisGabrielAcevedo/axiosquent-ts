"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UrlSpec = /** @class */ (function () {
    function UrlSpec(url, action) {
        this.url = url;
        this.action = action ? action : null;
    }
    UrlSpec.prototype.getUrl = function () {
        return this.url;
    };
    UrlSpec.prototype.getAction = function () {
        return this.action;
    };
    return UrlSpec;
}());
exports.UrlSpec = UrlSpec;
