import { ConfigService } from "@nestjs/config";
export declare class LatamAuthConfigService {
    private configService;
    constructor(configService: ConfigService);
    get tokenUrl(): string;
    get identity(): string;
    get appId(): string;
    get appKey(): string;
    get resource(): string;
    get apiVersion(): string;
    get proxyUrl(): string;
    get subscriptionKey(): string;
}
