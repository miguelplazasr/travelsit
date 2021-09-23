"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalWorkIdEntity = void 0;
class InternalWorkIdEntity {
    constructor(obj) {
        this.folioIdentificacion = obj && obj.folioIdentificacion;
        this.registroExisteOrigen = obj && obj.registroExisteOrigen || true;
        this.tipoIdentificacionId = obj && obj.tipoIdentificacionId || 16;
    }
}
exports.InternalWorkIdEntity = InternalWorkIdEntity;
//# sourceMappingURL=internal-work-id.entity.js.map