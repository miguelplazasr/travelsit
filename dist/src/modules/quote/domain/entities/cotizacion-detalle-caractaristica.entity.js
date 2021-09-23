"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CotizacionDetalleCaractaristica = void 0;
class CotizacionDetalleCaractaristica {
    constructor(obj) {
        this.catalogoId = obj && obj.catalogoId || 408;
        this.catalogoOpcionId = obj && obj.catalogoOpcionId || "2";
        this.cotizacionDetalleCaracteristicaId = obj && obj.cotizacionDetalleCaracteristicaId || 0;
        this.tipoValorId = obj && obj.tipoValorId || 2;
        this.valor = obj && obj.valor || "1";
        this.versionId = obj && obj.versionId || 0;
    }
}
exports.CotizacionDetalleCaractaristica = CotizacionDetalleCaractaristica;
//# sourceMappingURL=cotizacion-detalle-caractaristica.entity.js.map