export declare class CoveragesEntity {
    planName: string;
    coverages: CoverageEntity[];
    constructor(obj?: ICoverages);
}
export interface ICoverages {
    planName: string;
    coverages: CoverageEntity[];
}
export declare class CoverageEntity {
    name: string;
    description: string;
    id: number;
    amount: string;
    associatedText: string;
    constructor(obj?: ICoverage);
}
export interface ICoverage {
    name: string;
    description: string;
    amount: string;
    id: number;
    associatedText: string;
}
