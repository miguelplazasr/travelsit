"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskCoverageMapper = void 0;
const risk_coverage_entity_1 = require("../entities/risk-coverage/risk-coverage.entity");
class RiskCoverageMapper {
    static CreateRiskCoverageToDomain(riskId, risks) {
        const partialRiskCoverageCollection = {
            cotizacionRiesgoId: riskId !== null && riskId !== void 0 ? riskId : undefined,
            cotizacionRiesgoCoberturaCollection: risks.map((coverage) => {
                return {
                    coberturaId: coverage.id,
                    cotizacionRiesgoId: riskId,
                    periodo: 1,
                    sumaAseguradaMto: coverage.amount
                };
            })
        };
        Object.keys(partialRiskCoverageCollection).forEach(key => partialRiskCoverageCollection[key] === undefined && delete partialRiskCoverageCollection[key]);
        return partialRiskCoverageCollection;
    }
    static mappingRiskCoverage(riskId, createRiskCoverageDto) {
        const riskCoverage = this.CreateRiskCoverageToDomain(riskId, createRiskCoverageDto);
        return new risk_coverage_entity_1.RiskCoverageEntity(riskCoverage);
    }
}
exports.RiskCoverageMapper = RiskCoverageMapper;
//# sourceMappingURL=risk-coverage.mapper.js.map