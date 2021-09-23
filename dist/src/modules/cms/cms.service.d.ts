import { Cms } from "./domain/entities/cms.entity";
import { Model } from 'mongoose';
import { CreateCmsDto } from "./domain/dto/create-cms.dto";
export declare class CmsService {
    private readonly cmsModel;
    constructor(cmsModel: Model<Cms>);
    findAll(): Promise<Cms[]>;
    findByName(name: string): Promise<string>;
    findById(id: string): Promise<Cms>;
    create(createCmsDto: CreateCmsDto): Promise<Cms>;
    remove(id: string): Promise<Cms>;
}
