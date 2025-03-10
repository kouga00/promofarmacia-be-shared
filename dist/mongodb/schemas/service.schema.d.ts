import { HydratedDocument } from 'mongoose';
export declare class Service {
    readonly name: string;
    readonly category: string;
    readonly tags: string[];
    readonly imageUrl: string;
    readonly description: string;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
}
export type ServiceDocument = HydratedDocument<Service>;
export declare const ServiceSchema: import("mongoose").Schema<Service, import("mongoose").Model<Service, any, any, any, import("mongoose").Document<unknown, any, Service> & Service & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Service, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Service>> & import("mongoose").FlatRecord<Service> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ServiceSchemaName = "services";
