import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";
import { ConfigService } from "@nestjs/config";
export declare class MongooseConfigService implements MongooseOptionsFactory {
    private readonly configService;
    private readonly config;
    constructor(configService: ConfigService);
    createMongooseOptions(): Promise<MongooseModuleOptions> | MongooseModuleOptions;
}
