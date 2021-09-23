import { CountryService } from "../../domain/services/country.service";
import { Country } from "../../domain/entities/country";
import { Entity } from "../../../../core/domain/entity";
export declare class CountryController {
    private readonly _countryService;
    constructor(_countryService: CountryService);
    findAll(): Promise<Entity<Country[]>>;
}
