(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n    <ul style=\"list-style-type:none\">\n        <li><button (click)=\"onClickMe('JamesCameron')\">James Cameron</button></li>\n        <li><button (click)=\"onClickMe('BrittanySpears')\">Brittany Spears</button></li>\n        <li><button (click)=\"onClickMe('AngelinaJolie')\">Angelina Jolie</button></li>\n        <li><button (click)=\"onClickMe('MickyMouse')\">Micky Mouse</button></li>\n        <li><button (click)=\"onClickMe('JustinBieber')\">Justin Bieber</button></li>\n        <li><button (click)=\"onClickMe('ErwinSchrodinger')\">Erwin Schrodinger</button></li>\n        <li><button (click)=\"onClickMe('MarkTwain')\">Mark Twain</button></li>\n        <li><button (click)=\"onClickMe('ThomasMann')\">Thomas Mann</button></li>\n        <li><button (click)=\"onClickMe('FranzKafka')\">Franz Kafka</button></li>\n        <li><button (click)=\"onClickMe('ElvisPresley')\">Elvis Presley</button></li>\n        <li><button (click)=\"onClickMe('KarlMarx')\">Karl Marx</button></li>\n        <li><button (click)=\"onClickMe('MichealJackson')\">Micheal Jackson</button></li>\n        <li><button (click)=\"onClickMe('CelineDion')\">Celine Dion</button></li>\n        <li><button (click)=\"onClickMe('AnnaKornikova')\">Anna Kornikova</button></li>\n        <li><button (click)=\"onClickMe('JamesBond')\">James Bond</button></li>\n        <li><button (click)=\"onClickMe('DiagoMaradonna')\">Diago Maradonna</button></li>\n        <li><button (click)=\"onClickMe('IsaacNewton')\">Isaac Newton</button></li>\n        <li><button (click)=\"onClickMe('SteveWozniak')\">Steve Wozniak</button></li>\n        <li><button (click)=\"onClickMe('KenThomson')\">Ken Thomson</button></li>\n        <li><button (click)=\"onClickMe('AlanTuring')\">Alan Turing</button></li>\n      </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-bar-friendbook\" *ngIf=\"isLoggedIn$ | async\">\n    <div class=\"nav-item-title\">\n        FriendBook\n    </div>\n    <input type=\"search\" value=\"search\" id=\"navbar-search\">    \n    <div class=\"nav-item-notification\">\n        <i (click)=\"onNotificationClicked()\"><img src=\"/icons/speech-bubble.svg\" width=\"50\" height=\"50\"></i> \n    </div>\n    <div class=\"nav-item-wall\">\n        <i (click)=\"onWallClicked()\"><img src=\"/icons/firewall.svg\" width=\"50\" height=\"50\"></i> \n    </div>\n    <div class=\"nav-item-newsfeed\">\n        <i (click)=\"onNewsFeedClicked()\"><img src=\"/icons/home.svg\" width=\"50\" height=\"50\"></i> \n    </div>\n </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/newpost/newpost.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/newpost/newpost.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<div class=\"panel\"> \n  <div class = \"post-heading\">\n    <div class = \"title\">\n          <img class = \"user-pic\" src=\"/images/{{imagePath}}.jpg\">            \n          <span class = \"post-user-name\">{{fullName}}</span> &nbsp; made a post\n    </div>\n    <div class = \"post-time\">{{timestamp | timeAgo}}</div>\n  </div>\n  <div class = \"post-description\">\n    <div class =\"post-text\">\n        <p>\n            {{text}}\n        </p>\n    </div>\n    <div class = \"stats\">\n          <i (click)=\"onAddLikes()\"><img src=\"/icons/like.svg\" width=\"20\" height=\"20\"> <span class = \"stats-likes\">{{likes}}</span> </i> \n          <i (click)=\"onAddDislikes()\"><img src=\"/icons/dislike.svg\" width=\"20\" height=\"20\"> <span class = \"stats-likes\">{{dislikes}}</span> </i> \n          <i (click)=\"onGetComments()\"><img src=\"/icons/comment.svg\" width=\"20\" height=\"20\"> <span class = \"stats-likes\">{{numComments}}</span> </i> \n    </div>\n    <input class = \"comment-input\" #commentbox (keyup.enter)=\"onEnterComment(commentbox.value)\" placeholder = \"Add a comment ...\" type = \"text\">\n  <div *ngIf=\"showComments\" class = \"panel-footer\">\n    <ul style = \"list-style-type:none\">\n        <li *ngFor=\"let cmnt of comments\" class = \"comment-list-element\">\n          <div class = \"comment-body\">\n              <img class = \"comment-user-pic\" src=\"/images/{{cmnt.imagePath}}.jpg\">\n              <span class = \"comment-user-name\">{{cmnt.fullName}}  &nbsp;  &nbsp; {{cmnt.timestamp | timeAgo}}</span>\n          </div>\n          <div class = \"comment-text\">{{cmnt.text}}</div>          \n        </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/newsfeed/newsfeed.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/newsfeed/newsfeed.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container-newsfeed\" >\n    <div class = \"container-posts\">\n        <div class = \"container-newposts\">\n            <ng-template np-host></ng-template>\n        </div>        \n        <div class = \"container-nomoreposts\" *ngIf=\"nomoreposts\">There are no more posts to show right now</div>        \n    </div>    \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/wall/wall.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/wall/wall.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container-wall\" >\n    <div class = \"container-wallposts\">\n        <div class = \"container-wallnewposts\">\n            <ng-template np-host></ng-template>\n        </div>        \n        <div class = \"container-wallnomoreposts\" *ngIf=\"wallnomoreposts\">There are no more posts to show right now</div>        \n    </div>    \n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/newsfeed/newsfeed.component */ "./src/app/components/newsfeed/newsfeed.component.ts");
/* harmony import */ var _components_wall_wall_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/wall/wall.component */ "./src/app/components/wall/wall.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _route_reuse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./route-reuse */ "./src/app/route-reuse.ts");







const routes = [
    { path: 'newsfeed', component: _components_newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_3__["NewsfeedComponent"] },
    { path: 'wall', component: _components_wall_wall_component__WEBPACK_IMPORTED_MODULE_4__["WallComponent"] },
    { path: 'index', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"], useClass: _route_reuse__WEBPACK_IMPORTED_MODULE_6__["CustomReuseStrategy"] }]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scroll.service */ "./src/app/services/scroll.service.ts");




let AppComponent = class AppComponent {
    constructor(renderer, router, scrSrv) {
        this.renderer = renderer;
        this.router = router;
        this.scrSrv = scrSrv;
        this.title = 'fbFrontEnd';
        this.renderer.setStyle(document.body, 'background-color', 'rgb(231, 235, 242)');
    }
    checkScroll() {
        let a = document.documentElement.scrollTop;
        let b = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let c = a / b * 100;
        if (c == 100) {
            if (this.router.url === '/newsfeed')
                this.scrSrv.sendScrollMessage('newsfeed');
            else if (this.router.url === '/wall')
                this.scrSrv.sendScrollMessage('wall');
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_3__["ScrollService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
], AppComponent.prototype, "checkScroll", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/newsfeed/newsfeed.component */ "./src/app/components/newsfeed/newsfeed.component.ts");
/* harmony import */ var _components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/newpost/newpost.component */ "./src/app/components/newpost/newpost.component.ts");
/* harmony import */ var _components_newpost_newpost_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/newpost/newpost.directive */ "./src/app/components/newpost/newpost.directive.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_wall_wall_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/wall/wall.component */ "./src/app/components/wall/wall.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_7__["NewsfeedComponent"],
            _components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_8__["NewpostComponent"],
            _components_newpost_newpost_directive__WEBPACK_IMPORTED_MODULE_9__["NPostDirective"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _components_wall_wall_component__WEBPACK_IMPORTED_MODULE_11__["WallComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
            time_ago_pipe__WEBPACK_IMPORTED_MODULE_4__["TimeAgoPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [_components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_8__["NewpostComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");





let LoginComponent = class LoginComponent {
    constructor(commService, router, authService) {
        this.commService = commService;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        localStorage.clear();
        localStorage.setItem('isLoggenIn', 'false');
    }
    onClickMe(usrname) {
        this.commService.sendCredential(usrname + "@foo.com", "hajmola").subscribe(res => {
            //localStorage.setItem("xAuthToken", );
            console.log(res);
            localStorage.setItem('isLoggenIn', 'true');
            localStorage.setItem("userImageID", res[0].userImageID);
            localStorage.setItem("currentUserName", res[0].currentUserName);
            this.authService.login();
            this.router.navigate(['/newsfeed']);
        }, error => {
            console.log(error);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-bar-friendbook\n{\n    text-align: center;\n    width: 100%;\n    top: 0;\n    position: fixed;\n    background-color: #f2f2f2;\n    z-index: 999;\n}\n\n.nav-item-title\n{\n    float: left;    \n    font-style: italic;\n    font-size: 50px;\n    font-family: \"Times New Roman\", Times, serif;\n    margin-right: 50px;\n    margin-left: 10px;\n}\n\n.nav-item-notification\n{\n    float: right;\n    margin-right: 10px;\n    margin-top: 2px;\n}\n\n.nav-item-newsfeed\n{\n    float: right;\n    margin-right: 10px;\n    margin-top: 2px;\n}\n\n.nav-item-wall\n{\n    float: right;\n    margin-right: 10px;\n    margin-top: 2px;\n}\n\ninput[type=search]\n{\n    float: left;\n    width: 40%;\n    height: 40px;\n    margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBOztJQUVJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1iYXItZnJpZW5kYm9va1xue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgei1pbmRleDogOTk5O1xufVxuXG4ubmF2LWl0ZW0tdGl0bGVcbntcbiAgICBmbG9hdDogbGVmdDsgICAgXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm5hdi1pdGVtLW5vdGlmaWNhdGlvblxue1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4ubmF2LWl0ZW0tbmV3c2ZlZWRcbntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLm5hdi1pdGVtLXdhbGxcbntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbn1cblxuaW5wdXRbdHlwZT1zZWFyY2hdXG57XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");





let NavbarComponent = class NavbarComponent {
    constructor(router, authService, commService) {
        this.router = router;
        this.authService = authService;
        this.commService = commService;
    }
    ngOnInit() {
        this.isLoggedIn$ = this.authService.isLoggedIn;
        console.log("NavBar" + this.isLoggedIn$);
    }
    onNewsFeedClicked() {
        this.router.navigate(['/newsfeed']);
    }
    onWallClicked() {
        this.router.navigate(['/wall']);
    }
    onNotificationClicked() {
    }
    onLogout() {
        this.authService.logout();
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/newpost/newpost.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/newpost/newpost.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel\n{\n    background-color: white;\n    border: 2px #dddddd;\n}\n\n.panel-footer\n{\n    background-color: rgb(238, 238, 238);\n    margin-top: 5px;\n    border: 2px #dddddd;\n    margin-left: 0px;\n}\n\n.post-heading\n{\n    height: 50px;\n    margin-top: 10px;\n    margin-left: 10px;\n}\n\n.post-user-name\n{\n    color: rgb(12, 76, 178);\n    font-family: \"Lucida Console\", Monaco, monospace;\n    font-weight: bold;\n}\n\n.post-description\n{\n    padding-bottom: 10px;\n}\n\n.post-text\n{\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n.user-pic\n{\n    float: left;\n    width: 50px;\n    height: 50px;\n    margin-right: 5px;\n    margin-top: 5px;\n}\n\n.stats\n{\n    margin-left: 5px;\n    margin-bottom: 5px;\n    color: #7f7f7f;\n    font-family: \"Lucida Console\", Monaco, monospace;\n}\n\n.stats-likes\n{\n    margin-left: 5px;\n    margin-right: 20px;\n    color: #7f7f7f;\n    font-family: \"Lucida Console\", Monaco, monospace;\n}\n\n.comment-input\n{\n    width: 95%;\n    margin-left: 5px;\n    margin-top: 5px;\n}\n\n.comment-user-pic\n{\n    float: left;\n    width: 20px;\n    height: 20px;\n    margin-right: 5px;\n    margin-top: 5px;\n}\n\n.comment-user-name\n{\n    margin-right: 5px;\n    margin-top: 5px;\n}\n\nul\n{\n    padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdwb3N0L25ld3Bvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsZ0RBQWdEO0lBQ2hELGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnREFBZ0Q7QUFDcEQ7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0RBQWdEO0FBQ3BEOztBQUVBOztJQUVJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ld3Bvc3QvbmV3cG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggI2RkZGRkZDtcbn1cblxuLnBhbmVsLWZvb3Rlclxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgYm9yZGVyOiAycHggI2RkZGRkZDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4ucG9zdC1oZWFkaW5nXG57XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5wb3N0LXVzZXItbmFtZVxue1xuICAgIGNvbG9yOiByZ2IoMTIsIDc2LCAxNzgpO1xuICAgIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBDb25zb2xlXCIsIE1vbmFjbywgbW9ub3NwYWNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucG9zdC1kZXNjcmlwdGlvblxue1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ucG9zdC10ZXh0XG57XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi51c2VyLXBpY1xue1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5zdGF0c1xue1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGNvbG9yOiAjN2Y3ZjdmO1xuICAgIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBDb25zb2xlXCIsIE1vbmFjbywgbW9ub3NwYWNlO1xufVxuXG4uc3RhdHMtbGlrZXNcbntcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBjb2xvcjogIzdmN2Y3ZjtcbiAgICBmb250LWZhbWlseTogXCJMdWNpZGEgQ29uc29sZVwiLCBNb25hY28sIG1vbm9zcGFjZTtcbn1cblxuLmNvbW1lbnQtaW5wdXRcbntcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uY29tbWVudC11c2VyLXBpY1xue1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5jb21tZW50LXVzZXItbmFtZVxue1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxudWxcbntcbiAgICBwYWRkaW5nOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/newpost/newpost.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/newpost/newpost.component.ts ***!
  \*********************************************************/
/*! exports provided: NewpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewpostComponent", function() { return NewpostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");
/* harmony import */ var src_app_models_comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/comments */ "./src/app/models/comments.ts");




let NewpostComponent = class NewpostComponent {
    constructor(commService) {
        this.commService = commService;
        this.showComments = false;
        this.comments = [];
    }
    onAddLikes() {
        /*
          This test, this.feedID.length > 5, is done to ensure this component can be used unchanged inside both newsfeed and wall components. When created inside
          wall component, a NewpostComponent component will have an empty feedID field. feedID will only be given a valid value only after
          it is saved in the backend.
        */
        if (this.feedID.length > 5) {
            if (this.locklikedislikes == false) {
                this.commService.addLikes(localStorage.getItem('userImageID'), this.feedID).subscribe(res => {
                    this.locklikedislikes = true;
                    this.likes++;
                }, error => { console.log(error); });
            }
        }
    }
    onAddDislikes() {
        if (this.feedID.length > 5) {
            if (this.locklikedislikes == false) {
                this.commService.addDislikes(localStorage.getItem('userImageID'), this.feedID).subscribe(res => {
                    this.locklikedislikes = true;
                    this.dislikes++;
                }, error => { console.log(error); });
            }
        }
    }
    onGetComments() {
        if (this.feedID.length > 5) {
            if (this.showComments == false) {
                this.commService.getPostComments(this.feedID).subscribe(res => {
                    this.comments = res;
                    this.showComments = true;
                }, error => { console.log(error); });
            }
        }
    }
    onEnterComment(commentbox) {
        if (this.feedID.length > 5) {
            this.commService.addComment(localStorage.getItem('userImageID'), this.feedID, commentbox).subscribe(res => {
                console.log(res);
                if (this.showComments == false) {
                    this.onGetComments();
                }
                else {
                    let cmt = new src_app_models_comments__WEBPACK_IMPORTED_MODULE_3__["Comment"];
                    cmt.fullName = localStorage.getItem('currentUserName');
                    cmt.text = commentbox;
                    cmt.timestamp = new Date();
                    cmt.imagePath = localStorage.getItem('userImageID');
                    this.comments.unshift(cmt);
                }
            }, error => { console.log(error); });
        }
    }
};
NewpostComponent.ctorParameters = () => [
    { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NewpostComponent.prototype, "feedID", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NewpostComponent.prototype, "fullName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NewpostComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NewpostComponent.prototype, "imagePath", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NewpostComponent.prototype, "timestamp", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NewpostComponent.prototype, "likes", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NewpostComponent.prototype, "dislikes", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NewpostComponent.prototype, "numComments", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NewpostComponent.prototype, "locklikedislikes", void 0);
NewpostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-newpost',
        template: __webpack_require__(/*! raw-loader!./newpost.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/newpost/newpost.component.html"),
        styles: [__webpack_require__(/*! ./newpost.component.css */ "./src/app/components/newpost/newpost.component.css")]
    })
], NewpostComponent);



/***/ }),

/***/ "./src/app/components/newpost/newpost.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/newpost/newpost.directive.ts ***!
  \*********************************************************/
/*! exports provided: NPostDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NPostDirective", function() { return NPostDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NPostDirective = class NPostDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
};
NPostDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
NPostDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[np-host]',
    })
], NPostDirective);



/***/ }),

/***/ "./src/app/components/newsfeed/newsfeed.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/newsfeed/newsfeed.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-newsfeed\n{\n    margin-top: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzZmVlZC9uZXdzZmVlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3c2ZlZWQvbmV3c2ZlZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItbmV3c2ZlZWRcbntcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/newsfeed/newsfeed.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/newsfeed/newsfeed.component.ts ***!
  \***********************************************************/
/*! exports provided: NewsfeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfeedComponent", function() { return NewsfeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_components_newpost_newpost_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/newpost/newpost.directive */ "./src/app/components/newpost/newpost.directive.ts");
/* harmony import */ var src_app_components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/newpost/newpost.component */ "./src/app/components/newpost/newpost.component.ts");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");
/* harmony import */ var src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/scroll.service */ "./src/app/services/scroll.service.ts");






var homePostsCounter = 0;
let NewsfeedComponent = class NewsfeedComponent {
    constructor(commService, componentFactoryResolver, scrSrv) {
        this.commService = commService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.scrSrv = scrSrv;
        this.currentUserName = localStorage.getItem('currentUserName');
        this.nomoreposts = false;
        this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(src_app_components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_3__["NewpostComponent"]);
    }
    ngOnInit() {
        console.log('Newsfeed OnInit');
        this.viewContainerRef = this.npHost.viewContainerRef;
        this.getFeedPosts();
        this.scrSrv.scrollObs.subscribe(res => {
            console.log(res.text);
            if (res.text === 'newsfeed') {
                console.log(res);
                this.getFeedPosts();
            }
        });
    }
    getFeedPosts() {
        this.commService.getPosts().subscribe(res => {
            let limit = res.length;
            homePostsCounter += limit;
            console.log(homePostsCounter);
            for (let i = 0; i < limit; i++) {
                var abc = JSON.parse(res[i]);
                const componentRef = this.viewContainerRef.createComponent(this.componentFactory);
                componentRef.instance.fullName = abc.fullName;
                componentRef.instance.text = abc.posttext;
                componentRef.instance.likes = abc.likes;
                componentRef.instance.dislikes = abc.dislikes;
                componentRef.instance.numComments = abc.numComments;
                componentRef.instance.imagePath = abc.imgPath;
                componentRef.instance.timestamp = abc.posttime;
                componentRef.instance.feedID = abc.id;
            }
        }, error => { console.log(error); this.nomoreposts = true; });
    }
};
NewsfeedComponent.ctorParameters = () => [
    { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_5__["ScrollService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_components_newpost_newpost_directive__WEBPACK_IMPORTED_MODULE_2__["NPostDirective"], { static: true })
], NewsfeedComponent.prototype, "npHost", void 0);
NewsfeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-newsfeed',
        template: __webpack_require__(/*! raw-loader!./newsfeed.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/newsfeed/newsfeed.component.html"),
        styles: [__webpack_require__(/*! ./newsfeed.component.css */ "./src/app/components/newsfeed/newsfeed.component.css")]
    })
], NewsfeedComponent);



/***/ }),

/***/ "./src/app/components/wall/wall.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/wall/wall.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2FsbC93YWxsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/wall/wall.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/wall/wall.component.ts ***!
  \***************************************************/
/*! exports provided: WallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallComponent", function() { return WallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_components_newpost_newpost_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/newpost/newpost.directive */ "./src/app/components/newpost/newpost.directive.ts");
/* harmony import */ var src_app_components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/newpost/newpost.component */ "./src/app/components/newpost/newpost.component.ts");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");
/* harmony import */ var src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/scroll.service */ "./src/app/services/scroll.service.ts");






var wallPostsCounter = 0;
let WallComponent = class WallComponent {
    constructor(commService, componentFactoryResolver, scrSrv) {
        this.commService = commService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.scrSrv = scrSrv;
        this.wallnomoreposts = false;
        this.wallcomponentFactory = this.componentFactoryResolver.resolveComponentFactory(src_app_components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_3__["NewpostComponent"]);
    }
    ngOnInit() {
        console.log('Wall OnInit');
        this.wallviewContainerRef = this.npHost.viewContainerRef;
        this.getWallPosts();
        this.scrSrv.scrollObs.subscribe(res => {
            console.log(res.text);
            if (res.text === 'wall') {
                console.log(res);
                this.getWallPosts();
            }
        });
    }
    getWallPosts() {
        this.commService.getWallPosts().subscribe(res => {
            let limit = res.length;
            wallPostsCounter += limit;
            console.log(wallPostsCounter);
            for (let i = 0; i < limit; i++) {
                var abc = JSON.parse(res[i]);
                const componentRef = this.wallviewContainerRef.createComponent(this.wallcomponentFactory);
                componentRef.instance.fullName = abc.fullName;
                componentRef.instance.text = abc.posttext;
                componentRef.instance.likes = abc.likes;
                componentRef.instance.dislikes = abc.dislikes;
                componentRef.instance.numComments = abc.numComments;
                componentRef.instance.imagePath = abc.imgPath;
                componentRef.instance.timestamp = abc.posttime;
                componentRef.instance.feedID = abc.id;
            }
        }, error => { console.log(error); this.wallnomoreposts = true; });
    }
};
WallComponent.ctorParameters = () => [
    { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_5__["ScrollService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_components_newpost_newpost_directive__WEBPACK_IMPORTED_MODULE_2__["NPostDirective"], { static: true })
], WallComponent.prototype, "npHost", void 0);
WallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wall',
        template: __webpack_require__(/*! raw-loader!./wall.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/wall/wall.component.html"),
        styles: [__webpack_require__(/*! ./wall.component.css */ "./src/app/components/wall/wall.component.css")]
    })
], WallComponent);



/***/ }),

/***/ "./src/app/constants/app-const.ts":
/*!****************************************!*\
  !*** ./src/app/constants/app-const.ts ***!
  \****************************************/
/*! exports provided: AppConst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConst", function() { return AppConst; });
class AppConst {
}
AppConst.serverPath = 'http://localhost:8080/';


/***/ }),

/***/ "./src/app/models/comments.ts":
/*!************************************!*\
  !*** ./src/app/models/comments.ts ***!
  \************************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
class Comment {
}


/***/ }),

/***/ "./src/app/route-reuse.ts":
/*!********************************!*\
  !*** ./src/app/route-reuse.ts ***!
  \********************************/
/*! exports provided: CustomReuseStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomReuseStrategy", function() { return CustomReuseStrategy; });
class CustomReuseStrategy {
    constructor() {
        this.handlers = {};
    }
    calcKey(route) {
        let next = route;
        let url = '';
        while (next) {
            if (next.url) {
                url = next.url.join('/');
            }
            next = next.firstChild;
        }
        return url;
    }
    shouldDetach(route) {
        return true;
    }
    store(route, handle) {
        this.handlers[this.calcKey(route)] = handle;
    }
    shouldAttach(route) {
        return !!route.routeConfig && !!this.handlers[this.calcKey(route)];
    }
    retrieve(route) {
        if (!route.routeConfig) {
            return null;
        }
        return this.handlers[this.calcKey(route)];
    }
    shouldReuseRoute(future, curr) {
        return this.calcKey(curr) === this.calcKey(future);
    }
}


/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let AuthenticationService = class AuthenticationService {
    constructor() {
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }
    login() {
        this.loggedIn.next(true);
    }
    logout() {
        this.loggedIn.next(false);
    }
};
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/communication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/communication.service.ts ***!
  \***************************************************/
/*! exports provided: CommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationService", function() { return CommunicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _constants_app_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/app-const */ "./src/app/constants/app-const.ts");




let CommunicationService = class CommunicationService {
    constructor(http) {
        this.http = http;
    }
    getWallPosts() {
        let url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'getwallposts/';
        return this.http.get(url);
    }
    getPosts() {
        let url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'getposts/';
        return this.http.get(url);
    }
    getPostComments(postID) {
        let url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'getcomments/' + postID + '/';
        return this.http.get(url);
    }
    getFriendsList() {
        let url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'getfriendslist/';
        return this.http.get(url);
    }
    getChatHistory(userAID, userBID) {
        let url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'getchathistory/' + userAID + '/' + userBID + '/';
        return this.http.get(url);
    }
    addComment(userID, postID, text) {
        let url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'addcomment/' + userID + '/' + postID + '/' + text + '/';
        return this.http.get(url);
    }
    addLikes(userID, postID) {
        let url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'addlikes/' + userID + '/' + postID + '/';
        return this.http.get(url);
    }
    addDislikes(userID, postID) {
        let url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'adddislikes/' + userID + '/' + postID + '/';
        return this.http.get(url);
    }
    addWallPost(userID, text) {
        let url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'addwallpost/' + userID + '/' + text + '/';
        return this.http.get(url);
    }
    sendCredential(email, password) {
        let url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + '/login';
        let encodedCredentials = btoa(email + ":" + password);
        let basicHeader = "Basic " + encodedCredentials;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': basicHeader
        });
        return this.http.get(url, { headers });
    }
};
CommunicationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CommunicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommunicationService);



/***/ }),

/***/ "./src/app/services/scroll.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/scroll.service.ts ***!
  \********************************************/
/*! exports provided: ScrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollService", function() { return ScrollService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ScrollService = class ScrollService {
    constructor() {
        this.scrollSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.scrollObs = this.scrollSubject.asObservable();
    }
    sendScrollMessage(message) {
        this.scrollSubject.next({ text: message });
    }
    clearScrollMessage() {
        this.scrollSubject.next();
    }
};
ScrollService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ScrollService);



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
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/khan/IdeaProjects/friendbook/fbFrontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map