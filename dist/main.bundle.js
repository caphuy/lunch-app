webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/AppSettings.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.API_ENDPOINT = 'http://localhost:9000/api';
    AppSettings.SOCKET_ENDPOINT = 'http://localhost:9000';
    return AppSettings;
}());
exports.AppSettings = AppSettings;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Wheel App';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_service_1 = __webpack_require__("./src/app/utils.service.ts");
var spin_service_1 = __webpack_require__("./src/app/service/spin.service.ts");
var user_service_1 = __webpack_require__("./src/app/service/user.service.ts");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var forms_2 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var wheel_component_1 = __webpack_require__("./src/app/wheel/wheel.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var welcome_component_1 = __webpack_require__("./src/app/welcome/welcome.component.ts");
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var ROUTES = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'wheel',
        component: wheel_component_1.WheelComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'welcome',
        component: welcome_component_1.WelcomeComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                wheel_component_1.WheelComponent,
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                welcome_component_1.WelcomeComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(ROUTES),
                forms_1.ReactiveFormsModule,
                forms_2.FormsModule
            ],
            providers: [spin_service_1.SpinService, utils_service_1.UtilsService, user_service_1.UserService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Lunch app</h1>\n    <form (ngSubmit)=\"onSubmit()\" >\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\">\n      </div>\n\n      <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" />\n      <button class=\"btn btn-success\">Register</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/service/user.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService) {
        this.userService = userService;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = console).log;
                        return [4 /*yield*/, this.userService.fbLogin()];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/service/spin.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var operators_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var SpinService = /** @class */ (function () {
    function SpinService(http) {
        this.http = http;
    }
    SpinService.prototype.spin = function () {
        return this.http.get('/api/spin').pipe(operators_1.map(function (res) { return res.json(); }));
    };
    SpinService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], SpinService);
    return SpinService;
}());
exports.SpinService = SpinService;


/***/ }),

/***/ "./src/app/service/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        FB.init({
            appId: '500315193719940',
            status: false,
            cookie: false,
            xfbml: false,
            version: 'v2.8'
        });
    }
    UserService.prototype.fbLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            FB.login(function (result) {
                if (result.authResponse) {
                    resolve(result.authResponse.accessToken);
                    return _this.http.post('http://localhost:9000/auth/facebook', { access_token: result.authResponse.accessToken })
                        .toPromise()
                        .then(function (response) {
                        var token = response.headers.get('x-auth-token');
                        if (token) {
                            localStorage.setItem('id_token', token);
                        }
                        resolve(response.json());
                    })
                        .catch(function () { return reject(); });
                    // return result.authResponse.accessToken;
                }
                else {
                    reject();
                }
            }, { scope: 'public_profile,email' });
        });
    };
    UserService.prototype.isLoggedIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getCurrentUser().then(function (user) {
                resolve(true);
            })
                .catch(function () {
                reject(false);
            });
        });
    };
    UserService.prototype.getCurrentUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.http.get('http://localhost:9000/api/auth/me').toPromise().then(function (response) {
                resolve(response.json());
            })
                .catch(function () {
                reject();
            });
        });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "./src/app/utils.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    UtilsService.prototype.convertRgbToRgbA = function (rgb, alpha) {
        if (rgb.indexOf('rgba') === -1) {
            var openBracketInd = rgb.indexOf('(');
            var closeBraketInd = rgb.indexOf(')');
            var rgba = 'rgba' + rgb.substring(openBracketInd, closeBraketInd) + ', ' + alpha + ')';
            return rgba;
        }
        return rgb;
    };
    UtilsService.prototype.convertRgbAToRgb = function (rgba) {
        if (rgba.indexOf('rgba') !== -1) {
            var openBracketInd = rgba.indexOf('(');
            var closeBraketInd = rgba.indexOf(')');
            var paramsString = rgba.substring(openBracketInd + 1, closeBraketInd);
            var params = paramsString.split(', ');
            var rgb = 'rgb(' + params[0] + ', ' + params[1] + ', ' + params[2] + ')';
            return rgb;
        }
        return rgba;
    };
    UtilsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], UtilsService);
    return UtilsService;
}());
exports.UtilsService = UtilsService;


/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  welcome works!\n</p>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            selector: 'app-welcome',
            template: __webpack_require__("./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;


/***/ }),

/***/ "./src/app/wheel/wheel.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n"

/***/ }),

/***/ "./src/app/wheel/wheel.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"canvasContainer\">\n  <canvas id=\"canvas\" width=\"300\" height=\"300\" #canvas>\n    Canvas not support, use other browser\n  </canvas>\n\n  <button (click)=\"changeColor()\">Change color</button>\n  <button (click)=\"addSegment()\">Add segment</button>\n  <button (click)=\"deleteSegment()\">Delete segment</button>\n  <button (click)=\"startSpin()\">Spin</button>\n  <button (click)=\"resetSpin()\">Reset</button>\n\n  <form>\n    <input type=\"color\" name=\"favcolor\" value=\"#ff0000\">\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/wheel/wheel.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppSettings_1 = __webpack_require__("./src/app/AppSettings.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var spin_service_1 = __webpack_require__("./src/app/service/spin.service.ts");
var utils_service_1 = __webpack_require__("./src/app/utils.service.ts");
var io = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
var WheelComponent = /** @class */ (function () {
    function WheelComponent(spinService, utilsService) {
        this.spinService = spinService;
        this.utilsService = utilsService;
        this.socket = io(AppSettings_1.AppSettings.SOCKET_ENDPOINT);
        this.socket.on('hello', function (data) {
            console.log(data);
        });
    }
    WheelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = 'Wheel';
        this.myWheel = new Winwheel({
            'canvasId': 'canvas',
            'numSegments': 8,
            'outerRadius': 110,
            'textFontSize': 15,
            'pointerAngle': 0,
            'drawText': true,
            'segments': [
                { 'fillStyle': 'rgb(255, 255, 102)', 'text': 'Prize 1', 'textFillStyle': 'rgb(0, 0, 0)' },
                { 'fillStyle': 'rgb(0, 204, 153)', 'text': 'Prize 2', 'textFillStyle': 'rgb(0, 0, 0)' },
                { 'fillStyle': 'rgb(0, 153, 255)', 'text': 'Prize 3', 'textFillStyle': 'rgb(0, 0, 0)' },
                { 'fillStyle': 'rgb(255, 102, 102)', 'text': 'Prize 4', 'textFillStyle': 'rgb(0, 0, 0)' },
                { 'fillStyle': 'rgb(255, 255, 102)', 'text': 'Prize 5', 'textFillStyle': 'rgb(0, 0, 0)' },
                { 'fillStyle': 'rgb(0, 204, 153)', 'text': 'Prize 6', 'textFillStyle': 'rgb(0, 0, 0)' },
                { 'fillStyle': 'rgb(0, 153, 255)', 'text': 'Prize 7', 'textFillStyle': 'rgb(0, 0, 0)' },
                { 'fillStyle': 'rgb(255, 102, 102)', 'text': 'Prize 8', 'textFillStyle': 'rgb(0, 0, 0)' }
            ],
            'animation': {
                'type': 'spinToStop',
                'duration': 5,
                'spins': 8,
            }
        });
        // this.drawTriangle();
        this.canvas.nativeElement.onclick = function (e) {
            var clickedSegment = _this.myWheel.getSegmentAt(e.clientX, e.clientY);
            if (clickedSegment) {
                console.log(clickedSegment);
            }
        };
        this.canvas.nativeElement.onmousemove = function (e) {
            var onMovingSegment = _this.myWheel.getSegmentAt(e.clientX, e.clientY);
            if (onMovingSegment !== _this.onMoveSegment) {
                _this.resetColour();
                _this.onMoveSegment = onMovingSegment;
                if (_this.onMoveSegment !== null) {
                    _this.onMoveSegment.fillStyle = _this.utilsService.convertRgbToRgbA(_this.onMoveSegment.fillStyle, 0.5);
                    _this.onMoveSegment.textFillStyle = _this.utilsService.convertRgbToRgbA(_this.onMoveSegment.textFillStyle, 0.5);
                    _this.myWheel.draw();
                }
            }
        };
    };
    WheelComponent.prototype.resetColour = function () {
        if (this.onMoveSegment !== void (0) && this.onMoveSegment !== null) {
            this.onMoveSegment.fillStyle = this.utilsService.convertRgbAToRgb(this.onMoveSegment.fillStyle);
            this.onMoveSegment.textFillStyle = this.utilsService.convertRgbAToRgb(this.onMoveSegment.textFillStyle);
            this.myWheel.draw();
        }
    };
    WheelComponent.prototype.changeColor = function () {
        var temp = this.myWheel.segments[1].fillStyle;
        this.myWheel.segments[1].fillStyle = this.myWheel.segments[2].fillStyle;
        this.myWheel.segments[2].fillStyle = this.myWheel.segments[3].fillStyle;
        this.myWheel.segments[3].fillStyle = this.myWheel.segments[4].fillStyle;
        this.myWheel.segments[4].fillStyle = temp;
        this.myWheel.draw();
    };
    WheelComponent.prototype.addSegment = function () {
        var date = new Date();
        this.myWheel.addSegment({
            'text': date.getMinutes() + ':' + date.getSeconds(),
            'fillStyle': 'aqua'
        }, 1);
        this.myWheel.draw();
    };
    WheelComponent.prototype.deleteSegment = function () {
        this.myWheel.deleteSegment();
        this.myWheel.draw();
    };
    WheelComponent.prototype.startSpin = function () {
        var _this = this;
        this.spinService.spin().subscribe(function (data) {
            var stopAt = data.won;
            _this.myWheel.animation.stopAngle = stopAt;
            _this.myWheel.startAnimation();
        });
    };
    WheelComponent.prototype.resetSpin = function () {
        this.resetColour();
        // this.myWheel.stopAnimation(false);
        // this.myWheel.rotationAngle = 0;
        // this.myWheel.draw();
    };
    // alertPrize() {
    //   // Call getIndicatedSegment() function to return pointer to the segment pointed to on wheel.
    //   const winningSegment = this.myWheel.getIndicatedSegment();
    //   // Basic alert of the segment text which is the prize name.
    //   alert('You have won ' + winningSegment.id + '!');
    // }
    WheelComponent.prototype.drawTriangle = function () {
        // Get the canvas context the wheel uses.
        var ctx = this.myWheel.ctx;
        ctx.strokeStyle = 'navy'; // Set line colour.
        ctx.fillStyle = 'aqua'; // Set fill colour.
        ctx.lineWidth = 2;
        ctx.beginPath(); // Begin path.
        ctx.moveTo(170, 5); // Move to initial position.
        ctx.lineTo(230, 5); // Draw lines to make the shape.
        ctx.lineTo(200, 40);
        ctx.lineTo(171, 5);
        ctx.stroke(); // Complete the path by stroking (draw lines).
        ctx.fill(); // Then fill.
    };
    __decorate([
        core_1.ViewChild('canvas'),
        __metadata("design:type", core_1.ElementRef)
    ], WheelComponent.prototype, "canvas", void 0);
    WheelComponent = __decorate([
        core_1.Component({
            selector: 'app-wheel',
            template: __webpack_require__("./src/app/wheel/wheel.component.html"),
            styles: [__webpack_require__("./src/app/wheel/wheel.component.css")]
        }),
        __metadata("design:paramtypes", [spin_service_1.SpinService, utils_service_1.UtilsService])
    ], WheelComponent);
    return WheelComponent;
}());
exports.WheelComponent = WheelComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map