import { Types } from "mongoose";

export interface IProduct {
  readonly _id?: Types.ObjectId;
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
