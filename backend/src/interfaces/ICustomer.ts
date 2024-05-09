import { Identifiable } from '.';

export interface ICustomer extends Identifiable {
  userId: number;
  numberPhone: string;
  secondaryEmail: string;
};