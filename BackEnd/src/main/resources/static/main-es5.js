function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-formly/core */
    "./node_modules/@ngx-formly/core/__ivy_ngcc__/fesm2015/ngx-formly-core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.showLogin = false;
        this.showRegister = true;
        this.selectFileTouched = false;
        this.selectedFileName = "";
        this.isValidImageFile = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.loginModel = {};
        this.loginFields = [{
          key: 'email',
          type: 'input',
          templateOptions: {
            type: 'email',
            label: 'Email',
            placeholder: 'Email',
            minLength: 6,
            maxLength: 30,
            required: true
          },
          validators: {
            validation: ['email']
          }
        }, {
          key: 'password',
          type: 'input',
          templateOptions: {
            type: 'password',
            label: 'Password',
            placeholder: 'Password',
            minLength: 6,
            maxLength: 30,
            required: true
          },
          validators: {
            validation: ['password']
          }
        }];
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.registerModel = {};
        this.registerFields = [{
          key: 'firstName',
          type: 'input',
          templateOptions: {
            label: 'First Name'
          }
        }, {
          key: 'lastName',
          type: 'input',
          templateOptions: {
            label: 'Last Name'
          }
        }, {
          key: 'email',
          type: 'input',
          templateOptions: {
            type: 'email',
            label: 'Email',
            placeholder: 'Email',
            minLength: 6,
            maxLength: 30
          },
          validators: {
            validation: ['email']
          }
        }, {
          validators: {
            validation: [{
              name: 'passwordMatch',
              options: {
                errorPath: 'passwordConfirm'
              }
            }]
          },
          fieldGroup: [{
            key: 'password',
            type: 'input',
            templateOptions: {
              type: 'password',
              label: 'Password',
              placeholder: 'Must be at least 3 characters',
              minLength: 3
            }
          }, {
            key: 'passwordConfirm',
            type: 'input',
            templateOptions: {
              type: 'password',
              label: 'Confirm Password',
              placeholder: 'Please re-enter your password'
            }
          }]
        }, {
          key: 'telephone',
          type: 'input',
          templateOptions: {
            label: 'Telephone',
            placeholder: 'Telephone'
          },
          validators: {
            validation: ['telephone']
          }
        }, {
          key: 'genderSelect',
          type: 'select',
          templateOptions: {
            label: 'Gender',
            placeholder: 'Placeholder',
            options: [{
              value: 1,
              label: 'Male'
            }, {
              value: 2,
              label: 'Female'
            }, {
              value: 3,
              label: 'Other'
            }]
          }
        }, {
          key: 'Datepicker',
          type: 'datepicker',
          templateOptions: {
            label: 'Date of birth',
            placeholder: 'Date of birth'
          }
        }];
      }

      _createClass(AppComponent, [{
        key: "onLoginSubmit",
        value: function onLoginSubmit() {
          if (this.loginForm.valid) {
            console.log(this.loginModel);
          }
        }
      }, {
        key: "onRegisterSubmit",
        value: function onRegisterSubmit() {
          if (this.registerForm.valid) {
            console.log(this.registerModel);
          }
        }
      }, {
        key: "loadPage",
        value: function loadPage(choice) {
          if (choice === 'register') {
            this.showLogin = false;
            this.showRegister = true;
          }
        }
      }, {
        key: "onFileChanged",
        value: function onFileChanged(event) {
          var _this = this;

          var fr = new FileReader();
          this.selectFileTouched = true;
          this.selectedFile = event.target.files[0];
          this.selectedFileName = this.selectedFile.name;
          var img = new Image();

          fr.onload = function () {
            img.onload = function () {
              console.log(img.width + " " + img.height);

              if (img.width == 400 && img.height == 400) {
                _this.isValidImageFile = true;
                _this.selectedFile = event.target.files[0];
                _this.selectedFileName = _this.selectedFile.name; //  this.uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
              } else _this.isValidImageFile = false;
            };

            img.src = fr.result;
          };

          fr.readAsDataURL(event.target.files[0]);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 26,
      vars: 17,
      consts: [[1, "loginPageStyle"], [1, "startPageTitle"], [1, "loginFormStyle", 3, "formGroup"], [3, "form", "model", "fields"], [1, "loginButtonGroup"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "registerFormStyle", 3, "formGroup"], ["type", "file", "accept", ".jpg,.jpeg", 2, "display", "none", 3, "change"], ["fileInput", ""], ["type", "button", 3, "click"], [1, "error-message"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "FriendBook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "formly-form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() {
            return ctx.onLoginSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_8_listener() {
            return ctx.loadPage("register");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "FriendBook Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "formly-form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_16_listener($event) {
            return ctx.onFileChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

            return _r0.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Select Display Picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-error", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Wrong Image Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_24_listener() {
            return ctx.onRegisterSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.showLogin ? "flex" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.loginForm)("model", ctx.loginModel)("fields", ctx.loginFields);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.showRegister ? "flex" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.registerForm)("model", ctx.registerModel)("fields", ctx.registerFields);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.selectFileTouched && !ctx.isValidImageFile ? "inline" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedFileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.registerForm.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FormlyForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"]],
      styles: ["@media (min-device-width: 900px) \n{\n    .startPageTitle[_ngcontent-%COMP%]\n    {\n        font-size: 2rem;\n        font-style: italic;\n    }\n    \n    .loginPageStyle[_ngcontent-%COMP%]\n    {\n        margin-top: 0;\n        padding-top: 0;\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    \n    .loginFormStyle[_ngcontent-%COMP%]\n    {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        width: 80vw;\n        height: 50vh;\n        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n        transition: 0.3s;\n    }\n    \n    .loginButtonGroup[_ngcontent-%COMP%]\n    {\n        width: 50%;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-around;\n        align-items: center;\n    }\n    \n    .registerFormStyle[_ngcontent-%COMP%]\n    {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        width: 80vw;\n        height: 90vh;\n    }\n}\n\n@media  (min-device-width: 300px) and (max-device-width: 500px) and (orientation: portrait)\n{\n    .startPageTitle[_ngcontent-%COMP%]\n    {\n        font-size: 1rem;\n        font-style: italic;\n    }\n\n    .loginPageStyle[_ngcontent-%COMP%]\n    {\n        font-size: 10px;\n        margin-top: 0;\n        padding-top: 0;\n        width: 100vw;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n       \n    .registerFormStyle[_ngcontent-%COMP%]\n    {\n        width: 90vw;\n    }\n}\n\n@media (min-device-width: 470px) and (max-device-width: 830px) and (orientation: landscape)\n{\n    .startPageTitle[_ngcontent-%COMP%]\n    {\n        font-size: 1rem;\n        font-style: italic;\n    }\n\n    .loginPageStyle[_ngcontent-%COMP%]\n    {\n        font-size: 10px;\n        margin-top: 0;\n        padding-top: 0;\n        width: 100vw;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n       \n    .registerFormStyle[_ngcontent-%COMP%]\n    {\n        width: 50vw;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7O1FBRUksZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7SUFFQTs7UUFFSSxhQUFhO1FBQ2IsY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsbUJBQW1CO0lBQ3ZCOztJQUVBOztRQUVJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsWUFBWTtRQUNaLHVDQUF1QztRQUN2QyxnQkFBZ0I7SUFDcEI7O0lBRUE7O1FBRUksVUFBVTtRQUNWLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsNkJBQTZCO1FBQzdCLG1CQUFtQjtJQUN2Qjs7SUFFQTs7UUFFSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTs7SUFFSTs7UUFFSSxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCOztJQUVBOztRQUVJLGVBQWU7UUFDZixhQUFhO1FBQ2IsY0FBYztRQUNkLFlBQVk7UUFDWixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixtQkFBbUI7SUFDdkI7O0lBRUE7O1FBRUksV0FBVztJQUNmO0FBQ0o7O0FBRUE7O0lBRUk7O1FBRUksZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7SUFFQTs7UUFFSSxlQUFlO1FBQ2YsYUFBYTtRQUNiLGNBQWM7UUFDZCxZQUFZO1FBQ1osYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsbUJBQW1CO0lBQ3ZCOztJQUVBOztRQUVJLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi1kZXZpY2Utd2lkdGg6IDkwMHB4KSBcbntcbiAgICAuc3RhcnRQYWdlVGl0bGVcbiAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIH1cbiAgICBcbiAgICAubG9naW5QYWdlU3R5bGVcbiAgICB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgLmxvZ2luRm9ybVN0eWxlXG4gICAge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgIGhlaWdodDogNTB2aDtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIH1cbiAgICBcbiAgICAubG9naW5CdXR0b25Hcm91cFxuICAgIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5yZWdpc3RlckZvcm1TdHlsZVxuICAgIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICBoZWlnaHQ6IDkwdmg7XG4gICAgfVxufVxuXG5AbWVkaWEgIChtaW4tZGV2aWNlLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG57XG4gICAgLnN0YXJ0UGFnZVRpdGxlXG4gICAge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB9XG5cbiAgICAubG9naW5QYWdlU3R5bGVcbiAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgICAgIFxuICAgIC5yZWdpc3RlckZvcm1TdHlsZVxuICAgIHtcbiAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi1kZXZpY2Utd2lkdGg6IDQ3MHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDgzMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG4gICAgLnN0YXJ0UGFnZVRpdGxlXG4gICAge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB9XG5cbiAgICAubG9naW5QYWdlU3R5bGVcbiAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgICAgIFxuICAgIC5yZWdpc3RlckZvcm1TdHlsZVxuICAgIHtcbiAgICAgICAgd2lkdGg6IDUwdnc7XG4gICAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: EmailValidator, EmailValidatorMessage, PasswordValidator, PasswordValidatorMessage, TelephoneValidator, TelephoneValidatorMessage, ImageFileSize, passwordMatchValidator, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailValidator", function () {
      return EmailValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailValidatorMessage", function () {
      return EmailValidatorMessage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordValidator", function () {
      return PasswordValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordValidatorMessage", function () {
      return PasswordValidatorMessage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TelephoneValidator", function () {
      return TelephoneValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TelephoneValidatorMessage", function () {
      return TelephoneValidatorMessage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageFileSize", function () {
      return ImageFileSize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "passwordMatchValidator", function () {
      return passwordMatchValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-formly/core */
    "./node_modules/@ngx-formly/core/__ivy_ngcc__/fesm2015/ngx-formly-core.js");
    /* harmony import */


    var _ngx_formly_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-formly/material */
    "./node_modules/@ngx-formly/material/__ivy_ngcc__/fesm2015/ngx-formly-material.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-formly/material/datepicker */
    "./node_modules/@ngx-formly/material/__ivy_ngcc__/fesm2015/ngx-formly-material-datepicker.js");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");

    var appearance = {
      appearance: 'outline'
    };

    function EmailValidator(control) {
      return !control.value || /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(control.value) ? null : {
        'email': true
      };
    }

    function EmailValidatorMessage(err, field) {
      return "\"".concat(field.formControl.value, "\" is not a valid email address");
    }

    function PasswordValidator(control) {
      return !control.value || /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(control.value) ? null : {
        'password': true
      };
    }

    function PasswordValidatorMessage(err, field) {
      return "\"".concat(field.formControl.value, "\" is not a valid password");
    }

    function TelephoneValidator(control) {
      return !control.value || /^[\+][0-9]{1,3}[0-9]{4,14}$/.test(control.value) ? null : {
        'telephone': true
      };
    }

    function TelephoneValidatorMessage(err, field) {
      return "\"".concat(field.formControl.value, "\" is not a valid telephone number");
    }

    function ImageFileSize(err, field) {
      return "Image is large";
    }

    function passwordMatchValidator(control) {
      var _control$value = control.value,
          password = _control$value.password,
          passwordConfirm = _control$value.passwordConfirm; // avoid displaying the message error when values are empty

      if (!passwordConfirm || !password) {
        return null;
      }

      if (passwordConfirm === password) {
        return null;
      }

      return {
        passwordMatch: {
          message: 'Password Not Matching'
        }
      };
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
        useValue: appearance
      }],
      imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__["FormlyModule"].forRoot({
        validationMessages: [{
          name: 'password',
          message: PasswordValidatorMessage
        }, {
          name: 'telephone',
          message: TelephoneValidatorMessage
        }, {
          name: 'email',
          message: EmailValidatorMessage
        }],
        validators: [{
          name: 'password',
          validation: PasswordValidator
        }, {
          name: 'telephone',
          validation: TelephoneValidator
        }, {
          name: 'email',
          validation: EmailValidator
        }, {
          name: 'passwordMatch',
          validation: passwordMatchValidator
        }]
      }), _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _ngx_formly_material__WEBPACK_IMPORTED_MODULE_6__["FormlyMaterialModule"], _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["FormlyMatDatepickerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"]],
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__["FormlyModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _ngx_formly_material__WEBPACK_IMPORTED_MODULE_6__["FormlyMaterialModule"], _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["FormlyMatDatepickerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"]],
          imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__["FormlyModule"].forRoot({
            validationMessages: [{
              name: 'password',
              message: PasswordValidatorMessage
            }, {
              name: 'telephone',
              message: TelephoneValidatorMessage
            }, {
              name: 'email',
              message: EmailValidatorMessage
            }],
            validators: [{
              name: 'password',
              validation: PasswordValidator
            }, {
              name: 'telephone',
              validation: TelephoneValidator
            }, {
              name: 'email',
              validation: EmailValidator
            }, {
              name: 'passwordMatch',
              validation: passwordMatchValidator
            }]
          }), _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _ngx_formly_material__WEBPACK_IMPORTED_MODULE_6__["FormlyMaterialModule"], _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["FormlyMatDatepickerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
          providers: [{
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
            useValue: appearance
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/main.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/main/main.component.ts ***!
    \***************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppComponentsMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)();
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 2,
      vars: 0,
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "main works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/khan/IdeaProjects/friendbook/fbFrontEnd/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map