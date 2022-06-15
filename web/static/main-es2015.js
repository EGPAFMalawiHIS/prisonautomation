(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/roy/code/new_architecture/prisonautomation/tmp/prisonemr/src/main.ts */"zUnb");


/***/ }),

/***/ "4XPS":
/*!******************************************************!*\
  !*** ./src/app/views/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "bVw4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let RegisterComponent = class RegisterComponent {
    constructor(authService, router, _activatedroute) {
        this.authService = authService;
        this.router = router;
        this._activatedroute = _activatedroute;
        this.alert = false;
        this.warning = false;
        this.selected_val = "";
        this.name = 'Angular 4';
        this.items = [
            'Ant-Man',
            'Aquaman',
            'Asterix',
            'The Atom',
            'The Avengers',
            'Batgirl',
            'Batman',
            'Batwoman'
        ];
        this.origItems = [
            'Ant-Man',
            'Aquaman',
            'Asterix',
            'The Atom',
            'The Avengers',
            'Batgirl',
            'Batman',
            'Batwoman'
        ];
        this.authService.getPeople().subscribe((data) => {
            var sel = document.getElementById('patient_id');
            for (var i = 0; i < data.length; i++) {
                var person_id = data[i].person_id;
                //const names =  data[i]['person_attributes'];
                const attributes = data[i]['person_attributes'];
                Object.keys(attributes).map(function (t) {
                    const attr = attributes[t].type.name;
                    if (attr == "Criminal Justice Number") {
                        var cell6 = attributes[t].value;
                        console.log(cell6);
                    }
                });
            }
        }, error => { console.log(error); });
        this.authService.getRoles().subscribe((data) => {
            var usersroles = document.getElementById('roles');
            const result = data.map(x => x.role);
            result.forEach(op => usersroles.innerHTML += `<option>${op}</option>`);
        }, error => { console.log(error); });
    }
    onChangeofOptions(newGov) {
        console.log(newGov + " Selected value");
        this.selected_val = newGov;
        this.selectList.nativeElement.size = 0;
    }
    filterItem(event) {
        if (!event) {
            this.items = this.origItems;
        } // when nothing has typed*/   
        if (typeof event === 'string') {
            this.items = this.origItems.filter(a => a.toLowerCase()
                .startsWith(event.toLowerCase()));
        }
        //this.selectList.nativeElement.size = 5; 
        this.selectList.nativeElement.size = this.items.length + 1;
    }
    ngOnInit() {
        this.registerForm = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            given_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]),
            family_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]),
            cnfpass: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, this.passValidator),
            // secretkey: new FormControl(null,this.secretkeyValidator),
            roles: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([]),
            patient_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    }
    function() {
        this.registerForm.controls.password.valueChanges.
            subscribe(x => this.registerForm.controls.cnfpass.updateValueAndValidity());
    }
    isValid(controlName) {
        return this.registerForm.get(controlName).invalid && this.registerForm.get(controlName).touched;
    }
    passValidator(control) {
        if (control && (control.value !== null || control.value !== undefined)) {
            const cnfpassValue = control.value;
            const passControl = control.root.get("password");
            if (passControl) {
                const passValue = passControl.value;
                if (passValue !== cnfpassValue || passValue === "") {
                    return { isError: true };
                }
            }
        }
        return null;
    }
    /*secretkeyValidator(control: AbstractControl){
  
      if (control && (control.value !==null || control.value !== undefined)){
  
        const secretValue = control.value;
  
        const secretkeyControl = "prisonemr2021";
  
        if (secretkeyControl){
  
          const secretkeyValue = secretkeyControl;
  
          if (secretkeyValue !==secretValue ){
  
            return {isError :true};
          }
        }
      }
  
      return null;
  
    }*/
    register() {
        console.log(this.registerForm.value);
        //const secretkeyval = this.registerForm.value.secretkey
        //if(secretkeyval === "prisonemr2021"){
        this.authService.submitRegister(this.registerForm.value).
            subscribe(data => {
            console.log(data);
            this.alert = true;
            this.registerForm.reset();
            setTimeout(() => {
                this.router.navigate(['../dashboard'], { relativeTo: this._activatedroute });
            }, 5000); //5s
        }, error => {
            this.warning = true;
            console.log('register_error', error);
            setTimeout(() => {
                this.warning = false;
            }, 3000); //5s
        });
        /* }
         else
         {
      
          return this.registerForm.get("secretkey").invalid && this.registerForm.get("secretkey").touched;
      
        }*/
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
RegisterComponent.propDecorators = {
    selectList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['selectList', { static: false },] }]
};
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], RegisterComponent);

/*import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'register.component.html',
})
export class RegisterComponent {

    registerForm: FormGroup;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.registerForm = this.createFormGroup();
    }

    createFormGroup(): FormGroup {
        return new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(2)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        });
    }

    register(): void {
        this.authService.register(this.registerForm.value).subscribe((msg) => {
            console.log(msg);
        });
    }

}*/ 


/***/ }),

/***/ "8gg5":
/*!**********************************************!*\
  !*** ./src/app/views/error/404.component.ts ***!
  \**********************************************/
/*! exports provided: P404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P404Component", function() { return P404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./404.component.html */ "nAJl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let P404Component = class P404Component {
    constructor() { }
};
P404Component.ctorParameters = () => [];
P404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], P404Component);



/***/ }),

/***/ "9S6d":
/*!***********************************************!*\
  !*** ./src/app/views/register/filter.pipe.ts ***!
  \***********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let FilterPipe = class FilterPipe {
    /**
     * Transform
     *
     * @param {any[]} items
     * @param {string} searchText
     * @returns {any[]}
     */
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        return items.filter(it => {
            return it.toLocaleLowerCase().includes(searchText);
        });
    }
};
FilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'appFilter' })
], FilterPipe);



/***/ }),

/***/ "AytR":
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
    production: false,
    backend_base_url: 'http://localhost:3000/api/v1'
    //production: false,
    //backend_base_url:'https://prisonemr-api.hismalawi.org/api/v1'
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

/***/ "DodC":
/*!****************************************************!*\
  !*** ./src/app/containers/default-layout/index.ts ***!
  \****************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout.component */ "JPqG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return _default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"]; });




/***/ }),

/***/ "G/4p":
/*!*************************************!*\
  !*** ./src/app/containers/index.ts ***!
  \*************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout */ "DodC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return _default_layout__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"]; });




/***/ }),

/***/ "JPqG":
/*!***********************************************************************!*\
  !*** ./src/app/containers/default-layout/default-layout.component.ts ***!
  \***********************************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return DefaultLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./default-layout.component.html */ "lm8q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_nav */ "c2Qq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");







let DefaultLayoutComponent = class DefaultLayoutComponent {
    constructor(authService, router, _activatedroute, datepipe) {
        this.authService = authService;
        this.router = router;
        this._activatedroute = _activatedroute;
        this.datepipe = datepipe;
        this.sidebarMinimized = false;
        this.navItems = _nav__WEBPACK_IMPORTED_MODULE_3__["navItems"];
        this.userid = '';
        this.usernames = '';
        this.year = 0;
        let data = JSON.parse(localStorage.getItem("currentUser"));
        this.usernames = data.username;
    }
    ngOnInit() {
        let dates = new Date();
        this.year = this.datepipe.transform(dates, "y");
    }
    toggleMinimize(e) {
        this.sidebarMinimized = e;
    }
    logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");
        this.router.navigate(['/login'], { relativeTo: this._activatedroute });
        //setTimeout(function () {location.reload();}, 500);
    }
};
DefaultLayoutComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }
];
DefaultLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], DefaultLayoutComponent);



/***/ }),

/***/ "Lrxh":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/500.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "QB/w":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "nSew");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let LoginComponent = class LoginComponent {
    constructor(authService, router, _activatedroute) {
        this.authService = authService;
        this.router = router;
        this._activatedroute = _activatedroute;
        this.loginError = false;
    }
    ngOnInit() {
        this.loginForm = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)])
        });
    }
    isValid(controlName) {
        return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
    }
    login() {
        this.loginError = false;
        console.log(this.loginForm.value);
        this.authService.submitLogin(this.loginForm.value)
            .subscribe(data => {
            //console.log('loggedin',data);
            this.loginForm.reset();
            this.router.navigate(['/dashboard']);
        }, error => {
            //console.log('error found',error);
            this.loginError = true;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], LoginComponent);

/*import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'login.component.html',
})
export class LoginComponent {
    loginForm: FormGroup;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.loginForm = this.createFormGroup();
    }

    createFormGroup(): FormGroup {
        return new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        });
    }

    login(): void {
        //this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe();
    }
}*/ 


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons-angular */ "4r2+");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/icons */ "t17N");






let AppComponent = class AppComponent {
    constructor(iconSet) {
        this.iconSet = iconSet;
        iconSet.icons = Object.assign({}, _coreui_icons__WEBPACK_IMPORTED_MODULE_5__["freeSet"]);
    }
};
AppComponent.ctorParameters = () => [
    { type: _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__["IconSetService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <router-outlet></router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons-angular */ "4r2+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-electron */ "31Lz");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./containers */ "G/4p");
/* harmony import */ var _views_error_404_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/error/404.component */ "8gg5");
/* harmony import */ var _views_error_500_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/error/500.component */ "dxhq");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/register/register.component */ "4XPS");
/* harmony import */ var _views_register_filter_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/register/filter.pipe */ "9S6d");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @coreui/angular */ "ZTs3");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
};






const APP_CONTAINERS = [_containers__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutComponent"]];

// Import 3rd party components


//import { ChartsModule } from 'ng2-charts';
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], ...APP_CONTAINERS, _views_error_404_component__WEBPACK_IMPORTED_MODULE_16__["P404Component"], _views_error_500_component__WEBPACK_IMPORTED_MODULE_17__["P500Component"], _views_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"], _views_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"], _views_register_filter_pipe__WEBPACK_IMPORTED_MODULE_20__["FilterPipe"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            ngx_electron__WEBPACK_IMPORTED_MODULE_13__["NgxElectronModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_21__["AppAsideModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_21__["AppBreadcrumbModule"].forRoot(),
            _coreui_angular__WEBPACK_IMPORTED_MODULE_21__["AppFooterModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_21__["AppHeaderModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_21__["AppSidebarModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_22__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_23__["TabsModule"].forRoot(),
            //ChartsModule,
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"],
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__["IconSetModule"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicRouteStrategy"] }, _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__["IconSetService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "bVw4":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-lg-4\">\n      <div class=\"card text-white bg-info\">\n        <div class=\"card-body pb-0\">\n          <button type=\"button\" class=\"btn btn-transparent p-0 float-right\">\n            <i class=\"icon-location-pin\"></i>\n          </button>\n          <div class=\"text-value\">9.823</div>\n          <div>HIV Testing Services</div>\n        </div>\n        <div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\"\n          [datasets]=\"lineChart2Data\"\n          [labels]=\"lineChart2Labels\"\n          [options]=\"lineChart2Options\"\n          [colors]=\"lineChart2Colours\"\n          [legend]=\"lineChart2Legend\"\n          [chartType]=\"lineChart2Type\"></canvas>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-4\">\n      <div class=\"card text-white bg-primary\">\n        <div class=\"card-body pb-0\">\n          <div class=\"btn-group float-right\" dropdown>\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\n              <i class=\"icon-settings\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n          <div class=\"text-value\">9.823</div>\n          <div>Tuberculosis</div>\n        </div>\n        <div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\"\n                  [datasets]=\"lineChart1Data\"\n                  [labels]=\"lineChart1Labels\"\n                  [options]=\"lineChart1Options\"\n                  [colors]=\"lineChart1Colours\"\n                  [legend]=\"lineChart1Legend\"\n                  [chartType]=\"lineChart1Type\"></canvas>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-4\">\n      <div class=\"card text-white bg-warning\">\n        <div class=\"card-body pb-0\">\n          <div class=\"btn-group float-right\" dropdown>\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\n              <i class=\"icon-settings\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n          <div class=\"text-value\">9.823</div>\n          <div>IPT Services</div>\n        </div>\n        <div class=\"chart-wrapper mt-3\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\"\n          [datasets]=\"lineChart3Data\"\n          [labels]=\"lineChart3Labels\"\n          [options]=\"lineChart3Options\"\n          [colors]=\"lineChart3Colours\"\n          [legend]=\"lineChart3Legend\"\n          [chartType]=\"lineChart3Type\"></canvas>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-4\">\n      <div class=\"card text-white bg-danger\">\n        <div class=\"card-body pb-0\">\n          <div class=\"btn-group float-right\" dropdown>\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\n              <i class=\"icon-settings\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n          <div class=\"text-value\">9.823</div>\n          <div>Sexually Transmitted Infection (STI) Services</div>\n        </div>\n        <div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\"\n          [datasets]=\"barChart1Data\"\n          [labels]=\"barChart1Labels\"\n          [options]=\"barChart1Options\"\n          [colors]=\"barChart1Colours\"\n          [legend]=\"barChart1Legend\"\n          [chartType]=\"barChart1Type\"></canvas>\n        </div>\n      </div>\n    </div><!--/.col-->\n\n    <div class=\"col-sm-6 col-lg-4\">\n      <div class=\"card text-white bg-info\">\n        <div class=\"card-body pb-0\">\n          <div class=\"btn-group float-right\" dropdown>\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\n              <i class=\"icon-settings\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n          <div class=\"text-value\">9.823</div>\n          <div>DTG</div>\n        </div>\n        <div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\"\n          [datasets]=\"barChart1Data\"\n          [labels]=\"barChart1Labels\"\n          [options]=\"barChart1Options\"\n          [colors]=\"barChart1Colours\"\n          [legend]=\"barChart1Legend\"\n          [chartType]=\"barChart1Type\"></canvas>\n        </div>\n      </div>\n    </div><!--/.col-->\n\n    <div class=\"col-sm-6 col-lg-4\">\n      <div class=\"card text-white bg-primary\">\n        <div class=\"card-body pb-0\">\n          <div class=\"btn-group float-right\" dropdown>\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\n              <i class=\"icon-settings\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n          <div class=\"text-value\">9.823</div>\n          <div>Viral Load</div>\n        </div>\n        <div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\"\n          [datasets]=\"barChart1Data\"\n          [labels]=\"barChart1Labels\"\n          [options]=\"barChart1Options\"\n          [colors]=\"barChart1Colours\"\n          [legend]=\"barChart1Legend\"\n          [chartType]=\"barChart1Type\"></canvas>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-sm-5\">\n          <h4 class=\"card-title mb-0\">PRISON MONTHLY DATA REPORTING TOOL</h4>\n          <div class=\"small text-muted\">February 2021</div>\n        </div><!--/.col-->\n        <div class=\"col-sm-7 d-none d-md-block\">\n          <button type=\"button\" class=\"btn btn-primary float-right\"><i class=\"icon-cloud-download\"></i></button>\n          <div class=\"btn-group btn-group-toggle float-right mr-3\" data-toggle=\"buttons\">\n            <label class=\"btn btn-outline-secondary\" [(ngModel)]=\"radioModel\" btnRadio=\"Day\" id=\"option1\">Day</label>\n            <label class=\"btn btn-outline-secondary\" [(ngModel)]=\"radioModel\" btnRadio=\"Month\" id=\"option2\">Month</label>\n            <label class=\"btn btn-outline-secondary\" [(ngModel)]=\"radioModel\" btnRadio=\"Year\" id=\"option3\">Year</label>\n          </div>\n        </div><!--/.col-->\n      </div><!--/.row-->\n      <div class=\"chart-wrapper\" style=\"height:300px;margin-top:40px;\">\n        <canvas baseChart class=\"chart\"\n        [datasets]=\"mainChartData\"\n        [labels]=\"mainChartLabels\"\n        [options]=\"mainChartOptions\"\n        [colors]=\"mainChartColours\"\n        [legend]=\"mainChartLegend\"\n        [chartType]=\"mainChartType\"></canvas>\n      </div>\n    </div>\n    <div class=\"card-footer\">\n      <div class=\"row text-center\">\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\n          <div class=\"text-muted\">Visits</div>\n          <strong>29.703 Users (40%)</strong>\n          <div class=\"progress progress-xs mt-2\">\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\n          <div class=\"text-muted\">Unique</div>\n          <strong>24.093 Users (20%)</strong>\n          <div class=\"progress progress-xs mt-2\">\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\n          <div class=\"text-muted\">Pageviews</div>\n          <strong>78.706 Views (60%)</strong>\n          <div class=\"progress progress-xs mt-2\">\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\n          <div class=\"text-muted\">New Users</div>\n          <strong>22.123 Users (80%)</strong>\n          <div class=\"progress progress-xs mt-2\">\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\n          <div class=\"text-muted\">Bounce Rate</div>\n          <strong>40.15%</strong>\n          <div class=\"progress progress-xs mt-2\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--/.card-->\n  \n  \n</div>\n");

/***/ }),

/***/ "c2Qq":
/*!*************************!*\
  !*** ./src/app/_nav.ts ***!
  \*************************/
/*! exports provided: navItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navItems", function() { return navItems; });
const navItems = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        badge: {
            variant: 'info',
            text: 'EMR'
        }
    },
    {
        title: true,
        name: 'Prison Card'
    },
    {
        name: 'Register',
        url: '/base/patientregister',
        icon: 'icon-user'
    },
    /*{
      name: 'Screening',
      url: '/theme/typography',
      icon: 'icon-pencil',
      children: [
      {
          name: 'ART Screening',
          url: '/base/art',
          icon: 'icon-puzzle'
        },
        {
          name: 'TB Screening',
          url: '/base/tb',
          icon: 'icon-puzzle'
        },
        {
          name: 'STI Screening',
          url: '/base/sti',
          icon: 'icon-puzzle'
        },
        {
          name: 'HTS Screening',
          url: '/base/hts',
          icon: 'icon-puzzle'
        },
        {
          name: 'Cancer Screening ',
          url: '/base/cancer',
          icon: 'icon-puzzle'
        }
        ,
        {
          name: 'COVID Screening ',
          url: '/base/covid',
          icon: 'icon-puzzle'
        }
      ]
    },*/
    {
        title: true,
        name: 'Inmates'
    },
    {
        name: 'Registered / New',
        url: '/base/tables',
        icon: 'icon-user'
    },
    {
        name: 'Exited',
        url: '/base/exited',
        icon: 'icon-user'
    },
    {
        name: 'Due 4 Service',
        url: '/base/duehts',
        icon: 'icon-user'
    },
    /*{
      name: 'Prison Exit',
      url: '/base/prisonexit',
      icon: 'icon-logout'
    
    },
    {
      title: true,
      name: 'Visits'
    },
    {
      name: 'Register Visit',
      url: '/base/visitregister',
      icon: 'icon-calendar'
    
    },*/
    {
        divider: true
    },
    {
        title: true,
        name: 'Reports',
    },
    {
        name: 'Modules',
        url: '/base/report',
        icon: 'fa fa-file'
    },
    {
        name: 'CXCA',
        url: '/base/cxca',
        icon: 'fa fa-file'
    },
    {
        name: 'Key POP - Quarterly',
        url: '/base/keyprev',
        icon: 'fa fa-file'
    },
    {
        name: 'Key POP - Semi',
        url: '/base/keypsemi',
        icon: 'fa fa-file'
    }
];


/***/ }),

/***/ "dxhq":
/*!**********************************************!*\
  !*** ./src/app/views/error/500.component.ts ***!
  \**********************************************/
/*! exports provided: P500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P500Component", function() { return P500Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./500.component.html */ "Lrxh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let P500Component = class P500Component {
    constructor() { }
};
P500Component.ctorParameters = () => [];
P500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], P500Component);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jwt-decode */ "EjJx");







const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem("token")
};
let AuthService = class AuthService {
    constructor(_http) {
        this._http = _http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.currentUser = this.currentUserSubject.asObservable();
        this.currentModuleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.currentModule = this.currentModuleSubject.asObservable();
    }
    currentUserValue() {
        return this.currentUser;
    }
    currentModuleValue() {
        return this.currentModule;
    }
    setModule(data) {
        this.currentModuleSubject.next(data);
        return this.moduler;
    }
    extractData(data) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes                
        this.chauser = { "userId": data.authorization.user.user_id,
            "username": data.authorization.user.username,
            "expiry_time": data.authorization.expiry_time };
        console.log('decoded-CHECK here', this.chauser);
        localStorage.setItem('currentUser', JSON.stringify(this.chauser));
        localStorage.setItem('token', data.authorization.token);
        this.currentUserSubject.next(this.chauser);
        return this.chauser;
    }
    submitLogin(body) {
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/auth/login", body, {
            observe: "body"
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => this.extractData(user)));
    }
    submitRegister(body) {
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/users", body, {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") }
        });
    }
    getDecodedAccessToken(token) {
        try {
            return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_6__["default"])(token);
        }
        catch (Error) {
            return null;
        }
    }
    addGlobalProperty(body) {
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/global_properties", body, {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") }
        });
    }
    getGlobalProperty(body) {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/global_properties", {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") },
            params: body,
        });
    }
    submitPerson(body) {
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/people", body, {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") }
        });
    }
    changePerson(body) {
        return this._http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/people/" + body.person_id, body, {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") }
        });
    }
    submitPatient(body) {
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/patients", body, {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") }
        });
    }
    addPatientIdentifier(body) {
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/patient_identifiers", body, {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") }
        });
    }
    saveEncounter(body) {
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/encounters", body, {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") }
        });
    }
    saveObs(body) {
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/observations", body, {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") }
        });
    }
    enrollPatient(body) {
        let patient_id = body.person_id;
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/patients/" + patient_id + "/programs", body, {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") }
        });
    }
    updateObs(body) {
        return this._http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/observations/" + body.id, body, {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") },
        });
    }
    getUserid() {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/userid", {
            observe: "body",
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append("token", localStorage.getItem("token"))
        });
    }
    getRoles() {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/roles", {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") }
        });
    }
    getRegimens(body) {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/programs/1/regimen_moh", {
            observe: "body",
            headers: body,
        });
    }
    getPrisons(body) {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/locations", {
            observe: "body",
            headers: body,
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append("name", "Prison")
        });
    }
    getPrisoners(body) {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/patients", {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") },
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append("page", body.page_number)
        });
    }
    getProgrampatients(body) {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/patient_programs", {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") },
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append("page", body.page_number)
        });
    }
    getPeople() {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/people", {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") }
            //params: new HttpParams().append("page","1")
        });
    }
    getPerson(body) {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/people/" + body, {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") }
        });
    }
    getPrisonerEncounters(body) {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/encounters", {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") },
            params: body,
        });
    }
    patientSearch(body) {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/search/patients/by_identifier", {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") },
            params: body,
        });
    }
    patientIdentity(body) {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/patient_identifiers", {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") },
            params: body,
        });
    }
    getPrograms(body) {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/patients/" + body + "/programs", {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") }
        });
    }
    getWorkflows(body) {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/programs/" + body + "/workflows", {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") },
        });
    }
    changePatientState(body) {
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/programs/" + body.program_id + "/patients/" + body.patient_id + "/states", body, {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") }
        });
    }
    getVisits(body) {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/patients/" + body.patient_id + "/visits", {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") }
        });
    }
    getEncounterObs(body) {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_base_url + "/encounters/" + body.encounter_id + "/observations", {
            observe: "body",
            headers: { 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token") },
            params: { "page_size": "20" }
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);

/*


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { from, Observable, BehaviorSubject } from 'rxjs';
import { first, catchError, tap } from 'rxjs/operators';
import { User } from '../models/User';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private url = 'http://localhost:3000/auth';

    isUserLoggedIn = new BehaviorSubject<boolean>(false);

    userId: Pick<User, 'id'>;

    httpOptions: { headers: HttpHeaders } = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService, private router: Router,private _activatedroute :ActivatedRoute) {}

    register(user: Omit<User, 'id'>): Observable<User> {
        return this.http.post<User>(`${this.url}/signup`, user, this.httpOptions).pipe(
            first(),
            tap(() => {

                this.router.navigate(['login']);


            }),
            catchError(this.errorHandlerService.handleError<User>('register'))
        );
    }

    login(
        email: Pick<User, 'email'>,
        password: Pick<User, 'password'>
    ): Observable<{
        token: string;
        userId: Pick<User, 'id'>;
    }> {
        return this.http.post(`${this.url}/login`, { email, password }, this.httpOptions).pipe(
            first(),
            tap((tokenObject: { token: string; userId: Pick<User, 'id'> }) => {
                this.userId = tokenObject.userId;
                localStorage.setItem('token', tokenObject.token);
                this.isUserLoggedIn.next(true);
                this.router.navigate(['dashboard'],{relativeTo:this._activatedroute});
                setTimeout(function () {
                                          location.reload();
        
                                        }, 1000);



            }),
            catchError(this.errorHandlerService.handleError<{ token: string; userId: Pick<User, 'id'> }>('login'))
        );
    }


}

*/


/***/ }),

/***/ "lm8q":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/default-layout/default-layout.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [navbarBrandRouterLink]=\"['/dashboard']\"\n  [fixed]=\"true\"\n  [navbarBrandFull]=\"{src: 'assets/img/brand/logo.png', width: 89, height: 25, alt: 'MOH Logo'}\"\n  [navbarBrandMinimized]=\"{src: 'assets/img/brand/sygnet.png', width: 30, height: 30, alt: 'MOH Logo'}\"\n  [sidebarToggler]=\"'lg'\"\n  [asideMenuToggler]=\"'lg'\">\n  <ul class=\"nav navbar-nav d-md-down-none\">\n    <li class=\"nav-item px-3\">\n      <a class=\"nav-link\" [routerLink]=\"['/settings']\">Dashboard</a>\n    </li>\n    <!--<li class=\"nav-item px-3\">\n      <a class=\"nav-link\" href=\"#\">Users</a>\n    </li>-->\n   \n  </ul>\n  <ul class=\"nav navbar-nav ml-auto\">\n    <li class=\"nav-item d-md-down-none\">\n      <a class=\"nav-link\" href=\"#\">{{usernames}}</a>\n    </li>\n    \n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\n        <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@prisonemr.com\"/>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">       \n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>        \n        <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n      </div>\n    </li>\n  </ul>\n</app-header>\n<div class=\"app-body\">\n  <app-sidebar #appSidebar [fixed]=\"false\" [display]=\"'lg'\" [minimized]=\"sidebarMinimized\" (minimizedChange)=\"toggleMinimize($event)\">\n    <app-sidebar-nav [navItems]=\"navItems\" [perfectScrollbar] [disabled]=\"appSidebar.minimized\"></app-sidebar-nav>\n    <app-sidebar-minimizer></app-sidebar-minimizer>\n  </app-sidebar>\n  <!-- Main content -->\n  <main class=\"main\">\n    <!-- Breadcrumb -->\n    <!-- breaking change 'cui-breadcrumb' -->\n    <cui-breadcrumb>\n      <!-- Breadcrumb Menu-->\n      <li class=\"breadcrumb-menu d-md-down-none\">\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">          \n          <a class=\"btn\" [routerLink]=\"['/base/settings']\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n          <a class=\"btn\" [routerLink]=\"['/base/register']\"><i class=\"icon-user\"></i> &nbsp;New user</a>\n        </div>\n      </li>\n    </cui-breadcrumb>\n\n    <!-- deprecation warning for 'app-breadcrumb' -->\n    <!--<ol class=\"breadcrumb\">-->\n      <!--<app-breadcrumb></app-breadcrumb>-->\n      <!--&lt;!&ndash; Breadcrumb Menu&ndash;&gt;-->\n      <!--<li class=\"breadcrumb-menu d-md-down-none\">-->\n        <!--<div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">-->\n          <!--<a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>-->\n          <!--<a class=\"btn\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>-->\n          <!--<a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>-->\n        <!--</div>-->\n      <!--</li>-->\n    <!--</ol>-->\n    <div class=\"container-fluid cha\">\n      <router-outlet></router-outlet>\n    </div><!-- /.container-fluid -->\n  </main>\n  \n</div>\n<app-footer>\n  <span><a href=\"https://pedaids.org\">EGPAF</a> &copy; {{year}}</span>\n  \n</app-footer>\n");

/***/ }),

/***/ "nAJl":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/404.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "nSew":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\">\n<!--<div class=\"app-body\" style=\"background: url(../assets/img/brand/zomba-Central-Prison-Clinic.jpg) \nno-repeat center center fixed; \n-webkit-background-size: cover;\n-moz-background-size: cover;\n-o-background-size: cover;\n\">-->\n\t<main class=\"main d-flex align-items-center\">\n\t\t<div class=\"container\">\n\t\t\t <h2 style=\"text-align:center;margin-bottom:5%;\"><b>PRISON EMR APPLICATION</b></h2>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-8 mx-auto\">\n\t\t\t\t\t<div class=\"card-group\">\n\t\t\t\t\t\t<div class=\"card p-4\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n\t\t\t\t\t\t\t\t\t<h1>Login</h1>\n\t\t\t\t\t\t\t\t\t<p class=\"text-muted\">Sign In to your account </p>\n\t\t\t\t\t\t\t\t\t<span style=\"color:#CD5C5C\" *ngIf=\"loginError===true\">Invalid Username/Password</span>\n\t\t\t\t\t\t\t\t\t<span style=\"color:#CD5C5C\" *ngIf=\"isValid('username')\">You entered invalid username</span> \n\n\t\t\t\t\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Username\"\n\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"username\"\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"username\"\n\t\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<span style=\"color:#CD5C5C\" *ngIf=\"isValid('password')\">Password is mandatory field</span>\n\t\t\t\t\t\t\t\t\t<div class=\"input-group mb-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Password\"\n\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"current-password\"\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"password\"\n\t\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary px-4\">Login</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-6 text-right\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-link px-0\">Forgot password?</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width: 44%\">\n\t\t\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<h2>Sign up</h2>\n\t\t\t\t\t\t\t\t\t  <p>\n\t\t\t\t\t\t\t\t\t  If you dont have an account please ask admistrator to create your account,\n\t\t\t\t\t\t\t\t\t   if you arleady have an account submit your details and click login.\n\t\t\t\t\t\t\t\t\t  </p>\n                  <!--<a type=\"button\" href=\"/register\" class=\"btn btn-primary active mt-3\">Register Now!</a>-->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div>\n\t  <img src=\"../../assets/img/brand/cdc.png\" style=\"float:right;width:110px;height:110px;position: absolute;right: 100px;bottom: 0px;\" />\n      <img src=\"../../assets/img/brand/egpaf.png\" style=\"float:right;width:95px;height:95px;position: absolute;right: 0px;bottom: 0px;\" />\n            <img   src=\"../../assets/img/brand/sygnet.png\" style=\"position: absolute;left: 0px;bottom: 0px;\"/>\n      </div>\n\t\t</div>\n\t</main>\n</div>\n");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "G/4p");
/* harmony import */ var _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/error/404.component */ "8gg5");
/* harmony import */ var _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/error/500.component */ "dxhq");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/register/register.component */ "4XPS");



// Import Containers





const routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '404',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"],
        data: {
            title: 'Page 404',
        },
    },
    {
        path: '500',
        component: _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__["P500Component"],
        data: {
            title: 'Page 500',
        },
    },
    {
        path: 'login',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        data: {
            title: 'Login Page',
        },
    },
    {
        path: 'register',
        component: _views_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        data: {
            title: 'Register Page',
        },
    },
    {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"],
        data: {
            title: 'Home',
        },
        children: [
            {
                path: 'base',
                loadChildren: () => Promise.all(/*! import() | views-base-base-module */[__webpack_require__.e("default~views-base-base-module~views-chartjs-chartjs-module~views-dashboard-dashboard-module~views-w~7c6aba0a"), __webpack_require__.e("default~views-base-base-module~views-dashboard-dashboard-module~views-icons-icons-module"), __webpack_require__.e("default~views-base-base-module~views-dashboard-dashboard-module"), __webpack_require__.e("views-base-base-module")]).then(__webpack_require__.bind(null, /*! ./views/base/base.module */ "Cvcy")).then((m) => m.BaseModule),
            },
            {
                path: 'buttons',
                loadChildren: () => __webpack_require__.e(/*! import() | views-buttons-buttons-module */ "views-buttons-buttons-module").then(__webpack_require__.bind(null, /*! ./views/buttons/buttons.module */ "Reju")).then((m) => m.ButtonsModule),
            },
            {
                path: 'charts',
                loadChildren: () => Promise.all(/*! import() | views-chartjs-chartjs-module */[__webpack_require__.e("default~views-base-base-module~views-chartjs-chartjs-module~views-dashboard-dashboard-module~views-w~7c6aba0a"), __webpack_require__.e("default~views-chartjs-chartjs-module~views-dashboard-dashboard-module~views-widgets-widgets-module"), __webpack_require__.e("views-chartjs-chartjs-module")]).then(__webpack_require__.bind(null, /*! ./views/chartjs/chartjs.module */ "Y+KY")).then((m) => m.ChartJSModule),
            },
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() | views-dashboard-dashboard-module */[__webpack_require__.e("default~views-base-base-module~views-chartjs-chartjs-module~views-dashboard-dashboard-module~views-w~7c6aba0a"), __webpack_require__.e("default~views-chartjs-chartjs-module~views-dashboard-dashboard-module~views-widgets-widgets-module"), __webpack_require__.e("default~views-base-base-module~views-dashboard-dashboard-module~views-icons-icons-module"), __webpack_require__.e("default~views-base-base-module~views-dashboard-dashboard-module"), __webpack_require__.e("views-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./views/dashboard/dashboard.module */ "6dU7")).then((m) => m.DashboardModule),
            },
            {
                path: 'icons',
                loadChildren: () => Promise.all(/*! import() | views-icons-icons-module */[__webpack_require__.e("default~views-base-base-module~views-dashboard-dashboard-module~views-icons-icons-module"), __webpack_require__.e("views-icons-icons-module")]).then(__webpack_require__.bind(null, /*! ./views/icons/icons.module */ "aPNi")).then((m) => m.IconsModule),
            },
            {
                path: 'notifications',
                loadChildren: () => __webpack_require__.e(/*! import() | views-notifications-notifications-module */ "views-notifications-notifications-module").then(__webpack_require__.bind(null, /*! ./views/notifications/notifications.module */ "KpDv")).then((m) => m.NotificationsModule),
            },
            {
                path: 'theme',
                loadChildren: () => Promise.all(/*! import() | views-theme-theme-module */[__webpack_require__.e("default~views-theme-theme-module~views-widgets-widgets-module"), __webpack_require__.e("views-theme-theme-module")]).then(__webpack_require__.bind(null, /*! ./views/theme/theme.module */ "AgMk")).then((m) => m.ThemeModule),
            },
            {
                path: 'widgets',
                loadChildren: () => Promise.all(/*! import() | views-widgets-widgets-module */[__webpack_require__.e("default~views-base-base-module~views-chartjs-chartjs-module~views-dashboard-dashboard-module~views-w~7c6aba0a"), __webpack_require__.e("default~views-chartjs-chartjs-module~views-dashboard-dashboard-module~views-widgets-widgets-module"), __webpack_require__.e("default~views-theme-theme-module~views-widgets-widgets-module"), __webpack_require__.e("views-widgets-widgets-module")]).then(__webpack_require__.bind(null, /*! ./views/widgets/widgets.module */ "XVX6")).then((m) => m.WidgetsModule),
            },
        ],
    },
    { path: '**', component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hydrated {\n  overflow: scroll !important;\n}\n\n.sidebar {\n  height: 121% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDJCQUFBO0FBQUo7O0FBS0E7RUFDSSx1QkFBQTtBQUZKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oeWRyYXRlZCB7XG4gICAgXG4gICAgb3ZlcmZsb3c6IHNjcm9sbCAhaW1wb3J0YW50O1xuICAgIFxufVxuXG5cbi5zaWRlYmFyIHtcbiAgICBoZWlnaHQ6IDEyMSUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map