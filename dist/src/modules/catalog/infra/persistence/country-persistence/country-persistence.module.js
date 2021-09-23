"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryPersistenceModule = void 0;
const common_1 = require("@nestjs/common");
const country_provider_1 = require("./country-provider");
const country_repository_1 = require("./country-repository");
let CountryPersistenceModule = class CountryPersistenceModule {
};
CountryPersistenceModule = __decorate([
    common_1.Module({
        imports: [country_repository_1.CountryRepository],
        exports: [country_provider_1.CountryProvider],
        providers: [country_provider_1.CountryProvider]
    })
], CountryPersistenceModule);
exports.CountryPersistenceModule = CountryPersistenceModule;
//# sourceMappingURL=country-persistence.module.js.map