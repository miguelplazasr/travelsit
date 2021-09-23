import { CreateRfcDto } from "../../domain/dto/create-rfc.dto";
import { RfcService } from "../../app/rfc/rfc.service";
export declare class RfcController {
    private readonly rfcService;
    constructor(rfcService: RfcService);
    create(createRfcDto: CreateRfcDto): Promise<import("../../domain/entities/rfc/rfc-response.entity").RfcResponseEntity>;
}
