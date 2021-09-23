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
var RiskService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskService = void 0;
const common_1 = require("@nestjs/common");
const citi_proxy_service_1 = require("../../../../utils/citi-proxy/app/citi-proxy.service");
const risk_entity_1 = require("../../domain/entities/risk/risk.entity");
const risk_mapper_1 = require("../../domain/mappers/risk.mapper");
const risk_collection_entity_1 = require("../../domain/entities/risk/risk-collection.entity");
const risk_persona_entity_1 = require("../../domain/entities/risk/risk-persona.entity");
const risk_coverage_mapper_1 = require("../../domain/mappers/risk-coverage.mapper");
let RiskService = RiskService_1 = class RiskService {
    constructor(_citiProxyService) {
        this._citiProxyService = _citiProxyService;
    }
    async createRisk(createRiskDto) {
        let riskId;
        let riskCoverage;
        let detailsAmount;
        try {
            riskId = await this.callToRisk(createRiskDto);
        }
        catch (e) {
        }
        try {
            riskCoverage = await this.callToRiskCoverage(riskId, createRiskDto.coverages);
        }
        catch (e) {
        }
        return riskId;
    }
    async callToRisk(createRiskDto) {
        try {
            const uri = `/Quote/Risk`;
            const data = RiskService_1.mappingRisk(createRiskDto);
            let respuesta;
            const data1 = {
                cotizacionRiesgoCollection: data
            };
            await this._citiProxyService.post(uri, data).then((response) => {
                return response.cotizacionRiesgoCollection.map((risk) => {
                    respuesta = risk;
                });
            }).catch((e) => console.log(e.response.data));
            return { data, respuesta };
        }
        catch (e) {
            throw e;
        }
    }
    static mappingRisk(createRiskDto) {
        try {
            const risk = risk_mapper_1.RiskMapper.CreateRiskToDomain(createRiskDto);
            const riskEntity = new risk_entity_1.RiskEntity(risk);
            const riskCollection = risk_mapper_1.RiskMapper.CreateRiskCollection(createRiskDto);
            const riskCollectionEntity = new risk_collection_entity_1.RiskCollectionEntity(riskCollection);
            const persona = risk_mapper_1.RiskMapper.CreateRiskPerson(createRiskDto.dataInsured);
            riskCollectionEntity.cotizacionRiesgoPersonaCollection = [new risk_persona_entity_1.RiskPersonaEntity(persona)];
            riskEntity.cotizacionRiesgoCollection = [riskCollectionEntity];
            return riskEntity;
        }
        catch (e) {
            console.log(e);
        }
    }
    async callToRiskCoverage(riskId, coverages) {
        try {
            const uri = `/Quote/RiskCoverage`;
            const data = risk_coverage_mapper_1.RiskCoverageMapper.mappingRiskCoverage(riskId, coverages);
            return await this._citiProxyService.post(uri, data).then((response) => response);
        }
        catch (e) {
            throw e;
        }
    }
};
RiskService = RiskService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [citi_proxy_service_1.CitiProxyService])
], RiskService);
exports.RiskService = RiskService;
//# sourceMappingURL=risk.service.js.map