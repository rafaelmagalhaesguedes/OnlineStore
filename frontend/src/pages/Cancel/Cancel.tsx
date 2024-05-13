import { ContainerCancel, SubTitle, Title } from './Style';

export function Cancel() {
  const handleCancel = () => {
    localStorage.removeItem('cart');
    window.location.href = '/';
  };

  return (
    <ContainerCancel>
      <Title>Cancelar compra</Title>
      <SubTitle>Você tem certeza que deseja cancelar a compra?</SubTitle>
      <button onClick={ () => handleCancel() }>Confirmar cancelamento</button>
    </ContainerCancel>
  );
}