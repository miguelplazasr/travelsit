import { CitiProxyService } from "../../../../utils/citi-proxy/app/citi-proxy.service";
import { InternalWork } from "../../domain/entities/internal-work/internal-work.entity";
import { CreateInternalWorkDto } from "../../domain/dto/internal-work/create-internal-work.dto";
export declare class InternalWorkService {
    private readonly _citiProxyService;
    constructor(_citiProxyService: CitiProxyService<InternalWork>);
    createInternalWork(createInternalWorkDto: CreateInternalWorkDto): Promise<{
        internal: any;
        detailsAmount: any;
    }>;
    callToInternalWork(internalWorkModel: InternalWork): Promise<InternalWork>;
    private static mappingInternalWork;
    private callToDetailsAmount;
}
