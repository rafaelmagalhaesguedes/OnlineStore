import { Button, Navbar, Modal} from 'react-bootstrap';
import { useState, useContext } from 'react';
import { FaBoxOpen, FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import productService from '../../services/ApiService';
import { CartProduct } from '../CartProduct';
import logo from '../../assets/images/icons/logo.svg';
import { CardButton, HeaderContainer, HeaderNavbar, NavbarBrand, NavbarCollapse, NavbarText } from './Style';

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
    <HeaderContainer>
      <HeaderNavbar>
        <NavbarBrand>
          <img src={ logo } alt="Cell Store" />
          <h2>Cell Store</h2>
        </NavbarBrand>
        <Navbar.Toggle />
        <NavbarCollapse>
          <NavbarText>
            <a href="/login">Login</a>
          </NavbarText>
          <NavbarText>
            <a href="/register">Register</a>
          </NavbarText>
          <CardButton onClick={ handleShow }>
            <FaShoppingCart size={ 25 } />
            <span>{ productsCount }</span>
          </CardButton>
        </NavbarCollapse>
      </HeaderNavbar>

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
    </HeaderContainer>
  )
}