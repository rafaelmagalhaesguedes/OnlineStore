import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}