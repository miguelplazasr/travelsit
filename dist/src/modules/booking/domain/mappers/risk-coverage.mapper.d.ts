import { RiskCoverageDto } from "../dto/risk-coverage/risk-coverage.dto";
import { RiskCoverageCollection } from "../entities/risk-coverage/risk-coverage.entity";
export declare class RiskCoverageMapper {
    static CreateRiskCoverageToDomain(riskId: number, risks: RiskCoverageDto[]): Partial<RiskCoverageCollection>;
    static mappingRiskCoverage(riskId: number, createRiskCoverageDto: RiskCoverageDto[]): RiskCoverageCollection;
}
