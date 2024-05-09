export interface IOrder {
  id: number;
  orderDate: Date;
  shippedDate: Date;
  customerId: number;
  status: string;
};