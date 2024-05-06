import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import { ProductType } from '../types/ProductType';
import { useContext } from 'react';

type ProductCardProps = {
  product: ProductType;
}

export function ProductCard(product: ProductCardProps) {
  const { id, name, price, image } = product.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(id);

  return (
    <Card>
      <Card.Img className="m-2" variant="top" src={ image } style={ { alignSelf: 'center', width: '250px', height: '300px' }} />
      <Card.Body>
        <Card.Title>{ name }</Card.Title>
        <Card.Text>${ price }</Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={ Row } className="mb-3">
              <Form.Label column={ true } sm={ 6 }>Quantity: { productQuantity }</Form.Label>
              <Col sm="6">
                <Button onClick={ () => cart.addOneToCart(id) } className="mx-2">+</Button>
                <Button onClick={ () => cart.removeOneFromCart(id) } className="mx-2">-</Button>
              </Col>
            </Form>
            <Button variant="danger" onClick={ () => cart.deleteFromCart(id) }>Remove from Cart</Button>
          </>
        ) : (
          <Button variant="primary" onClick={ () => cart.addOneToCart(id) }>Add to Cart</Button>
        )}
      </Card.Body>
    </Card>
  );
}