"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiProxyProvider = void 0;
const citi_proxy_service_1 = require("./citi-proxy.service");
exports.CitiProxyProvider = {
    provide: 'CitiProxyRepo',
    useClass: citi_proxy_service_1.CitiProxyService
};
//# sourceMappingURL=citi-proxy.provider.js.map