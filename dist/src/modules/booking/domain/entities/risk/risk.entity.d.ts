import { RiskCollection } from "./risk-collection.entity";
export declare class RiskEntity {
    cotizacionRiesgoCollection: RiskCollection[];
    esContratanteAsegurado: boolean;
    versionId: number;
    constructor(obj?: Partial<Risk>);
}
export interface Risk {
    cotizacionRiesgoCollection: RiskCollection[];
    esContratanteAsegurado: boolean;
    versionId: number;
}
export interface CotRiskDemo {
    cotizacionRiesgo?: Risk[];
}
