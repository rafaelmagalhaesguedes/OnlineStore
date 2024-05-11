import { useContext, useEffect } from 'react';
import productService from '../../services/ApiService';
import { CartContext } from '../../context/CartContext';
import { Card, CardProducts, HomeContainer } from './Style';
import { ProductCard } from '../../components/ProductCard/ProductCard';

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
    <HomeContainer>
      <CardProducts>
        {products && products.map((product) => (
          <Card key={ product.id }>
            <ProductCard product={ product } />
          </Card>
        ))}
      </CardProducts>
    </HomeContainer>
  );
}
