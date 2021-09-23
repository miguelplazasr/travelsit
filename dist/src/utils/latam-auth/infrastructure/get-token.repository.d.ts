import { LatamAuth } from "../domain/latam-auth.entity";
import { LatamAuthRepository } from "../domain/latam-auth.repository";
import { LatamAuthResponse } from "../domain/latam-auth-response.entity";
export declare class GetTokenRepository implements LatamAuthRepository {
    getToken(entity: LatamAuth): Promise<LatamAuthResponse>;
}
