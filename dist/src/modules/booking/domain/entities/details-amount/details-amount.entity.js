"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteDetailAmountModel = exports.DetailsAmountEntity = void 0;
class DetailsAmountEntity {
    constructor(obj) {
        this.cotizacionDetalleMto.primaTotalMto = obj && obj.cotizacionDetalleMto.primaTotalMto;
        this.versionId = obj && obj.versionId;
    }
}
exports.DetailsAmountEntity = DetailsAmountEntity;
class QuoteDetailAmountModel {
    constructor(obj) {
        this.bonificacionMto = obj && obj.bonificacionMto || 0;
        this.comisionMto = obj && obj.comisionMto || 0;
        this.comisionPct = obj && obj.comisionPct || 0;
        this.derechoMto = obj && obj.derechoMto || 0;
        this.descuentoMto = obj && obj.descuentoMto || 0;
        this.impuestoMto = obj && obj.impuestoMto || 0;
        this.impuestoPct = obj && obj.impuestoPct || 0;
        this.primaNetaMto = obj && obj.primaNetaMto || 0;
        this.primaTotalMto = obj && obj.primaTotalMto;
        this.recargoMto = obj && obj.recargoMto || 0;
        this.recargoPct = obj && obj.recargoPct || 0;
    }
}
exports.QuoteDetailAmountModel = QuoteDetailAmountModel;
//# sourceMappingURL=details-amount.entity.js.map