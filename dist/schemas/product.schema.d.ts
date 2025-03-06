import { HydratedDocument } from 'mongoose';
export declare class Product {
    readonly name: string;
    readonly brand: string;
    readonly category: string;
    readonly tags: string[];
    readonly size: string;
    readonly imageUrl: string;
    readonly description: string;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
}
export type ProductDocument = HydratedDocument<Product>;
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<Product, any, any, any, import("mongoose").Document<unknown, any, Product> & Product & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Product>> & import("mongoose").FlatRecord<Product> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ProductSchemaName = "products";
