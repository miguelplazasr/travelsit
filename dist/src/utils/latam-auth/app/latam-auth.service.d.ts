import { HttpService } from "@nestjs/common";
import { LatamAuthConfigService } from "../../../../config/apis/latam-auth/config.service";
export declare class LatamAuthService {
    private http;
    private readonly proxyConfigService;
    private readonly appId;
    private readonly appKey;
    private readonly resource;
    private readonly apiVersion;
    private readonly identity;
    private readonly tokenUrl;
    constructor(http: HttpService, proxyConfigService: LatamAuthConfigService);
    getToken(): Promise<string>;
}
