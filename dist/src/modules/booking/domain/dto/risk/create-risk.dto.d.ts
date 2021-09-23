import { DataInsuredDto } from "./data-insured.dto";
import { RiskCoverageDto } from "../risk-coverage/risk-coverage.dto";
export declare class CreateRiskDto {
    readonly dataInsured: DataInsuredDto;
    readonly contractorTraveling: boolean;
    readonly versionId: number;
    readonly trip: string;
    readonly coverages: RiskCoverageDto[];
}
