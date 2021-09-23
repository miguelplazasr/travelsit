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
exports.CitiProxyService = void 0;
const common_1 = require("@nestjs/common");
const latam_auth_service_1 = require("../../latam-auth/app/latam-auth.service");
const config_service_1 = require("../../../../config/apis/latam-auth/config.service");
const operators_1 = require("rxjs/operators");
const config_service_2 = require("../../../../config/app/config.service");
let CitiProxyService = class CitiProxyService {
    constructor(http, latamAutConfig, latamAuthService, appConfigService) {
        this.http = http;
        this.latamAutConfig = latamAutConfig;
        this.latamAuthService = latamAuthService;
        this.appConfigService = appConfigService;
        this.proxyUrl = latamAutConfig.proxyUrl;
        this.tlsReject = appConfigService.tls_reject;
        this.apiVersion = latamAutConfig.apiVersion;
        this.subscription = latamAutConfig.subscriptionKey;
    }
    async all(uri) {
        return await this.process('get', uri);
    }
    async post(uri, data) {
        return await this.process('post', uri, data);
    }
    async process(method, uri, data, options) {
        const url = `${this.proxyUrl}${uri}`;
        const proxyToken = await this.latamAuthService.getToken();
        const headers = {
            'Authorization': proxyToken,
            'apiVersion': this.apiVersion,
            'Ocp-Apim-Subscription-Key': this.subscription
        };
        const config = {
            url,
            method,
            headers,
            data
        };
        return this.http.request(config).pipe(operators_1.map((axiosResponse) => {
            const response = axiosResponse.data;
            if (!response.isSuccess) {
                throw new common_1.HttpException(response.messages, common_1.HttpStatus.BAD_REQUEST);
            }
            return response.responseData;
        })).toPromise();
    }
};
CitiProxyService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService,
        config_service_1.LatamAuthConfigService,
        latam_auth_service_1.LatamAuthService,
        config_service_2.AppConfigService])
], CitiProxyService);
exports.CitiProxyService = CitiProxyService;
//# sourceMappingURL=citi-proxy.service.js.map