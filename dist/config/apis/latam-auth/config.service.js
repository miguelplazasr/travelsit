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
exports.LatamAuthConfigService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let LatamAuthConfigService = class LatamAuthConfigService {
    constructor(configService) {
        this.configService = configService;
    }
    get tokenUrl() {
        return this.configService.get('latamAuth.tokenUrl');
    }
    get identity() {
        return this.configService.get('latamAuth.identity');
    }
    get appId() {
        return this.configService.get('latamAuth.appId');
    }
    get appKey() {
        return this.configService.get('latamAuth.appKey');
    }
    get resource() {
        return this.configService.get('latamAuth.resource');
    }
    get apiVersion() {
        return this.configService.get('latamAuth.apiVersion');
    }
    get proxyUrl() {
        return this.configService.get('latamAuth.proxyUrl');
    }
    get subscriptionKey() {
        return this.configService.get('latamAuth.subscriptionKey');
    }
};
LatamAuthConfigService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], LatamAuthConfigService);
exports.LatamAuthConfigService = LatamAuthConfigService;
//# sourceMappingURL=config.service.js.map