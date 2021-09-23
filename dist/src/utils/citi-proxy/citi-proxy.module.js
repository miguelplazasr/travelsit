"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiProxyModule = void 0;
const common_1 = require("@nestjs/common");
const citi_proxy_controller_1 = require("./infrastructure/citi-proxy.controller");
const latam_auth_module_1 = require("../latam-auth/latam-auth.module");
const latam_auth_service_1 = require("../latam-auth/app/latam-auth.service");
const citi_proxy_service_1 = require("./app/citi-proxy.service");
const citi_proxy_provider_1 = require("./app/citi-proxy.provider");
const config_service_1 = require("../../../config/apis/latam-auth/config.service");
const config_module_1 = require("../../../config/apis/latam-auth/config.module");
const config_service_2 = require("../../../config/app/config.service");
const config_module_2 = require("../../../config/app/config.module");
let CitiProxyModule = class CitiProxyModule {
};
CitiProxyModule = __decorate([
    common_1.Module({
        imports: [
            common_1.HttpModule.register({
                maxRedirects: 5
            }),
            latam_auth_module_1.LatamAuthModule,
            config_module_1.LatamAuthConfigModule,
            config_module_2.AppConfigModule,
        ],
        providers: [
            config_service_2.AppConfigService,
            latam_auth_service_1.LatamAuthService,
            citi_proxy_service_1.CitiProxyService,
            citi_proxy_provider_1.CitiProxyProvider,
            config_service_1.LatamAuthConfigService
        ],
        controllers: [
            citi_proxy_controller_1.CitiProxyController
        ],
        exports: [
            common_1.HttpModule,
            config_service_2.AppConfigService,
            citi_proxy_provider_1.CitiProxyProvider,
            latam_auth_service_1.LatamAuthService,
            citi_proxy_service_1.CitiProxyService,
            config_service_1.LatamAuthConfigService
        ]
    })
], CitiProxyModule);
exports.CitiProxyModule = CitiProxyModule;
//# sourceMappingURL=citi-proxy.module.js.map