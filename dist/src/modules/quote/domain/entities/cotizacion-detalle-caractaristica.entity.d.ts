export declare class CotizacionDetalleCaractaristica {
    catalogoId: number;
    catalogoOpcionId: string;
    cotizacionDetalleCaracteristicaId?: number;
    tipoValorId: number;
    valor: string;
    versionId?: number;
    constructor(obj?: ICotizacionDetalleCaractaristica);
}
export interface ICotizacionDetalleCaractaristica {
    catalogoId: number;
    catalogoOpcionId: string;
    cotizacionDetalleCaracteristicaId?: number;
    tipoValorId: number;
    valor: string;
    versionId?: number;
}
