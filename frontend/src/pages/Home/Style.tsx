import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin: 2rem 0;

  width: 80%;
  height: 100%;
`;

export const CardProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;

  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem 1rem 0 1rem;
  border-radius: 8px;
  background-color: #fff;
`;