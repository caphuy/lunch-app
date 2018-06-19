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
var angular2_jwt_1 = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
var utils_service_1 = __webpack_require__("./src/app/util/utils.service.ts");
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
var anonymous_guard_1 = __webpack_require__("./src/app/guard/anonymous-guard.ts");
var auth_guard_1 = __webpack_require__("./src/app/guard/auth-guard.ts");
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
        component: welcome_component_1.WelcomeComponent,
        canActivate: [anonymous_guard_1.AnonymousGuard]
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
];
function getAuthHttp(http, options) {
    return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig({
        headerName: 'x-auth-token',
        noTokenScheme: true,
        noJwtError: true,
        globalHeaders: [{ 'Accept': 'application/json' }],
        tokenGetter: (function () { return localStorage.getItem('id_token'); }),
    }), http, options);
}
exports.getAuthHttp = getAuthHttp;
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
            providers: [
                {
                    provide: angular2_jwt_1.AuthHttp,
                    useFactory: getAuthHttp,
                    deps: [http_1.Http, http_1.RequestOptions]
                },
                auth_guard_1.AuthGuard,
                anonymous_guard_1.AnonymousGuard,
                spin_service_1.SpinService,
                utils_service_1.UtilsService,
                user_service_1.UserService,
            ],
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

/***/ "./src/app/guard/anonymous-guard.ts":
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
var user_service_1 = __webpack_require__("./src/app/service/user.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AnonymousGuard = /** @class */ (function () {
    function AnonymousGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AnonymousGuard.prototype.canActivate = function (route, state) {
        return this.checkLogin();
    };
    AnonymousGuard.prototype.checkLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.isLoggedIn().then(function () {
                _this.router.navigate(['/dashboard']);
                reject(false);
            })
                .catch(function () {
                resolve(true);
            });
        });
    };
    AnonymousGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], AnonymousGuard);
    return AnonymousGuard;
}());
exports.AnonymousGuard = AnonymousGuard;


/***/ }),

/***/ "./src/app/guard/auth-guard.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var user_service_1 = __webpack_require__("./src/app/service/user.service.ts");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.checkLogin();
    };
    AuthGuard.prototype.checkLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.isLoggedIn().then(function () {
                resolve(true);
            })
                .catch(function () {
                _this.router.navigate(['/welcome']);
                reject(false);
            });
        });
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  color: #b8bac5;\r\n}\r\n::-moz-placeholder { /* Firefox 19+ */\r\n  color: #b8bac5;\r\n}\r\n:-ms-input-placeholder { /* IE 10+ */\r\n  color: #b8bac5;\r\n}\r\n:-moz-placeholder { /* Firefox 18- */\r\n  color: #b8bac5;\r\n}\r\n#login-title {\r\n  margin: auto;\r\n  display: block;\r\n  text-align: center;\r\n  margin-bottom: 15px;\r\n}\r\n#login-form {\r\n  display: block;\r\n  margin: auto;\r\n  margin-bottom: 30px;\r\n  margin-top: 30px;\r\n  max-width: 400px;\r\n}\r\n/* #submit {\r\n  border-radius: 30px;\r\n  width: 80%;\r\n  background-color: #2d3445;\r\n  color: #4e5767;\r\n} */\r\n.login-input {\r\n  background-color: transparent;\r\n  border: 1px solid #6c757d;\r\n  border-radius: 6px;\r\n  height: 45px;\r\n  color: #6c757d;\r\n  display: block;\r\n  width: 89%;\r\n  padding-left: 10px;\r\n  margin: auto;\r\n  margin-bottom: 5px;\r\n\r\n}\r\n.login-input:focus {\r\n  color: transparent;\r\n  text-shadow: 0px 0px 0px #666;\r\n}\r\ntextarea:focus, input:focus{\r\n  outline: none;\r\n}\r\n.login-btn {\r\n  width: 89%;\r\n  display: block;\r\n  background-color: tomato;\r\n  color: cornsilk;\r\n  height: 40px;\r\n  border-radius: 6px;\r\n  margin: auto;\r\n  margin-top: 5px;\r\n  border: none;\r\n}\r\n.or {\r\n  margin: auto;\r\n  color: #6c757d;\r\n  width: 50px;\r\n  text-align: center;\r\n  display: block;\r\n  margin-top: 7px;\r\n  margin-bottom: 7px;\r\n}\r\n#icon-container {\r\n  margin: auto;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login-form\" class=\"col-sm-4\">\n  <form (ngSubmit)=\"onSubmit()\">\n    <input type=\"text\" [(ngModel)]=\"username\" class=\"login-input\" placeholder=\"username\" name=\"username\" id=\"username\" />\n    <input type=\"password\" class=\"login-input\" placeholder=\"password\" id=\"password\" />\n    <button class=\"login-btn\" id=\"submit\" type=\"submit\">Sign in</button>\n    <div class=\"or\">- or -</div>\n    <div id=\"icon-container\">\n      <a href=\"javascript:void(0);\" (click)=\"fbLogin()\">\n        <img src=\"../../assets/img/icon_facebook.png\" />\n      </a>\n      <a href=\"javascript:void(0);\" (click)=\"fbLogin()\">\n        <img src=\"../../assets/img/icon_google+.png\" />\n      </a>\n      <a href=\"javascript:void(0);\" (click)=\"fbLogin()\">\n        <img src=\"../../assets/img/icon_tweet.png\" />\n      </a>\n    </div>\n    <!-- <div>\n      <a href=\"javascript:void(0);\">\n        <span>Forget password?</span>\n      </a>\n      <a href=\"javascript:void(0);\">\n        <span>Go as guest</span>\n      </a>\n    </div> -->\n  </form>\n</div>\n"

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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/service/user.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.username = '';
        this.sendUsername = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.fbLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.userService.fbLogin().then(function (data) {
                    _this.router.navigate(['/dashboard']);
                }).catch(function (err) {
                    console.log(err);
                });
                return [2 /*return*/];
            });
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log('go login');
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
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
var angular2_jwt_1 = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var UserService = /** @class */ (function () {
    function UserService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        FB.init({
            appId: '500315193719940',
            status: false,
            cookie: false,
            xfbml: false,
            version: 'v2.8'
        });
    }
    /**
     * facebook login
     *
     */
    UserService.prototype.fbLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            FB.login(function (result) {
                if (result.authResponse) {
                    return _this.http.post('/auth/facebook', { access_token: result.authResponse.accessToken })
                        .toPromise()
                        .then(function (response) {
                        var token = response.headers.get('x-auth-token');
                        if (token) {
                            localStorage.setItem('id_token', token);
                        }
                        resolve(response.json());
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                }
                else {
                    reject();
                }
            }, { scope: 'public_profile,email' });
        });
    };
    /**
     * normal login
     *
     * @param username
     * @param password
     */
    UserService.prototype.login = function (username, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/api/signin', { username: username, password: password })
                .toPromise()
                .then(function (response) {
                var token = response.headers.get('x-auth-token');
                if (token) {
                    localStorage.setItem('id_token', token);
                }
                resolve(response.json());
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * check is logged in
     *
     */
    UserService.prototype.isLoggedIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getCurrentUser().then(function (data) {
                resolve(true);
            })
                .catch(function () {
                reject(false);
            });
        });
    };
    /**
     * get current user
     *
     */
    UserService.prototype.getCurrentUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.authHttp.get('/api/auth/me').toPromise().then(function (response) {
                resolve(true);
            })
                .catch(function (err) {
                reject(false);
            });
        });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, angular2_jwt_1.AuthHttp])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "./src/app/util/utils.service.ts":
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
var utils_service_1 = __webpack_require__("./src/app/util/utils.service.ts");
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