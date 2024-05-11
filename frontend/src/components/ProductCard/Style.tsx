import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  background-color: #fff;

  width: 220px;

  a {
    text-decoration: none;
  }
`;

export const CardImg = styled.div`
  width: 220px;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  padding: 0 1rem;

  color: #333;
`;

export const CardText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;

  margin-top: 0.5rem;

  span {
    font-weight: 600;
    font-size: 1.5rem;
    color: #333;
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }
`;