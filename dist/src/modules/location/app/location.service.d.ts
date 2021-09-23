import { Country } from "../domain/entities/country.entity";
import { CitiProxyService } from "../../../utils/citi-proxy/app/citi-proxy.service";
export declare class LocationService {
    private readonly _citiProxyService;
    private locationFilter;
    constructor(_citiProxyService: CitiProxyService<any>);
    callToCountries(trip: any): Promise<Country[]>;
    callToStates(): Promise<any>;
    callToMunicipality(state: number): Promise<any>;
    callToPopulation(municipalityId: number): Promise<any>;
    callToColonies(populationId: number): Promise<any>;
    private callToLocation;
    callToColoniesByName(colonyName: string): Promise<any>;
    callToColoniesByZipCode(zipCode: string): Promise<any>;
}
