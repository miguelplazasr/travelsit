import { CotizacionAgenteConducto } from "./cotizacion-agente-conducto.entity";
import { CotizacionDatoAdicional } from "./cotizacion-dato-adicional.entity";
import { CotizacionDetalle } from "./cotizacion-detalle.entity";
import { CotizacionDetalleTravel } from "./cotizacion-detalle-travel.entity";
export declare class CotizacionVersion {
    cotizacionAgenteConducto: CotizacionAgenteConducto;
    cotizacionDatoAdicional: CotizacionDatoAdicional;
    cotizacionDetalle: CotizacionDetalle;
    cotizacionDetalleTravel: CotizacionDetalleTravel;
    estatusId: number;
    nombreVersion: string;
    subVersion: number;
    versionId: number;
    constructor(obj?: ICotizacionVersion);
}
export interface ICotizacionVersion {
    cotizacionAgenteConducto: CotizacionAgenteConducto;
    cotizacionDatoAdicional: CotizacionDatoAdicional;
    cotizacionDetalle: CotizacionDetalle;
    cotizacionDetalleTravel: CotizacionDetalleTravel;
    estatusId: number;
    nombreVersion: string;
    subVersion: number;
    versionId: number;
}
