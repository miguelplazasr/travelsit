"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogModule = void 0;
const common_1 = require("@nestjs/common");
const country_controller_1 = require("./app/controllers/country.controller");
const country_service_1 = require("./domain/services/country.service");
const persistence_module_1 = require("./infra/persistence/persistence.module");
let CatalogModule = class CatalogModule {
};
CatalogModule = __decorate([
    common_1.Module({
        imports: [
            persistence_module_1.PersistenceModule
        ],
        controllers: [
            country_controller_1.CountryController
        ],
        exports: [
            country_service_1.CountryService
        ],
        providers: [country_service_1.CountryService]
    })
], CatalogModule);
exports.CatalogModule = CatalogModule;
//# sourceMappingURL=catalog.module.js.map