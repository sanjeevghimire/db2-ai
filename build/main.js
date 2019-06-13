(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">DB2 ML</a>\n<div class=\"container-fluid\">  \n</div>\n</nav>\n\n<div class=\"container\">\n    \n        <app-prediction></app-prediction> \n        <!-- <div class=\"col-sm-6\">\n          <h2>Flight Information</h2>\n          <app-prediction></app-prediction> \n        </div>\n        <div class=\"col-sm-6\">\n          <h2>Prediction Result</h2>           \n        </div> \n      </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prediction/prediction.component */ "./src/app/prediction/prediction.component.ts");
/* harmony import */ var _services_prediciton_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/prediciton.service */ "./src/app/services/prediciton.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_5__["PredictionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_services_prediciton_service__WEBPACK_IMPORTED_MODULE_6__["PredictionService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/flight-info.ts":
/*!***************************************!*\
  !*** ./src/app/models/flight-info.ts ***!
  \***************************************/
/*! exports provided: FlightInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightInfo", function() { return FlightInfo; });
var FlightInfo = /** @class */ (function () {
    // opCarrier: string;
    // tailNum: string;
    // manufacturer: string;
    // model: string;
    // origin: string;
    // originCityName: string;
    // dest: string;
    // destCityName: string;
    // month: number;
    // dayOfWeek: number;
    // depTimeBlk: string;
    function FlightInfo(opCarrier, tailNum, manufacturer, flightModel, origin, originCityName, dest, destinationCityName, month, dayOfWeek, depTimeBlk) {
        this.opCarrier = opCarrier;
        this.tailNum = tailNum;
        this.manufacturer = manufacturer;
        this.flightModel = flightModel;
        this.origin = origin;
        this.originCityName = originCityName;
        this.dest = dest;
        this.destinationCityName = destinationCityName;
        this.month = month;
        this.dayOfWeek = dayOfWeek;
        this.depTimeBlk = depTimeBlk;
    }
    return FlightInfo;
}());



/***/ }),

/***/ "./src/app/prediction/prediction.component.css":
/*!*****************************************************!*\
  !*** ./src/app/prediction/prediction.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/prediction/prediction.component.html":
/*!******************************************************!*\
  !*** ./src/app/prediction/prediction.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <h2>Flight Information</h2>\n    <div>\n      <form (ngSubmit)=\"onSubmit()\" #predictionForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"opCarrier\" class=\"control-label\">Carrier</label>\n          <input type=\"text\" required [(ngModel)]=\"model.opCarrier\" #opCarrier=\"ngModel\" class=\"form-control\"\n            id=\"opCarrier\" name=\"opCarrier\" placeholder=\"DL\">\n          <div [hidden]=\"opCarrier.valid || opCarrier.pristine\" class=\"alert alert-danger\">\n            Op Carrier is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"tailNum\" class=\"control-label\">Tail Number</label>\n          <input type=\"text\" required [(ngModel)]=\"model.tailNum\" #tailNum=\"ngModel\" class=\"form-control\" id=\"tailNum\"\n            name=\"tailNum\" placeholder=\"N717TW\">\n          <div [hidden]=\"tailNum.valid || tailNum.pristine\" class=\"alert alert-danger\">\n            Tail number is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"manufacturer\" class=\"control-label\">Manufacturer</label>\n          <input type=\"text\" required [(ngModel)]=\"model.manufacturer\" #manufacturer=\"ngModel\" class=\"form-control\"\n            id=\"manufacturer\" name=\"manufacturer\" placeholder=\"Boeing\">\n          <div [hidden]=\"manufacturer.valid || manufacturer.pristine\" class=\"alert alert-danger\">\n            Manufacturer is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"flightModel\" class=\"control-label\">Model</label>\n          <input type=\"text\" required [(ngModel)]=\"model.flightModel\" #flightModel=\"ngModel\" class=\"form-control\"\n            id=\"model\" name=\"flightModel\" placeholder=\"B757-2\">\n          <div [hidden]=\"flightModel.valid || flightModel.pristine\" class=\"alert alert-danger\">\n            Model is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"Origin\" class=\"control-label\">Origin</label>\n          <input type=\"text\" required [(ngModel)]=\"model.origin\" #origin=\"ngModel\" class=\"form-control\" id=\"origin\"\n            name=\"origin\" placeholder=\"BOS\">\n          <div [hidden]=\"origin.valid || origin.pristine\" class=\"alert alert-danger\">\n            Origin is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"originCityName\" class=\"control-label\">Origin City Name</label>\n          <input type=\"text\" required [(ngModel)]=\"model.originCityName\" #originCityName=\"ngModel\" class=\"form-control\"\n            id=\"originCityName\" name=\"originCityName\" placeholder=\"Boston, MA\">\n          <div [hidden]=\"originCityName.valid || originCityName.pristine\" class=\"alert alert-danger\">\n            Origin city name is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"dest\" class=\"control-label\">Destination</label>\n          <input type=\"text\" required [(ngModel)]=\"model.dest\" #dest=\"ngModel\" class=\"form-control\" id=\"dest\"\n            name=\"dest\" placeholder=\"SFO\">\n          <div [hidden]=\"dest.valid || dest.pristine\" class=\"alert alert-danger\">\n            Destination is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"destinationCityName\" class=\"control-label\">Destination City Name</label>\n          <input type=\"text\" required [(ngModel)]=\"model.destinationCityName\" #destinationCityName=\"ngModel\"\n            class=\"form-control\" id=\"destinationCityName\" name=\"destinationCityName\" placeholder=\"San Fransisco, CA\">\n          <div [hidden]=\"destinationCityName.valid || destinationCityName.pristine\" class=\"alert alert-danger\">\n            Destination city name is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"month\" class=\"control-label\">Month</label>\n          <select class=\"form-control\" id=\"month\" name=\"month\" required [(ngModel)]=\"model.month\" #month=\"ngModel\">\n            <option [ngValue]=\"mnth.code\" *ngFor=\"let mnth of months\">{{mnth.name}}</option>\n          </select>\n          <div [hidden]=\"month.valid || month.pristine\" class=\"alert alert-danger\">\n            Destination city name is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"dayOfWeek\" class=\"control-label\">Day of Week</label>\n          <select class=\"form-control\" id=\"dayOfWeek\" name=\"dayOfWeek\" required [(ngModel)]=\"model.dayOfWeek\"\n            #dayOfWeek=\"ngModel\">\n            <option [ngValue]=\"day.code\" *ngFor=\"let day of dayOfWeeks\">{{day.name}}</option>\n          </select>\n\n          <div [hidden]=\"dayOfWeek.valid || dayOfWeek.pristine\" class=\"alert alert-danger\">\n            Day of week is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"depTimeBlk\" class=\"control-label\">Departure Time Block</label>\n          <input type=\"text\" required [(ngModel)]=\"model.depTimeBlk\" #depTimeBlk=\"ngModel\" class=\"form-control\"\n            id=\"depTimeBlk\" name=\"depTimeBlk\" placeholder=\"1600-1659\">\n          <div [hidden]=\"depTimeBlk.valid || depTimeBlk.pristine\" class=\"alert alert-danger\">\n            Departure time block is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-primary\">Predict</button>&nbsp;&nbsp;\n          <!-- <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!predictionForm.form.valid\">Predict</button>&nbsp;&nbsp; -->\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"newFlightInfo(); predictionForm.reset()\">Reset</button>\n        </div>\n\n      </form>\n    </div>\n  </div>\n  <div class=\"col-sm-6\">\n    <h2>Prediction Result</h2>\n    <table *ngIf=\"predictionForm.submitted\" class=\"table\">\n      <thead class=\"thead-dark\">\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Source Delay</th>\n        <th scope=\"col\">Prediction</th>\n      </thead>\n      <span ng-show=\"isLoading === true\">\n          <i class=\"glyphicon glyphicon-refresh spinning\"></i>\n      </span>    \n      <tr *ngFor= \"let prediction of predictions\">\n        <td>{{prediction.ID}}</td>\n        <td>{{prediction.SOURCE_DELAY}}</td>\n        <td>{{prediction.SOURCE_PREDICT}}</td>\n      </tr>\n    \n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/prediction/prediction.component.ts":
/*!****************************************************!*\
  !*** ./src/app/prediction/prediction.component.ts ***!
  \****************************************************/
/*! exports provided: PredictionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionComponent", function() { return PredictionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_flight_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/flight-info */ "./src/app/models/flight-info.ts");
/* harmony import */ var _services_prediciton_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/prediciton.service */ "./src/app/services/prediciton.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PredictionComponent = /** @class */ (function () {
    function PredictionComponent(predictionService) {
        this.predictionService = predictionService;
        this.submitted = false;
        this.isLoading = true;
        this.months = [{
                name: 'January',
                code: '1'
            },
            {
                name: 'February',
                code: '2'
            },
            {
                name: 'March',
                code: '3'
            },
            {
                name: 'April',
                code: '4'
            },
            {
                name: 'May',
                code: '5'
            },
            {
                name: 'June',
                code: '6'
            },
            {
                name: 'July',
                code: '7'
            },
            {
                name: 'August',
                code: '8'
            },
            {
                name: 'September',
                code: '9'
            },
            {
                name: 'October',
                code: '10'
            },
            {
                name: 'November',
                code: '11'
            },
            {
                name: 'December',
                code: '12'
            }];
        this.dayOfWeeks = [{
                name: 'Sunday',
                code: '1'
            },
            {
                name: 'Monday',
                code: '2'
            },
            {
                name: 'Tuesday',
                code: '3'
            },
            {
                name: 'Wednesday',
                code: '4'
            },
            {
                name: 'Thursday',
                code: '5'
            },
            {
                name: 'Friday',
                code: '6'
            },
            {
                name: 'Saturday',
                code: '7'
            }];
    }
    PredictionComponent.prototype.ngOnInit = function () {
        this.model = new _models_flight_info__WEBPACK_IMPORTED_MODULE_1__["FlightInfo"]('', '', '', '', '', '', '', '', 0, 0, '');
    };
    PredictionComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('Getting predictions result.');
        // this.model = this.predictionForm.value;
        console.log(this.model);
        this.submitted = true;
        this.predictionService.predict(this.model).subscribe(function (predictions) {
            _this.isLoading = false;
            console.log('Predictions Result');
            console.log(predictions);
            _this.predictions = predictions;
        });
    };
    PredictionComponent.prototype.newFlightInfo = function () {
        console.log('Resetting..');
        this.model = new _models_flight_info__WEBPACK_IMPORTED_MODULE_1__["FlightInfo"]('', '', '', '', '', '', '', '', 0, 0, '');
    };
    PredictionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prediction',
            template: __webpack_require__(/*! ./prediction.component.html */ "./src/app/prediction/prediction.component.html"),
            styles: [__webpack_require__(/*! ./prediction.component.css */ "./src/app/prediction/prediction.component.css")]
        }),
        __metadata("design:paramtypes", [_services_prediciton_service__WEBPACK_IMPORTED_MODULE_2__["PredictionService"]])
    ], PredictionComponent);
    return PredictionComponent;
}());



/***/ }),

/***/ "./src/app/services/prediciton.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/prediciton.service.ts ***!
  \************************************************/
/*! exports provided: PredictionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionService", function() { return PredictionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/*
 * Copyright 2019 IBM All Rights Reserved.
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PredictionService = /** @class */ (function () {
    function PredictionService(http) {
        this.http = http;
    }
    PredictionService.prototype.predict = function (flightInfo) {
        var payload = JSON.stringify(flightInfo);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
            })
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].predictionAPI, payload, httpOptions);
    };
    PredictionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PredictionService);
    return PredictionService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    predictionAPI: '/api/predict'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sanjeevghimire/Documents/projects/ibmcode/db2-proc/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map