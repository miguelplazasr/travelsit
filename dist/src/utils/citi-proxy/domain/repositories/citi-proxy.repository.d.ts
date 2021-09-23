import { Entity } from "../../../../core/domain/entity";
export interface CitiProxyRepository<T> {
    all(uri: any): Promise<Entity<T[]>>;
    get(uri: any, id: any): Promise<Entity<T>>;
    post(uri: any): Promise<Entity<T>>;
    put(uri: any): Promise<Entity<T>>;
    delete(uri: any): Promise<Entity<T>>;
    process(method: any, uri: any, params: any, options?: any): Promise<any>;
}
