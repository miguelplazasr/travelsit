"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskEntity = void 0;
class RiskEntity {
    constructor(obj) {
        this.cotizacionRiesgoCollection = obj && obj.cotizacionRiesgoCollection;
        this.esContratanteAsegurado = obj && obj.esContratanteAsegurado || false;
        this.versionId = obj && obj.versionId;
    }
}
exports.RiskEntity = RiskEntity;
//# sourceMappingURL=risk.entity.js.map