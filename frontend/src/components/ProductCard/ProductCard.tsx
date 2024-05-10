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
  const { name, price, image } = product.product;

  return (
    <ProductCardContainer>
      <CardImg src={ image } />
      <CardBody>
        <CardTitle>{ name }</CardTitle>
        <CardText>
          <span>R$ { price }</span>
          {' '}
          <p>Em até 12x s/Juros</p>
        </CardText>
      </CardBody>
    </ProductCardContainer>
  );
}