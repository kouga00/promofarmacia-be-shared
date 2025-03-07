import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Product {
  @Prop({ type: String, required: true })
  public readonly name!: string;

  @Prop({ type: String, required: true })
  public readonly brand!: string;

  @Prop({ type: String, required: true })
  public readonly category!: string;

  @Prop({ type: [String], required: true })
  public readonly tags!: string[];

  @Prop({ type: String, required: true })
  public readonly size!: string;

  @Prop({ type: String, required: true })
  public readonly imageUrl!: string;

  @Prop({ type: String, required: true })
  public readonly description!: string;

  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}

export type ProductDocument = HydratedDocument<Product>;

export const ProductSchema = SchemaFactory.createForClass(Product);
export const ProductSchemaName = 'products';
