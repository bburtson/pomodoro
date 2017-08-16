"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/timer");
var CountDownTimer = (function () {
    function CountDownTimer(min) {
        this.min = min;
        //display
        this.milliseconds = 0;
        this.seconds = 0;
        this.minutes = min;
    }
    Object.defineProperty(CountDownTimer.prototype, "minutes", {
        get: function () { return this._minutes; },
        set: function (value) {
            this._minutes = value;
            this._milliseconds = (this._minutes * (1000 * 60));
        },
        enumerable: true,
        configurable: true
    });
    CountDownTimer.prototype.convertToTime = function () {
        this.milliseconds = Math.floor(this._milliseconds % 1000) / 10;
        this.seconds = Math.floor((this._milliseconds / 1000) % 60);
        this._minutes = Math.floor((this._milliseconds / (1000 * 60)) % 60);
    };
    CountDownTimer.prototype.start = function () {
        var _this = this;
        if (this._subscription == undefined) {
            this._subscription = Observable_1.Observable.timer(10, 10).subscribe(function () {
                _this._milliseconds -= 10;
                _this.convertToTime();
            });
        }
    };
    CountDownTimer.prototype.stop = function () {
        this._subscription.unsubscribe();
        this._subscription = undefined;
    };
    return CountDownTimer;
}());
exports.CountDownTimer = CountDownTimer;
//# sourceMappingURL=CountDownTimer.js.map