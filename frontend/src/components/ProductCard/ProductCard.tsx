import { Link } from 'react-router-dom';
import { ProductType } from '../../types/ProductType';
import {
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  ProductCardContainer,
} from './Style';

type ProductCardProps = {
  product: ProductType;
}

export function ProductCard(product: ProductCardProps) {
  const { id, name, price, image } = product.product;

  return (
    <ProductCardContainer>
      <Link to={`/product-details/${id}`}>
        <CardImg>
          <img src={ image } alt={ name } />
        </CardImg>
        <CardBody>
          <CardTitle>{ name }</CardTitle>
          <CardText>
            <span>R$ { price }</span>
            {' '}
            <p>Em até 12x s/Juros</p>
          </CardText>
        </CardBody>
      </Link>
    </ProductCardContainer>
  );
}