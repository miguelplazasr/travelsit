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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationService = void 0;
const common_1 = require("@nestjs/common");
const location_entity_1 = require("../domain/entities/location.entity");
const citi_proxy_service_1 = require("../../../utils/citi-proxy/app/citi-proxy.service");
let LocationService = class LocationService {
    constructor(_citiProxyService) {
        this._citiProxyService = _citiProxyService;
        this.locationFilter = new location_entity_1.LocationEntity();
    }
    async callToCountries(trip) {
        const structure = ('casual' == trip) ? 6511 : 6512;
        const uri = `/Catalog/Filter?catalogName=${location_entity_1.LOCATION_CATALOG.countries}&structureId=${structure}`;
        return await this._citiProxyService.all(uri);
    }
    callToStates() {
        try {
            this.locationFilter.id = 1;
            this.locationFilter.paisId = 1;
            this.locationFilter.nombreCatalogo = location_entity_1.LOCATION_CATALOG.states;
            return this.callToLocation();
        }
        catch (e) { }
    }
    callToMunicipality(state) {
        try {
            this.locationFilter.id = state;
            this.locationFilter.nombreCatalogo = location_entity_1.LOCATION_CATALOG.municipality;
            return this.callToLocation();
        }
        catch (e) { }
    }
    callToPopulation(municipalityId) {
        try {
            this.locationFilter.id = municipalityId;
            this.locationFilter.nombreCatalogo = location_entity_1.LOCATION_CATALOG.population;
            return this.callToLocation();
        }
        catch (e) { }
    }
    callToColonies(populationId) {
        try {
            this.locationFilter.id = populationId;
            this.locationFilter.nombreCatalogo = location_entity_1.LOCATION_CATALOG.colonies;
            return this.callToLocation();
        }
        catch (e) { }
    }
    callToLocation() {
        try {
            const uri = `/Person/SearchLocations`;
            return this._citiProxyService.post(uri, this.locationFilter).then((response) => response);
        }
        catch (e) { }
    }
    callToColoniesByName(colonyName) {
        try {
            const url = `/Person/Locations?catalogName=${location_entity_1.LOCATION_CATALOG.colonies}&keyWord=${colonyName}`;
            return this._citiProxyService.all(url).then((response) => {
                return response.map(({ coloniaId, codigoPostal, coloniaDsc, poblacionId, municipioId, estadoId, poblacionDsc, municipioDsc, estadoDsc }) => ({ colonyId: coloniaId, zipcode: codigoPostal, colonyName: coloniaDsc, populationId: poblacionId, municipalityId: municipioId, stateId: estadoId, populationName: poblacionDsc, municipalityName: municipioDsc, stateName: estadoDsc }));
            });
        }
        catch (e) { }
    }
    async callToColoniesByZipCode(zipCode) {
        try {
            const url = `/Person/Locations?catalogName=${location_entity_1.LOCATION_CATALOG.coloniesByZipCode}&countryId=1&keyWord=${zipCode}`;
            return this._citiProxyService.all(url).then((response) => {
                return response.map(({ coloniaId, codigoPostal, coloniaDsc, poblacionId, municipioId, estadoId, poblacionDsc, municipioDsc, estadoDsc }) => ({ colonyId: coloniaId, zipcode: codigoPostal, colonyName: coloniaDsc, populationId: poblacionId, municipalityId: municipioId, stateId: estadoId, populationName: poblacionDsc, municipalityName: municipioDsc, stateName: estadoDsc }));
            });
        }
        catch (e) { }
    }
};
LocationService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [citi_proxy_service_1.CitiProxyService])
], LocationService);
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map