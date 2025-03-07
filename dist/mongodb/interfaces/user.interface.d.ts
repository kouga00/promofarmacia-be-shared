export declare const UserRole: {
    readonly ADMIN: "admin";
    readonly OPERATOR: "operator";
    readonly CLIENT: "client";
    readonly COMPANY: "company";
};
export type TUserRole = typeof UserRole[keyof typeof UserRole];
export interface IUser {
    readonly providerAuthId: string;
    readonly providerAuthName: 'auth0';
    readonly firstname: string;
    readonly lastname: string;
    readonly role: TUserRole;
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
