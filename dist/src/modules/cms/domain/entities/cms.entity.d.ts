import { Document } from 'mongoose';
export declare class Cms extends Document {
    name: string;
    data: string;
    createdAt: string;
    updatedAt: string;
}
export declare const CmsSchema: import("mongoose").Schema<Cms, import("mongoose").Model<any, any, any>, undefined>;
