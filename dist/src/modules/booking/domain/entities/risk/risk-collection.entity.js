"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskCollectionEntity = void 0;
class RiskCollectionEntity {
    constructor(obj) {
        this.consecutivo = obj && obj.consecutivo || 0;
        this.cotizacionRiesgoPersonaCollection = obj && obj.cotizacionRiesgoPersonaCollection;
        this.estatusId = obj && obj.estatusId || 1;
        this.paqueteId = obj && obj.paqueteId;
        this.tipoRiesgoId = obj && obj.tipoRiesgoId || 4;
        this.versionId = obj && obj.versionId;
    }
}
exports.RiskCollectionEntity = RiskCollectionEntity;
//# sourceMappingURL=risk-collection.entity.js.map