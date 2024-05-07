import { CartContext } from '../context/CartContext';
import { ProductType } from '../types/ProductType';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';

export function CartProduct(props: { id: string, quantity?: number }) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity || 0;
  const productData = cart.getProductById(id) as ProductType;

  return (
    <>
      <h3>{ productData.name }</h3>
      <p>{ quantity } total</p>
      <p>${ (quantity * productData.price).toFixed(2) }</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
      <hr></hr>
    </>
  );
}