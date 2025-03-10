import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Service {
  @Prop({ type: String, required: true })
  public readonly name!: string;

  @Prop({ type: String, required: true })
  public readonly category!: string;

  @Prop({ type: [String], required: true })
  public readonly tags!: string[];

  @Prop({ type: String, required: true })
  public readonly imageUrl!: string;

  @Prop({ type: String, required: true })
  public readonly description!: string;

  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}

export type ServiceDocument = HydratedDocument<Service>;

export const ServiceSchema = SchemaFactory.createForClass(Service);
export const ServiceSchemaName = 'services';
