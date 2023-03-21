export interface Address {
  id: string;
  createdAt: string;
  street: string;
  neighborhood: string;
  number: string;
  state: string;
  country: string;
}

export type UpdateAddress = Partial<Omit<Address, 'createdAt' | 'id'>>;

export interface User {
  id: string;
  createdAt: string;
  name: string;
  lastName?: string;
  photo?: string;
  phoneNumber?: string;
  address?: Array<Address>;
}

export type UpdateUser = Partial<Omit<User, 'createdAt' | 'id' | 'address'>>;
