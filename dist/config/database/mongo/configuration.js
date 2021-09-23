"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const config_1 = require("@nestjs/config");
exports.configuration = config_1.registerAs('mongo', () => ({
    uri: process.env.DB_URI
}));
//# sourceMappingURL=configuration.js.map