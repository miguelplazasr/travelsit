"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CotizacionEntity = void 0;
const cotizacion_version_entity_1 = require("./cotizacion-version.entity");
class CotizacionEntity {
    constructor(obj) {
        this.cotizacionId = obj && obj.cotizacionId || 0;
        this.cotizacionVersion = new cotizacion_version_entity_1.CotizacionVersion();
        this.esLineaNegocioBI = obj && obj.esLineaNegocioBI || false;
        this.esUltimaVersion = obj && obj.esUltimaVersion || false;
        this.estatusId = obj && obj.estatusId || 1;
        this.existeNotaCoberturaVigente = obj && obj.existeNotaCoberturaVigente || false;
        this.existeRegistroApollo = obj && obj.existeRegistroApollo || false;
        this.tipoCotizacionId = obj && obj.tipoCotizacionId || 3;
    }
}
exports.CotizacionEntity = CotizacionEntity;
//# sourceMappingURL=cotizacion.entity.js.map