import { Types } from "mongoose";
export declare const PromoType: {
    readonly PRODUCT: "product";
    readonly SERVICE: "service";
};
export type TPromoType = typeof PromoType[keyof typeof PromoType];
export interface IPromo {
    readonly _id?: Types.ObjectId;
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
