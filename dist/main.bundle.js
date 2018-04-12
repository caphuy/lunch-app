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

module.exports = "<h1>\n  {{title}}\n</h1>\n<router-outlet></router-outlet>"

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
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var posts_component_1 = __webpack_require__("./src/app/posts/posts.component.ts");
var wheel_component_1 = __webpack_require__("./src/app/wheel/wheel.component.ts");
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
                wheel_component_1.WheelComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(ROUTES)
            ],
            providers: [],
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

/***/ "./src/app/wheel/wheel.component.css":
/***/ (function(module, exports) {

module.exports = "#canvasContainer {\r\n  position: relative;\r\n  width: 300px;\r\n}\r\n\r\n#canvas {\r\n  z-index: 1;\r\n}\r\n\r\n#prizePointer {\r\n  position: absolute;\r\n  left: 125px;\r\n  top: 10;\r\n  z-index: 999;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/wheel/wheel.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"canvasContainer\">\n  <img id=\"prizePointer\" src=\"https://i.imgur.com/wLzX7kR.png\" alt=\"V\" />\n  <canvas id=\"canvas\" width=\"300\" height=\"300\">\n    Canvas not support, use other browser\n  </canvas>\n\n  <button (click)=\"changeColor()\">Change color</button>\n  <button (click)=\"addSegment()\">Add segment</button>\n  <button (click)=\"deleteSegment()\">Delete segment</button>\n  <button (click)=\"startSpin()\">Spin</button>\n  <button (click)=\"resetSpin()\">Reset</button>\n</div>"

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
var WheelComponent = /** @class */ (function () {
    function WheelComponent() {
    }
    WheelComponent.prototype.ngOnInit = function () {
        this.title = 'Wheel';
        this.myWheel = new Winwheel({
            'canvasId': 'canvas',
            'numSegments': 8,
            'outerRadius': 110,
            'textFontSize': 15,
            'pointerAngle': 90,
            'segments': [
                { 'fillStyle': '#eae56f', 'text': 'Prize 1' },
                { 'fillStyle': '#89f26e', 'text': 'Prize 2' },
                { 'fillStyle': '#7de6ef', 'text': 'Prize 3' },
                { 'fillStyle': '#e7706f', 'text': 'Prize 4' },
                { 'fillStyle': '#eae56f', 'text': 'Prize 5' },
                { 'fillStyle': '#89f26e', 'text': 'Prize 6' },
                { 'fillStyle': '#7de6ef', 'text': 'Prize 7' },
                { 'fillStyle': '#e7706f', 'text': 'Prize 8' }
            ],
            'animation': {
                'type': 'spinToStop',
                'duration': 5,
                'spins': 8,
                'callbackFinished': this.alertPrize.bind(this),
            }
        });
        // this.drawTriangle();
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
        this.myWheel.stopAnimation(false);
        this.myWheel.rotationAngle = 0;
        this.myWheel.draw();
        this.myWheel.startAnimation();
    };
    WheelComponent.prototype.resetSpin = function () {
        this.myWheel.stopAnimation(false);
        this.myWheel.rotationAngle = 0;
        this.myWheel.draw();
    };
    WheelComponent.prototype.alertPrize = function () {
        // Call getIndicatedSegment() function to return pointer to the segment pointed to on wheel.
        var winningSegment = this.myWheel.getIndicatedSegment();
        // Basic alert of the segment text which is the prize name.
        alert('You have won ' + winningSegment.text + '!');
    };
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
    WheelComponent = __decorate([
        core_1.Component({
            selector: 'app-wheel',
            template: __webpack_require__("./src/app/wheel/wheel.component.html"),
            styles: [__webpack_require__("./src/app/wheel/wheel.component.css")]
        }),
        __metadata("design:paramtypes", [])
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