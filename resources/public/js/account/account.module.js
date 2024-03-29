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
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var login_comp_1 = require("./login.comp");
var logout_comp_1 = require("./logout.comp");
var register_comp_1 = require("./register.comp");
var registerconfirmation_comp_1 = require("./registerconfirmation.comp");
var emailconfirmation_comp_1 = require("./emailconfirmation.comp");
var oauth2callback_comp_1 = require("./oauth2callback.comp");
var ng2_uploader_1 = require("ng2-uploader");
var AccountModule = (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.ReactiveFormsModule, router_1.RouterModule],
            exports: [login_comp_1.LoginComp, logout_comp_1.LogoutComp, register_comp_1.RegisterComp, registerconfirmation_comp_1.RegisterConfirmationComp, emailconfirmation_comp_1.EmailConfirmationComp, oauth2callback_comp_1.Oauth2CallbackComp],
            declarations: [login_comp_1.LoginComp, logout_comp_1.LogoutComp, register_comp_1.RegisterComp, registerconfirmation_comp_1.RegisterConfirmationComp, emailconfirmation_comp_1.EmailConfirmationComp, oauth2callback_comp_1.Oauth2CallbackComp, ng2_uploader_1.UPLOAD_DIRECTIVES],
            providers: [],
            bootstrap: []
        }), 
        __metadata('design:paramtypes', [])
    ], AccountModule);
    return AccountModule;
}());
exports.AccountModule = AccountModule;
//# sourceMappingURL=account.module.js.map