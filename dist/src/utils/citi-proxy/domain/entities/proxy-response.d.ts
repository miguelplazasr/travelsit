export declare abstract class ProxyResponse<T> {
    readonly isSuccess: boolean;
    readonly messages: any[];
    readonly responseData: T;
    protected constructor(responseData: T, isSuccess: boolean, messages?: any[]);
}
