import { Cotizacion } from "../../domain/entities/cotizacion.entity";
import { CreateQuoteDto } from "../../domain/dto/create-quote.dto";
import { CitiProxyService } from "../../../../utils/citi-proxy/app/citi-proxy.service";
import { QuoteResponse } from "../../domain/entities/quote-response.entity";
export declare class InternalService {
    private readonly _citiProxyService;
    constructor(_citiProxyService: CitiProxyService<any>);
    createQuote(createQuoteDto: CreateQuoteDto): Promise<QuoteResponse>;
    callToCrs(createQuoteDto: CreateQuoteDto, versionId: string): Promise<any>;
    callToInternal(quoteData: Cotizacion): Promise<Cotizacion>;
    private mappingQuote;
    private static getTravelerChildren;
    private static getTravelersByRange;
    private static setRange;
    private static setCountriesCollection;
}
export interface KeyValuePair {
    key: string;
    value: number;
}
