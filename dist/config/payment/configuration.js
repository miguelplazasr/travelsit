"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const config_1 = require("@nestjs/config");
exports.configuration = config_1.registerAs('payment', () => ({
    cnzd: process.env.PAYMENT_CNZD,
    trc: process.env.PAYMENT_TRC,
    paymentUrl: process.env.PAYMENT_URL,
    paymentUrlMigration: process.env.PAYMENT_URL_MIGRATION
}));
//# sourceMappingURL=configuration.js.map