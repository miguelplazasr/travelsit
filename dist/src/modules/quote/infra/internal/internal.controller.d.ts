import { InternalService } from "../../app/internal/internal.service";
import { CreateQuoteDto } from "../../domain/dto/create-quote.dto";
import { PlanResponseEntity } from "../../domain/entities/plan-response.entity";
export declare class InternalController {
    private readonly internalService;
    constructor(internalService: InternalService);
    create(createQuoteDto: CreateQuoteDto): Promise<PlanResponseEntity[]>;
}
