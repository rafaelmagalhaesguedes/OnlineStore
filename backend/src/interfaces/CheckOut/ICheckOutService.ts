import { ICheckOutBody, ICheckOutURL } from './ICheckOut';

export interface ICheckOutService {
  createStripeSession(items: ICheckOutBody[]): Promise<ICheckOutURL>;
}