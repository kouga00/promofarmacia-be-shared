export interface IPharmacy {
  readonly _id?: string;
  readonly name: string;
  readonly owner: string;
  readonly address: string;
  readonly zip: string;
  readonly country: string;
  readonly province: string;
  readonly provinceInShort: string;
  readonly region: string;
  readonly nation: string;
  readonly cell: string;
  readonly lat: number;
  readonly lng: number;
  readonly coverUrl: string;
  readonly whatsapp: string;
  readonly website: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
