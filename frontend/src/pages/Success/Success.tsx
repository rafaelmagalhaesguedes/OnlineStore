import { useEffect } from 'react';
import { ContainerSuccess, LinkButton, SubTitle, Title } from './Style';

export function Success() {

  useEffect(() => {
    const handleClearCart = () => {
      localStorage.removeItem('cart');
    };
    handleClearCart();
  }, []);

  return (
    <ContainerSuccess>
      <Title>Pagamento Realizado com Sucesso!</Title>
      <SubTitle>Seu pagamento foi processado!</SubTitle>
      <LinkButton to="/">
        <button>Ver meus pedidos</button>
        <button>Continuar Comprando</button>
      </LinkButton>
    </ContainerSuccess>
  );
}