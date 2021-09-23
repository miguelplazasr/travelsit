"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CotizacionDatoAdicional = void 0;
class CotizacionDatoAdicional {
    constructor(obj) {
        this.aplicaPromedio = obj && obj.aplicaPromedio || 0;
        this.canalVentaId = obj && obj.canalVentaId || 'NA';
        this.codigoProducto = obj && obj.codigoProducto || '206';
        this.lineaNegocioId = obj && obj.lineaNegocioId || 15;
        this.ramoId = obj && obj.ramoId || 29;
        this.tamanioNegocioId = obj && obj.tamanioNegocioId || 'NA';
        this.tipoMonitoreoId = obj && obj.tipoMonitoreoId || 2;
        this.tipoNegocioId = obj && obj.tipoNegocioId || 3;
        this.tipoPolizaAcomodacionId = obj && obj.tipoPolizaAcomodacionId || 3;
    }
}
exports.CotizacionDatoAdicional = CotizacionDatoAdicional;
//# sourceMappingURL=cotizacion-dato-adicional.entity.js.map