export declare class InternalWorkIdEntity {
    folioIdentificacion: string;
    registroExisteOrigen?: boolean;
    tipoIdentificacionId?: number;
    constructor(obj?: IWId);
}
export interface IWId {
    folioIdentificacion: string;
    registroExisteOrigen?: boolean;
    tipoIdentificacionId?: number;
}
