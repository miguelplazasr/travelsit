import { LocationService } from "../app/location.service";
export declare class LocationController {
    private readonly locationService;
    constructor(locationService: LocationService);
    getCountries(trip: string): Promise<{
        id: number;
        description: string;
    }[]>;
    getAllStates(): Promise<any>;
    getMunicipalityByState(stateId: number): Promise<any>;
    getPopulationByMunicipality(municipalityId: number): Promise<any>;
    getColoniesByPopulation(populationId: number): Promise<any>;
    getColoniesByName(colonyName: string): Promise<any>;
    getColoniesByZipCode(zipCode: string): Promise<any>;
}
