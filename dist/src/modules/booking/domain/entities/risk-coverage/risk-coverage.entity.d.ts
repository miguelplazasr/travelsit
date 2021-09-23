export declare class RiskCoverageEntity {
    cotizacionRiesgoCoberturaCollection: RiskCoverage[];
    cotizacionRiesgoId: number;
    constructor(obj?: Partial<RiskCoverageCollection>);
}
export interface RiskCoverageCollection {
    cotizacionRiesgoCoberturaCollection: RiskCoverage[];
    cotizacionRiesgoId: number;
}
export interface RiskCoverage {
    coberturaId: number;
    cotizacionRiesgoId: number;
    periodo: number;
    sumaAseguradaMto: number;
}
