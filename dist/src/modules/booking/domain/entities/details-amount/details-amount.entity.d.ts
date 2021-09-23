export declare class DetailsAmountEntity implements DetailsAmount {
    cotizacionDetalleMto: QuoteDetailAmount;
    versionId: number;
    constructor(obj?: Partial<DetailsAmount>);
}
export interface DetailsAmount {
    cotizacionDetalleMto: QuoteDetailAmount;
    versionId: number;
}
export declare class QuoteDetailAmountModel implements QuoteDetailAmount {
    bonificacionMto?: number;
    comisionMto?: number;
    comisionPct?: number;
    derechoMto?: number;
    descuentoMto?: number;
    impuestoMto?: number;
    impuestoPct?: number;
    primaNetaMto?: number;
    primaTotalMto: number;
    recargoMto?: number;
    recargoPct?: number;
    constructor(obj?: Partial<QuoteDetailAmount>);
}
export interface QuoteDetailAmount {
    bonificacionMto?: number;
    comisionMto?: number;
    comisionPct?: number;
    derechoMto?: number;
    descuentoMto?: number;
    impuestoMto?: number;
    impuestoPct?: number;
    primaNetaMto?: number;
    primaTotalMto: number;
    recargoMto?: number;
    recargoPct?: number;
}
