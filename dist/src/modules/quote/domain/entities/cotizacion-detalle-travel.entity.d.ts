import { ICotizacionDetalleCaractaristica } from "./cotizacion-detalle-caractaristica.entity";
export declare class CotizacionDetalleTravel {
    contratanteViaja: boolean;
    cotizacionDetalleCaracteristicaCollection?: ICotizacionDetalleCaractaristica[];
    email: string;
    fechaFin: Date;
    fechaInicio: Date;
    origenId: number;
    referenciaCliente: string;
    tipoDestinoId: number;
    tipoViajeId: number;
    versionId: number;
    constructor(obj?: ICotizacionDetalleTravel);
}
export interface ICotizacionDetalleTravel {
    contratanteViaja: boolean;
    cotizacionDetalleCaracteristicaCollection?: ICotizacionDetalleCaractaristica[];
    email: string;
    fechaFin: Date;
    fechaInicio: Date;
    origenId: number;
    referenciaCliente: string;
    tipoDestinoId: number;
    tipoViajeId: number;
    versionId: number;
}
