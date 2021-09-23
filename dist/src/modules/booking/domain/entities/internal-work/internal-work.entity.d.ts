import { IWAddress } from "./internal-work-address.entity";
import { IWId } from "./internal-work-id.entity";
import { IWMedia } from "./internal-work-media.entity";
export declare class InternalWorkEntity implements InternalWork {
    apellidoMaterno: string;
    apellidoPaterno: string;
    direcciones: IWAddress[];
    fechaNacimiento: Date;
    identificaciones: IWId[];
    mediosComunicacion: IWMedia[];
    paisId: number;
    primerNombre: string;
    rfc: string;
    rfcHomoclave: string;
    registroExisteOrigen?: boolean;
    segundoNombre?: string;
    sexoId: number;
    personaId?: number;
    constructor(obj?: Partial<InternalWork>);
}
export interface InternalWork {
    apellidoMaterno: string;
    apellidoPaterno: string;
    direcciones: IWAddress[];
    fechaNacimiento: Date;
    identificaciones: IWId[];
    mediosComunicacion: IWMedia[];
    paisId: number;
    primerNombre: string;
    rfc: string;
    rfcHomoclave: string;
    registroExisteOrigen?: boolean;
    segundoNombre?: string;
    sexoId: number;
    personaId?: number;
}
