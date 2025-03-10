import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';
import { PromoType, TPromoType } from '../interfaces/promo.interface';
import { ProductSchemaName } from './product.schema';
import { PharmacySchemaName } from './pharmacy.schema';
import { ServiceSchemaName } from './service.schema';

@Schema({ versionKey: false, timestamps: true })
export class Promo {
  @Prop({ type: String, required: true })
  public readonly title!: string;

  @Prop({ type: String, required: true })
  public readonly description!: string;

  @Prop({ type: Number, required: true })
  public readonly discount!: number;

  @Prop({ type: String, required: true })
  public readonly oldPrice!: string;

  @Prop({ type: String, required: true })
  public readonly newPrice!: string;

  @Prop({ type: Date, required: true })
  public readonly startDate!: Date;

  @Prop({ type: Date, required: true })
  public readonly endDate!: Date;

  @Prop({ type: String, enum: PromoType, required: true })
  public readonly type!: TPromoType;

  @Prop({ type: SchemaTypes.ObjectId, ref: PharmacySchemaName, required: true })
  public readonly pharmacyId!: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: ProductSchemaName, required: false })
  public readonly productId?: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: ServiceSchemaName, required: false })
  public readonly serviceId?: Types.ObjectId;

  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}

export type PromoDocument = HydratedDocument<Promo>;

export const PromoSchema = SchemaFactory.createForClass(Promo);
export const PromoSchemaName = 'promos';
