import { HydratedDocument, Types } from 'mongoose';
import { TPromoType } from '../interfaces/promo.interface';
export declare class Promo {
    readonly title: string;
    readonly description: string;
    readonly discount: number;
    readonly oldPrice: string;
    readonly newPrice: string;
    readonly startDate: Date;
    readonly endDate: Date;
    readonly type: TPromoType;
    readonly pharmacyId: Types.ObjectId;
    readonly productId?: Types.ObjectId;
    readonly serviceId?: Types.ObjectId;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
}
export type PromoDocument = HydratedDocument<Promo>;
export declare const PromoSchema: import("mongoose").Schema<Promo, import("mongoose").Model<Promo, any, any, any, import("mongoose").Document<unknown, any, Promo> & Promo & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Promo, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Promo>> & import("mongoose").FlatRecord<Promo> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const PromoSchemaName = "promos";
