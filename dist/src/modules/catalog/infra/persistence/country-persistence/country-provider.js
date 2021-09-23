"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryProvider = void 0;
const country_repository_1 = require("./country-repository");
exports.CountryProvider = {
    provide: 'CountryRepo',
    useClass: country_repository_1.CountryRepository
};
//# sourceMappingURL=country-provider.js.map