export declare class InternalWorkAddressEntity {
    calle: string;
    codigoPostal: string;
    coloniaId: number;
    direccionFiscal: boolean;
    estadoId: number;
    municipioId: number;
    numeroExterior: string;
    numeroInterior: string;
    paisId: number;
    poblacionId: number;
    registroExisteOrigen: boolean;
    seleccionada: boolean;
    constructor(obj?: Partial<IWAddress>);
}
export interface IWAddress {
    calle: string;
    codigoPostal: string;
    coloniaId: number;
    direccionFiscal: boolean;
    estadoId: number;
    municipioId: number;
    numeroExterior: string;
    numeroInterior: string;
    paisId: number;
    poblacionId: number;
    registroExisteOrigen: boolean;
    seleccionada: boolean;
}
