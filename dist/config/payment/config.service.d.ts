import { ConfigService } from "@nestjs/config";
export declare class PaymentConfigService {
    private configService;
    constructor(configService: ConfigService);
    get cnzd(): string;
    get trc(): string;
    get paymentUrl(): string;
    get paymentUrlMigration(): string;
}
