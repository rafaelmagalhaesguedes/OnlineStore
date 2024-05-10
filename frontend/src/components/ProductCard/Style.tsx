import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  background-color: #fff;

  width: 200px;
`;

export const CardImg = styled.img`
  width: 200px;
  height: auto;
  border-radius: 8px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  padding: 0 1rem;
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
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border: none;
  border-radius: 8px;
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;