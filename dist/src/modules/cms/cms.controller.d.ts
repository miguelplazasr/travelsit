import { CmsService } from "./cms.service";
import { CreateCmsDto } from "./domain/dto/create-cms.dto";
export declare class CmsController {
    private readonly cmsService;
    constructor(cmsService: CmsService);
    findAll(): Promise<import("./domain/entities/cms.entity").Cms[]>;
    findByName(name: string): Promise<string>;
    create(createCmsDto: CreateCmsDto): Promise<import("./domain/entities/cms.entity").Cms>;
}
