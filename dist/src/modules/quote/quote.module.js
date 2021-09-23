"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteModule = void 0;
const common_1 = require("@nestjs/common");
const internal_service_1 = require("./app/internal/internal.service");
const internal_controller_1 = require("./infra/internal/internal.controller");
const coverages_service_1 = require("./app/coverages/coverages.service");
const coverages_controller_1 = require("./infra/coverages/coverages.controller");
const citi_proxy_module_1 = require("../../utils/citi-proxy/citi-proxy.module");
let QuoteModule = class QuoteModule {
};
QuoteModule = __decorate([
    common_1.Module({
        imports: [
            citi_proxy_module_1.CitiProxyModule
        ],
        providers: [
            internal_service_1.InternalService,
            coverages_service_1.CoveragesService
        ],
        controllers: [
            internal_controller_1.InternalController,
            coverages_controller_1.CoveragesController
        ]
    })
], QuoteModule);
exports.QuoteModule = QuoteModule;
//# sourceMappingURL=quote.module.js.map