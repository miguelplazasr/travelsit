import { RiskService } from "../../app/risk/risk.service";
import { CreateRiskDto } from "../../domain/dto/risk/create-risk.dto";
export declare class RiskController {
    private readonly riskService;
    constructor(riskService: RiskService);
    create(createRiskDto: CreateRiskDto): Promise<any>;
}
