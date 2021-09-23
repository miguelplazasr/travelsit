"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CotizacionAgenteConducto = void 0;
class CotizacionAgenteConducto {
    constructor(obj) {
        this.agenteId = obj && obj.agenteId || 12;
        this.clienteExclusivo = obj && obj.clienteExclusivo || false;
        this.conductoId = obj && obj.conductoId || 0;
    }
}
exports.CotizacionAgenteConducto = CotizacionAgenteConducto;
//# sourceMappingURL=cotizacion-agente-conducto.entity.js.map