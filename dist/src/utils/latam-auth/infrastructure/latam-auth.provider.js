"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatamAuthRepoProvider = void 0;
const get_token_repository_1 = require("./get-token.repository");
exports.LatamAuthRepoProvider = {
    provide: 'LatamAuthRepo',
    useClass: get_token_repository_1.GetTokenRepository
};
//# sourceMappingURL=latam-auth.provider.js.map