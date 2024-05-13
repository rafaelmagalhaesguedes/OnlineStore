import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerSuccess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
`;

export const SubTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
`;

export const LinkButton = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    text-decoration: none;
    
    button {
        padding: 0.5rem 1rem;
        background-color: #000;
        color: #fff;
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
    }
    `;
