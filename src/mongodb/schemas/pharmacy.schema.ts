import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Pharmacy {
  @Prop({ type: String, required: true })
  public readonly name!: string;

  @Prop({ type: String, required: true })
  public readonly owner!: string;

  @Prop({ type: String, required: true })
  public readonly address!: string;

  @Prop({ type: String, required: true })
  public readonly zip!: string;

  @Prop({ type: String, required: true })
  public readonly country!: string;

  @Prop({ type: String, required: true })
  public readonly province!: string;

  @Prop({ type: String, required: true })
  public readonly provinceInShort!: string;

  @Prop({ type: String, required: true })
  public readonly region!: string;

  @Prop({ type: String, required: true })
  public readonly nation!: string;

  @Prop({ type: String, required: true })
  public readonly cell!: string;

  @Prop({ type: Number, required: true })
  public readonly lat!: number;

  @Prop({ type: Number, required: true })
  public readonly lng!: number;

  @Prop({ type: String, required: true })
  public readonly coverUrl!: string;

  @Prop({ type: String, required: true })
  public readonly whatsapp!: string;

  @Prop({ type: String, required: true })
  public readonly website!: string;

  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}

export type PharmacyDocument = HydratedDocument<Pharmacy>;

export const PharmacySchema = SchemaFactory.createForClass(Pharmacy);
export const PharmacySchemaName = 'pharmacies';
