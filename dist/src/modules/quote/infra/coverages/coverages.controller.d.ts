import { CoveragesService } from "../../app/coverages/coverages.service";
import { GenerateCoveragesDto } from "../../domain/dto/generate-coverages.dto";
export declare class CoveragesController {
    private readonly coverageService;
    constructor(coverageService: CoveragesService);
    generate(generateCoveragesDto: GenerateCoveragesDto): Promise<any>;
}
