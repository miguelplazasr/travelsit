"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalWorkMediaEntity = void 0;
class InternalWorkMediaEntity {
    constructor(obj) {
        this.cadenaLibre = obj && obj.cadenaLibre || null;
        this.numero = obj && obj.numero || null;
        this.registroExisteOrigen = obj && obj.registroExisteOrigen || true;
        this.tipoMedioComunicacionId = obj && obj.tipoMedioComunicacionId;
    }
}
exports.InternalWorkMediaEntity = InternalWorkMediaEntity;
//# sourceMappingURL=internal-work-media.entity.js.map