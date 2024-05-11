import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 80px;

  background-color: #000;
`;

export const HeaderNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
    
  width: 80%;
    
  padding: 0 1rem;
`;

export const NavbarBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  img {
    width: 50px;
    height: 50px;
  }

  h2 {
    padding-top: 10px;
    color: white;
    font-weight: 700;
  }
`;

export const NavbarCollapse = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem
`;

export const NavbarText = styled.div`
  a {
    font-weight: 500;
    color: white;
    margin-left: 1rem;
    text-decoration: none;
  }
`;

export const CardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;

  cursor: pointer;

  svg {
    color: white;
  }

  span {
    color: white;
    font-weight: 700;
    font-size: 0.9rem;

    position: relative;
    top: -1rem;

    background-color: #fff;
    color: #000;
    border-radius: 100%;

    width: 2rem;
  }
`;