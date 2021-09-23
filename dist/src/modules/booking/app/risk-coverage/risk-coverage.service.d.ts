import { CitiProxyService } from "../../../../utils/citi-proxy/app/citi-proxy.service";
import { CreateRiskCoverageDto } from "../../domain/dto/risk-coverage/create-risk-coverage.dto";
export declare class RiskCoverageService {
    private readonly _citiProxyService;
    constructor(_citiProxyService: CitiProxyService<any>);
    callRoRiskCoverage(createRiskCoverageDto: CreateRiskCoverageDto): Promise<void>;
}
