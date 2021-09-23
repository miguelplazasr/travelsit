import { RiskPerson } from "./risk-persona.entity";
export declare class RiskCollectionEntity implements RiskCollection {
    consecutivo: number;
    cotizacionRiesgoPersonaCollection: RiskPerson[];
    estatusId: number;
    paqueteId: number;
    tipoRiesgoId: number;
    cotizacionRiesgoId?: number;
    versionId?: number;
    constructor(obj?: Partial<RiskCollection>);
}
export interface RiskCollection {
    consecutivo: number;
    cotizacionRiesgoPersonaCollection: RiskPerson[];
    estatusId: number;
    paqueteId: number;
    tipoRiesgoId: number;
    cotizacionRiesgoId?: number;
    versionId?: number;
}
