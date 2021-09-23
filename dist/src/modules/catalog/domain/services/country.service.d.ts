import { Country } from "../entities/country";
import { CountryRepository } from "../repositories/country-repository";
import { Entity } from "../../../../core/domain/entity";
export declare class CountryService {
    private readonly countryRepository;
    constructor(countryRepository: CountryRepository);
    all(): Promise<Entity<Country[]>>;
}
