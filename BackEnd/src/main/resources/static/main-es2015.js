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

module.exports = "<app-navbar></app-navbar>\n<div class = \"\" *ngIf=\"isLoggedIn$ | async\">\n    <ng-chat class = \"container-friends\" [adapter]=\"adapter\" [userId]=\"999\" [historyEnabled]=\"true\" [historyPageSize]=\"4\" \n        [hideFriendsList]=\"false\" [audioEnabled]=\"false\" [browserNotificationsEnabled]=\"false\" [pollFriendsList]=\"false\" [pollingInterval]=\"0\">\n    </ng-chat>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/friendrequest/friendrequest.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/friendrequest/friendrequest.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"friend-request\">\n    <div class = \"user-pic\"> <img src='/images/{{profileImageID}}.jpg' width=\"300\" height=\"300\"> </div>\n    <div fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\n        <div *ngFor=\"let uname of userNameArray\">\n            <div class=\"user-name-list-element\">{{uname}}</div>\n        </div>\n    </div>\n    <div class = \"friend-request-status\" *ngIf=\"!sendfriendrequest\">Friend request pending</div>\n    <div class = \"send-freind-request-button\">\n        <button *ngIf=\"sendfriendrequest\" (click)=\"onSendFriendRequestClick()\">Send Friend Request</button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/friendrequestmanage/friendrequestmanage.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/friendrequestmanage/friendrequestmanage.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"friend-request-management\">\n    <div class = \"user-pic\"> <img src='/images/{{profileImageID}}.jpg' width=\"300\" height=\"300\"> </div>\n    <div fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\n        <div *ngFor=\"let uname of userNameArray\">\n            <div class=\"user-name-list-element\">{{uname}}</div>\n        </div>\n    </div>  \n    <div class = \"accept-friend-request-message\" *ngIf=\"acceptfriendrequestmessage\">Friend request accepted</div>\n    <div class = \"reject-friend-request-message\" *ngIf=\"rejectfriendrequestmessage\">Friend request rejected</div>\n    <div class = \"accept-friend-request-button\">\n        <button *ngIf=\"acceptfriendrequest\" (click)=\"onManageFriendRequestClick('yes')\">Accept Friend Request</button>\n    </div>\n    <div class = \"reject-friend-request-button\">\n        <button *ngIf=\"rejectfriendrequest\" (click)=\"onManageFriendRequestClick('yes')\">Reject Friend Request</button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/friendswall/friendswall.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/friendswall/friendswall.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"friends-wall\">\n    <div class = \"friends-wall-posts\">\n        <ng-template np-host></ng-template>\n    </div>\n    <div *ngIf=\"!showPosts\" class = \"friends-wall-noposts\"></div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"login-form\">\n  <mat-card class=\"login-card\">\n    <mat-card-title  style=\"text-align: center;\">FriendBook</mat-card-title>\n    <mat-card-content  class = \"login-form-content\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onFormSubmit(loginForm.value)\">\n        <p>\n          <mat-form-field>\n            <input type=\"text\" matInput placeholder=\"Username\" formControlName=\"username\">\n            <mat-error *ngFor=\"let validation of validation_messages.username\">\n              <mat-error class=\"error-message\" *ngIf=\"loginForm.get('username').hasError(validation.type) && (loginForm.get('username').dirty \n              || loginForm.get('username').touched)\">{{validation.message}}</mat-error>\n            </mat-error>\n          </mat-form-field>\n        </p>      \n        <p>\n          <mat-form-field>\n            <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n            <mat-error *ngFor=\"let validation of validation_messages.password\">\n              <mat-error class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty \n              || loginForm.get('password').touched)\">{{validation.message}}</mat-error>\n            </mat-error>\n          </mat-form-field>\n        </p>\n        <mat-error class=\"error-message\" *ngIf=\"loginFailure\">Invalid Login</mat-error>\n        <div class = \"button-login\">\n          <button type=\"submit\" [disabled]=\"!loginForm.valid\" mat-raised-button color=\"primary\">Login</button>\n        </div>\n        <div class = \"button-register\">\n          <button (click)=\"onRegister()\" mat-raised-button color=\"primary\">Register</button>\n        </div>  \n      </form>\n    </mat-card-content>\n  </mat-card>  \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout = \"row\" fxLayout.xs = \"column\" fxLayoutAlign=\"space-around start\" class = \"fbNavBar\">\n    <div fxFlex = \"10\" class = \"fbNavBarTitle\">\n        FriendBook\n    </div>\n    <div fxFlex = \"70\">\n        <mat-form-field class=\"fbNavBarSearchInput\">\n            <input matInput placeholder=\"Search\" aria-label=\"Number\" [formControl]=\"searchFormControl\">\n        </mat-form-field>\n    </div>\n    <div fxFlex = \"10\" fxLayout = \"row\">\n        <i (click)=\"onNotificationClicked()\"><img class = \"fbNavBarIcon\" src=\"/icons/notification.svg\"></i>\n        <i (click)=\"onNewsFeedClicked()\"><img class = \"fbNavBarIcon\" src=\"/icons/home.svg\"></i>\n        <i (click)=\"onWallClicked()\"><img class = \"fbNavBarIcon\" src=\"/icons/firewall.svg\"></i>\n        <i (click)=\"onLogoutClicked()\"><img class = \"fbNavBarIcon\" src=\"/icons/logout.svg\"></i>\n    </div>\n</div>\n"

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

module.exports = "<div class=\"container-newsfeed-main\">\n    <div class=\"container-newsfeed-profile\">\n        <div class = \"user-pic\"> <img src='/images/{{profileImageID}}.jpg' width=\"250\" height=\"250\"> </div>\n        <div fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\n            <div *ngFor=\"let uname of userNameArray\">\n                <div class=\"user-name-list-element\">{{uname}}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container-newsfeed\">\n        <div class=\"container-posts\">\n            <div class=\"container-newposts\">\n                <ng-template np-host></ng-template>\n            </div>        \n            <div class=\"container-nomoreposts\" *ngIf=\"nomoreposts\">There are no more posts to show right now</div>        \n        </div>    \n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"register-form\">\n  <mat-card class=\"registration-card\">\n    <mat-card-title style=\"text-align: center;\">Registration</mat-card-title>\n    <mat-card-content  class = \"register-form-content\">\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegisterFormSubmit(registerForm.value)\">\n        <p>\n          <mat-form-field>\n            <input type=\"text\" matInput placeholder=\"First Name\" formControlName=\"firstname\">\n            <mat-error *ngFor=\"let validation of validation_messages.firstname\">\n              <mat-error class=\"error-message\" *ngIf=\"registerForm.get('firstname').hasError(validation.type) && (registerForm.get('firstname').dirty \n              || registerForm.get('firstname').touched)\">{{validation.message}}</mat-error>\n            </mat-error>\n          </mat-form-field>\n        </p>      \n        <p>\n          <mat-form-field>\n            <input type=\"text\" matInput placeholder=\"Last Name\" formControlName=\"lastname\">\n            <mat-error *ngFor=\"let validation of validation_messages.lastname\">\n              <mat-error class=\"error-message\" *ngIf=\"registerForm.get('lastname').hasError(validation.type) && (registerForm.get('lastname').dirty \n              || registerForm.get('lastname').touched)\">{{validation.message}}</mat-error>\n            </mat-error>\n          </mat-form-field>\n        </p>\n        <p>\n          <mat-form-field>\n            <input type=\"text\" matInput placeholder=\"Email\" formControlName=\"email\">\n            <mat-error *ngFor=\"let validation of validation_messages.email\">\n              <mat-error class=\"error-message\" *ngIf=\"registerForm.get('email').hasError(validation.type) && (registerForm.get('email').dirty \n                || registerForm.get('email').touched)\">{{validation.message}}\n              </mat-error>\n            </mat-error>\n          </mat-form-field>\n        </p>\n        <p>\n          <mat-form-field>\n            <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n            <mat-error *ngFor=\"let validation of validation_messages.password\">\n              <mat-error class=\"error-message\" *ngIf=\"registerForm.get('password').hasError(validation.type) && (registerForm.get('password').dirty \n              || registerForm.get('password').touched)\">{{validation.message}}</mat-error>\n            </mat-error>\n          </mat-form-field>\n        </p>      \n        <p>\n          <mat-form-field>\n            <input type=\"password\" matInput placeholder=\"Confirm Password\" formControlName=\"confirm_password\" [errorStateMatcher] = \"errorMatcher\">\n            <mat-error *ngIf=\"registerForm.hasError('notSame')\">\n              Passwords do not match\n            </mat-error>\n          </mat-form-field>\n        </p>      \n        <p>\n          <mat-form-field>\n            <input matInput type=\"tel\" placeholder=\"Phone\" formControlName=\"phone\">\n            <mat-error *ngFor=\"let validation of validation_messages.phone\">\n              <mat-error class=\"error-message\" *ngIf=\"registerForm.get('phone').hasError(validation.type) && \n              (registerForm.get('phone').dirty || registerForm.get('phone').touched)\">{{validation.message}}</mat-error>\n            </mat-error>\n          </mat-form-field>\n        </p>\n        <p>\n          <mat-form-field>\n            <mat-select placeholder=\"Gender\">\n              <mat-option *ngFor=\"let gender of genders\" [value]=\"gender\">\n                {{ gender }}\n              </mat-option>\n            </mat-select>\n            <mat-error *ngFor=\"let validation of validation_messages.gender\">\n              <mat-error class=\"error-message\" *ngIf=\"registerForm.get('gender').hasError(validation.type) && (registerForm.get('gender').dirty || \n              registerForm.get('gender').touched)\">{{validation.message}}</mat-error>\n            </mat-error>\n          </mat-form-field>\n        </p>\n        <p>\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Birthday\" formControlName=\"birthday\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n            <mat-error *ngFor=\"let validation of validation_messages.birthday\">\n              <mat-error class=\"error-message\" *ngIf=\"registerForm.get('birthday').hasError(validation.type) && (registerForm.get('birthday').dirty || \n              registerForm.get('birthday').touched)\">{{validation.message}}</mat-error>\n            </mat-error>\n          </mat-form-field>\n        </p>\n        <p>\n          <input style=\"display: none\" type=\"file\" accept=\".jpg,.jpeg\" (change)=\"onFileChanged($event)\" #fileInput>\n          <button type=\"button\" (click)=\"fileInput.click()\">Select Display Picture</button>\n          <mat-error class=\"error-message\" *ngIf=\"selectFileTouched && !hasValidImageFile\">Wrong Image Size</mat-error>\n        </p>\n        <mat-label>{{selectedFileName}}</mat-label>\n        <mat-error class=\"error-message\" *ngIf=\"registerFailure\">Registration Failure</mat-error>\n        <button class = \"button-register\" type=\"submit\" [disabled]=\"!registerForm.valid || !hasValidImageFile || registrationInProgress\" \n          mat-raised-button color=\"primary\">Register</button>              \n      </form>\n    </mat-card-content>\n  </mat-card>  \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/singlepost/singlepost.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/singlepost/singlepost.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container-singlepost\">\n    <ng-template np-host></ng-template>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/wall/wall.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/wall/wall.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container-wall\" >\n    <div class = \"wall-newposteditor\"> \n        <textarea name = \"wallnewpostedit\" id = \"wallnewpostedit\" placeholder = \"Got something to say\" [(ngModel)]=\"wallNewPostText\"></textarea>\n        <button (click)=\"onAddNewWallPostClick()\">submit</button>\n    </div>\n    <div class = \"container-wallposts\">\n        <div class = \"container-wallnewposts\">\n            <ng-template np-host></ng-template>\n        </div>        \n        <div class = \"container-wallnomoreposts\" *ngIf=\"wallnomoreposts\">There are no more posts to show right now</div>        \n    </div>    \n</div>"

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
/* harmony import */ var _components_singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/singlepost/singlepost.component */ "./src/app/components/singlepost/singlepost.component.ts");
/* harmony import */ var _components_friendrequest_friendrequest_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/friendrequest/friendrequest.component */ "./src/app/components/friendrequest/friendrequest.component.ts");
/* harmony import */ var _components_friendswall_friendswall_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/friendswall/friendswall.component */ "./src/app/components/friendswall/friendswall.component.ts");
/* harmony import */ var _components_friendrequestmanage_friendrequestmanage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/friendrequestmanage/friendrequestmanage.component */ "./src/app/components/friendrequestmanage/friendrequestmanage.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");












const routes = [
    { path: 'newsfeed', component: _components_newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_3__["NewsfeedComponent"] },
    { path: 'wall', component: _components_wall_wall_component__WEBPACK_IMPORTED_MODULE_4__["WallComponent"] },
    { path: 'index', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'singlepost/:postID/:notUserID', component: _components_singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_7__["SinglepostComponent"] },
    { path: 'friendrequest/:friendImageID/:userFullName', component: _components_friendrequest_friendrequest_component__WEBPACK_IMPORTED_MODULE_8__["FriendrequestComponent"] },
    { path: 'friendrequestmanage/:friendImageID/:userFullName', component: _components_friendrequestmanage_friendrequestmanage_component__WEBPACK_IMPORTED_MODULE_10__["FriendrequestmanageComponent"] },
    { path: 'friendswall/:friendImageID', component: _components_friendswall_friendswall_component__WEBPACK_IMPORTED_MODULE_9__["FriendswallComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"] }
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
/* harmony import */ var _components_chatcontainer_chatcontrol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/chatcontainer/chatcontrol */ "./src/app/components/chatcontainer/chatcontrol.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");
/* harmony import */ var src_app_services_websocketmessaging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/websocketmessaging.service */ "./src/app/services/websocketmessaging.service.ts");








let AppComponent = class AppComponent {
    constructor(renderer, router, scrSrv, authService, commService, wscommService) {
        this.renderer = renderer;
        this.router = router;
        this.scrSrv = scrSrv;
        this.authService = authService;
        this.commService = commService;
        this.wscommService = wscommService;
        this.title = 'fbFrontEnd';
        this.adapter = new _components_chatcontainer_chatcontrol__WEBPACK_IMPORTED_MODULE_4__["ChatControl"]();
        this.renderer.setStyle(document.body, 'background-color', 'rgb(231, 235, 242)');
        this.isLoggedIn$ = this.authService.isLoggedIn;
        this.isLoggedIn$.subscribe(res => {
            if (res == true) {
                this.adapter.commService = this.commService;
                this.adapter.wsService = this.wscommService;
                this.adapter.setFriendsList();
                this.adapter.registerCallBacks();
                this.wscommService.connectToChat();
            }
        });
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
    { type: src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_3__["ScrollService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_6__["CommunicationService"] },
    { type: src_app_services_websocketmessaging_service__WEBPACK_IMPORTED_MODULE_7__["WebsocketmessagingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll')
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js");
/* harmony import */ var ng_chat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-chat */ "./node_modules/ng-chat/fesm2015/ng-chat.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/newsfeed/newsfeed.component */ "./src/app/components/newsfeed/newsfeed.component.ts");
/* harmony import */ var _components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/newpost/newpost.component */ "./src/app/components/newpost/newpost.component.ts");
/* harmony import */ var _components_newpost_newpost_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/newpost/newpost.directive */ "./src/app/components/newpost/newpost.directive.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_wall_wall_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/wall/wall.component */ "./src/app/components/wall/wall.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/singlepost/singlepost.component */ "./src/app/components/singlepost/singlepost.component.ts");
/* harmony import */ var _components_friendswall_friendswall_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/friendswall/friendswall.component */ "./src/app/components/friendswall/friendswall.component.ts");
/* harmony import */ var _components_friendrequest_friendrequest_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/friendrequest/friendrequest.component */ "./src/app/components/friendrequest/friendrequest.component.ts");
/* harmony import */ var _components_friendrequestmanage_friendrequestmanage_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/friendrequestmanage/friendrequestmanage.component */ "./src/app/components/friendrequestmanage/friendrequestmanage.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _components_newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_11__["NewsfeedComponent"],
            _components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_12__["NewpostComponent"],
            _components_newpost_newpost_directive__WEBPACK_IMPORTED_MODULE_13__["NPostDirective"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
            _components_wall_wall_component__WEBPACK_IMPORTED_MODULE_15__["WallComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
            time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeAgoPipe"],
            _components_singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_18__["SinglepostComponent"],
            _components_friendrequest_friendrequest_component__WEBPACK_IMPORTED_MODULE_20__["FriendrequestComponent"],
            _components_friendswall_friendswall_component__WEBPACK_IMPORTED_MODULE_19__["FriendswallComponent"],
            _components_friendrequestmanage_friendrequestmanage_component__WEBPACK_IMPORTED_MODULE_21__["FriendrequestmanageComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ng_chat__WEBPACK_IMPORTED_MODULE_8__["NgChatModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["NoopAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]
        ],
        providers: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        entryComponents: [_components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_12__["NewpostComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/chatcontainer/chatcontrol.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/chatcontainer/chatcontrol.ts ***!
  \*********************************************************/
/*! exports provided: ChatControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatControl", function() { return ChatControl; });
/* harmony import */ var ng_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-chat */ "./node_modules/ng-chat/fesm2015/ng-chat.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



class ChatControl extends ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatAdapter"] {
    constructor() {
        super(...arguments);
        this.chatHistory = [];
        this.mockedParticipants = [];
    }
    registerCallBacks() {
        this.wsService.chatObs.subscribe(res => {
            this.insertMessage(res);
        });
        this.wsService.onlineObs.subscribe(res => {
            this.setOnlineStatus(res);
        });
        this.wsService.newFriendObs.subscribe(res => {
            this.addNewFriend(res);
        });
    }
    listFriends() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.mockedParticipants.map(user => {
            let participantResponse = new ng_chat__WEBPACK_IMPORTED_MODULE_0__["ParticipantResponse"]();
            participantResponse.participant = user;
            participantResponse.metadata =
                {
                    totalUnreadMessages: 0
                };
            return participantResponse;
        }));
    }
    addNewFriend(payload) {
        this.createUser(payload);
        this.listFriends().subscribe(res => { this.onFriendsListChanged(res); });
    }
    setFriendsList() {
        var friendsList;
        this.mockedParticipants.length = 0;
        this.commService.getFriendsList().subscribe(res => {
            friendsList = res;
            friendsList.forEach(t => { this.createUser(t); });
            this.listFriends().subscribe(res => { this.onFriendsListChanged(res); });
        }, error => { console.log(error); });
    }
    createUser(usr) {
        localStorage.setItem(usr.imagePath, usr.fullName);
        var onlineStatus = usr.onlinestatus === 'offline' ? ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantStatus"].Offline : ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantStatus"].Online;
        var pRes = {
            participantType: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantType"].User,
            id: usr.imagePath,
            displayName: usr.fullName,
            avatar: "/images/" + usr.imagePath + ".jpg",
            status: onlineStatus
        };
        this.mockedParticipants.push(pRes);
    }
    insertMessage(payload) {
        let replyMessage = new ng_chat__WEBPACK_IMPORTED_MODULE_0__["Message"]();
        replyMessage.message = payload.content;
        replyMessage.fromId = payload.sender;
        replyMessage.dateSent = payload.timeStamp;
        let user = this.mockedParticipants.find(x => x.id == replyMessage.fromId);
        this.onMessageReceived(user, replyMessage);
    }
    setOnlineStatus(payload) {
        let user = this.mockedParticipants.find(x => x.id == payload.imagePath);
        if (typeof user != 'undefined') {
            var onlineStatus = payload.onlineStatusMessage === 'online' ? ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantStatus"].Online : ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantStatus"].Offline;
            var pRes = {
                participantType: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantType"].User,
                id: user.id,
                displayName: user.displayName,
                avatar: "/images/" + user.id + ".jpg",
                status: onlineStatus
            };
            var index = this.mockedParticipants.indexOf(user);
            this.mockedParticipants[index] = pRes;
            this.listFriends().subscribe(res => { this.onFriendsListChanged(res); });
        }
    }
    getMessageHistory(userId) {
        var mockedHistory = [];
        var usrMsgHistory = [];
        this.commService.getChatHistory(userId).subscribe(res => {
            if (res.hasOwnProperty('status')) //No history found
             {
            }
            else {
                res.forEach(t => {
                    var msg = { fromId: t.fromUserID, toId: t.toUserID, message: t.text, dateSent: t.timeStamp };
                    mockedHistory.push(msg);
                });
                //Array.prototype.push.apply(mockedHistory, usrMsgHistory);
            }
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(mockedHistory).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(200));
    }
    sendMessage(message) {
        console.log(message);
        this.wsService.sendChatMessage(message.toId, message.fromId, message.message);
    }
}


/***/ }),

/***/ "./src/app/components/friendrequest/friendrequest.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/friendrequest/friendrequest.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".friend-request\n{\n    margin-top: 200px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.user-pic\n{\n\tmargin-bottom: 20px;\n}\n\n.user-name-list-element\n{\n    font-style: bold;\n    font-size: 30px;\n    text-align: center;\n}\n\n.friend-request-status\n{\n    font-style: bold;\n    font-size: 30px;\n    text-align: center;\n}\n\n.send-freind-request-button\n{\n    margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mcmllbmRyZXF1ZXN0L2ZyaWVuZHJlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBOztDQUVDLG1CQUFtQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZyaWVuZHJlcXVlc3QvZnJpZW5kcmVxdWVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyaWVuZC1yZXF1ZXN0XG57XG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi51c2VyLXBpY1xue1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udXNlci1uYW1lLWxpc3QtZWxlbWVudFxue1xuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZyaWVuZC1yZXF1ZXN0LXN0YXR1c1xue1xuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlbmQtZnJlaW5kLXJlcXVlc3QtYnV0dG9uXG57XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/friendrequest/friendrequest.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/friendrequest/friendrequest.component.ts ***!
  \*********************************************************************/
/*! exports provided: FriendrequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendrequestComponent", function() { return FriendrequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let FriendrequestComponent = class FriendrequestComponent {
    constructor(commService, route) {
        this.commService = commService;
        this.route = route;
        this.sendfriendrequest = true;
    }
    ngOnInit() {
        this.profileImageID = this.route.snapshot.paramMap.get('friendImageID');
        this.fullname = this.route.snapshot.paramMap.get('userFullName');
        this.userNameArray = this.fullname.split(" ");
        this.commService.checkFriendRequestStatus(this.profileImageID).subscribe(res => {
            console.log(res);
            if (res.status === 'pending') {
                this.sendfriendrequest = false;
            }
        }, error => { console.log(error); });
    }
    onSendFriendRequestClick() {
        this.commService.sendFriendRequest(this.profileImageID).subscribe(res => {
            console.log(res);
            if (res.status === 'sent') {
                this.sendfriendrequest = false;
            }
        }, error => { console.log(error); });
    }
};
FriendrequestComponent.ctorParameters = () => [
    { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
FriendrequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-friendrequest',
        template: __webpack_require__(/*! raw-loader!./friendrequest.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/friendrequest/friendrequest.component.html"),
        styles: [__webpack_require__(/*! ./friendrequest.component.css */ "./src/app/components/friendrequest/friendrequest.component.css")]
    })
], FriendrequestComponent);



/***/ }),

/***/ "./src/app/components/friendrequestmanage/friendrequestmanage.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/friendrequestmanage/friendrequestmanage.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".friend-request-management\n{\n    margin-top: 200px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.user-pic\n{\n\tmargin-bottom: 20px;\n}\n\n.user-name-list-element\n{\n    font-style: bold;\n    font-size: 30px;\n    text-align: center;\n}\n\n.friend-request-status\n{\n    font-style: bold;\n    font-size: 30px;\n    text-align: center;\n}\n\n.accept-friend-request-button\n{\n    margin-top: 20px;\n}\n\n.reject-friend-request-button\n{\n    margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mcmllbmRyZXF1ZXN0bWFuYWdlL2ZyaWVuZHJlcXVlc3RtYW5hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBOztDQUVDLG1CQUFtQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mcmllbmRyZXF1ZXN0bWFuYWdlL2ZyaWVuZHJlcXVlc3RtYW5hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcmllbmQtcmVxdWVzdC1tYW5hZ2VtZW50XG57XG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi51c2VyLXBpY1xue1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udXNlci1uYW1lLWxpc3QtZWxlbWVudFxue1xuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZyaWVuZC1yZXF1ZXN0LXN0YXR1c1xue1xuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFjY2VwdC1mcmllbmQtcmVxdWVzdC1idXR0b25cbntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucmVqZWN0LWZyaWVuZC1yZXF1ZXN0LWJ1dHRvblxue1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/friendrequestmanage/friendrequestmanage.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/friendrequestmanage/friendrequestmanage.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FriendrequestmanageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendrequestmanageComponent", function() { return FriendrequestmanageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");




let FriendrequestmanageComponent = class FriendrequestmanageComponent {
    constructor(commService, route) {
        this.commService = commService;
        this.route = route;
        this.acceptfriendrequest = true;
        this.rejectfriendrequest = true;
        this.acceptfriendrequestmessage = false;
        this.rejectfriendrequestmessage = false;
    }
    ngOnInit() {
        this.profileImageID = this.route.snapshot.paramMap.get('friendImageID');
        this.fullname = this.route.snapshot.paramMap.get('userFullName');
        this.userNameArray = this.fullname.split(" ");
    }
    onManageFriendRequestClick(status) {
        this.commService.manageFriendRequest(this.profileImageID, status).subscribe(res => {
            console.log(res);
            if (res['status'] === 'FRIEND_REQUEST_ACCEPTED')
                this.acceptfriendrequestmessage = true;
            else if (res['status'] === 'FRIEND_REQUEST_REJECTED')
                this.rejectfriendrequestmessage = true;
        }, error => { console.log(error); });
    }
};
FriendrequestmanageComponent.ctorParameters = () => [
    { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_3__["CommunicationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
FriendrequestmanageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-friendrequestmanage',
        template: __webpack_require__(/*! raw-loader!./friendrequestmanage.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/friendrequestmanage/friendrequestmanage.component.html"),
        styles: [__webpack_require__(/*! ./friendrequestmanage.component.css */ "./src/app/components/friendrequestmanage/friendrequestmanage.component.css")]
    })
], FriendrequestmanageComponent);



/***/ }),

/***/ "./src/app/components/friendswall/friendswall.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/friendswall/friendswall.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".friends-wall\n{\n    margin-top: 50px;\n}\n\n.friends-wall-posts\n{\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mcmllbmRzd2FsbC9mcmllbmRzd2FsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZnJpZW5kc3dhbGwvZnJpZW5kc3dhbGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcmllbmRzLXdhbGxcbntcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uZnJpZW5kcy13YWxsLXBvc3RzXG57XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/friendswall/friendswall.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/friendswall/friendswall.component.ts ***!
  \*****************************************************************/
/*! exports provided: FriendswallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendswallComponent", function() { return FriendswallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/communication.service */ "./src/app/services/communication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_newpost_newpost_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/newpost/newpost.directive */ "./src/app/components/newpost/newpost.directive.ts");
/* harmony import */ var src_app_components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/newpost/newpost.component */ "./src/app/components/newpost/newpost.component.ts");






let FriendswallComponent = class FriendswallComponent {
    constructor(commService, route, componentFactoryResolver) {
        this.commService = commService;
        this.route = route;
        this.componentFactoryResolver = componentFactoryResolver;
        this.showPosts = false;
        this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(src_app_components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_5__["NewpostComponent"]);
    }
    ngOnInit() {
        let imagePath = this.route.snapshot.paramMap.get('friendImageID');
        let fullname = localStorage.getItem(imagePath);
        this.commService.getFriendsWallPosts(imagePath).subscribe(res => {
            this.showPosts = true;
            this.viewContainerRef = this.npHost.viewContainerRef;
            let limit = res.length;
            console.log(limit);
            for (let i = 0; i < limit; i++) {
                var abc = res[i];
                const componentRef = this.viewContainerRef.createComponent(this.componentFactory);
                componentRef.instance.fullName = fullname;
                componentRef.instance.text = abc.posttext;
                componentRef.instance.likes = abc.likes;
                componentRef.instance.dislikes = abc.dislikes;
                componentRef.instance.numComments = abc.numComments;
                componentRef.instance.imagePath = imagePath;
                componentRef.instance.timestamp = abc.posttime;
                componentRef.instance.feedID = abc.id;
            }
        }, error => { console.log(error); });
    }
};
FriendswallComponent.ctorParameters = () => [
    { type: _services_communication_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_components_newpost_newpost_directive__WEBPACK_IMPORTED_MODULE_4__["NPostDirective"], { static: true })
], FriendswallComponent.prototype, "npHost", void 0);
FriendswallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-friendswall',
        template: __webpack_require__(/*! raw-loader!./friendswall.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/friendswall/friendswall.component.html"),
        styles: [__webpack_require__(/*! ./friendswall.component.css */ "./src/app/components/friendswall/friendswall.component.css")]
    })
], FriendswallComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen\n{\n    .login-form\n    {\n        margin-top: 5%;\n    }    \n}\n\n@media (min-width: 320px) and (max-width: 700px)\n{\n    .login-form\n    {\n        margin-top: 10%;\n    }    \n}\n\n.login-card\n{\n    width: 50%;\n}\n\n.login-form\n{   \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\nmat-form-field \n{\n    width: 100%;\n}\n\nmat-form-field input.mat-input-element \n{\n    height: 20px;\n    vertical-align: top;\n}\n\n.error \n{\n    padding: 16px;\n    width: 300px;\n    color: white;\n    background-color: red;\n}\n\n.error-message \n{\n    font-size: 12px;\n}\n\n.button-login, .button-register\n{\n    margin-top: 30px;\n    width: 100%;\n    height: 60px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJOztRQUVJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTs7SUFFSTs7UUFFSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7O0lBRUksVUFBVTtBQUNkOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW5cbntcbiAgICAubG9naW4tZm9ybVxuICAgIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgfSAgICBcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpXG57XG4gICAgLmxvZ2luLWZvcm1cbiAgICB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICB9ICAgIFxufVxuXG4ubG9naW4tY2FyZFxue1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5sb2dpbi1mb3JtXG57ICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIFxue1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtZm9ybS1maWVsZCBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCBcbntcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmVycm9yIFxue1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5lcnJvci1tZXNzYWdlIFxue1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJ1dHRvbi1sb2dpbiwgLmJ1dHRvbi1yZWdpc3Rlclxue1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");






let LoginComponent = class LoginComponent {
    constructor(commService, router, authService, fb) {
        this.commService = commService;
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.loginFormValid = false;
        this.loginFailure = false;
        this.emailPattern = "^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
        this.validation_messages = {
            'username': [
                { type: 'required', message: 'Username is required' },
                { type: 'minlength', message: 'Username must be at least 7 characters long' },
                { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
                { type: 'pattern', message: 'Enter a valid email' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must be at least 5 characters long' }
            ]
        };
    }
    ngOnInit() {
        this.createLoginForm();
        this.logoutuser();
    }
    createLoginForm() {
        this.loginForm = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.emailPattern),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]))
        });
    }
    logoutuser() {
        var logInResult = localStorage.getItem('isLoggenIn');
        if (logInResult === 'true') //Check if we are a fresh login page or redirect
         {
            var token = localStorage.getItem('xAuthToken');
            console.log(token);
            this.commService.checkSession(token).subscribe(res => {
                console.log(res);
                if (res['status'] === 'SESSION_ACTIVE') {
                    console.log('Already logged in');
                    this.commService.logout().subscribe(res => //Logout the currently logged in user
                     {
                        if (res['status'] === 'LOGOUT_SUCCESS') {
                            console.log('Logged out');
                            localStorage.clear();
                        }
                    });
                }
            }, error => { console.log(error); });
        }
    }
    onFormSubmit(value) {
        if (this.loginForm.valid) {
            localStorage.clear();
            var usrName = this.loginForm.get('username').value;
            var passWord = this.loginForm.get('password').value;
            console.log(usrName + "  " + passWord);
            this.commService.sendCredential(usrName, passWord).subscribe(res => {
                console.log(res);
                localStorage.setItem('xAuthToken', res[0].token);
                localStorage.setItem('isLoggenIn', 'true');
                localStorage.setItem('resetNotificationMenu', 'true');
                localStorage.setItem("userImageID", res[0].userImageID);
                localStorage.setItem("currentUserName", res[0].currentUserName);
                this.authService.login();
                this.router.navigate(['/newsfeed']);
            }, error => {
                this.loginFailure = true;
                console.log(error);
            });
        }
    }
    onRegister() {
        this.router.navigate(['/register']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
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

module.exports = ".fbNavBar\n{\n    background-color: #b6bedf;\n}\n\n.fbNavBarTitle\n{\n    font-style: italic;\n    font-family: \"Times New Roman\", Times, serif;\n    font-size: 3vh;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    border-top: 0px;\n    border-bottom: 0px; \n}\n\n.fbNavBarIcon\n{\n    margin-top: 1vh;\n    height: 4vh;\n}\n\n.fbNavBarSearchInput\n{\n    width: 100%;\n}\n\n@media (max-width: 900px) \n{\n    .fbNavBarTitle\n    {\n        margin-top: 3vh;\n        font-size: 5vh;\n        text-align: center;\n    }\n\n    .fbNavBarSearch\n    {\n        width: 80%;\n        margin-top: 0px;\n        margin-bottom: 0px;\n        padding-top: 0px;\n        padding-bottom: 0px;\n        border-top: 0px;\n        border-bottom: 0px;    \n    }\n\n    .fbNavBarIcon\n    {\n        margin-left: 10vw;\n        margin-right: 10vw;\n        margin-bottom: 5px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUkseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQiw0Q0FBNEM7SUFDNUMsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJOztRQUVJLGVBQWU7UUFDZixjQUFjO1FBQ2Qsa0JBQWtCO0lBQ3RCOztJQUVBOztRQUVJLFVBQVU7UUFDVixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7SUFFQTs7UUFFSSxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmJOYXZCYXJcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZiZWRmO1xufVxuXG4uZmJOYXZCYXJUaXRsZVxue1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogM3ZoO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIGJvcmRlci10b3A6IDBweDtcbiAgICBib3JkZXItYm90dG9tOiAwcHg7IFxufVxuXG4uZmJOYXZCYXJJY29uXG57XG4gICAgbWFyZ2luLXRvcDogMXZoO1xuICAgIGhlaWdodDogNHZoO1xufVxuXG4uZmJOYXZCYXJTZWFyY2hJbnB1dFxue1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIFxue1xuICAgIC5mYk5hdkJhclRpdGxlXG4gICAge1xuICAgICAgICBtYXJnaW4tdG9wOiAzdmg7XG4gICAgICAgIGZvbnQtc2l6ZTogNXZoO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmZiTmF2QmFyU2VhcmNoXG4gICAge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAwcHg7ICAgIFxuICAgIH1cblxuICAgIC5mYk5hdkJhckljb25cbiAgICB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwdnc7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG59Il19 */"

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_websocketmessaging_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/websocketmessaging.service */ "./src/app/services/websocketmessaging.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");











let NavbarComponent = class NavbarComponent {
    constructor(router, authService, commService, wscommService, location) {
        this.router = router;
        this.authService = authService;
        this.commService = commService;
        this.wscommService = wscommService;
        this.location = location;
        this.enableNotification = false;
        this.isSearchLoading = false;
        this.noOfNotification = 0;
        this.alreadyClicked = [];
        this.searchFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.notificationMenuArray = [];
    }
    ngOnInit() {
        var url = window.location.href;
        var indexOfIndex = url.indexOf("index");
        this.commService.serverPath = url.substring(0, indexOfIndex); //Get url from index page and initilize comm service serverPath
        this.wscommService.serverPath = this.commService.serverPath;
        this.isLoggedIn$ = this.authService.isLoggedIn;
        this.isLoggedIn$.subscribe(res => {
            if (res == true) {
                this.wscommService.notificationObs.subscribe(notres => { this.onNotificationMessageReceived(notres); });
            }
        });
        this.wscommService.searchObs.subscribe(seres => { this.onSearchMessageReceived(seres); });
        //Introduce delay so that not too many calls to the backend are generated
        this.searchFormControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])()).subscribe(val => {
            this.wscommService.sendSearchMessage(val);
        });
    }
    onNotificationMessageReceived(payload) {
        let menuItemText = payload.userFullName;
        let mItem;
        if (payload.type === 'FRIEND_REQUEST') {
            menuItemText += " has sent a friend request";
            mItem = { text: menuItemText, userImageID: payload.usrImageID, userFullName: payload.userFullName, menuItemType: 'FRIEND_REQUEST' };
        }
        else {
            if (payload.type === 'NEWPOST')
                menuItemText += " has made a post";
            else if (payload.type === 'LIKE')
                menuItemText += " has liked a post";
            else if (payload.type === 'DISLIKE')
                menuItemText += " has disliked a post";
            else if (payload.type === 'COMMENT')
                menuItemText += " has commented on a post";
            if (payload.hasOwnProperty('postID')) {
                mItem = { text: menuItemText, postID: payload.postID, userImageID: payload.usrImageID, userFullName: payload.usrFullName, notUserID: payload.notUserID,
                    menuItemType: 'POST' };
            }
            else {
                mItem = { text: menuItemText, userImageID: payload.usrImageID, userFullName: payload.usrFullName, menuItemType: 'POST' };
            }
        }
        this.notificationMenuArray.push(mItem);
        this.enableNotification = true;
        this.noOfNotification++;
    }
    onSearchMessageReceived(payload) {
        var searchList = [];
        payload.forEach(t => { var abc = { name: t.userName, imageID: t.imageID }; searchList.push(abc); });
        this.autoCompleteList = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(searchList);
    }
    onNotificationClicked() {
        if (this.notificationMenuArray.length > 0 && this.enableNotification == false) {
            this.notificationMenu.openMenu();
        }
    }
    onNewsFeedClicked() {
        this.router.navigate(['/newsfeed']);
    }
    onWallClicked() {
        this.router.navigate(['/wall']);
    }
    onLogoutClicked() {
        this.authService.logout();
        this.location.replaceState('/');
        window.location.reload(); //Do a reload to erase everything and start with a fresh state
    }
    onNotificationItemSelected(menuItem) {
        if (typeof this.alreadyClicked.find(x => x === menuItem.userImageID) === 'undefined') {
            console.log('New item clicked');
            this.alreadyClicked.push(menuItem.userImageID); //Put this notification menu item in seen list
            if (this.noOfNotification > 0)
                this.noOfNotification--;
            if (this.noOfNotification === 0)
                this.enableNotification = false;
        }
        if (menuItem.menuItemType === 'POST') {
            if (!menuItem.hasOwnProperty('postID')) //Non friend post
             {
                this.router.navigate(['/friendrequest', menuItem.userImageID, menuItem.userFullName]);
            }
            else
                this.router.navigate(['/singlepost', menuItem.postID, menuItem.notUserID]);
        }
        else if (menuItem.menuItemType === 'FRIEND_REQUEST') {
            this.router.navigate(['/friendrequestmanage', menuItem.userImageID, menuItem.userFullName]);
        }
    }
    onSearchItemSelected(event, srcItm) {
        var isSelfSelected = srcItm.imageID === localStorage.getItem('userImageID');
        var existInFriendsList = localStorage.getItem(srcItm.imageID);
        if (typeof existInFriendsList === 'string') //Friend selected
         {
            this.router.navigate(['/friendswall', srcItm.imageID]);
        }
        else if (existInFriendsList === null && !isSelfSelected) //New person selected and it is not us
         {
            this.router.navigate(['/friendrequest', srcItm.imageID, srcItm.name]);
        }
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_6__["CommunicationService"] },
    { type: src_app_services_websocketmessaging_service__WEBPACK_IMPORTED_MODULE_8__["WebsocketmessagingService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], { static: false })
], NavbarComponent.prototype, "notificationMenu", void 0);
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

module.exports = ".panel\n{\n    background-color: white;\n    border: 2px #dddddd;\n}\n\n.panel-footer\n{\n    background-color: rgb(238, 238, 238);\n    margin-top: 5px;\n    border: 2px #dddddd;\n    margin-left: 0px;\n}\n\n.post-heading\n{\n    height: 50px;\n    margin-top: 10px;\n    margin-left: 10px;\n}\n\n.post-user-name\n{\n    color: rgb(12, 76, 178);\n    font-family: \"Lucida Console\", Monaco, monospace;\n    font-weight: bold;\n}\n\n.post-description\n{\n    padding-bottom: 10px;\n}\n\n.post-text\n{\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n.user-pic\n{\n    float: left;\n    width: 50px;\n    height: 50px;\n    margin-right: 5px;\n    margin-top: 5px;\n}\n\n.stats\n{\n    margin-left: 5px;\n    margin-bottom: 5px;\n    color: #7f7f7f;\n    font-family: \"Lucida Console\", Monaco, monospace;\n}\n\n.stats-likes\n{\n    margin-left: 5px;\n    margin-right: 20px;\n    color: #7f7f7f;\n    font-family: \"Lucida Console\", Monaco, monospace;\n}\n\n.comment-input\n{\n    width: 95%;\n    margin-left: 5px;\n    margin-top: 5px;\n}\n\n.comment-user-pic\n{\n    float: left;\n    width: 20px;\n    height: 20px;\n    margin-right: 5px;\n    margin-top: 5px;\n}\n\n.comment-user-name\n{\n    margin-right: 5px;\n    margin-top: 5px;\n}\n\nul\n{\n    padding: 0;\n}\n\n@media (max-width: 600px) \n{\n    .user-pic\n    {\n        display: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdwb3N0L25ld3Bvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsZ0RBQWdEO0lBQ2hELGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnREFBZ0Q7QUFDcEQ7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0RBQWdEO0FBQ3BEOztBQUVBOztJQUVJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUk7O1FBRUksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uZXdwb3N0L25ld3Bvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbFxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMnB4ICNkZGRkZGQ7XG59XG5cbi5wYW5lbC1mb290ZXJcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGJvcmRlcjogMnB4ICNkZGRkZGQ7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLnBvc3QtaGVhZGluZ1xue1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ucG9zdC11c2VyLW5hbWVcbntcbiAgICBjb2xvcjogcmdiKDEyLCA3NiwgMTc4KTtcbiAgICBmb250LWZhbWlseTogXCJMdWNpZGEgQ29uc29sZVwiLCBNb25hY28sIG1vbm9zcGFjZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBvc3QtZGVzY3JpcHRpb25cbntcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnBvc3QtdGV4dFxue1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4udXNlci1waWNcbntcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uc3RhdHNcbntcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjb2xvcjogIzdmN2Y3ZjtcbiAgICBmb250LWZhbWlseTogXCJMdWNpZGEgQ29uc29sZVwiLCBNb25hY28sIG1vbm9zcGFjZTtcbn1cblxuLnN0YXRzLWxpa2VzXG57XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICM3ZjdmN2Y7XG4gICAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIENvbnNvbGVcIiwgTW9uYWNvLCBtb25vc3BhY2U7XG59XG5cbi5jb21tZW50LWlucHV0XG57XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmNvbW1lbnQtdXNlci1waWNcbntcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uY29tbWVudC11c2VyLW5hbWVcbntcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbnVsXG57XG4gICAgcGFkZGluZzogMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSBcbntcbiAgICAudXNlci1waWNcbiAgICB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSJdfQ== */"

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
        if (this.locklikedislikes === false) {
            this.commService.addLikes(this.feedID).subscribe(res => {
                this.locklikedislikes = true;
                this.likes++;
            }, error => { console.log(error); });
        }
    }
    onAddDislikes() {
        if (this.locklikedislikes === false) {
            this.commService.addDislikes(this.feedID).subscribe(res => {
                this.locklikedislikes = true;
                this.dislikes++;
            }, error => { console.log(error); });
        }
    }
    onGetComments() {
        if (this.showComments == false) {
            this.commService.getPostComments(this.feedID).subscribe(res => {
                this.comments = res;
                this.showComments = true;
            }, error => { console.log(error); });
        }
    }
    onEnterComment(commentbox) {
        this.commService.addComment(this.feedID, commentbox).subscribe(res => {
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

module.exports = ".container-newsfeed-main\n{\n    margin-top: 50px;\n    display: flex;\n    justify-content: flex-start;\n}\n\n.container-newsfeed-profile\n{\n    margin-top: 50px;\n    margin-left: 50px;\n}\n\n.user-name-list-element\n{\n    font-style: bold;\n    font-size: 30px;\n    text-align: center;\n}\n\n.container-newsfeed\n{\n    margin-left: 10px;\n    margin-right: 0px;\n    width: 50%;\n}\n\n.container-nomoreposts\n{\n    margin-top: 100px;\n    text-align: center; \n}\n\n@media (max-width: 600px) \n{\n    .container-newsfeed-profile\n    {\n        display: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzZmVlZC9uZXdzZmVlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSTs7UUFFSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ld3NmZWVkL25ld3NmZWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLW5ld3NmZWVkLW1haW5cbntcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uY29udGFpbmVyLW5ld3NmZWVkLXByb2ZpbGVcbntcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4udXNlci1uYW1lLWxpc3QtZWxlbWVudFxue1xuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci1uZXdzZmVlZFxue1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5jb250YWluZXItbm9tb3JlcG9zdHNcbntcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIFxue1xuICAgIC5jb250YWluZXItbmV3c2ZlZWQtcHJvZmlsZVxuICAgIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59Il19 */"

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
        this.profileImageID = localStorage.getItem('userImageID');
        this.nomoreposts = false;
        this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(src_app_components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_3__["NewpostComponent"]);
        console.log(this.currentUserName + " " + this.profileImageID);
        this.userNameArray = this.currentUserName.split(" ");
    }
    ngOnDestroy() {
        console.log('NewsFeed OnDestroy');
    }
    ngOnInit() {
        console.log('Newsfeed OnInit');
        this.viewContainerRef = this.npHost.viewContainerRef;
        this.getFeedPosts();
        this.scrSrv.scrollObs.subscribe(res => {
            if (res.text === 'newsfeed') {
                this.getFeedPosts();
            }
        });
    }
    getFeedPosts() {
        this.commService.getNewsFeed().subscribe(res => {
            let limit = res.length;
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
                componentRef.instance.locklikedislikes = abc.locklikesdislikes === 'true' ? true : false;
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

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen\n{\n    .register-form\n    {\n        margin-top: 5%;\n    }    \n}\n\n@media (min-width: 320px) and (max-width: 700px)\n{\n    .register-form\n    {\n        margin-top: 10%;\n    }    \n}\n\n.registration-card\n{\n    width: 50%;\n}\n\n.register-form\n{   \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\nmat-form-field\n{\n    width: 100%;\n}\n\nmat-form-field input.mat-input-element \n{\n    height: 20px;\n    vertical-align: top;\n}\n\n.error \n{\n    padding: 16px;\n    width: 300px;\n    color: white;\n    background-color: red;\n}\n\n.error-message \n{\n    font-size: 12px;\n}\n\n.button-register\n{\n    margin-top: 30px;\n    width: 100%;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJOztRQUVJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTs7SUFFSTs7UUFFSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7O0lBRUksVUFBVTtBQUNkOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlblxue1xuICAgIC5yZWdpc3Rlci1mb3JtXG4gICAge1xuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICB9ICAgIFxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweClcbntcbiAgICAucmVnaXN0ZXItZm9ybVxuICAgIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIH0gICAgXG59XG5cbi5yZWdpc3RyYXRpb24tY2FyZFxue1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5yZWdpc3Rlci1mb3JtXG57ICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkXG57XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1mb3JtLWZpZWxkIGlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IFxue1xuICAgIGhlaWdodDogMjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uZXJyb3IgXG57XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmVycm9yLW1lc3NhZ2UgXG57XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYnV0dG9uLXJlZ2lzdGVyXG57XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");









class PasswordErrorStateMatcher {
    isErrorState(control, form) {
        const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
        return (invalidCtrl || invalidParent);
    }
}
let RegisterComponent = class RegisterComponent {
    constructor(commService, router, authService, fb) {
        this.commService = commService;
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.registrationInProgress = false;
        this.registerFailure = false;
        this.hasValidImageFile = false;
        this.selectFileTouched = false;
        this.passwordMatchError = false;
        this.selectedFileName = "";
        this.errorMatcher = new PasswordErrorStateMatcher();
        this.uploadData = new FormData();
        this.emailPattern = "^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
        this.passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$";
        this.phonePattern = "^[\+][0-9]{1,3}[0-9]{4,14}$";
        this.genders = ["Male", "Female", "Other"];
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'minlength', message: 'Email must be at least 7 characters long' },
                { type: 'maxlength', message: 'Email cannot be more than 25 characters long' },
                { type: 'pattern', message: 'Enter a valid email' },
                { type: 'emailnotavailable', message: 'Email not available' }
            ],
            'firstname': [
                { type: 'required', message: 'First name is required' },
            ],
            'lastname': [
                { type: 'required', message: 'Last name is required' },
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'pattern', message: 'Enter a valid password' }
            ],
            'confirm_password': [
                { type: 'required', message: 'Confirm password is required' },
            ],
            'phone': [
                { type: 'required', message: 'Phone is required' },
                { type: 'pattern', message: 'Enter a valid phone number' }
            ],
            'gender': [
                { type: 'required', message: 'Gender is required' }
            ],
            'birthday': [
                { type: 'required', message: 'Birthday is required' }
            ],
        };
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.passwordPattern),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], this.checkValidEmail.bind(this)),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.genders[0], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.phonePattern), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        }, { validators: this.passwordValidator });
    }
    checkValidEmail(control) {
        var c = control.value;
        if (c.length > 6 && c.indexOf('@') !== -1 && c.indexOf('.') !== -1) {
            return new Promise(resolve => {
                new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](observer => observer.next(c)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((value) => { return this.commService.checkEmailAvailability(value); }))
                    .subscribe((res) => {
                    console.log(res);
                    if (res.status === 'AVAILABLE') {
                        resolve(null);
                    }
                    else if (res.status === 'NOT_AVAILABLE') {
                        resolve({ emailnotavailable: true });
                    }
                });
            });
        }
        else {
            return new Promise(resolve => { resolve(null); });
        }
    }
    passwordValidator(form) {
        var pass = form.get('password').value;
        var conpass = form.get('confirm_password').value;
        const condition = pass === conpass;
        return condition ? null : { notSame: true };
    }
    onRegisterFormSubmit(value) {
        if (this.registerForm.valid) {
            var userData = {
                firstname: this.registerForm.get('firstname').value,
                lastname: this.registerForm.get('lastname').value,
                password: this.registerForm.get('password').value,
                phone: this.registerForm.get('phone').value,
                birthday: this.registerForm.get('birthday').value,
                email: this.registerForm.get('email').value,
                gender: this.registerForm.get('gender').value
            };
            this.uploadData.append('userData', JSON.stringify(userData));
            this.registrationInProgress = true;
            this.commService.registerNewUser(this.uploadData).subscribe((event) => {
                localStorage.clear();
                switch (event.type) {
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Sent:
                        console.log('Request has been made!');
                        break;
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].ResponseHeader:
                        console.log('Response header has been received!');
                        break;
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress:
                        var progress = Math.round(event.loaded / event.total * 100);
                        console.log(`Uploaded! ${progress}%`);
                        break;
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response:
                        {
                            if (event.body.status === "REGISTRATION_SUCCESSFUL") {
                                console.log('Registration Successful');
                                this.commService.sendCredential(userData.email, userData.password).subscribe(res => {
                                    console.log(res);
                                    localStorage.setItem('xAuthToken', res[0].token);
                                    localStorage.setItem('isLoggenIn', 'true');
                                    localStorage.setItem('resetNotificationMenu', 'true');
                                    localStorage.setItem("userImageID", res[0].userImageID);
                                    localStorage.setItem("currentUserName", res[0].currentUserName);
                                    this.authService.login();
                                    this.router.navigate(['/newsfeed']);
                                }, error => {
                                    //this.loginFailure = true;
                                    console.log(error);
                                });
                            }
                        }
                }
            }, error => { console.log(error); });
        }
    }
    onFileChanged(event) {
        let fr = new FileReader;
        let img = new Image();
        fr.onload = () => {
            img.onload = () => {
                console.log(img.width + " " + img.height);
                if (img.width == 400 && img.height == 400) {
                    this.hasValidImageFile = true;
                    this.selectedFile = event.target.files[0];
                    this.selectedFileName = this.selectedFile.name;
                    this.uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
                }
                else
                    this.hasValidImageFile = false;
            };
            img.src = fr.result;
        };
        fr.readAsDataURL(event.target.files[0]);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_8__["CommunicationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/singlepost/singlepost.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/singlepost/singlepost.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-singlepost\n{\n    margin-top: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaW5nbGVwb3N0L3NpbmdsZXBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpbmdsZXBvc3Qvc2luZ2xlcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1zaW5nbGVwb3N0XG57XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/singlepost/singlepost.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/singlepost/singlepost.component.ts ***!
  \***************************************************************/
/*! exports provided: SinglepostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglepostComponent", function() { return SinglepostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _newpost_newpost_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../newpost/newpost.directive */ "./src/app/components/newpost/newpost.directive.ts");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");
/* harmony import */ var _newpost_newpost_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../newpost/newpost.component */ "./src/app/components/newpost/newpost.component.ts");






let SinglepostComponent = class SinglepostComponent {
    constructor(componentFactoryResolver, commService, route) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.commService = commService;
        this.route = route;
        this.singlePostcomponentFactory = this.componentFactoryResolver.resolveComponentFactory(_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_5__["NewpostComponent"]);
    }
    ngOnInit() {
        this.singlePostviewContainerRef = this.npHost.viewContainerRef;
        this.commService.getSinglePost(this.route.snapshot.paramMap.get('postID'), this.route.snapshot.paramMap.get('notUserID')).subscribe(res => {
            const componentRef = this.singlePostviewContainerRef.createComponent(this.singlePostcomponentFactory);
            componentRef.instance.fullName = res['fullName'];
            componentRef.instance.text = res['text'];
            componentRef.instance.likes = res['likes'];
            componentRef.instance.dislikes = res['dislikes'];
            componentRef.instance.numComments = res['numComments'];
            componentRef.instance.imagePath = res['imagePath'];
            componentRef.instance.timestamp = res['timestamp'];
            componentRef.instance.feedID = res['feedID'];
            componentRef.instance.locklikedislikes = res['locklikesdislikes'] === 'true' ? true : false;
        }, error => { console.log(error); });
    }
};
SinglepostComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_newpost_newpost_directive__WEBPACK_IMPORTED_MODULE_3__["NPostDirective"], { static: true })
], SinglepostComponent.prototype, "npHost", void 0);
SinglepostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-singlepost',
        template: __webpack_require__(/*! raw-loader!./singlepost.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/singlepost/singlepost.component.html"),
        styles: [__webpack_require__(/*! ./singlepost.component.css */ "./src/app/components/singlepost/singlepost.component.css")]
    })
], SinglepostComponent);



/***/ }),

/***/ "./src/app/components/wall/wall.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/wall/wall.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-wall\n{\n    margin-top: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n}\n\n.container-wallnomoreposts\n{\n    margin-top: 10px;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-size: 30px;\n}\n\n.wall-newposteditor\n{\n    width: 80%;\n    margin-top: 100px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.wall-newposteditor textarea\n{\n    width: 80%;\n    height: 60px;\n    border-radius: 5px;\n    margin-right: 5px;\n    border: 1px solid #D3D3D3;\n    font-size: 12px;\n}\n\n.wall-newposteditor button\n{\n    width: 10%;\n    height: 60px;\n    border: none;\n    border-radius: 10px;\n    background-color: #3498db;\n    color: #fff;\n    font-family: 'Bellota-BoldItalic', sans-serif;\n    text-shadow: #73B6E2 0.5px 0.5px 0px;\n    font-size: 90%;\n    position: absolute;\n    outline: 0;\n    margin: 0;\n    box-shadow: 0 9px #999;\n}\n\n.wall-newposteditor button:hover\n{\n    background-color: #3e8e41\n}\n\n.wall-newposteditor button:active\n{\n    background-color: #3e8e41;\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93YWxsL3dhbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLHdFQUF3RTtJQUN4RSxlQUFlO0FBQ25COztBQUVBOztJQUVJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsNkNBQTZDO0lBQzdDLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJO0FBQ0o7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dhbGwvd2FsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci13YWxsXG57XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLmNvbnRhaW5lci13YWxsbm9tb3JlcG9zdHNcbntcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbi53YWxsLW5ld3Bvc3RlZGl0b3JcbntcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLndhbGwtbmV3cG9zdGVkaXRvciB0ZXh0YXJlYVxue1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDNEM0QzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLndhbGwtbmV3cG9zdGVkaXRvciBidXR0b25cbntcbiAgICB3aWR0aDogMTAlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnQmVsbG90YS1Cb2xkSXRhbGljJywgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LXNoYWRvdzogIzczQjZFMiAwLjVweCAwLjVweCAwcHg7XG4gICAgZm9udC1zaXplOiA5MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG91dGxpbmU6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgOXB4ICM5OTk7XG59XG5cbi53YWxsLW5ld3Bvc3RlZGl0b3IgYnV0dG9uOmhvdmVyXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MVxufVxuXG4ud2FsbC1uZXdwb3N0ZWRpdG9yIGJ1dHRvbjphY3RpdmVcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4ICM2NjY7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG59Il19 */"

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
            if (res.text === 'wall') {
                console.log(res);
                this.getWallPosts();
            }
        });
    }
    getWallPosts() {
        this.commService.getWallPosts().subscribe(res => {
            let limit = res.length;
            console.log(limit);
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
                componentRef.instance.locklikedislikes = abc.locklikesdislikes === 'true' ? true : false;
            }
        }, error => { console.log(error); this.wallnomoreposts = true; });
    }
    onAddNewWallPostClick() {
        if (this.wallNewPostText.length > 0) {
            this.commService.addWallPost(this.wallNewPostText).subscribe(res => {
                console.log(res);
                const componentRef = this.wallviewContainerRef.createComponent(this.wallcomponentFactory, 0);
                componentRef.instance.fullName = localStorage.getItem('currentUserName');
                componentRef.instance.text = this.wallNewPostText;
                componentRef.instance.likes = 0;
                componentRef.instance.dislikes = 0;
                componentRef.instance.numComments = 0;
                componentRef.instance.imagePath = localStorage.getItem('userImageID');
                componentRef.instance.timestamp = (new Date()).toDateString();
                componentRef.instance.feedID = res['WallPostID'];
                componentRef.instance.locklikedislikes = false;
            });
        }
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



let CommunicationService = class CommunicationService {
    constructor(http) {
        this.http = http;
        this.serverPath = "";
    }
    getFriendsWallPosts(friendImageID) {
        let url = this.serverPath + 'getfriendswall/' + friendImageID;
        return this.http.get(url);
    }
    getWallPosts() {
        let url = this.serverPath + 'getwallposts/';
        return this.http.get(url);
    }
    getSinglePost(postID, notUserID) {
        let url = this.serverPath + 'getsinglepost/?PostID=' + postID + '&NotUserID=' + notUserID;
        return this.http.get(url);
    }
    getNewsFeed() {
        let url = this.serverPath + 'getnewsfeed/';
        return this.http.get(url);
    }
    getPostComments(postID) {
        let url = this.serverPath + 'getcomments/' + postID + '/';
        return this.http.get(url);
    }
    getFriendsList() {
        let url = this.serverPath + 'getfriendslist/';
        return this.http.get(url);
    }
    getChatHistory(userImageID) {
        let url = this.serverPath + 'getchathistory/?userImageID=' + userImageID;
        return this.http.get(url);
    }
    addComment(postID, text) {
        let url = this.serverPath + 'addcomment/' + postID + '/' + text + '/';
        return this.http.get(url);
    }
    addLikes(postID) {
        let url = this.serverPath + 'addlikes/' + postID + '/';
        return this.http.get(url);
    }
    addDislikes(postID) {
        let url = this.serverPath + 'adddislikes/' + postID + '/';
        return this.http.get(url);
    }
    addWallPost(text) {
        let url = this.serverPath + 'addwallpost/' + text + '/';
        return this.http.get(url);
    }
    sendCredential(email, password) {
        let url = this.serverPath + '/login';
        let encodedCredentials = btoa(email + ":" + password);
        let basicHeader = "Basic " + encodedCredentials;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': basicHeader
        });
        return this.http.get(url, { headers });
    }
    checkFriendRequestStatus(usrImageID) {
        let url = this.serverPath + 'checkfriendrequeststatus/?userImageID=' + usrImageID;
        console.log(url);
        return this.http.get(url);
    }
    sendFriendRequest(usrImageID) {
        let url = this.serverPath + 'sendfriendrequest/?userImageID=' + usrImageID;
        console.log(url);
        return this.http.get(url);
    }
    manageFriendRequest(usrImageID, friendrequeststatus) {
        let url = this.serverPath + 'managefriendrequest/?userImageID=' + usrImageID + '&frndrqststs=' + friendrequeststatus;
        console.log(url);
        return this.http.get(url);
    }
    logout() {
        let url = this.serverPath + 'logout/';
        return this.http.get(url);
    }
    checkSession(token) {
        let url = this.serverPath + 'checksession/?sessiontoken=' + token;
        return this.http.get(url);
    }
    checkEmailAvailability(emailID) {
        let url = this.serverPath + 'checkemailavailability/?emailID=' + emailID;
        return this.http.get(url);
    }
    registerNewUser(formData) {
        let url = this.serverPath + 'registernewuser';
        return this.http.post(url, formData, { reportProgress: true, observe: 'events' });
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

/***/ "./src/app/services/websocketmessaging.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/websocketmessaging.service.ts ***!
  \********************************************************/
/*! exports provided: WebsocketmessagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketmessagingService", function() { return WebsocketmessagingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stomp/stompjs */ "./node_modules/@stomp/stompjs/index.js");
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stomp_stompjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





var stompClient = null;
let WebsocketmessagingService = class WebsocketmessagingService {
    constructor() {
        this.serverPath = "";
        this.chatSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.chatObs = this.chatSubject.asObservable();
        this.onlineSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.onlineObs = this.onlineSubject.asObservable();
        this.notificationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.notificationObs = this.notificationSubject.asObservable();
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.searchObs = this.searchSubject.asObservable();
        this.newFriendSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.newFriendObs = this.newFriendSubject.asObservable();
    }
    connectToChat() {
        var that = this;
        console.log(this.serverPath + 'chat');
        const socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_3__(this.serverPath + 'chat');
        stompClient = _stomp_stompjs__WEBPACK_IMPORTED_MODULE_2__["over"](socket);
        stompClient.connect({}, function (frame) {
            console.log("Connected :- " + frame);
            stompClient.subscribe(`/user/queue/messages`, function (messageOutput) {
                that.onMessageReceived(JSON.parse(messageOutput.body));
            });
        }, this.onError);
    }
    onError(error) {
        console.log("Error Websocket" + error);
    }
    onMessageReceived(payload) {
        if (payload.hasOwnProperty('content')) //Chat message
            this.chatSubject.next(payload);
        else if (payload.hasOwnProperty('type')) {
            if (payload.type === 'FRIEND_REQUEST' || payload.type === 'COMMENT' || payload.type === 'LIKE' || payload.type === 'DISLIKE' || payload.type === 'NEWPOST')
                this.notificationSubject.next(payload);
            else if (payload.type === 'FRIEND_LIST_UPDATE')
                this.newFriendSubject.next(payload); //Add new friend to friends list
            else if (payload.type === 'ONLINE_STATUS')
                this.onlineSubject.next(payload);
        }
        else if (Array.isArray(payload)) //Search messages are returned as Array
         {
            this.searchSubject.next(payload);
        }
    }
    sendChatMessage(toId, fromId, message) {
        var chatMessage = { chatMessage: 'CHAT', sender: localStorage.getItem('userImageID'), recipient: toId, content: message };
        var topic = `/app/chat`;
        stompClient.send(`${topic}`, {}, JSON.stringify(chatMessage));
    }
    sendSearchMessage(searchText) {
        var chatMessage = { content: searchText };
        var topic = `/app/search`;
        stompClient.send(`${topic}`, {}, JSON.stringify(chatMessage));
    }
};
WebsocketmessagingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WebsocketmessagingService);



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