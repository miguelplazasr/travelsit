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
exports.LatamAuthService = void 0;
const common_1 = require("@nestjs/common");
const config_service_1 = require("../../../../config/apis/latam-auth/config.service");
const operators_1 = require("rxjs/operators");
let LatamAuthService = class LatamAuthService {
    constructor(http, proxyConfigService) {
        this.http = http;
        this.proxyConfigService = proxyConfigService;
        this.appId = proxyConfigService.appId;
        this.appKey = proxyConfigService.appKey;
        this.resource = proxyConfigService.resource;
        this.apiVersion = proxyConfigService.apiVersion;
        this.identity = proxyConfigService.identity;
        this.tokenUrl = proxyConfigService.tokenUrl;
    }
    getToken() {
        const headers = {
            App_ID: this.appId,
            App_Key: this.appKey,
            Resource: this.resource,
            apiVersion: this.apiVersion
        };
        const params = {
            Identity: this.identity
        };
        return this.http.post(this.tokenUrl, {}, { headers, params })
            .pipe(operators_1.map((response) => {
            const token = response.data;
            return `${token.token_type} ${token.access_token}`;
        })).toPromise();
    }
};
LatamAuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService,
        config_service_1.LatamAuthConfigService])
], LatamAuthService);
exports.LatamAuthService = LatamAuthService;
//# sourceMappingURL=latam-auth.service.js.map