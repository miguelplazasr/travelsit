import { PaymentDataDto } from '../../domain/dto/payment/payment-data.dto';
import { PaymentConfigService } from "../../../../../config/payment/config.service";
export declare class PaymentService {
    private readonly paymentConfigService;
    private readonly cnzd;
    private readonly trc;
    private readonly paymentUrl;
    private readonly paymentUrlMigration;
    constructor(paymentConfigService: PaymentConfigService);
    createPaymentConfig(paymentData: PaymentDataDto): Promise<{
        url: string;
    }>;
    private getUrlIframe;
    private getConfiguration;
}
