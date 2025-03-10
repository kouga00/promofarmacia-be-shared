import { HydratedDocument } from 'mongoose';
import { TAuthProvider, TUserRole } from '../interfaces/user.interface';
export declare class User {
    readonly authProviderId: string;
    readonly authProvider: TAuthProvider;
    readonly role: TUserRole;
    readonly firstname: string;
    readonly lastname: string;
    readonly tcAcceptedVersion: boolean;
    readonly newsletterAccepted: boolean;
    readonly notificationsEnabled: boolean;
    readonly address: string;
    readonly zip?: string;
    readonly country?: string;
    readonly province?: string;
    readonly provinceInShort?: string;
    readonly region?: string;
    readonly nation?: string;
    readonly phone: string;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
}
export type UserDocument = HydratedDocument<User>;
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User> & User & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const UserSchemaName = "users";
