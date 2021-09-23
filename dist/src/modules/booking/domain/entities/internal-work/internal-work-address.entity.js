"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalWorkAddressEntity = void 0;
class InternalWorkAddressEntity {
    constructor(obj) {
        this.calle = obj && obj.calle;
        this.codigoPostal = obj && obj.codigoPostal;
        this.coloniaId = obj && obj.coloniaId;
        this.direccionFiscal = obj && obj.direccionFiscal || true;
        this.estadoId = obj && obj.estadoId;
        this.municipioId = obj && obj.municipioId;
        this.numeroExterior = obj && obj.numeroExterior;
        this.numeroInterior = obj && obj.numeroInterior;
        this.paisId = obj && obj.paisId || 1;
        this.poblacionId = obj && obj.poblacionId || null;
        this.registroExisteOrigen = obj && obj.registroExisteOrigen || true;
        this.seleccionada = obj && obj.seleccionada || true;
    }
}
exports.InternalWorkAddressEntity = InternalWorkAddressEntity;
//# sourceMappingURL=internal-work-address.entity.js.map