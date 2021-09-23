export declare class LatamAuthEntity {
    tokenUrl: string;
    identity: string;
    appId: string;
    appKey: string;
    resource: string;
    apiVersion: number;
    constructor(obj: LatamAuth);
}
export interface LatamAuth {
    tokenUrl: string;
    identity: string;
    appId: string;
    appKey: string;
    resource: string;
    apiVersion: number;
}
