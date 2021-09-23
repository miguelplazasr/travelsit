export declare class LatamAuthResponseEntity {
    token_type: string;
    expires_in: number;
    ext_expires_in: number;
    expires_on: number;
    not_before: number;
    resource: string;
    access_token: string;
    constructor(obj: LatamAuthResponse);
}
export interface LatamAuthResponse {
    token_type: string;
    expires_in: number;
    ext_expires_in: number;
    expires_on: number;
    not_before: number;
    resource: string;
    access_token: string;
}
