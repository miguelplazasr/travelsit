import { CitiProxyService } from "../../../../utils/citi-proxy/app/citi-proxy.service";
import { GenerateCoveragesDto } from "../../domain/dto/generate-coverages.dto";
export declare class CoveragesService {
    private readonly _citiProxyService;
    constructor(_citiProxyService: CitiProxyService<any>);
    generate(generateCoverages: GenerateCoveragesDto): Promise<any>;
    private callToCoverages;
    private transformCoverages;
}
