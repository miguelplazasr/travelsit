import { LatamAuthService } from "../../latam-auth/app/latam-auth.service";
export declare class CitiProxyController {
    private readonly apiProxy;
    constructor(apiProxy: LatamAuthService);
    token(): Promise<string>;
}
