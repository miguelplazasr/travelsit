"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const config_1 = require("@nestjs/config");
exports.configuration = config_1.registerAs('app', () => ({
    env: process.env.NODE_ENV,
    name: process.env.APP_NAME,
    url: process.env.APP_URL,
    port: process.env.APP_PORT,
    tls_reject: process.env.NODE_TLS_REJECT_UNAUTHORIZED,
}));
//# sourceMappingURL=configuration.js.map