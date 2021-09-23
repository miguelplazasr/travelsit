import { CreateRiskCoverageDto } from "../../domain/dto/risk-coverage/create-risk-coverage.dto";
import { RiskCoverageService } from "../../app/risk-coverage/risk-coverage.service";
export declare class RiskCoverageController {
    private readonly riskService;
    constructor(riskService: RiskCoverageService);
    create(createRiskCoverage: CreateRiskCoverageDto): Promise<void>;
}
