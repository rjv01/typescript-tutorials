var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TakePhotos = /** @class */ (function () {
    function TakePhotos(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    ;
    return TakePhotos;
}());
var Instagram1 = /** @class */ (function (_super) {
    __extends(Instagram1, _super);
    function Instagram1(cameraMode, filter) {
        var _this = _super.call(this, cameraMode, filter) || this;
        _this.cameraMode = cameraMode;
        _this.filter = filter;
        return _this;
    }
    ;
    Instagram1.prototype.getSepia = function () {
        console.log("speia");
    };
    return Instagram1;
}(TakePhotos));
