import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { ProductType } from '../../types/ProductType';
import { CartContext } from '../../context/CartContext';
import {
  Button,
  Content,
  Description,
  Details,
  Image,
  Name,
  ProductDetailsContainer,
  Title,
  Total,
} from './Style';

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const cart = useContext(CartContext);

  const productQuantity = cart.getProductQuantity(Number(id));
  
  const product = cart.products.find(product => product.id === Number(id)) as ProductType;

  return (
    <ProductDetailsContainer>
      <Content>
        <Image>
          <img src={ product.image } alt={ product?.name } />
        </Image>

        <Details>
          <div>
            <Button className="btn-back" onClick={ () => window.history.back() }>
              <FaArrowLeft />
              Continuar comprando
            </Button>
          </div>

          <Title>
            <h1>Detalhes do Produto</h1>
            <hr />
          </Title>
          <Name>
            <h2>{ product.name }</h2>
          </Name>

          <Description>
            <p><span>Marca:</span> {product.brand}</p>
            <p><span>Preço:</span> {product.price}</p>
            <p><span>Quantidade em estoque:</span> { product.quantity }</p>
            <p><span>Descrição:</span> { product.description }</p>
          </Description>
          
          <hr />

          <Total>
            {productQuantity > 0 ?
              <>
                <div>
                  <button onClick={ () => cart.removeOneFromCart(product.id) }>-</button>
                  <span>{ productQuantity }</span>
                  <button onClick={ () => cart.addOneToCart(product.id) }>+</button>
                </div>
                <Button onClick={ () => cart.deleteFromCart(product.id) }>Remover items</Button>
              </>
            :
              <Button onClick={ () => cart.addOneToCart(product.id) }>Adicionar ao carrinho</Button>
            }
          </Total>
        </Details>
      </Content>
    </ProductDetailsContainer>
  );
}