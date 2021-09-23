import { UniqueEntityId } from "./unique-entity-id";
export declare abstract class Entity<T> {
    protected readonly _id: UniqueEntityId;
    readonly props: T;
    protected constructor(props: T, id?: UniqueEntityId);
}
