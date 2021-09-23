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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryRepository = void 0;
const common_1 = require("@nestjs/common");
let CountryRepository = class CountryRepository {
    constructor(_countryRepo) {
        this._countryRepo = _countryRepo;
    }
    async all() {
        return await this._countryRepo.all();
    }
};
CountryRepository = __decorate([
    __param(0, common_1.Inject()),
    __metadata("design:paramtypes", [CountryRepository])
], CountryRepository);
exports.CountryRepository = CountryRepository;
//# sourceMappingURL=country-repository.js.map