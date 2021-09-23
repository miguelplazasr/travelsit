"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const config_1 = require("@nestjs/config");
exports.configuration = config_1.registerAs('latamAuth', () => ({
    tokenUrl: process.env.PA_URL,
    identity: process.env.PA_IDENTITY,
    appId: process.env.PA_ID,
    appKey: process.env.PA_KEY,
    resource: process.env.PA_RESOURCE,
    apiVersion: parseInt(process.env.PA_VERSION, 10),
    proxyUrl: process.env.PROXY_URL,
    subscriptionKey: process.env.PA_APIM
}));
//# sourceMappingURL=configuration.js.map