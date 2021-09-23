export declare class CrsResponse {
    planId: number;
    planName: string;
    planCost: number;
    currencyTypeId: number;
    destinationId: number;
    destinationDescription: string;
    coverTypeId: number;
    validPromo: boolean;
    additionalInfo: {
        totalPremiumUSD: number;
    };
}
export interface ICrsResponse {
    planId: number;
    planName: string;
    planCost: number;
    currencyTypeId: number;
    destinationId: number;
    destinationDescription: string;
    coverTypeId: number;
    validPromo: boolean;
    "additionalInfo": {
        totalPremiumUSD: number;
    };
}
