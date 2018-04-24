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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"sidebar\" data-background-color=\"white\" data-active-color=\"danger\">\n    <app-sidebar-cmp></app-sidebar-cmp>\n  </div>\n  <div class=\"main-panel\">\n    <div class=\"content\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

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
var spin_service_1 = __webpack_require__("./src/app/spin.service.ts");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var posts_component_1 = __webpack_require__("./src/app/posts/posts.component.ts");
var wheel_component_1 = __webpack_require__("./src/app/wheel/wheel.component.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var sidebar_component_1 = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
var ROUTES = [
    {
        path: '',
        redirectTo: 'wheel',
        pathMatch: 'full'
    },
    {
        path: 'wheel',
        component: wheel_component_1.WheelComponent
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                posts_component_1.PostsComponent,
                wheel_component_1.WheelComponent,
                sidebar_component_1.SidebarComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(ROUTES)
            ],
            providers: [spin_service_1.SpinService, utils_service_1.UtilsService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/posts/posts.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  posts works!\n</p>\n"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
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
var PostsComponent = /** @class */ (function () {
    function PostsComponent() {
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'app-posts',
            template: __webpack_require__("./src/app/posts/posts.component.html"),
            styles: [__webpack_require__("./src/app/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-wrapper\">\n  <div class=\"logo\">\n    Lunch App\n  </div>\n  <ul class=\"nav\">\n    <li *ngIf=\"isNotMobileMenu()\">\n      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n        <i class=\"ti-panel\"></i>\n        <p>Stats</p>\n      </a>\n    </li>\n    <li class=\"dropdown\" *ngIf=\"isNotMobileMenu()\">\n      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n        <i class=\"ti-bell\"></i>\n        <p class=\"notification\">5</p>\n        <p>Notifications</p>\n        <b class=\"caret\"></b>\n      </a>\n      <ul class=\"dropdown-menu\">\n        <li>\n          <a href=\"#\">Notification 1</a>\n        </li>\n        <li>\n          <a href=\"#\">Notification 2</a>\n        </li>\n        <li>\n          <a href=\"#\">Notification 3</a>\n        </li>\n        <li>\n          <a href=\"#\">Notification 4</a>\n        </li>\n        <li>\n          <a href=\"#\">Another notification</a>\n        </li>\n      </ul>\n    </li>\n    <li *ngIf=\"isNotMobileMenu()\">\n      <a href=\"#\">\n        <i class=\"ti-settings\"></i>\n        <p>Settings</p>\n      </a>\n    </li>\n    <li class=\"divider\" *ngIf=\"isNotMobileMenu()\"></li>\n    <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n      <a [routerLink]=\"[menuItem.path]\">\n        <i class=\"{{menuItem.icon}}\"></i>\n        <p>{{menuItem.title}}</p>\n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
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
exports.ROUTES = [
    { path: 'dashboard', title: 'Dashboard', icon: 'ti-panel', class: '' },
    { path: 'user', title: 'User Profile', icon: 'ti-user', class: '' },
    { path: 'table', title: 'Table List', icon: 'ti-view-list-alt', class: '' },
    { path: 'typography', title: 'Typography', icon: 'ti-text', class: '' },
    { path: 'icons', title: 'Icons', icon: 'ti-pencil-alt2', class: '' },
    { path: 'maps', title: 'Maps', icon: 'ti-map', class: '' },
    { path: 'notifications', title: 'Notifications', icon: 'ti-bell', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO', icon: 'ti-export', class: 'active-pro' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = exports.ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'app-sidebar-cmp',
            template: __webpack_require__("./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;


/***/ }),

/***/ "./src/app/spin.service.ts":
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

/***/ "./src/app/wheel/wheel.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n"

/***/ }),

/***/ "./src/app/wheel/wheel.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"canvasContainer\">\n  <canvas id=\"canvas\" width=\"300\" height=\"300\" #canvas>\n    Canvas not support, use other browser\n  </canvas>\n\n  <button (click)=\"changeColor()\">Change color</button>\n  <button (click)=\"addSegment()\">Add segment</button>\n  <button (click)=\"deleteSegment()\">Delete segment</button>\n  <button (click)=\"startSpin()\">Spin</button>\n  <button (click)=\"resetSpin()\">Reset</button>\n</div>"

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var spin_service_1 = __webpack_require__("./src/app/spin.service.ts");
var utils_service_1 = __webpack_require__("./src/app/utils.service.ts");
var WheelComponent = /** @class */ (function () {
    function WheelComponent(spinService, utilsService) {
        this.spinService = spinService;
        this.utilsService = utilsService;
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


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map