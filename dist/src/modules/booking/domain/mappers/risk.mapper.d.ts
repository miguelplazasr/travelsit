import { CreateRiskDto } from "../dto/risk/create-risk.dto";
import { Risk } from "../entities/risk/risk.entity";
import { RiskCollection } from "../entities/risk/risk-collection.entity";
import { DataInsuredDto } from "../dto/risk/data-insured.dto";
import { RiskPerson } from "../entities/risk/risk-persona.entity";
export declare class RiskMapper {
    static CreateRiskToDomain(create: CreateRiskDto): Partial<Risk>;
    static CreateRiskCollection(create: CreateRiskDto): Partial<RiskCollection>;
    static CreateRiskPerson(create: DataInsuredDto): Partial<RiskPerson>;
}
