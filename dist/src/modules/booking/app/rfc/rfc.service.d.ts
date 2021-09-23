import { CreateRfcDto } from "../../domain/dto/create-rfc.dto";
import { RfcResponseEntity } from "../../domain/entities/rfc/rfc-response.entity";
import { CitiProxyService } from "../../../../utils/citi-proxy/app/citi-proxy.service";
import { Rfc } from "../../domain/entities/rfc/rfc.entity";
export declare class RfcService {
    private readonly _citiProxyService;
    constructor(_citiProxyService: CitiProxyService<Rfc>);
    callToRfc(createRfcDto: CreateRfcDto): Promise<RfcResponseEntity>;
    getRfc(createRfcDto: CreateRfcDto): Promise<any>;
    private static splitResponse;
}
