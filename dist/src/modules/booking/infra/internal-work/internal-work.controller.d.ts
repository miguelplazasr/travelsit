import { InternalWorkService } from "../../app/internal-work/internal-work.service";
import { CreateInternalWorkDto } from "../../domain/dto/internal-work/create-internal-work.dto";
export declare class InternalWorkController {
    private readonly internalWorkService;
    constructor(internalWorkService: InternalWorkService);
    create(createInternalWorkDto: CreateInternalWorkDto): Promise<{
        internal: any;
        detailsAmount: any;
    }>;
}
