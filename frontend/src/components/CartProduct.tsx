import { CartContext } from '../context/CartContext';
import { ProductType } from '../types/ProductType';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';

type CartProductProps = {
  product: ProductType;
}

export function CartProduct(props: CartProductProps) {
  const { id, name, price, quantity } = props.product;
  const cart = useContext(CartContext);

  return (
    <>
      <h3>{ name }</h3>
      <p>{ quantity } total</p>
      <p>${ (quantity * price).toFixed(2) }</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
      <hr></hr>
    </>
  );
}