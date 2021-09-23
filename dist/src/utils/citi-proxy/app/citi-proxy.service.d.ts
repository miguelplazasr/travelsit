import { HttpService } from "@nestjs/common";
import { LatamAuthService } from "../../latam-auth/app/latam-auth.service";
import { LatamAuthConfigService } from "../../../../config/apis/latam-auth/config.service";
import { AppConfigService } from "../../../../config/app/config.service";
export declare class CitiProxyService<T> {
    private http;
    private readonly latamAutConfig;
    private readonly latamAuthService;
    private readonly appConfigService;
    private readonly tlsReject;
    private readonly apiVersion;
    private readonly subscription;
    private readonly proxyUrl;
    constructor(http: HttpService, latamAutConfig: LatamAuthConfigService, latamAuthService: LatamAuthService, appConfigService: AppConfigService);
    all(uri: string): Promise<T>;
    post(uri: any, data: any): Promise<any>;
    process(method: any, uri: any, data?: any, options?: any): Promise<any>;
}
