import { Entity } from "../../../../core/domain/entity";
import { UniqueEntityId } from "../../../../core/domain/unique-entity-id";
interface CountryProps {
    value: string;
}
export declare class Country extends Entity<CountryProps> {
    get id(): UniqueEntityId;
    get value(): string;
    constructor(props: CountryProps, id?: UniqueEntityId);
}
export {};
