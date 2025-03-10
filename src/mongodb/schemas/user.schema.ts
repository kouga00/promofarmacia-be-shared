import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ProviderAuth, TProviderAuth, TUserRole, UserRole } from '../interfaces/user.interface';

@Schema({ versionKey: false, timestamps: true })
export class User {
  @Prop({ type: String, required: true })
  public readonly providerAuthId!: string;

  @Prop({ type: String, enum: ProviderAuth, required: true })
  public readonly providerAuthName!: TProviderAuth;

  @Prop({ type: String, enum: UserRole, required: true })
  public readonly role!: TUserRole;

  @Prop({ type: String, required: true })
  public readonly firstname!: string;

  @Prop({ type: String, required: true })
  public readonly lastname!: string;

  @Prop({ type: Boolean, required: true })
  public readonly tcAcceptedVersion!: boolean;

  @Prop({ type: Boolean, required: true })
  public readonly newsletterAccepted!: boolean;

  @Prop({ type: Boolean, required: true })
  public readonly notificationsEnabled!: boolean;

  @Prop({ type: String, required: true })
  public readonly address!: string;

  @Prop({ type: String, required: true })
  public readonly zip?: string;

  @Prop({ type: String, required: true })
  public readonly country?: string;

  @Prop({ type: String, required: true })
  public readonly province?: string;

  @Prop({ type: String, required: true })
  public readonly provinceInShort?: string;

  @Prop({ type: String, required: true })
  public readonly region?: string;

  @Prop({ type: String, required: true })
  public readonly nation?: string;

  @Prop({ type: String, required: true })
  public readonly phone!: string;

  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}

export type UserDocument = HydratedDocument<User>;

export const UserSchema = SchemaFactory.createForClass(User);
export const UserSchemaName = 'users';
