import { CitiProxyRepository } from "../repositories/citi-proxy.repository";
import { Entity } from "../../../../core/domain/entity";
export declare class CitiProxyService<T> {
    private readonly citiProxyRepo;
    constructor(citiProxyRepo: CitiProxyRepository<any>);
    all(uri: string): Promise<Entity<T[]>>;
    process(method: any, uri: any, params: any, options?: any): Promise<any>;
}
