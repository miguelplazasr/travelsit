"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CotizacionDetalle = void 0;
class CotizacionDetalle {
    constructor(obj) {
        this.aseguradoId = obj && obj.aseguradoId || 0;
        this.canalId = obj && obj.canalId || 1;
        this.canalVentaId = obj && obj.canalVentaId || 35;
        this.cargoAutomatico = obj && obj.cargoAutomatico || 0;
        this.criterioCalculoUbicacionId = obj && obj.criterioCalculoUbicacionId || 2;
        this.derechosProrateados = obj && obj.derechosProrateados || false;
        this.diasGracia = obj && obj.diasGracia || 0;
        this.estatusId = obj && obj.estatusId || 33;
        this.finVigencia = obj && obj.finVigencia || new Date();
        this.inicioVigencia = obj && obj.inicioVigencia || new Date();
        this.moduloId = obj && obj.moduloId || 0;
        this.monedaId = obj && obj.monedaId || 2;
        this.negocioId = obj && obj.negocioId || 6511;
        this.paisId = obj && obj.paisId || 1;
        this.paqueteId = obj && obj.paqueteId || 455;
        this.primaNetaMto = obj && obj.primaNetaMto || null;
        this.productoId = obj && obj.productoId || 250;
        this.renovacion = obj && obj.renovacion || false;
        this.tarifaId = obj && obj.tarifaId || 1045;
        this.tipoCalculoId = obj && obj.tipoCalculoId || 0;
        this.tipoPagoId = obj && obj.tipoPagoId || 0;
        this.tipoPolizaId = obj && obj.tipoPolizaId || 13;
        this.tipoSuscripcionId = obj && obj.tipoSuscripcionId || 1;
        this.tranAseguradoId = obj && obj.tranAseguradoId || 0;
        this.tranDireccionFiscalId = obj && obj.tranDireccionFiscalId || 0;
    }
}
exports.CotizacionDetalle = CotizacionDetalle;
//# sourceMappingURL=cotizacion-detalle.entity.js.map