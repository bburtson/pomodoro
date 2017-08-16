webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/ClockModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClockModel; });
var ClockModel = (function () {
    function ClockModel(title, minutes) {
        this.title = title;
        this.minutes = minutes;
    }
    return ClockModel;
}());

//# sourceMappingURL=ClockModel.js.map

/***/ }),

/***/ "../../../../../src/app/CountDownTimer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_timer__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountDownTimer; });


var CountDownTimer = (function () {
    function CountDownTimer(min) {
        var _this = this;
        this.min = min;
        //display
        this.milliseconds = 0;
        this.seconds = 0;
        this.event = new Event('timerComplete');
        this.minutes = min;
        this.onTimerComplete(function () { return _this.stop(); });
    }
    Object.defineProperty(CountDownTimer.prototype, "minutes", {
        get: function () { return this._minutes; },
        set: function (value) {
            this._minutes = value;
            this._milliseconds = this._minutes * (1000 * 60);
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
            this._subscription = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].timer(10, 10).subscribe(function () {
                _this._milliseconds -= 10;
                _this.convertToTime();
                if (_this._milliseconds <= 0) {
                    document.dispatchEvent(_this.event);
                }
            });
        }
    };
    CountDownTimer.prototype.onTimerComplete = function (callBack) {
        document.addEventListener('timerComplete', function (e) { return callBack(); });
    };
    CountDownTimer.prototype.stop = function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
            this._subscription = undefined;
        }
    };
    return CountDownTimer;
}());

//# sourceMappingURL=CountDownTimer.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <br /><br />\r\n  <clock-component></clock-component>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Get your pomodoro on';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clock_component__ = __webpack_require__("../../../../../src/app/clock.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__clock_component__["a" /* ClockComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/clock.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".display-card {\r\n  box-shadow: 10px 10px 5px #888888;\r\n  /*background-color: #ffecec;*/\r\n  border-radius: 10px;\r\n}\r\n\r\n#timer-display {\r\n  background: url(\"http://www.clker.com/cliparts/f/s/L/a/q/1/tomato2-md.png\") no-repeat;\r\n  color: white;\r\n  background-size: 100% 200px;\r\n  padding-top: 90px;\r\n  padding-bottom: 95px;\r\n}\r\n\r\ninput[type=range] {\r\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\r\n  width: 100%; /* Specific width is required for Firefox. */\r\n  background: green; /* Otherwise white in Chrome */\r\n  height: 10px;\r\n  border-radius: 20px;\r\n}\r\n\r\n  input[type=range]::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n  }\r\n\r\n  input[type=range]:focus {\r\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\r\n  }\r\n\r\n  input[type=range]::-ms-track {\r\n    width: 100%;\r\n    cursor: pointer;\r\n    /* Hides the slider so custom styles can be added */\r\n    background: transparent;\r\n    border-color: transparent;\r\n    color: transparent;\r\n  }\r\n\r\n  input[type=range]::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    height: 40px;\r\n    width: 40px;\r\n    background: url('http://www.clker.com/cliparts/j/U/O/s/B/6/tomato.svg') no-repeat center center;\r\n    background-size: 36px 36px;\r\n    cursor: pointer;\r\n    margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */\r\n  }\r\n\r\n  /* All the same stuff for Firefox */\r\n  input[type=range]::-moz-range-thumb {\r\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n    height: 40px;\r\n    width: 40px;\r\n    background: url('http://www.clker.com/cliparts/j/U/O/s/B/6/tomato.svg') no-repeat center center;\r\n    background-size: 36px 36px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  /* All the same stuff for IE */\r\n  input[type=range]::-ms-thumb {\r\n    height: 40px;\r\n    width: 40px;\r\n    background: url('http://www.clker.com/cliparts/j/U/O/s/B/6/tomato.svg') no-repeat center center;\r\n    background-size: 36px 36px;\r\n    cursor: pointer;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/clock.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"col-xs-12\">\r\n    <div class=\"display-card col-xs-12 col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 col-xl-2 col-xl-offset-5 bg-success\">\r\n      <div *ngIf=\"!hasClockData\" class=\"col-xs-12\">\r\n        <h3 [innerText]=\"'Set minutes for ' + title\"></h3>\r\n        <div class=\"col-xs-10 col-xs-offset-1\">\r\n          <label for=\"minute-slider\" class=\"fa-2x\" [innerText]=\"minutes\"></label>\r\n          <br /><br />\r\n          <input id=\"minute-slider\" [(ngModel)]=\"minutes\" type=\"range\" min=\"1\" max=\"60\" />\r\n          <br /><br />\r\n        </div>\r\n        <br />\r\n        <div class=\"col-xs-12\">\r\n          <button (click)=\"addClock()\" class=\"btn btn-success\"><i class=\"fa fa-arrow-right\"></i></button>\r\n          <br /><br />\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"hasClockData\">\r\n        <h3>{{title}} timer</h3>\r\n        <div id=\"timer-display\" class=\"col-xs-8 col-xs-offset-2\">\r\n          <span class=\"fa-2x col-xs-2\" [innerText]=\"timer.minutes\"></span>\r\n          <span class=\"fa-2x col-xs-2\">&nbsp;:</span>\r\n          <span class=\"fa-2x col-xs-2\" [innerText]=\"timer.seconds\"></span>\r\n          <span class=\"fa-2x col-xs-2\">&nbsp;:</span>\r\n          <span class=\"fa-2x col-xs-2\" [innerText]=\"timer.milliseconds\"></span>\r\n        </div>\r\n        <div class=\"col-xs-12\">\r\n          <br /><br />\r\n          <button (click)=\"timer.start()\" class=\"btn btn-success\">Start</button>\r\n          <button (click)=\"timer.stop()\" class=\"btn btn-danger\">Stop</button>\r\n          <br /><br />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/clock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ClockModel__ = __webpack_require__("../../../../../src/app/ClockModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CountDownTimer__ = __webpack_require__("../../../../../src/app/CountDownTimer.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClockComponent = (function () {
    function ClockComponent() {
        this.DEFAULT_WORK_TITLE = 'Work';
        this.DEFAULT_BREAK_TITLE = 'Break';
        this.DEFAULT_WORK_MINUTES = 25;
        this.DEFAULT_BREAK_MINUTES = 5;
        this.userClocks = [];
        this.timer = new __WEBPACK_IMPORTED_MODULE_2__CountDownTimer__["a" /* CountDownTimer */](25);
        this.timerSound = new Audio('/assets/complete_alert.mp3');
    }
    ClockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setDefaults();
        //subscribe some  noise to be played when timer is complete
        this.timer.onTimerComplete(function () {
            _this.updateTimer();
            _this.timerSound.play();
        });
    };
    ClockComponent.prototype.updateTimer = function () {
        this.userClocks.shift();
        this.userClocks.length ? this.setActiveTimer() : this.setDefaults();
    };
    ClockComponent.prototype.setDefaults = function () {
        this.hasClockData = false;
        this.title = this.DEFAULT_WORK_TITLE;
        this.minutes = this.DEFAULT_WORK_MINUTES;
    };
    ClockComponent.prototype.addClock = function () {
        var newClock = new __WEBPACK_IMPORTED_MODULE_1__ClockModel__["a" /* ClockModel */](this.title, this.minutes);
        this.userClocks.push(newClock);
        this.title = this.DEFAULT_BREAK_TITLE;
        this.minutes = this.DEFAULT_BREAK_MINUTES;
        if (this.userClocks.length === 2) {
            this.hasClockData = true;
            this.setActiveTimer();
        }
    };
    ClockComponent.prototype.setActiveTimer = function () {
        this.title = this.userClocks[0].title;
        this.timer.minutes = this.userClocks[0].minutes;
    };
    return ClockComponent;
}());
ClockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'clock-component',
        template: __webpack_require__("../../../../../src/app/clock.component.html"),
        styles: [__webpack_require__("../../../../../src/app/clock.component.css")]
    })
], ClockComponent);

//# sourceMappingURL=clock.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map