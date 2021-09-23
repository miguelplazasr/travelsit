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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const config_service_1 = require("../../../../../config/payment/config.service");
let PaymentService = class PaymentService {
    constructor(paymentConfigService) {
        this.paymentConfigService = paymentConfigService;
        this.cnzd = paymentConfigService.cnzd;
        this.trc = paymentConfigService.trc;
        this.paymentUrl = paymentConfigService.paymentUrl;
        this.paymentUrlMigration = paymentConfigService.paymentUrlMigration;
    }
    async createPaymentConfig(paymentData) {
        let config = this.getConfiguration();
        const iframeUrlAux = this.getUrlIframe(paymentData, config);
        const alt = Buffer.from(iframeUrlAux).toString('base64');
        return { url: `${config.paymentUrl}?alt=${alt}` };
    }
    getUrlIframe(paymentData, config) {
        return `mpa=${paymentData.mpa}+veI=${paymentData.vel}
        +bab=${config.bab}+kli=${paymentData.kli}+kgb=${config.kgb}
        +trc=${config.trc}+cnzd=${config.cnzd}
        +vcr=${config.vcr}+vce=${paymentData.vce}+NmA=${paymentData.nma}+NsP=${config.isAnual.nsp}`;
    }
    getConfiguration() {
        return {
            cis: "1",
            bab: "1",
            kgb: "2",
            cnzd: this.cnzd,
            aid: "3",
            vcr: "1",
            trc: this.trc,
            wrf: "1",
            xlP: "12",
            isAnual: {
                nsp: "vd"
            },
            isNoAnual: {
                nsp: "vd"
            },
            migrationOn: "false",
            paymentUrl: this.paymentUrl,
            paymentUrlMigration: this.paymentUrlMigration
        };
    }
};
PaymentService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_service_1.PaymentConfigService])
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map