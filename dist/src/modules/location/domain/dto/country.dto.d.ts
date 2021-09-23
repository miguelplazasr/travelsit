import { Country } from "../entities/country.entity";
export declare class CountryDto {
    readonly id: number;
    readonly description: string;
    constructor(country: Country);
}
