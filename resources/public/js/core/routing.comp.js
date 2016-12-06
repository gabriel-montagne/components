"use strict";
var router_1 = require("@angular/router");
var login_comp_1 = require("../account/login.comp");
var home_comp_1 = require("../home/home.comp");
var register_comp_1 = require("../account/register.comp");
var auth_serv_1 = require("./auth.serv");
var appRoutes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: home_comp_1.HomeComp,
        canActivate: [auth_serv_1.AuthServ]
    },
    {
        path: "login",
        component: login_comp_1.LoginComp,
        canActivate: [auth_serv_1.AuthServ]
    },
    {
        path: "register",
        component: register_comp_1.RegisterComp,
        canActivate: [auth_serv_1.AuthServ]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=routing.comp.js.map