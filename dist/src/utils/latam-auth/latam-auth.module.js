"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatamAuthModule = void 0;
const common_1 = require("@nestjs/common");
const config_service_1 = require("../../../config/apis/latam-auth/config.service");
const latam_auth_service_1 = require("./app/latam-auth.service");
const config_module_1 = require("../../../config/apis/latam-auth/config.module");
const get_token_service_1 = require("./domain/get-token.service");
const latam_auth_provider_1 = require("./infrastructure/latam-auth.provider");
let LatamAuthModule = class LatamAuthModule {
};
LatamAuthModule = __decorate([
    common_1.Module({
        imports: [
            common_1.HttpModule.register({
                maxRedirects: 5
            }),
            config_module_1.LatamAuthConfigModule,
        ],
        providers: [
            latam_auth_service_1.LatamAuthService,
            config_service_1.LatamAuthConfigService,
            get_token_service_1.GetTokenService,
            latam_auth_provider_1.LatamAuthRepoProvider
        ],
        exports: [
            latam_auth_provider_1.LatamAuthRepoProvider
        ]
    })
], LatamAuthModule);
exports.LatamAuthModule = LatamAuthModule;
//# sourceMappingURL=latam-auth.module.js.map