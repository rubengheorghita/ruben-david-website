import React from 'react';
import styled from 'styled-components';

type HeaderProps = {
  onAccountClick: () => void;
  onCartClick: () => void;
  onSearchClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ onAccountClick, onCartClick, onSearchClick }) => {
  return (
    <HeaderContainer>
      <Logo>David & Ruben</Logo>
      <Nav>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About Us</NavItem>
        <NavItem href="/explore">Explore</NavItem>
        <NavItem href="/gallery">Gallery</NavItem>
        <NavItem href="/collaborations">Collaborations</NavItem>
      </Nav>
      <Actions>
        <Button onClick={onAccountClick}>Account</Button>
        <Button onClick={onCartClick}>Cart</Button>
        <Button onClick={onSearchClick}>Search</Button>
      </Actions>
    </HeaderContainer>
  );
};

export default Header;

// Styled Components
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 60px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  color: #222;
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;
`;

const NavItem = styled.a`
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #888;  // Add a hover effect to make the navigation links interactive.
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 15px;
`;

const Button = styled.button`
  background: none;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #555;  // Add a hover effect to make the buttons more interactive.
  }
`;