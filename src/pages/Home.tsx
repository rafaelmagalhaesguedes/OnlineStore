import { Row, Col } from 'react-bootstrap';
import { productsArray } from '../utils/productStore';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  return (
    <>
      <h1 className="p-3" style={ { textAlign: 'center'} }>Welcome to the store!</h1>
      <Row xs={ 1 } md={ 2 } lg={ 3 } className="g-4">
        {productsArray.map((product, idx) => (
          <Col align="center" key={ idx }>
            <ProductCard product={ product } />
          </Col>
        ))}
      </Row>
    </>
  );
}
