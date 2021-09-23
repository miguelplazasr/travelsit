export declare class LocationEntity {
    nombreCatalogo: LOCATION_CATALOG;
    id: number;
    paisId?: number;
    palabraClave: string;
    constructor(obj?: Location);
}
export interface Location {
    nombreCatalogo: LOCATION_CATALOG;
    id: number;
    paisId?: number;
    palabraClave: string;
}
export declare enum LOCATION_CATALOG {
    states = "_CESTADOS",
    municipality = "_CMUNICIPIOS",
    population = "_CPOBLACIONES",
    colonies = "_CCOLONIAS",
    countries = "_CPAISDESTINO",
    coloniesByZipCode = "_CCODIGOPOSTAL"
}
