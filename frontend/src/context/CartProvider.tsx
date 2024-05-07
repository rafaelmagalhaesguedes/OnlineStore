import { useState } from 'react';
import { CartContext } from './CartContext';
import { ProductType } from '../types/ProductType';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cartProducts, setCartProducts] = useState<ProductType[]>(localCart);

  const addOneToCart = (id: string) => {
    const product = products.find(product => product.id === id);
    if (!product) return;

    const productIndex = cartProducts.findIndex(product => product.id === id);
    
    if (productIndex === -1) {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
      localStorage.setItem('cart', JSON.stringify([...cartProducts, { ...product, quantity: 1 }]));
    } else {
      const updatedCartProducts = [...cartProducts];
      updatedCartProducts[productIndex].quantity = updatedCartProducts[productIndex].quantity! + 1;
      setCartProducts(updatedCartProducts);
      localStorage.setItem('cart', JSON.stringify(updatedCartProducts));
    }
  };

  const removeOneFromCart = (id: string) => {
    const productIndex = cartProducts.findIndex(product => product.id === id);
    
    if (productIndex === -1) return;

    const updatedCartProducts = [...cartProducts];
    updatedCartProducts[productIndex].quantity = updatedCartProducts[productIndex].quantity! - 1;
    if (updatedCartProducts[productIndex].quantity === 0) {
      updatedCartProducts.splice(productIndex, 1);
    }
    setCartProducts(updatedCartProducts);
    localStorage.setItem('cart', JSON.stringify(updatedCartProducts));
  };

  const deleteFromCart = (id: string) => {
    const updatedCartProducts = cartProducts.filter(product => product.id !== id);
    setCartProducts(updatedCartProducts);
    localStorage.setItem('cart', JSON.stringify(updatedCartProducts));
  };

  const getProductById = (id: string) => {
    return products.find(product => product.id === id);
  }

  const getProductQuantity = (id: string) => {
    const product = cartProducts.find(product => product.id === id);
    return product?.quantity || 0;
  };

  const getTotalCost = () => {
    return cartProducts.reduce((total, product) => {
      return total + (product.price * product.quantity!);
    }, 0);
  };

  const contextValue = {
    items: cartProducts,
    products,
    setProducts,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getProductById,
    getProductQuantity,
    getTotalCost,
  }

  return (
    <CartContext.Provider value={ contextValue }>
      { children }
    </CartContext.Provider>
  );
}

export default CartProvider;
