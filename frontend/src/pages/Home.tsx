import { Row, Col } from 'react-bootstrap';
import { ProductCard } from '../components/ProductCard';
import productService from '../services/ApiService';
import { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

export function Home() {
  const { products, setProducts } = useContext(CartContext);

  useEffect(() => {
    const handleProducts = async () => {
      const response = await productService.getProducts();
      setProducts(response);
    };
    handleProducts();
  }, [setProducts]);

  return (
    <>
      <h1 className="p-3" style={ { textAlign: 'center'} }>Welcome to the store!</h1>
      <Row xs={ 1 } md={ 2 } lg={ 3 } className="g-4">
        {products && products.map((product, idx) => (
          <Col align="center" key={ idx }>
            <ProductCard product={ product } />
          </Col>
        ))}
      </Row>
    </>
  );
}
