"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CotizacionVersion = void 0;
const cotizacion_agente_conducto_entity_1 = require("./cotizacion-agente-conducto.entity");
const cotizacion_dato_adicional_entity_1 = require("./cotizacion-dato-adicional.entity");
const cotizacion_detalle_entity_1 = require("./cotizacion-detalle.entity");
const cotizacion_detalle_travel_entity_1 = require("./cotizacion-detalle-travel.entity");
class CotizacionVersion {
    constructor(obj) {
        this.cotizacionAgenteConducto = new cotizacion_agente_conducto_entity_1.CotizacionAgenteConducto();
        this.cotizacionDatoAdicional = new cotizacion_dato_adicional_entity_1.CotizacionDatoAdicional();
        this.cotizacionDetalle = new cotizacion_detalle_entity_1.CotizacionDetalle();
        this.cotizacionDetalleTravel = new cotizacion_detalle_travel_entity_1.CotizacionDetalleTravel();
        this.estatusId = obj && obj.estatusId || 0;
        this.nombreVersion = obj && obj.nombreVersion || 'Primera Versi�n';
        this.subVersion = obj && obj.subVersion || 0;
        this.versionId = obj && obj.versionId || 0;
    }
}
exports.CotizacionVersion = CotizacionVersion;
//# sourceMappingURL=cotizacion-version.entity.js.map