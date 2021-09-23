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
exports.LocationController = void 0;
const common_1 = require("@nestjs/common");
const location_service_1 = require("../app/location.service");
let LocationController = class LocationController {
    constructor(locationService) {
        this.locationService = locationService;
    }
    getCountries(trip) {
        return this.locationService.callToCountries(trip).then(((response) => response.map(({ campoID, campoDSC }) => ({ id: campoID, description: campoDSC }))));
    }
    getAllStates() {
        return this.locationService.callToStates().then(((response) => response.map(({ id, descripcion }) => ({ stateId: id, stateName: descripcion }))));
    }
    getMunicipalityByState(stateId) {
        return this.locationService.callToMunicipality(stateId).then(((response) => response.map(({ id, descripcion }) => ({ municipalityId: id, municipalityName: descripcion }))));
    }
    getPopulationByMunicipality(municipalityId) {
        return this.locationService.callToPopulation(municipalityId).then(((response) => response.map(({ id, descripcion }) => ({ populationId: id, populationName: descripcion }))));
    }
    getColoniesByPopulation(populationId) {
        return this.locationService.callToColonies(populationId).then(((response) => response.map(({ id, descripcion }) => ({ colonyId: id, colonyName: descripcion }))));
    }
    getColoniesByName(colonyName) {
        return this.locationService.callToColoniesByName(colonyName);
    }
    getColoniesByZipCode(zipCode) {
        return this.locationService.callToColoniesByZipCode(zipCode);
    }
};
__decorate([
    common_1.Get('countries/:trip'),
    __param(0, common_1.Param('trip')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "getCountries", null);
__decorate([
    common_1.Get('states'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "getAllStates", null);
__decorate([
    common_1.Get('municipalities/:stateId'),
    __param(0, common_1.Param('stateId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "getMunicipalityByState", null);
__decorate([
    common_1.Get('populations/:municipalityId'),
    __param(0, common_1.Param('municipalityId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "getPopulationByMunicipality", null);
__decorate([
    common_1.Get('colonies/:populationId'),
    __param(0, common_1.Param('populationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "getColoniesByPopulation", null);
__decorate([
    common_1.Get('colony-name/:colonyName'),
    __param(0, common_1.Param('colonyName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "getColoniesByName", null);
__decorate([
    common_1.Get('coloniesByZipCode/:zipCode'),
    __param(0, common_1.Param('zipCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "getColoniesByZipCode", null);
LocationController = __decorate([
    common_1.Controller('location'),
    __metadata("design:paramtypes", [location_service_1.LocationService])
], LocationController);
exports.LocationController = LocationController;
//# sourceMappingURL=location.controller.js.map