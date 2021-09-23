"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskPersonaEntity = void 0;
class RiskPersonaEntity {
    constructor(obj) {
        this.apellidoMaterno = obj && obj.apellidoMaterno;
        this.apellidoPaterno = obj && obj.apellidoPaterno;
        this.cotizacionRiesgoPersonaIdentificacionCollection = obj && obj.cotizacionRiesgoPersonaIdentificacionCollection;
        this.fechaNacimiento = obj && obj.fechaNacimiento;
        this.folioIdentificacionTitular = obj && obj.folioIdentificacionTitular || '';
        this.nombre = obj && obj.nombre;
        this.nombreCompleto = obj && obj.nombreCompleto;
        this.personaId = obj && obj.personaId || 0;
        this.rolPersonaId = obj && obj.rolPersonaId || 2;
        this.sexoId = obj && obj.sexoId;
    }
}
exports.RiskPersonaEntity = RiskPersonaEntity;
//# sourceMappingURL=risk-persona.entity.js.map