import { createContext } from 'react';
import { ProductType } from '../types/ProductType';

type CartContextType = {
  items: ProductType[];
  products: ProductType[];
  setProducts: (products: ProductType[]) => void;
  addOneToCart: (id: number) => void;
  removeOneFromCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
  getProductById: (id: number) => ProductType | undefined;
  getProductQuantity: (id: number) => number;
  getTotalCost: () => number;
}

export const CartContext = createContext({} as CartContextType);
