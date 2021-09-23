import { RiskResponse } from "../entities/risk/risk-response.entity";
import { RiskCollection } from "../entities/risk/risk-collection.entity";
export declare class RiskResponseMapper {
    static responseRiskToDto(riskResponse: RiskCollection): Partial<RiskResponse>;
}
