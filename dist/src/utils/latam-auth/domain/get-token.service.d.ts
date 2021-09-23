import { LatamAuthRepository } from "./latam-auth.repository";
import { LatamAuth } from "./latam-auth.entity";
export declare class GetTokenService {
    private readonly latamAuthRepository;
    constructor(latamAuthRepository: LatamAuthRepository);
    getToken(entity: LatamAuth): Promise<void>;
}
