import { AddressContractorDto } from "./address-contractor.dto";
import { DataContractorDto } from "./data-contractor.dto";
export declare class CreateInternalWorkDto {
    readonly dataContractor: DataContractorDto;
    readonly addressContractor: AddressContractorDto;
    readonly versionId: number;
    readonly planAmount: number;
}
