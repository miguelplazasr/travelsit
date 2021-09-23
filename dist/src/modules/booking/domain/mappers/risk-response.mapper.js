"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskResponseMapper = void 0;
class RiskResponseMapper {
    static responseRiskToDto(riskResponse) {
        var _a;
        const partialResponse = {
            riskId: (_a = riskResponse.cotizacionRiesgoId) !== null && _a !== void 0 ? _a : undefined
        };
        Object.keys(partialResponse).forEach(key => partialResponse[key] === undefined && delete partialResponse[key]);
        return partialResponse;
    }
}
exports.RiskResponseMapper = RiskResponseMapper;
//# sourceMappingURL=risk-response.mapper.js.map