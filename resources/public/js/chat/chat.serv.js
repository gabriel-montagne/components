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
var core_1 = require("@angular/core");
var state_serv_1 = require("../core/state.serv");
var http_1 = require("@angular/http");
var ChatServ = (function () {
    function ChatServ(http, state) {
        this.http = http;
        this.state = state;
    }
    ChatServ.prototype.messagesGet = function (obj) {
        var url = "/chat/messages";
        var body = JSON.stringify(obj);
        var token = this.state.cred.token;
        var headers = new http_1.Headers({ "Content-Type": "application/json",
            "Authorization": "Token " + token });
        var opts = { headers: headers };
        return this.http.post(url, body, opts);
    };
    ChatServ.prototype.clientsGet = function (obj) {
        var url = "/chat/clients";
        var body = JSON.stringify(obj);
        var token = this.state.cred.token;
        var headers = new http_1.Headers({ "Content-Type": "application/json",
            "Authorization": "Token " + token });
        var opts = { headers: headers };
        return this.http.post(url, body, opts);
    };
    ChatServ.prototype.usersGet = function (obj) {
        var url = "/chat/clients/search";
        var body = JSON.stringify(obj);
        var token = this.state.cred.token;
        var headers = new http_1.Headers({ "Content-Type": "application/json",
            "Authorization": "Token " + token });
        var opts = { headers: headers };
        console.log(body);
        return this.http.post(url, body, opts);
    };
    ChatServ = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, state_serv_1.StateServ])
    ], ChatServ);
    return ChatServ;
}());
exports.ChatServ = ChatServ;
//# sourceMappingURL=chat.serv.js.map