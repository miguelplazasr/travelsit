import { IWId } from "../internal-work/internal-work-id.entity";
export declare class RiskPersonaEntity implements RiskPerson {
    apellidoMaterno: string;
    apellidoPaterno: string;
    cotizacionRiesgoPersonaIdentificacionCollection: IWId[];
    fechaNacimiento: Date;
    folioIdentificacionTitular: string;
    nombre: string;
    nombreCompleto: string;
    personaId: number;
    rolPersonaId: number;
    sexoId: number;
    constructor(obj?: Partial<RiskPerson>);
}
export interface RiskPerson {
    apellidoMaterno: string;
    apellidoPaterno: string;
    cotizacionRiesgoPersonaIdentificacionCollection: IWId[];
    fechaNacimiento: Date;
    folioIdentificacionTitular: string;
    nombre: string;
    nombreCompleto: string;
    personaId: number;
    rolPersonaId: number;
    sexoId: number;
}
