export declare class CreateQuoteDto {
    readonly package: string;
    readonly destination: string;
    readonly includeBenefit?: boolean;
    readonly isSingleTrip?: boolean;
    readonly departDate: Date;
    readonly returnDate: Date;
    readonly countries: number[];
    readonly coverType?: string;
    readonly persons: People;
    readonly promoCode?: string;
}
export interface People {
    adults?: number[];
    children?: number[];
}
