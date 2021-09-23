"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingModule = void 0;
const common_1 = require("@nestjs/common");
const rfc_service_1 = require("./app/rfc/rfc.service");
const rfc_controller_1 = require("./infra/rfc/rfc.controller");
const citi_proxy_module_1 = require("../../utils/citi-proxy/citi-proxy.module");
const citi_proxy_service_1 = require("../../utils/citi-proxy/app/citi-proxy.service");
const internal_work_service_1 = require("./app/internal-work/internal-work.service");
const internal_work_controller_1 = require("./infra/internal-work/internal-work.controller");
const risk_service_1 = require("./app/risk/risk.service");
const risk_controller_1 = require("./infra/risk/risk.controller");
const risk_coverage_controller_1 = require("./infra/risk-coverage/risk-coverage.controller");
const risk_coverage_service_1 = require("./app/risk-coverage/risk-coverage.service");
const payment_service_1 = require("./app/payment/payment.service");
const payment_controller_1 = require("./infra/payment/payment.controller");
const config_module_1 = require("../../../config/payment/config.module");
const config_service_1 = require("../../../config/payment/config.service");
let BookingModule = class BookingModule {
};
BookingModule = __decorate([
    common_1.Module({
        imports: [
            citi_proxy_module_1.CitiProxyModule,
            config_module_1.PaymentConfigModule
        ],
        providers: [
            config_service_1.PaymentConfigService,
            rfc_service_1.RfcService,
            citi_proxy_service_1.CitiProxyService,
            internal_work_service_1.InternalWorkService,
            risk_service_1.RiskService,
            risk_coverage_service_1.RiskCoverageService,
            payment_service_1.PaymentService
        ],
        controllers: [
            rfc_controller_1.RfcController,
            internal_work_controller_1.InternalWorkController,
            risk_controller_1.RiskController,
            risk_coverage_controller_1.RiskCoverageController,
            payment_controller_1.PaymentController
        ]
    })
], BookingModule);
exports.BookingModule = BookingModule;
//# sourceMappingURL=booking.module.js.map