import { InternalWork } from "../entities/internal-work/internal-work.entity";
import { IWAddress } from "../entities/internal-work/internal-work-address.entity";
import { DataContractorDto } from "../dto/internal-work/data-contractor.dto";
import { AddressContractorDto } from "../dto/internal-work/address-contractor.dto";
export declare class InternalWorkMapper {
    static CreateInternalWorkToDomain(create: DataContractorDto): Partial<InternalWork>;
    static CreateInternalWorkAddressToDomain(create: AddressContractorDto): Partial<IWAddress>;
}
