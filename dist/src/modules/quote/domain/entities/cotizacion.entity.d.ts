import { CotizacionVersion } from "./cotizacion-version.entity";
export declare class CotizacionEntity {
    cotizacionId: number;
    cotizacionVersion: CotizacionVersion;
    esLineaNegocioBI: boolean;
    esUltimaVersion: boolean;
    estatusId: number;
    existeNotaCoberturaVigente: boolean;
    existeRegistroApollo: boolean;
    tipoCotizacionId: number;
    constructor(obj?: Cotizacion);
}
export interface Cotizacion {
    cotizacionId: number;
    cotizacionVersion: CotizacionVersion;
    esLineaNegocioBI: boolean;
    esUltimaVersion: boolean;
    estatusId: number;
    existeNotaCoberturaVigente: boolean;
    existeRegistroApollo: boolean;
    tipoCotizacionId: number;
}
