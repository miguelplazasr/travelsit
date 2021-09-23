import { Entity } from "../../../../core/domain/entity";
import { Country } from "../entities/country";
export interface CountryRepository {
    all(): Promise<Entity<Country[]>>;
}
