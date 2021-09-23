"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalWorkEntity = void 0;
class InternalWorkEntity {
    constructor(obj) {
        this.apellidoMaterno = obj && obj.apellidoMaterno;
        this.apellidoPaterno = obj && obj.apellidoPaterno;
        this.direcciones = obj && obj.direcciones;
        this.fechaNacimiento = obj && obj.fechaNacimiento || new Date();
        this.identificaciones = obj && obj.identificaciones;
        this.mediosComunicacion = obj && obj.mediosComunicacion;
        this.paisId = obj && obj.paisId || 1;
        this.primerNombre = obj && obj.primerNombre;
        this.rfc = obj && obj.rfc;
        this.rfcHomoclave = obj && obj.rfcHomoclave;
        this.registroExisteOrigen = obj && obj.registroExisteOrigen || true;
        this.segundoNombre = obj && obj.segundoNombre || '';
        this.sexoId = obj && obj.sexoId;
    }
}
exports.InternalWorkEntity = InternalWorkEntity;
//# sourceMappingURL=internal-work.entity.js.map