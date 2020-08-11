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

module.exports = "<div class = \"login-form\">\n  <mat-card>\n    <mat-card-title class = \"login-form-title\">FriendBook</mat-card-title>\n    <mat-card-content  class = \"login-form-content\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onFormSubmit(loginForm.value)\">\n        <p>\n          <mat-form-field>\n            <input type=\"text\" matInput placeholder=\"Username\" formControlName=\"username\">\n            <mat-error *ngFor=\"let validation of validation_messages.username\">\n              <mat-error class=\"error-message\" *ngIf=\"loginForm.get('username').hasError(validation.type) && (loginForm.get('username').dirty \n              || loginForm.get('username').touched)\">{{validation.message}}</mat-error>\n            </mat-error>\n          </mat-form-field>\n        </p>      \n        <p>\n          <mat-form-field>\n            <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n            <mat-error *ngFor=\"let validation of validation_messages.password\">\n              <mat-error class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty \n              || loginForm.get('password').touched)\">{{validation.message}}</mat-error>\n            </mat-error>\n          </mat-form-field>\n        </p>      \n        <mat-error class=\"error-message\" *ngIf=\"loginFailure\">Invalid Login</mat-error>\n        <div class = \"button-login\">\n          <button type=\"submit\" mat-button>Login</button>\n        </div>\n        <div class = \"button-register\">\n          <button (click)=\"onRegister()\" mat-button>Register</button>\n        </div>  \n      </form>\n    </mat-card-content>\n  </mat-card>  \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"nav-bar-friendbook\" fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngIf=\"isLoggedIn$ | async\">\n    <div class=\"nav-item-title\">\n        FriendBook\n    </div>\n    <form class=\"nav-bar-search\" fxFlex = \"60%\">\n        <mat-form-field class=\"search-text-input\">\n            <input matInput placeholder=\"Search\" aria-label=\"Number\" [formControl]=\"searchFormControl\" [matAutocomplete]=\"auto\">\n            <mat-autocomplete class=\"search-autocomplete\" #auto=\"matAutocomplete\">\n            <mat-option (onSelectionChange)=\"onSearchItemSelected($event, option)\" *ngFor=\"let option of autoCompleteList | async\" [value]=\"option.name\">\n                <div class = \"search-result-item\">\n                    <img class = \"search-user-pic\" src=\"/images/{{option.imageID}}.jpg\" width=\"30\" height=\"30\"> &nbsp; &nbsp;\n                    <span class = \"search-user-name\">{{option.name}}</span>\n                </div>\n            </mat-option>\n            </mat-autocomplete>\n        </mat-form-field>\n    </form>\n    <span fxFlex></span>\n    <div class=\"nav-bar-bubble\" [ngStyle]=\"{'visibility':enableNotification ? 'visible' : 'hidden'}\" [matMenuTriggerFor]=\"notificationMenu\">{{noOfNotification}}</div>\n    <i class=\"nav-bar-notification\" (click)=\"onNotificationClicked()\"><img src=\"/icons/notification.svg\" width=\"50\" height=\"50\"></i>\n    <mat-menu #notificationMenu=\"matMenu\" yPosition=\"above\">\n        <ng-container *ngFor=\"let item of notificationMenuArray\">\n            <button *ngIf=!item.templateName mat-menu-item (click)=\"onNotificationItemSelected(item)\">{{item.text}}</button>\n        </ng-container>\n    </mat-menu>\n    <div class=\"nav-bar-newsfeed\">\n        <i (click)=\"onNewsFeedClicked()\"><img src=\"/icons/home.svg\" width=\"50\" height=\"50\"></i>\n    </div>\n    <div class=\"nav-bar-wall\">\n        <i (click)=\"onWallClicked()\"><img src=\"/icons/firewall.svg\" width=\"50\" height=\"50\"></i>\n    </div>\n    <div class=\"nav-bar-logout\">\n        <i (click)=\"onLogoutClicked()\"><img src=\"/icons/logout.svg\" width=\"50\" height=\"50\"></i> \n    </div>\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/newpost/newpost.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/newpost/newpost.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<div class=\"panel\"> \n  <div class = \"post-heading\">\n    <div class = \"title\">\n          <img class = \"user-pic\" src=\"/images/{{imagePath}}.jpg\">            \n          <span class = \"post-user-name\">{{fullName}}</span> &nbsp; made a post\n    </div>\n    <div class = \"post-time\">{{timestamp}}</div>\n  </div>\n  <div class = \"post-description\">\n    <div class =\"post-text\">\n        <p>\n            {{text}}\n        </p>\n    </div>\n    <div class = \"stats\">\n          <i (click)=\"onAddLikes()\"><img src=\"/icons/like.svg\" width=\"20\" height=\"20\"> <span class = \"stats-likes\">{{likes}}</span> </i> \n          <i (click)=\"onAddDislikes()\"><img src=\"/icons/dislike.svg\" width=\"20\" height=\"20\"> <span class = \"stats-likes\">{{dislikes}}</span> </i> \n          <i (click)=\"onGetComments()\"><img src=\"/icons/comment.svg\" width=\"20\" height=\"20\"> <span class = \"stats-likes\">{{numComments}}</span> </i> \n    </div>\n    <input class = \"comment-input\" #commentbox (keyup.enter)=\"onEnterComment(commentbox.value)\" placeholder = \"Add a comment ...\" type = \"text\">\n  <div *ngIf=\"showComments\" class = \"panel-footer\">\n    <ul style = \"list-style-type:none\">\n        <li *ngFor=\"let cmnt of comments\" class = \"comment-list-element\">\n          <div class = \"comment-body\">\n              <img class = \"comment-user-pic\" src=\"/images/{{cmnt.imagePath}}.jpg\">\n              <span class = \"comment-user-name\">{{cmnt.fullName}}  &nbsp;  &nbsp; {{cmnt.timestamp}}</span>\n          </div>\n          <div class = \"comment-text\">{{cmnt.text}}</div>          \n        </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/newsfeed/newsfeed.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/newsfeed/newsfeed.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-newsfeed-main\">\n    <div class=\"container-newsfeed-profile\">\n        <div class = \"user-pic\"> <img src='/images/{{profileImageID}}.jpg' width=\"250\" height=\"250\"> </div>\n        <div fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\n            <div *ngFor=\"let uname of userNameArray\">\n                <div class=\"user-name-list-element\">{{uname}}</div>\n            </div>\n        </div>\n        </div>\n    <div class=\"container-newsfeed\">\n        <div class=\"container-posts\">\n            <div class=\"container-newposts\">\n                <ng-template np-host></ng-template>\n            </div>        \n            <div class=\"container-nomoreposts\" *ngIf=\"nomoreposts\">There are no more posts to show right now</div>        \n        </div>    \n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"register-form\">\n    <mat-card>\n      <mat-card-title class = \"register-form-title\">FriendBook</mat-card-title>\n      <mat-card-content  class = \"register-form-content\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegisterFormSubmit(registerForm.value)\">\n          <p>\n            <mat-form-field>\n              <input type=\"text\" matInput placeholder=\"First Name\" formControlName=\"firstname\">\n              <mat-error *ngFor=\"let validation of validation_messages.firstname\">\n                <mat-error class=\"error-message\" *ngIf=\"registerForm.get('firstname').hasError(validation.type) && (registerForm.get('firstname').dirty \n                || registerForm.get('firstname').touched)\">{{validation.message}}</mat-error>\n              </mat-error>\n            </mat-form-field>\n          </p>      \n          <p>\n            <mat-form-field>\n              <input type=\"text\" matInput placeholder=\"Last Name\" formControlName=\"lastname\">\n              <mat-error *ngFor=\"let validation of validation_messages.lastname\">\n                <mat-error class=\"error-message\" *ngIf=\"registerForm.get('lastname').hasError(validation.type) && (registerForm.get('lastname').dirty \n                || registerForm.get('lastname').touched)\">{{validation.message}}</mat-error>\n              </mat-error>\n            </mat-form-field>\n          </p>\n          <p>\n            <mat-form-field>\n              <input type=\"text\" matInput placeholder=\"Email\" formControlName=\"email\">\n              <mat-error *ngFor=\"let validation of validation_messages.email\">\n                <mat-error class=\"error-message\" *ngIf=\"registerForm.get('email').hasError(validation.type) && (registerForm.get('email').dirty \n                  || registerForm.get('email').touched)\">{{validation.message}}\n                </mat-error>\n              </mat-error>\n            </mat-form-field>\n          </p>\n          <p>\n            <mat-form-field>\n              <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n              <mat-error *ngFor=\"let validation of validation_messages.password\">\n                <mat-error class=\"error-message\" *ngIf=\"registerForm.get('password').hasError(validation.type) && (registerForm.get('password').dirty \n                || registerForm.get('password').touched)\">{{validation.message}}</mat-error>\n              </mat-error>\n            </mat-form-field>\n          </p>      \n          <p>\n            <mat-form-field>\n              <input type=\"password\" matInput placeholder=\"Confirm Password\" formControlName=\"confirm_password\" [errorStateMatcher] = \"errorMatcher\">\n              <mat-error *ngIf=\"registerForm.hasError('notSame')\">\n                Passwords do not match\n              </mat-error>\n            </mat-form-field>\n          </p>      \n          <p>\n            <mat-form-field>\n              <input matInput type=\"tel\" placeholder=\"Phone\" formControlName=\"phone\">\n              <mat-error *ngFor=\"let validation of validation_messages.phone\">\n                <mat-error class=\"error-message\" *ngIf=\"registerForm.get('phone').hasError(validation.type) && \n                (registerForm.get('phone').dirty || registerForm.get('phone').touched)\">{{validation.message}}</mat-error>\n              </mat-error>\n            </mat-form-field>\n          </p>\n          <p>\n            <mat-form-field>\n              <mat-select placeholder=\"Gender\">\n                <mat-option *ngFor=\"let gender of genders\" [value]=\"gender\">\n                  {{ gender }}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngFor=\"let validation of validation_messages.gender\">\n                <mat-error class=\"error-message\" *ngIf=\"registerForm.get('gender').hasError(validation.type) && (registerForm.get('gender').dirty || \n                registerForm.get('gender').touched)\">{{validation.message}}</mat-error>\n              </mat-error>\n            </mat-form-field>\n          </p>\n          <p>\n            <mat-form-field>\n              <input matInput [matDatepicker]=\"picker\" placeholder=\"Birthday\" formControlName=\"birthday\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker #picker></mat-datepicker>\n              <mat-error *ngFor=\"let validation of validation_messages.birthday\">\n                <mat-error class=\"error-message\" *ngIf=\"registerForm.get('birthday').hasError(validation.type) && (registerForm.get('birthday').dirty || \n                registerForm.get('birthday').touched)\">{{validation.message}}</mat-error>\n              </mat-error>\n            </mat-form-field>\n          </p>\n          <p>\n            <input style=\"display: none\" type=\"file\" accept=\".jpg,.jpeg\" (change)=\"onFileChanged($event)\" #fileInput>\n            <button type=\"button\" (click)=\"fileInput.click()\">Select Display Picture</button>\n            <mat-error class=\"error-message\" *ngIf=\"selectFileTouched && !hasValidImageFile\">Wrong Image Size</mat-error>          \n          </p>\n          <mat-error class=\"error-message\" *ngIf=\"registerFailure\">Registration Failure</mat-error>\n          <button class = \"button-register\" type=\"submit\" [disabled]=\"!registerForm.valid || !hasValidImageFile\" mat-raised-button color=\"primary\">Register</button>              \n        </form>\n      </mat-card-content>\n    </mat-card>  \n</div>\n\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/newsfeed/newsfeed.component */ "./src/app/components/newsfeed/newsfeed.component.ts");
/* harmony import */ var _components_wall_wall_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/wall/wall.component */ "./src/app/components/wall/wall.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _route_reuse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./route-reuse */ "./src/app/route-reuse.ts");
/* harmony import */ var _components_singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/singlepost/singlepost.component */ "./src/app/components/singlepost/singlepost.component.ts");
/* harmony import */ var _components_friendrequest_friendrequest_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/friendrequest/friendrequest.component */ "./src/app/components/friendrequest/friendrequest.component.ts");
/* harmony import */ var _components_friendswall_friendswall_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/friendswall/friendswall.component */ "./src/app/components/friendswall/friendswall.component.ts");
/* harmony import */ var _components_friendrequestmanage_friendrequestmanage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/friendrequestmanage/friendrequestmanage.component */ "./src/app/components/friendrequestmanage/friendrequestmanage.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");












var routes = [
    { path: 'newsfeed', component: _components_newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_3__["NewsfeedComponent"] },
    { path: 'wall', component: _components_wall_wall_component__WEBPACK_IMPORTED_MODULE_4__["WallComponent"] },
    { path: 'index', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'singlepost/:postID/:notUserID', component: _components_singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_7__["SinglepostComponent"] },
    { path: 'friendrequest/:friendImageID/:userFullName', component: _components_friendrequest_friendrequest_component__WEBPACK_IMPORTED_MODULE_8__["FriendrequestComponent"] },
    { path: 'friendrequestmanage/:friendImageID/:userFullName', component: _components_friendrequestmanage_friendrequestmanage_component__WEBPACK_IMPORTED_MODULE_10__["FriendrequestmanageComponent"] },
    { path: 'friendswall/:friendImageID', component: _components_friendswall_friendswall_component__WEBPACK_IMPORTED_MODULE_9__["FriendswallComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"], useClass: _route_reuse__WEBPACK_IMPORTED_MODULE_6__["CustomReuseStrategy"] }]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/scroll.service */ "./src/app/services/scroll.service.ts");
/* harmony import */ var _components_chatcontainer_chatcontrol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/chatcontainer/chatcontrol */ "./src/app/components/chatcontainer/chatcontrol.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");
/* harmony import */ var src_app_services_websocketmessaging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/websocketmessaging.service */ "./src/app/services/websocketmessaging.service.ts");








var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, scrSrv, authService, commService, wscommService) {
        var _this = this;
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
        this.isLoggedIn$.subscribe(function (res) {
            if (res == true) {
                _this.adapter.commService = _this.commService;
                _this.adapter.wsService = _this.wscommService;
                _this.adapter.setFriendsList();
                _this.adapter.registerCallBacks();
                _this.wscommService.connectToChat();
            }
        });
    }
    AppComponent.prototype.checkScroll = function () {
        var a = document.documentElement.scrollTop;
        var b = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var c = a / b * 100;
        if (c == 100) {
            if (this.router.url === '/newsfeed')
                this.scrSrv.sendScrollMessage('newsfeed');
            else if (this.router.url === '/wall')
                this.scrSrv.sendScrollMessage('wall');
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_3__["ScrollService"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_6__["CommunicationService"] },
        { type: src_app_services_websocketmessaging_service__WEBPACK_IMPORTED_MODULE_7__["WebsocketmessagingService"] }
    ]; };
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng_chat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-chat */ "./node_modules/ng-chat/fesm5/ng-chat.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/newsfeed/newsfeed.component */ "./src/app/components/newsfeed/newsfeed.component.ts");
/* harmony import */ var _components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/newpost/newpost.component */ "./src/app/components/newpost/newpost.component.ts");
/* harmony import */ var _components_newpost_newpost_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/newpost/newpost.directive */ "./src/app/components/newpost/newpost.directive.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_wall_wall_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/wall/wall.component */ "./src/app/components/wall/wall.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/singlepost/singlepost.component */ "./src/app/components/singlepost/singlepost.component.ts");
/* harmony import */ var _components_friendswall_friendswall_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/friendswall/friendswall.component */ "./src/app/components/friendswall/friendswall.component.ts");
/* harmony import */ var _components_friendrequest_friendrequest_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/friendrequest/friendrequest.component */ "./src/app/components/friendrequest/friendrequest.component.ts");
/* harmony import */ var _components_friendrequestmanage_friendrequestmanage_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/friendrequestmanage/friendrequestmanage.component */ "./src/app/components/friendrequestmanage/friendrequestmanage.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_10__["NewsfeedComponent"],
                _components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_11__["NewpostComponent"],
                _components_newpost_newpost_directive__WEBPACK_IMPORTED_MODULE_12__["NPostDirective"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _components_wall_wall_component__WEBPACK_IMPORTED_MODULE_14__["WallComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _components_singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_17__["SinglepostComponent"],
                _components_friendrequest_friendrequest_component__WEBPACK_IMPORTED_MODULE_19__["FriendrequestComponent"],
                _components_friendswall_friendswall_component__WEBPACK_IMPORTED_MODULE_18__["FriendswallComponent"],
                _components_friendrequestmanage_friendrequestmanage_component__WEBPACK_IMPORTED_MODULE_20__["FriendrequestmanageComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ng_chat__WEBPACK_IMPORTED_MODULE_7__["NgChatModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["NoopAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]
            ],
            providers: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            entryComponents: [_components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_11__["NewpostComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-chat */ "./node_modules/ng-chat/fesm5/ng-chat.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ChatControl = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ChatControl, _super);
    function ChatControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chatHistory = [];
        _this.mockedParticipants = [];
        return _this;
    }
    ChatControl.prototype.registerCallBacks = function () {
        var _this = this;
        this.wsService.chatObs.subscribe(function (res) {
            _this.insertMessage(res);
        });
        this.wsService.onlineObs.subscribe(function (res) {
            _this.setOnlineStatus(res);
        });
        this.wsService.newFriendObs.subscribe(function (res) {
            _this.addNewFriend(res);
        });
    };
    ChatControl.prototype.listFriends = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.mockedParticipants.map(function (user) {
            var participantResponse = new ng_chat__WEBPACK_IMPORTED_MODULE_1__["ParticipantResponse"]();
            participantResponse.participant = user;
            participantResponse.metadata =
                {
                    totalUnreadMessages: 0
                };
            return participantResponse;
        }));
    };
    ChatControl.prototype.addNewFriend = function (payload) {
        var _this = this;
        this.createUser(payload);
        this.listFriends().subscribe(function (res) { _this.onFriendsListChanged(res); });
    };
    ChatControl.prototype.setFriendsList = function () {
        var _this = this;
        var friendsList;
        this.mockedParticipants.length = 0;
        this.commService.getFriendsList().subscribe(function (res) {
            friendsList = res;
            friendsList.forEach(function (t) { _this.createUser(t); });
            _this.listFriends().subscribe(function (res) { _this.onFriendsListChanged(res); });
        }, function (error) { console.log(error); });
    };
    ChatControl.prototype.createUser = function (usr) {
        localStorage.setItem(usr.imagePath, usr.fullName);
        var onlineStatus = usr.onlinestatus === 'offline' ? ng_chat__WEBPACK_IMPORTED_MODULE_1__["ChatParticipantStatus"].Offline : ng_chat__WEBPACK_IMPORTED_MODULE_1__["ChatParticipantStatus"].Online;
        var pRes = {
            participantType: ng_chat__WEBPACK_IMPORTED_MODULE_1__["ChatParticipantType"].User,
            id: usr.imagePath,
            displayName: usr.fullName,
            avatar: "/images/" + usr.imagePath + ".jpg",
            status: onlineStatus
        };
        this.mockedParticipants.push(pRes);
    };
    ChatControl.prototype.insertMessage = function (payload) {
        var replyMessage = new ng_chat__WEBPACK_IMPORTED_MODULE_1__["Message"]();
        replyMessage.message = payload.content;
        replyMessage.fromId = payload.sender;
        replyMessage.dateSent = payload.timeStamp;
        var user = this.mockedParticipants.find(function (x) { return x.id == replyMessage.fromId; });
        this.onMessageReceived(user, replyMessage);
    };
    ChatControl.prototype.setOnlineStatus = function (payload) {
        var _this = this;
        var user = this.mockedParticipants.find(function (x) { return x.id == payload.imagePath; });
        if (typeof user != 'undefined') {
            var onlineStatus = payload.onlineStatusMessage === 'online' ? ng_chat__WEBPACK_IMPORTED_MODULE_1__["ChatParticipantStatus"].Online : ng_chat__WEBPACK_IMPORTED_MODULE_1__["ChatParticipantStatus"].Offline;
            var pRes = {
                participantType: ng_chat__WEBPACK_IMPORTED_MODULE_1__["ChatParticipantType"].User,
                id: user.id,
                displayName: user.displayName,
                avatar: "/images/" + user.id + ".jpg",
                status: onlineStatus
            };
            var index = this.mockedParticipants.indexOf(user);
            this.mockedParticipants[index] = pRes;
            this.listFriends().subscribe(function (res) { _this.onFriendsListChanged(res); });
        }
    };
    ChatControl.prototype.getMessageHistory = function (userId) {
        var mockedHistory = [];
        var userHistoryEntry = this.chatHistory.find(function (x) { return x.userImageID == userId; });
        if (typeof userHistoryEntry === 'undefined') {
            var usrMsgHistory = [];
            userHistoryEntry = { userImageID: userId, userMessagesHistory: [] };
            //No history entry for this user so fetch history from server
            this.commService.getChatHistory(userId).subscribe(function (res) {
                if (res.hasOwnProperty('status')) //No history found
                 {
                }
                else {
                    res.forEach(function (t) {
                        var msg = { fromId: t.fromUserID, toId: t.toUserID, message: t.text, dateSent: t.timeStamp };
                        usrMsgHistory.push(msg);
                    });
                    Array.prototype.push.apply(userHistoryEntry.userMessagesHistory, usrMsgHistory);
                    Array.prototype.push.apply(mockedHistory, usrMsgHistory);
                }
            });
            this.chatHistory.push(userHistoryEntry);
        }
        else {
            if (userHistoryEntry.userMessagesHistory.length > 0)
                Array.prototype.push.apply(mockedHistory, userHistoryEntry.userMessagesHistory);
        }
        console.log(mockedHistory);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(mockedHistory).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(2000));
    };
    ChatControl.prototype.sendMessage = function (message) {
        console.log(message);
        this.wsService.sendChatMessage(message.toId, message.fromId, message.message);
    };
    return ChatControl;
}(ng_chat__WEBPACK_IMPORTED_MODULE_1__["ChatAdapter"]));



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FriendrequestComponent = /** @class */ (function () {
    function FriendrequestComponent(commService, route) {
        this.commService = commService;
        this.route = route;
        this.sendfriendrequest = true;
    }
    FriendrequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileImageID = this.route.snapshot.paramMap.get('friendImageID');
        this.fullname = this.route.snapshot.paramMap.get('userFullName');
        this.userNameArray = this.fullname.split(" ");
        this.commService.checkFriendRequestStatus(this.profileImageID).subscribe(function (res) {
            console.log(res);
            if (res.status === 'pending') {
                _this.sendfriendrequest = false;
            }
        }, function (error) { console.log(error); });
    };
    FriendrequestComponent.prototype.onSendFriendRequestClick = function () {
        var _this = this;
        this.commService.sendFriendRequest(this.profileImageID).subscribe(function (res) {
            console.log(res);
            if (res.status === 'sent') {
                _this.sendfriendrequest = false;
            }
        }, function (error) { console.log(error); });
    };
    FriendrequestComponent.ctorParameters = function () { return [
        { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    FriendrequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friendrequest',
            template: __webpack_require__(/*! raw-loader!./friendrequest.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/friendrequest/friendrequest.component.html"),
            styles: [__webpack_require__(/*! ./friendrequest.component.css */ "./src/app/components/friendrequest/friendrequest.component.css")]
        })
    ], FriendrequestComponent);
    return FriendrequestComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");




var FriendrequestmanageComponent = /** @class */ (function () {
    function FriendrequestmanageComponent(commService, route) {
        this.commService = commService;
        this.route = route;
        this.acceptfriendrequest = true;
        this.rejectfriendrequest = true;
        this.acceptfriendrequestmessage = false;
        this.rejectfriendrequestmessage = false;
    }
    FriendrequestmanageComponent.prototype.ngOnInit = function () {
        this.profileImageID = this.route.snapshot.paramMap.get('friendImageID');
        this.fullname = this.route.snapshot.paramMap.get('userFullName');
        this.userNameArray = this.fullname.split(" ");
    };
    FriendrequestmanageComponent.prototype.onManageFriendRequestClick = function (status) {
        var _this = this;
        this.commService.manageFriendRequest(this.profileImageID, status).subscribe(function (res) {
            console.log(res);
            if (res['status'] === 'FRIEND_REQUEST_ACCEPTED')
                _this.acceptfriendrequestmessage = true;
            else if (res['status'] === 'FRIEND_REQUEST_REJECTED')
                _this.rejectfriendrequestmessage = true;
        }, function (error) { console.log(error); });
    };
    FriendrequestmanageComponent.ctorParameters = function () { return [
        { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_3__["CommunicationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    FriendrequestmanageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friendrequestmanage',
            template: __webpack_require__(/*! raw-loader!./friendrequestmanage.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/friendrequestmanage/friendrequestmanage.component.html"),
            styles: [__webpack_require__(/*! ./friendrequestmanage.component.css */ "./src/app/components/friendrequestmanage/friendrequestmanage.component.css")]
        })
    ], FriendrequestmanageComponent);
    return FriendrequestmanageComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/communication.service */ "./src/app/services/communication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_newpost_newpost_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/newpost/newpost.directive */ "./src/app/components/newpost/newpost.directive.ts");
/* harmony import */ var src_app_components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/newpost/newpost.component */ "./src/app/components/newpost/newpost.component.ts");






var FriendswallComponent = /** @class */ (function () {
    function FriendswallComponent(commService, route, componentFactoryResolver) {
        this.commService = commService;
        this.route = route;
        this.componentFactoryResolver = componentFactoryResolver;
        this.showPosts = false;
        this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(src_app_components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_5__["NewpostComponent"]);
    }
    FriendswallComponent.prototype.ngOnInit = function () {
        var _this = this;
        var imagePath = this.route.snapshot.paramMap.get('friendImageID');
        var fullname = localStorage.getItem(imagePath);
        this.commService.getFriendsWallPosts(imagePath).subscribe(function (res) {
            _this.showPosts = true;
            _this.viewContainerRef = _this.npHost.viewContainerRef;
            var limit = res.length;
            console.log(limit);
            for (var i = 0; i < limit; i++) {
                var abc = res[i];
                var componentRef = _this.viewContainerRef.createComponent(_this.componentFactory);
                componentRef.instance.fullName = fullname;
                componentRef.instance.text = abc.posttext;
                componentRef.instance.likes = abc.likes;
                componentRef.instance.dislikes = abc.dislikes;
                componentRef.instance.numComments = abc.numComments;
                componentRef.instance.imagePath = imagePath;
                componentRef.instance.timestamp = abc.posttime;
                componentRef.instance.feedID = abc.id;
            }
        }, function (error) { console.log(error); });
    };
    FriendswallComponent.ctorParameters = function () { return [
        { type: _services_communication_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
    ]; };
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
    return FriendswallComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form\n{   \n    display: flex;\n    justify-content: center;\n    margin: 100px 0px;\n}\n\n.mat-form-field \n{\n    width: 100%;\n    min-width: 300px;\n}\n\n.login-form-content, .login-form-title \n{\n  display: flex;\n  justify-content: center;\n}\n\n.error \n{\n    padding: 16px;\n    width: 300px;\n    color: white;\n    background-color: red;\n}\n\n.error-message \n{\n    font-size: 12px;\n}\n\n.button-login, .button-register\n{\n    margin-top: 30px;\n    width: 100%;\n    height: 60px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybVxueyAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMDBweCAwcHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZCBcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG4ubG9naW4tZm9ybS1jb250ZW50LCAubG9naW4tZm9ybS10aXRsZSBcbntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5lcnJvciBcbntcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uZXJyb3ItbWVzc2FnZSBcbntcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5idXR0b24tbG9naW4sIC5idXR0b24tcmVnaXN0ZXJcbntcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(commService, router, authService, fb) {
        this.commService = commService;
        this.router = router;
        this.authService = authService;
        this.fb = fb;
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
    LoginComponent.prototype.ngOnInit = function () {
        this.createLoginForm();
        this.logoutuser();
    };
    LoginComponent.prototype.createLoginForm = function () {
        this.loginForm = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.emailPattern),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]))
        });
    };
    LoginComponent.prototype.logoutuser = function () {
        var _this = this;
        var logInResult = localStorage.getItem('isLoggenIn');
        if (logInResult === 'true') //Check if we are a fresh login page or redirect
         {
            var token = localStorage.getItem('xAuthToken');
            console.log(token);
            this.commService.checkSession(token).subscribe(function (res) {
                console.log(res);
                if (res['status'] === 'SESSION_ACTIVE') {
                    console.log('Already logged in');
                    _this.commService.logout().subscribe(function (res) {
                        if (res['status'] === 'LOGOUT_SUCCESS') {
                            console.log('Logged out');
                            localStorage.clear();
                        }
                    });
                }
            }, function (error) { console.log(error); });
        }
    };
    LoginComponent.prototype.onFormSubmit = function (value) {
        var _this = this;
        if (this.loginForm.valid) {
            localStorage.clear();
            var usrName = this.loginForm.get('username').value;
            var passWord = this.loginForm.get('password').value;
            console.log(usrName + "  " + passWord);
            this.commService.sendCredential(usrName, passWord).subscribe(function (res) {
                console.log(res);
                localStorage.setItem('xAuthToken', res[0].token);
                localStorage.setItem('isLoggenIn', 'true');
                localStorage.setItem('resetNotificationMenu', 'true');
                localStorage.setItem("userImageID", res[0].userImageID);
                localStorage.setItem("currentUserName", res[0].currentUserName);
                _this.authService.login();
                _this.router.navigate(['/newsfeed']);
            }, function (error) {
                _this.loginFailure = true;
                console.log(error);
            });
        }
    };
    LoginComponent.prototype.onRegister = function () {
        this.router.navigate(['/register']);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-bar-friendbook\n{\n    width: 100%;\n    top: 0;\n    position: fixed;\n    background-color: #b6bedf;\n}\n\n.nav-item-title\n{\n    float: left;    \n    font-style: italic;\n    font-size: 50px;\n    font-family: \"Times New Roman\", Times, serif;\n    margin-right: 50px;\n    margin-left: 10px;\n}\n\n.nav-bar-search\n{\n    float: left;\n    width: 10%;\n    height: 50px;\n}\n\n.search-result-item\n{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    white-space: nowrap;\n    line-height: 45px;\n    height: 45px;\n    padding: 0 16px;\n    text-align: left;\n    max-width: 100%;\n    box-sizing: border-box;\n}\n\n.search-text-input\n{\n    width: 100%;\n    height: 50px;\n}\n\n.nav-bar-notification, .nav-bar-newsfeed, .nav-bar-wall, .nav-bar-logout\n{\n    float: left;\n    margin-right: 10px;\n    margin-left: 10px;\n}\n\n.nav-bar-bubble\n{\n    visibility: hidden;\n    position: relative;\n    top: -10px;\n    right: -70px;\n    padding: 5px 10px;\n    border-radius: 50%;\n    background-color: red;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVztJQUNYLE1BQU07SUFDTixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYmFyLWZyaWVuZGJvb2tcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNmJlZGY7XG59XG5cbi5uYXYtaXRlbS10aXRsZVxue1xuICAgIGZsb2F0OiBsZWZ0OyAgICBcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubmF2LWJhci1zZWFyY2hcbntcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAlO1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLnNlYXJjaC1yZXN1bHQtaXRlbVxue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uc2VhcmNoLXRleHQtaW5wdXRcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5uYXYtYmFyLW5vdGlmaWNhdGlvbiwgLm5hdi1iYXItbmV3c2ZlZWQsIC5uYXYtYmFyLXdhbGwsIC5uYXYtYmFyLWxvZ291dFxue1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm5hdi1iYXItYnViYmxlXG57XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xMHB4O1xuICAgIHJpZ2h0OiAtNzBweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_websocketmessaging_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/websocketmessaging.service */ "./src/app/services/websocketmessaging.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");











var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, authService, commService, wscommService, location) {
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
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoggedIn$ = this.authService.isLoggedIn;
        this.isLoggedIn$.subscribe(function (res) {
            if (res == true) {
                _this.wscommService.notificationObs.subscribe(function (notres) { _this.onNotificationMessageReceived(notres); });
            }
        });
        this.wscommService.searchObs.subscribe(function (seres) { _this.onSearchMessageReceived(seres); });
        //Introduce delay so that not too many calls to the backend are generated
        this.searchFormControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])()).subscribe(function (val) {
            _this.wscommService.sendSearchMessage(val);
        });
    };
    NavbarComponent.prototype.onNotificationMessageReceived = function (payload) {
        var menuItemText = payload.userFullName;
        var mItem;
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
    };
    NavbarComponent.prototype.onSearchMessageReceived = function (payload) {
        var searchList = [];
        payload.forEach(function (t) { var abc = { name: t.userName, imageID: t.imageID }; searchList.push(abc); });
        this.autoCompleteList = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(searchList);
    };
    NavbarComponent.prototype.onNotificationClicked = function () {
        if (this.notificationMenuArray.length > 0 && this.enableNotification == false) {
            this.notificationMenu.openMenu();
        }
    };
    NavbarComponent.prototype.onNewsFeedClicked = function () {
        this.router.navigate(['/newsfeed']);
    };
    NavbarComponent.prototype.onWallClicked = function () {
        this.router.navigate(['/wall']);
    };
    NavbarComponent.prototype.onLogoutClicked = function () {
        this.authService.logout();
        this.location.replaceState('/');
        window.location.reload(); //Do a reload to erase everything and start with a fresh state
    };
    NavbarComponent.prototype.onNotificationItemSelected = function (menuItem) {
        if (typeof this.alreadyClicked.find(function (x) { return x === menuItem.userImageID; }) === 'undefined') {
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
    };
    NavbarComponent.prototype.onSearchItemSelected = function (event, srcItm) {
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
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_6__["CommunicationService"] },
        { type: src_app_services_websocketmessaging_service__WEBPACK_IMPORTED_MODULE_8__["WebsocketmessagingService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
    ]; };
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
    return NavbarComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");
/* harmony import */ var src_app_models_comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/comments */ "./src/app/models/comments.ts");




var NewpostComponent = /** @class */ (function () {
    function NewpostComponent(commService) {
        this.commService = commService;
        this.showComments = false;
        this.comments = [];
    }
    NewpostComponent.prototype.onAddLikes = function () {
        var _this = this;
        if (this.locklikedislikes === false) {
            this.commService.addLikes(this.feedID).subscribe(function (res) {
                _this.locklikedislikes = true;
                _this.likes++;
            }, function (error) { console.log(error); });
        }
    };
    NewpostComponent.prototype.onAddDislikes = function () {
        var _this = this;
        if (this.locklikedislikes === false) {
            this.commService.addDislikes(this.feedID).subscribe(function (res) {
                _this.locklikedislikes = true;
                _this.dislikes++;
            }, function (error) { console.log(error); });
        }
    };
    NewpostComponent.prototype.onGetComments = function () {
        var _this = this;
        if (this.showComments == false) {
            this.commService.getPostComments(this.feedID).subscribe(function (res) {
                _this.comments = res;
                _this.showComments = true;
            }, function (error) { console.log(error); });
        }
    };
    NewpostComponent.prototype.onEnterComment = function (commentbox) {
        var _this = this;
        this.commService.addComment(this.feedID, commentbox).subscribe(function (res) {
            console.log(res);
            if (_this.showComments == false) {
                _this.onGetComments();
            }
            else {
                var cmt = new src_app_models_comments__WEBPACK_IMPORTED_MODULE_3__["Comment"];
                cmt.fullName = localStorage.getItem('currentUserName');
                cmt.text = commentbox;
                cmt.timestamp = new Date();
                cmt.imagePath = localStorage.getItem('userImageID');
                _this.comments.unshift(cmt);
            }
        }, function (error) { console.log(error); });
    };
    NewpostComponent.ctorParameters = function () { return [
        { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationService"] }
    ]; };
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
    return NewpostComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NPostDirective = /** @class */ (function () {
    function NPostDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    NPostDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
    ]; };
    NPostDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[np-host]',
        })
    ], NPostDirective);
    return NPostDirective;
}());



/***/ }),

/***/ "./src/app/components/newsfeed/newsfeed.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/newsfeed/newsfeed.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-newsfeed-main\n{\n    margin-top: 50px;\n    display: flex;\n    justify-content: flex-start;\n}\n\n.container-newsfeed-profile\n{\n    margin-top: 50px;\n    margin-left: 50px;\n}\n\n.user-name-list-element\n{\n    font-style: bold;\n    font-size: 30px;\n    text-align: center;\n}\n\n.container-newsfeed\n{\n    margin-left: 10px;\n    margin-right: 0px;\n    width: 50%;\n}\n\n.container-nomoreposts\n{\n    margin-top: 100px;\n    text-align: center; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzZmVlZC9uZXdzZmVlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3c2ZlZWQvbmV3c2ZlZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItbmV3c2ZlZWQtbWFpblxue1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5jb250YWluZXItbmV3c2ZlZWQtcHJvZmlsZVxue1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi51c2VyLW5hbWUtbGlzdC1lbGVtZW50XG57XG4gICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLW5ld3NmZWVkXG57XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLmNvbnRhaW5lci1ub21vcmVwb3N0c1xue1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_components_newpost_newpost_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/newpost/newpost.directive */ "./src/app/components/newpost/newpost.directive.ts");
/* harmony import */ var src_app_components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/newpost/newpost.component */ "./src/app/components/newpost/newpost.component.ts");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");
/* harmony import */ var src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/scroll.service */ "./src/app/services/scroll.service.ts");






var homePostsCounter = 0;
var NewsfeedComponent = /** @class */ (function () {
    function NewsfeedComponent(commService, componentFactoryResolver, scrSrv) {
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
    NewsfeedComponent.prototype.ngOnDestroy = function () {
        console.log('NewsFeed OnDestroy');
    };
    NewsfeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Newsfeed OnInit');
        this.viewContainerRef = this.npHost.viewContainerRef;
        this.getFeedPosts();
        this.scrSrv.scrollObs.subscribe(function (res) {
            if (res.text === 'newsfeed') {
                _this.getFeedPosts();
            }
        });
    };
    NewsfeedComponent.prototype.getFeedPosts = function () {
        var _this = this;
        this.commService.getNewsFeed().subscribe(function (res) {
            var limit = res.length;
            for (var i = 0; i < limit; i++) {
                var abc = JSON.parse(res[i]);
                var componentRef = _this.viewContainerRef.createComponent(_this.componentFactory);
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
        }, function (error) { console.log(error); _this.nomoreposts = true; });
    };
    NewsfeedComponent.ctorParameters = function () { return [
        { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_5__["ScrollService"] }
    ]; };
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
    return NewsfeedComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-form\n{   \n    display: flex;\n    justify-content: center;\n    margin: 100px 0px;\n}\n\nmat-form-field \n{\n    display: block;\n    width: 100%;\n    min-width: 400px;\n}\n\n.register-form-content, .register-form-title \n{\n  display: flex;\n  justify-content: center;\n}\n\n.error \n{\n    padding: 16px;\n    width: 300px;\n    color: white;\n    background-color: red;\n}\n\n.error-message \n{\n    font-size: 12px;\n}\n\n.button-register\n{\n    margin-top: 30px;\n    width: 100%;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBOztFQUVFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXItZm9ybVxueyAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMDBweCAwcHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIFxue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG59XG5cbi5yZWdpc3Rlci1mb3JtLWNvbnRlbnQsIC5yZWdpc3Rlci1mb3JtLXRpdGxlIFxue1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmVycm9yIFxue1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5lcnJvci1tZXNzYWdlIFxue1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJ1dHRvbi1yZWdpc3Rlclxue1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");









var PasswordErrorStateMatcher = /** @class */ (function () {
    function PasswordErrorStateMatcher() {
    }
    PasswordErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        var invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
        return (invalidCtrl || invalidParent);
    };
    return PasswordErrorStateMatcher;
}());
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(commService, router, authService, fb) {
        this.commService = commService;
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.registerFailure = false;
        this.hasValidImageFile = false;
        this.selectFileTouched = false;
        this.passwordMatchError = false;
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
    RegisterComponent.prototype.ngOnInit = function () {
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
    };
    RegisterComponent.prototype.checkValidEmail = function (control) {
        var _this = this;
        var c = control.value;
        if (c.length > 6 && c.indexOf('@') !== -1 && c.indexOf('.') !== -1) {
            return new Promise(function (resolve) {
                new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](function (observer) { return observer.next(c); }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (value) { return _this.commService.checkEmailAvailability(value); }))
                    .subscribe(function (res) {
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
            return new Promise(function (resolve) { resolve(null); });
        }
    };
    RegisterComponent.prototype.passwordValidator = function (form) {
        var pass = form.get('password').value;
        var conpass = form.get('confirm_password').value;
        var condition = pass === conpass;
        return condition ? null : { notSame: true };
    };
    RegisterComponent.prototype.onRegisterFormSubmit = function (value) {
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
            this.commService.registerNewUser(this.uploadData).subscribe(function (event) {
                switch (event.type) {
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Sent:
                        console.log('Request has been made!');
                        break;
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].ResponseHeader:
                        console.log('Response header has been received!');
                        break;
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress:
                        var progress = Math.round(event.loaded / event.total * 100);
                        console.log("Uploaded! " + progress + "%");
                        break;
                }
            }, function (error) { console.log(error); });
        }
    };
    RegisterComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        var fr = new FileReader;
        var img = new Image();
        fr.onload = function () {
            img.onload = function () {
                console.log(img.width + " " + img.height);
                if (img.width == 400 && img.height == 400) {
                    _this.hasValidImageFile = true;
                    _this.selectedFile = event.target.files[0];
                    _this.uploadData.append('imageFile', _this.selectedFile, _this.selectedFile.name);
                }
                else
                    _this.hasValidImageFile = false;
            };
            img.src = fr.result;
        };
        fr.readAsDataURL(event.target.files[0]);
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_8__["CommunicationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _newpost_newpost_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../newpost/newpost.directive */ "./src/app/components/newpost/newpost.directive.ts");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");
/* harmony import */ var _newpost_newpost_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../newpost/newpost.component */ "./src/app/components/newpost/newpost.component.ts");






var SinglepostComponent = /** @class */ (function () {
    function SinglepostComponent(componentFactoryResolver, commService, route) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.commService = commService;
        this.route = route;
        this.singlePostcomponentFactory = this.componentFactoryResolver.resolveComponentFactory(_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_5__["NewpostComponent"]);
    }
    SinglepostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.singlePostviewContainerRef = this.npHost.viewContainerRef;
        this.commService.getSinglePost(this.route.snapshot.paramMap.get('postID'), this.route.snapshot.paramMap.get('notUserID')).subscribe(function (res) {
            var componentRef = _this.singlePostviewContainerRef.createComponent(_this.singlePostcomponentFactory);
            componentRef.instance.fullName = res['fullName'];
            componentRef.instance.text = res['text'];
            componentRef.instance.likes = res['likes'];
            componentRef.instance.dislikes = res['dislikes'];
            componentRef.instance.numComments = res['numComments'];
            componentRef.instance.imagePath = res['imagePath'];
            componentRef.instance.timestamp = res['timestamp'];
            componentRef.instance.feedID = res['feedID'];
            componentRef.instance.locklikedislikes = res['locklikesdislikes'] === 'true' ? true : false;
        }, function (error) { console.log(error); });
    };
    SinglepostComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
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
    return SinglepostComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_components_newpost_newpost_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/newpost/newpost.directive */ "./src/app/components/newpost/newpost.directive.ts");
/* harmony import */ var src_app_components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/newpost/newpost.component */ "./src/app/components/newpost/newpost.component.ts");
/* harmony import */ var src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/communication.service */ "./src/app/services/communication.service.ts");
/* harmony import */ var src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/scroll.service */ "./src/app/services/scroll.service.ts");






var wallPostsCounter = 0;
var WallComponent = /** @class */ (function () {
    function WallComponent(commService, componentFactoryResolver, scrSrv) {
        this.commService = commService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.scrSrv = scrSrv;
        this.wallnomoreposts = false;
        this.wallcomponentFactory = this.componentFactoryResolver.resolveComponentFactory(src_app_components_newpost_newpost_component__WEBPACK_IMPORTED_MODULE_3__["NewpostComponent"]);
    }
    WallComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Wall OnInit');
        this.wallviewContainerRef = this.npHost.viewContainerRef;
        this.getWallPosts();
        this.scrSrv.scrollObs.subscribe(function (res) {
            if (res.text === 'wall') {
                console.log(res);
                _this.getWallPosts();
            }
        });
    };
    WallComponent.prototype.getWallPosts = function () {
        var _this = this;
        this.commService.getWallPosts().subscribe(function (res) {
            var limit = res.length;
            console.log(limit);
            for (var i = 0; i < limit; i++) {
                var abc = JSON.parse(res[i]);
                var componentRef = _this.wallviewContainerRef.createComponent(_this.wallcomponentFactory);
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
        }, function (error) { console.log(error); _this.wallnomoreposts = true; });
    };
    WallComponent.prototype.onAddNewWallPostClick = function () {
        var _this = this;
        if (this.wallNewPostText.length > 0) {
            this.commService.addWallPost(this.wallNewPostText).subscribe(function (res) {
                console.log(res);
                var componentRef = _this.wallviewContainerRef.createComponent(_this.wallcomponentFactory, 0);
                componentRef.instance.fullName = localStorage.getItem('currentUserName');
                componentRef.instance.text = _this.wallNewPostText;
                componentRef.instance.likes = 0;
                componentRef.instance.dislikes = 0;
                componentRef.instance.numComments = 0;
                componentRef.instance.imagePath = localStorage.getItem('userImageID');
                componentRef.instance.timestamp = (new Date()).toDateString();
                componentRef.instance.feedID = res['WallPostID'];
                componentRef.instance.locklikedislikes = false;
            });
        }
    };
    WallComponent.ctorParameters = function () { return [
        { type: src_app_services_communication_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_5__["ScrollService"] }
    ]; };
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
    return WallComponent;
}());



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
var AppConst = /** @class */ (function () {
    function AppConst() {
    }
    AppConst.serverPath = 'http://localhost:8080/';
    return AppConst;
}());



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
var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());



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
var CustomReuseStrategy = /** @class */ (function () {
    function CustomReuseStrategy() {
        this.handlers = {};
    }
    CustomReuseStrategy.prototype.calcKey = function (route) {
        var next = route;
        var url = '';
        while (next) {
            if (next.url) {
                url = next.url.join('/');
            }
            next = next.firstChild;
        }
        return url;
    };
    CustomReuseStrategy.prototype.shouldDetach = function (route) {
        return true;
    };
    CustomReuseStrategy.prototype.store = function (route, handle) {
        this.handlers[this.calcKey(route)] = handle;
    };
    CustomReuseStrategy.prototype.shouldAttach = function (route) {
        return !!route.routeConfig && !!this.handlers[this.calcKey(route)];
    };
    CustomReuseStrategy.prototype.retrieve = function (route) {
        if (!route.routeConfig) {
            return null;
        }
        return this.handlers[this.calcKey(route)];
    };
    CustomReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        return this.calcKey(curr) === this.calcKey(future);
    };
    return CustomReuseStrategy;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _communication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./communication.service */ "./src/app/services/communication.service.ts");




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(commService) {
        this.commService = commService;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    Object.defineProperty(AuthenticationService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function () {
        this.loggedIn.next(true);
    };
    AuthenticationService.prototype.logout = function () {
        this.loggedIn.next(false);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _communication_service__WEBPACK_IMPORTED_MODULE_3__["CommunicationService"] }
    ]; };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthenticationService);
    return AuthenticationService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_app_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/app-const */ "./src/app/constants/app-const.ts");




var CommunicationService = /** @class */ (function () {
    function CommunicationService(http) {
        this.http = http;
    }
    CommunicationService.prototype.getFriendsWallPosts = function (friendImageID) {
        var url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'getfriendswall/' + friendImageID;
        return this.http.get(url);
    };
    CommunicationService.prototype.getWallPosts = function () {
        var url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'getwallposts/';
        return this.http.get(url);
    };
    CommunicationService.prototype.getSinglePost = function (postID, notUserID) {
        var url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'getsinglepost/?PostID=' + postID + '&NotUserID=' + notUserID;
        return this.http.get(url);
    };
    CommunicationService.prototype.getNewsFeed = function () {
        var url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'getnewsfeed/';
        return this.http.get(url);
    };
    CommunicationService.prototype.getPostComments = function (postID) {
        var url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'getcomments/' + postID + '/';
        return this.http.get(url);
    };
    CommunicationService.prototype.getFriendsList = function () {
        var url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'getfriendslist/';
        return this.http.get(url);
    };
    CommunicationService.prototype.getChatHistory = function (userImageID) {
        var url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'getchathistory/?userImageID=' + userImageID;
        return this.http.get(url);
    };
    CommunicationService.prototype.addComment = function (postID, text) {
        var url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'addcomment/' + postID + '/' + text + '/';
        return this.http.get(url);
    };
    CommunicationService.prototype.addLikes = function (postID) {
        var url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'addlikes/' + postID + '/';
        return this.http.get(url);
    };
    CommunicationService.prototype.addDislikes = function (postID) {
        var url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'adddislikes/' + postID + '/';
        return this.http.get(url);
    };
    CommunicationService.prototype.addWallPost = function (text) {
        var url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'addwallpost/' + text + '/';
        return this.http.get(url);
    };
    CommunicationService.prototype.sendCredential = function (email, password) {
        var url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + '/login';
        var encodedCredentials = btoa(email + ":" + password);
        var basicHeader = "Basic " + encodedCredentials;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': basicHeader
        });
        return this.http.get(url, { headers: headers });
    };
    CommunicationService.prototype.checkFriendRequestStatus = function (usrImageID) {
        var url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'checkfriendrequeststatus/?userImageID=' + usrImageID;
        console.log(url);
        return this.http.get(url);
    };
    CommunicationService.prototype.sendFriendRequest = function (usrImageID) {
        var url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'sendfriendrequest/?userImageID=' + usrImageID;
        console.log(url);
        return this.http.get(url);
    };
    CommunicationService.prototype.manageFriendRequest = function (usrImageID, friendrequeststatus) {
        var url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'managefriendrequest/?userImageID=' + usrImageID + '&frndrqststs=' + friendrequeststatus;
        console.log(url);
        return this.http.get(url);
    };
    CommunicationService.prototype.logout = function () {
        var url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'logout/';
        return this.http.get(url);
    };
    CommunicationService.prototype.checkSession = function (token) {
        var url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'checksession/?sessiontoken=' + token;
        return this.http.get(url);
    };
    CommunicationService.prototype.checkEmailAvailability = function (emailID) {
        var url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'checkemailavailability/?emailID=' + emailID;
        return this.http.get(url);
    };
    CommunicationService.prototype.registerNewUser = function (formData) {
        var url = _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].serverPath + 'registernewuser';
        return this.http.post(url, formData, { reportProgress: true, observe: 'events' });
    };
    CommunicationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CommunicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CommunicationService);
    return CommunicationService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ScrollService = /** @class */ (function () {
    function ScrollService() {
        this.scrollSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.scrollObs = this.scrollSubject.asObservable();
    }
    ScrollService.prototype.sendScrollMessage = function (message) {
        this.scrollSubject.next({ text: message });
    };
    ScrollService.prototype.clearScrollMessage = function () {
        this.scrollSubject.next();
    };
    ScrollService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ScrollService);
    return ScrollService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stomp/stompjs */ "./node_modules/@stomp/stompjs/index.js");
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stomp_stompjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var stompClient = null;
var WebsocketmessagingService = /** @class */ (function () {
    function WebsocketmessagingService() {
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
    WebsocketmessagingService.prototype.connectToChat = function () {
        var that = this;
        var socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_3__('http://localhost:8080/chat');
        stompClient = _stomp_stompjs__WEBPACK_IMPORTED_MODULE_2__["over"](socket);
        stompClient.connect({}, function (frame) {
            console.log("Connected :- " + frame);
            stompClient.subscribe("/user/queue/messages", function (messageOutput) {
                that.onMessageReceived(JSON.parse(messageOutput.body));
            });
        }, this.onError);
    };
    WebsocketmessagingService.prototype.onError = function (error) {
        console.log("Error Websocket" + error);
    };
    WebsocketmessagingService.prototype.onMessageReceived = function (payload) {
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
    };
    WebsocketmessagingService.prototype.sendChatMessage = function (toId, fromId, message) {
        var chatMessage = { chatMessage: 'CHAT', sender: localStorage.getItem('userImageID'), recipient: toId, content: message };
        var topic = "/app/chat";
        stompClient.send("" + topic, {}, JSON.stringify(chatMessage));
    };
    WebsocketmessagingService.prototype.sendSearchMessage = function (searchText) {
        var chatMessage = { content: searchText };
        var topic = "/app/search";
        stompClient.send("" + topic, {}, JSON.stringify(chatMessage));
    };
    WebsocketmessagingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], WebsocketmessagingService);
    return WebsocketmessagingService;
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

module.exports = __webpack_require__(/*! /home/khan/IdeaProjects/friendbook/fbFrontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map