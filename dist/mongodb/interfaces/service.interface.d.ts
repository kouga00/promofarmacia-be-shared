import { Types } from "mongoose";
export interface IService {
    readonly _id?: Types.ObjectId;
    readonly name: string;
    readonly category: string;
    readonly tags: string[];
    readonly imageUrl: string;
    readonly description: string;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
}
