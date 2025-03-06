import { HydratedDocument } from 'mongoose';
export declare class Pharmacy {
    readonly name: string;
    readonly owner: string;
    readonly address: string;
    readonly zip: string;
    readonly country: string;
    readonly province: string;
    readonly provinceInShort: string;
    readonly region: string;
    readonly nation: string;
    readonly cell: string;
    readonly lat: number;
    readonly lng: number;
    readonly coverUrl: string;
    readonly whatsapp: string;
    readonly website: string;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
}
export type PharmacyDocument = HydratedDocument<Pharmacy>;
export declare const PharmacySchema: import("mongoose").Schema<Pharmacy, import("mongoose").Model<Pharmacy, any, any, any, import("mongoose").Document<unknown, any, Pharmacy> & Pharmacy & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Pharmacy, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Pharmacy>> & import("mongoose").FlatRecord<Pharmacy> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const PharmacySchemaName = "pharmacies";
