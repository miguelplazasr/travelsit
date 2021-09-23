import { Plan } from "./plan-response.entity";
import { InternalWork } from "../../../booking/domain/entities/internal-work/internal-work.entity";
export declare class QuoteResponseEntity {
}
export interface QuoteResponse {
    internal: InternalWork;
    plans: Plan[];
    versionId: number;
}
