import { createContext } from 'react';
import { ProductType } from '../types/ProductType';

type CartContextType = {
  items: ProductType[];
  products: ProductType[];
  setProducts: (products: ProductType[]) => void;
  addOneToCart: (id: string) => void;
  removeOneFromCart: (id: string) => void;
  deleteFromCart: (id: string) => void;
  getProductById: (id: string) => ProductType | undefined;
  getProductQuantity: (id: string) => number;
  getTotalCost: () => number;
}

export const CartContext = createContext({} as CartContextType);
