import { CitiProxyService } from "../../../../utils/citi-proxy/app/citi-proxy.service";
import { Rfc } from "../../domain/entities/rfc/rfc.entity";
import { CreateRiskDto } from "../../domain/dto/risk/create-risk.dto";
import { Risk } from "../../domain/entities/risk/risk.entity";
import { RiskCoverageDto } from "../../domain/dto/risk-coverage/risk-coverage.dto";
export declare class RiskService {
    private readonly _citiProxyService;
    constructor(_citiProxyService: CitiProxyService<Rfc>);
    createRisk(createRiskDto: CreateRiskDto): Promise<any>;
    callToRisk(createRiskDto: CreateRiskDto): Promise<{
        data: Risk;
        respuesta: any;
    }>;
    private static mappingRisk;
    callToRiskCoverage(riskId: number, coverages: RiskCoverageDto[]): Promise<any>;
}
