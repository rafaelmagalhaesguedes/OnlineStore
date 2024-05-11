import styled from 'styled-components';

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  width: 80%;
`;

export const Title = styled.div`
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  gap: 2rem;
`;

export const Image = styled.div`
  width: 30%;
  display: flex;

  img {
    width: 400px;
    height: 500px;
    border-radius: 10px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  align-self: flex-start;

  width: 60%;

  .btn-back {
    background: transparent;
    color: #000;
    border: none;
    border-radius: 5px;
    padding: 1rem 0;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  width: 100%;

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

export const Description = styled.div`
  margin-top: 1rem;

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  span {
    font-weight: bold;
    margin-right: 0.5rem;
  }
  
`;

export const Total = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100px;

  justify-content: space-between;
  margin: 1rem 0;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    margin-bottom: 1rem;

    width: 100%;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }

  span {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const Button = styled.button`
padding: 0.5rem 1rem;
border: none;
border-radius: 5px;
background-color: #000;
color: #fff;
cursor: pointer;
`;
  