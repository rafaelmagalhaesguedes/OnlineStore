import { Identifiable } from ".";

export interface IOrder extends Identifiable {
  orderDate: Date;
  shippedDate: Date;
  customerId: number;
  status: string;
};

export interface IOrderCreate {
  orderDate: Date;
  shippedDate: Date;
  customerId: number;
  status: string;
};