import { PaymentService } from "../../app/payment/payment.service";
import { PaymentDataDto } from '../../domain/dto/payment/payment-data.dto';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    create(paymentData: PaymentDataDto): Promise<{
        url: string;
    }>;
}
