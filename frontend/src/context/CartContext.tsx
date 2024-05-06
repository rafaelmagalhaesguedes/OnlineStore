import { createContext } from 'react';
import { ProductType } from '../types/ProductType';

type CartContextType = {
  items: ProductType[];
  getProductQuantity: (id: string) => number;
  addOneToCart: (id: string) => void;
  removeOneFromCart: (id: string) => void;
  deleteFromCart: (id: string) => void;
  getTotalCost: () => number;
}

export const CartContext = createContext({} as CartContextType);
