export const UserRole = {
  ADMIN: 'admin',
  OPERATOR: 'operator',
  CLIENT: 'client',
  COMPANY: 'company',
} as const;

export type TUserRole = (typeof UserRole)[keyof typeof UserRole];

export const AuthProvider = {
  AUTH0: 'auth0',
} as const;

export type TAuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider];

export interface IUser {
  readonly authProviderId: string;
  readonly authProvider: TAuthProvider;
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
