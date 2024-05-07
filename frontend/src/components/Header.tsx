import {Button, Navbar, Modal} from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartProduct } from './CartProduct';
import { FaBoxOpen, FaShoppingCart } from 'react-icons/fa';
import productService from '../services/ApiService';

export function Header() {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkout = async () => {
    try {
      const response = await productService.checkout(cart.items);
  
      if(response.url) {
        window.location.assign(response.url);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  }

  const productsCount = cart.items
    .reduce((sum, product) => sum + (product.quantity ?? 0), 0);

  return (
    <>
      <Navbar expand="sm" bg="dark" variant="dark" className="p-3">
        <Navbar.Brand href="/" style={ { display: 'flex', alignItems: 'center', gap: '0.5rem'} }>
          <h2>Simple Store</h2>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="warning" onClick={ handleShow } style={ { display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <FaShoppingCart size={ 30 } /> My Cart
            ({ productsCount })
          </Button>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={ show } onHide={ handleClose }>
          
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {productsCount > 0 ?
            <>
              <p>Items in your cart:</p>
              {cart.items.map( (currentProduct, idx) => (
                <CartProduct key={ idx } id={ currentProduct.id } quantity={ currentProduct.quantity }></CartProduct>
              ))}

              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

              <Button variant="success" onClick={ checkout }>
                Purchase items!
              </Button>
            </>
          :
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <h1 style={ { fontSize: '1.5rem', textAlign: 'center'} }>There are no items in your cart!</h1>
              <FaBoxOpen size={ 100 } />
            </div>
          }
        </Modal.Body>

      </Modal>
    </>
  )
}