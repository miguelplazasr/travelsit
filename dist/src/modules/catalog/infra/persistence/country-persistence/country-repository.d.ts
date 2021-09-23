import { Country } from "../../../domain/entities/country";
import { Entity } from "../../../../../core/domain/entity";
export declare class CountryRepository implements CountryRepository {
    private readonly _countryRepo;
    constructor(_countryRepo: CountryRepository);
    all(): Promise<Entity<Country[]>>;
}
