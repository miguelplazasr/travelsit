"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CotizacionDetalleTravel = void 0;
class CotizacionDetalleTravel {
    constructor(obj) {
        this.contratanteViaja = obj && obj.contratanteViaja || false;
        this.email = obj && obj.email || null;
        this.fechaFin = obj && obj.fechaFin || new Date();
        this.fechaInicio = obj && obj.fechaInicio || new Date();
        this.origenId = obj && obj.origenId || 1;
        this.referenciaCliente = obj && obj.referenciaCliente || null;
        this.tipoDestinoId = obj && obj.tipoDestinoId || 3;
        this.tipoViajeId = obj && obj.tipoViajeId || 1;
        this.versionId = obj && obj.versionId || 0;
    }
}
exports.CotizacionDetalleTravel = CotizacionDetalleTravel;
//# sourceMappingURL=cotizacion-detalle-travel.entity.js.map