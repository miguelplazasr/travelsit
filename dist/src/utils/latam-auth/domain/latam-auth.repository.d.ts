import { LatamAuth } from "./latam-auth.entity";
import { LatamAuthResponse } from "./latam-auth-response.entity";
export interface LatamAuthRepository {
    getToken(entity: LatamAuth): Promise<LatamAuthResponse>;
}
